declare module 'graphiql' {
  import React from 'react';

  interface GraphiQLProps {
    fetcher: Function;
    schema?: any;
    query?: string;
    variables?: string;
    operationName?: string;
    response?: string;
    storage?: any;
    defaultQuery?: string;
    onCopyQuery?: () => any;
    onEditQuery?: () => any;
    onEditVariables?: () => any;
    onEditOperationName?: () => any;
    onToggleDocs?: () => any;
    getDefaultFieldNames?: () => any;
    editorTheme?: string;
    onToggleHistory?: () => any;
    ResultsTooltip?: any;
    readOnly?: boolean;
  }

  class GraphiQl extends React.Component<GraphiQLProps, {}> {
    static Logo: React.FC;
  }

  export default GraphiQl;
}
