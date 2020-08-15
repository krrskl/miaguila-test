import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

interface NodeRoute {
  path: string;
  icon: string;
  name: string;
  action?: any;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer: MatSidenav;
  public routes: NodeRoute[] = [
    {
      name: 'Vuelos',
      path: '',
      icon: 'map-marker-alt',
    },
    {
      name: 'Rutas',
      path: '',
      icon: 'route',
    },
    {
      name: 'Administrar',
      path: '',
      icon: 'cog',
    },
    {
      name: 'Estadísticas',
      path: '',
      icon: 'chart-line',
    },
    {
      name: 'Medios de pago',
      path: '',
      icon: 'credit-card',
    },
    {
      name: 'Cerrar sesión',
      path: '',
      icon: 'sign-out-alt',
    },
  ];
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', () =>
      this.mobileQueryListener(),
    );
  }

  ngOnInit() {
    const availWidth = window.screen.availWidth;
    console.log(availWidth, this.drawer);

    if (availWidth <= 700) {
      this.drawer.close();
    }
  }
}
