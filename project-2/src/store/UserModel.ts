export default class UserModel {
    Name: string;
    Age : number;
    Location:string;
    Checkbox1:Boolean;
    Checkbox2:Boolean;
    id:number
  
    constructor() {
      this.Name = '';
      this.Age=0;
      this.Location='';
      this.Checkbox1=false;
      this.Checkbox2=false;
      this.id=0
    }
  }