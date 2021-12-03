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
  personalContacts: {
    main: "/personal-contacts",
    contacts: "/personal-contacts/contacts",
    registration: "/personal-contacts/registration",
    login: "/personal-contacts/login",
  },
};

export default routes;
