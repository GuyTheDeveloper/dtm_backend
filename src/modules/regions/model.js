import { fetchAll } from "../../lib/postgres.js";
import { GETREGIONS } from "./query.js";

const GET = async () => {
  try {
    let regions = await fetchAll(GETREGIONS);
    return regions;
  } catch (error) {
    console.log(error);
  }
};


export default {GET}