# GraphiQL<sup>Local</sup>

GraphiQL<sup>Local</sup> allows you to run GraphQL queries or mutations completely client side in a GraphiQL instance.
This allows you to demo a schema or teach GraphQL on your website without having to worry about a running GraphQL endpoint.

In addition it's setup to run the provied query or mutation right away and show the returned response.

## Benefits

- No Downtime (your static site might work, but the GraphQL endpoint might be down)
- No Server Cost (why pay for demoing a GraphQL concept on your blog?)
- Faster feedback loop (no network request)

## How to use

```js
import React from 'react';
import GraphiQLLocal from 'graphiql-local';
import 'graphiql/graphiql.css';

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
      { title: 'Advanced GraphQL Concepts' },
      { title: 'Why I Write CSS in JavaScript' },
    ],
  },
};

// Example query
const query = `query {
  posts {
    title
  }
}
`;

export default function Example() {
  return (
    <div style={{ height: 400, maxWidth: 640 }}>
      <GraphiQLLocal query={query} resolvers={resolvers} typeDefs={typeDefs} />
    </div>
  );
}
```

## FAQ

### Are Mutations supported?

Yes, as long as you implement a resolver it will work.

### Are Subscriptions supported?

No, but I would welcome a proposal on how this could be done.

## Inspiration

Once upon a time I was giving a GraphQL beginner workshop using the The Star Wars API example. I wanted that in this example every GraphQL request is not more than a simple HTTP request. My attempt to demo this live failed since the example was built in a way that the production version would include a client side schema.

Once I started working on a new personal blog covering GraphQL concepts I was looking for a way to provide executable examples (instead of pasting text or images). And instead of finishing my blog post I procrastinated and built this tool 😄

## Contributing

```
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

To do a one-off build, use `npm run build` or `yarn build`.

### Using the Playground

```
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**!
