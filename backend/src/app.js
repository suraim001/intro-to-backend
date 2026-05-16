import express from "express";

const app = express(); // Create an express app.

app.use(express.json());

// router import
import router from "./routes/user.route.js";
// import postRouter from "./routes/post.route.js";

//router declaration
app.use("/api/v1/users", router);

//example route: http://localhost:4000/api/v1/users/register

export default app;