import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/shared/transtale/translation.service';
import { Router } from '@angular/router';
import { Language } from 'src/app/shared/transtale/language.enum';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, IonButton]
})
export class RegisterPage implements OnInit {
  private router = inject(Router)
  private translationService = inject(TranslationService)
  protected Language = Language;
  constructor() { }
  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  changeLang(lang: Language) {
    this.translationService.changeLang(lang);
  }

}
