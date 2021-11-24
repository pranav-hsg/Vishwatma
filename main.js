(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imageloader/imgloader.directive */ "I4ja");




function SliderComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://issani.co.in/thumbnail.php?dir=", data_r2["img"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2["title"]);
} }
function SliderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SliderComponent_div_0_Template_div_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.swipping($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loadPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_0_div_3_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_div_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loadNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.appearingSlider);
} }
class SliderComponent {
    constructor() {
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sliderData = [];
        this.imageLoader = {};
        this.numberOfRightSwipes = 0;
        this.completeSliderData = [];
        this.appearingSlider = [];
        this.requestedForData = false;
        this.stopLoading = false;
        this.scrollPos = 1;
    }
    ngOnInit() {
    }
    /**
     * TODO: Pranav - clean up the code.
     */
    ngOnChanges() {
        console.log('changed', this.sliderData);
        if (this.sliderData && this.sliderData.length == 0) {
            this.stopLoading = true;
            this.numberOfRightSwipes = 0;
        }
        else {
            this.stopLoading = false;
        }
        this.completeSliderData = this.completeSliderData.concat(this.sliderData || []);
        const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1);
        if (window.innerWidth > 600) {
            this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5);
        }
        else {
            this.appearingSlider = this.completeSliderData;
        }
        this.requestedForData = false;
    }
    loadNext() {
        this.numberOfRightSwipes++;
        const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1);
        if ((this.completeSliderData.length - startingFrom) < 5) {
            this.appearingSlider = [];
            this.loadMore.emit();
        }
        else {
            setTimeout(() => {
                this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5);
            }, 100);
        }
    }
    loadPrev() {
        if (this.numberOfRightSwipes <= 1) {
            return;
        }
        this.numberOfRightSwipes--;
        const startingFrom = (this.numberOfRightSwipes * 5) && (this.numberOfRightSwipes * 5 - 1);
        setTimeout(() => {
            this.appearingSlider = this.completeSliderData.slice(startingFrom, startingFrom + 5);
        }, 100);
    }
    swipping(e) {
        if (this.stopLoading) {
            return false;
        }
        if (this.requestedForData) {
            return false;
        }
        if (((e.target.scrollWidth - e.target.scrollLeft) < window.innerWidth + 50)) {
            this.requestedForData = true;
            this.numberOfRightSwipes++;
            this.loadMore.emit();
        }
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], inputs: { sliderData: "sliderData", imageLoader: "imageLoader" }, outputs: { loadMore: "loadMore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "slider-container", 3, "scroll", 4, "ngIf"], [1, "slider-container", 3, "scroll"], [1, "nav-btn", 3, "click"], ["src", "assets/icons/prev.svg", "alt", ""], ["class", "slider-card", 4, "ngFor", "ngForOf"], ["src", "assets/icons/next.svg", "alt", ""], [1, "slider-card"], ["alt", "slider image", "imageLoader", "", 1, "img", 3, "src"], [1, "label"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SliderComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearingSlider.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_2__["ImgloaderDirective"]], styles: [".img[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  margin: 5px;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 240px;\n  display: flex;\n  justify-content: center;\n  font-size: 10px;\n  color: gray;\n}\n\n.slider-card[_ngcontent-%COMP%] {\n  width: calc((100vw / 5) - 10px);\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 240px;\n  width: 100vw;\n  justify-content: center;\n}\n\n.slider-container.error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 800;\n  background-color: #ccc;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n@media (max-width: 600px) {\n  .img[_ngcontent-%COMP%] {\n    width: calc((100vw - 20px) / 2);\n    height: auto;\n    margin: 16px;\n  }\n\n  .slider-card[_ngcontent-%COMP%] {\n    width: calc(100vw / 2);\n  }\n\n  .slider-container[_ngcontent-%COMP%] {\n    overflow: auto;\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .nav-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nimg.loading[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icons/img_holder.svg\");\n}\n\n@keyframes bgColorAnimaion {\n  from {\n    background-color: white;\n  }\n  50% {\n    background-color: black;\n  }\n  to {\n    background-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBR0E7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFBTjs7RUFHRTtJQUNJLHNCQUFBO0VBQU47O0VBR0U7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0VBQUY7O0VBR0U7SUFDSSxhQUFBO0VBQU47QUFDRjs7QUFHQTtFQUVJLHFEQUFBO0FBRko7O0FBSUU7RUFDRTtJQUNFLHVCQUFBO0VBREo7RUFHRTtJQUNFLHVCQUFBO0VBREo7RUFHRTtJQUNFLHVCQUFBO0VBREo7QUFDRiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uc2xpZGVyLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC8gNSkgLSAxMHB4KTtcclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXIuZXJyb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMjBweCkgLyAyKTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXItY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG59XHJcbmltZy5sb2FkaW5ne1xyXG4gICAgLy8gYW5pbWF0aW9uOiBiZ0NvbG9yQW5pbWFpb24gMXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4xNywuNjcsLjgzLC42Nyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2ltZ19ob2xkZXIuc3ZnXCIpO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJnQ29sb3JBbmltYWlvbntcclxuICAgIGZyb217XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vLyAuc2xpZGVfcmVtb3ZlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IC0xMDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMXM7XHJcbi8vIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], null, { loadMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sliderData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\prana\Documents\VSCode\Angular\vishwatma\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["bgDark"];
const _c1 = function (a0, a1) { return { showMenu: a0, hideMenu: a1 }; };
class HeaderComponent {
    constructor() {
        this.collapsed = false;
        this.showMenu = false;
        this.menus = [
            {
                'heading': 'Home',
                'submenu': [
                    {
                        'name': 'Submenu1 fsadf jkashfksdhfhjdk',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu2',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Subm',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu2',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Subm',
                        'onClick': 'Submenu1 action'
                    }
                ]
            },
            {
                'heading': 'Template',
                'submenu': [
                    {
                        'name': 'Submenu1',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu2',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu3',
                        'onClick': 'Function'
                    }
                ]
            },
            {
                'heading': 'Features',
                'submenu': [
                    {
                        'name': 'Submenu1',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu2',
                        'onClick': 'Submenu1 action'
                    },
                    {
                        'name': 'Submenu3',
                        'onClick': 'Function'
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
    toggleDropdown(e) {
        e.target.parentNode.classList.toggle('open');
        e.target.parentNode.parentNode.classList.toggle('open');
    }
    onDocumentClick(e) {
        if (this.bgEl && this.bgEl.nativeElement.contains(e.target)) {
            this.showMenu = !this.showMenu;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bgEl = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 63, vars: 4, consts: [["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "initial center", 1, "div", "div__header", "mat-typography"], [1, "h2__logotext1"], ["href", "http://localhost:4200/home", 2, "text-decoration", "none"], [2, "color", "red", "font-size", "35px", "display", "inline-block"], [2, "color", "white", "font-size", "35px", "display", "inline-block"], [2, "color", "yellow", "font-size", "35px", "display", "inline-block"], ["fxGrow", "1", "fxHide.lt-sm", "", "fxHide.sm", "", "fxLayout", "row", "fxLayoutAlign", "initial center", 1, "ml"], [1, "issani__menu"], [1, "span__issani", "issani__menu--items"], ["fxHide.gt-sm", "", 1, "btn__menuicon", 2, "margin-left", "auto", 3, "click"], ["menu", ""], ["src", ".\\assets\\icons\\menu.svg", "alt", "", 1, "menuIcon"], ["fxHide.gt-sm", "", 1, "menu", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "initial center", 1, "sideMenu"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", "start start"], [1, "issani__sidemenu"], [1, "span__issani", "issani__sidemenu--items"], [1, "horizontalRow"], ["fxHide.gt-sm", "", 1, "btn__closeIcon", 3, "click"], ["src", ".\\assets\\icons\\close.svg", "alt", "", 1, "closeIcon"], ["fxFlex", "", "fxLayoutAlign", "space-between flex-end", 1, "signup", "buttons", 2, "margin-top", "auto", "margin-bottom", "10px"], [2, "width", "100%", "height", "62px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0C87");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0CB8\u0CCD\u0CB8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0CA8\u0CBF... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0CAE\u0CC1\u0C96 \u0CAA\u0CC1\u0C9F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0CAA\u0CBE\u0CA1\u0CCD\u0C95\u0CBE\u0CB8\u0CCD\u0C9F\u0CCD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0CA8\u0CC0\u0CB5\u0CC2 \u0CAC\u0CB0\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0CA6\u0CC0\u0CAA\u0CBE\u0CB5\u0CB3\u0CBF \u0CAC\u0CB0\u0CB9 \u0CB8\u0CCD\u0CAA\u0CB0\u0CCD\u0CA7\u0CC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0CAE\u0CB3\u0CC6\u0C97\u0CB0\u0CC6\u0CA6\u0CB5\u0CB0\u0CC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0C85\u0C82\u0C95\u0CA3\u0C97\u0CB3\u0CC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0CA8\u0CAE\u0CCD\u0CAE\u0CCD \u0CAC\u0C97\u0CCD\u0C97\u0CC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0CB8\u0C82\u0CAA\u0CB0\u0CCD\u0C95\u0CBF\u0CB8\u0CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_28_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0CAE\u0CC1\u0C96 \u0CAA\u0CC1\u0C9F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0CAA\u0CBE\u0CA1\u0CCD\u0C95\u0CBE\u0CB8\u0CCD\u0C9F\u0CCD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0CA8\u0CC0\u0CB5\u0CC2 \u0CAC\u0CB0\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0CA6\u0CC0\u0CAA\u0CBE\u0CB5\u0CB3\u0CBF \u0CAC\u0CB0\u0CB9 \u0CB8\u0CCD\u0CAA\u0CB0\u0CCD\u0CA7\u0CC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0CAE\u0CB3\u0CC6\u0C97\u0CB0\u0CC6\u0CA6\u0CB5\u0CB0\u0CC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0C85\u0C82\u0C95\u0CA3\u0C97\u0CB3\u0CC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0CA8\u0CAE\u0CCD\u0CAE\u0CCD \u0CAC\u0C97\u0CCD\u0C97\u0CC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0CB8\u0C82\u0CAA\u0CB0\u0CCD\u0C95\u0CBF\u0CB8\u0CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_59_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx.showMenu, !ctx.showMenu));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.div__header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: rgba(121, 85, 72, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  z-index: 100;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 60px;\n  padding: 6px;\n  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.19);\n}\n\n.div__header[_ngcontent-%COMP%]   .btn__login[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 32px;\n  margin: 0 6px;\n}\n\n.secondary_color[_ngcontent-%COMP%] {\n  color: #383c41;\n}\n\n.primary_color[_ngcontent-%COMP%] {\n  background-color: #7d2ae8;\n  color: white;\n}\n\n.primary_font[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font: Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-stretch: 100%;\n  line-height: 32px;\n}\n\n.h2__logotext[_ngcontent-%COMP%] {\n  border: solid 2px #7d2ae8;\n  border-radius: 40px;\n  background-color: transparent;\n  color: #7d2ae8;\n  padding: 0 16px;\n  letter-spacing: 1;\n  margin: 0 20px 0 0;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  all: unset;\n  margin: 10px;\n}\n\n.navbar-collapse[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: unset;\n  color: #0e1318;\n}\n\n.navbar-collapse[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  background-color: #e6e6e6;\n}\n\n.btn__menuicon[_ngcontent-%COMP%] {\n  margin: 0 10 0 10;\n  border: 0;\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border-radius: 3px;\n  font-size: 16px;\n}\n\n.menuIcon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: transparent;\n}\n\n.sideMenu[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  min-height: calc(100%);\n  position: fixed;\n  background-color: white;\n  top: 0;\n  width: 240px;\n  z-index: 101;\n  transition: right 0.4s ease-in;\n  outline: rgba(0, 0, 0, 0.2) solid 100vw;\n}\n\n.btn__closeIcon[_ngcontent-%COMP%] {\n  all: unset;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.btn__closeIcon[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  filter: invert(20%) sepia(93%) saturate(6805%) hue-rotate(3deg) brightness(107%) contrast(103%);\n}\n\ndiv.hideMenu[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  outline: 0;\n  transition: right 0.4s ease-out, opacity 20s cubic-bezier(0.37, 0.73, 0.95, 0.33), visibility 20s cubic-bezier(0.37, 0.73, 0.95, 0.33);\n  right: -240px;\n}\n\ndiv.showMenu[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  right: 0;\n}\n\n.horizontalRow[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 200px;\n  height: 1px;\n  background: #333;\n  background-image: linear-gradient(to right, #ccc, #333, #ccc);\n}\n\ndiv.sideMenu[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div.navbar-collapse[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  margin-left: 70px;\n  font-weight: 600;\n}\n\n.div__header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: red;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.drowndown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  font-weight: 600;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  align-content: center;\n  list-style: none;\n}\n\n.drowndown.open[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n\n.drowndown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.drowndown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  color: #333;\n  width: 200px;\n  background-color: #f9f5ff;\n  text-align: left;\n  list-style: none;\n  display: none;\n  padding: 0;\n  padding-left: 40px;\n}\n\n.drowndown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   div.liContainer[_ngcontent-%COMP%]:hover {\n  transition: all 0.6s;\n  background-color: #f0d6ff;\n}\n\n.drowndown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.drowndown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 160px;\n  margin: 10px 0;\n  padding-right: 20px;\n}\n\n.drowndown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.drowndown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  float: right;\n  transform: rotate(0deg);\n  transition: all 0.5s;\n}\n\n.drowndown.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .drowndown.open[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.drowndown.open[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .drowndown.open[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n\n.dropdown1[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  font-weight: 600;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  align-content: center;\n  list-style: none;\n}\n\n.dropdown1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dropdown1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.75);\n  border-radius: 8px;\n  position: absolute;\n  top: 40px;\n  left: -2px;\n  color: #333;\n  width: 200px;\n  background-color: white;\n  text-align: left;\n  list-style: none;\n  display: none;\n  padding: 0;\n  transition: display 10s;\n}\n\n.dropdown1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   div.liContainer[_ngcontent-%COMP%]:hover {\n  transition: all 0.6s;\n  background-color: #f0d6ff;\n}\n\n.dropdown1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  padding-left: 40px;\n}\n\n.dropdown1[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding-right: 20px;\n}\n\n.dropdown1[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dropdown1[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  transform: rotate(0deg);\n  transition: all 0.5s;\n}\n\n.dropdown1.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dropdown1[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%], .dropdown1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover {\n  display: block;\n}\n\n.dropdown1.open[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dropdown1[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dropdown1[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n\n.issani__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-right: 20px;\n}\n\n.issani__menu[_ngcontent-%COMP%]   .issani__menu--items[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n  color: white;\n}\n\n.issani__menu[_ngcontent-%COMP%]   .issani__menu--items[_ngcontent-%COMP%]:hover {\n  color: #e2dbd3;\n}\n\n.issani__sidemenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.issani__sidemenu[_ngcontent-%COMP%]   .issani__sidemenu--items[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 40px;\n}\n\n.issani__sidemenu[_ngcontent-%COMP%]   .issani__sidemenu--items[_ngcontent-%COMP%] {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.issani__sidemenu[_ngcontent-%COMP%]   .issani__sidemenu--items[_ngcontent-%COMP%]:hover {\n  color: rgba(175, 153, 129, 0.91);\n}\n\n.h2__logotext1[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 101px;\n  margin-top: 10px;\n}\n\n.ml[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFHQSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBSUosK0NBQUE7QUFEQTs7QUFFSTtFQUNJLGlCQUFBO0FBQVI7O0FBR0E7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUFESjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQUk7RUFDSSx5QkFBQTtBQUVSOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDZCQUFBO0FBR0o7O0FBREE7RUFFSSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQVFBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUxKOztBQU1JO0VBRUksK0ZBQUE7QUFMUjs7QUFhSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzSUFBQTtFQUdBLGFBQUE7QUFaUjs7QUFnQkk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBYlI7O0FBZ0JBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBR0EsZ0JBQUE7RUFDQSw2REFBQTtBQWZKOztBQWlCQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBZEo7O0FBaUJDO0VBRUcsVUFBQTtBQWZKOztBQWdDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBN0JKOztBQXFDQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQW5DSjs7QUFvQ0k7RUFDSSx5QkFBQTtBQWxDUjs7QUFvQ0k7RUFFSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQ1I7O0FBdUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBckNSOztBQXdDWTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7QUF0Q2hCOztBQXlDTztFQUNJLGVBQUE7QUF2Q1g7O0FBNENJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtBQTVDUjs7QUE2Q1E7RUFDSSxtQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTVDWjs7QUErQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQTdDWjs7QUFpREk7RUFDSSxjQUFBO0FBL0NSOztBQWlESTtFQUNJLDBCQUFBO0FBL0NSOztBQW1EQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBaERKOztBQW9ESTtFQUlJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXJEUjs7QUF5REk7RUFDSSxnREFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQXpEUjs7QUEyRFk7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0FBekRoQjs7QUE0RE87RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUExRFg7O0FBK0RJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBR0EsY0FBQTtFQUNBLG1CQUFBO0FBaEVSOztBQWlFUTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBL0RaOztBQWtFUTtFQUlJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBbkVaOztBQXVFSTtFQUNJLGNBQUE7QUFyRVI7O0FBd0VJO0VBQ0ksMEJBQUE7QUF0RVI7O0FBd0ZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyRko7O0FBdUZJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXJGUjs7QUF1Rkk7RUFDSSxjQUFBO0FBckZSOztBQXdGQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXJGSjs7QUFzRkk7RUFDSSxnQkFBQTtBQXBGUjs7QUFzRkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQXBGUjs7QUFzRkk7RUFDSSxnQ0FBQTtBQXBGUjs7QUF1RkE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBcEZKOztBQXNGQTtFQUNJLGlCQUFBO0FBbkZKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5kaXZfX2hlYWRlcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1NCUpOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCA4NSwgNzIsMC45KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgLy8gR2l2ZSBpdCBhIGxpdHRsZSBiaXQgc2hhZG93XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAxcHggNnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1xyXG5ib3gtc2hhZG93OiAwcHggMXB4IDZweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcclxuICAgICYgLmJ0bl9fbG9naW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG5cclxuICAgIGhlaWdodDozMnB4O1xyXG4gICAgbWFyZ2luOiAwIDZweDtcclxuICAgIFxyXG59XHJcbi5zZWNvbmRhcnlfY29sb3J7XHJcbiAgICBjb2xvcjpyZ2IoNTYsIDYwLCA2NSk7XHJcbiAgICAgXHJcbn1cclxuLnByaW1hcnlfY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMjUsIDQyLCAyMzIpO1xyXG4gICAgY29sb3I6d2hpdGU7ICBcclxufVxyXG4ucHJpbWFyeV9mb250e1xyXG4gICAgZm9udC13ZWlnaHQgOjYwMDtcclxuICAgIGZvbnQ6IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHJldGNoOiAxMDAlO1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzJweDtcclxufVxyXG4uaDJfX2xvZ290ZXh0e1xyXG4gICAgYm9yZGVyOnNvbGlkIDJweCAjN2QyYWU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAgICAgICAgICAgXHJcbiAgICBjb2xvcjogIzdkMmFlODtcclxuICAgIHBhZGRpbmc6MCAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE7XHJcbiAgICBtYXJnaW46MCAyMHB4IDAgMDtcclxufVxyXG4ubmF2YmFyLWNvbGxhcHNle1xyXG4gICAgYWxsOnVuc2V0OyBcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcbi5uYXZiYXItY29sbGFwc2UgYXtcclxuICAgIHdpZHRoOnVuc2V0O1xyXG4gICAgY29sb3I6cmdiKDE0LCAxOSwgMjQpO1xyXG4gICAgJjphY3RpdmV7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIH1cclxufVxyXG4uYnRuX19tZW51aWNvbntcclxuICAgIG1hcmdpbjogMCAxMCAwIDEwO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcbi5tZW51SWNvbntcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uc2lkZU1lbnV7XHJcbiAgICAvLyBoZWlnaHQ6MTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWluLWhlaWdodDpjYWxjKDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgdHJhbnNpdGlvbjpyaWdodCAwLjRzIGVhc2UtaW47XHJcbiAgICBvdXRsaW5lOiByZ2JhKDAsMCwwLC4yKSBzb2xpZCAxMDB2dztcclxufSBcclxuLy8gLmJnRGFya3tcclxuLy8gICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4vLyAgICAgbGVmdDowO1xyXG4vLyAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoMTAwJSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDcsIDQ3LCA0NywgMC4yODEpO1xyXG4vLyAgICAgei1pbmRleDogNTA7XHJcbi8vIH1cclxuLmJ0bl9fY2xvc2VJY29ue1xyXG4gICAgYWxsOnVuc2V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowOyBcclxuICAgIDpob3ZlcntcclxuICAgICAgICAvLyBQdXQgY29sb3IgdG8gc3ZnIHdpdGhvdXQgdG91Y2hpbmcgc3ZnXHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDY4MDUlKSBodWUtcm90YXRlKDNkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTAzJSk7XHJcbiAgICB9XHJcbn1cclxuLy8gZGl2Lm1lbnV7XHJcblxyXG4gICAgXHJcbi8vIH1cclxuZGl2LmhpZGVNZW51e1xyXG4gICAgLnNpZGVNZW51e1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICB0cmFuc2l0aW9uOnJpZ2h0IDAuNHMgZWFzZS1vdXQsXHJcbiAgICAgICAgb3BhY2l0eSAyMHMgY3ViaWMtYmV6aWVyKC4zNywuNzMsLjk1LC4zMyksXHJcbiAgICAgICAgdmlzaWJpbGl0eSAyMHMgY3ViaWMtYmV6aWVyKC4zNywuNzMsLjk1LC4zMyk7XHJcbiAgICAgICAgcmlnaHQ6LTI0MHB4O1xyXG4gICAgfVxyXG59XHJcbmRpdi5zaG93TWVudXtcclxuICAgIC5zaWRlTWVudXsgICBcclxuICAgICAgICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgfVxyXG59XHJcbi5ob3Jpem9udGFsUm93e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwyMTIsMjU1LDEpIDAlLCByZ2JhKDEyNSw0MiwyMzIsMSkgMzUlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICMzMzMsICNjY2MpO1xyXG59XHJcbmRpdi5zaWRlTWVudSA+IGRpdiA+IGRpdi5uYXZiYXItY29sbGFwc2V7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OjcwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gL21hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbiAuZGl2X19oZWFkZXIgPiBhe1xyXG5cclxuICAgIGNvbG9yOnJlZDsgXHJcblxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vQGF0LXJvb3RcclxuXHJcbi8vdmFyaWFibGVzXHJcbiRiYWNrZ3JvdW5kLXB1cnBsZTogI0VFRUVFRTtcclxuJHN1YnRsZS13aGl0ZTogI2Y5ZjlmOTtcclxuJHN1YnRsZS1ncmV5OiAjZjJmMmYyO1xyXG4kbWFza2VkLWdyZXk6ICMzMzM7XHJcbiRibHVlOiAjRjAzODYxO1xyXG5cclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuKntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH1cclxuLy8gLnNpZGVNZW51e1xyXG4vLyAgICAgJiA+IGRpdntcclxuLy8gICAgICAgICBoZWlnaHQ6MTAwJTtcclxuLy8gICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLmRyb3duZG93bntcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIC8vIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDAgMCAyMHB4IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjlmNWZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICBcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGl2LmxpQ29udGFpbmVye1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNnM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIGxpe1xyXG4gICAgICAgICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgICAgfVxyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6MTYwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjJweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgJi5vcGVuIHVsLCYub3Blbjpob3ZlciB1bHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gICAgJi5vcGVuIC5pY29uIGksJi5vcGVuOmhvdmVyIC5pY29uIGl7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICB9XHJcblxyXG59XHJcbi5kcm9wZG93bjF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICYub3BlbiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgICAvLyB3aWR0aDoxMDAlO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyB0b3A6NzBweDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMCAwIDIwcHggMDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggNXB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC43NSkgaW5zZXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDo0MHB4O1xyXG4gICAgICAgIGxlZnQ6LTJweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgIFxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZGlzcGxheSAxMHM7XHJcbiAgICAgICAgZGl2LmxpQ29udGFpbmVye1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNnM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIGxpe1xyXG4gICAgICAgICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgIH1cclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIHdpZHRoOjE2MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoycHg7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmLm9wZW4gdWwsJjpob3ZlciB1bCwmIHVsOmhvdmVye1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmLm9wZW4gLmljb24gaSwmOmhvdmVyIC5pY29uIGksJiAuaWNvbjpob3ZlciBpe1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4vLyAgICAgYm9keSBkaXYuZGl2LmRpdl9faGVhZGVye1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODMpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5oMl9fbG9nb3RleHQxe1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMTgyLCAxODIsIDAuODU2KTtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSg2cHgpO1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICNkYTZiZmYgLCAjNDIzOTM5KTtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogIDIwcHg7XHJcbi8vIH1cclxuXHJcbi5pc3NhbmlfX21lbnV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC5pc3NhbmlfX21lbnUtLWl0ZW1ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIC5pc3NhbmlfX21lbnUtLWl0ZW1zOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOnJnYigyMjYsIDIxOSwgMjExKTtcclxuICAgIH1cclxufVxyXG4uaXNzYW5pX19zaWRlbWVudXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaXNzYW5pX19zaWRlbWVudS0taXRlbXM6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaXNzYW5pX19zaWRlbWVudS0taXRlbXN7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5pc3NhbmlfX3NpZGVtZW51LS1pdGVtczpob3ZlcntcclxuICAgICAgICBjb2xvcjpyZ2JhKDE3NSwgMTUzLCAxMjksIDAuOTEpO1xyXG4gICAgfVxyXG59XHJcbi5oMl9fbG9nb3RleHQxe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB3aWR0aDoxMDFweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm1se1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { bgEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["bgDark"]
        }], onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F766":
/*!*****************************************************************!*\
  !*** ./src/app/components/imageloader/imageloader.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageloaderComponent", function() { return ImageloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _imgloader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgloader.directive */ "I4ja");



class ImageloaderComponent {
    constructor() {
        this.imageLoader = {};
    }
    ngOnInit() {
    }
}
ImageloaderComponent.ɵfac = function ImageloaderComponent_Factory(t) { return new (t || ImageloaderComponent)(); };
ImageloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageloaderComponent, selectors: [["app-imageloader"]], inputs: { imageLoader: "imageLoader" }, decls: 5, vars: 2, consts: [[1, "div", "div__mainContainer"], [1, "imageContainer"], ["loading", "lazy", "imageLoader", "", "alt", "", 3, "src"], [1, "p", "p__imgTitle"]], template: function ImageloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageLoader.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.imageLoader.imgText);
    } }, directives: [_imgloader_directive__WEBPACK_IMPORTED_MODULE_1__["ImgloaderDirective"]], styles: [".div__mainContainer[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.imageContainer[_ngcontent-%COMP%], .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n}\n\n.imageContainer[_ngcontent-%COMP%]   img.loading[_ngcontent-%COMP%] {\n  animation: bgColorAnimaion 1s infinite cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  background-image: url(\"/assets/icons/img_holder.svg\");\n}\n\n@keyframes bgColorAnimaion {\n  from {\n    background-color: white;\n  }\n  50% {\n    background-color: black;\n  }\n  to {\n    background-color: white;\n  }\n}\n\n.p.p__imgTitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font: Helvetica, Arial, sans-serif;\n  line-height: 32px;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbWFnZWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsMkVBQUE7RUFDQSxxREFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSx1QkFBQTtFQUdGO0VBREE7SUFDRSx1QkFBQTtFQUdGO0VBREE7SUFDRSx1QkFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdGIiwiZmlsZSI6ImltYWdlbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kaXZfX21haW5Db250YWluZXJ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuLmltYWdlQ29udGFpbmVyLC5pbWFnZUNvbnRhaW5lciBpbWd7XHJcbiAgd2lkdGg6MjQwcHg7XHJcbiAgaGVpZ2h0OjI0MHB4O1xyXG59XHJcbi5pbWFnZUNvbnRhaW5lciBpbWcubG9hZGluZ3tcclxuICBhbmltYXRpb246IGJnQ29sb3JBbmltYWlvbiAxcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjE3LC42NywuODMsLjY3KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2ltZ19ob2xkZXIuc3ZnXCIpO1xyXG59XHJcbkBrZXlmcmFtZXMgYmdDb2xvckFuaW1haW9ue1xyXG4gIGZyb217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICB0b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG59XHJcbi5wLnBfX2ltZ1RpdGxle1xyXG4gIG1hcmdpbjowO1xyXG4gIGZvbnQ6IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OjMycHg7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageloaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-imageloader',
                templateUrl: './imageloader.component.html',
                styleUrls: ['./imageloader.component.scss']
            }]
    }], function () { return []; }, { imageLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "I4ja":
/*!***************************************************************!*\
  !*** ./src/app/components/imageloader/imgloader.directive.ts ***!
  \***************************************************************/
/*! exports provided: ImgloaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgloaderDirective", function() { return ImgloaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ImgloaderDirective {
    constructor() {
        // @HostBinding('attr.src') srcAttr="assets/icons/img_holder.svg"
        this.isLoading = true;
    }
    // @Input('src') imageSrc:any;
    // @Input('loaderImg') loaderImg:any;
    loadImage() {
        // console.log(this.srcAttr)
        // this.srcAttr=this.imageSrc;
        // console.log(this.imageSrc)
        this.isLoading = false;
    }
}
ImgloaderDirective.ɵfac = function ImgloaderDirective_Factory(t) { return new (t || ImgloaderDirective)(); };
ImgloaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImgloaderDirective, selectors: [["", "imageLoader", ""]], hostVars: 2, hostBindings: function ImgloaderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImgloaderDirective_load_HostBindingHandler() { return ctx.loadImage(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", ctx.isLoading);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgloaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[imageLoader]'
            }]
    }], function () { return []; }, { loadImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['load']
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.loading']
        }] }); })();


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SENy":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/slider/slider.service */ "pytD");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/slider/slider.component */ "+zoA");






class HomeComponent {
    constructor(sliderService) {
        this.sliderService = sliderService;
        this.authors = [];
        this.ankanas = [];
        this.bannerImageUrl = 'https://static.canva.com/marketplace/banners/Temp-MP-Banner_OCT19_Logo-Green_V1-%40x2.jpg';
    }
    ngOnInit() {
        this.sliderService.loadData('posts', '-1', '10').subscribe((data = []) => {
            console.log(data);
            this.latestArticles = data;
        });
        // this.homeData = this.sliderService.getSliderContent()
    }
    loadMoreLatestArticles() {
        const lastId = this.latestArticles[this.latestArticles.length - 1].redirection;
        this.sliderService.loadData('posts', lastId, '10').subscribe((data = []) => {
            console.log(data);
            this.latestArticles = data;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__["SliderService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 2, consts: [[3, "bgImageUrl"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "div", "div__contentContainer"], [1, "mat-display-2"], [1, "searchBox__container"], ["type", "text", "placeholder", "Search", 1, "search__input"], [1, "searchBtn"], ["src", ".\\assets\\icons\\search.svg", "alt", "", 1, "searchIcon"], [3, "sliderData", "loadMore"], [1, "bgIcon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0C87\u0CB8\u0CCD\u0CB8\u0CA8\u0CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explore all thousands of fonts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadMore", function HomeComponent_Template_app_slider_loadMore_10_listener() { return ctx.loadMoreLatestArticles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgImageUrl", ctx.bannerImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sliderData", ctx.latestArticles);
    } }, directives: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"]], styles: ["[_nghost-%COMP%]     .div__bannerContainer {\n  margin-top: 82px;\n}\n\n.div__contentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.div__contentContainer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.div__contentContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n\n.searchBox__container[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  position: relative;\n  width: 80%;\n  border-radius: 50px;\n}\n\n.searchBox__container[_ngcontent-%COMP%]   .searchBtn[_ngcontent-%COMP%] {\n  all: unset;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 2px;\n  cursor: pointer;\n}\n\n.searchBox__container[_ngcontent-%COMP%]   .searchBtn[_ngcontent-%COMP%]   .searchIcon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 24px;\n  padding-right: 40px;\n  transition: transform 250ms ease-in-out;\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  line-height: 18px;\n  border-radius: 50px;\n  background-color: transparent;\n  \n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-color: white;\n  background-position: 95% center;\n  border-radius: 50px;\n  border: 1px solid white;\n  transition: all 250ms ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-style: preserve-3d;\n  transition: outline 2s ease-in;\n  color: black;\n}\n\n.search__input[_ngcontent-%COMP%]::placeholder {\n  color: black;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n\n.search__input[_ngcontent-%COMP%]:focus {\n  border-radius: 0;\n  border: solid 2px #7d2ae8;\n  color: black;\n  outline: solid rgba(0, 0, 0, 0.438) 2000px;\n}\n\n.bgIcon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  -webkit-mask: url(\"/assets/icons/close.svg\");\n          mask: url(\"/assets/icons/close.svg\");\n  background-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBRkU7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHTjs7QUFGTTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FBSVQ7O0FBQ0U7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7RUFDTix5R0FBQTtFQUdNLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBRk47O0FBR007RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQURWOztBQUdNO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQURWOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esd0JBQUE7QUFGRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5kaXZfX2Jhbm5lckNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOjgycHg7XHJcbn1cclxuLmRpdl9fY29udGVudENvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGl2X19jb250ZW50Q29udGFpbmVyICp7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmRpdl9fY29udGVudENvbnRhaW5lciBoMXtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4vL3NlYXJjaF9faW5wdXRcclxuLnNlYXJjaEJveF9fY29udGFpbmVye1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOjgwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICYgLnNlYXJjaEJ0bntcclxuICAgICAgXHJcbiAgICAgIGFsbDp1bnNldDtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OjEwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTUwJSk7XHJcbiAgICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICYgLnNlYXJjaEljb257IFxyXG4gICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgfSBcclxuICB9XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgJl9faW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDM4KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8qICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9taWhhZWx0b21pYy5jb20vY29kZXBlbi9pbnB1dC1zZWFyY2gvaWNfc2VhcmNoX2JsYWNrXzI0cHguc3ZnKTsgKi9cclxuXHJcbiAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyUzRSUzQ3BhdGggZD0nTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Jy8lM0UlM0NwYXRoIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNpdGlvbjpvdXRsaW5lIDJzIGVhc2UtaW47XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjA7XHJcbiAgICAgICAgICBib3JkZXI6c29saWQgMnB4ICM3ZDJhZTg7ICAgICAgXHJcbiAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgIG91dGxpbmU6c29saWQgcmdiYSgwLCAwLCAwLCAwLjQzOCkgMjAwMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi5iZ0ljb257XHJcbiAgd2lkdGg6MjBweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICBtYXNrOiB1cmwoJy9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__["SliderService"] }]; }, null); })();


/***/ }),

/***/ "SMCv":
/*!******************************************************!*\
  !*** ./src/app/material/material/material.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]
                ],
                exports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Vishwatma';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = [[["", 8, "div__contentcontainer"]]];
const _c1 = function () { return { "padding": "0" }; };
const _c2 = function (a1) { return { "border-radius": "0px", "background-image": a1 }; };
const _c3 = function (a0) { return { "background-image": a0 }; };
const _c4 = [".div__contentContainer"];
class BannerComponent {
    constructor() {
        this.bgImageUrl = 'https://static.canva.com/marketplace/banners/Temp-MP-Banner_OCT19_Logo-Green_V1-%40x2.jpg';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    thunder() {
        // let img=document.getElementById('rainyday')
        // var rainyDay = new RainyDay({image: img})
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { bgImageUrl: "bgImageUrl" }, ngContentSelectors: _c4, decls: 4, vars: 8, consts: [["fxFlex", "100", "fxLayoutAlign", "initial center", 1, "div", "div__bannerContainer", "mat-typography", 3, "ngStyle.lt-sm"], ["id", "rainday", "fxFlex", "100", 1, "div", "div__banner", 3, "ngStyle.lt-sm", "ngStyle"], ["fxLayout", "column", 1, "div", "div__transparent"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.lt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, "url(" + ctx.bgImageUrl + ")"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, "url(" + ctx.bgImageUrl + ")"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]], styles: [".div__bannerContainer[_ngcontent-%COMP%] {\n  height: 344px;\n  padding: 0 32px;\n}\n\n.div__banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  border-radius: 10px;\n  background-color: white;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.div__transparent[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n}\n\n.div__transparent[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%] {\n  letter-spacing: 1.4px;\n  font-weight: 600;\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQkFBQTtBQUFKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfX2Jhbm5lckNvbnRhaW5lcntcclxuICAgIFxyXG4gICAgaGVpZ2h0OjM0NHB4O1xyXG4gICAgcGFkZGluZzogMCAzMnB4O1xyXG59XHJcbi5kaXZfX2Jhbm5lcntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmRpdl9fdHJhbnNwYXJlbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJiAubWF0LWRpc3BsYXktMntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzoxLjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIH1cclxuICB9XHJcbi8vIC5kaXZfX2Jhbm5lcntcclxuLy8gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4vLyAgICAgaGVpZ2h0OjEwMCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gfVxyXG4vLyAuZGl2X190cmFuc3BhcmVudHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDIwJSk7XHJcbi8vICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAmIC5tYXQtZGlzcGxheS0ye1xyXG4vLyAgICAgICAgIGxldHRlci1zcGFjaW5nOjEuNHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvL3NlYXJjaF9faW5wdXRcclxuLy8gLnNlYXJjaEJveF9fY29udGFpbmVye1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbi8vICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICAgIHdpZHRoOjgwJTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbi8vICAgICAmIC5zZWFyY2hCdG57XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgYWxsOnVuc2V0O1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4vLyAgICAgICAgIHJpZ2h0OjEwcHg7XHJcbi8vICAgICAgICAgdG9wOiA1MCU7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC01MCUpO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6MnB4O1xyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAmIC5zZWFyY2hJY29ueyBcclxuLy8gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4vLyAgICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4vLyAgICAgICAgIH0gXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLnNlYXJjaCB7XHJcbi8vICAgICAmX19pbnB1dCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzOCk7XHJcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vIC8qICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9taWhhZWx0b21pYy5jb20vY29kZXBlbi9pbnB1dC1zZWFyY2gvaWNfc2VhcmNoX2JsYWNrXzI0cHguc3ZnKTsgKi9cclxuIFxyXG4vLyAgICAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyUzRSUzQ3BhdGggZD0nTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Jy8lM0UlM0NwYXRoIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLyUzRSUzQy9zdmclM0VcIik7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIGNlbnRlcjtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4vLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuLy8gICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbi8vICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuLy8gICAgICAgICB0cmFuc2l0aW9uOm91dGxpbmUgMnMgZWFzZS1pbjtcclxuLy8gICAgICAgICBjb2xvcjpibGFjaztcclxuLy8gICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAmOmZvY3Vze1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjA7XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAycHggIzdkMmFlODsgICAgICBcclxuLy8gICAgICAgICAgICAgb3V0bGluZTpzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDM4KSAyMDAwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5kaXZfX21hZzF7XHJcbiAgICBcclxuLy8gfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, { bgImageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XrDg":
/*!*******************************************************!*\
  !*** ./src/app/routes/category/category.component.ts ***!
  \*******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_imageloader_imageloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/imageloader/imageloader.component */ "F766");
/* harmony import */ var _components_imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/imageloader/imgloader.directive */ "I4ja");







function CategoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-imageloader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageLoader_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageLoader", imageLoader_r1);
} }
class CategoryComponent {
    constructor() {
        this.bannerImageUrl = 'assets/icons/duck.jpg';
        this.text = 'Loading';
        this.imageLoaderData = [
            {
                imgSrc: 'https://picsum.photos/200/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/200/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/200/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/200/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/400/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/300/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/500/300.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/400/200.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/400/800.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/500/500.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/200/100.jpg',
                imgText: 'This is dummy'
            },
            {
                imgSrc: 'https://picsum.photos/200/200.jpg',
                imgText: 'This is dummy'
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.text = 'Loading stopped';
        }, 0);
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 10, vars: 3, consts: [[3, "bgImageUrl"], ["fxLayout", "column", 1, "div", "div__contentContainer"], [1, "mat-display-2"], [1, "div", "div__cardContainer"], ["class", "div div__card", 4, "ngFor", "ngForOf"], [1, "div", "div__card"], [3, "imageLoader"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logo Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No business is complete without a logo. Design your own by customizing one of Canva's professionally made logo templates with the help of our intuitive editing tools.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgImageUrl", ctx.bannerImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageLoaderData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_imageloader_imageloader_component__WEBPACK_IMPORTED_MODULE_4__["ImageloaderComponent"], _components_imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_5__["ImgloaderDirective"]], styles: [".div__contentContainer[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  width: 500px;\n  height: 100%;\n  padding: 20px;\n  justify-content: center;\n}\n.div__contentContainer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n}\n.div__contentContainer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]     .div__bannerContainer {\n  margin-top: 82px;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.div__cardContainer[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 32px 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUFDSjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBR0Y7QUFEQTtFQUNFLHlCQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFHRiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGl2X19jb250ZW50Q29udGFpbmVye1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDo1MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICp7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICB9XHJcbn1cclxuLmRpdl9fY29udGVudENvbnRhaW5lciAqe1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZGl2X19iYW5uZXJDb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDo4MnB4O1xyXG59XHJcbip7XHJcbiAgbWFyZ2luOiAwIDtcclxuICBwYWRkaW5nOjA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZGl2X19jYXJkQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgLy8gbWFyZ2luOiAzMnB4O1xyXG4gIHBhZGRpbmc6IDMycHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDoxNnB4O1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _components_imageloader_imageloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/imageloader/imageloader.component */ "F766");
/* harmony import */ var _routes_category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/category/category.component */ "XrDg");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/home/home.component */ "SENy");
/* harmony import */ var _routes_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/post/post.component */ "p3EL");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _material_material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material/material.module */ "SMCv");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/imageloader/imgloader.directive */ "I4ja");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _components_imageloader_imageloader_component__WEBPACK_IMPORTED_MODULE_7__["ImageloaderComponent"],
        _routes_category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
        _routes_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _routes_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
        _components_imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_16__["ImgloaderDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _material_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
                    _components_imageloader_imageloader_component__WEBPACK_IMPORTED_MODULE_7__["ImageloaderComponent"],
                    _routes_category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                    _routes_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _routes_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                    _components_imageloader_imgloader_directive__WEBPACK_IMPORTED_MODULE_16__["ImgloaderDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _material_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "p3EL":
/*!***********************************************!*\
  !*** ./src/app/routes/post/post.component.ts ***!
  \***********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-data.service */ "xZj7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







const _c0 = function (a0) { return { "background-image": a0 }; };
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0C89\u0CA6\u0CCD\u0CA6: \u0CEF \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0CAC\u0C97\u0CCD\u0C97\u0CC6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0CAA\u0CCB\u0CB8\u0CCD\u0C9F\u0CCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.issani.co.in/", ctx_r0.post.data.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + "https://www.issani.co.in/" + ctx_r0.post.profile.pic + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.post.profile.name, " | \u0CA8\u0CB5\u0CC0\u0C95\u0CB0\u0CBF\u0CB8\u0CB2\u0CBE\u0CA6 \u0CA6\u0CBF\u0CA8\u0CBE\u0C82\u0C95 ", ctx_r0.post.data.postedon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.profile.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.post.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PostComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostComponent {
    constructor(el, zone, postService, route) {
        this.el = el;
        this.zone = zone;
        this.postService = postService;
        this.route = route;
        this.data = {};
        this.number = 1;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.id = +this.id;
        });
        if (this.id) {
            this.postService.getPostData(this.id).subscribe(response => {
                // if(response?.errMessage){
                //   console.log(response)
                // }
                this.post = response;
                this.initScrollout();
            }, err => console.log('HTTP Error', err));
        }
    }
    initScrollout() {
        setTimeout(() => {
            this.zone.runOutsideAngular(() => {
                this.sco = ScrollOut({
                    scope: this.el.nativeElement,
                    targets: ".scrollout,.post",
                    threshold: 0.00000001
                });
            });
        }, 2000);
    }
    ngOnDestroy() {
        this.sco.teardown();
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_post_data_service__WEBPACK_IMPORTED_MODULE_1__["PostDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 2, vars: 2, consts: [["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "center initial ", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "center initial "], ["fxFlex", "60", "fxFlex.lt-md", "100", 1, "div", "div__container", "post__container"], ["fxLayoutAlign", "center initial", 1, "div", "div__imageContainer"], ["alt", "", 1, "main__image", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "initial center", 1, "div", "div__postInfo", "scrollout__fade"], [1, "author__img", 3, "ngStyle"], [1, "about", "scrollout", 2, "text-align", "left"], ["id", "headingFeature"], [1, "invisible"], [1, "post", "scrollout", 2, "text-align", "left"], [1, "body-content", 3, "innerHTML"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_div_0_Template, 23, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post == null ? null : ctx.post.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.post == null ? null : ctx.post.data));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"]], styles: [".div__container[_ngcontent-%COMP%] {\n  line-height: 40px;\n  letter-spacing: 1px;\n  padding: 0 20px;\n}\n.div__container[_ngcontent-%COMP%]   .author__img[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-size: cover;\n}\n.div__container[_ngcontent-%COMP%]   .div__postInfo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n*[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-family: \"Baloo Tamma 2\";\n}\n.div__imageContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.div__imageContainer[_ngcontent-%COMP%]   .main__image[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n.about[_ngcontent-%COMP%] {\n  font-family: \"Baloo Tamma 2\";\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+1) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+1)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+1)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+1)[data-scroll=out] {\n  left: -200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+2) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+2)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+2)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+2)[data-scroll=out] {\n  left: 200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+3) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+3)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+3)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+3)[data-scroll=out] {\n  left: -200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+4) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+4)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+4)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+4)[data-scroll=out] {\n  left: 200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+5) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+5)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+5)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+5)[data-scroll=out] {\n  left: -200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+6) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+6)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+6)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+6)[data-scroll=out] {\n  left: 200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+7) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+7)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+7)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+7)[data-scroll=out] {\n  left: -200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+8) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+8)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+8)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+8)[data-scroll=out] {\n  left: 200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+9) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+9)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+9)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+9)[data-scroll=out] {\n  left: -200px;\n  opacity: 0;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+10) {\n  position: relative;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+10)[data-scroll] {\n  transition: all 1s;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+10)[data-scroll=in] {\n  left: 0;\n  opacity: 1;\n}\n.scrollout[_ngcontent-%COMP%]:nth-child(2n+10)[data-scroll=out] {\n  left: 200px;\n  opacity: 0;\n}\n.scrollout__fade[data-scroll][_ngcontent-%COMP%] {\n  transition: all 2s;\n}\n.scrollout__fade[data-scroll=in][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.scrollout__fade[data-scroll=out][_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.invisible[_ngcontent-%COMP%] {\n  margin: 4px;\n  color: transparent;\n}\n#headingFeature[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n}\n#headingFeature[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  bottom: 0;\n  left: 0;\n  background-color: #414141;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.3s ease-in-out 0s;\n}\n.scrollout[data-scroll=in][_ngcontent-%COMP%]   #headingFeature[_ngcontent-%COMP%]::before {\n  animation: underline-ani 2s 0s forwards;\n}\n@keyframes underline-ani {\n  0% {\n    visibility: hidden;\n    transform: scaleX(0);\n  }\n  100% {\n    visibility: visible;\n    transform: scaleX(1);\n  }\n}\n.body-content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLGVBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBT0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsNEJBQUE7QUFKRjtBQU1BO0VBRUUsV0FBQTtBQUpGO0FBTUU7RUFFRSxZQUFBO0FBTEo7QUFTQTtFQUNFLDRCQUFBO0FBTkY7QUErQkU7RUFsQkEsa0JBQUE7QUFURjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQVdFO0VBQ0UsT0FBQTtFQUNBLFVBQUE7QUFUSjtBQVdFO0VBQ0UsWUFZcUI7RUFUckIsVUFBQTtBQVhKO0FBZ0JFO0VBbEJBLGtCQUFBO0FBTUY7QUFKRTtFQUNFLGtCQUFBO0FBTUo7QUFKRTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBTUo7QUFKRTtFQUNFLFdBT0k7RUFKSixVQUFBO0FBSUo7QUFDRTtFQWxCQSxrQkFBQTtBQXFCRjtBQW5CRTtFQUNFLGtCQUFBO0FBcUJKO0FBbkJFO0VBQ0UsT0FBQTtFQUNBLFVBQUE7QUFxQko7QUFuQkU7RUFDRSxZQVlxQjtFQVRyQixVQUFBO0FBbUJKO0FBZEU7RUFsQkEsa0JBQUE7QUFvQ0Y7QUFsQ0U7RUFDRSxrQkFBQTtBQW9DSjtBQWxDRTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBb0NKO0FBbENFO0VBQ0UsV0FPSTtFQUpKLFVBQUE7QUFrQ0o7QUE3QkU7RUFsQkEsa0JBQUE7QUFtREY7QUFqREU7RUFDRSxrQkFBQTtBQW1ESjtBQWpERTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBbURKO0FBakRFO0VBQ0UsWUFZcUI7RUFUckIsVUFBQTtBQWlESjtBQTVDRTtFQWxCQSxrQkFBQTtBQWtFRjtBQWhFRTtFQUNFLGtCQUFBO0FBa0VKO0FBaEVFO0VBQ0UsT0FBQTtFQUNBLFVBQUE7QUFrRUo7QUFoRUU7RUFDRSxXQU9JO0VBSkosVUFBQTtBQWdFSjtBQTNERTtFQWxCQSxrQkFBQTtBQWlGRjtBQS9FRTtFQUNFLGtCQUFBO0FBaUZKO0FBL0VFO0VBQ0UsT0FBQTtFQUNBLFVBQUE7QUFpRko7QUEvRUU7RUFDRSxZQVlxQjtFQVRyQixVQUFBO0FBK0VKO0FBMUVFO0VBbEJBLGtCQUFBO0FBZ0dGO0FBOUZFO0VBQ0Usa0JBQUE7QUFnR0o7QUE5RkU7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQWdHSjtBQTlGRTtFQUNFLFdBT0k7RUFKSixVQUFBO0FBOEZKO0FBekZFO0VBbEJBLGtCQUFBO0FBK0dGO0FBN0dFO0VBQ0Usa0JBQUE7QUErR0o7QUE3R0U7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQStHSjtBQTdHRTtFQUNFLFlBWXFCO0VBVHJCLFVBQUE7QUE2R0o7QUF4R0U7RUFsQkEsa0JBQUE7QUE4SEY7QUE1SEU7RUFDRSxrQkFBQTtBQThISjtBQTVIRTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBOEhKO0FBNUhFO0VBQ0UsV0FPSTtFQUpKLFVBQUE7QUE0SEo7QUE5R0U7RUFDRSxrQkFBQTtBQWlISjtBQS9HRTtFQUNFLFVBQUE7QUFpSEo7QUEvR0U7RUFDRSxVQUFBO0FBaUhKO0FBN0dBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBZ0hGO0FBcEdBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FBc0dGO0FBaEdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBakJrQjtFQWtCbEIsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFyQmlCO0VBc0JqQixrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUFtR0Y7QUFoR0E7RUFDRSx1Q0FBQTtBQW1HRjtBQTdGQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxvQkFBQTtFQWdHRjtFQTdGQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUErRkY7QUFDRjtBQXhGQTtFQUNFLHFCQUFBO0FBMEZGIiwiZmlsZSI6InBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gIzY2NjY2NlxyXG4uZGl2X19jb250YWluZXIge1xyXG4gIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wMzQpO1xyXG4gICYgLmF1dGhvcl9faW1ne1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgJiAuZGl2X19wb3N0SW5mbyA+ICp7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbn1cclxuKntcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBmb250LWZhbWlseTogJ0JhbG9vIFRhbW1hIDInO1xyXG59XHJcbi5kaXZfX2ltYWdlQ29udGFpbmVye1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjAzNCk7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbiAgJiAubWFpbl9faW1hZ2V7XHJcblxyXG4gICAgaGVpZ2h0OjUwdmg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5hYm91dHtcclxuICBmb250LWZhbWlseTogJ0JhbG9vIFRhbW1hIDInO1xyXG59XHJcbi8vIC5zY3JsbG91dHtcclxuICBcclxuLy8gfVxyXG5AbWl4aW4gc2Nyb2xsb3V0KCRwb3NpdGlvbikge1xyXG4gXHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgJltkYXRhLXNjcm9sbF0ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIH1cclxuICAmW2RhdGEtc2Nyb2xsPVwiaW5cIl0ge1xyXG4gICAgbGVmdDowO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgJltkYXRhLXNjcm9sbD1cIm91dFwiXSB7XHJcbiAgICBsZWZ0OiRwb3NpdGlvbjtcclxuICAgIC8vIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgLy8gbGVmdDo0MDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTB7XHJcbiAgJGxlZnQ6MjAwcHg7XHJcbiAgLnNjcm9sbG91dDpudGgtY2hpbGQoMm4rI3skaX0pIHtcclxuICAgIEBpZiAkaSAlMiA9PSAwIHsgXHJcbiAgICAgIEBpbmNsdWRlIHNjcm9sbG91dCgkbGVmdCk7XHJcbiAgICB9QGVsc2V7XHJcbiAgICAgIEBpbmNsdWRlIHNjcm9sbG91dCgtJGxlZnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2Nyb2xsb3V0X19mYWRle1xyXG4gICZbZGF0YS1zY3JvbGxdIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycztcclxuICB9XHJcbiAgJltkYXRhLXNjcm9sbD1cImluXCJdIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gICZbZGF0YS1zY3JvbGw9XCJvdXRcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnZpc2libGV7XHJcbiAgbWFyZ2luOjRweDtcclxuICBjb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLy8gdW5kZXJsaW5nIFxyXG5cclxuLy9VbmRlcmxpbmVcclxuJHVuZC1hbmktdHh0LWNvbG9yOiM3ZDJhZTg7XHJcbiR1bmQtYW5pLWh2ci1jb2xvcjojN2QyYWU4O1xyXG4kdW5kLWFuaS11bmQtY29sb3I6IzQxNDE0MTtcclxuJHVuZC1hbmktdW5kLWhlaWdodDo0cHg7XHJcbiR1bmQtYW5pLWRlbGF5LXRpbWU6MHM7XHJcbiR1bmQtYW5pLXJlYWwtdGltZToycztcclxuI2hlYWRpbmdGZWF0dXJle1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBjb2xvcjogJHVuZC1hbmktdHh0LWNvbG9yO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLy8gI2hlYWRpbmdGZWF0dXJlOmhvdmVyIHtcclxuLy8gICBjb2xvcjogJHVuZC1hbmktaHZyLWNvbG9yO1xyXG4vLyB9XHJcbiNoZWFkaW5nRmVhdHVyZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICR1bmQtYW5pLXVuZC1oZWlnaHQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokdW5kLWFuaS11bmQtY29sb3I7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG5cclxufVxyXG4uc2Nyb2xsb3V0W2RhdGEtc2Nyb2xsPVwiaW5cIl0gI2hlYWRpbmdGZWF0dXJlOjpiZWZvcmV7XHJcbiAgYW5pbWF0aW9uOnVuZGVybGluZS1hbmkgJHVuZC1hbmktcmVhbC10aW1lICR1bmQtYW5pLWRlbGF5LXRpbWUgZm9yd2FyZHM7XHJcbn1cclxuLy8gI2hlYWRpbmdGZWF0dXJlOmhvdmVyOjpiZWZvcmUge1xyXG4vLyAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbi8vIH1cclxuQGtleWZyYW1lcyB1bmRlcmxpbmUtYW5pe1xyXG4gIDAle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIDEwMCV7XHJcbiAgICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbn1cclxuLy8gNTAle1xyXG4vLyAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbi8vIH1cclxuXHJcbi5ib2R5LWNvbnRlbnQge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _post_data_service__WEBPACK_IMPORTED_MODULE_1__["PostDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "pytD":
/*!***************************************************!*\
  !*** ./src/app/services/slider/slider.service.ts ***!
  \***************************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SliderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getSliderContent() {
    }
    loadData(route, startFrom, limit) {
        const url = `http://34.67.33.183/home/${route}/${startFrom}/${limit}`;
        return this.httpClient.get(url);
    }
}
SliderService.ɵfac = function SliderService_Factory(t) { return new (t || SliderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SliderService, factory: SliderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _routes_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/category/category.component */ "XrDg");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/home/home.component */ "SENy");
/* harmony import */ var _routes_post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/post/post.component */ "p3EL");







const routes = [
    {
        path: 'home',
        component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'post/:id',
        component: _routes_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"]
    },
    {
        path: 'category',
        component: _routes_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]
    },
    {
        path: '',
        redirectTo: 'category', pathMatch: 'prefix'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xZj7":
/*!**************************************************!*\
  !*** ./src/app/routes/post/post-data.service.ts ***!
  \**************************************************/
/*! exports provided: PostDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDataService", function() { return PostDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostDataService {
    constructor(http) {
        this.http = http;
    }
    getPostData(id) {
        return this.http.get(`http://34.67.33.183/post/${id}`);
    }
}
PostDataService.ɵfac = function PostDataService_Factory(t) { return new (t || PostDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostDataService, factory: PostDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map