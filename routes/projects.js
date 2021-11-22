var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("projects", [
    {
      title: "",
      subTitle: "",
      description: "",
      imagePath: "",
    },
    {
      title: "",
      subTitle: "",
      description: "",
      imagePath: "",
    },
    {
      title: "",
      subTitle: "",
      description: "",
      imagePath: "",
    },
    {
      title: "",
      subTitle: "",
      description: "",
      imagePath: "",
    },
  ]);
});

module.exports = router;
