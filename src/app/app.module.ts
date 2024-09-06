import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ConfigComponent} from "./public/pages/config/config.component";
import {HelpComponent} from "./public/pages/help/help.component";
import {HistoryComponent} from "./public/pages/history/history.component";
import {LoginPassengerComponent} from "./public/pages/login/passenger/login-passenger.component";
import {NotificationsComponent} from "./public/pages/notifications/notifications.component";
import {PayTicketComponent} from "./public/pages/pay-ticket/pay-ticket.component";
import {PromosComponent} from "./public/pages/promos/promos.component";
import {RegisterComponent} from "./public/pages/register/passenger/register.component";
import {SearchRoutesComponent} from "./public/pages/search-routes/search-routes.component";
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './public/components/not-found/not-found.component';
import { LoginTypeSelectionComponent } from './public/pages/login/type-selection/login-type-selection.component';
import { RegisterDriverComponent } from './public/pages/register/driver/register-driver.component';
import { LoginDriverComponent } from './public/pages/login/driver/login-driver.component'
import {MatCheckbox} from "@angular/material/checkbox";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    NotFoundComponent,
    LoginTypeSelectionComponent,
    RegisterDriverComponent,
    LoginDriverComponent
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
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        LayoutModule,
        MatCardContent,
        MatCheckbox,
        MatIconButton,
        MatSuffix,
        HttpClientModule
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
