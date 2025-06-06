import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from) {
    if (to.hash && to.path === from.path) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
};
