import shuffle from "just-shuffle";
import "./footer.css";
const authors = shuffle(["Levi Broadnax 🐰", "Winston Palace 😺"]);
export function Footer() {
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
