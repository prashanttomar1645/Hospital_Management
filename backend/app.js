// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import fileUpload from "express-fileupload";
// import { errorMiddleware } from "./middlewares/error.js";
// import messageRouter from "./router/messageRouter.js";
// import userRouter from "./router/userRouter.js";
// import appointmentRouter from "./router/appointmentRouter.js";

// const app = express();
// config({ path: "./config/config.env" });
// // config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL_ONE, process.env.DASHBOARD_URL],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );
// app.use("/api/v1/message", messageRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

// dbConnection();

// app.use(errorMiddleware);
// export default app;

import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();

// ✅ Load env
config({ path: "./config/config.env" });

// ✅ CORS FIX (FINAL)
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


// ✅ Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ File upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// ✅ Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// ✅ DB
dbConnection();

// ✅ Error middleware
app.use(errorMiddleware);

export default app;