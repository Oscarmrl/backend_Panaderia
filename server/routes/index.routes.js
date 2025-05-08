import { Router } from "express";
import { Pool } from "../db.js";

const router = Router();

router.get("/productos", async (req, res) => {
  try {
    const [result] = await Pool.query("SELECT * FROM products");
    console.log(result);

    res.json(result);
  } catch (error) {
    console.log("Error en la consulta" + error);
  }
});
export default router;
