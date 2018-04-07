import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';
import { debuglog } from 'util';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {  
  
  private postsList:Array<Post>;
  private item:any;

  constructor(
    private _postsService:PostsService    
  ) { 
    this.postsList = new Array<Post>();
  }

  private getPosts(){    
    this._postsService.getPosts()
      .then(
        result => {
          this.postsList = result;          
        }
      );    
  }

  ngOnInit() {
    this.getPosts();    
  }  

}
