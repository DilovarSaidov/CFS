import express from "express";
import NewsController from "../controller/NewsController";

const router = express.Router();

// Send  all news for admin
router.get("/news-for-admin", NewsController.getAllNewsForAdmin());

// Send front page news
router.get("/news", NewsController.getFrontPageNews());

router.post("/full-info-news", NewsController.getNewsById);

// Add new news
router.post("/add-news", NewsController.addNews);

// Delete news by id
router.delete("/delete-news", NewsController.deleteNewsById);

// Edit news by id
router.put("/edit-news", NewsController.editNewsById());

export = router;
