import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'profileImg'
})
export class ProfileImgPipe implements PipeTransform {
    transform(value: any) {
        return `/assets/static-profile/${value}.jpg` 
    }
}