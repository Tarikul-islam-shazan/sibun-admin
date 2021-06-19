import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>SIBUN</b> 2021
    </span>
    <div style="cursor: pointer;" (click)="goToPrivacyPage()">
      <i class="fa fa-shield-alt"></i>
      Privacy policy
    </div>

    <!-- <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div> -->
  `,
})
export class FooterComponent {

  constructor(private router: Router){}

  goToPrivacyPage() {
    this.router.navigateByUrl('/pages/privacy-policy');
  }
}
