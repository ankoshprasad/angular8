import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:Http) { }
  
  getData(){
	  let url = "https://api.github.com/users";
	  return this.http.get(url)
	 .map(
	 (res) =>{
	let resData = res;
	console.log(resData);
    return 	resData;
	
	 }
	 );
  }
}
