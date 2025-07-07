import { NgModule } from "@angular/core";
import { FootballSchoolComponent } from "./football-school.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [FootballSchoolComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: FootballSchoolComponent}
        ])
    ]
})
export class FootballSchoolModule {}