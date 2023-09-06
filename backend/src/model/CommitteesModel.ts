import { pool } from "../db";
import { CommitteesType } from "../types";

export class CommitteesModel {
  // Send all committees
  static async AllCommittees(): Promise<CommitteesType[]> {
    const result = await pool.query("SELECT * FROM committees");
    return result.rows;
  }

  // Send committees by type(central device)
  static async GetCentralDevice(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE type = 'central_device'"
    );
    return result.rows;
  }

  // Send committees by type(management committee)
  static async GetManagementCommittee(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE type = 'management_committee'"
    );
    return result.rows;
  }

  // Send committees by type (institution)
  static async getInstitution(): Promise<CommitteesType[]> {
    const result = await pool.query(
      "SELECT * FROM committees WHERE type = 'institution_committee'"
    );
    return result.rows;
  }

  // Adding committee
  static async AddCommittee(title: string, type: string) {
    try {
      const query = {
        text: "INSERT INTO committees (title, type) VALUES ($1, $2)",
        values: [title, type],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Delete committee
  static async DeleteCommittee(id: string) {
    const result = await pool.query("DELETE FROM committees WHERE id = $1", [
      id,
    ]);
    return result.rowCount;
  }

  // Edit committee by id
  static async EditCommittee(
    id: string,
    title: string,
    type: string
  ): Promise<void> {
    try {
      const query = {
        text: "UPDATE committees SET title = $2, type = $3 WHERE id = $1",
        values: [id, title, type],
      };
      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
