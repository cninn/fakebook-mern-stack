const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");


dotenv.config();

/* const corsOptions = {
  origin: 'http://localhost:3000', // İzin vermek istediğiniz kaynak URL
  methods: 'GET,POST,PUT,DELETE', // İzin vermek istediğiniz HTTP metodları
};
app.use(cors(corsOptions)); */
//! MONGODB CONNECT

// Mongoose bağlantı seçeneklerini ayarlayın
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Sunucu seçimi zaman aşımı (isteğe bağlı)
  heartbeatFrequencyMS: 5000, // Kalp atışı frekansı (isteğe bağlı)
};

// MongoDB bağlantısını kurun
mongoose.connect(process.env.MONGO_URL, mongooseOptions);

// Bağlantı olaylarını dinleyin
mongoose.connection.on("connected", () => {
  console.log("MongoDB bağlantısı başarılı.");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB bağlantısı kesildi. Yeniden bağlanılıyor...");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB bağlantı hatası:", error);
});

// Mongoose bağlantısını döndürmek isterseniz:
// const db = mongoose.connection;

// Ardından, bu kod parçasını kullanarak MongoDB bağlantınızı yönetebilirsiniz.

//!MİDDLEWARES HERE

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Arka tarafta işler tıkırında şeyhim http://localhost:8800");
});
