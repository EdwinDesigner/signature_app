import express from "express";
import cors from "cors";
import "dotenv/config";
import signatureRoute from "../routes/signature.route.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/signature", signatureRoute);

app.get("/", (req, res) => {
  res.json({ message: "Api signature" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
