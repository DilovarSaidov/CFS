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
}
