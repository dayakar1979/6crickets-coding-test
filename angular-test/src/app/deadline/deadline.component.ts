import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil } from 'rxjs/operators';
import { DeadlineService } from '../deadline.service';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.scss'
})
export class DeadlineComponent implements OnInit, OnDestroy {
  secondsLeft: number = 0;
  private unsubscribe$ = new Subject<void>();

  constructor(private deadlineService: DeadlineService) {}

  ngOnInit(): void {
    // Fetch the initial countdown value
    this.deadlineService.getSecondsLeft().pipe(
      switchMap((response) => {
        this.secondsLeft = response.secondsLeft;

        // Create an interval that ticks every second
        return interval(1000).pipe(
          // Decrease secondsLeft by 1 each second
          takeUntil(this.unsubscribe$)
        );
      })
    ).subscribe(() => {
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
      }
    });
  }

  ngOnDestroy(): void {
    // Complete the subscription to clean up when the component is destroyed
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}