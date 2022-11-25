import { fetch, fetchAll } from "../../lib/postgres.js";
import {
  DELETEUNIVERSITY,
  GETUNIVERSITIES,
  POSTUNIVERSITY,
  UPDATEUNIVERSITY,
} from "./query.js";

const GET = async ({ firstSubject, secondSubject }) => {
  try {
    let universities = await fetchAll(GETUNIVERSITIES, [
      firstSubject,
      secondSubject,
    ]);
    return universities;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ university_name, region_id }) => {
  try {
    let university = await fetch(POSTUNIVERSITY, [university_name, region_id]);
    return university;
  } catch (error) {
    console.log(error);
  }
};

const PUT = async ({ universityId }, { university_name }) => {
  try {
    let university = await fetch(UPDATEUNIVERSITY, [
      universityId,
      university_name,
    ]);
    return university;
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ universityId }) => {
  try {
    let university = await fetch(DELETEUNIVERSITY, [universityId]);
    return university;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
