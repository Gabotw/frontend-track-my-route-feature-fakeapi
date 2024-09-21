import {Component, ViewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatDrawerContent} from "@angular/material/sidenav";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {PayTicketComponent} from '../../../pay-ticket/pages/pay-ticket.component';
import {PromosComponent} from '../../../promos/pages/promos.component';
import {HelpComponent} from "../../pages/help/help.component";
import {SearchRoutesComponent} from '../../../search-routes/pages/search-routes.component';
import {NotificationsComponent} from '../../../notifications/pages/notifications.component';
import {HistoryComponent} from '../../../history/pages/history.component';
import {ConfigComponent} from "../../pages/config/config.component";
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  standalone: true,
    imports: [
        MatDrawerContent,
        MatDrawerContainer,
        MatToolbar,
        MatNavList,
        MatListItem,
        MatDrawer,
        MatButton,
        NgIf,
        MatIcon,
        PayTicketComponent,
        HelpComponent,
        SearchRoutesComponent,
        NotificationsComponent,
        PromosComponent,
        HistoryComponent,
        ConfigComponent,
        RouterOutlet,
        NgClass,
        MatIconButton,
        RouterLink,
    ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
    isDrawerOpen: boolean = true;
    isMobile: boolean = false;
    location: string = 'Notificaciones';
    selectedRoute: string = '/sidebar/notifications';

    @ViewChild('drawer') drawer!: MatDrawer;

    constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([Breakpoints.Handset])
            .subscribe(result => {
                this.isMobile = result.matches;
                if (this.isMobile) this.isDrawerOpen=false;
            });
    }


    navigateTo(route: string, location: string) {
        if (this.isMobile) {
            this.drawer.toggle();
        }
        this.location = location;
        this.selectedRoute = route;
        this.router.navigateByUrl(route);

    }

}
