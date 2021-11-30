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
import { ConfigModule } from "./config/config.module";

@Module({
  imports: [CatsModule, ConfigModule.register()],
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
