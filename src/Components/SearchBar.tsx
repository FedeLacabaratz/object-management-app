import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useObjects } from "../context/Context";
import '../styles/searchBar.scss';

//This is our main search component made with autocomplete + clear btn
const SearchBar: React.FC = () => {
  const { objects, setFilteredObjects } = useObjects();
  const [filter, setFilter] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
    setFilter(newValue || "");
  };

  const handleClearFilters = () => {
    setFilter("");
  };

  useEffect(() => {
    if (filter) {
      const filteredObjects = objects.filter((obj) =>
        obj.name.toLowerCase().includes(filter.toLowerCase()) ||
        obj.description.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredObjects(filteredObjects); // Set out objects filtered within our context
    } else {
      setFilteredObjects(JSON.parse(sessionStorage.getItem("objects") || "[]")); // Showing all objects if no filter exists
    }
  }, [filter, objects, setFilteredObjects]);

  return (
    <div className="search-container" style={{ marginBottom: "20px" }}>
      <Autocomplete
        freeSolo
        className="search-input"
        options={objects.map((object) => object.name || object.description)} // Search by name OR description filters our selectable options
        value={filter}
        disableClearable={true}
        onInputChange={handleSearchChange}
        renderInput={(params) => <TextField {...params} label="Search by Name or Description" variant="outlined" fullWidth />}
      />
      <Button className="clear-button" onClick={handleClearFilters} style={{ marginTop: "10px" }}>
        Clear Filters
      </Button>
    </div>
  );
};

export default SearchBar;

