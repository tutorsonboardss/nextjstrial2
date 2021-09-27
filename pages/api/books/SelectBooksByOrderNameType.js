import { sql_query } from "../../../lib/db";

const SelectBooksByOrderNameType = async (req, res) => {
  try {
    const ordername = req.body.ordername;
    const ordertype = req.body.ordertype;
    console.log(
      "function SelectBooksByOrderNameType" + ordername + " ..." + ordertype
    );
    const results = await sql_query(
      "SELECT book_id,isbn_number,book_name,author_name,publisher_name,category_name,year_published  FROM books_tbl ORDER BY " +
        ordername +
        " " +
        ordertype
    );
    console.log("function SelectBooksByOrderNameType 2");
    return res.status(200).json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksByOrderNameType;
