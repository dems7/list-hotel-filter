import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ReplaceComma } from './pipes/replace-comma.pipe';




@NgModule({
  declarations: [
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReplaceComma,
    StarRatingComponent,
  ]
})
export class SharedModule { }
