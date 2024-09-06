import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './public/pages/history/history.component';
import { ConfigComponent } from './public/pages/config/config.component';
import {NotificationsComponent} from './public/pages/notifications/notifications.component';
import {SearchRoutesComponent} from './public/pages/search-routes/search-routes.component';
import {PromosComponent} from './public/pages/promos/promos.component';
import {HelpComponent} from './public/pages/help/help.component';
import {RegisterComponent} from './public/pages/register/passenger/register.component';
import {LoginPassengerComponent} from './public/pages/login/passenger/login-passenger.component';
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";
import {RecoverPasswordComponent} from "./public/pages/recover-password/recover-password.component";
import {NotFoundComponent} from "./public/components/not-found/not-found.component";
import {LoginTypeSelectionComponent} from "./public/pages/login/type-selection/login-type-selection.component";
import {RegisterDriverComponent} from "./public/pages/register/driver/register-driver.component";
import {LoginDriverComponent} from "./public/pages/login/driver/login-driver.component";

export const routes: Routes = [
    { path: 'register/passenger', component: RegisterComponent },
    {path: 'register/driver', component: RegisterDriverComponent},
    { path: 'login', component: LoginTypeSelectionComponent},
    {path: 'login/passenger', component: LoginPassengerComponent},
    {path: 'login/driver', component: LoginDriverComponent},
    { path: 'recover-password', component: RecoverPasswordComponent},
    { path: 'sidebar', component: SideBarComponent, children: [
            { path: 'notifications', component: NotificationsComponent },
            { path: 'search', component: SearchRoutesComponent },
            { path: 'promos', component: PromosComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'help', component: HelpComponent },
            { path: 'config', component: ConfigComponent },
        ]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
