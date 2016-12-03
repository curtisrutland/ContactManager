import { Component, OnInit, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { IContact, Contact } from "../../models/contact";
import { ValidationResults } from "../../models/validationResults";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ContactService } from "../../services/contact.service";
import emailMask from "text-mask-addons/dist/emailMask";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit, AfterViewInit {
  phoneNumberMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  emailMaskMask = emailMask;
  validationResults: ValidationResults = new ValidationResults();
  private _cache: IContact;
  private _contact: Contact;

  @Input() isCreateForm: boolean = false;
  @Input() set contact(c: Contact) {
    this._contact = c;
    this.triggerFocus();
  }

  get contact(): Contact { return this._contact; }

  focusEventEmitter = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal, private contactService: ContactService) { }

  ngOnInit() {
    this._cache = this.contact.toIContact();
  }

  ngAfterViewInit() {
    this.triggerFocus();
  }

  cancel() {
    if (!this.isCreateForm)
      this.contact.fill(this._cache);
    this.activeModal.close();
  }

  private isNull(s: string) {
    if(s == null) return true;
    if(s.trim() === "") return true;
    return false;
  }

  validate(): boolean {
    let valid = true;
    if(this.isNull(this.contact.firstName)) {
      this.validationResults.firstName = true;
      valid = false;
    }
    if(this.isNull(this.contact.lastName)) {
      this.validationResults.lastName = true;
      valid = false;
    }
    if(this.isNull(this.contact.addressLine1)) {
      this.validationResults.addressLine1 = true;
      valid = false;
    }
    if(this.isNull(this.contact.city)) {
      this.validationResults.city = true;
      valid = false;
    }
    if(this.isNull(this.contact.state)) {
      this.validationResults.state = true;
      valid = false;
    }
    if(this.isNull(this.contact.zip)) {
      this.validationResults.zip = true;
      valid = false;
    }
    return valid;
  }

  save() {
    if(!this.validate()) 
      return;
    if (this.isCreateForm) {
      this.contactService.createContact(this.contact).then(() => {
        this.activeModal.close(true);
      }).catch(err => console.error(err));
    } else {
      this.contactService.updateContact(this.contact).then(() => {
        this.activeModal.close(false);
      }).catch(err => console.error(err));
    }
  }

  triggerFocus() {
    this.focusEventEmitter.emit(true);
  }
}
