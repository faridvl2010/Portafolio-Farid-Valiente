const { Router } = require('express');
const controller = require('../controllers/portfolio.controller');

const router = Router();

router.get('/profile', controller.getProfile);
router.get('/skills', controller.getSkills);
router.get('/projects', controller.getProjects);
router.get('/experience', controller.getExperience);
router.get('/education', controller.getEducation);

module.exports = router;
