import React from "react"
import { Card, CardContent, Button, Typography } from "@mui/material"
import { useObjects } from "../context/Context"
import { ObjectType } from "../types/interfaces"
import "../styles/list.scss"

//this component will manage que middle box which shows the objects created and available in session storage
const List: React.FC = () => {
  const { filteredObjects, setCurrentObject, deleteObject } = useObjects()

  const handleEdit = (object: ObjectType) => {
    setCurrentObject(object)
  }

  const handleDelete = (id: string) => {
    deleteObject(id)
  }

  return (
    <div className="list-container">
      {filteredObjects.map((object) => (
        <Card
          className="card"
          key={object.id}
          variant="outlined"
          style={{ margin: "10px", padding: "10px" }}
        >
          <CardContent>
            <Typography variant="h6">{object.name}</Typography>
            <Typography variant="body2">{object.description}</Typography>
            <Typography variant="body2">{object.type}</Typography>
            <div className="list-buttons">
              <Button
                className="list-button"
                style={{ marginRight: "10px" }}
                onClick={() => handleEdit(object)}
              >
                Edit
              </Button>
              <Button
                className="list-button"
                onClick={() => handleDelete(object.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default List
