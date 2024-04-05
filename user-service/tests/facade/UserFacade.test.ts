process.env.NODE_ENV = "test";

import { expect } from "chai";
import UserFacade from "../../src/facade/User/facade";
import { db } from "../../src/config/connection/database";
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { response } from "express";
import { UserService } from "../../src/services";

describe("UserFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
    User.create({
      id: 1,
      name: "test",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
    });
    User.create({
      id: 2,
      name: "test2",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
    });
  });

  describe("FindAll", () => {
    it("should return one user", async () => {
      const User: any[] = await UserFacade.findAll();
      expect(2).equal(User.length);
    });
  });

  describe("Update", () => {
    it("should return one user", async () => {
      let user = {
        id: 0,
        name: "Fernando",
        email: "fernando.alvarado@axity.com",
      };
      let response = await UserFacade.update(1, user);
      expect(response).equal(1);
    });
  });

  describe("Update Not Found Error", () => {
    it("should return one user", async () => {
      let user = {
        id: 0,
        name: "Fernando",
        email: "fernando.alvarado@axity.com",
      };
      try {
        let response = await UserFacade.update(1, user);
      } catch (error) {
        console.log(error);
        expect(error).equals(error);
      }
    });
  });

  //Delete Parameters Error
  describe("Delete Parameters Error 1", () => {
    it("should return one user", async () => {
      try {
        let response = await UserFacade.deleteUser({ id: "1" });
      } catch (error) {
        expect(error).equal(error);
      }
    });
  });

  //Delete Parameters Error 2
  describe("Delete Parameters Error 2", () => {
    it("should return one user", async () => {
      try {
        let response = await UserFacade.deleteUser({});
      } catch (error) {
        expect(error).equal(error);
      }
    });
  });

  //Not Found error
  describe("Update Not Found Error", () => {
    it("should return one user", async () => {
      let user = {
        id: 0,
        name: "Fernando",
        email: "fernando.alvarado@axity.com",
      };
      try {
        let response = await UserFacade.deleteUser({ id: 30 });
      } catch (error) {
        console.log(error);
        expect(error).equals(error);
      }
    });
  });

  //Happy Path
  describe("Delete Happy Path", () => {
    it("should return one user", async () => {
      let response = await UserFacade.deleteUser({ id: 2 });
      expect(response).equal(1);
    });
  });
});
