import { error } from "console";
import { pool } from "../db";
import { CommitteesType } from "../types";

export class CommitteesModel {
  // Send all committees
  static async AllCommittees(): Promise<CommitteesType[]> {
    const result = await pool.query("SELECT * FROM committees");
    return result.rows;
  }

  // Send committees by category(central device)
  static async GetCentralDevice(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE category = 'дастгоҳи марказии'"
    );
    return result.rows;
  }

  // Send committees by category(safety committee)
  static async GetSafetyCommittee(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE category = 'бехатарии озуқавории'"
    );
    return result.rows;
  }

  // Send committees by category (institution)
  static async getInstitution(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE category = 'муассисаю ташкилотҳо'"
    );
    return result.rows;
  }

  // Adding committee
  static async AddCommittee(title: string, category: string) {
    try {
      const query = {
        text: "INSERT INTO committees (title, category) VALUES ($1, $2)",
        values: [title, category],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Delete committee
  static async DeleteCommittee(id: number) {
    const result = await pool.query("DELETE FROM committees WHERE id = $1", [
      id,
    ]);
    return result.rowCount;
  }

  // Edit committee by id
  static async EditCommittee(
    id: number,
    title: string,
    category: string
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE committees SET title = $2, category = $3 WHERE id = $1",
        values: [id, title, category],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
