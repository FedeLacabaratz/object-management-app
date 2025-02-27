import React, { createContext, useState, useContext, useEffect } from "react";
import { ObjectType } from "../types/interfaces";

interface ContextProps {
  objects: ObjectType[];
  filteredObjects: ObjectType[];
  currentObject: ObjectType | null;
  setFilteredObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>;
  setCurrentObject: React.Dispatch<React.SetStateAction<ObjectType | null>>;
  addObject: (object: ObjectType) => void;
  editObject: (id: string, updatedObject: ObjectType) => void;
  deleteObject: (id: string) => void;
}

const ObjectContext = createContext<ContextProps | undefined>(undefined);

interface ObjectProviderProps {
  children: React.ReactNode;
}

// This is where all our objects and methods to mutate them are being triggered and retrieved from.
export const ObjectProvider: React.FC<ObjectProviderProps> = ({ children }) => {
  const [objects, setObjects] = useState<ObjectType[]>(JSON.parse(sessionStorage.getItem("objects") || "[]"));
  const [filteredObjects, setFilteredObjects] = useState<ObjectType[]>(objects);
  const [currentObject, setCurrentObject] = useState<ObjectType | null>(null);

  useEffect(() => {
    sessionStorage.setItem("objects", JSON.stringify(objects));
    setFilteredObjects(objects); // This will ensure that filteredObjects is in synch with objects
  }, [objects]);

  const addObject = (object: ObjectType) => {
    const updatedObjects = [...objects, object];
    setObjects(updatedObjects);
  };

  const editObject = (id: string, updatedObject: ObjectType) => {
    const updatedObjects = objects.map((obj) =>
      obj.id === id ? { ...obj, ...updatedObject } : obj
    )
    setObjects(updatedObjects);
  };

  const deleteObject = (id: string) => {
    const updatedObjects = objects.filter((obj) => obj.id !== id);
    setObjects(updatedObjects);
  };

  return (
    <ObjectContext.Provider
      value={{
        objects,
        filteredObjects,
        currentObject,
        setFilteredObjects,
        setCurrentObject,
        addObject,
        editObject,
        deleteObject
      }}
    >
      {children}
    </ObjectContext.Provider>
  );
};

export const useObjects = () => {
  const context = useContext(ObjectContext);
  if (!context) {
    throw new Error("useObjects must be used within an ObjectProvider");
  }
  return context;
};
