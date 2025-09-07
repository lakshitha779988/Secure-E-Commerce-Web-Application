/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as styles from "../styles/searchBarStyles";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form css={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        css={styles.input}
      />
      <button type="submit" css={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
