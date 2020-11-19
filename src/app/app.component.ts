import { Component } from '@angular/core';
import { Contact } from './Model/Contact';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html' 
 ,
  styleUrls: ['app.component.css']
})
export class AppComponent {



    contacts:Contact[]= [ {fname:"Eric",lname:"Elliot",ph:"222-555-6575",dis:''},
    {fname:"Steve",lname:" Jobs",ph:"220-454-6574",dis:''},
    {fname:"Fred ",lname:"Allen",ph:"210-657-9886",dis:''},
    {fname:"Steve",lname:" Wozniak",ph:"343-675-8786",dis:''},
    {fname:"Bill",lname:" Gates",ph:"234-567-9789",dis:''}];

  
    sortContact() {
      this.contacts.sort((a,b)=>a.fname > b.fname?1:-1);
    }
  searchContacts(msg:string) {
    for(let i=0;i<this.contacts.length;i++) {
      const tmp:String = this.contacts[i].fname+" "+this.contacts[i].lname;
      if(tmp.toLowerCase().indexOf(msg) <= -1) {
          this.contacts[i].dis='none';
      }else {
        this.contacts[i].dis ='';
      }

    }
  }


  delete(ind:number) {
   
    this.contacts = this.contacts.filter((ele,index)=>{
      if(index != ind ) return ele;
    });
  }
modal_dis="";
update_modal_dis="";
  Cancel() {
    this.modal_dis = "none";
  }

  Cancel2() {
    this.update_modal_dis="none";
  }

  showModal() {
    this.modal_dis = "block";
  }

  tmp1:String;
  tmp2:String;
  tmp3:String;

  con1:Contact;
  showModal2(con:Contact) {
    this.update_modal_dis="block";
    this.con1 = con;
    this.tmp1 = con.fname;
    this.tmp2 = con.lname;
    this.tmp3 = con.ph;
  }
  saveContact(fname,lname,ph) {
    let c1 = new Contact(fname.value,lname.value,ph.value);
    fname.value="";
    lname.value="";
    ph.value="";
    this.contacts.push(c1);
    this.contacts.sort((a,b)=>a.fname > b.fname?1:-1);
  }
  Index:number;
  Update(con:Contact,ind:number) {
    this.Index = ind;
    this.showModal2(con);
  }

  updateContact(fname,lname,ph) {
   this.contacts[this.Index].fname = fname.value;
   this.contacts[this.Index].lname = lname.value;
   this.contacts[this.Index].ph = ph.value;
    
  }

  allNone() {
    return this.contacts.every((ele)=>ele.dis==='none');
  }
}
