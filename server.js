import express from 'express';
import axios from 'axios';
import multer from 'multer';

const app = express();

/**
 ... express.js boilerplate
 routes, middlewares, helpers, loggers, etc
**/

// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
const storage = multer.diskStorage({
  destination: './upload',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
  
});

const upload = multer({ storage });


// express route where we receive files from the client
// passing multer middleware
app.post('/upload', upload.single('myImage'), (req, res) => {
const file = req.file; // file passed from client
const meta = req.body; // all other values passed from the client, like name, etc..
 
console.log('server-side:', file);
console.log('server-side:', meta);
});