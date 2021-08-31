import { sql_query } from "../../lib/db";

const InsertBookCompt = async (req, res) => {
  try {
    console.log("function insert book compt 1");
    const bookname = req.body.bookname;
    const authorname = req.body.authorname;
    const publishername = req.body.publishername;
    const categoryname = req.body.categoryname;
    const yearpublished = req.body.yearpublished;
    const isbnnumber = req.body.isbnnumber;

    console.log("function insert book compt 2" + req.body.bookname);
    console.log("function insert book compt 3" + req.body.authorname);
    const results = await sql_query(
      "insert into books_tbl(book_name,author_name,publisher_name,category_name,year_published,isbn_number) values('" +
        bookname +
        "','" +
        authorname +
        "','" +
        publishername +
        "','" +
        categoryname +
        "'," +
        yearpublished +
        ",'" +
        isbnnumber +
        "')"
    );

    return res.json(results);
  } catch (e) {
    console.log("catch error" + e.message);
    //res.status(500).json({ message: e.message });
    return res.json({ message: e.message });
  }
};

export default InsertBookCompt;
