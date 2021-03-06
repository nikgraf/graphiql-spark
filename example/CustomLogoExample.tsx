import * as React from "react";
import GraphiQLSpark from "../.";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";

const resolvers = {
  Query: {
    posts: () => [
      { title: "Advanced GraphQL Concepts" },
      { title: "Why I Write CSS in JavaScript" }
    ]
  }
};

const typeDefs = `
  type Post {
    title: String
  }

  type Query {
    posts: [Post]
  }
`;

const query = `query {
  posts {
    title
  }
}
`;

export default function CustomLogoExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs}>
        <GraphiQL.Logo>Custom Logo 🙌</GraphiQL.Logo>
      </GraphiQLSpark>
    </div>
  );
}
