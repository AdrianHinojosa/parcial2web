// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================



//dot
require('dotenv').config()
/** Requirements */
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const bodyParser = require('body-parser');
/** Security Requirements. */


// Handlebars Setup
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "part2" }));
app.set("view engine", "handlebars");




/** Middlewares */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'));

/** CORS headers */
app.use(cors());



var PORT = process.env.PORT || 5000;


/** Listener */
app.listen(PORT, () => {
  console.log(`API on port ${PORT} Running`)
});


var router = express.Router({ mergeParams: true });
var aH = require('express-async-handler');
var crudCtr = require('./controllers/crud');


    
app.get('/', (req, res, next) => {
  res.status(200).json("You are on the homepage!");
})

// Create Route
app.post('/post', aH(crudCtr.postCrud()));

// Delete Route
app.delete('/delete', aH(crudCtr.deleteCrud()));

// PUT Route
app.put('/:taskId', aH(crudCtr.putCrud()));

// Sets up the Express app to handle data parsing

app.get('/handlebars', (req, res, next) => {
  var handleBarsData = {
    posts : [
        {
            author: 'Janith Kasun',
            image: 'https://picsum.photos/500/500'
        },
        {
            author: 'John Doe',
            image: 'https://picsum.photos/500/500?2'
        },
        // Added:
        {
          author: 'Adrián Hinojosa',
          image: 'https://images.theconversation.com/files/243439/original/file-20181101-83635-1xcrr39.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        }
    ]
  }
  res.render("part2", handleBarsData)
})


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


