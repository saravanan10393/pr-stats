import { Hono } from "hono";
const gitHookRoute = new Hono();

import { addAuthor } from "../service/author.js";
import { addReviews } from "../service/review.js";

gitHookRoute.post("/", async (ctx) => {
  let payload = await ctx.req.json() || { reviewers: [] };
  console.log("in coming body data ", payload);
  const reviewers = payload.reviewers;
  for (let review of reviewers) {
    await addAuthor(ctx, review.author);
    await addReviews(ctx, review);
  }
  return ctx.json({message: "Success"});
});

export  { gitHookRoute  }
