import { sql_query } from "../../lib/db";

const DeleteBooksCompt = async (req, res) => {
  try {
    console.log("functionDeleteBooksCompt 1");
    const bookid = req.body.bookid;
    const bookname = req.body.bookname;
    const authorname = req.body.authorname;
    const publishername = req.body.publishername;
    const categoryname = req.body.categoryname;
    const yearpublished = req.body.yearpublished;
    const isbnnumber = req.body.isbnnumber;
    console.log("function DeleteCompt 2" + req.body.bookid);
    console.log("function DeleteCompt 3" + req.body.bookname);
    console.log("function DeleteCompt 4" + req.body.authorname);

    const results = await sql_query(
      "delete from books_tbl  where book_id='" + bookid + "' "
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default DeleteBooksCompt;
