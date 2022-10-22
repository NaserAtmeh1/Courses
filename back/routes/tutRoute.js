const express = require("express")
const {
addTutorials,
getTutorials,
getPublishedTutorials,
getTutorial,
updateTutorial,
deleteTutorial,
deleteAll
} = require("../controllers/tutorial.js")

const router = express.Router();

  // Create a new Tutorial
  router.post("/", addTutorials);

  // Retrieve all Tutorials
  router.get("/", getTutorials);

  // Retrieve all published Tutorials
  router.get("/published", getPublishedTutorials);

  // Retrieve a single Tutorial with id
  router.get("/:id", getTutorial);

  // Update a Tutorial with id
  router.put("/:id", updateTutorial);

  // Delete a Tutorial with id
  router.delete("/:id", deleteTutorial);

  // Delete all Tutorials
  router.delete("/", deleteAll);

module.exports = router;