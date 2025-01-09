import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/angular/standalone';
import { Language } from 'src/app/shared/transtale/language.enum';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/shared/transtale/translation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButton, IonLabel]
})
export class LoginPage implements OnInit {
  private translationService = inject(TranslationService)
  private router = inject(Router)
  protected Language = Language;
  constructor() { }
  ngOnInit() {
  }

  changeLang(lang: Language) {
    this.translationService.changeLang(lang)
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
