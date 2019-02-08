module.exports = {
  getTodos: (req, res, next) => {
    res.json({
      message: "Get Todos"
    });
  }
};
