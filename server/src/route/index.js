import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { gitHookRoute } from './githook.js';
import { dashboardRoute } from './dashboard.js';

const app = new Hono();

app.use('/pr-stats/api/*', cors());
// app.use(
// 	'/pr-stats/api/*',
// 	cors({
// 		origin: 'http://localhost:3000',
// 		allowMethods: ['POST', 'GET', 'OPTIONS'],
// 		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
// 		maxAge: 600,
// 		credentials: true,
// 	})
// );
app.route('/pr-stats/api/githook', gitHookRoute);
app.route('/pr-stats/api/', dashboardRoute);

export { app };
