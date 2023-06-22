import { RouterModule, Routes } from "@angular/router";
import { RequestListPageComponent } from "./pages/request-list/request-list-page.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path: '',
        component: RequestListPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class RequestRoutingModule{}