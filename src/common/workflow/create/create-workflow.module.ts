import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import "@progress/kendo-ui";

import { MatToolbarModule } from "@angular/material/toolbar";
import { CreateWorkflowComponent } from "./create-workflow.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  declarations: [CreateWorkflowComponent],
  exports: [CreateWorkflowComponent]
})
export class CreateWorkflowModule {}
