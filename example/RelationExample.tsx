import * as React from 'react';
import GraphiQLSpark from '../.';
import 'graphiql/graphiql.css';
import { find, filter } from 'lodash';

const typeDefs = `
  type Author {
    id: ID!
    name: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    author: Author
  }

  type Query {
    posts: [Post]
    author(id: ID!): Author
  }
`;

const authors = [
  { id: 'xxx', name: 'Nik Graf' },
  { id: 'yyy', name: 'Max Stoiber' },
];

const posts = [
  { id: 'aaa', title: 'Advanced GraphQL Concepts', authorId: 'xxx' },
  { id: 'bbb', title: 'Why I Write CSS in JavaScript', authorId: 'yyy' },
];

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
  },

  Author: {
    posts: author => filter(posts, { authorId: author.id }),
  },

  Post: {
    author: post => find(authors, { id: post.authorId }),
  },
};

const query = `query {
  posts {
    title,
    author {
      name
      posts {
        id
        title
      }
    }
  }
}  
`;

export default function RelationExample() {
  return (
    <div style={{ height: 400, maxWidth: 640 }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}
