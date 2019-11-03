import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import "./theme.css";

export default ({ code }) => {
  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "1rem" }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
