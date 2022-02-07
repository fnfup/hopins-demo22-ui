import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { metaReducers, reducerCore } from './store/reducers/app.reducer';
import { RequestApiService } from './services/request.service';
import { CatalogEffects } from './store/effects/catalog.effects';
import { OrderEffects } from './store/effects/order.effects';
import { LibraryEffects } from './store/effects/library.effects';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxJsonViewerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerCore, { metaReducers }),
    EffectsModule.forRoot([CatalogEffects, OrderEffects, LibraryEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
