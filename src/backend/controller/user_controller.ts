// service로부터 결괏값을 받아 view 반환

import { IResponse } from "../common_type";
import { IUser } from "../model/user_entity";
import * as userService from "../service/user_service";

export const getUsers = async (): Promise<IResponse<IUser[]>> => {
  try {
    return await userService.getUsers();
  } catch (e: any) {
    return { statusCode: 500, message: e.message };
  }
};

export const createUser = async (name: string): Promise<IResponse<string>> => {
  try {
    return await userService.createUser(name);
  } catch (e: any) {
    return { statusCode: 500, message: e.message };
  }
};
