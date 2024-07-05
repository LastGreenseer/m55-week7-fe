import { useState } from "react";

import "./AddBookContainer.css";

import { addBook } from "../../utils/fetch";

const AddBookContainer = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const changeHandler = (event, setter, state) => {
    setter(event.target.value);
    console.log(state);
  };

  const submitHandler = async (event, title, author, genre) => {
    event.preventDefault();
    console.log("submit handler");

    await addBook(title, author, genre);
  };

  return (
    <div className="add-book-container">
      <h2>Add a Book</h2>
      <form
        onSubmit={(event) => submitHandler(event, title, author, genre)}
        className="add-book-form"
      >
        <input
          onChange={(event) => changeHandler(event, setTitle, title)}
          placeholder="Title goes here..."
        />
        <input
          onChange={(event) => changeHandler(event, setAuthor, author)}
          placeholder="Author goes here..."
        />
        <input
          onChange={(event) => changeHandler(event, setGenre, genre)}
          placeholder="Genre goes here..."
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookContainer;
