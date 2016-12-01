export interface INote {
    id: number;
    text: string;
    contactId: number;
    createdOn: string;
    modifiedOn: string;
}

export class Note implements INote {
    id: number;
    text: string;
    contactId: number;
    createdOn: string;
    modifiedOn: string;
    constructor(note: INote) {
        this.id = note.id;
        this.text = note.text;
        this.contactId = note.contactId;
        this.createdOn = note.createdOn;
        this.modifiedOn = note.modifiedOn;
    }
}