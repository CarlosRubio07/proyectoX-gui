import { NAV } from './global';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';


export const appRoutes: Routes = [
  {
    path: NAV.home,
    component: HomeComponent
  }

];



