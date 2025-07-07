import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./admin-page.component";
import { AdminRegisterComponent } from "../../components/admin-register/admin-register.component";
import { ViewReservationsComponent } from "../../components/view-reservations/view-reservations.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [AdminPageComponent, AdminRegisterComponent, ViewReservationsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: AdminPageComponent}
        ])
    ]
})
export class AdminPageModule {}