export class User {
  
    lastName: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
    isLoaded: boolean;
  
  
    constructor(
      lastName: string, 
      firstName: string,
      age: number,
      quote: string, 
      photo: string, 
      isLoaded: boolean 
      ) 
      {
      this.lastName = lastName;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo;    
      this.isLoaded = isLoaded
     }
  
  
  
    showHideAge() {
      this.isLoaded = !this.isLoaded
      }
  
  }