const Project = require("../models/project");

exports.createProject = async(req,res) => {
    try{
        const project = await Project.create({
            ...req.body,
            freelancer: req.user.id,
        });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("freelancer", "name");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

