import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router', navigationActionTiming: NavigationActionTiming.PostActivation }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
