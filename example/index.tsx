import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Simple from './Simple';
import Advanced from './Advanced';

const App = () => {
  return (
    <div>
      <Simple />
      <Advanced />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
