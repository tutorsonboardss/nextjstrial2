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
    console.log("sql_query function in db.js query_string : " + query_string);
    const results = await db.query(query_string, values);
    await db.end();
    console.log("sql_query function in db.js success");
    return results;
  } catch (e) {
    console.log("sql_query function in db.js catch error " + e);
    throw Error(e.message);
  }
}
