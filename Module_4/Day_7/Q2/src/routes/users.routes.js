import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cloudinary from "../config/cloudinary.config.js";

import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!req.file) {
        return res.status(400).json({
          error: "Profile image is required"
        });
      }

      // upload to cloudinary
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        { folder: "profiles" }
      );

      const db = readDB();

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        profilePic: uploadResult.secure_url
      };

      db.users.push(newUser);
      writeDB(db);

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          profilePic: newUser.profilePic
        }
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Something went wrong"
      });
    }
  }
);

export default router;
