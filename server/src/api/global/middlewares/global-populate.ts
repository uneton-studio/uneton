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
      logo: { fields: ["url", "alternativeText"] },
      logoSmall: { fields: ["url"] },
      copyright: {
        fields: ["label"],
        populate: {
          icon: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      newsletter: {
        fields: ["label"],
        populate: {
          button: {
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
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
