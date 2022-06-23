import { IFileUploadResponse } from './../../shared/file-uploader/file-uploader.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';
import { Observable, of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => this.userService.getOne(params['id'])),
  );

  uploadFileName: string = '';
  uploadedFilePath: string = '';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new User());
        return this.userService.getOne(params['id'])
      })
    );
  }

  onSave(user: User): void {
    if( this.uploadedFilePath) {
      user.photo = this.uploadedFilePath;
    };



    if (user.id == ''){
      console.log(user);
      this.userService.create(user).subscribe({
        next: (updatedUser) => {
          this.location.back();
        },
        error: err => console.error(err),
      });
    } else {
      this.userService.update(user).subscribe({
        next: () => this.location.back(),
      });
    }
  }


  uploadSuccess(event: IFileUploadResponse): void {
    console.log(event.name);
    this.uploadFileName = event.name;
    this.uploadedFilePath = event.path;
  };

}
