const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Hola");
  });
  await mongoose.connect(
    "mongodb://localhost:27017/AUDIT_DB",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log(`Successfully connected to DB`);
    }
  );
  app.listen(4000, () => console.log("Server running"));
};

startServer();
