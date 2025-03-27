// A middleware function for validating url parameter "id"
// "id" must be a number
module.exports = async (req, res, next) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID parameter, must be a number" });
  }

  next();
};
