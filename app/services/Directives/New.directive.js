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
var NewDirective = (function () {
    function NewDirective() {
        this.inc = false;
        this.dec = false;
    }
    NewDirective.prototype.onclick = function (event) {
        var directive = this.numberDirective;
        var element = directive.el.nativeElement;
        var updatedValue = this.inc ? (element.value * 1 + 1) : (element.value - 1);
        if (directive.checkIfNumberInRange(updatedValue, directive)) {
            element.value = updatedValue.toFixed(2);
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input('update-number'), 
        __metadata('design:type', Object)
    ], NewDirective.prototype, "numberDirective", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewDirective.prototype, "inc", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewDirective.prototype, "dec", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NewDirective.prototype, "onclick", null);
    NewDirective = __decorate([
        core_1.Directive({
            selector: '[update-number]'
        }), 
        __metadata('design:paramtypes', [])
    ], NewDirective);
    return NewDirective;
}());
exports.NewDirective = NewDirective;
//# sourceMappingURL=New.directive.js.map