import * as React from 'react';
import GraphiQLLocal from '../.';
import GraphiQL from 'graphiql';
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

  type Mutation {
    createPost (
      title: String!
      authorId: ID!
    ): Post
  }
`;

const authors = [
  { id: 'xxx', name: 'Nik Graf' },
  { id: 'yyy', name: 'Max Stoiber' },
];

const posts = [
  { title: 'Advanced GraphQL Concepts', authorId: 'xxx' },
  {
    title: 'Why I Write CSS in JavaScript',
    authorId: 'yyy',
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
  },

  Mutation: {
    createPost: (_, { title, authorId }) => {
      const post = {
        id: Math.random()
          .toString(36)
          .substring(3),
        title,
        authorId,
      };
      posts.push(post);
      return post;
    },
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
    }
  }
}
`;

const queryWithVariable = `query($id: ID!) {
  author(id: $id) {
    name,
  }
}
`;

const mutation = `mutation ($title: String!, $authorId: ID!) {
  createPost(title: $title, authorId: $authorId) {
    id,
  }
}
`;

function Example() {
  return (
    <>
      <div style={{ height: 400, maxWidth: 640 }}>
        {/* Plain Query */}
        <GraphiQLLocal
          query={query}
          resolvers={resolvers}
          typeDefs={typeDefs}
        />
      </div>
      <div style={{ height: 400, maxWidth: 640 }}>
        {/* Query with Variables */}
        <GraphiQLLocal
          query={queryWithVariable}
          resolvers={resolvers}
          typeDefs={typeDefs}
          variables={JSON.stringify(
            {
              id: 'xxx',
            },
            null,
            2
          )}
        />
      </div>
      <div style={{ height: 400, maxWidth: 640 }}>
        {/* Mutation with Variables */}
        <GraphiQLLocal
          query={mutation}
          resolvers={resolvers}
          typeDefs={typeDefs}
          variables={JSON.stringify(
            {
              title: 'Hello World!',
              authorId: 'xxx',
            },
            null,
            2
          )}
        />
      </div>
      <div style={{ height: 400, maxWidth: 640 }}>
        {/* Empty Query */}
        <GraphiQLLocal resolvers={resolvers} typeDefs={typeDefs} />
      </div>
      <div style={{ height: 400, maxWidth: 640 }}>
        <GraphiQLLocal resolvers={resolvers} typeDefs={typeDefs}>
          {/* Custom Logo */}
          <GraphiQL.Logo>Custom Logo</GraphiQL.Logo>
        </GraphiQLLocal>
      </div>
    </>
  );
}

export default Example;
