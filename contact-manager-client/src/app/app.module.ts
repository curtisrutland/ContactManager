import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRouterModule } from "./modules/approuter.module";
import { ContactService } from "./services/contact.service";

import { AppComponent } from './app.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DropToggleComponent } from './components/drop-toggle/drop-toggle.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactManagerComponent,
    ContactCardComponent,
    DropToggleComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastModule,
    AppRouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
