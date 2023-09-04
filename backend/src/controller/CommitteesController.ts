import { Request, Response } from "express";
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
}
