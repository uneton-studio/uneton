/**
 * landing router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::landing.landing", {
  config: { find: { middlewares: ["api::landing.landing-populate"] } },
});
