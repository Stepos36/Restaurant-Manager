var db = require("../models");

module.exports = function(app) {
  app.get("/api/pizzas", function(req, res) {
    db.Pizza.findAll({
      include: [db.Order]
    }).then(function(dbPizza) {
      res.json(dbPizza);
    });
  });

  app.get("/api/pizzas/:id", function(req, res) {
    db.Pizza.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Order, db.Ingredient]
    }).then(function(dbPizza) {
      res.json(dbPizza);
    });
  });

  app.post("/api/orders", function(req, res) {
    db.Order.create(req.body).then(function(dbPizza) {
      res.json(dbPizza);
    });
  });

  app.get("/api/pizzas/order/:id", function(req, res) {
    db.Pizza.findAll({
      where: {
        order_id: req.params.id
      },
    }).then(function(dbPizza) {
      res.json(dbPizza);
    });
  });

};
