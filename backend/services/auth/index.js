import  express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8001
const app = express();

app.get("/", (req, res) => {
    res.json({ message: " auth Gateway is running" });
})
app.listen(port, () => {
  console.log(`  auth Server is running on port ${port}`);
});
