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



// Mongoose bağlantı seçeneklerini ayarlayın
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Sunucu seçimi zaman aşımı (isteğe bağlı)
  heartbeatFrequencyMS: 5000,     // Kalp atışı frekansı (isteğe bağlı)
};

// MongoDB bağlantısını kurun
mongoose.connect(process.env.MONGO_URL, mongooseOptions);

// Bağlantı olaylarını dinleyin
mongoose.connection.on('connected', () => {
  console.log('MongoDB bağlantısı başarılı.');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB bağlantısı kesildi. Yeniden bağlanılıyor...');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB bağlantı hatası:', error);
});

// Mongoose bağlantısını döndürmek isterseniz:
// const db = mongoose.connection;

// Ardından, bu kod parçasını kullanarak MongoDB bağlantınızı yönetebilirsiniz.

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
