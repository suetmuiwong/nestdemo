import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.useStaticAssets('public'); //配置静态资源目录
  // app.useStaticAssets('public',{  //配置静态资源目录
  //   prefix:'/static/'  //设置虚拟路径
  // });
  app.useStaticAssets(join(__dirname,'..','public'),{ //配置静态资源目录
    prefix:'/static/' //设置虚拟路径
  });

  // 安装模板引擎ejs   yarn add ejs
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
