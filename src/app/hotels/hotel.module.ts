import { NgModule } from '@angular/core';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-details/hotel-detail.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module.';



@NgModule({
  declarations: [
    HotelListComponent,
    HotelDetailComponent
  ],
  imports: [
    //CommonModule,
    //FormsModule,
    SharedModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
