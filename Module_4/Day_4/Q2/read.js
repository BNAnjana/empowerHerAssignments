import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Needed in ESM to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readFileData() {
    const filePath = path.join(__dirname, "Data.txt");
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.error("Error reading file:", err);
        throw err;
    }
}
