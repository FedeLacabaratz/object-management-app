import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useObjects } from "../context/Context";
import { ObjectType } from "../types/interfaces";
import '../styles/form.scss';

const Form: React.FC = () => {
  const { addObject, editObject, currentObject, setCurrentObject } = useObjects();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("Desk");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Load data when currentObject changes in our context
  useEffect(() => {
    if (currentObject) {
      setName(currentObject.name);
      setDescription(currentObject.description);
      setType(currentObject.type);
      setIsEditing(true); // Enter edition mode
    }
  }, [currentObject]);

  // Clean the form after creating or editing
  const clearForm = () => {
    setName("");
    setDescription("");
    setType("Desk");
    setIsEditing(false);
    setCurrentObject(null); // Clean currentObject after editing
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newObject: ObjectType = {
      id: currentObject ? currentObject.id : Date.now().toString(),
      name,
      description,
      type,
    };

    if (isEditing && currentObject) {
      // If we are editing we'll call editObject
      editObject(currentObject.id, newObject);
    } else {
      // If we are creating we'll call addObject
      addObject(newObject);
    }

    clearForm(); // clean the form after creating or editing
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <FormControl fullWidth required>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Type"
        >
          <MenuItem value="Desk">Desk</MenuItem>
          <MenuItem value="Computer">Computer</MenuItem>
          <MenuItem value="Keyboard">Keyboard</MenuItem>
          <MenuItem value="Server">Server</MenuItem>
          <MenuItem value="Human">Human</MenuItem>
        </Select>
      </FormControl>
      <Button className="form-button" type="submit" fullWidth>
        {isEditing ? "Edit Object" : "Create Object"}
      </Button>
    </form>
  );
};

export default Form;
