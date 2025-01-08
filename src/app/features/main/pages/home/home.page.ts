import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonFillComponent } from '@shared/components';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonFillComponent],
})
export class HomePage {


  constructor(private translate: TranslateService, private translateService: TranslateService) {
    this.translate.setDefaultLang('es');
  }
  
}
