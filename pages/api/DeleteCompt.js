import { sql_query } from "../../lib/db";

const DeleteCompt = async (req, res) => {
  try {
    console.log("functionDeleteCompt 1");
    const userid = req.body.userid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log("function DeleteCompt 2" + req.body.userid);
    console.log("function DeleteCompt 3" + req.body.firstname);
    console.log("function DeleteCompt 4" + req.body.lastname);

    const results = await sql_query(
      "delete from users_tbl  where user_id='" + userid + "' "
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default DeleteCompt;
