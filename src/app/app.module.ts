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
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader, MatCardImage,
    MatCardSubtitle,
    MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";
import {MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
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
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {GoogleMap, MapDirectionsRenderer, MapHeatmapLayer, MapTrafficLayer} from "@angular/google-maps";
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { AuthenticationInterceptor } from "./iam/services/authentication.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { PromosDriverComponent } from './promos-driver/pages/promos-driver.component';
import { NotificationsDriverComponent } from './notifications-driver/pages/notifications-driver.component';
import { HistoryDriverComponent } from './history-driver/pages/history-driver.component';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import { AddNotificationDialogComponent } from './promos-driver/components/add-notification-dialog/add-notification-dialog.component';
import { AddPromoDialogComponent } from './promos-driver/components/add-promo-dialog/add-promo-dialog.component';
import {
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    MatDatepickerToggle
} from "@angular/material/datepicker";
import { AddTripDialogComponent } from './history-driver/components/add-trip-dialog/add-trip-dialog.component';
import {MatDialogContent, MatDialogTitle} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    NotFoundComponent,
    LoginTypeSelectionComponent,
    SideBarDriverComponent,
    AuthenticationSectionComponent,
    SignInComponent,
    SignUpComponent,
    AddNotificationDialogComponent,
    AddPromoDialogComponent,
    AddTripDialogComponent,

  ],
    imports: [
        MatSnackBarModule,
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
        SelectRouteComponent,
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
        MapTrafficLayer,
        RegisterDriverComponent,
        LoginDriverComponent,
        MatCardActions,
        MatCardImage,
        MatCardTitleGroup,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        PromosDriverComponent,
        NotificationsDriverComponent,
        HistoryDriverComponent,
        MatDatepickerToggle,
        MatDatepicker,
        MatDatepickerInput,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogTitle,
        MatDialogContent,
    ],
  providers: [
    provideAnimationsAsync(),
      { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
