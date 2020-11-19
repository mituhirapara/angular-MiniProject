export class Contact {
     fname:String;
     lname:String;
     ph:String;
     dis:String;

    constructor(fname:String,lname:String,ph:String,dis:String='') {
        this.fname = fname;
        this.lname = lname;
        this.ph = ph;
    }

}