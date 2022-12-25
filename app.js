import express from 'express';          //because in package.json we have put type:'module' instead of 'common'

import User from "./routers/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
// useTempFiles: true, yani cloudinary use ni krna to hamare directory me hi temp folder me store hote rehega
app.use(cors());

app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});
