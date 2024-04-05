import { UserService } from "../../services";
import { IUserFacade } from "./interface";
import { UserTo } from "../../to/UserTo";
import { NotFoundError, ParametersError } from "../../config/error";
import User from "../../models/User.model";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    let User = await UserService.findAll();
    let userMap: any[] = [];
    User.forEach((v) => {
      userMap.push({ id: v.id, name: v.name, email: v.email });
    });

    return userMap;
  },

  /**
   * @returns {Promise < void >}
   * @memberof UserFacade
   */
  async create(user: UserTo): Promise<void> {
    if (!(await UserService.validate(user))) {
      throw new ParametersError("Name is required");
    }
    await UserService.create(user);
  },

  /**
   * @returns {Promise < void>}
   * @memberof UserFacade
   */

  async update(id: number, user: UserTo): Promise<number> {
    if (!(await UserService.validate(user))) {
      throw new ParametersError("name is required");
    }

    let response = await UserService.update(id, user);
    if (response[0] === 0) {
      throw new NotFoundError("user not found");
    }
    return response[0];
  },

  async deleteUser(user: any): Promise<number> {
    await UserService.validateDelete(user);

    let response: number = await UserService.deleteUser(user.id);

    if (response === 0) {
      throw new NotFoundError("user not found");
    }
    return response;
  },
};

export default UserFacade;
