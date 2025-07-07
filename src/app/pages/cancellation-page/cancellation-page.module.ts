import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CancellationPageComponent } from "./cancellation-page.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [CancellationPageComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CancellationPageComponent}
        ])
    ]
})
export class CancellationPageModule {}