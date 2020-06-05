import { Controller,Get , Query, Request, Post, Body, Response ,Render} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  @Render('default/user')
  index(){
    // return '用户中心'
  }
  // 通过@Query装饰器获取get传值 http://localhost:3000/user/list?id='123'&name='张三'
  @Get('list')
  getData(@Query() params){
    console.log(params)
    return'获取列表'
  }
  // 通过@Request装饰器获取get传值 http://localhost:3000/user/listData?id='135'&name='李四'
  @Get('listData')
  getListData(@Request() req){
    console.log(req.query)
    return'获取列表2'
  }

  // 通过@Body装饰器或者 post传值 http://localhost:3000/user/create
  @Post('create')
  addData(@Body() bodyParams){
    console.log(bodyParams)
    return'获取post请求参数'
  }

  // 通过@Body装饰器或者 post传值 http://localhost:3000/user/create
  @Post('doAdd')
  doAdd(@Body() bodyParams, @Response() res){
    console.log(bodyParams);
    res.redirect('/user');
    // return'增加成功'
  }

}
