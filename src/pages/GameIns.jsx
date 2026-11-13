import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import gamingMd from "../content/gaming.md?raw";

const GameIns = () => {

  const components = {
    a: ({ href, children, ...props }) => {

      if (href && href.startsWith("/")) {
        return (
          <Link to={href.toLowerCase()} {...props}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
  };

  return (
    <section className="news-section">
      <ReactMarkdown components={components}>
        {gamingMd}
      </ReactMarkdown>
    </section>
  );
};

export default GameIns;