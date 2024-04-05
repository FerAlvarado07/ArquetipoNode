import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka";
import { UserTo } from "../../to/UserTo";
import { Op } from "sequelize";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    // Para enviar un mensaje a kafka
    // await Kafka.send("test", 'Hello');
    return User.findAll();
  },

  async create(user: UserTo): Promise<void> {
    // Para enviar un mensaje a kafka
    // await Kafka.send("test", 'Hello');
    let userModel: any = { ...user };
    await User.create(userModel);
  },

  async validate(user: UserTo): Promise<boolean> {
    let flag: boolean = true;
    console.log(user.name);

    if (user.name === undefined) {
      flag = false;
    }
    return flag;
  },
  async update(id: any, userTO: UserTo): Promise<[number, User[]]> {
    return await User.update(userTO, {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
  },

  async deleteUser(id: any): Promise<number> {
    return await User.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
  },
  async validateDelete(user: any): Promise<void> {
    const { id } = user;
    if (!id) {
      throw new ParametersError("id is required");
    }
    if (isNaN(id)) {
      throw new ParametersError("id is number");
    }
  },
};

export default UserService;
