import { defineConfig } from "sanity";
import { schemaTypes } from "./sanity/schemaTypes/index";

export default defineConfig({
  name: "default",
  title: "My Sanity App",

  projectId: "YOUR_PROJECT_ID",
  dataset: "production",

  schema: {
    types: schemaTypes,
  },
});