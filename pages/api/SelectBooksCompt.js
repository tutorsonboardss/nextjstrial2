import { sql_query } from "../../lib/db";

const SelectBooksCompt = async (req, res) => {
  try {
    console.log("function Select Compt 1");

    const results = await sql_query(
      "SELECT book_id,isbn_number,book_name,author_name,publisher_name,category_name,year_published  FROM books_tbl "
    );
    console.log("function Select Books Compt 2");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksCompt;
