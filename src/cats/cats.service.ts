import { Injectable, OnModuleInit } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService implements OnModuleInit {
  private readonly cats: Cat[] = [];

  onModuleInit() {
    console.log("The module has been initialization");
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
