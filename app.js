import express from "express";
import corsConfig from "./src/middleware/corsConfig.js"
import errorHandler from "./src/middleware/errorHandler.js";
import router from "./src/routes/genairoutes.js";

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(corsConfig);

// ✅ Routes
app.use("/api", router);

// ✅ Error Handling
app.use(errorHandler);

export default app;
