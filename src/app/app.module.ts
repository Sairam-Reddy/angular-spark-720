import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import '@progress/kendo-ui';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateWorkflowModule } from '../common/workflow/create/create-workflow.module';
import { DraftWorkflowModule } from '../common/workflow/draft/draft-worklfow.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, CreateWorkflowModule,
  DraftWorkflowModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
