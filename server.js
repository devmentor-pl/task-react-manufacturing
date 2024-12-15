const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Twój plik z danymi
const middlewares = jsonServer.defaults();

// Middleware domyślne
server.use(middlewares);

// Middleware dodający nagłówek X-Total-Count
server.use((req, res, next) => {
  if (req.method === "GET" && req.query._page && req.query._limit) {
    const totalCount = router.db
      .get(req.path.replace("/", "")) // Pobiera nazwę kolekcji z URL
      .size()
      .value();

    res.setHeader("X-Total-Count", totalCount);
    res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
  }
  next();
});

// Obsługa API
server.use(router);

// Uruchomienie serwera
server.listen(5000, () => {
  console.log("JSON Server działa na porcie 5000");
});
