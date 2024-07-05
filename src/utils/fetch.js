export const getAllBooks = async () => {
  console.log("getAllBooks hit in /utils/fetch.js");
  const response = await fetch("http://localhost:5001/books/getAllBooks", {
    method: "GET",
    mode: "cors",
    headers: {
        "content-Type" : "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const addBook = async (title, author, genre) => {
  console.log("addBook hit in /utils/fetch.js");
  const response = await fetch("http://localhost:5001/books/addBook", {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
        title: title,
        author: author,
        genre: genre,
    }),
  });

  const data = await response.json();
  console.log(data);
};
