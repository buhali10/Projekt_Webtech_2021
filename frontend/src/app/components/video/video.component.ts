import { Component, OnInit } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { Router } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
  }

}
