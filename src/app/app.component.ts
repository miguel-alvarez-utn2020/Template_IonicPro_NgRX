import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslationService } from './shared/transtale/translation.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private translationService = inject(TranslationService);

  ngOnInit() {
    this.translationService.initLang();
  }
}
