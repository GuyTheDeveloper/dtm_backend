import model from "./model.js";

const GET = async (req, res) => {
  try {
    let faculties = await model.GET(req.params);
    res.json(faculties);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let faculty = await model.POST(req.body);
    res.status(201).json({
      status: 201,
      message: "Faculty successfully created",
      data: faculty,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST };
