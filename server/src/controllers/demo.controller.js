import demoModel from "../models/demo.model.js";

export const createEvent = async (req, res) => {
  try {
    const { name, content } = req.body;

    const demo = await demoModel.create({
      name,
      content,
    });

    res.status(201).json({
      message: "demo created",
      demo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to create demo",
      error: error.message,
    });
  }
};

export const getEvent = async (req, res) => {
  try {
    const demo = await demoModel.find();
    res.status(200).json({
      messege: "demo fetched",
      demo,
    });
  } catch (error) {
    return res.status(401).json({
      messege: "failed to fetch",
      error: error.message,
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;

    const demo = await demoModel.findByIdAndUpdate(
      id,
      { name, content },
      { new: true, runValidators: true },
    );

    if (!demo) {
      return res.status(401).json({
        message: "demo not found",
      });
    }
    res.status(200).json({ message: "demo updated succesfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const demo = await demoModel.findByIdAndDelete(id);

    if (!demo) {
      return res.status(401).json({
        message: "demo not found",
      });
    }
    res.status(200).json({ message: "demo deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
