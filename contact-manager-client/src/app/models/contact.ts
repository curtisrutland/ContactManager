import { INote, Note } from "./note";

export interface IContact {
    id: number;
    createdOn: string;
    modifiedOn: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    poBox?: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber?: string;
    alternatePhoneNumber?: string;
    faxNumber?: string;
    email: string;
    alternateEmail: string;
    notes: INote[];
    createdOnText: string;
    modifiedOnText: string;
}

export class Contact implements IContact {
    id: number;
    createdOn: string;
    modifiedOn: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    poBox?: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber?: string;
    alternatePhoneNumber?: string;
    faxNumber?: string;
    email: string;
    alternateEmail: string;
    notes: Note[];
    createdOnText: string;
    modifiedOnText: string;
    constructor(private _base?: IContact) {
        if(_base)
            this.fill(_base);
    }

    fill(contact: IContact) {
        this.id = contact.id;
        this.createdOn = contact.createdOn;
        this.modifiedOn = contact.modifiedOn;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.addressLine1 = contact.addressLine1;
        this.addressLine2 = contact.addressLine2;
        this.poBox = contact.poBox;
        this.city = contact.city;
        this.state = contact.state;
        this.zip = contact.zip;
        this.phoneNumber = contact.phoneNumber;
        this.alternatePhoneNumber = contact.alternatePhoneNumber;
        this.faxNumber = contact.faxNumber;
        this.email = contact.email;
        this.alternateEmail = contact.alternateEmail;
        this.notes = contact.notes.map(note => new Note(note));
        this.createdOnText = contact.createdOnText;
        this.modifiedOnText = contact.modifiedOnText;
    }

    toIContact(): IContact {
        return JSON.parse(JSON.stringify(this));
    }

    get fullName() { return `${this.lastName}, ${this.firstName}`; }
}