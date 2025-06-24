import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router()

//get all
router.get("/", getAllNotes);
//create
router.post("/", createNote);
//update
router.put("/:id", updateNote); 
//delete
router.delete("/:id", deleteNote);

export default router;


