/**
 * `landing-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        fields: ["label", "description"],
        populate: {
          buttons: {
            fields: ["label", "href", "buttonType"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In landing-populate middleware.");

    await next();
  };
};
