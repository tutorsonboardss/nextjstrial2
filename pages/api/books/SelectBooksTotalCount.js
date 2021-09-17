import { sql_query } from "../../../lib/db";

const SelectBooksCount = async (req, res) => {
  try {
    console.log("function Select books count 1");

    const results = await sql_query(
      "SELECT COUNT(*) AS total_count_books FROM books_tbl "
    );
    console.log("function Select Books count Compt 2");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectBooksCount;
