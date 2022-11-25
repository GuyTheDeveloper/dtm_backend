import { fetchAll } from "../../lib/postgres.js";
import {
  DELETESUBJECT,
  GETFIRSTSUBJECT,
  GETSECONDSUBJECT,
  PUTSUBJECT,
} from "./query.js";

const GETFIRST = async () => {
  try {
    let subjects = await fetchAll(GETFIRSTSUBJECT);
    return subjects;
  } catch (error) {
    console.log(error);
  }
};

const GETSECOND = async ({ first_subject_id }) => {
  try {
    let subjects = await fetchAll(GETSECONDSUBJECT, [first_subject_id]);
    return subjects;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ subject_name }) => {
  try {
    let subject = await fetch(POSTSUBJECT, [subject_name]);
    return subject;
  } catch (error) {
    console.log(error);
  }
};

const PUT = async ({ subjectId }, { subject_name }) => {
  try {
    let subject = await fetch(PUTSUBJECT, [subjectId, subject_name]);
    return subject;
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ subjectId }) => {
  try {
    let subject = await fetch(DELETESUBJECT, [subjectId]);
    return subject;
  } catch (error) {
    console.log(error);
  }
};

export default { GETFIRST, GETSECOND, POST, PUT, DELETE };
