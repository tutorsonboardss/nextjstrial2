import { sql_query } from "../../../lib/db";

const SelectBooksAsc = async (req, res) => {
  try {
    console.log("function SelectBooksAsc 1");
    const results = await sql_query(
      "SELECT book_id,isbn_number,book_name,author_name,publisher_name,category_name,year_published  FROM books_tbl ORDER BY book_name DESC"
    );
    console.log("function SelectBooksAsc 2");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksAsc;
