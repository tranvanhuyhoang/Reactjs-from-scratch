import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import GlocalStyles from "./components/GlocalStyles";

import styles from "./style.module.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function App() {
  let colorBlack = false;
  return (
    <GlocalStyles>
      <div
        className={classnames(styles.wrapPage, "backgroundYellow", {
          [styles.colorBlack]: colorBlack,
        })}
      >
        <h1>Set up react with webpack và babel</h1>
      </div>
    </GlocalStyles>
  );
}

root.render(<App />);
