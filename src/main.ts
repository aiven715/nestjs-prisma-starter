import { NestFactory } from "@nestjs/core";
import { Global, Module } from "@nestjs/common";
import UsersModule from "./users";
import PrismaService from "./prisma";

const { PORT } = process.env;

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
class GlobalModule {}

@Module({
  imports: [GlobalModule, UsersModule],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
