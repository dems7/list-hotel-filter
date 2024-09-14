import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'replaceComma',
})

export class ReplaceComma implements PipeTransform{
    transform(value: any) : string {
        // !!value désigne si la valeure n'est ni undefined ni none
        if(!!value){
            return value.replace(/,/g , '.');
        } else{
            return '';
        }
    }

}