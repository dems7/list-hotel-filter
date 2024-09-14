import { Component, OnInit } from "@angular/core";
import { IHotel } from "../shared/models/hotel";
import { HotelListService } from "../shared/services/hotel-list.service";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit{
public title = 'Liste hotels';
private _hotelFilter ='';
public filteredHotels : IHotel[] =[];
public receivedRating! : string;
public hotels: IHotel[]= [];
public errMsg! : string;

constructor(private hotelListService: HotelListService){

}

showBadge! : boolean;
public toggleIsNewBadge():void{
    this.showBadge = !this.showBadge
}

ngOnInit() {
    this.hotelListService.getHotels().subscribe({
        next: hotels => {
            this.hotels = hotels,
            this.filteredHotels = this.hotels;
        },
        error: err => this.errMsg = err
    });
    
}

public get hotelFilter(): string {
    return this._hotelFilter;
}

public set hotelFilter (filter: string){
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this._hotelFilter) : this.hotels;
}

private filterHotels (search : string) : IHotel[] {
    search = search.toLocaleLowerCase();

    const res = this.hotels.filter( 
        (hotel : IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(search) != -1);
    
        return res;
}

receivedRatingClicked(message : string){
    this.receivedRating = message;

}

}