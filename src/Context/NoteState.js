import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "https://bhrgvnotesbackend.onrender.com"; // No trailing space
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No auth token found");

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Get notes failed:", error);
      // Optionally set an error state or alert user
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No auth token found");

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const note = await response.json();
      setNotes((prevNotes) => [...prevNotes, note]); // Functional update
    } catch (error) {
      console.error("Add note failed:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No auth token found");

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const json = await response.json();
      console.log("Delete response:", json);

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Delete note failed:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No auth token found");

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const json = await response.json();
      console.log("Update response:", json);

      // Update state functionally
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
    } catch (error) {
      console.error("Edit note failed:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
