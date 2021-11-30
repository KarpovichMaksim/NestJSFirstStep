import { HttpAdapterHost, LazyModuleLoader, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionFilter } from "./common/filters/all-exception.filter";
import { AuthGuard } from "./common/guards/auth.guard";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor";
import { ValidationPipe } from "./common/pipes/validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //lazy module louder
  const lazyModuleLoader = app.get(LazyModuleLoader);
  const { LazyModule } = await import("./lazy/lazy.module");
  const moduleRef = await lazyModuleLoader.load(() => LazyModule);
  //const { httpAdapter } = app.get(HttpAdapterHost);
  //app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  //app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
