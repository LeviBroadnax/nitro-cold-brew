import { useConfig } from "@store";
import { useToggle } from "@uidotdev/usehooks";
import shuffle from "just-shuffle";
import { MouseEvent, useEffect } from "react";
import "./footer.css";

export function Footer() {
  const authors = useConfig(e => e.Authors);
  const [darkTheme, toggleDarkTheme] = useToggle(false);

  useEffect(() => {
    const { style } = document.documentElement;
    style.setProperty("color-scheme", darkTheme ? "light" : "dark");
  }, [darkTheme]);

  function onThemeClick(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    toggleDarkTheme();
  }

  return (
    <div className="footer">
      <div className="left">
        <button
          className={`fab theme-selector ${darkTheme ? "dark" : "light"}`}
          onClick={onThemeClick}></button>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="authors">
          {shuffle(authors).map((e: string, key) => (
            <span className="author" key={key}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
