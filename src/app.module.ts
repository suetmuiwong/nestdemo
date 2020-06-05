import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
