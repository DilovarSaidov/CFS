import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExecutivesRoutes from "./routes/ExecutivesRoutes";
import CommitteesRoutes from "./routes/CommitteesRoutes";
import NewsRoutes from "./routes/NewsRoutes";

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(ExecutivesRoutes);
app.use(CommitteesRoutes);
app.use(NewsRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
