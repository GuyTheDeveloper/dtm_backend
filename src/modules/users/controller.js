import model from "./model.js";
import jwt from "../../lib/jwt.js";

const GET = async (req, res) => {
  try {
    let users = await model.GET();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const GETSINGLEUSER = async (req, res) => {
  try {
    let user = await model.GETSINGLEUSER(req.params);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const REGISTER = async (req, res) => {
  try {
    let user = await model.REGISTER(req.body);
    if (!user) {
      return res.send("Something went wrong");
    }
    delete user.password;
    return res.status(201).json({
      status: 201,
      message: "Registered successfully",
      data: user,
      token: jwt.sign({ userId: user.id }),
    });
  } catch (error) {
    return res.status(200).json({
      status: 200,
      message: "This acccount already in use",
    });
  }
};

const LOGIN = async (req, res) => {
  try {
    let user = await model.LOGINBYEMAIL(req.body);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json({
      status: 200,
      message: "Welcome Back",
      data: user,
      token: jwt.sign({ userId: user.id }),
    });
  } catch (error) {
    console.log(error);
  }
};

const LOGINBYPHONE = async (req, res) => {
  try {
    let user = await model.LOGINBYPHONE(req.body);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).json({
      status: 200,
      message: "Welcome Back",
      data: user,
      token: jwt.sign({ userId: user.id }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, GETSINGLEUSER, REGISTER, LOGIN, LOGINBYPHONE };
