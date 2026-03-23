/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  header: {
    populate: {
      logo: {
        fields: ["url", "alternativeText"],
      },
      links: {
        fields: ["label", "href"],
      },
      buttons: {
        fields: ["label", "href", "buttonType"],
      },
    },
  },
  footer: {
    populate: {
      linkBlocks: {
        fields: ["label"],
        populate: {
          links: {
            fields: ["label", "href"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
