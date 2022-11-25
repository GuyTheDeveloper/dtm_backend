import model from "./model.js";

const GET = async (req, res) => {
  try {
    let questions = await model.GET(req.query);
    res.json(questions);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let question = await model.POST(req.body);
    return res.status(201).json({
      status: 201,
      message: "Question successfully created",
      data: question,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST };
