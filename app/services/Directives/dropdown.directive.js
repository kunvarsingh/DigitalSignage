"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DropdownDirective = (function () {
    function DropdownDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DropdownDirective.prototype.ngOnInit = function () {
        this.copyList = this.dropdownlist;
        this.lastSelectedValue = this.dropdownlist[0];
        this.el.nativeElement.value = this.lastSelectedValue;
    };
    DropdownDirective.prototype.onclickfun = function (event) {
        this.lastSelectedValue = this.el.nativeElement.value;
        this.el.nativeElement.value = "";
        this.listCreate();
        jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
    };
    DropdownDirective.prototype.onblur = function (event) {
        this.el.nativeElement.value = this.lastSelectedValue;
        this.deleteList();
        this.dropdownlist = this.copyList;
    };
    DropdownDirective.prototype.deleteList = function () {
        var z1 = document.getElementById("listValue");
        this.el.nativeElement.parentNode.removeChild(z1);
    };
    DropdownDirective.prototype.listCreate = function () {
        var that = this;
        var z = document.createElement('ul');
        z.id = "listValue";
        for (var i = 0; i < this.dropdownlist.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode("" + this.dropdownlist[i]));
            if (this.dropdownlist[i] == this.lastSelectedValue) {
                item.className += "active";
            }
            z.appendChild(item);
        }
        z.onmousedown = function (value) {
            that.lastSelectedValue = value.target.innerHTML;
        };
        this.el.nativeElement.parentNode.appendChild(z);
        jQuery("#listValue").mCustomScrollbar({
            axis: "yx",
            theme: "dark",
            scrollbarPosition: "outside"
        });
    };
    DropdownDirective.prototype.onkeydown = function (event) {
        var elementValue = this.el.nativeElement.value;
        this.dropdownlist = this.copyList.filter(function (el) {
            return el.toLowerCase().indexOf(elementValue.toLowerCase()) > -1;
        });
        this.deleteList();
        this.listCreate();
        var keyCode = event.keyCode;
        var keyUpCode = 38;
        var keyDownCode = 40;
        var enter = 13;
        if (keyCode == keyUpCode) {
            var active = jQuery(".active");
            jQuery("#listValue li").removeClass("active");
            if (active.prev().length == 0) {
                active.siblings().last().addClass("active");
            }
            else {
                active.prev().addClass("active");
            }
            jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
        }
        else if (keyCode == keyDownCode) {
            var active = jQuery(".active");
            jQuery("#listValue li").removeClass("active");
            if (active.next().length == 0) {
                active.siblings().first().addClass("active");
            }
            else {
                active.next().addClass("active");
            }
            jQuery("#listValue").mCustomScrollbar('scrollTo', jQuery('.active').position().top);
        }
        else if (keyCode == enter) {
            var active = jQuery(".active");
            console.log(active);
            this.el.nativeElement.value = jQuery("#listValue li.active").html();
            this.lastSelectedValue = this.el.nativeElement.value;
            this.el.nativeElement.blur();
        }
    };
    __decorate([
        core_1.Input('dropdown-list'), 
        __metadata('design:type', Array)
    ], DropdownDirective.prototype, "dropdownlist", void 0);
    __decorate([
        core_1.HostListener('focus', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onclickfun", null);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onblur", null);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onkeydown", null);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[dropdown-list]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;
//# sourceMappingURL=dropdown.directive.js.map