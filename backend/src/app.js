const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const AlertsRouter = require("./routes/alerts/alerts.routes");
const ComplainsRouter = require("./routes/complains/complains.routes");
const temp = require("./routes/temperature/temperature");
const SchemeRouter = require("./routes/schemes/SchemesRouter");
const attendanceRoutes = require("./routes/Staff/routes/attendanceRoutes");
const totalGarbageRoutes = require("./routes/Staff/routes/totalGarbageRoutes");
const srRoutes = require("./routes/Staff/routes/srRoutes");
const maintenanceRoutes = require("./routes/Staff/routes/maintenanceRoutes");
const avRoutes = require("./routes/Staff/routes/avRoutes");

app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.use("/admin/alerts", AlertsRouter);
app.use("/admin/complains", ComplainsRouter);
app.use("/admin/scheme", SchemeRouter);
app.use("/admin/attendance", attendanceRoutes);
app.use("/admin/totalgarbage", totalGarbageRoutes);
app.use("/admin/staffreport", srRoutes);
app.use("/admin/maintenance", maintenanceRoutes);
app.use("/admin/allvehicle", avRoutes);
app.use("/", temp);

// Catch all other requests and return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

module.exports = app;
