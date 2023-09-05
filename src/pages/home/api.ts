import { ToastAndroid } from "react-native";
import * as userController from "../../backend/controller/user_controller";
import { IUser } from "../../backend/model/user_entity";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await userController.getUsers();
  switch (response.statusCode) {
    case 200:
      ToastAndroid.show("유저를 조회합니다", ToastAndroid.SHORT);
      return response.data!;
    case 500:
      ToastAndroid.show("오류가 발생했습니다.", ToastAndroid.SHORT);
      console.log(response.message);
      return [];
  }
};
export const createUser = async (name: string): Promise<string> => {
  const response = await userController.createUser(name);
  switch (response.statusCode) {
    case 200:
      ToastAndroid.show("유저가 추가되었습니다", ToastAndroid.SHORT);
      return response.data!;
    case 500:
      ToastAndroid.show("오류가 발생했습니다.", ToastAndroid.SHORT);
      console.log(response.message);
      return "";
  }
};
