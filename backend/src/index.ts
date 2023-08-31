import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExecutivesRoutes from "./routes/ExecutivesRoutes";

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(ExecutivesRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
