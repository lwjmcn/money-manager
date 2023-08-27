import * as userController from "../../backend/controller/user_controller";

export const getUsers = async () => {
  const response = await userController.getUsers();
  if (response.statusCode === 200) {
    return response.data;
  } else {
    // rootModal.showModal("Error", response.message);
  }
};
export const createUser = async (name: string) => {
  const respones = await userController.createUser(name);
  if (respones.statusCode === 200) {
    return respones.data;
  } else {
    // rootModal.showModal("Error", respones.message);
  }
};
