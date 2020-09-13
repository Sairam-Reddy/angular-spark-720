import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import '@progress/kendo-ui';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateWorkflowModule } from '../common/workflow/create/create-workflow.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, CreateWorkflowModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
