import * as React from "react";
import GraphiQLSpark from "../.";
import "graphiql/graphiql.css";
import { find } from "lodash";

const typeDefs = `
  type Author {
    id: ID!
    name: String
  }

  type Query {
    author(id: ID!): Author
  }
`;

const authors = [
  { id: "xxx", name: "Nik Graf" },
  { id: "yyy", name: "Max Stoiber" }
];

const resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id })
  }
};

const queryWithVariable = `query($id: ID!) {
  author(id: $id) {
    name
  }
}
`;

export default function VariablesExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark
        query={queryWithVariable}
        resolvers={resolvers}
        typeDefs={typeDefs}
        variables={JSON.stringify(
          {
            id: "xxx"
          },
          null,
          2
        )}
      />
    </div>
  );
}
