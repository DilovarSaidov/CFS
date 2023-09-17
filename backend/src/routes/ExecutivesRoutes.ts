import express from "express";
import ExecutivesController from "../controller/ExecutivesController";

const router = express.Router();

// Send all executives
router.get("/executives", ExecutivesController.getAllExecutives());

// Send executives by id
router.post("/executive", ExecutivesController.getExecutivesById);

// Add new news
router.post("/add-executive", ExecutivesController.addExecutive);

// delete news
router.delete("/delete-executive", ExecutivesController.deleteExecutive);

// Edit news
router.put("/edit-executive", ExecutivesController.editExecutive());

export = router;
