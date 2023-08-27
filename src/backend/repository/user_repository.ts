// query를 처리하는 부분

import db from "../db";
import { IUser } from "../model/user_entity";
import { Transaction } from "react-native-sqlite-storage";
import * as userMapper from "./mapper/user_mapper";

export const selectUsers = async (): Promise<IUser[]> => {
  return await new Promise<IUser[]>((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        userMapper.selectUsersQuery,
        [],
        (tx, results) => {
          resolve(results.rows.raw());
        },
        err => {
          reject(err);
        },
      );
    });
  });
};

export const insertUser = async (name: string): Promise<string> => {
  return await new Promise<string>((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        userMapper.insertUserQuery,
        [name],
        (tx, results) => {
          resolve(`{ id: ${results.insertId}, name: ${name} } 추가 완료`);
        },
        err => {
          reject(err);
        },
      );
    });
  });
};
