const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user auth");
});


module.exports = router;