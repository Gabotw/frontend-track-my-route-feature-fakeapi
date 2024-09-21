import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ConfigComponent} from "./public/pages/config/config.component";
import {HelpComponent} from "./public/pages/help/help.component";
import { HistoryComponent } from './history/pages/history.component';
import {LoginPassengerComponent} from "./public/pages/login/passenger/login-passenger.component";
import {NotificationsComponent} from './notifications/pages/notifications.component';
import {PayTicketComponent} from './pay-ticket/pages/pay-ticket.component';
import {PromosComponent} from './promos/pages/promos.component';
import {RegisterComponent} from "./public/pages/register/passenger/register.component";
import {SearchRoutesComponent} from './search-routes/pages/search-routes.component';
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './public/components/not-found/not-found.component';
import { LoginTypeSelectionComponent } from './public/pages/login/type-selection/login-type-selection.component';
import { RegisterDriverComponent } from './public/pages/register/driver/register-driver.component';
import { LoginDriverComponent } from './public/pages/login/driver/login-driver.component'
import {MatCheckbox} from "@angular/material/checkbox";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SideBarDriverComponent } from './public/components/side-bar-driver/side-bar-driver.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import { SelectRouteComponent } from './select-route/pages/select-route.component';
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {GoogleMap, MapDirectionsRenderer, MapHeatmapLayer, MapTrafficLayer} from "@angular/google-maps";
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { AuthenticationInterceptor } from "./iam/services/authentication.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    NotFoundComponent,
    LoginTypeSelectionComponent,
    RegisterDriverComponent,
    LoginDriverComponent,
    SideBarDriverComponent,
    SelectRouteComponent,
    AuthenticationSectionComponent,
    SignInComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ConfigComponent,
        HelpComponent,
        HistoryComponent,
        LoginPassengerComponent,
        NotificationsComponent,
        PayTicketComponent,
        PromosComponent,
        RegisterComponent,
        SearchRoutesComponent,
        SideBarComponent,
        FormsModule,
        MatButton,
        MatCard,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatFormFieldModule,
        MatIcon,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        LayoutModule,
        MatCardContent,
        MatCheckbox,
        MatIconButton,
        MatSuffix,
        HttpClientModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatToolbar,
        MatOption,
        MatSelect,
        GoogleMap,
        MapDirectionsRenderer,
        MapHeatmapLayer,
        MapTrafficLayer
    ],
  providers: [
    provideAnimationsAsync(),
      { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
