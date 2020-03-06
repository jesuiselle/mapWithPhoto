import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {path: '', component: MapComponent},
  {path: 'photo/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
