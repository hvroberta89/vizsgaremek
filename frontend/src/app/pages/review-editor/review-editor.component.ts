import { Component, OnInit } from '@angular/core';
import { Review } from 'app/model/review';
import { map, Observable, Observer, of, switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'app/service/review.service';
import { isBs3 } from 'ngx-bootstrap/utils';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'app/service/user.service';
import { User } from 'app/model/user';

@Component({
  selector: 'app-review-editor',
  templateUrl: './review-editor.component.html',
  styleUrls: ['./review-editor.component.scss']
})
export class ReviewEditorComponent implements OnInit {

  review$: Observable<Review>;

  isBs3 = isBs3();
  search?: string;

  selectedEditorUser: User | null = null;
  selectedWorkerUser: User | null = null;

  users$:  Observable<User[]> = this.userService.getAll();
  suggestions$: Observable<User[]> = of([]);

  constructor(
    private reviewService: ReviewService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.review$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new Review());
        return this.reviewService.getOne(params['id'])
      })
    );

    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search || '');
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.userService.search(`user_name=${query}`).pipe(
            map((data: User[]) => Array.isArray(data) ? data : []),
          );
        }
        return of([]);
      }),
    );
  }

  changeName(ev: Event): void {
    this.search = ev as unknown as string;
  }

  selectEditorUser(ev: {item: User}): void {
    this.selectedEditorUser = ev.item;
  }
  selectWorkerUser(ev: {item: User}): void {
    this.selectedWorkerUser  = ev.item;
  }

  onSave(review: Review): void {
    if (this.selectedEditorUser) {
      review.editor_user = this.selectedEditorUser?._id;
    }

    if (this.selectedWorkerUser) {
      review.worker_user = this.selectedWorkerUser?._id;
    }

    if (!review._id){
      review._id = undefined;
      this.reviewService.create(review).subscribe({
        next: () => this.location.back(),
        error: err => console.error(err),
      });
    } else {
      this.reviewService.update(review).subscribe({
        next: () => this.location.back(),
      });
    }
  };

  onCancel(): void {
    history.back()
  }

};
