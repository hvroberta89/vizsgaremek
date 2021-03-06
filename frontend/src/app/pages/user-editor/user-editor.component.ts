import { IFileUploadResponse } from './../../shared/file-uploader/file-uploader.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';
import { Observable, of, switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User>;

  profileImg: string = `${environment.apiUrl}img/dummy.jpg`;
  uploadFileName: string = '';
  uploadedFilePath: string =  '';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === '0') return of(new User());
        if (params['photo'])  this.profileImg = `${environment.apiUrl}${params['photo']}`;
        return this.userService.getOne(params['id']);
      })
    );
  }

  onSave(user: User): void {
    if( this.uploadFileName ) {
      user.photo = this.uploadedFilePath;
    };

    if (!user._id){
      user._id = undefined;
      user.address._id = undefined;
      this.userService.create(user).subscribe({
        next: () => this.location.back(),
        error: err => console.error(err),
      });
    } else {
      this.userService.update(user).subscribe({
        next: () => this.location.back(),
      });
    }
  };


  uploadSuccess(event: IFileUploadResponse): void {
    this.uploadFileName = event.name;
    this.uploadedFilePath = event.path;
    this.profileImg = `${environment.apiUrl}${event.path}`;
  };

  onCancel(): void {
    history.back()
  }
};
