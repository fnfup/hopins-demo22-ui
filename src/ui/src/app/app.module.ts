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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerCore, { metaReducers }),
    EffectsModule.forRoot([CatalogEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
