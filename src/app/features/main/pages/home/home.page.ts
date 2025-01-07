import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/models/user';
import { UserApiActions } from 'src/app/store/user/user.action';
import { ButtonFillComponent } from '@shared/components';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule, RouterLink, ButtonFillComponent],
})
export class HomePage implements OnInit {
  count$!: Observable<number>;
  private store = inject(Store<{ users: User[] }>);
  protected users$ = this.store.select(state => state.movies);

    constructor() {
      this.users$ = this.store.select('users');
    }

    ngOnInit(): void {
      this.store.dispatch(UserApiActions.loadUsers());
    }

  incrementar() {
    /* this.store.dispatch(increment()); */
  }

  decrementar() {
    /* this.store.dispatch(decrement()); */
  }

  reset() {
    /* this.store.dispatch(reset()); */
  }
}
