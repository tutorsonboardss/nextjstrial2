import mysql from "serverless-mysql";
export const db = mysql({
  // config: {
  //   host: process.env.LOCAL_MYSQL_HOST,
  //   database: process.env.LOCAL_MYSQL_DATABASE,
  //   user: process.env.LOCAL_MYSQL_USERNAME,
  //   password: process.env.LOCAL_MYSQL_PASSWORD,
  //   port: "3306",
  // },
  config: {
    host: "127.0.0.1",
    database: "usersdb",
    user: "sudhagar",
    password: "hello",
    port: "3306",
  },
  // config: {
  //   host: process.env.MYSQL_HOST,
  //   database: process.env.MYSQL_DATABASE,
  //   user: process.env.MYSQL_USERNAME,
  //   password: process.env.MYSQL_PASSWORD,
  //   port: "3306",
  // },
});

export async function sql_query(query_string, values = []) {
  try {
    console.log("function sqlquery1 " + query_string);
    const results = await db.query(query_string, values);
    console.log("function sqlquery2");
    await db.end();
    console.log("function sqlquery3");
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}
