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
var TextboxDirective = (function () {
    function TextboxDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.minValue = 1;
        this.maxValue = 12;
        this.numberOnly = false;
    }
    TextboxDirective.prototype.onkeypress = function (event) {
        var keyCode = event.keyCode;
        var target = event.target;
        var value = target.value;
        var length = value.length;
        var backspace = 8;
        // main logic
        var selectionStart = target.selectionStart;
        var selectionEnd = target.selectionEnd;
        var beforeTypeValue = (event.target.value).split('');
        beforeTypeValue.splice(selectionStart, (selectionEnd - selectionStart), event.key);
        var TotalValue = beforeTypeValue.join('');
        if (TotalValue == '-' || TotalValue == '.') {
            TotalValue += '0';
        }
        if (keyCode == backspace) {
            return true;
        }
        var val = this.checkIfNumberInRange(TotalValue, null);
        return val;
    };
    TextboxDirective.prototype.onkeydown = function (event) {
        var keyCode = event.keyCode;
        var keyUpCode = 38;
        var keyDownCode = 40;
        var spaceBarCode = 32;
        if (keyCode == keyUpCode) {
            var valueOfTextbox = this.el.nativeElement.value * 1 + 1;
            if (this.checkIfNumberInRange(valueOfTextbox, null)) {
                this.el.nativeElement.value = this.el.nativeElement.value * 1 + 1;
            }
            event.preventDefault();
        }
        else if (keyCode == keyDownCode) {
            var valueOfTextboxForNeg = this.el.nativeElement.value - 1;
            if (this.checkIfNumberInRange(valueOfTextboxForNeg, null)) {
                this.el.nativeElement.value = this.el.nativeElement.value - 1;
            }
            event.preventDefault();
        }
        else if (keyCode == spaceBarCode) {
            return false;
        }
    };
    TextboxDirective.prototype.checkIfNumberInRange = function (number, directive) {
        var num = number * 1;
        var maxValue = (directive && directive.maxValue) || this.maxValue;
        var minValue = (directive && directive.minValue) || this.minValue;
        var isNumber = (directive && directive.numberOnly) || this.numberOnly;
        var isInRange = (num >= minValue && num <= maxValue);
        debugger;
        if (isNumber) {
            isInRange = ((number + '').indexOf('-') && (number + '').indexOf('.')) > -1 ? false : isInRange;
        }
        return isInRange;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextboxDirective.prototype, "minValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextboxDirective.prototype, "maxValue", void 0);
    __decorate([
        core_1.Input("number-only"), 
        __metadata('design:type', Object)
    ], TextboxDirective.prototype, "numberOnly", void 0);
    __decorate([
        core_1.HostListener('keypress', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TextboxDirective.prototype, "onkeypress", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TextboxDirective.prototype, "onkeydown", null);
    TextboxDirective = __decorate([
        core_1.Directive({
            selector: '[number-only]',
            exportAs: 'my-second-directive'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], TextboxDirective);
    return TextboxDirective;
}());
exports.TextboxDirective = TextboxDirective;
//# sourceMappingURL=textbox.directive.js.map