import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from 'app/service/config.service';
import { Review } from './../../model/review';
import { ReviewService } from './../../service/review.service';



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
  ) { }

  ngOnInit(): void {
  }

}
