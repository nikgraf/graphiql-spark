# GraphiQL Spark

Demo a GraphQL schema without a GraphQL endpoint.

## What & Why?

GraphiQL Spark allows you to run queries or mutations completely client side! In addition the query/mutation response is rendered once GraphiQL is mounted, which makes it ideal for blog posts.

**_Note_:** Out of the box GraphiQL requires you to press the `play` button to run the query and see the results.

### How is it different to GraphiQL?

Not by much. GraphiQL Spark is thin convinience layer on top of GraphiQL.

### Benefits

- No Downtime (your static site might work, but the GraphQL endpoint might be down)
- No Server Cost (why pay for demoing a GraphQL concept on your blog?)
- Faster feedback loop (no network request)

### Downsides

- Requires the packages `graphql` & `graphl-tool` which adds ~64kb (minified + gzipped) to the bundle.

## Install

```bash
# npm
npm install --save graphiql-spark
# yarn
yarn add graphiql-spark
```

## Usage

```js
import React from "react";
import GraphiQlSpark from "graphiql-spark";
import "graphiql/graphiql.css";

// Schema defined in the Schema Definition Language
const typeDefs = `
  type Post {
    title: String
  }

  type Query {
    posts: [Post]
  }
`;

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
const query = `query {
  posts {
    title
  }
}
`;

export default function SimpleExample() {
  return (
    <div style={{ height: "25rem", border: "1px solid #e0e0e0" }}>
      <GraphiQLSpark query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}
```

<img width="738" alt="simple-example" src="https://user-images.githubusercontent.com/223045/68088624-41c19800-fe61-11e9-97ef-d5f71b3c924c.png">

## More Examples

Please check out the docs at [https://nikgraf.github.io/graphiql-spark/](https://nikgraf.github.io/graphiql-spark/)

## FAQ

### Are relations (mutually-recursive resolver) possible?

Yes

### Are Mutations supported?

Yes

### Are Subscriptions supported?

No, but I would welcome a proposal on how this could be done.

### How does it work?

GraphiQL Spark builds a Schema locally in the browser and then directly can invoke the Schema instead of using a Transport Layer like HTTP.

### Can I use it with GraphQL Nexus or other Code-First Schema Generators?

Not yet, but probably makes sense to publish such a version. Ping me if you are interested to help. Ideally it would be a named export, but we make sure non-used dependencies are tree-shaked.

## Inspiration

Once upon a time I was giving a GraphQL beginner workshop using the The Star Wars API example. I wanted that in this example every GraphQL request is not more than a simple HTTP request. My attempt to demo this live failed since the example was built in a way that the production version would include a client side schema.

Once I started working on a new personal blog covering GraphQL concepts I was looking for a way to provide executable examples (instead of pasting text or images). And instead of finishing my blog post I procrastinated and built this tool 😄

## Contributing

```
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build for production, use `yarn build`.

### Docs / Examples

To run the docs locally (the examples are helpful during development) inside another tab run:

```
cd example
yarn # install dependencies
yarn start
```

The build command `yarn build` inside the example directory is optimized for generating the docs.
