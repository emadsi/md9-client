import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: GalleryComponent}
        ])

    ]
})
export class GalleryModule {}