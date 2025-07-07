import { NgModule } from "@angular/core";
import { ContactUsComponent } from "./contact-us.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [ContactUsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: ContactUsComponent}
        ])
    ]
})
export class ContactUsModule {}