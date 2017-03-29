import { Directive, ElementRef, Renderer,Input, HostListener ,HostBinding, OnInit} from '@angular/core';

declare var jQuery:any;
@Directive({
 selector: '[dropdown-list]',
})
export class DropdownDirective implements OnInit {
    @Input('dropdown-list')
    dropdownlist: String[];

    copyList:String[];
    filteredList:String[];
    lastSelectedValue: String;
    
    constructor(public el:ElementRef, public renderer:Renderer) { }

    ngOnInit():void {
        this.copyList = this.dropdownlist;
        this.lastSelectedValue = this.dropdownlist[0];
        this.el.nativeElement.value = this.lastSelectedValue;
    }

@HostListener('focus',['$event'])
onclickfun(event){
    this.lastSelectedValue = this.el.nativeElement.value;
    this.el.nativeElement.value="";
    this.listCreate();
    jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
}

 @HostListener('blur',['$event'])
 onblur(event){
    this.el.nativeElement.value = this.lastSelectedValue ;
    this.deleteList();
    this.dropdownlist = this.copyList;
 }
private deleteList():void{
     var z1=document.getElementById("listValue");
          this.el.nativeElement.parentNode.removeChild(z1);
}

private listCreate():void {
    var that = this;
    var z = document.createElement('ul');
    z.id="listValue";
    for(var i = 0; i < this.dropdownlist.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode("" + this.dropdownlist[i]));
            if(this.dropdownlist[i] == this.lastSelectedValue){
            item.className += "active";
        }
        z.appendChild(item);
    }
    z.onmousedown = function(value:any){
        that.lastSelectedValue = value.target.innerHTML;
    };
    this.el.nativeElement.parentNode.appendChild(z);
      jQuery("#listValue").mCustomScrollbar({
    axis:"yx", // vertical and horizontal scrollbar
    theme:"dark",
    scrollbarPosition: "outside"
    });
}
 
 @HostListener('keyup',['$event'])
    onkeydown(event){
        let elementValue=this.el.nativeElement.value;
        this.dropdownlist = this.copyList.filter(function(el){
            return el.toLowerCase().indexOf(elementValue.toLowerCase()) > -1;
        });

    this.deleteList();
    this.listCreate();


        var keyCode = event.keyCode;
        let keyUpCode = 38;
        let keyDownCode = 40;
        let enter=13;
     if(keyCode==keyUpCode){
        var active = jQuery(".active");
        jQuery("#listValue li").removeClass("active");
        if (active.prev().length == 0) {
            active.siblings().last().addClass("active");
        } else {
            active.prev().addClass("active");
        }
        jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
        }

    else if(keyCode==keyDownCode){
             var active = jQuery(".active");
            jQuery("#listValue li").removeClass("active");
            if (active.next().length == 0) {
                active.siblings().first().addClass("active");
            } else {
                active.next().addClass("active");
            }
            jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
    }
    else if(keyCode == enter){
         var active = jQuery(".active");
         console.log(active);
        this.el.nativeElement.value =jQuery("#listValue li.active").html();
        this.lastSelectedValue=this.el.nativeElement.value;
        this.el.nativeElement.blur();
    }
    }  
}

