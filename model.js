const db = require('./data/dbConfig.js');

module.exports = {
  addProject,
  addAction,
  getProject,
  getProjectActions,
  getProjects,
  getActions,
  updateProject
};

// *** MVP
function addProject(project) {
  return db('projects')
    .insert(project);
}
function addAction(action) {
  return db('actions')
    .insert(action);
}
function getProject(id) {
  return db('projects')
    .where({ id: id })
    .first();
}
function getProjectActions(id) {
  return db('actions')
    .where({ project_id: id });
}

// *** Extra
function getProjects() {
  return db('projects');
}
function getActions() {
  return db('actions');
}
function updateProject(id, update) {
  return db('projects')
    .where({ id: id })
    .update(update);
}