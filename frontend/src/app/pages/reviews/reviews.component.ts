import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from 'app/service/config.service';
import { Review } from './../../model/review';
import { ReviewService } from './../../service/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  tableTitle: string = 'Vélemények';

  tableColumn = this.configService.reviewsTableColumns;

  list$ : Observable<Review[]> = this.reviewService.getAll();

  constructor(
    private configService: ConfigService,
    private reviewService: ReviewService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreateOne(): void {
    this.router.navigate(['/', 'reviews-edit', '0']);
  }

  onSelectOne(review: Review): void {
    console.log(review._id);
    this.router.navigate(['/', 'reviews-edit', review._id]);
  }

  onDeleteOne(review: Review): void {
    if (confirm('Biztosan törölni szeretnéd ezt a munkát?')) {
      this.reviewService.delete(review._id).subscribe({
        next: () => (this.list$ = this.reviewService.getAll()),
        error: (err) => console.error(err),
      });
    }
  }
}
