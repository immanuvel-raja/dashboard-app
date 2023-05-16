import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTimeAgo]'
})
export class TimeAgoDirective implements OnChanges {
  @Input() date: Date | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date'] && this.date) {
      this.updateTimeAgo();
    }
  }

  updateTimeAgo() {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - this.date!.getTime()) / 1000);

    if (seconds < 60) {
      this.elementRef.nativeElement.textContent = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
      return;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      this.elementRef.nativeElement.textContent = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
      return;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      this.elementRef.nativeElement.textContent = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
      return;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      this.elementRef.nativeElement.textContent = `${days} day${days !== 1 ? 's' : ''} ago`;
      return;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      this.elementRef.nativeElement.textContent = `${months} month${months !== 1 ? 's' : ''} ago`;
      return;
    }

    const years= Math.floor(months / 12);
    this.elementRef.nativeElement.textContent =  `${years} year${years !== 1 ? 's' : ''} ago`;
    }
    }


