import { Hono } from "hono";

import { gitHookRoute } from "./githook.js";
import { dashboardRoute } from "./dashboard.js";

const app = new Hono();
app.route("/pr-stats/api/githook", gitHookRoute);
app.route("/pr-stats/api/",dashboardRoute);

export { app };