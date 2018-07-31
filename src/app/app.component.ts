import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import * as Hls from 'hls.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('hlsNative') hlsNative: ElementRef;

  api: VgAPI;

  ngOnInit() {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
      hls.attachMedia(this.hlsNative.nativeElement);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        this.hlsNative.nativeElement.play();
      });
    }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  skipTime() {
    this.api.getDefaultMedia().currentTime = 10;
  }

  skipTimeNative() {
    this.hlsNative.nativeElement.currentTime = 10;
  }
}
