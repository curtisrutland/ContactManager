import { Component, OnInit, Input } from '@angular/core';
import { IContact, Contact } from "../../models/contact";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private activeModal: NgbActiveModal, private contactService: ContactService) { }

  ngOnInit() {
  }

  hasLine2() {
    return this.contact != null && !this.isNull(this.contact.addressLine2);
  }

  hasEmail() {
    return this.contact != null && !this.isNull(this.contact.email);
  }

  hasAltEmail() {
    return this.contact != null && !this.isNull(this.contact.alternateEmail);
  }

  hasPhone() {
    return this.contact != null && !this.isNull(this.contact.phoneNumber);
  }

  hasAltPhone() {
    return this.contact != null && !this.isNull(this.contact.alternatePhoneNumber);
  }

  hasFax() {
    return this.contact != null && !this.isNull(this.contact.faxNumber);
  }
  
  addNote() {
    bootbox.prompt("Enter Note", r => {
      if(r) {
        this.contactService.createNote(this.contact.id, r)
          .then(note => this.contact.notes.push(note))
          .catch(err => console.error(err));
      }
    })
  }

  deleteNote(idx: number) {
    bootbox.confirm("Delete note?", r => {
      if(r) {
        this.contactService.deleteNote(this.contact.notes[idx])
          .then(() => {
            this.contact.notes.splice(idx, 1);
          }).catch(err => console.error(err));
      }
    });
  }

  private isNull(s: string){
    return s == null || s.trim() === "";
  }

  close() {
    this.activeModal.close();
  }
}
