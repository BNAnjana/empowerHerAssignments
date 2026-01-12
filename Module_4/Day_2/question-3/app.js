// Part A - OS Module

import os from "os";

console.log("Free memory:", os.freemem());
console.log("Total CPU cores:", os.cpus().length);

// Part B - File System CRUD Operations

import fs from "fs/promises";

try {
  await fs.writeFile("data.txt", "Hello World\n");
  console.log("data.txt created");

  await fs.writeFile(
    "Readme.md",
    "## This is first line in Readme\n"
  );
  console.log("Readme.md created");

  const data = await fs.readFile("data.txt", "utf8");
  console.log("Content in data.txt is:");
  console.log(data);

  await fs.appendFile("data.txt", "This is second line\n");
  console.log("Content appended to data.txt");

  await fs.unlink("Readme.md");
  console.log("Readme.md deleted");

} catch (err) {
  console.error("Error:", err);
}
