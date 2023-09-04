import { Request, Response } from "express";
import { title } from "process";
import { CommitteesModel } from "../model/CommitteesModel";

export default class CommitteesController {
  static getAllCommittees() {
    return async (req: Request, res: Response) => {
      try {
        const list = await CommitteesModel.AllCommittees();

        if (list.length === 0) {
          return res.status(404).json({ error: "Failesd to get committees" });
        }

        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get committees" });
      }
    };
  }

  // Send committees by type(central device)
  static getCentralDevice() {
    return async (req: Request, res: Response) => {
      try {
        const list = await CommitteesModel.GetCentralDevice();
        if (list.length === 0) {
          return res.status(404).json({ error: "Failed to get committees" });
        }
        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get committees" });
      }
    };
  }

  // Send committees by type(management committee)
  static getManagementCommitte() {
    return async (req: Request, res: Response) => {
      try {
        const list = await CommitteesModel.GetManagementCommittee();
        if (list.length === 0) {
          return res.status(404).json({ error: "Failed to get committees" });
        }
        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get committees" });
      }
    };
  }

  // Send committees by type (institution)
  static getInstitution() {
    return async (req: Request, res: Response) => {
      try {
        const list = await CommitteesModel.getInstitution();
        if (list.length === 0) {
          return res.status(404).json({ error: "Failed to get committees" });
        }
        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get committees" });
      }
    };
  }

  // Adding committee
  static addcommittee() {
    return async (req: Request, res: Response) => {
      const { title, type } = req.body;
      try {
        await CommitteesModel.AddCommitte(title, type);
        return res.status(201).json("Committee added successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to add committee");
      }
    };
  }

  // Delete committee
  static async deleteCommittee(req: any, res: Response) {
    const { id } = req.query;
    try {
      const RowCount = await CommitteesModel.DeleteCommittee(id);

      if (RowCount === 0) {
        return res.status(404).json("Committee not found");
      }

      return res.status(200).json("Committee deleted successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete committee");
    }
  }

  // Edit committee
  static editCommittee() {
    return async (req: Request, res: Response) => {
      const { id, title, type } = req.body;
      try {
        await CommitteesModel.EditCommittee(id, title, type);
        return res.status(201).json("Committee edited successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to edit executive");
      }
    };
  }
}
