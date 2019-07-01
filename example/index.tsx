import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleExample from './SimpleExample';
import RelationExample from './RelationExample';
import VariablesExample from './VariablesExample';
import MutationExample from './MutationExample';
import CustomLogoExample from './CustomLogoExample';
import { MDXProvider } from '@mdx-js/tag';
import ComponentMdxExample from './ComponentMdxExample.mdx';
import InlineMdxExample from './InlineMdxExample.mdx';

const App = () => {
  return (
    <div>
      <h1>GraphiQL Local Examples</h1>
      <h2>Simple Example</h2>
      <SimpleExample />
      <h2>Relation Example</h2>
      <RelationExample />
      <h2>Variables Example</h2>
      <VariablesExample />
      <h2>Mutation Example</h2>
      <MutationExample />
      <h2>Custom Logo Example</h2>
      <CustomLogoExample />
      <h2>MDX Examples</h2>
      <MDXProvider>
        <ComponentMdxExample />
        <InlineMdxExample />
      </MDXProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
