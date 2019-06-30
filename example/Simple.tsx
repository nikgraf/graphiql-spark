import * as React from 'react';
import GraphiQLLocal from '../.';
import 'graphiql/graphiql.css';

const resolvers = {
  Query: {
    posts: () => [
      { title: 'Advanced GraphQL Concepts', author: { name: 'Nik Graf' } },
      {
        title: 'Why I Write CSS in JavaScript',
        author: { name: 'Max Stoiber' },
      },
    ],
  },
};

const typeDefs = `
  type Author {
    name: String
  }

  type Post {
    title: String
    author: Author!
  }

  type Query {
    posts: [Post]
  }
`;

const query = `query {
  posts {
    title,
    author {
      name
    }
  }
}
`;

function Example() {
  return (
    <div style={{ height: 400, maxWidth: 640 }}>
      <GraphiQLLocal query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}

export default Example;
