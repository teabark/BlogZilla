import Express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routes/jwtAuth.js";
import dashRouter from "./routes/dashboard.js";

env.config();

const app = Express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(Express.json());

app.use("/auth", authRouter);

app.use("/dashboard", dashRouter)
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
