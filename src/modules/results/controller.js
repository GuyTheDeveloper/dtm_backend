import jwt from "../../lib/jwt.js";
import model from "./model.js";

const POST = async (req, res) => {
  try {
    let { userId } = jwt.verify(req.headers.token);
    let result = await model.POST(req.body, userId);

    if (!result) {
      return res.send("Ooops,something went wrong");
    }

    return res.status(201).json({
      status: 201,
      message: "Result successfully sended",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const GETRESULTBYID = async (req, res) => {
  try {
    let result = await model.GETRESULTBYID(req.params);
    if (result) {
      res.json(result);
    }
  } catch (error) {
    console.log(error);
  }
};

const GETRESULTBYSCORE = async (req, res) => {
  try {
    let results = await model.GETRESULTBYSCORE();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const GETBYUSERID = async (req, res) => {
  try {
    let { error, userId } = jwt.verify(req.headers.token);
    if (error) {
      return res.send("You bro you don't have access");
    }
    let results = await model.GETBYUSERID(userId);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export default { POST, GETRESULTBYID, GETRESULTBYSCORE, GETBYUSERID };
