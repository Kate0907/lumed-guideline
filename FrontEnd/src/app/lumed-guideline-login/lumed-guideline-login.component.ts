import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'lumed-guideline-login',
  templateUrl: './lumed-guideline-login.component.html',
  styleUrls: ['./lumed-guideline-login.component.css']
})
export class LumedGuidelineLoginComponent implements OnInit {
  isLoginMode = true;
  showAlert = false;
  @Input() public user = new User();

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {

  }

  public ngOnInit(): void {
    // this.user.name = 'a';
    // this.user.pwd = 'a';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   form.reset();
  // }

  public async login(form: NgForm) {
    let result = await this.itemService.login(this.user);
    if (result === true) {
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/main']);
    } else {
      this.showAlert = true;
    }
    console.log(this);
    form.reset();
  }
}
