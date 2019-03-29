const express = require('express');
const helmet = require('helmet');
const model = require('./model.js');
const server = express();
server.use(helmet());
server.use(express.json());

server.get('/api/project/:id', (req, res) => {
  model.getProject(req.params.id)
    .then(resProject => {
      console.log('get project', resProject.data);
      let projectWithActions = {...resProject.data};
      model.getProjectActions(req.params.id)
        .then(resActions => {
          console.log('get project actions', resActions.data)
          projectWithActions.actions = resActions.data;
        })
        .catch(err => {
          console.log('get actions', err);S
        })
    })
    .catch(err => {
      res.status(404).json({ message: "The project with the specified ID does not exist." });
    })
})

server.listen(5555, () =>
  console.log(`\n** API running on http://localhost:5555 **\n`)
);