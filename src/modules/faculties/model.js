import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETFACULTIES, POSTFACULTY } from "./query.js";

const GET = async ({ facultyId }) => {
  try {
    let faculties = await fetchAll(GETFACULTIES, [facultyId]);
    return faculties;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({
  faculty_name,
  university_id,
  first_subject_id,
  second_subject_id,
  grant_count,
  contract_count,
  grant_score,
  contract_score,
}) => {
  try {
    let faculty = await fetch(POSTFACULTY, [
      faculty_name,
      university_id,
      first_subject_id,
      second_subject_id,
      grant_count,
      contract_count,
      grant_score,
      contract_score,
    ]);
    return faculty;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST };
