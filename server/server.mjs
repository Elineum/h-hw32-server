import fastify from "fastify";
import cors from "@fastify/cors";
import portionSizes from "../data/portionSizes.mjs";
import smoothieTemplates from "../data/smoothieTemplates.mjs";
import ingredientsList from "../data/ingredientsList.mjs";

const server = fastify();

server.register(cors, {});

server.get("/smoothie-templates", (_, reply) => {
  return reply.send(smoothieTemplates);
});

server.get("/ingredients", (_, reply) => {
  return reply.send(ingredientsList);
});

server.get("/portion-sizes", (_, reply) => {
  return reply.send(portionSizes);
});

server
  .listen({ port: 9998 })
  .then(() => {
    console.log("Server is running");
  })
  .catch((error) => {
    console.error(error);
  });
