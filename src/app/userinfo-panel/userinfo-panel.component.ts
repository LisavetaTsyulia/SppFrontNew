import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from '../validators/EmailValidators';
import {User} from '../model/user';
import {Biography} from '../model/biography';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-userinfo-panel',
  templateUrl: './userinfo-panel.component.html',
  styleUrls: ['./userinfo-panel.component.css']
})
export class UserinfoPanelComponent implements OnInit {
  public model = new User;
  public biography = new Biography();
  submitted = false;
  formGroup: FormGroup;
  errorMessage: string;
  successMessage: string;

  supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
  imageShown = false;
  currentProfileImage = 'assets/profile-placeholder.png';
  imageLoaded = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    const user: string = JSON.parse(localStorage.getItem('user'));
    this.model.email = user['username'];
    this.getUserInfo(user['id']);
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6), EmailValidators.isValidEmail]],
      password: ['', Validators.required],
    });
  }

  getUserInfo(id: number) {
    this.authService.getUserInfo(id)
      .subscribe(
        data => {
          this.transformToBiography(data);
          localStorage.setItem('biography', JSON.stringify(data));
        }
      );
  }

  transformToBiography(data: any) {
    this.biography.biography = data.biography;
    this.biography.location = data.location;
    this.biography.name = data.name;
    this.biography.salary = data.salary;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = null;
    this.errorMessage = null;
    this.authService.changeUser(this.model.email, this.model.password, this.biography.biography,
      this.biography.location, this.biography.salary, this.biography.name)
      .subscribe(
        data => {
          this.successMessage = 'Successfully changed!';
          this.submitted = false;
        },
        error => {
          this.errorMessage = error.json().message;
          this.submitted = false;
        }
      );
  }

}
