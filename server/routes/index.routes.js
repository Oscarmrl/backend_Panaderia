import { Router } from "express";
import { Pool } from "../db.js";

const router = Router();

router.get("/productos", async (req, res) => {
  try {
    const [result] = await Pool.query("SELECT * FROM products");
    res.json(result);
  } catch (error) {
    console.error("Error en la consulta: " + error.message);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
