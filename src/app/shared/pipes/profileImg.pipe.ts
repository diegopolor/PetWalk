import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'profileImg'
})
export class profileImgPipe implements PipeTransform {
    transform(value: string) {
        return `/assets/static-profile/${value}.jpg` 
    }
}