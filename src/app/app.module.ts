import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatFormFieldModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatChipsModule, 
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
