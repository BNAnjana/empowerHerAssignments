import express from "express";
import bcrypt from "bcrypt";
import supabase from "./supabase.config.js";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // Validation
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) {
      throw error;
    }

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        message: "Name query parameter is required"
      });
    }

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

app.listen(3000, () => {
    console.log("Server is running");
});