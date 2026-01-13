import express from "express";
import os from "os";
import dns from "dns";
import { readFileData } from "./read.js";

const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send('Test route is working!')
});

app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

app.get("/systemdetails", (req, res) => {
  const systemDetails = {
    platform: os.platform(),
    totalMemory: `${Math.round(os.totalmem() / 1024 ** 3)} GB`,
    freeMemory: `${Math.round(os.freemem() / 1024 ** 3)} GB`,
    cpuModel: os.cpus()[0].model,
  };

  res.json(systemDetails);
});

app.get("/getip", (req, res) => {
    const hostname = "masaischool.com";
  dns.lookup(hostname, (err, address) => {
    if (err) {
      res.status(500).send("Error fetching IP address");
    } else {
        res.json({
                hostname: hostname,
                ipAddress: address
            });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
