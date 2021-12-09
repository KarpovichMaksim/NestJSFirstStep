import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { ConfigModule as ConfigFile } from "./config/config.module";
import { ConfigModule } from "@nestjs/config";
import { LazyModule } from "./lazy/lazy.module";
import configuration from "./config/configuration";

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    ConfigFile.register({ folder: "./config" }),
    LazyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: "cats", method: RequestMethod.POST })
      .forRoutes({ path: "cats", method: RequestMethod.GET });
    //.forRoutes(CatsController);
  }
}
