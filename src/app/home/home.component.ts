import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../utilities/services/commonservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getListData: any;
  constructor(private commonserviceService: CommonserviceService) { }

  ngOnInit() {
	  this.getHeroes();
  }
getHeroes(){
   this.commonserviceService.getData().subscribe(getListData =>{
		  this.getListData = getListData;
		  console.log(this.getListData);
	  },
	  (error) => {
	  alert('No data');
	  }
  );
}
}
