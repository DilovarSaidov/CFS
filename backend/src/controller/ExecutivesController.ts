import { Request, Response } from "express";
import { ExecutivesModel } from "../model/ExecutivesModel";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class ExecutivesController {
  // Send the executives to the first page
  static getAllExecutives() {
    return async (req: Request, res: Response) => {
      try {
        const list = await ExecutivesModel.AllExecutives();

        if (list.length === 0) {
          return res.status(404).json({ error: "Executives not found" });
        }

        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get executives" });
      }
    };
  }

  // Send the executives by id
  static async getExecutivesById(req: any, res: Response) {
    const { id } = req.query;
    try {
      const person = await ExecutivesModel.ExecutivesById(id);

      if (person !== null) {
        return res.send(person);
      } else {
        return res.status(404).json({ error: "Executives not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to get executive" });
    }
  }

  static addExecutive = [
    upload.single("photo"),
    async (req: any, res: Response) => {
      const {
        name,
        jobTitle,
        data,
        nationality,
        placeOfStudy,
        previousWork,
        secondPreviousWork,
        thirdPreviousWork,
        appointmentDay,
        status,
      } = req.body;
      try {
        const photo = Buffer.from(req.file.buffer).toString("base64");
        await ExecutivesModel.AddExecutive(
          name,
          jobTitle,
          data,
          nationality,
          placeOfStudy,
          previousWork,
          secondPreviousWork,
          thirdPreviousWork,
          appointmentDay,
          status,
          photo
        );
        return res.status(201).json("Executive added successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to add executive");
      }
    },
  ];

  static async deleteExecutive(req: any, res: Response) {
    const { id } = req.query;
    try {
      const RowCount = await ExecutivesModel.DeleteExecutive(id);

      if (RowCount === 0) {
        return res.status(404).json("Executive not found");
      }

      return res.status(200).json("Executive deleted successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete executive");
    }
  }

  static editExecutive() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const {
          id,
          name,
          jobTitle,
          data,
          nationality,
          placeOfStudy,
          previousWork,
          secondPreviousWork,
          thirdPreviousWork,
          appointmentDay,
          status,
        } = req.body;
        try {
          const photo = Buffer.from(req.file.buffer).toString("base64");
          await ExecutivesModel.EditExecutive(
            id,
            name,
            jobTitle,
            data,
            nationality,
            placeOfStudy,
            previousWork,
            secondPreviousWork,
            thirdPreviousWork,
            appointmentDay,
            status,
            photo
          );
          return res.status(201).json("Executive edited successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Failed to edit executive");
        }
      },
    ];
  }
}
