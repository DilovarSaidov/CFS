import express from "express";
import NewsController from "../controller/NewsController";

const router = express.Router();

// Send  all news
router.get("/news", NewsController.getAllNews());

// Add new news
router.post("/add-news", NewsController.addNews);

// Delete news by id
router.delete("/delete-news", NewsController.deleteNewsById);

// Edit news by id
router.put("/edit-news", NewsController.editNewsById());

export = router;
