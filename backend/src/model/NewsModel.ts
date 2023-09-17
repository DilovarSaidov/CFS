import { pool } from "../db";
import { NewsForAdmin, FrontPageNews } from "../types";

export class NewsModel {
  // Send all news for admin
  static async AllNewsForAdmin(): Promise<NewsForAdmin[]> {
    const result = await pool.query("SELECT * FROM news");

    return result.rows;
  }

  // front page news
  static async GetFrontPageNews(): Promise<FrontPageNews[]> {
    const result = await pool.query("SELECT id, title, photo FROM news");
    return result.rows;
  }

  static async GetNewsById(id: string) {
    const result = await pool.query("SELECT * FROM news WHERE id = $1", [id]);
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
    data: string | null,
    photo: string
  ) {
    try {
      const query = {
        text: "INSERT INTO news (title, attendees, events, second_events, third_events, conclusion, data, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        values: [
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          data,
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
    data: string | null,
    photo: string
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE news SET title = $2, attendees = $3, events = $4, second_events = $5, third_events = $6, conclusion = $7, data = $8 photo = $9 WHERE id = $1",
        values: [
          id,
          title,
          attendees,
          events,
          secondEvents,
          thirdEvents,
          conclusion,
          data,
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
