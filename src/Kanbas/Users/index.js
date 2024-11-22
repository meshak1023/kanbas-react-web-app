import express from "express";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express();
UserRoutes(app);
app.listen(process.env.PORT || 4000);

