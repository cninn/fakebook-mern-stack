const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/posts.js');



dotenv.config();



//! MONGODB CONNECT

(async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Başkatip emrinizde şeyhim");
    } catch (error) {
      console.error("Başkatip hastalandı:", error);
    }
  })();
//!MİDDLEWARES HERE



app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/posts',postRoute);
  

app.listen(8800, () => {
  console.log("Arka tarafta işler tıkırında şeyhim http://localhost:8800");
});
