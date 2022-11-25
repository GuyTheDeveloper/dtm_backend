import model from "./model.js";

const GETFIRST = async (req, res) => {
  try {
    let subjects = await model.GETFIRST();
    res.json(subjects);
  } catch (error) {
    console.log(error);
  }
};

const GETSECOND = async (req, res) => {
  try {
    let subjects = await model.GETSECOND(req.params);
    res.json(subjects);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let subject = await model.POST(req.body);
    res.json(subject);
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (req, res) => {
  try {
    let subject = await model.PUT(req.params, req.body);
    res.json(subject);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (req, res) => {
  try {
    let subject = await model.DELETE(req.params);
    res.json(subject);
  } catch (error) {
    console.log(error);
  }
};

export default { GETFIRST, GETSECOND, POST, PUT, DELETE };
