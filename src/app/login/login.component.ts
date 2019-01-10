import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/Rx";


interface DataResponse{
  
    id:number;
    username:string;
    password:string;

   
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    public input: any;
    constructor(private http: HttpClient,private router: Router) {
        this.input = {
            "email": "",
            "password": ""
        };
    }

    
 public verification(){
     var tempArray:DataResponse[]=[];
     this.http.get('http://192.168.1.4:8080/user').subscribe((data:DataResponse[])=>{
         tempArray=data
    console.log(tempArray[0]);
         var j:number;
   j=0;
       for(var i=0;i<tempArray.length;i++){
       if(this.input.email===tempArray[i].username && this.input.password===tempArray[i].password){
        this.router.navigate(['home']);
         break;
         }
       j++;
        }
         if(j==i){
document.getElementById("demo").innerHTML = "Invalid email or password";
         }
         }); 
   
     }
    }