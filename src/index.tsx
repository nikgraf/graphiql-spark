import React, { useState, useEffect } from 'react';
import GraphiQL from 'graphiql';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

interface GraphQLParams {
  query: string;
  variables?: { [key: string]: any };
  operationName?: string;
}

interface Props {
  typeDefs: any;
  resolvers: any;
  query?: string;
  variables?: string;
  operationName?: string;
}

const GraphiQLSpark: React.FC<Props> = ({
  typeDefs,
  resolvers,
  children,
  ...rest
}) => {
  const [response, setResponse] = useState();

  function graphQLFetcher(graphQLParams: GraphQLParams) {
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });
    const { query, variables, operationName } = graphQLParams;
    return graphql(schema, query, resolvers, null, variables, operationName);
  }

  useEffect(() => {
    async function getInitialResponse() {
      if (!rest.query) return null;
      const vars = rest.variables && JSON.parse(rest.variables);
      const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
      });
      const jsonResponse = await graphql(
        schema,
        rest.query,
        null,
        null,
        vars,
        rest.operationName
      );
      setResponse(JSON.stringify(jsonResponse, null, 2));
      return null;
    }
    getInitialResponse();
  }, [rest.query, rest.variables, rest.operationName, typeDefs, resolvers]);

  return (
    <GraphiQL {...rest} fetcher={graphQLFetcher} response={response}>
      {children ? (
        children
      ) : (
        <GraphiQL.Logo>
          GraphiQL<sup style={{ fontSize: '0.6em' }}>Local</sup>
        </GraphiQL.Logo>
      )}
    </GraphiQL>
  );
};

export default GraphiQLSpark;
