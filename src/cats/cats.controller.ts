import { Controller, Get, Req, Ip, HostParam } from "@nestjs/common";
import { Request } from "express";

@Controller("cats")
export class CatsController {
  @Get()
  findAll(
    @Req() request: Request,
    @Ip() ip: string,
    @HostParam() host: string
  ): string {
    console.log(`${ip} ${host}`);
    return `${ip} ${host} This action return cats`;
  }
}
