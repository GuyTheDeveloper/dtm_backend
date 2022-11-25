import { fetchAll, fetch } from "../../lib/postgres.js";
import {
  GETUSERS,
  GETUSERSINGLE,
  LOGINUSER,
  LOGINWITHPHONE,
  REGISTERUSER,
} from "./query.js";

const GET = async () => {
  try {
    let users = await fetchAll(GETUSERS);
    return users;
  } catch (error) {
    console.log(error);
  }
};

const GETSINGLEUSER = async ({ userId }) => {
  try {
    let user = await fetch(GETUSERSINGLE, [userId]);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const REGISTER = async ({
  fullname,
  email,
  phone,
  username,
  region_id,
  password,
  gender,
}) => {
  try {
    let user = await fetch(REGISTERUSER, [
      fullname,
      email,
      phone,
      username,
      region_id,
      password,
      gender,
    ]);
    return user;
  } catch (error) {
    return res.status(200).json({
      status: 200,
      message: "This account already registered",
    });
  }
};

const LOGINBYEMAIL = async ({ email, password }) => {
  try {
    let user = await fetch(LOGINUSER, [email, password]);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const LOGINBYPHONE = async ({ phone, password }) => {
  try {
    let user = await fetch(LOGINWITHPHONE, [phone, password]);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, GETSINGLEUSER, REGISTER, LOGINBYEMAIL, LOGINBYPHONE };
