"use strict";

export const middleware = async (ctx, next) => {
  await auth.check(ctx.request, ctx.response, (req, res, err) => {
    if (err) {
      next(err);
    } else {
      next();
    }
  });
};
