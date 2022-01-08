const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar GraphQLDateTime

  type AuditLog {
    id: ID
    createdAt: GraphQLDateTime
    severity: String
    component: String
    context: String
    message: String
    tags: [String]
  }

  type Query {
    hello: String
    getLogs: [AuditLog]
  }

  input LogInput {
    createdAt: GraphQLDateTime
    severity: String
    component: String
    context: String
    message: String
    tags: [String]
  }

  type Mutation {
    createLog(log: LogInput): AuditLog
  }
`;

module.exports = typeDefs;
