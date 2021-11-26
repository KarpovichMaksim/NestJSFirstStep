import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionFilter } from "./common/filters/all-exception.filter";
import { AuthGuard } from "./common/guards/auth.guard";
import { ValidationPipe } from "./common/pipes/validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const { httpAdapter } = app.get(HttpAdapterHost);
  //app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  //app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
