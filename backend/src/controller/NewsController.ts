import { Request, Response } from "express";
import { NewsModel } from "../model/NewsModel";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class NewsController {
  // Send all news for admin
  static getAllNewsForAdmin() {
    return async (req: Request, res: Response) => {
      try {
        const list = await NewsModel.AllNewsForAdmin();

        if (list.length === 0) {
          return res.status(404).json({ error: "News not found" });
        }

        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get news" });
      }
    };
  }

  // Send front page news
  static getFrontPageNews() {
    return async (req: Request, res: Response) => {
      try {
        const list = await NewsModel.GetFrontPageNews();
        if (list.length === 0) {
          return res.status(404).json({ error: "News not found" });
        }
        return res.send(list);
      } catch (error) {
        console.error(error);
      }
    };
  }

  // Send news by id
  static async getNewsById(req: any, res: Response) {
    const { id } = req.query;

    try {
      const news = await NewsModel.GetNewsById(id);

      if (news === null || undefined) {
        return res.status(404).json({ error: "News not found" });
      }

      return res.send(news);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failde to get news" });
    }
  }

  // Add new  news
  static addNews = [
    upload.single("photo"),
    async (req: any, res: Response) => {
      const {
        title,
        attendees,
        events,
        secondEvents,
        thirdEvents,
        conclusion,
        data,
      } = req.body;
      try {
        const photo = Buffer.from(req.file.buffer).toString("base64");
        await NewsModel.AddNews(
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          data,
          photo
        );
        return res.status(201).json("News added successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to add news");
      }
    },
  ];

  // Delete news by id
  static async deleteNewsById(req: any, res: Response) {
    const { id } = req.query;
    try {
      const RowCount = await NewsModel.DeleteNewsById(id);

      if (RowCount === 0) {
        return res.status(404).json({ error: "news not found" });
      }

      return res.status(200).json({ error: "News deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to deleted news" });
    }
  }

  // Edit news by id
  static editNewsById() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const {
          id,
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          data,
        } = req.body;
        try {
          const photo = Buffer.from(req.file.buffer).toString("base64");
          await NewsModel.EditNewsById(
            id,
            title,
            attendees,
            events,
            secondEvents,
            thirdEvents,
            conclusion,
            data,
            photo
          );
          return res.status(201).json("News edited successfully");
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Failed to edit news" });
        }
      },
    ];
  }
}
