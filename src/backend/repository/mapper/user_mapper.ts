// 쿼리
const table_name = "test";

export const selectUsersQuery = `SELECT * FROM ${table_name}`;
export const insertUserQuery = `INSERT INTO ${table_name} (name) VALUES (?)`;
