const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routesHandler = require('./routes/reportRoutes');
const express = require("express");
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// db
mongoose.connect(
  process.env.MONGO_URL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("db connected");

    const PORT = 8000;
    app.listen(PORT, () => {
      console.log("server is active");
    });
  }
);

// mw
app.use(express.json());
// express.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());


// routes
app.use(userRoutes);
app.use(uploadRoutes);
app.use('/', routesHandler);



