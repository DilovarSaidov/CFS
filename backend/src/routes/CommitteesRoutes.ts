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
router.post("/committee-add", CommitteesController.addcommittee);

// Edit committee
router.put("/committee-edit", CommitteesController.editCommittee());

// Delete committee
router.delete("/committee-delete", CommitteesController.deleteCommittee);

export = router;
