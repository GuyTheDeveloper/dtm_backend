import express from "express";
import cors from "cors";
import { PORT } from "./config/app.config.js";
import modules from "./modules/index.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(modules);

app.listen(PORT, () => console.log(`🚀 server ready at *${PORT}`));
