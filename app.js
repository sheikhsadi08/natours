const express = require('express');
const morgan = require('morgan');

const app = express();

// 1) middlewares
app.use(morgan('dev'));
app.use(express.json());

// 2) route handlers
// tour
const getAllTours = (req, res) => {
  res.status(200).json({ message: 'getAllTours' });
};
const createTour = (req, res) => {
  res.status(200).json({ message: 'creatTour' });
};
const getTour = (req, res) => {
  res.status(200).json({ message: 'getTour' });
};
const updateTour = (req, res) => {
  res.status(200).json({ message: 'updateTour' });
};
const deleteTour = (req, res) => {
  res.status(200).json({ message: 'deleteTour' });
};

// user
const getAllUsers = (req, res) => {
  res.status(200).json({ message: 'getAllUsers' });
};
const createUser = (req, res) => {
  res.status(200).json({ message: 'createUser' });
};
const getUser = (req, res) => {
  res.status(200).json({ message: 'getUser' });
};
const updateUser = (req, res) => {
  res.status(200).json({ message: 'updateUser' });
};
const deleteUser = (req, res) => {
  res.status(200).json({ message: 'deleteUser' });
};

// 3) Routes

// tour routes
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// user routes
app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

// 4) Start server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
