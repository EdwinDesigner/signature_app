import express from "express";
import cors from "cors";
import "dotenv/config";
import signatureRoute from "./routes/signature.route.js";

export const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/signature", signatureRoute);

app.get("/", (req, res) => {
  res.send("Api signature");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});