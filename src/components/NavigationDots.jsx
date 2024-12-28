/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation hide-on-mobile">
    {["home", "skills", "work", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={
          active === item
            ? {
                backgroundColor: "#000",
                outline: "2px solid #000000",
                outlineOffset: "4px",
              }
            : {}
        }
      />
    ))}
  </div>
);

export default NavigationDots;
