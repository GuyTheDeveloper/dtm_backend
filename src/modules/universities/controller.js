import model from "./model.js";

const GET = async (req, res) => {
  try {
    let universities = await model.GET(req.query);
    res.json(universities);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let university = await model.POST(req.body);
    res.json(university);
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (req, res) => {
  try {
    let university = await model.PUT(req.params, req.body);
    if (!university) {
      return res.status(404).json({
        status: 404,
        message: "University not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Successfully updated",
      data: university,
    });
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (req, res) => {
  try {
    let university = await model.DELETE(req.params);
    if (!university) {
      return res.status(404).json({
        status: 404,
        message: "University not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Successfully deleted",
      data: university,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
