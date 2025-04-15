import express from "express";

const router = express.Router();
router
  .route("/")
  .post((req, res) => {
    res.send("Create Beach Route");
  })
  .get((req, res) => {
    res.send(`Get Beach Route`);
  })
  .delete((req, res) => {
    res.send("Delete Beach Route");
  })
  .put((req, res) => {
    res.send(`Edit Beach Route`);
  });

router
  .route("/form")
  .post((req, res) => {
    res.send("Create Form Route");
  })
  .get((req, res) => {
    res.send(`Get Form Route`);
  })
  .delete((req, res) => {
    res.send("Delete Form Route");
  })
  .put((req, res) => {
    res.send(`Edit Form Route`);
  });

router
  .route("/images")
  .post((req, res) => {
    res.send("Create Image Route");
  })
  .get((req, res) => {
    res.send(`Get Image Route`);
  })
  .delete((req, res) => {
    res.send("Delete Image Route");
  })
  .put((req, res) => {
    res.send(`Edit Image Route`);
  });

export default router;
