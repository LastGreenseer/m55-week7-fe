import React from "react";
import "./CardContainer.css";

import { useState } from "react";

import { getAllBooks } from "../../utils/fetch";

const CardContainer = () => {
  const [books, setBooks] = useState([]);

  const clickHandler = async (e) => {
    e.preventDefault();
    // console.log("hello click handler");

    const allBooks = await getAllBooks();

    await setBooks([...allBooks.books]);
  };

  return (
    <div className="card-container">
      <div>
        <button onClick={(e) => clickHandler(e)}>GetAllBooks</button>
      </div>
      <div>
        {books.length >= 1
          ? books.map((book, key) => <p>Title: {book.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default CardContainer;
