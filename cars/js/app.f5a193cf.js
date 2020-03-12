(function(e){function a(a){for(var r,o,n=a[0],c=a[1],d=a[2],l=0,p=[];l<n.length;l++)o=n[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(a);while(p.length)p.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],r=!0,n=1;n<t.length;n++){var c=t[n];0!==i[c]&&(r=!1)}r&&(s.splice(a--,1),e=o(o.s=t[0]))}return e}var r={},i={app:0},s=[];function o(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)o.d(t,r,function(a){return e[a]}.bind(null,r));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var d=0;d<n.length;d++)a(n[d]);var m=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"026f":function(e,a,t){},"034f":function(e,a,t){"use strict";var r=t("85ec"),i=t.n(r);i.a},"0b3b":function(e,a,t){"use strict";var r=t("0e51"),i=t.n(r);i.a},"0e51":function(e,a,t){},"2f59":function(e,a,t){"use strict";var r=t("a044"),i=t.n(r);i.a},"56d7":function(e,a,t){"use strict";t.r(a);t("caad"),t("c975"),t("a434"),t("2532"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"header"}},[t("div",{staticClass:"section",attrs:{id:"home-section"}},[t("router-link",{staticClass:"button home-button",attrs:{to:"/",tag:"button"}},[t("i",{staticClass:"fas fa-home"}),e._v(" Home ")])],1),e._m(0),t("div",{staticClass:"section",attrs:{id:"side-section"}},[t("router-link",{staticClass:"button",attrs:{to:"/browse",tag:"button"}},[t("i",{staticClass:"fas fa-search"}),e._v(" Browse Brands ")]),t("router-link",{staticClass:"button compare-button",attrs:{to:"/compare",tag:"button"}},[t("i",{staticClass:"fas fa-columns"}),e._v(" Compare "+e._s(e.itemsInCompare)+" ")])],1)]),t("router-view"),e._m(1)],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"section",attrs:{id:"brand-section"}},[t("div",{attrs:{id:"header-border"}},[t("i",{staticClass:"fas fa-car fa-6x"}),t("div",{attrs:{id:"title"}},[e._v("CARS")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"footer"},[t("div",{staticClass:"github-section"},[t("a",{staticClass:"github-link",attrs:{href:"https://github.com/SpencerTheFencer/CS260/tree/master/cars",target:"_blank"}},[e._v("Github repository")])])])}],o={computed:{itemsInCompare:function(){var e=this.$root.$data.compare.length;return 0===e?"":"("+e+")"}}},n=o,c=(t("034f"),t("2877")),d=Object(c["a"])(n,i,s,!1,null,null,null),m=d.exports,l=t("8c4f"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("CarList",{attrs:{cars:e.cars}})],1)},u=[],g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"cars"},e._l(e.cars,(function(a){return t("div",{key:a.id,staticClass:"car"},[t("img",{staticClass:"car-image",attrs:{src:a.image}}),t("h2",{staticClass:"car-title"},[e._v(e._s(a.year)+" "+e._s(a.make)+" "+e._s(a.model))]),t("div",{staticClass:"lower-section"},[t("h3",{staticClass:"price"},[e._v(e._s(a.price))]),t("button",{staticClass:"add-to-compare-button button",class:e.inCompare(a),on:{click:function(t){return e.addCarToCompare(a)}}},[e._v("Add to Compare")])])])})),0)])},v=[],f={name:"CarList",props:{cars:Array},methods:{addCarToCompare:function(e){this.$root.addToCompare(e)},inCompare:function(e){return this.$root.$data.compare.includes(e)?"in-compare":""}},computed:{}},h=f,C=(t("0b3b"),Object(c["a"])(h,g,v,!1,null,"6b9d7735",null)),y=C.exports,b={name:"Home",components:{CarList:y},computed:{cars:function(){return this.$root.$data.cars}}},_=b,k=Object(c["a"])(_,p,u,!1,null,null,null),$=k.exports,j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"browse"},[t("h1",{staticClass:"title"},[e._v("Search Cars by Brand")]),t("div",{staticClass:"brand-buttons"},[t("div",{staticClass:"button brand-button",class:e.isSelected("Chevrolet"),on:{click:function(a){return e.changeSelectedBrand("Chevrolet")}}},[e._v("Chevrolet")]),t("div",{staticClass:"button brand-button",class:e.isSelected("Ford"),on:{click:function(a){return e.changeSelectedBrand("Ford")}}},[e._v("Ford")]),t("div",{staticClass:"button brand-button",class:e.isSelected("Honda"),on:{click:function(a){return e.changeSelectedBrand("Honda")}}},[e._v("Honda")]),t("div",{staticClass:"button brand-button",class:e.isSelected("Hyundai"),on:{click:function(a){return e.changeSelectedBrand("Hyundai")}}},[e._v("Hyundai")]),t("div",{staticClass:"button brand-button",class:e.isSelected("Mazda"),on:{click:function(a){return e.changeSelectedBrand("Mazda")}}},[e._v("Mazda")]),t("div",{staticClass:"button brand-button",class:e.isSelected("Toyota"),on:{click:function(a){return e.changeSelectedBrand("Toyota")}}},[e._v("Toyota")])]),t("CarList",{attrs:{cars:e.selectedCars}})],1)},D=[],W=(t("4de4"),{name:"Browse",components:{CarList:y},data:function(){return{selectedBrand:""}},methods:{changeSelectedBrand:function(e){this.selectedBrand=e},isSelected:function(e){return e===this.selectedBrand?"selected":""}},computed:{selectedCars:function(){var e=this;return this.$root.$data.cars.filter((function(a){return a.make===e.selectedBrand}))}}}),F=W,S=(t("2f59"),Object(c["a"])(F,j,D,!1,null,null,null)),w=S.exports,H=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"compare"},[t("h1",{staticClass:"title"},[e._v("Car Details/Comparison")]),e.comparedCars.length>0?t("div",{staticClass:"cars"},[t("div",{staticClass:"comparison-labels"}),e._l(e.comparedCars,(function(a){return t("div",{key:a.id,staticClass:"car"},[t("img",{staticClass:"car-image",attrs:{src:a.image}}),t("h2",{staticClass:"car-title info"},[e._v(e._s(a.year)+" "+e._s(a.make)+" "+e._s(a.model))]),t("h3",{staticClass:"price info"},[e._v(e._s(a.price))]),t("h3",{staticClass:"mpg info"},[e._v(e._s(a.mpg))]),t("h3",{staticClass:"seats info"},[e._v(e._s(a.seats))]),t("h3",{staticClass:"drivetrain info"},[e._v(e._s(a.drivetrain))]),t("button",{staticClass:"remove-from-compare-button button",on:{click:function(t){return e.removeFromCompare(a)}}},[e._v("Remove from Compare")])])}))],2):t("div",[t("h2",[e._v("No vehicles have been selected.")]),t("h4",{staticClass:"suggestion"},[e._v("To see details about individual vehicles or to compare multiple vehicles, select the 'Add to Compare' button for the desired vehicle while browsing.")])])])},x=[],A={name:"Compare",methods:{removeFromCompare:function(e){this.$root.removeFromCompare(e)}},computed:{comparedCars:function(){return this.$root.$data.compare}}},O=A,T=(t("f817"),Object(c["a"])(O,H,x,!1,null,"c97ef354",null)),B=T.exports;r["a"].use(l["a"]);var E=[{path:"/",name:"Home",component:$},{path:"/browse",name:"Browse",component:w},{path:"/compare",name:"Compare",component:B}],M=new l["a"]({mode:"history",base:"/",routes:E}),z=M,P=[{id:1,year:2019,make:"Toyota",model:"Corolla",price:"$18,700",mpg:32,seats:5,drivetrain:"FWD",image:"images/toyota/corolla.jpg"},{id:2,year:2017,make:"Toyota",model:"Camry",price:"$15,700",mpg:27,seats:5,drivetrain:"FWD",image:"images/toyota/camry.jpg"},{id:3,year:2019,make:"Toyota",model:"Rav4",price:"$25,650",mpg:28,seats:5,drivetrain:"AWD",image:"images/toyota/rav4.jpg"},{id:4,year:2018,make:"Toyota",model:"C-HR",price:"$18,750",mpg:29,seats:5,drivetrain:"FWD",image:"images/toyota/c-hr.jpg"},{id:5,year:2017,make:"Honda",model:"CR-V",price:"$20,200",mpg:29,seats:5,drivetrain:"AWD",image:"images/honda/cr-v.jpg"},{id:6,year:2018,make:"Honda",model:"Civic",price:"$17,100",mpg:28,seats:5,drivetrain:"FWD",image:"images/honda/civic.jpg"},{id:7,year:2018,make:"Honda",model:"Accord",price:"$20,100",mpg:30,seats:5,drivetrain:"FWD",image:"images/honda/accord.jpg"},{id:8,year:2019,make:"Honda",model:"Pilot",price:"$31,500",mpg:25,seats:7,drivetrain:"AWD",image:"images/honda/pilot.jpg"},{id:9,year:2018,make:"Honda",model:"Odyssey",price:"$24,800",mpg:26,seats:7,drivetrain:"AWD",image:"images/honda/odyssey.jpg"},{id:10,year:2019,make:"Hyundai",model:"Elantra",price:"$18,000",mpg:28,seats:5,drivetrain:"FWD",image:"images/hyundai/elantra.jpg"},{id:11,year:2018,make:"Hyundai",model:"Kona",price:"$16,500",mpg:28,seats:5,drivetrain:"FWD",image:"images/hyundai/kona.jpg"},{id:12,year:2018,make:"Hyundai",model:"Tucson",price:"$17,050",mpg:26,seats:5,drivetrain:"AWD",image:"images/hyundai/tucson.jpg"},{id:13,year:2020,make:"Hyundai",model:"Palisade",price:"$31,800",mpg:21,seats:7,drivetrain:"AWD",image:"images/hyundai/palisade.jpg"},{id:14,year:2020,make:"Hyundai",model:"SantaFe",price:"$26,100",mpg:24,seats:5,drivetrain:"AWD",image:"images/hyundai/santafe.jpg"},{id:15,year:2019,make:"Ford",model:"Edge",price:"$29,900",mpg:24,seats:5,drivetrain:"AWD",image:"images/ford/edge.jpg"},{id:16,year:2020,make:"Ford",model:"Explorer",price:"$36,600",mpg:23,seats:5,drivetrain:"AWD",image:"images/ford/explorer.jpg"},{id:17,year:2019,make:"Ford",model:"F-250",price:"$31,000",mpg:15,seats:5,drivetrain:"4WD",image:"images/ford/f250.jpg"},{id:18,year:2019,make:"Ford",model:"Expedition",price:"$52,000",mpg:20,seats:7,drivetrain:"AWD",image:"images/ford/expedition.jpg"},{id:19,year:2018,make:"Ford",model:"Mustang",price:"$21,700",mpg:20,seats:5,drivetrain:"FWD",image:"images/ford/mustang.jpg"},{id:20,year:2018,make:"Ford",model:"Escape",price:"$17,100",mpg:27,seats:5,drivetrain:"AWD",image:"images/ford/escape.jpg"},{id:21,year:2015,make:"Chevrolet",model:"Tahoe",price:"$28,500",mpg:18,seats:7,drivetrain:"AWD",image:"images/chevrolet/tahoe.jpg"},{id:22,year:2019,make:"Chevrolet",model:"Camaro",price:"$25,000",mpg:20,seats:5,drivetrain:"FWD",image:"images/chevrolet/camaro.jpg"},{id:23,year:2014,make:"Chevrolet",model:"Silverado",price:"$14,200",mpg:18,seats:5,drivetrain:"4WD",image:"images/chevrolet/silverado.jpg"},{id:24,year:2018,make:"Chevrolet",model:"Corvette",price:"$41,300",mpg:20,seats:2,drivetrain:"RWD",image:"images/chevrolet/corvette.jpg"},{id:25,year:2017,make:"Mazda",model:"CX-5",price:"$19,400",mpg:27,seats:5,drivetrain:"AWD",image:"images/mazda/cx-5.jpg"},{id:26,year:2017,make:"Mazda",model:"CX-9",price:"$22,700",mpg:25,seats:7,drivetrain:"AWD",image:"images/mazda/cx-9.jpg"},{id:27,year:2019,make:"Mazda",model:"3",price:"$21,500",mpg:30,seats:5,drivetrain:"FWD",image:"images/mazda/3.jpg"}],R=P;r["a"].config.productionTip=!1;var L={cars:R,compare:[]},I={addToCompare:function(e){this.compare.includes(e)||this.compare.push(e)},removeFromCompare:function(e){this.compare.splice(this.compare.indexOf(e),1)}};new r["a"]({router:z,data:L,methods:I,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,a,t){},a044:function(e,a,t){},f817:function(e,a,t){"use strict";var r=t("026f"),i=t.n(r);i.a}});
//# sourceMappingURL=app.f5a193cf.js.map