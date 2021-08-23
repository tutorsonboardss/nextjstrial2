import { sql_query } from "../../lib/db";

const InsertCompt = async (req, res) => {
  try {
    console.log("function insert compt 1");
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log("function insert compt 2" + req.body.firstname);
    console.log("function insert compt 3" + req.body.lastname);
    const results = await sql_query(
      "insert into users_tbl(first_name,last_name) values('" +
        firstname +
        "','" +
        lastname +
        "')"
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default InsertCompt;
