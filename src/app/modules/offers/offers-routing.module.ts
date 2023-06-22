import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OffersListPageComponent } from "./pages/offers-list-page/offers-list-page.component";
import { OffersCreatePageComponent } from "./pages/offers-create-page/offers-create-page.component";
import { OffersPageComponent } from "./pages/offers-page/offers-page.component";


const routes: Routes = [
    {
        path: '',
        component: OffersListPageComponent
    },
    {
        path: 'create',
        component: OffersCreatePageComponent
    },
    {
        path: ':id',
        component: OffersPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class offersRoutingModule{}