import React from "react";
import { SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const date = new Date();
    const year = date.getFullYear();

    return (
      <div
        id={idName}
        className={`app__container ${classNames}`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          {idName === "contact" && (
            <div className="copyright">
              <p className="p-text">© {year} Muhammad Zamin</p>
              <p className="p-text">All rights reserved.</p>
            </div>
          )}
        </div>
        {/* <NavigationDots active={idName} /> */}
      </div>
    );
  };

export default AppWrap;
