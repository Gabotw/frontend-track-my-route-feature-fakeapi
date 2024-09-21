import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-side-bar-driver',
  templateUrl: './side-bar-driver.component.html',
  styleUrl: './side-bar-driver.component.css'
})
export class SideBarDriverComponent {
  isDrawerOpen: boolean = true;
  isMobile: boolean = false;
  location: string = 'Select Route';
  selectedRoute: string = '/driver/select-route';

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
