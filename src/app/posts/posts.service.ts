import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.constants';
import { Post } from './post';

@Injectable()
export class PostsService {

  constructor(private _http:HttpClient) { }

  public getPosts():Promise<Array<Post>>{
    return this._http
        .get<Array<Post>>(AppConstants.URL_ENDPOINT + AppConstants.SERVICES_ENDPOINTS.POSTS)
        .toPromise();    
  }
}
