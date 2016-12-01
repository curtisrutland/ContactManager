import { Component, OnInit, Input } from '@angular/core';
import { IContact, Contact } from "../../models/contact";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ContactService } from "../../services/contact.service";
import emailMask from "text-mask-addons/dist/emailMask";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  phoneNumberMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  emailMaskMask = emailMask;
  private _cache: IContact;

  @Input() isCreateForm: boolean = false;
  @Input() contact: Contact;
  
  constructor(private activeModal: NgbActiveModal, private contactService: ContactService) { }

  ngOnInit() {
    this._cache = this.contact.toIContact();
  }

  cancel() {
    this.contact.fill(this._cache);
    this.activeModal.close();
  }

  save() {
    this.contactService.updateContact(this.contact).then(() => {
      this.activeModal.close();
    }).catch(err => console.error(err));
  }
}
