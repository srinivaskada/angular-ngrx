import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddComponent } from './components/user-add/user-add.component'

import { MatDialogModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { UserAddContainerComponent } from './containers/user-add-container/user-add-container.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
		UserDetailsComponent,
		UserAddContainerComponent,
    UserAddComponent
  ],
  imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		MatDialogModule,
		MatButtonModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
    AppRoutingModule,
  ],
  providers: [UserService],
	bootstrap: [AppComponent],
	entryComponents: [
		UserAddContainerComponent
	]
})
export class AppModule {}
