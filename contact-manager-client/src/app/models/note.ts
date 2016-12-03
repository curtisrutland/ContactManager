export interface INote {
    id?: number;
    text: string;
    contactId: number;
    createdOn?: string;
    modifiedOn?: string;
    createdOnText?: string;
    modifiedOnText?: string;
}

export class Note implements INote {
    id: number;
    text: string;
    contactId: number;
    createdOn: string;
    modifiedOn: string;
    createdOnText: string;
    modifiedOnText: string;
    constructor(note?: INote) {
        if(note) this.fill(note);
    }

    fill(note:INote){
        this.id = note.id;
        this.text = note.text;
        this.contactId = note.contactId;
        this.createdOn = note.createdOn;
        this.modifiedOn = note.modifiedOn;
        this.createdOnText = note.createdOnText
        this.modifiedOnText = note.modifiedOnText;
    }
}