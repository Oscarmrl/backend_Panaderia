import express from "express";
import cors from "cors";
import { Port } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
app.use(cors());

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(Port);
console.log(`servidor corriendo en el puerto ${Port}`);
