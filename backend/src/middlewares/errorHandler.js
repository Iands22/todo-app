// A middleware function for handling errors
module.exports = async (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    error: {
      message: err.message || "Internal server error",
      status: statusCode,
    },
  });
};
