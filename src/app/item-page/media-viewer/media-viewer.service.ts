import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaViewerService {
  private videoSource = new Subject<boolean>();
  video$ = this.videoSource.asObservable();

  setVideo(value: boolean): void {
    this.videoSource.next(value);
  }
}