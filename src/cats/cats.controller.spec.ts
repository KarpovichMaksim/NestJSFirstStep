import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

describe("CatsController", () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  it("should be defined", () => {
    expect(catsController).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of cats", async () => {
      const result: Cat[] = [];
      jest.spyOn(catsService, "findAll").mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
