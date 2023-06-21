import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'caretakerProfileImg'
})
export class caretakerProfileImg implements PipeTransform {
    transform(value: string) {
        return `/assets/static-profile/${value}.jpg` 
    }
}