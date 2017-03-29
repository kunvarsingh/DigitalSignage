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
var data_table_service_1 = require('./services/data.table.service');
var forms_1 = require('@angular/forms');
var AppComponent = (function () {
    function AppComponent(dataService, _fb) {
        this.dataService = dataService;
        this._fb = _fb;
        this.name = 'kunvar singh';
        this.title = 'Data table';
        this.query = '';
        // selectedDatalist:DataList=new DataList(1,'Partial');
        // datalists=[new DataList(1,'ABC'),new DataList(2,'DEF'),new DataList(3,'ABC')];
        this.filteredList = [];
        this.countries = ["Andorra", "Armenia", "Austria", "Azerbaijan",
            "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"
        ];
        this.elementRef = dataService;
    }
    AppComponent.prototype.getDatatable = function () {
        var _this = this;
        this.dataService.getDatatablefromServices().then(function (getDATA) { return _this.getDATA = getDATA; });
    };
    // ngOnInit(): void {
    //   this.getDatatable();
    // }
    AppComponent.prototype.ngOnInit = function () {
        this.getDatatable();
        jQuery(".gridSystem").mCustomScrollbar({
            axis: "yx",
            theme: "dark",
            scrollbarPosition: "outside"
        });
        jQuery(".gridSystemSecond").mCustomScrollbar({
            axis: "yx",
            theme: "dark",
            scrollbarPosition: "outside"
        });
    };
    AppComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            //this.filteredList = [];
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        console.log(this.filteredList);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'services/project.data.html'
        }), 
        __metadata('design:paramtypes', [data_table_service_1.DataTableService, forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map