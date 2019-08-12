import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { GuidelineItemService } from '../main.service';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'lumed-guideline-login',
  templateUrl: './lumed-guideline-login.component.html',
  styleUrls: ['./lumed-guideline-login.component.css']
})
export class LumedGuidelineLoginComponent {
  showAlert = false;
  @Input() public user = new User();

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected loginService: LoginService,
    ) {
  }

  public async login(form: NgForm) {
    const result = await this.loginService.login(this.user);
    if (result === true) {
      this.router.navigate(['/main']);
    } else {
      this.showAlert = true;
    }
    form.reset();
  }
}
