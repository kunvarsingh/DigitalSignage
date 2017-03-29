import { Directive, ElementRef, Renderer,Input, HostListener } from '@angular/core';

@Directive({
 selector: '[number-only]',
 exportAs: 'my-second-directive'
 })
export class TextboxDirective {

    @Input()
    minValue=1;

    @Input()
    maxValue=12;

    @Input("number-only")
    numberOnly = false;

    constructor(public el:ElementRef, public renderer:Renderer) {
    }

    @HostListener('keypress',['$event'])
    onkeypress(event){
        var keyCode = event.keyCode;
        var target = event.target;
        var value = target.value;
        var length = value.length;
        var backspace=8;
        // main logic
        var selectionStart=target.selectionStart;
        var selectionEnd=target.selectionEnd;
        var beforeTypeValue=(event.target.value).split('');
        beforeTypeValue.splice(selectionStart,(selectionEnd - selectionStart),event.key);
        var TotalValue=beforeTypeValue.join('');

        if(TotalValue == '-' || TotalValue ==  '.') {
            TotalValue += '0';
        }
        if(keyCode == backspace ){  
            return true;
        } 
        var val = this.checkIfNumberInRange(TotalValue,null);
        return val;
    }

    @HostListener('keydown',['$event'])
    onkeydown(event){
        var keyCode = event.keyCode;
        let keyUpCode = 38;
        let keyDownCode = 40;
        let spaceBarCode=32;

        if(keyCode == keyUpCode){
            var valueOfTextbox=this.el.nativeElement.value*1 + 1;
            if(this.checkIfNumberInRange(valueOfTextbox,null)){
                this.el.nativeElement.value = this.el.nativeElement.value*1 + 1;
            }
            event.preventDefault();
        }
        else if(keyCode == keyDownCode){
            var valueOfTextboxForNeg=this.el.nativeElement.value-1;
            if(this.checkIfNumberInRange(valueOfTextboxForNeg,null)){
                this.el.nativeElement.value = this.el.nativeElement.value - 1;
            }
            event.preventDefault();
        }
        else if(keyCode == spaceBarCode){  
            return false;
        } 
    }
 
    public checkIfNumberInRange(number:any, directive:any){
        let num = number * 1;
        let maxValue = (directive && directive.maxValue) || this.maxValue;
        let minValue = (directive && directive.minValue) || this.minValue;
        let isNumber = (directive && directive.numberOnly) || this.numberOnly;
        let isInRange= (num >= minValue && num <= maxValue);

        debugger;
        if(isNumber){
            isInRange = ((number+'').indexOf('-')&&(number+'').indexOf('.')) > -1 ? false : isInRange;
        }
        return isInRange;
        }
}
    
    