const express = require("express");
const app = express();
const port = 3000;

/* -------- INITIALISATIONS -------- */

// to get form data as json in req.body
app.use(express.json()); 

// to get url encoded parameters
app.use(
  express.urlencoded({ 
    extended: true,
  })
);

// set the view engine to ejs
app.set('view engine', 'ejs');



/* ----- ROUTES ------- */
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});