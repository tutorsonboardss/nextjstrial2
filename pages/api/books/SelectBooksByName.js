import { sql_query } from "../../../lib/db";

const SelectBooksCompt = async (req, res) => {
  try {
    //console.log("function Select Book By Name Compt 1");

    const bookname = req.body.bookname;
    console.log("Api Select Book By Name  - bookname : " + bookname);
    const results = await sql_query(
      "SELECT book_id,isbn_number,book_name,author_name,publisher_name,category_name,year_published  FROM books_tbl where book_name ='" +
        bookname +
        "'  "
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksCompt;
