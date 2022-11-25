import { fetchAll, fetch } from "../../lib/postgres.js";
import { GETQUESTIONS, POSTQUESTIONS } from "./query.js";

const GET = async ({ first_subject_id, second_subject_id }) => {
  try {
    let questions = await fetchAll(GETQUESTIONS, [
      first_subject_id,
      second_subject_id,
    ]);
    return questions;
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({ subject_id, heading, question, asnwers }) => {
  try {
    let questions = await fetch(POSTQUESTIONS, [
      subject_id,
      heading,
      question,
      asnwers,
    ]);
    return questions;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST };
