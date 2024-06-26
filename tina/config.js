import { defineConfig } from "tinacms";

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD


export default defineConfig({
  clientId: "4daae77c-971d-42af-8230-d8b626beb16b", // Get this from tina.io
  token: "ba3d679754f454d063b01f12d79bf8077c0aef7f", // Get this from tina.io
  branch,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/blog",
        defaultItem() {
          return {
            layout: "../../layouts/Post.astro",
          };
        },
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: ["../../layouts/Post.astro"],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },

          {
            type: "datetime",
            name: "publishedAt",
            label: "Fecha de publicacion",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Imagen de Portada",
            required: false,
          },
          {
            type: "string",
            name: "descripcion",
            label: "Descripción",
            required: true,
          },
          {
            type: "string",
            name: "link",
            label: "Link del powerBI",
            required: true,
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
