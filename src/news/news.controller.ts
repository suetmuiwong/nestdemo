import { Controller, Get, Query, Param, Render} from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newServices:NewsService){}
  @Get()
  @Render('default/news')
  index(){
    return {
      newsList:this.newServices.findAll()
    }
  }
  //获取 get 请求参数中的某个值  http://localhost:3000/news/list?id=123
  @Get('list')
  getData(@Query('id') id){
    // Query.id
    console.log(id)
    return '获取参数中的id 值'
  }

  //模糊匹配路由  http://localhost:3000/news/ adda
  @Get('a*a')
  getA(){
    return '新闻增加 模糊匹配'
  }

  //动态适配路由 (要注意顺序)  http://localhost:3000/news/234
  @Get(':id')
  getDetailData(@Param() param){
    console.log(param)
    return '获取新闻详情页信息'
  }


}
