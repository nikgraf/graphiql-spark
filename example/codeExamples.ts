export const simple = `import React from "react";
import GraphiQLSpark from "graphiql-spark";
import "graphiql/graphiql.css";

// Schema defined in the Schema Definition Language
const typeDefs = \`
  type Post {
    title: String
  }

  type Query {
    posts: [Post]
  }
\`;

// Client-side resolvers
const resolvers = {
  Query: {
    posts: () => [
      { title: "Advanced GraphQL Concepts" },
      { title: "Why I Write CSS in JavaScript" }
    ]
  }
};

// Example query
const query = \`query {
  posts {
    title
  }
}
\`;

export default function SimpleExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}
`;

export const relation = `import React from "react";
import GraphiQLSpark from "graphiql-spark";
import "graphiql/graphiql.css";
import { find, filter } from "lodash";

const typeDefs = \`
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
\`;

const authors = [
  { id: "xxx", name: "Nik Graf" },
  { id: "yyy", name: "Max Stoiber" }
];

const posts = [
  { id: "aaa", title: "Advanced GraphQL Concepts", authorId: "xxx" },
  { id: "bbb", title: "Why I Write CSS in JavaScript", authorId: "yyy" }
];

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id })
  },

  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },

  Post: {
    author: post => find(authors, { id: post.authorId })
  }
};

const query = \`query {
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
\`;

export default function RelationExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}`;

export const variables = `import React from "react";
import GraphiQLSpark from "graphiql-spark";
import "graphiql/graphiql.css";
import { find } from "lodash";

const typeDefs = \`
  type Author {
    id: ID!
    name: String
  }

  type Query {
    author(id: ID!): Author
  }
\`;

const authors = [
  { id: "xxx", name: "Nik Graf" },
  { id: "yyy", name: "Max Stoiber" }
];

const resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id })
  }
};

const queryWithVariable = \`query($id: ID!) {
  author(id: $id) {
    name
  }
}
\`;

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
}`;

export const mutation = `import React from "react";
import GraphiQLSpark from "graphiql-spark";
import "graphiql/graphiql.css";
import { find, filter } from "lodash";

const typeDefs = \`
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
\`;

const authors = [
  { id: "xxx", name: "Nik Graf" },
  { id: "yyy", name: "Max Stoiber" }
];

const posts = [
  { id: "aaa", title: "Advanced GraphQL Concepts", authorId: "xxx" },
  { id: "bbb", title: "Why I Write CSS in JavaScript", authorId: "yyy" }
];

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id })
  },

  Mutation: {
    createPost: (_, { title, authorId }) => {
      const post = {
        id: Math.random()
          .toString(36)
          .substring(3),
        title,
        authorId
      };
      posts.push(post);
      return post;
    }
  },

  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },

  Post: {
    author: post => find(authors, { id: post.authorId })
  }
};

const mutation = \`mutation ($title: String!, $authorId: ID!) {
  createPost(title: $title, authorId: $authorId) {
    id,
  }
}
\`;

export default function MutationExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark
        query={mutation}
        resolvers={resolvers}
        typeDefs={typeDefs}
        variables={JSON.stringify(
          {
            title: "Hello World!",
            authorId: "xxx"
          },
          null,
          2
        )}
      />
    </div>
  );
}`;

export const customLogo = `import React from "react";
import GraphiQLSpark from "graphiql-spark";
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

const typeDefs = \`
  type Post {
    title: String
  }

  type Query {
    posts: [Post]
  }
\`;

const query = \`query {
  posts {
    title
  }
}
\`;

export default function CustomLogoExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs}>
        <GraphiQL.Logo>Custom Logo 🙌</GraphiQL.Logo>
      </GraphiQLSpark>
    </div>
  );
}`;

export const inlineMdx = `import GraphiQLSpark from "graphiql-spark";
import "graphiql/graphiql.css";

export const resolvers = {
  Query: {
    posts: () => [
      { title: "Advanced GraphQL Concepts" },
      { title: "Why I Write CSS in JavaScript" }
    ]
  }
};

export const typeDefs = \`
  type Post {
    title: String
  }
  type Query {
    posts: [Post]
  }
\`;

export const query = \`query {
  posts {
    title
  }
}
\`;

<div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
  <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs} />
</div>`;

export const componentMdx = `import SimpleExample from "./SimpleExample";

<SimpleExample />`;
