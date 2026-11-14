
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";
import gameinsMd from "../content/gameins.md?raw";
import "../styles/artikkelien.css";

const Gaming = () => {
  const { articleId } = useParams();

  const rawArticles = gameinsMd.split(/(?:\r?\n)---(?:\r?\n)/); //regex for splitting articles by '---' with optional newlines
  const articles = rawArticles.map((block) => {
    const lines = block.split(/\r?\n/);
    const idLineIndex = lines.findIndex((line) =>
      line.trim().toLowerCase().startsWith("id:")
    );

    let id = "";
    let content = block;

    if (idLineIndex !== -1) {
      id = lines[idLineIndex]
        .replace(/id:/i, "")
        .trim()
        .toLowerCase();

      content = lines.slice(idLineIndex + 1).join("\n");
    }

    return { id, content };
  }).filter((art) => art.id !== "");

  const targetId = articleId ? articleId.toLowerCase() : articles[0]?.id;
  const currentArticle = articles.find((art) => art.id === targetId);

  return (
    <div> 

        {/* Muista luoda omat CSS määritykset jotka sopivat paremmin peli osioihin*/}
        
      <div className="gaming-articles1">

        <main>   {/* Näytettävät artikkelit*/}
          {currentArticle ? (
            <article>
             
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{currentArticle.content}</ReactMarkdown>  

            </article>  
          ) : (
            <div>
              <h2>Artikkelia ei löytynyt!</h2>
              <p>Tunnisteella "{articleId}" ei löydetty uutista.</p>
              <Link to="/gaming">Palaa uusimpaan uutiseen</Link>
            </div>
          )}
        </main>   {/* Näytettävät artikkelit*/}

        <aside className="news-sidebar">

          {/* Voidaaan ottaa käyttöön jos haluaa näyttää muut linkit tai vaihtoehtoisia esim liittyviä linkkejä*/}

          <h1>Lisää katsauksia</h1>
          <ul>
            {articles.map((art) => (
              <li key={art.id}>
                <Link
                  to={`/gaming/${art.id}`}
                  style={{
                    fontWeight: art.id === targetId ? "bold" : "normal",
                  }}
                >
                  {art.id}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Gaming;