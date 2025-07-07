import { NgModule } from "@angular/core";
import { ReservationPageComponent } from "./reservation-page.component";
import { ReservationFormComponent } from "../../components/reservation-form/reservation-form.component";
import { RouterModule } from "@angular/router";
import { PaymentFormComponent } from "../../components/payment-form/payment-form.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [ReservationPageComponent, ReservationFormComponent, PaymentFormComponent],
    imports: [
        SharedModule, 
        RouterModule.forChild([{path: '', component: ReservationPageComponent}])
    ]
})
export class ReservationPageModule {}