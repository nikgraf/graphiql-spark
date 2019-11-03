import "react-app-polyfill/ie11";
import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import SimpleExample from "./SimpleExample";
import RelationExample from "./RelationExample";
import VariablesExample from "./VariablesExample";
import MutationExample from "./MutationExample";
import CustomLogoExample from "./CustomLogoExample";
import { MDXProvider } from "@mdx-js/tag";
import ComponentMdxExample from "./ComponentMdxExample.mdx";
import InlineMdxExample from "./InlineMdxExample.mdx";
import Code from "./Code";
import { Main, Header, Footer, H2 } from "./styles";
import {
  simple,
  relation,
  variables,
  mutation,
  customLogo,
  inlineMdx,
  componentMdx
} from "./codeExamples";

const App = () => {
  return (
    <>
      <Header>
        <h1>GraphiQL Spark ✨</h1>
        <p>Demo a GraphQL schema without a GraphQL endpoint</p>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=nikgraf&repo=graphiql-spark&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="180px"
          height="30px"
          style={{ marginTop: "2rem" }}
        />
      </Header>
      <Main>
        <H2>Simple Example</H2>
        <Code code={simple} />
        <SimpleExample />
        <H2>Relation Example</H2>
        <Code code={relation} />
        <RelationExample />
        <H2>Variables Example</H2>
        <Code code={variables} />
        <VariablesExample />
        <H2>Mutation Example</H2>
        <Code code={mutation} />
        <MutationExample />
        <H2>Custom Logo Example</H2>
        <Code code={customLogo} />
        <CustomLogoExample />
        <H2>MDX Examples</H2>
        <MDXProvider>
          <h3>Inline Definition MDX Example</h3>
          <Code code={inlineMdx} />
          <ComponentMdxExample />
          <h3>Import Component MDX Example</h3>
          <Code code={componentMdx} />
          <InlineMdxExample />
        </MDXProvider>
      </Main>
      <Footer>
        Built on top of{" "}
        <a href="https://github.com/graphql/graphiql">GraphiQL</a>. Made by{" "}
        <a href="https://www.nikgraf.com">Nik Graf</a>
      </Footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
