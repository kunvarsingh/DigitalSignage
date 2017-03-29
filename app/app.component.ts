import { Component, OnInit } from '@angular/core';
import {Data} from './services/data';
import {DataTableService} from './services/data.table.service'
import {DataList} from './services/data.list';
import {Controls} from './controls';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
declare var jQuery:any;
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'services/project.data.html'
})
export class AppComponent implements OnInit{
   name = 'kunvar singh';
  title = 'Data table';
 //public myForm: FormGroup;
//model:Controls={textbox1: 0,textbox2:0};

 getDATA: Data[];
 public elementRef;
  constructor( private dataService: DataTableService,private _fb: FormBuilder) {
 this.elementRef = dataService;
  }

  getDatatable(): void {
    this.dataService.getDatatablefromServices().then(getDATA => this.getDATA = getDATA);
  }

  // ngOnInit(): void {
  //   this.getDatatable();
  // }
 ngOnInit(): any {
   this.getDatatable();
    jQuery(".gridSystem").mCustomScrollbar({
    axis:"yx", // vertical and horizontal scrollbar
    theme:"dark",
    scrollbarPosition: "outside"
    });
    jQuery(".gridSystemSecond").mCustomScrollbar({
    axis:"yx", // vertical and horizontal scrollbar
    theme:"dark",
    scrollbarPosition: "outside"
    });
  }
 public query = '';

// selectedDatalist:DataList=new DataList(1,'Partial');
// datalists=[new DataList(1,'ABC'),new DataList(2,'DEF'),new DataList(3,'ABC')];
 filteredList=[];

countries = [ "Andorra","Armenia","Austria","Azerbaijan",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"
            ];

filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){

            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        //this.filteredList = [];
         this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }
    console.log( this.filteredList);
}
 
// select(item){
//     this.query = item;
//     this.filteredList = [];
// }
}
