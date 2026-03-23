/**
 * `gallery-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  header: {
    populate: ["menuLink"],
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In gallery-populate middleware.");

    await next();
  };
};
