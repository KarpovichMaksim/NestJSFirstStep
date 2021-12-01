import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService implements OnModuleInit, OnApplicationShutdown {
  private readonly cats: Cat[] = [];

  onApplicationShutdown(signal: string) {
    console.log(signal);
  }
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
