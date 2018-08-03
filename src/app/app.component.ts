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
    // if (Hls.isSupported()) {
    //   const hls = new Hls();
    //   hls.loadSource('https://lyra-streaming-api-test.nonprod-prognplay-ihm.com/api/v1/audio/5b5871144cedfd0009d0b55c+1533083278000+p_DuUIS567EJVgtx9Ffsr9B-rURN-DCdYe4T88-PtIw');
    //   hls.attachMedia(this.hlsNative.nativeElement);
    //   hls.on(Hls.Events.MANIFEST_PARSED, function () {
    //     this.hlsNative.nativeElement.play();
    //   });
    // }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  skipTime() {
    this.api.getDefaultMedia().currentTime = 10;
  }

  // skipTimeNative() {
  //   this.hlsNative.nativeElement.currentTime = 10;
  // }
}
