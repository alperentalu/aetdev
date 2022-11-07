import React from "react";
import "../styles/image.css"

function Image({context}) {
  return (
    <>
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <button onClick={context.toggleTheme}>Click</button>
        </div>
      </>
  );
}

export default Image;

