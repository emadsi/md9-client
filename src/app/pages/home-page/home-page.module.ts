import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { FieldReservationComponent } from "../../components/field-reservation/field-reservation.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [HomePageComponent, FieldReservationComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: HomePageComponent}
        ])
    ],

})
export class HomePageModule {}