import { pool } from "../db";
import { ExecutivesTypes } from "../types";

export class ExecutivesModel {
  // Send all Executives
  static async AllExecutives(): Promise<ExecutivesTypes[]> {
    const result = await pool.query(
      "SELECT id, name, job_title, photo FROM executives"
    );

    return result.rows;
  }

  static async ExecutivesById(id: string) {
    const result = await pool.query("SELECT * FROM executives WHERE id = $1", [
      id,
    ]);

    return result.rows;
  }

  static async AddExecutive(
    name: string,
    jobTitle: string,
    data: string,
    nationality: string,
    placeOfStudy: string,
    previousWork: string,
    secondPreviousWork: string | null,
    thirdPreviousWork: string | null,
    appointmentDay: string,
    status: string,
    photo: string
  ) {
    try {
      const query = {
        text: "INSERT INTO executives (name, job_title, data, nationality, place_of_study, previous_work, second_previous_work, third_previous_works, appointment_day, status, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        values: [
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
          photo,
        ],
      };

      await pool.query(query);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async DeleteExecutive(id: string) {
    const result = await pool.query("DELETE FROM executives WHERE id = $1", [
      id,
    ]);
    return result.rowCount;
  }
}
