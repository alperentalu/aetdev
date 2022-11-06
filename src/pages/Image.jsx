import React from "react";
import { ThemeContextConsumer } from "../contexts/ThemeContext";
import "../styles/image.css"

function Image(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <button onClick={context.toggleTheme}>Click</button>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default Image;

