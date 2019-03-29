const express = require('express');
const helmet = require('helmet');
const model = require('./model.js');
const server = express();
server.use(helmet());
server.use(express.json());

server.post('/api/projects', (req, res) => {
  const { name, description, completed } = req.body;
  if (!name || !description) {
    res.status(400).json({ errorMessage: "Please provide a name and description for the project." })
  }
  else {
    const newProject = {
      name: name,
      description: description,
      completed: completed || false
    }
    model.addProject(newProject)
      .then(p => {
        res.status(201).json(p);
      })
      .catch(err => {
        // console.log(err)
        res.status(500).json({ message: "There was an error while saving the project to the database" });
      });
  }
})

server.post('/api/actions', (req, res) => {
  const { notes, description, completed, project_id } = req.body;
  if (!description || !project_id) {
    res.status(400).json({ errorMessage: "Please provide a description and a project id for the action." })
  }
  else {
    const newAction = {
      notes: notes || null,
      description: description,
      completed: completed || false,
      project_id: project_id
    }
    model.addAction(newAction)
      .then(a => {
        res.status(201).json(a);
      })
      .catch(err => {
        // console.log(err)
        res.status(500).json({ message: "There was an error while saving the action to the database" });
      });
  }
})

server.get('/api/projects/:id', (req, res) => {
  model.getProject(req.params.id)
    .then(resProject => {
      // console.log('get project', resProject);
      let projectWithActions = {...resProject};
      model.getProjectActions(req.params.id)
        .then(resActions => {
          // console.log('get project actions', resActions)
          projectWithActions.actions = resActions;
          res.status(200).json(projectWithActions);
        })
        .catch(err => {
          // console.log('get actions', err);
          res.status(500).json({ message: "Something went wrong." })
        });
    })
    .catch(err => {
      res.status(404).json({ message: "The project with the specified ID does not exist." });
    });
})

server.listen(5555, () =>
  console.log(`\n** API running on http://localhost:5555 **\n`)
);