const routes = {
  home: "/",
  imageGallery: "/imagegallery",
  sendbox: "/sendbox",
  booksShelf: {
    main: "/booksshelf",
    books: "/booksshelf/books",
    authors: "/booksshelf/authors",
    bookView: "/booksshelf/books/:bookId",
  },
  nasa: {
    main: "/nasa",
    images: "/nasa/images",
    search: "/nasa/search",
    imageView: "/nasa/images/:imageDate",
  },
};

export default routes;
