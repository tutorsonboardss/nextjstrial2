import { sql_query } from "../../lib/db";

const UpdateBooksCompt = async (req, res) => {
  try {
    console.log("functionUpdateCompt 1");

    const bookid = req.body.bookid;
    const bookname = req.body.bookname;
    const authorname = req.body.authorname;
    const publishername = req.body.publishername;
    const categoryname = req.body.categoryname;
    const yearpublished = req.body.yearpublished;
    const isbnnumber = req.body.isbnnumber;

    console.log("function UpdateCompt 2" + req.body.bookid);
    console.log("function UpdateCompt 3" + req.body.bookname);
    console.log("function UpdateCompt 4" + req.body.authorname);

    // const title = req.body.title;
    // const content = req.body.content;
    // console.log("function posts handler2 update title" + req.body.title);
    // console.log("function posts handler3 update content" + req.body.content);
    const results = await sql_query(
      "update books_tbl set isbn_number ='" +
        isbnnumber +
        "', book_name ='" +
        bookname +
        "' , author_name ='" +
        authorname +
        "', publisher_name ='" +
        publishername +
        "', category_name ='" +
        categoryname +
        "',year_published =" +
        yearpublished +
        " where book_id=" +
        bookid
    );

    return res.json(results);
  } catch (e) {
    // res.status(500).json({ message: e.message });
    return res.json({ message: e.message });
    //return res.status(500).send(e.message)
  }
};

export default UpdateBooksCompt;
