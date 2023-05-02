import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import analogjsangular from "@analogjs/astro-angular";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), analogjsangular(), react()]
});