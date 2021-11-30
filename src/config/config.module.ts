import { DynamicModule, Module, Scope } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Module({})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTIONS",
          useValue: options,
          scope: Scope.DEFAULT,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
