import express from "express";
import { readFileSync, writeFileSync } from "fs";

const app=express();

app.use(express.json());

function readData() {
    const data = readFileSync("db.json","utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    writeFileSync("db.json",JSON.stringify(data,null,2));
}

// add user
app.post("/students",(req,res)=>{
    const data = readData();
    data.students.push(req.body);
    writeData(data);
    res.send("student is added");
})

//get user
app.get("/students",(req,res)=>{   //dynamic routing
    const data = readData();
    const students = data.students;
    if (!students || students.length === 0) {
        return res.status(404).send("No students found");
    }
    res.json(students);
})

// update user
app.put("/students/:id",(req,res)=>{   //dynamic routing
    const data=readData();
    const student=data.students.find(u=>u.id==req.params.id);  // id true
    if(!student) return res.send("student not found");  // false
    // Update only provided fields
    const { name, course, year } = req.body;
    if (name) student.name = name;
    if (course) student.course = course;
    if (year) student.year = year;

    writeData(data);

    res.json({
        message: "Student updated successfully",
        student
    });
})

// delete user
app.delete("/students/:id",(req,res)=>{
    const data = readData();
    const student = data.students.find(u => u.id == req.params.id);

    if (!student) return res.status(404).send("Student not found");

    data.students = data.students.filter(u => u.id != req.params.id);
    writeData(data);

    res.json({
        message: "Student deleted successfully",
        student
    });
})

app.listen(3000,()=>{
    console.log("Server started on http://localhost:3000");
})