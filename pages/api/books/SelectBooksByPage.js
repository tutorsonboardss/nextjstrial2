import { sql_query } from "../../../lib/db";

const SelectBooksByPage = async (req, res) => {
  try {
    //console.log("function Select Book By Name Compt 1");

    const startfrom = req.body.startfrom;
    const numperpage = req.body.numperpage;
    console.log("Api Select Book ByPage Start  - : " + startfrom);
    console.log("Api Select Book ByPage numperpage  - : " + numperpage);
    const results = await sql_query(
      "SELECT book_id,isbn_number,book_name,author_name,publisher_name,category_name,year_published  FROM books_tbl LIMIT " +
        startfrom +
        "," +
        numperpage +
        " "
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksByPage;
