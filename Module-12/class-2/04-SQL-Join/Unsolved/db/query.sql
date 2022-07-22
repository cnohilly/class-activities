SELECT
  books.book_name as 'Book Name', prices.price AS price
FROM books
JOIN prices ON books.price = prices.id;
