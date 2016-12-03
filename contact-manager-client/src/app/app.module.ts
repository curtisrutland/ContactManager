import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRouterModule } from "./modules/approuter.module";
import { TextMaskModule } from 'angular2-text-mask';

import { ContactService } from "./services/contact.service";

import { AppComponent } from './app.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DropToggleComponent } from './components/drop-toggle/drop-toggle.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { FocusDirective } from './directives/focus.directive';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { LinkPipe } from './pipes/link.pipe';
import { NoteComponent } from './components/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactManagerComponent,
    ContactCardComponent,
    DropToggleComponent,
    EditContactComponent,
    FocusDirective,
    ContactDetailsComponent,
    LinkPipe,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastModule,
    AppRouterModule,
    TextMaskModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
