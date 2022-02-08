import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { metaReducers, reducerCore } from './store/reducers/app.reducer';
import { RequestApiService } from './services/request.service';
import { CatalogEffects } from './store/effects/catalog.effects';
import { OrderEffects } from './store/effects/order.effects';
import { LibraryEffects } from './store/effects/library.effects';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MsalBroadcastService, MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { InteractionType } from '@azure/msal-browser';
import { msalSPAClientApp } from './authentication/msal.clientapp';
import { protectedResourceMap } from './authentication/protected.resources';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,

    // 3rd party
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    NgxJsonViewerModule,

    // ngrx
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerCore, { metaReducers }),
    EffectsModule.forRoot([CatalogEffects, OrderEffects, LibraryEffects]),

    // authentication
    MsalModule.forRoot(
      msalSPAClientApp(),
      {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      },
      {
        interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
        protectedResourceMap
      }),

    // final
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    RequestApiService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
