import { useToggle } from "@uidotdev/usehooks";
import shuffle from "just-shuffle";
import { useEffect } from "react";
import "./footer.css";
const authors = shuffle([
  "Levi Broadnax 🐰",
  "Winston Palace 😺",
  "James Masino 🐱‍👤"
]);

export function Footer() {
  const [darkTheme, toggleDarkTheme] = useToggle(false);
  useEffect(() => {
    const { style } = document.documentElement;
    style.setProperty("color-scheme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <div>
      <hr></hr>
      <div className="footer">
        <button
          className={`fab ${darkTheme ? "dark" : "light"}`}
          onClick={toggleDarkTheme}></button>
        {authors.map((e, key) => (
          <span className="author" key={key}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
