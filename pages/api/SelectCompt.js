import { sql_query } from "../../lib/db";

const SelectCompt = async (req, res) => {
  try {
    console.log("function Select Compt 1");
    const results = await sql_query(" SELECT * FROM users_tbl ");
    console.log("function Select Compt 2");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default SelectCompt;
