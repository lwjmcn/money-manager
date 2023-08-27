// client 요청을 처리하여 결괏값을 반환

import { IResponse } from "../common_type";
import { IUser } from "../model/user_entity";
import * as userRepository from "../repository/user_repository";

export const getUsers = async (): Promise<IResponse<IUser[]>> => {
  try {
    const data = await userRepository.selectUsers();
    return { statusCode: 200, data };
  } catch (e: any) {
    return { statusCode: 500, message: e.message };
  }
};

export const createUser = async (name: string): Promise<IResponse<string>> => {
  try {
    const data = await userRepository.insertUser(name);
    return { statusCode: 200, data };
  } catch (e: any) {
    return { statusCode: 500, message: e.message };
  }
};
