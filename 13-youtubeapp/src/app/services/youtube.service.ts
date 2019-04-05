import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private YOUTUBE_API:string = "AIzaSyD2gBg0dGGiSpJKUY7GOYBo9vSbh6MDc-w";

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";

  private playlist:string = "UUuaPTYj15JSkETGnEseaFFg"

  private nextPageToken:string = "";
  
  constructor(public http:HttpClient) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItems`;
    let params = new HttpParams();

    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playlist);
    params = params.set('key', this.YOUTUBE_API);

    if(this.nextPageToken){
      params = params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url,{params}).pipe(map((res:any) => {
      console.log(res);
      this.nextPageToken = res.nextPageToken;

      let videos:any[] = [];

      for(let video of res.items){
        let snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;

    }));
  }
}
