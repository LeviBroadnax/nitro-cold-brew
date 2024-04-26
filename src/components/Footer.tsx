import React from "react";
import "./footer.css";
import shuffle from "just-shuffle";
const authors = shuffle(["Levi Broadnax 🐰", "Winston Palace 😺"]);
export default function Footer() {
  return (
    <div>
      <hr></hr>
      <div className="footer">
        {authors.map((e, key) => (
          <span className="author" key={key}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
