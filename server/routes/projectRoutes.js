const express = require('express');
const router = express.Router();

const { createProject, getProjects } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

router.post('/', protect, authorizeRoles('freelancer'), createProject);
router.get('/', getProjects);

module.exports = router;