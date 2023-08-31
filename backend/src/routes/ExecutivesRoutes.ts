import express from "express";
import ExecutivesController from "../controller/ExecutivesController";

const router = express.Router();

// Send all executives
router.get("/executives", ExecutivesController.getAllExecutives());

// Send executives by id
router.get("/executive", ExecutivesController.getExecutivesById);

router.post("/add-executive", ExecutivesController.addExecutive);

router.delete("/delete-executive", ExecutivesController.deleteExecutive);

router.put("/edit-executive", ExecutivesController.editExecutive());

export = router;
