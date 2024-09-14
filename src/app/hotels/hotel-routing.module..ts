import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-details/hotel-detail.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';



@NgModule({
  imports: [
    RouterModule.forChild([
      {path : 'hotels', component: HotelListComponent},
      {path : 'hotels/:id', component: HotelDetailComponent,
       canActivate : [HotelDetailGuard]},
    ]),
  ],
  //Exposer le router module pour qu'il soit disponible
  // quand on va re-importer ce module dans un autre module
  exports: [RouterModule]
})
export class HotelRoutingModule { }
