// page not found
function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

// handle errors
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(req.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
}

// display 422 error
function showError(res, next, message) {
  res.status(422);
  const error = new Error(message);
  next(error);
}

module.exports = {
  notFound,
  errorHandler,
  showError
};
