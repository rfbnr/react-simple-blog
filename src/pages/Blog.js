import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Blog";

        async function getArticles() {
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");

            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }

        getArticles();
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-desc">Example simple Blog with ReactJS</p>
            {loading ? (
                <i>loading articles ...</i>
            ) : (
                <div className="articles">
                    {articles.map((article) => {
                        return (
                            <article key={article.id} className="article">
                                <h3 className="article-title">
                                    <Link to={`/blog/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </h3>
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="articles-img"
                                />
                                <p className="article-time">
                                    {new Date(
                                        article.publishedAt,
                                    ).toLocaleDateString()}
                                </p>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Blog;
