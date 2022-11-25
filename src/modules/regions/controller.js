import model from "./model.js";

const GET = async (req, res) => {
  try {
    let regions = await model.GET();
    res.json(regions);
  } catch (error) {
    console.log(error);
  }
};

export default { GET };
