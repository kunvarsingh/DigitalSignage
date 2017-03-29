import { Directive, ElementRef, Renderer,Input, HostListener } from '@angular/core';

@Directive({
 selector: '[update-number]'
 })
export class NewDirective {
	@Input('update-number')
	numberDirective: any;

	@Input()
	inc = false;


	@Input()
	dec = false;

  constructor() {
    }
     @HostListener('click',['$event'])
    onclick(event){

    	let directive = this.numberDirective;
    	let element = directive.el.nativeElement;
    	let updatedValue = this.inc ? (element.value*1+1) : (element.value - 1);
      
    	if(directive.checkIfNumberInRange(updatedValue,directive)){
    		element.value = updatedValue.toFixed(2);
    	}
    	else{
    		return false;
    	}
    }
}