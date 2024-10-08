import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Route to get all books
router.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route to get book by id
  router.get('/:id',async (req,res)=>{
      try {
          const {id} = req.params;
          const book = await Book.findById(id);
          return res.status(200).json(book);
      } catch (error) {
          res.status(500).send({message:error.message});
      }
  })
  
  
  //Route to create a new book entry
  router.post("/", async (req, res) => {
    try {
      if (!req.body.name || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({ message: "Send all the fields" });
      }
      const newBook = {
        name: req.body.name,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  
  //find and update a book
  router.put('/:id',async (req,res)=>{
      try {
          if (!req.body.name || !req.body.author || !req.body.publishYear) {
              return res.status(400).send({ message: "Send all the fields" });
            }
            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id,req.body);
            if(!result){
             return res.status(404).send({message:"Id not found"});
            }
            return res.status(200).send({message:"Book updated successfully"})
  
      } catch (error) {
          res.status(500).send({message:error.message});
      }
  })
  
  //find by id and delete
  router.delete('/:id',async (req,res)=>{
      try {
          const {id}=req.params;
          const result = await Book.findByIdAndDelete(id)
          if(!result){
             return res.status(404).send({message:"Book not found"});
          }
          return res.status(200).send({message:"Book deleted successfully"})
      } catch (error) {
          res.status(500).send({message:error.message});
          
      }
  })


  export default router;