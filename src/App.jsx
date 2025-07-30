import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debounceQuery.trim() === "") {
      setResults([]);
      return;
    }
    fetch(`https://dummyjson.com/products/search?q=${debounceQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [debounceQuery]);

  return (
    <>
      <div className="search-container">
        <h1> 🔍︎ Search</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="results">
          {results.length === 0 && debounceQuery && (
            <p> No products found for "{debounceQuery}"</p>
          )}
          {results.map((product) => {
            return (
              <div key={product.id} className="card">
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p> ₹ {product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
