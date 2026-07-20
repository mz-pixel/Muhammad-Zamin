import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    // const date = new Date();
    // const year = date.getFullYear();

    return (
      <section id={idName} className={`app__section ${classNames || ""}`}>
        <div className="app__section-inner">
          <Component />
          {idName === "contact" && (
            <div className="copyright">
              <p>Built with 💚 in Toronto.</p>
            </div>
          )}
        </div>
      </section>
    );
  };

export default AppWrap;
