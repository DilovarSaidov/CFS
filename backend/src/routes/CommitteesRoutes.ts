import express from "express";
import CommitteesController from "../controller/CommitteesController";

const router = express.Router();

// Send all committees
router.get("/committees", CommitteesController.getAllCommittees());

// Send committees by type(Central device)
router.get("/commitees-central", CommitteesController.getCentralDevice);

// Send committees by type(management committee)
router.get("/committes-management", CommitteesController.getManagementCommitte);

// Send committees by type (institution)
router.get("/committees-institution", CommitteesController.getInstitution);

// Add new committee
router.post("/add-committee", CommitteesController.addcommittee);

// Delete committee
router.delete("/edit-committee", CommitteesController.editCommittee());

export = router;
