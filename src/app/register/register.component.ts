import { Component, Input } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/Rx";
 
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
    public input: any;
 
    public constructor(private http: Http, private router: Router) {
        this.input = {
            "fullname": "",
            "phone": "",
            "username":"",
            "password":"",
            "repeatpassword":""
           
        };
    }
 
    public register() {
        var var_password = this.input.password;
        if ((/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).test(var_password))
        {
            if(this.input.password===this.input.repeatpassword)
            {
            if(this.input.username && this.input.password) {
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            this.http.post("http://localhost:3000/account", JSON.stringify(this.input), options)
            document.getElementById("details").innerHTML="Welcome"+" "+this.input.fullname+" "+"Your Registered details"+"->"+this.input.phone+","+this.input.username+","+this.input.password;
            
           
                //.map(result => result.json())
                //.subscribe(result => {
                   // this.router.navigate(["/login"]);
                //});
            }
        }
        else{
            document.getElementById("test").innerHTML="password not matched";
        }
    }
       else   {
        document.getElementById("demo").innerHTML = "Invalid password";
       }     
      
    }
 
}



    