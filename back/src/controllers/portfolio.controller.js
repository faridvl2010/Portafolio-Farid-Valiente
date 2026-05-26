const data = require('../data/portfolio.data');

module.exports = {
  getProfile:         (req, res) => res.json(data.profile),
  getSkills:          (req, res) => res.json(data.skills),
  getProjects:        (req, res) => res.json(data.projects),
  getExperience:      (req, res) => res.json(data.experience),
  getEducation:       (req, res) => res.json(data.education),
  getCertifications:  (req, res) => res.json(data.certifications),
};
