import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll(){
    return [
      {title:'新闻111'},
      {title:'新闻222'},
      {title:'新闻333'},
      {title:'新闻444'},
      {title:'新闻555'}
    ]
  }
}
