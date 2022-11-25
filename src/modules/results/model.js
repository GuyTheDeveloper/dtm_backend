import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETBYRESULTID, GETBYSCORE, GETUSERBYID, POSTRESULT } from "./query.js";

const POST = async (
  {
    first_subject_id,
    second_subject_id,
    first_subject_count,
    second_subject_count,
    first_subject_correct,
    second_subject_correct,
    faculties,
    time,
  },
  userId
) => {
  try {
    let result = await fetch(POSTRESULT, [
      userId,
      first_subject_id,
      second_subject_id,
      first_subject_count,
      second_subject_count,
      first_subject_correct,
      second_subject_correct,
      faculties,
      time,
    ]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const GETRESULTBYID = async ({ result_id = 0 }) => {
  try {
    let result = await fetchAll(GETBYRESULTID, [result_id]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const GETRESULTBYSCORE = async () => {
  try {
    let results = await fetchAll(GETBYSCORE);
    return results;
  } catch (error) {
    console.log(error);
  }
};

const GETBYUSERID = async (userId) => {
  try {
    let results = await fetchAll(GETUSERBYID, [userId]);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default { POST, GETRESULTBYID, GETRESULTBYSCORE,GETBYUSERID };
