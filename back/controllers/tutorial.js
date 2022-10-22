const  db  = require("../db");

exports.getTutorials = (req, res) => {
    const q = "SELECT * FROM tutorials";

    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });
    
};

exports.addTutorials = (req, res) => {
  const q = "INSERT INTO tutorials(`name`, `description`, `published`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.description,
    req.body.published,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.getPublishedTutorials = (req, res) => {
    const q = "SELECT * FROM tutorials WHERE published = true";

    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });

};

exports.getTutorial = (req, res) => {
    const tutId = req.params.id;
    const q = " SELECT * FROM tutorials WHERE id = ? ";
  
    db.query(q, [tutId], (err, data) => {
        console.log(data)
      if (err) return res.send(err);
      return res.json(data);
    });
};

exports.updateTutorial = (req, res) => {
    const tutId = req.params.id;
    const q = "UPDATE tutorials SET `name`= ?, `description`= ?, `published`= ? WHERE id = ?";
  
    const values = [
        req.body.name,
        req.body.description,
        req.body.published,
        ];
  
    db.query(q, [...values,tutId], (err, data) => {
      if (err) return res.send(err);
      return res.json("row has been updated");
    });
  
};

exports.deleteTutorial = (req, res) => {
    const tutId = req.params.id;
    const q = " DELETE FROM tutorials WHERE id = ? ";
  
    db.query(q, [tutId], (err, data) => {
        console.log(data)
      if (err) return res.send(err);
      return res.json("row has been deleted");
    });
  
};

exports.deleteAll = (req, res) => {
    const q = " DELETE FROM tutorials ";
  
    db.query(q, (err, data) => {
        console.log(data)
      if (err) return res.send(err);
      return res.json("all data has been deleted");
    });

};
