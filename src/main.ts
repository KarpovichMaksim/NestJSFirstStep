import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionFilter } from "./common/filters/all-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const { httpAdapter } = app.get(HttpAdapterHost);
  //app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
