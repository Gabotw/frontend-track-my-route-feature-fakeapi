import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTicketComponent } from './pay-ticket/pages/pay-ticket.component';
import { HistoryComponent } from './history/pages/history.component';
import { ConfigComponent } from './public/pages/config/config.component';
import {NotificationsComponent} from './notifications/pages/notifications.component';
import {SearchRoutesComponent} from './search-routes/pages/search-routes.component';
import {PromosComponent} from './promos/pages/promos.component';
import {HelpComponent} from './public/pages/help/help.component';
import {RegisterComponent} from './public/pages/register/passenger/register.component';
import {LoginPassengerComponent} from './public/pages/login/passenger/login-passenger.component';
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";
import {RecoverPasswordComponent} from "./public/pages/recover-password/recover-password.component";
import {NotFoundComponent} from "./public/components/not-found/not-found.component";
import {LoginTypeSelectionComponent} from "./public/pages/login/type-selection/login-type-selection.component";
import {RegisterDriverComponent} from "./public/pages/register/driver/register-driver.component";
import {LoginDriverComponent} from "./public/pages/login/driver/login-driver.component";
import {SideBarDriverComponent} from "./public/components/side-bar-driver/side-bar-driver.component";
import {SelectRouteComponent} from './select-route/pages/select-route.component';
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
export const routes: Routes = [
    { path: 'register/passenger', component: RegisterComponent },
    {path: 'register/driver', component: RegisterDriverComponent},
    { path: 'login', component: LoginTypeSelectionComponent},
    {path: 'login/passenger', component: LoginPassengerComponent},
    {path: 'login/driver', component: LoginDriverComponent},
    { path: 'recover-password', component: RecoverPasswordComponent},
    {path: 'driver', component: SideBarDriverComponent, children:[
            {path: 'select-route',component: SelectRouteComponent},
            { path: 'config', component: ConfigComponent },
        ]},
    { path: 'sidebar', component: SideBarComponent, children: [
            { path: 'pay-ticket', component: PayTicketComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'search', component: SearchRoutesComponent },
            { path: 'promos', component: PromosComponent },
            { path: 'trips', component: HistoryComponent },
            { path: 'help', component: HelpComponent },
            { path: 'config', component: ConfigComponent },
        ]},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
