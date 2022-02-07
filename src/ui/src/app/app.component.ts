import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from './store/actions/app.actions';
import { IAppState } from './store/models/appstate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hopkins EGathura Dev Demo';

  constructor(
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.dispatch(
      AppActions.SearchMusicCatalog({ filter: {} }))
  }

}
