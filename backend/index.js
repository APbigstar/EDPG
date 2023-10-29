const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// Rate Limiter
const rateLimiter = require("./src/middleware/AuthMiddleware");

const authRoutes = require("./src/routes/authRoutes.js");
const clientRoutes = require("./src/routes/client.js");
const generalRoutes = require("./src/routes/general.js");
const managementRoutes = require("./src/routes/management.js");
const salesRoutes = require("./src/routes/sales.js");

dotenv.config();
const app = express();
app.use(express.json());
// app.use(rateLimiter);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect.`));

app.use("/auth", authRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
