import { pool } from "../db";
import { News } from "../types";

export class NewsModel {
  // Send all news
  static async AllNews(): Promise<News[]> {
    const result = await pool.query("SELECT * FROM news");

    return result.rows;
  }

  // Add new news
  static async AddNews(
    title: string,
    attendees: string,
    events: string,
    secondEvents: string | null,
    thirdEvents: string | null,
    conclusion: string | null,
    photo: string
  ) {
    try {
      const query = {
        text: "INSERT INTO news (title, attendees, events, second_events, third_events, conclusion, photo) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        values: [
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          photo,
        ],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Delete news by id
  static async DeleteNewsById(id: string) {
    const result = await pool.query("DELETE FROM news WHERE id = $1", [id]);

    return result.rowCount;
  }

  // Edit news  by id
  static async EditNewsById(
    id: string,
    title: string,
    attendees: string,
    events: string,
    secondEvents: string | null,
    thirdEvents: string | null,
    conclusion: string | null,
    photo: string
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE news SET title = $2, attendees = $3, events = $4, second_events = $5, third_events = $6, conclusion = $7, photo = $8 WHERE id = $1",
        values: [
          id,
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          photo,
        ],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
