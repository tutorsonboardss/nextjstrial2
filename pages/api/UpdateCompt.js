import { sql_query } from "../../lib/db";

const UpdateCompt = async (req, res) => {
  try {
    console.log("functionUpdateCompt 1");
    const userid = req.body.userid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log("function UpdateCompt 2" + req.body.userid);
    console.log("function UpdateCompt 3" + req.body.firstname);
    console.log("function UpdateCompt 4" + req.body.lastname);

    // const title = req.body.title;
    // const content = req.body.content;
    // console.log("function posts handler2 update title" + req.body.title);
    // console.log("function posts handler3 update content" + req.body.content);
    const results = await sql_query(
      "update users_tbl set first_name ='" +
        firstname +
        "', last_name ='" +
        lastname +
        "' where user_id='" +
        userid +
        "'"
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default UpdateCompt;
