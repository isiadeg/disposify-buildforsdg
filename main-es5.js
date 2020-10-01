function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/collector/collector.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collector/collector.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCollectorCollectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"menubutton\" onclick=\"expanddropdown();\">\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n\n      </div>\n      <div class=\"dropdownwrapper\">\n        <div class=\"logoandclose\">\n\n          <div class=\"logo\">\n          <div class=\"logoandword\">\n              <img src=\"/assets/card.jpg\">\n\n          <div class=\"logoword\"> Disposify</div>\n          </div>\n          </div>\n          <div class=\"close\">\n            <i class=\"fas fa-times\" onclick=\"closedropdown()\"></i>\n          </div>\n        </div>\n        <div class=\"dropdownsection\">\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('zero');\">\n                <div class=\"sectionname\">\n                  Registration\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">Register Dash...\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'businessreg']\">\n                        Register Your Business\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'packagereg']\">\n                        Register Your Service Packages\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'collectorinformation']\">\n                        Dashboard\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'dailytransaction', uid]\">\n\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'transactions', uid]\">\n\n                        </a>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('one');\">\n                <div class=\"sectionname\">\n                  Users\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\" onclick=\"signout();\">\n                      <a style=\"\" [routerLink] =\"['/login']\">\n                        Log Out\n                        </a>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\">\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"adminwrapper\" id=\"adminwrapper\">\n        <router-outlet></router-outlet>\n          </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/collectorinformation/collectorinformation.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collectorinformation/collectorinformation.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCollectorinformationCollectorinformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"detailsblock\" style=\"width: max-content;\">\n  <div class=\"infoheader\">\n    Status\n</div>\n<div class=\"infodetails\">\n  Collector\n</div>\n</div>\n\n<div class=\"detailsblock\" style=\"width: max-content;\">\n  <div class=\"infoheader\">\n    Subscribers\n</div>\n<div class=\"infodetails\">\n\n  <table class=\"userstable\">\n    <tr>\n      <th>Approve</th>\n      <th>\n        Avatar\n      </th>\n      <th>\n        Full Name\n      </th>\n      <th>\n        Address\n      </th>\n      <th>\n        Phone Number\n        </th>\n        <th>\n          Email\n        </th>\n\n      <th>\n        Location\n      </th>\n      <th>\n        I.D.Card\n      </th>\n\n    </tr>\n  <tr *ngFor=\"let data of dataarray\">\n    <td><input type=\"button\" value=\"Approve Reg\" (click)=\"approve(data);\"></td>\n    <td><img [src]=\"data.passporturl\"></td>\n    <td>{{data.firstname}}</td>\n    <td>{{data.middlename}}</td>\n    <td>{{data.lastname}}</td>\n    <td>{{data.email}}</td>\n    <td>{{data.location}}</td>\n\n    <td><img [src]=\"data.idcardurl\"></td>\n  </tr>\n\n  </table>\n\n\n\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/facebookuser/facebookuser.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facebookuser/facebookuser.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacebookuserFacebookuserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"profilewrapper\">\n\n\n\n\n\n          <div class=\"loginheader\">\n            Sorry, We just need you to register more profile info !!!\n            </div>\n\n              <form novalidate [formGroup]=\"registerform\" >\n                <div class=\"bodywrapper\">\n            <div class=\"picture\">\n            <img src=\"{{userphotoURL}}\">\n          </div>\n                  <div class=\"detailsblock\">\n                                        <label for=\"customerornnot\" class=\"label\">\n                                          You are Registering as\n                                        </label>\n                                        <select class=\"details\" id=\"customerornnot\"\n                                        formControlName=\"customerornot\"\n                                        [ngClass]=\"{'invalid': errormessage.customerornot}\"\n                                        name=\"customerornot\">\n                                      <option value=\"customer\"> Customer </option>\n                                        <option value=\"collector\"> Collector </option>\n                                      </select>\n                                        <span class=\"errormessage\">{{errormessage.customerornot}}</span>\n                                        </div>\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"fullname\">Full Name</label>\n                  <input class=\"details\" type =\"text\" id=\"fullname\"  formControlName=\"fullname\"\n                  [ngClass]=\"{'invalid': errormessage.fullname}\"\n                  placeholder=\"Full Name\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.fullname}}</span>\n                </div>\n\n\n                <div class=\"detailsblock\">\n                <label for=\"address\" class=\"label\">\n                Address\n                </label>\n                <input type=\"text\" class=\"details\" id=\"address\" name=\"address\"\n                formControlName =\"address\" [ngClass]=\"{'invalid': errormessage.address}\">\n\n                <span class =\"errormessage\">{{errormessage.address}}</span>\n                </div>\n\n                <div class=\"detailsblock\">\n                                      <label for=\"companyornot\" class=\"label\">\n                                        You are Registering as\n                                      </label>\n                                      <select class=\"details\" id=\"companyornot\"\n                                      formControlName=\"companyornot\"\n                                      [ngClass]=\"{'invalid': errormessage.companyornot}\"\n                                      name=\"companyornot\">\n                                    <option value=\"company\"> A Company </option>\n                                      <option value=\"company\"> An Individual </option>\n                                    </select>\n                                      <span class=\"errormessage\">{{errormessage.companyornot}}</span>\n                                      </div>\n\n                                      <div class=\"detailsblock\">\n                                      <label for=\"phonenumber\" class=\"label\">\n                                      Phone Number\n                                      </label>\n                                      <input type=\"text\" class=\"details\" id=\"phonenumber\" name=\"phonenumber\"\n                                      formControlName =\"phonenumber\" [ngClass]=\"{'invalid': errormessage.phonenumber}\">\n\n                                      <span class =\"errormessage\">{{errormessage.phonenumber}}</span>\n                                      </div>\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"email\">Email</label>\n                  <input class = \"details\"type =\"email\" id=\"email\" formControlName=\"email\"\n                  [ngClass]=\"{'invalid': errormessage.email}\"\n                  placeholder=\"email\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.email}}</span>\n                </div>\n\n\n            <div class=\"detailsblock\">\n\n            <label class=\"label\"  for=\"location\">Location</label>\n              <select id=\"location\" formControlName=\"location\"\n              [ngClass]=\"{'invalid': errormessage.location}\">\n\n              <option *ngFor=\"let location of locations\" value=\"{{location}}\">{{location}}</option>\n\n            </select>\n              <span class=\"errormessage\">{{errormessage.location}}</span>\n            </div>\n\n\n          <!-- <div class=\"uploadidcard\" id=\"idcardupload\">\n            <div class=\"detailsblock\">\n              <label class=\"label\"  for=\"uploadidcard\">Upload an I.D. card</label>\n              <input class = \"details\"type =\"file\" id=\"pictureidcard\" name=\"idcard\" formenctype=\"multipart/form-data\" >\n              <div class=\"uploadpicture\">\n                <button onclick=\"uploading('idcard');\">upload I.D.Card</button>\n                </div>\n              <div class=\"loading\" id=\"loadingidcard\">\n                <div class=\"filling\" id=\"fillingidcard\">\n                </div>\n              </div>\n              <div style=\"display:none;\" id=\"uploadidcardmessage\">\n                </div>\n                <div  id=\"uploadidcarderrormessage\">\n                  </div>\n            </div>\n\n          </div> -->\n\n                <div class=\"submitdiv\">\n                  <input type =\"submit\" class=\"button\" (click)=\"save();\" id=\"submit\" [disabled]=\"!registerform.valid\" value=\"Submit\" id=\"submit\">\n\n                </div>\n\n\n\n\n\n\n              </div>\n            </form>\n\n\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div >\n\n<div class=\"loading\" *ngIf=\"loading\">\n  <div class=\"rotate\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n      <div class=\"nav\">\n        <ul>\n          <li>\n            <a [routerLink]=\"['/index']\" routerLinkActive =\"active\">\n  Register</a>\n\n\n          </li>\n          <li>\n            <a [routerLink]=\"['/login']\" routerLinkActive =\"active\">\n  Login</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"profilewrapper\">\n\n\n\n\n\n          <div class=\"loginheader\">\n            Register\n            </div>\n\n              <form novalidate [formGroup]=\"registerform\" >\n                <div class=\"bodywrapper\">\n\n                  <div class=\"detailsblock\">\n                                        <label for=\"customerornnot\" class=\"label\">\n                                          You are Registering as\n                                        </label>\n                                        <select class=\"details\" id=\"customerornnot\"\n                                        formControlName=\"customerornot\"\n                                        [ngClass]=\"{'invalid': errormessage.customerornot}\"\n                                        name=\"customerornot\">\n                                      <option value=\"customer\"> Customer </option>\n                                        <option value=\"collector\"> Collector </option>\n                                      </select>\n                                        <span class=\"errormessage\">{{errormessage.customerornot}}</span>\n                                        </div>\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"fullname\">Full Name</label>\n                  <input class=\"details\" type =\"text\" id=\"fullname\"  formControlName=\"fullname\"\n                  [ngClass]=\"{'invalid': errormessage.fullname}\"\n                  placeholder=\"Full Name\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.fullname}}</span>\n                </div>\n\n\n                <div class=\"detailsblock\">\n                <label for=\"address\" class=\"label\">\n                Address\n                </label>\n                <input type=\"text\" class=\"details\" id=\"address\" name=\"address\"\n                formControlName =\"address\" [ngClass]=\"{'invalid': errormessage.address}\">\n\n                <span class =\"errormessage\">{{errormessage.address}}</span>\n                </div>\n\n                <div class=\"detailsblock\">\n                                      <label for=\"companyornot\" class=\"label\">\n                                        You are Registering as\n                                      </label>\n                                      <select class=\"details\" id=\"companyornot\"\n                                      formControlName=\"companyornot\"\n                                      [ngClass]=\"{'invalid': errormessage.companyornot}\"\n                                      name=\"companyornot\">\n                                    <option value=\"company\"> A Company </option>\n                                      <option value=\"company\"> An Individual </option>\n                                    </select>\n                                      <span class=\"errormessage\">{{errormessage.companyornot}}</span>\n                                      </div>\n\n                                      <div class=\"detailsblock\">\n                                      <label for=\"phonenumber\" class=\"label\">\n                                      Phone Number\n                                      </label>\n                                      <input type=\"text\" class=\"details\" id=\"phonenumber\" name=\"phonenumber\"\n                                      formControlName =\"phonenumber\" [ngClass]=\"{'invalid': errormessage.phonenumber}\">\n\n                                      <span class =\"errormessage\">{{errormessage.phonenumber}}</span>\n                                      </div>\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"email\">Email</label>\n                  <input class = \"details\"type =\"email\" id=\"email\" formControlName=\"email\"\n                  [ngClass]=\"{'invalid': errormessage.email}\"\n                  placeholder=\"email\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.email}}</span>\n                </div>\n\n            <div class=\"passwordblock\" formGroupName=\"passwordblock\"  class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label class=\"label\"  for=\"password\">Password</label>\n                <input class = \"details\"type =\"password\" id=\"password\" formControlName=\"password\"\n                [ngClass]=\"{'invalid': errormessage.password || errormessage.passwordblock}\"\n                placeholder=\"Password\"\n                >\n                <span class=\"errormessage\">{{errormessage.password}}</span>\n              </div>\n\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"confirm_password\">Confirm Password</label>\n                  <input class = \"details\"type =\"password\" id=\"confirm_password\" formControlName=\"confirmpassword\"\n                  [ngClass]=\"{'invalid': errormessage.passwordblock}\"\n                  placeholder=\"Confirm Password\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.passwordblock}}</span>\n                </div>\n\n\n            </div>\n\n            <div class=\"detailsblock\">\n\n            <label class=\"label\"  for=\"location\">Location</label>\n              <select id=\"location\" formControlName=\"location\"\n              [ngClass]=\"{'invalid': errormessage.location}\">\n\n              <option *ngFor=\"let location of locations\" value=\"{{location}}\">{{location}}</option>\n\n            </select>\n              <span class=\"errormessage\">{{errormessage.location}}</span>\n            </div>\n\n            <div class=\"uploadpicture\" id=\"passportupload\" class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label for=\"pictureupload\">Upload a passport photograph</label>\n\n                <input class = \"details noborder\"type =\"file\" id=\"picturepassport\" name=\"avatar\" formenctype=\"multipart/form-data\" >\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('passport');\" class=\"button\">upload picture</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingpassport\">\n                  <div class=\"filling\" id=\"fillingpassport\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadpassportmessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadpassporterrormessage\">\n                    </div>\n                </div>\n\n\n            </div>\n          <!-- <div class=\"uploadidcard\" id=\"idcardupload\">\n            <div class=\"detailsblock\">\n              <label class=\"label\"  for=\"uploadidcard\">Upload an I.D. card</label>\n              <input class = \"details\"type =\"file\" id=\"pictureidcard\" name=\"idcard\" formenctype=\"multipart/form-data\" >\n              <div class=\"uploadpicture\">\n                <button onclick=\"uploading('idcard');\">upload I.D.Card</button>\n                </div>\n              <div class=\"loading\" id=\"loadingidcard\">\n                <div class=\"filling\" id=\"fillingidcard\">\n                </div>\n              </div>\n              <div style=\"display:none;\" id=\"uploadidcardmessage\">\n                </div>\n                <div  id=\"uploadidcarderrormessage\">\n                  </div>\n            </div>\n\n          </div> -->\n\n                <div class=\"submitdiv\">\n                  <input type =\"submit\" class=\"button\" (click)=\"save();\" id=\"submit\" [disabled]=\"!registerform.valid\" value=\"Submit\" id=\"submit\">\n\n                </div>\n\n\n\n\n\n\n              </div>\n            </form>\n\n\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"boss nodisplay\" >\n  Logging You in. It might take some seconds. Please wait.....\n  </div>\n      <div class=\"nav\">\n        <ul>\n          <li>\n            <a [routerLink]=\"['/index']\" routerLinkActive =\"active\">\n  Register</a>\n\n\n          </li>\n          <li>\n            <a [routerLink]=\"['/login']\" routerLinkActive =\"active\">\n  Login</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"small\">\n      <div class=\"disposify\">Disposify</div>\n      <div class=\"seamless\">\n        The Seamless Waste Disposing Management Company\n      </div>\n      <div class=\"wrapper\">\n       <div class=\"loginheader\">\n         <div class=\"loginup\">\n           Login\n           </div>\n         </div>\n         <div class=\"loginbody\">\n           <form novalidate [formGroup]=\"loginform\">\n           <div class=\"inputdiv\">\n      <label for=\"email\" class=\"inputlabel\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n      placeholder=\"Email\"\n      [ngClass] = \"{'invalid': errormessage.email}\"\n      formControlName =\"email\">\n      <span class=\"errormessage\">{{errormessage.email}}</span>\n      </div>\n\n      <div class=\"inputdiv\">\n <label for=\"password\" class=\"inputlabel\">Password</label>\n <input type=\"password\" id=\"password\" class=\"input\"\n placeholder=\"Password\"\n [ngClass] =\"{'invalid': errormessage.password}\"\n formControlName =\"password\">\n <span class=\"errormessage\">{{errormessage.password}}</span>\n </div>\n <div class=\"submitdiv\">\n  <input type=\"submit\" [disabled] = \"!loginform.valid\" class=\"button\" value=\"Login\"\n  (click) = \"login();\">\n</div>\n </form>\n <div class=\"loginerror errormessage\" *ngIf=\"loginerror\">{{loginerror}}</div>\n <div class=\"facebooklogin\">\n   <button class=\"facebookbuttton\" onclick=\"testlogin();\" (click) = \"testlogin();\" >\n     <i class=\"fab fa-facebook-f\" style=\"color:blue;\"></i>\n     Login with Facebook\n\n   </button>\n   <div id=\"credential\">\n     </div>\n   </div>\n          </div>\n\n      </div>\n\n      <div class = \"collecting\">\n        Connecting waste disposers to collectors...\n      </div>\n      </div>\n      <div class=\"big\">\n\n\n        </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/packagereg/packagereg.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/packagereg/packagereg.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPackageregPackageregComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"profilewrapper\">\n\n\n\n\n\n          <div class=\"loginheader\">\n            Register Your Business Service Packages\n            </div>\n\n              <form novalidate [formGroup]=\"registerform\" >\n                <div class=\"bodywrapper\">\n\n\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"packagename\">Package Name</label>\n                  <input class=\"details\" type =\"text\" id=\"packagename\"  formControlName=\"packagename\"\n                  [ngClass]=\"{'invalid': errormessage.packagename}\"\n                  placeholder=\"Package Name\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.packagename}}</span>\n                </div>\n\n                <div class=\"detailsblock\">\n                   <label for=\"packagedescription\">Package Description</label>\n                   <textarea name=\"packagedescription\" formControlName=\"packagedescription\"\n                   [ngClass]=\"{'invalid': errormessage.packagedescription}\"\n                   placeholder=\"Package Description\"></textarea>\n                   <span class=\"errormessage\">{{errormessage.packagedescription}}</span>\n                  </div>\n\n\n\n                <div class=\"detailsblock\">\n                <label for=\"packageprice\" class=\"label\">\n                Package Price (Naira)\n                </label>\n                <input type=\"number\" class=\"details\" id=\"packageprice\" name=\"packageprice\"\n                formControlName =\"packageprice\" [ngClass]=\"{'invalid': errormessage.packageprice}\">\n\n                <span class =\"errormessage\">{{errormessage.packageprice}}</span>\n                </div>\n\n                <div id=\"featuresandtags\">\n                <div id=\"addfeatures\" (click)= addfeatureses(); class=\"plusbutton\"> + </div>\n                <div class=\"detailsblock\" formArrayName =\"featureses\"\n                *ngFor=\"let feature of featureses.controls; let i = index\"\n                >\n                  <div class=\"detailsblock\" [formGroupName] = \"i\">\n                    <div class=\"detailsblock\">\n                      <label class=\"label\"  for=\"featurrr\">Feature and Tags</label>\n\n                      <input class=\"details\" type =\"text\" id=\"featurrr\"  formControlName=\"features\"\n                      [ngClass]=\"{'invalid': errormessage.features}\"\n                      placeholder=\"Features and Tags\"\n                      >\n                    </div>\n                  </div>\n                </div>\n                </div>\n\n\n            <div class=\"uploadpicture\" id=\"passportupload\" class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label for=\"pictureserviceimages\">Upload Images for Your Service</label>\n\n                <input class = \"details noborder\"type =\"file\" id=\"pictureserviceimages\" name=\"avatar\" formenctype=\"multipart/form-data\"  multiple>\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('serviceimages');\" class=\"button\">upload image</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingserviceimages\">\n                  <div class=\"filling\" id=\"fillingserviceimages\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadserviceimagesmessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadserviceimageserrormessage\">\n                    </div>\n                </div>\n\n\n            </div>\n\n\n                <div class=\"submitdiv\">\n                  <input type =\"submit\" class=\"button\" [title]=\"!registerform.valid?'Fill all fields':''\" (click)=\"save();\" id=\"submit\" [disabled]=\"!registerform.valid\" value=\"Submit\" id=\"submit\">\n\n                </div>\n\n\n\n\n\n\n              </div>\n            </form>\n\n\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pagenotfound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovals/registrationapprovals.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovals/registrationapprovals.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationapprovalsRegistrationapprovalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"userstable\">\n  <tr>\n    <th>Approve</th>\n    <th>\n      Avatar\n    </th>\n    <th>\n      First Name\n    </th>\n    <th>\n      Middle Name\n    </th>\n    <th>\n      Last Name\n      </th>\n      <th>\n        Email\n      </th>\n\n    <th>\n      Location\n    </th>\n    <th>\n      I.D.Card\n    </th>\n\n  </tr>\n<tr *ngFor=\"let data of dataarray\">\n  <td><input type=\"button\" value=\"Approve Reg\" (click)=\"approve(data);\"></td>\n  <td><img [src]=\"data.passporturl\"></td>\n  <td>{{data.firstname}}</td>\n  <td>{{data.middlename}}</td>\n  <td>{{data.lastname}}</td>\n  <td>{{data.email}}</td>\n  <td>{{data.location}}</td>\n\n  <td><img [src]=\"data.idcardurl\"></td>\n</tr>\n\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovalsid/registrationapprovalsid.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovalsid/registrationapprovalsid.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationapprovalsidRegistrationapprovalsidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>registrationapprovalsid works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/serviceregister/serviceregister.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/serviceregister/serviceregister.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServiceregisterServiceregisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"profilewrapper\">\n\n\n\n\n\n          <div class=\"loginheader\">\n            Register Your Business\n            </div>\n\n              <form novalidate [formGroup]=\"registerform\" >\n                <div class=\"bodywrapper\">\n\n\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"companyname\">Company Name</label>\n                  <input class=\"details\" type =\"text\" id=\"companyname\"  formControlName=\"companyname\"\n                  [ngClass]=\"{'invalid': errormessage.companyname}\"\n                  placeholder=\"Company Name\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.companyname}}</span>\n                </div>\n\n\n                <div class=\"detailsblock\">\n                <label for=\"companyaddress\" class=\"label\">\n                Company Address\n                </label>\n                <input type=\"text\" class=\"details\" id=\"companyaddress\" name=\"address\"\n                formControlName =\"companyaddress\" [ngClass]=\"{'invalid': errormessage.companyaddress}\">\n\n                <span class =\"errormessage\">{{errormessage.companyaddress}}</span>\n                </div>\n\n\n\n                                      <div class=\"detailsblock\">\n                                      <label for=\"phonenumber\" class=\"label\">\n                                      Business Phone Number\n                                      </label>\n                                      <input type=\"text\" class=\"details\" id=\"phonenumber\" name=\"phonenumber\"\n                                      formControlName =\"phonenumber\" [ngClass]=\"{'invalid': errormessage.phonenumber}\">\n\n                                      <span class =\"errormessage\">{{errormessage.phonenumber}}</span>\n                                      </div>\n\n                <div class=\"detailsblock\">\n                  <label class=\"label\"  for=\"email\">Business Email</label>\n                  <input class = \"details\"type =\"email\" id=\"email\" formControlName=\"email\"\n                  [ngClass]=\"{'invalid': errormessage.email}\"\n                  placeholder=\"email\"\n                  >\n                  <span class=\"errormessage\">{{errormessage.email}}</span>\n                </div>\n\n                <div class=\"detailsblock\">\n                   <label for=\"wh_mon_fri_start\">Working Hours(Monday - Friday)</label>\n                   From  <input class=\"details\" type =\"time\" id=\"wh_mon_fri_start\" name=\"wh_mon_fri_start\"\n                   formControlName = \"wh_mon_fri_start\"\n                   > To  <input class=\"details\" type =\"time\" id=\"wh_mon_fri_end\" name=\"wh_mon_fri_end\"\n                   formControlName = \"wh_mon_fri_end\" >\n                   <span class=\"errormessage\" id=\"wh_mon_frierror\">{{errormessage.wh_mon_fri_start}}</span>\n                 </div>\n\n                 <div class=\"detailsblock\">\n                    <label for=\"wh_sat_start\">Working Hours(Saturday)</label>\n                    From  <input class=\"details\" type =\"time\" id=\"wh_mon_fri_start\" name=\"wh_sat_start\"\n                    formControlName = \"wh_sat_start\"\n                    > To  <input class=\"details\" type =\"time\" id=\"wh_mon_fri_end\" name=\"wh_mon_fri_end\"\n                    formControlName = \"wh_sat_end\" >\n                                  </div>\n\n                                  <div class=\"detailsblock\">\n                                     <label for=\"wh_sun_start\">Working Hours(Sunday)</label>\n                                     From  <input class=\"details\" type =\"time\" id=\"wh_sun_start\" name=\"wh_mon_fri_start\"\n                                     formControlName = \"wh_sun_start\"\n                                     > To  <input class=\"details\" type =\"time\" id=\"wh_sun_end\" name=\"wh_mon_fri_end\"\n                                     formControlName = \"wh_sun_end\" >\n                                                   </div>\n\n                                                   <div class=\"detailsblock\">\n                                                      <label for=\"servicedescription\">Service Description</label>\n                                                      <textarea name=\"name\" formControlName=\"servicedescription\"></textarea>\n                                                                    </div>\n\n\n\n\n\n            <div class=\"uploadpicture\" id=\"passportupload\" class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label for=\"picturecertificate\">Upload Your Business Certificate</label>\n\n                <input class = \"details noborder\"type =\"file\" id=\"picturecertificate\" name=\"avatar\" formenctype=\"multipart/form-data\" >\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('certificate');\" class=\"button\">upload certificate</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingcertificate\">\n                  <div class=\"filling\" id=\"fillingcertificate\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadcertificatemessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadcertificateerrormessage\">\n                    </div>\n                </div>\n\n\n            </div>\n\n            <div class=\"uploadpicture\" id=\"passportupload\" class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label for=\"picturepassport\">Upload Your Business Logo or Image </label>\n\n                <input class = \"details noborder\"type =\"file\" id=\"picturepassport\" name=\"avatar\" formenctype=\"multipart/form-data\" >\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('passport');\" class=\"button\">upload Logo</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingpassport\">\n                  <div class=\"filling\" id=\"fillingpassport\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadpassportmessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadpassporterrormessage\">\n                    </div>\n                </div>\n\n\n            </div>\n\n\n            <!-- <div class=\"uploadpicture\" id=\"passportupload\" class=\"detailsblock\">\n              <div class=\"input\">\n                <label for=\"pictureupload\">Upload a passport photograph</label>\n\n                <input type =\"file\" id=\"picturepassport\" name=\"avatar\" formenctype=\"multipart/form-data\" >\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('passport');\">upload picture</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingpassport\">\n                  <div class=\"filling\" id=\"fillingpassport\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadpassportmessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadpassporterrormessage\">\n                    </div>\n                </div>\n\n\n            </div> -->\n\n\n            <div class=\"uploadpicture\" id=\"idcardupload\" class=\"detailsblock\">\n              <div class=\"detailsblock\">\n                <label for=\"pictureidcard\">Upload Your Sales Representative I.D. card </label>\n\n                <input class = \"details noborder\"type =\"file\" id=\"pictureidcard\" name=\"avatar\" formenctype=\"multipart/form-data\" >\n\n                <div class=\"uploadpicture\">\n                  <button onclick=\"uploading('idcard');\" class=\"button\">upload I.D. Card</button>\n                  </div>\n                <div class=\"loading\"id=\"loadingidcard\">\n                  <div class=\"filling\" id=\"fillingidcard\"> </div>\n                </div>\n                <div style=\"display:none\" id=\"uploadidcardmessage\">\n                  </div>\n                  <div style=\"\" id=\"uploadidcarderrormessage\">\n                    </div>\n                </div>\n\n\n            </div>\n\n      <!-- <div class=\"uploadidcard\" id=\"idcardupload\">\n            <div class=\"detailsblock\">\n              <label class=\"label\"  for=\"uploadidcard\">Upload Representative I.D. card</label>\n              <input class = \"details\"type =\"file\" id=\"pictureidcard\" name=\"idcard\" formenctype=\"multipart/form-data\" >\n              <div class=\"uploadpicture\">\n                <button onclick=\"uploading('idcard');\">upload I.D.Card</button>\n                </div>\n              <div class=\"loading\" id=\"loadingidcard\">\n                <div class=\"filling\" id=\"fillingidcard\">\n                </div>\n              </div>\n              <div style=\"display:none;\" id=\"uploadidcardmessage\">\n                </div>\n                <div  id=\"uploadidcarderrormessage\">\n                  </div>\n            </div>\n\n          </div> -->\n\n                <div class=\"submitdiv\">\n                  <input type =\"submit\" class=\"button\" [title]=\"!registerform.valid?'Fill all fields':''\" (click)=\"save();\" id=\"submit\" [disabled]=\"!registerform.valid\" value=\"Submit\" id=\"submit\">\n\n                </div>\n\n\n\n\n\n\n              </div>\n            </form>\n\n\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestingTestingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"menubutton\" onclick=\"expanddropdown();\">\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n\n      </div>\n      <div class=\"dropdownwrapper\">\n        <div class=\"logoandclose\">\n\n          <div class=\"logo\">\n          <div class=\"logoandword\">\n              <img src=\"/assets/card.jpg\">\n\n          <div class=\"logoword\"> Otunba POS</div>\n          </div>\n          </div>\n          <div class=\"close\">\n            <i class=\"fas fa-times\" onclick=\"closedropdown()\"></i>\n          </div>\n        </div>\n        <div class=\"dropdownsection\">\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('zero');\">\n                <div class=\"sectionname\">\n                  Transaction\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">Deposit, Withd...\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'deposit']\">\n                        Deposit\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'withdraw']\">\n                        Withdraw\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'dailytransaction', uid]\">\n                        Daily Transactions\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'transactions', uid]\">\n                      Transactions\n                        </a>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('one');\">\n                <div class=\"sectionname\">\n                  User Requests\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">Registration. Appr...\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      User Registration Approval\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      Profile Change Approval\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\">\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\">\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"adminwrapper\" id=\"adminwrapper\">\n      <div class=\"detailsblock\" style=\"width: max-content;\">\n        <div class=\"infoheader\">\n          Status\n      </div>\n      <div class=\"infodetails\">\n        Collector\n    </div>\n      </div>\n\n      <div class=\"detailsblock\" style=\"width: max-content;\">\n        <div class=\"infoheader\">\n          Subscribers\n      </div>\n      <div class=\"infodetails\">\n\n        <table class=\"userstable\">\n          <tr>\n            <th>Approve</th>\n            <th>\n              Avatar\n            </th>\n            <th>\n              First Name\n            </th>\n            <th>\n              Middle Name\n            </th>\n            <th>\n              Last Name\n              </th>\n              <th>\n                Email\n              </th>\n\n            <th>\n              Location\n            </th>\n            <th>\n              I.D.Card\n            </th>\n\n          </tr>\n        <tr *ngFor=\"let data of dataarray\">\n          <td><input type=\"button\" value=\"Approve Reg\" (click)=\"approve(data);\"></td>\n          <td><img [src]=\"data.passporturl\"></td>\n          <td>{{data.firstname}}</td>\n          <td>{{data.middlename}}</td>\n          <td>{{data.lastname}}</td>\n          <td>{{data.email}}</td>\n          <td>{{data.location}}</td>\n\n          <td><img [src]=\"data.idcardurl\"></td>\n        </tr>\n\n        </table>\n\n\n\n    </div>\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"userstable\">\n  <tr>\n    <th>Actions</th>\n    <th>\n      Avatar\n    </th>\n    <th>\n    Name\n    </th>\n      <th>\n        Email\n      </th>\n\n    <th>\n      Location\n    </th>\n\n\n  </tr>\n<tr *ngFor=\"let data of datas\">\n  <td><input type=\"button\" value=\"Actions\" (click)=\"actions(data.uid);\"></td>\n  <td><img [src]=\"data.photoURL\"></td>\n  <td>{{data.displayName | nbsp:'-'}}</td>\n\n  <td>{{data.email}}</td>\n  <td>{{data.location}}</td>\n\n\n</tr>\n\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userarea/userarea.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userarea/userarea.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserareaUserareaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n      <div class=\"menubutton\" onclick=\"expanddropdown();\">\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n\n      </div>\n      <div class=\"dropdownwrapper\">\n        <div class=\"logoandclose\">\n\n          <div class=\"logo\">\n          <div class=\"logoandword\">\n              <img src=\"/assets/card.jpg\">\n\n          <div class=\"logoword\"> Disposify</div>\n          </div>\n          </div>\n          <div class=\"close\">\n            <i class=\"fas fa-times\" onclick=\"closedropdown()\"></i>\n          </div>\n        </div>\n        <div class=\"dropdownsection\">\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('zero');\">\n                <div class=\"sectionname\">\n                  Registration\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">Register Dash...\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'businessreg']\">\n                        Register Your Business\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'packagereg']\">\n                        Register Your Service Packages\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/collector', uid, 'collectorinformation']\">\n                        Dashboard\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'dailytransaction', uid]\">\n\n                        </a>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n\n                    </div>\n                    <div class=\"contentname\">\n                      <a style=\"\" [routerLink] =\"['/user', uid, 'transactions', uid]\">\n\n                        </a>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\" onclick=\"expanding('one');\">\n                <div class=\"sectionname\">\n                  Users\n                </div>\n                <div class=\"arrowicon\">\n                  <i class=\"fas fa-angle-right\" > </i>\n\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\" onclick=\"signout();\">\n                      <a style=\"\" [routerLink] =\"['/login']\">\n                        Log Out\n                        </a>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n\n              </ul>\n\n            </div>\n\n          </div>\n          <div class=\"section\">\n            <div class=\"sectionheader\">\n              <div class=\"sectionnameandicon\">\n                <div class=\"sectionname\">\n                </div>\n                <div class=\"arrowicon\">\n                </div>\n              </div>\n              <div class=\"listsectioncontent\">\n              </div>\n            </div>\n            <div class=\"sectioncontent\">\n              <ul>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"contenticon\">\n                    </div>\n                    <div class=\"contentname\">\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"adminwrapper\" id=\"adminwrapper\">\n        <router-outlet></router-outlet>\n          </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserprofileUserprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"routewrapper\">\n  <div class=\"routerheader\">\n    Vendor Section\n  </div>\n  <div class =\"navwrapper\">\n    <div class=\"navdetails\">\n    <ul>\n      <li>\n        <a [routerLink]=\"['/admin', 'user', uid, 'userdetails']\" routerLinkActive =\"active\">\n          User Details\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin', 'user', uid, uid, 'moneyallocated', uid]\" routerLinkActive =\"active\">\n          Allocate Money\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin', 'user', uid, uid, 'moneyremmited']\" routerLinkActive =\"active\">\n          Enter Amount Remitted\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin', 'user', uid, 'dailytransaction', uid]\" routerLinkActive =\"active\">\n          Daily transactions\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin', 'user', uid, 'transactions', uid]\" routerLinkActive =\"active\">\n          Transactions\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/user', uid]\" routerLinkActive =\"active\">\n          Go To User's Page\n        </a>\n      </li>\n    </ul>\n    </div>\n    <div class=\"rightback\">\n      Go Back To Vendors\n    </div>\n  </div>\n  <router-outlet> </router-outlet>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofileid/userprofileid.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofileid/userprofileid.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserprofileidUserprofileidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "this works\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/adminresolver.service.ts":
  /*!******************************************!*\
    !*** ./src/app/adminresolver.service.ts ***!
    \******************************************/

  /*! exports provided: AdminresolverService */

  /***/
  function srcAppAdminresolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminresolverService", function () {
      return AdminresolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminresolverService = function AdminresolverService() {
      _classCallCheck(this, AdminresolverService);

      this.loading = false;
    };

    AdminresolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminresolverService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loading{\n  display: flex;\n  position: absolute;\n  top:0px;\n  left:0px;\n  width:100vw;\n  height:100vh;\n  background-color: #eeeeee;\n  opacity:0.5;\nalign-items:center;\njustify-content: center;\n}\n\n.rotate{\n  width:35px;\n  height:35px;\n  border-radius: 50%;\n  border:2px dotted green;\n  border-top:3px dotted green;\n\n  border-bottom: 1px dotted blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztBQUNiLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMkJBQTJCOztFQUUzQiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowcHg7XG4gIGxlZnQ6MHB4O1xuICB3aWR0aDoxMDB2dztcbiAgaGVpZ2h0OjEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBvcGFjaXR5OjAuNTtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm90YXRle1xuICB3aWR0aDozNXB4O1xuICBoZWlnaHQ6MzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6MnB4IGRvdHRlZCBncmVlbjtcbiAgYm9yZGVyLXRvcDozcHggZG90dGVkIGdyZWVuO1xuXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _adminresolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adminresolver.service */
    "./src/app/adminresolver.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, fb, ad) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.fb = fb;
        this.ad = ad;
        this.loading = false;
        this.loading = this.ad.loading;
        this.router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this.ad.loading = true;
            _this.loading = _this.ad.loading;
            console.log(_this.ad.loading);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this.ad.loading = false;
            _this.loading = _this.ad.loading;
            console.log(_this.loading);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //  window.onscroll = function() {scrollFunction()};

          /*function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          let headerclasses=document.getElementById("header").className;
          console.log(headerclasses);
          let isboxshadow = headerclasses.search('boxshadow');
          var bar = document.getElementsByClassName("bar");
          var barclasses = bar[0].className;
                if( barclasses.includes("yellow")){
          console.log("yellow");
          for (let i=0; i<bar.length; i++ ){
            bar[i].className = bar[i].className.replace(/\byellow\b/g, "black")
          }}
          var header = document.getElementById("header");
          var a = header.getElementsByTagName("a");
          var aclasses = a[0].className;
          if(aclasses.includes("liacolor")){
            for (let i=0; i<a.length; i++ ){
              a[i].className = a[i].className.replace(/\bliacolor\b/g, "blackli ");
            }}
                console.log(isboxshadow);
              if(isboxshadow == -1 ){
          console.log('yes');
                document.getElementById("header").className += " boxshadow";
          document.getElementById("nav").className=document.getElementById("nav").className.replace(/\bnav1\b/g, "nav2");
          document.getElementById("logo").className=document.getElementById("logo").className.replace(/\bnodisplay\b/g, "display");
          }
           } else {
              bar = document.getElementsByClassName("bar");
              barclasses = bar[0].className;
                   if(barclasses.includes("yellow")){}else{
                   for (let i=0; i<bar.length; i++ ){
               bar[i].className += " yellow"
             }}
             var header = document.getElementById("header");
             var a = header.getElementsByTagName("a");
             var aclasses = a[0].className;
             if(aclasses.includes("liacolor")){}else{
               for (let i=0; i<a.length; i++ ){
                 a[i].className += " liacolor";
                 //a[i].className.replace(/\bliacolor\b/g, "liacolor-black");
               }}
            
            document.getElementById("header").className = "";
            document.getElementById("nav").className=document.getElementById("nav").className.replace(/\bnav2\b/g, "nav1");
            
            document.getElementById("logo").className=document.getElementById("logo").className.replace(/\bdisplay\b/g, "nodisplay");
            
            }
          }
                const displayornot = ()=>{
            console.log('displayornot');
          let  bigscreennav = document.getElementById('bigscreennav');
          let  dropdown = document.getElementById('dropdown').className;
          let  dropdowngan = document.getElementById('dropdown');
                let isdropdown = dropdown.includes("nodisplay");
          console.log(isdropdown);
            if(isdropdown){
              console.log(dropdown);
              document.getElementById('dropdown').className = document.getElementById('dropdown').className.replace(/\bnodisplay\b/g, "display");
            }else{
              console.log("falseeee");
            dropdowngan.className = dropdowngan.className.replace(/\bdisplay\b/g, "nodisplay");
            }
          } */
          this.registerform = this.fb.group({
            'firstname': ''
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _adminresolver_service__WEBPACK_IMPORTED_MODULE_4__["AdminresolverService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _routing_module_routing_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./routing-module/routing-module.module */
    "./src/app/routing-module/routing-module.module.ts");
    /* harmony import */


    var _requestintercept_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./requestintercept.service */
    "./src/app/requestintercept.service.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/index/index.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./userprofile/userprofile.component */
    "./src/app/userprofile/userprofile.component.ts");
    /* harmony import */


    var _userprofileid_userprofileid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./userprofileid/userprofileid.component */
    "./src/app/userprofileid/userprofileid.component.ts");
    /* harmony import */


    var _registrationapprovals_registrationapprovals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./registrationapprovals/registrationapprovals.component */
    "./src/app/registrationapprovals/registrationapprovals.component.ts");
    /* harmony import */


    var _registrationapprovalsid_registrationapprovalsid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./registrationapprovalsid/registrationapprovalsid.component */
    "./src/app/registrationapprovalsid/registrationapprovalsid.component.ts");
    /* harmony import */


    var _nbsp_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./nbsp.pipe */
    "./src/app/nbsp.pipe.ts");
    /* harmony import */


    var _userarea_userarea_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./userarea/userarea.component */
    "./src/app/userarea/userarea.component.ts");
    /* harmony import */


    var _testing_testing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./testing/testing.component */
    "./src/app/testing/testing.component.ts");
    /* harmony import */


    var _serviceregister_serviceregister_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./serviceregister/serviceregister.component */
    "./src/app/serviceregister/serviceregister.component.ts");
    /* harmony import */


    var _collector_collector_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./collector/collector.component */
    "./src/app/collector/collector.component.ts");
    /* harmony import */


    var _collectorinformation_collectorinformation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./collectorinformation/collectorinformation.component */
    "./src/app/collectorinformation/collectorinformation.component.ts");
    /* harmony import */


    var _packagereg_packagereg_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./packagereg/packagereg.component */
    "./src/app/packagereg/packagereg.component.ts");
    /* harmony import */


    var _facebookuser_facebookuser_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./facebookuser/facebookuser.component */
    "./src/app/facebookuser/facebookuser.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__["UserprofileComponent"], _userprofileid_userprofileid_component__WEBPACK_IMPORTED_MODULE_13__["UserprofileidComponent"], _registrationapprovals_registrationapprovals_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationapprovalsComponent"], _registrationapprovalsid_registrationapprovalsid_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationapprovalsidComponent"], _nbsp_pipe__WEBPACK_IMPORTED_MODULE_16__["NbspPipe"], _userarea_userarea_component__WEBPACK_IMPORTED_MODULE_17__["UserareaComponent"], _testing_testing_component__WEBPACK_IMPORTED_MODULE_18__["TestingComponent"], _serviceregister_serviceregister_component__WEBPACK_IMPORTED_MODULE_19__["ServiceregisterComponent"], _collector_collector_component__WEBPACK_IMPORTED_MODULE_20__["CollectorComponent"], _collectorinformation_collectorinformation_component__WEBPACK_IMPORTED_MODULE_21__["CollectorinformationComponent"], _packagereg_packagereg_component__WEBPACK_IMPORTED_MODULE_22__["PackageregComponent"], _facebookuser_facebookuser_component__WEBPACK_IMPORTED_MODULE_23__["FacebookuserComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _routing_module_routing_module_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModuleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _requestintercept_service__WEBPACK_IMPORTED_MODULE_8__["RequestinterceptService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/collector.guard.ts":
  /*!************************************!*\
    !*** ./src/app/collector.guard.ts ***!
    \************************************/

  /*! exports provided: CollectorGuard */

  /***/
  function srcAppCollectorGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectorGuard", function () {
      return CollectorGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");

    var CollectorGuard = /*#__PURE__*/function () {
      function CollectorGuard(router, loginservice) {
        _classCallCheck(this, CollectorGuard);

        this.router = router;
        this.loginservice = loginservice;
      }

      _createClass(CollectorGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.log("hi from guards");
          this.loginservice.redirecturl = state.url;
          console.log(this.isloggedin());

          if (this.isloggedin() == "true") {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          console.log("hi from guards");
          this.loginservice.redirecturl = state.url;
          console.log(this.isloggedin());

          if (this.isloggedin() == "true") {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }, {
        key: "isloggedin",
        value: function isloggedin() {
          if (this.loginservice.collector) {
            return "true";
          } else {
            return "false";
          }
        }
      }]);

      return CollectorGuard;
    }();

    CollectorGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    CollectorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CollectorGuard);
    /***/
  },

  /***/
  "./src/app/collector/collector.component.css":
  /*!***************************************************!*\
    !*** ./src/app/collector/collector.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCollectorCollectorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menubutton{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 15px;\r\n  height: 30px;\r\n  \twidth: 20px;\r\n    background-color: transparent;\r\n    cursor:pointer;\r\n    z-index: 100;\r\n}\r\n.bar{\r\n  display: block;\r\n  padding: 1.55px;\r\n  margin: 3px;\r\n\tbackground-color: black;\r\n\twidth: 16px;\r\n}\r\n.dropdownwrapper{\r\n  width: 250px;\r\n  position: fixed;\r\n  z-index: 101;\r\n  color: green;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n\r\n  height: 100vh;\r\n/*  background-image: url(/assets/posbackground.png);*/\r\n  background-size: cover;\r\n\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.infoheader{\r\n  font-family: \"Hind\", sans-serif;\r\n  line-height: 21px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color:green;\r\n  margin: 20px;\r\n\r\n}\r\n.infodetails{\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-size: 16px;\r\n  margin: 0px 20px 10px;\r\n\r\n\r\n}\r\n.dropdownsection{\r\nheight:150vh;\r\n}\r\n.adminwrapper{width:97%;\r\n  margin:auto;\r\n  margin-top:40px;\r\noverflow-x: scroll;}\r\n.shift{margin-left: 10px;}\r\n.dropdownwrapper::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: white;\r\n\r\n}\r\n/* Track */\r\n.dropdownwrapper::-webkit-scrollbar-track {\r\n\r\n\r\n}\r\n/* Handle */\r\n.dropdownwrapper::-webkit-scrollbar-thumb {\r\n background-color: #dedcdc;\r\n border: 2px solid #ffffff;\r\n border-radius: 8px;\r\n}\r\n.logoword, .logoandword img{\r\n  margin-right: 10px;\r\n}\r\n.listsectioncontent{\r\n  color: #74828e;\r\n  font-family: 'Hind', sans-serif;\r\n  font-size: 13px;\r\n    line-height: 21px;\r\n    font-weight: bold;\r\n}\r\n.sectioncontent ul{\r\n  list-style-type: none;\r\n    font-family: 'Hind', sans-serif;\r\n    line-height: 23px;\r\n\r\n    padding: 0;\r\n}\r\n.sectioncontent li{\r\n  margin-bottom: 10px;\r\n}\r\n.sectioncontent li a {\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n.logoandword{\r\ndisplay: flex;\r\nalign-items: center;\r\n}\r\n.logoandclose{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logoandclose,.section{\r\n  margin-bottom: 0;\r\n\r\n  padding: 20px 25px;\r\n    padding-right: 24px;\r\n    box-shadow: 2px 2px 4px 0px #dedcdc;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.logoandclose .logo img{\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.logoandclose .logo{\r\n  float: left;\r\n}\r\n.logoandclose .close{\r\n  float: right;\r\n}\r\n.dropdownwrapper{\r\n  display:none;\r\n}\r\n.dropdowndisplay{\r\n  display: block;\r\n}\r\n.sectionnameandicon{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n.sectioncontent{\r\n  display: none;\r\n}\r\n.display{\r\n  display:block;\r\n}\r\n.sectionheader{\r\n  height: 40px;\r\n}\r\n.sectionname{\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n  font-size: 14px;\r\n}\r\ntable tr:nth-child(even){\r\n  background-color: #f3f4f5;\r\n\r\n}\r\ntable tr:nth-child(odd){\r\n  background-color: white;\r\n\r\n}\r\ntable, th, td{\r\n  border-collapse: collapse;\r\n  border: 1px solid #f3f4f5;\r\n  color: #333;\r\n  padding:15px;\r\n}\r\ntable{\r\n  min-width: 70vw;\r\n}\r\ntable img{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.plusbutton{\r\n  border-radius: 50%;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    width: 40px;\r\n    left: 80vw;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    top: 80vh;\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n@media only screen and (min-width:1000px ){\r\n\r\n.dropdownwrapper{\r\n  display:block;\r\n  box-shadow: 2px 2px 4px 0px #dedcdc;\r\n}\r\n.dropdowndisplay{\r\n  display: none;\r\n}\r\n.adminwrapper{width:70%;\r\noverflow-x: scroll;\r\nmargin-left: 270px;}\r\n.shift{margin-left: auto;\r\nwidth:98%;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\n/*box-shadow: none;*/\r\n\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdG9yL2NvbGxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtHQUNYLFdBQVc7SUFDViw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztDQUNaLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1QkFBdUI7O0VBRXZCLGFBQWE7QUFDZixzREFBc0Q7RUFDcEQsc0JBQXNCOzs7QUFHeEI7QUFDQTtFQUNFLFdBQVc7O0VBRVgsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDRDQUE0Qzs7SUFFNUMsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YscUJBQXFCOzs7QUFHdkI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLGNBQWMsU0FBUztFQUNyQixXQUFXO0VBQ1gsZUFBZTtBQUNqQixrQkFBa0IsQ0FBQztBQUNuQixPQUFPLGlCQUFpQixDQUFDO0FBQ3pCO0VBQ0UsVUFBVTtFQUNWLHVCQUF1Qjs7QUFFekI7QUFFQSxVQUFVO0FBQ1Y7OztBQUdBO0FBRUEsV0FBVztBQUNYO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixlQUFlO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLCtCQUErQjtJQUMvQixpQkFBaUI7O0lBRWpCLFVBQVU7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0FBQ3BDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwrQkFBK0I7Q0FDaEMsaUJBQWlCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQztFQUNDLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZDQUE2Qzs7QUFFakQ7QUFFQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBLGNBQWMsU0FBUztBQUN2QixrQkFBa0I7QUFDbEIsa0JBQWtCLENBQUM7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUzs7QUFFVDtBQUNBO0VBQ0UsWUFBWTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb2xsZWN0b3IvY29sbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIFx0d2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5iYXJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMS41NXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdHdpZHRoOiAxNnB4O1xyXG59XHJcbi5kcm9wZG93bndyYXBwZXJ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDE7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbi8qICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9wb3NiYWNrZ3JvdW5kLnBuZyk7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuXHJcbn1cclxuLnBpY3R1cmUsIC5kZXRhaWxzYmxvY2t7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4ucGljdHVyZXtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OjEyMHB4O1xyXG4gIC8qbWFyZ2luLWJvdHRvbTogMzBweCAqL1xyXG59XHJcbi5kZXRhaWxzYmxvY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4IHJnYigyMjIgMjIwIDIyMCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmluZm9oZWFkZXJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjpncmVlbjtcclxuICBtYXJnaW46IDIwcHg7XHJcblxyXG59XHJcbi5pbmZvZGV0YWlsc3tcclxuICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDBweCAyMHB4IDEwcHg7XHJcblxyXG5cclxufVxyXG4uZHJvcGRvd25zZWN0aW9ue1xyXG5oZWlnaHQ6MTUwdmg7XHJcbn1cclxuLmFkbWlud3JhcHBlcnt3aWR0aDo5NyU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG5vdmVyZmxvdy14OiBzY3JvbGw7fVxyXG4uc2hpZnR7bWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4uZHJvcGRvd253cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5kcm9wZG93bndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuXHJcblxyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLmRyb3Bkb3dud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2RlZGNkYztcclxuIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmxvZ293b3JkLCAubG9nb2FuZHdvcmQgaW1ne1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubGlzdHNlY3Rpb25jb250ZW50e1xyXG4gIGNvbG9yOiAjNzQ4MjhlO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc2VjdGlvbmNvbnRlbnQgdWx7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IGxpe1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5sb2dvYW5kd29yZHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9nb2FuZGNsb3Nle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ29hbmRjbG9zZSwuc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICNkZWRjZGM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4ubG9nb2FuZGNsb3NlIC5sb2dvIGltZ3tcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcblxyXG59XHJcbi5sb2dvYW5kY2xvc2UgLmxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmxvZ29hbmRjbG9zZSAuY2xvc2V7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZHJvcGRvd253cmFwcGVye1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZHJvcGRvd25kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZWN0aW9ubmFtZWFuZGljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLnNlY3Rpb25jb250ZW50e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRpc3BsYXl7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4uc2VjdGlvbmhlYWRlcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnNlY3Rpb25uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcblx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xyXG5cclxufVxyXG4gdGFibGUgdHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbnRhYmxlLCB0aCwgdGR7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmNGY1O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHBhZGRpbmc6MTVweDtcclxufVxyXG50YWJsZXtcclxuICBtaW4td2lkdGg6IDcwdnc7XHJcbn1cclxudGFibGUgaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4ucGx1c2J1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBsZWZ0OiA4MHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0b3A6IDgwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggNHB4IDFweCByZ2IoMTgzIDE5MyAyMDQpO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMDBweCApe1xyXG5cclxuLmRyb3Bkb3dud3JhcHBlcntcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjZGVkY2RjO1xyXG59XHJcbi5kcm9wZG93bmRpc3BsYXl7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYWRtaW53cmFwcGVye3dpZHRoOjcwJTtcclxub3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5tYXJnaW4tbGVmdDogMjcwcHg7fVxyXG4uc2hpZnR7bWFyZ2luLWxlZnQ6IGF1dG87XHJcbndpZHRoOjk4JTtcclxuXHJcbn1cclxuLnBpY3R1cmUsIC5kZXRhaWxzYmxvY2t7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHNibG9ja3tcclxuLypib3gtc2hhZG93OiBub25lOyovXHJcblxyXG59XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/collector/collector.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/collector/collector.component.ts ***!
    \**************************************************/

  /*! exports provided: CollectorComponent */

  /***/
  function srcAppCollectorCollectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectorComponent", function () {
      return CollectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CollectorComponent = /*#__PURE__*/function () {
      function CollectorComponent(route) {
        _classCallCheck(this, CollectorComponent);

        this.route = route;
      }

      _createClass(CollectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uid = this.route.snapshot.paramMap.get("id");
        }
      }]);

      return CollectorComponent;
    }();

    CollectorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CollectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-collector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./collector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/collector/collector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./collector.component.css */
      "./src/app/collector/collector.component.css"))["default"]]
    })], CollectorComponent);
    /***/
  },

  /***/
  "./src/app/collectorinformation/collectorinformation.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/collectorinformation/collectorinformation.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCollectorinformationCollectorinformationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menubutton{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 15px;\r\n  height: 30px;\r\n  \twidth: 20px;\r\n    background-color: transparent;\r\n    cursor:pointer;\r\n    z-index: 100;\r\n}\r\n.bar{\r\n  display: block;\r\n  padding: 1.55px;\r\n  margin: 3px;\r\n\tbackground-color: black;\r\n\twidth: 16px;\r\n}\r\n.dropdownwrapper{\r\n  width: 250px;\r\n  position: fixed;\r\n  z-index: 101;\r\n  color: green;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n\r\n  height: 100vh;\r\n/*  background-image: url(/assets/posbackground.png);*/\r\n  background-size: cover;\r\n\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.infoheader{\r\n  font-family: \"Hind\", sans-serif;\r\n  line-height: 21px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color:green;\r\n  margin: 20px;\r\n\r\n}\r\n.infodetails{\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-size: 16px;\r\n  margin: 0px 20px 10px;\r\n\r\n\r\n}\r\n.dropdownsection{\r\nheight:150vh;\r\n}\r\n.adminwrapper{width:97%;\r\n  margin:auto;\r\n  margin-top:40px;\r\noverflow-x: scroll;}\r\n.shift{margin-left: 10px;}\r\n.dropdownwrapper::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: white;\r\n\r\n}\r\n/* Track */\r\n.dropdownwrapper::-webkit-scrollbar-track {\r\n\r\n\r\n}\r\n/* Handle */\r\n.dropdownwrapper::-webkit-scrollbar-thumb {\r\n background-color: #dedcdc;\r\n border: 2px solid #ffffff;\r\n border-radius: 8px;\r\n}\r\n.logoword, .logoandword img{\r\n  margin-right: 10px;\r\n}\r\n.listsectioncontent{\r\n  color: #74828e;\r\n  font-family: 'Hind', sans-serif;\r\n  font-size: 13px;\r\n    line-height: 21px;\r\n    font-weight: bold;\r\n}\r\n.sectioncontent ul{\r\n  list-style-type: none;\r\n    font-family: 'Hind', sans-serif;\r\n    line-height: 23px;\r\n\r\n    padding: 0;\r\n}\r\n.sectioncontent li{\r\n  margin-bottom: 10px;\r\n}\r\n.sectioncontent li a {\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n.logoandword{\r\ndisplay: flex;\r\nalign-items: center;\r\n}\r\n.logoandclose{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logoandclose,.section{\r\n  margin-bottom: 0;\r\n\r\n  padding: 20px 25px;\r\n    padding-right: 24px;\r\n    box-shadow: 2px 2px 4px 0px #dedcdc;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.logoandclose .logo img{\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.logoandclose .logo{\r\n  float: left;\r\n}\r\n.logoandclose .close{\r\n  float: right;\r\n}\r\n.dropdownwrapper{\r\n  display:none;\r\n}\r\n.dropdowndisplay{\r\n  display: block;\r\n}\r\n.sectionnameandicon{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n.sectioncontent{\r\n  display: none;\r\n}\r\n.display{\r\n  display:block;\r\n}\r\n.sectionheader{\r\n  height: 40px;\r\n}\r\n.sectionname{\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n  font-size: 14px;\r\n}\r\ntable tr:nth-child(even){\r\n  background-color: #f3f4f5;\r\n\r\n}\r\ntable tr:nth-child(odd){\r\n  background-color: white;\r\n\r\n}\r\ntable, th, td{\r\n  border-collapse: collapse;\r\n  border: 1px solid #f3f4f5;\r\n  color: #333;\r\n  padding:15px;\r\n}\r\ntable{\r\n  min-width: 70vw;\r\n}\r\ntable img{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.plusbutton{\r\n  border-radius: 50%;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    width: 40px;\r\n    left: 80vw;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    top: 80vh;\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n@media only screen and (min-width:1000px ){\r\n\r\n.dropdownwrapper{\r\n  display:block;\r\n  box-shadow: 2px 2px 4px 0px #dedcdc;\r\n}\r\n.dropdowndisplay{\r\n  display: none;\r\n}\r\n.adminwrapper{width:70%;\r\noverflow-x: scroll;\r\nmargin-left: 270px;}\r\n.shift{margin-left: auto;\r\nwidth:98%;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\n/*box-shadow: none;*/\r\n\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdG9yaW5mb3JtYXRpb24vY29sbGVjdG9yaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7R0FDWCxXQUFXO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7Q0FDWix1QkFBdUI7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsdUJBQXVCOztFQUV2QixhQUFhO0FBQ2Ysc0RBQXNEO0VBQ3BELHNCQUFzQjs7O0FBR3hCO0FBQ0E7RUFDRSxXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7O0lBRTVDLHVCQUF1QjtBQUMzQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLHFCQUFxQjs7O0FBR3ZCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxjQUFjLFNBQVM7RUFDckIsV0FBVztFQUNYLGVBQWU7QUFDakIsa0JBQWtCLENBQUM7QUFDbkIsT0FBTyxpQkFBaUIsQ0FBQztBQUN6QjtFQUNFLFVBQVU7RUFDVix1QkFBdUI7O0FBRXpCO0FBRUEsVUFBVTtBQUNWOzs7QUFHQTtBQUVBLFdBQVc7QUFDWDtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtJQUNuQiwrQkFBK0I7SUFDL0IsaUJBQWlCOztJQUVqQixVQUFVO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7O0VBRWhCLGtCQUFrQjtJQUNoQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsK0JBQStCO0NBQ2hDLGlCQUFpQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0M7RUFDQyx1QkFBdUI7O0FBRXpCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2Q0FBNkM7O0FBRWpEO0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSxjQUFjLFNBQVM7QUFDdkIsa0JBQWtCO0FBQ2xCLGtCQUFrQixDQUFDO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVM7O0FBRVQ7QUFDQTtFQUNFLFlBQVk7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29sbGVjdG9yaW5mb3JtYXRpb24vY29sbGVjdG9yaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51YnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgXHR3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLmJhcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxLjU1cHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0d2lkdGg6IDE2cHg7XHJcbn1cclxuLmRyb3Bkb3dud3JhcHBlcntcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuLyogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3Bvc2JhY2tncm91bmQucG5nKTsqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG5cclxufVxyXG4ucGljdHVyZSwgLmRldGFpbHNibG9ja3tcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5waWN0dXJle1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6MTIwcHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAzMHB4ICovXHJcbn1cclxuLmRldGFpbHNibG9ja3tcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggcmdiKDIyMiAyMjAgMjIwKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5mb2hlYWRlcntcclxuICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOmdyZWVuO1xyXG4gIG1hcmdpbjogMjBweDtcclxuXHJcbn1cclxuLmluZm9kZXRhaWxze1xyXG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMTBweDtcclxuXHJcblxyXG59XHJcbi5kcm9wZG93bnNlY3Rpb257XHJcbmhlaWdodDoxNTB2aDtcclxufVxyXG4uYWRtaW53cmFwcGVye3dpZHRoOjk3JTtcclxuICBtYXJnaW46YXV0bztcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbm92ZXJmbG93LXg6IHNjcm9sbDt9XHJcbi5zaGlmdHttYXJnaW4tbGVmdDogMTBweDt9XHJcbi5kcm9wZG93bndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLmRyb3Bkb3dud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuXHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uZHJvcGRvd253cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkY2RjO1xyXG4gYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4ubG9nb3dvcmQsIC5sb2dvYW5kd29yZCBpbWd7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5saXN0c2VjdGlvbmNvbnRlbnR7XHJcbiAgY29sb3I6ICM3NDgyOGU7XHJcbiAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zZWN0aW9uY29udGVudCB1bHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcblxyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uc2VjdGlvbmNvbnRlbnQgbGl7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc2VjdGlvbmNvbnRlbnQgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmxvZ29hbmR3b3Jke1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dvYW5kY2xvc2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9nb2FuZGNsb3NlLC5zZWN0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggI2RlZGNkYztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbi5sb2dvYW5kY2xvc2UgLmxvZ28gaW1ne1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuXHJcbn1cclxuLmxvZ29hbmRjbG9zZSAubG9nb3tcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ubG9nb2FuZGNsb3NlIC5jbG9zZXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bndyYXBwZXJ7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5kcm9wZG93bmRpc3BsYXl7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNlY3Rpb25uYW1lYW5kaWNvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4uc2VjdGlvbmNvbnRlbnR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGlzcGxheXtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbi5zZWN0aW9uaGVhZGVye1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uc2VjdGlvbm5hbWV7XHJcbiAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMjFweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjU7XHJcblxyXG59XHJcbiB0YWJsZSB0cjpudGgtY2hpbGQob2RkKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxudGFibGUsIHRoLCB0ZHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2Y0ZjU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcGFkZGluZzoxNXB4O1xyXG59XHJcbnRhYmxle1xyXG4gIG1pbi13aWR0aDogNzB2dztcclxufVxyXG50YWJsZSBpbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5wbHVzYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGxlZnQ6IDgwdnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRvcDogODB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDJweCA0cHggMXB4IHJnYigxODMgMTkzIDIwNCk7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4ICl7XHJcblxyXG4uZHJvcGRvd253cmFwcGVye1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICNkZWRjZGM7XHJcbn1cclxuLmRyb3Bkb3duZGlzcGxheXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5hZG1pbndyYXBwZXJ7d2lkdGg6NzAlO1xyXG5vdmVyZmxvdy14OiBzY3JvbGw7XHJcbm1hcmdpbi1sZWZ0OiAyNzBweDt9XHJcbi5zaGlmdHttYXJnaW4tbGVmdDogYXV0bztcclxud2lkdGg6OTglO1xyXG5cclxufVxyXG4ucGljdHVyZSwgLmRldGFpbHNibG9ja3tcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6MTIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZGV0YWlsc2Jsb2Nre1xyXG4vKmJveC1zaGFkb3c6IG5vbmU7Ki9cclxuXHJcbn1cclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/collectorinformation/collectorinformation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/collectorinformation/collectorinformation.component.ts ***!
    \************************************************************************/

  /*! exports provided: CollectorinformationComponent */

  /***/
  function srcAppCollectorinformationCollectorinformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectorinformationComponent", function () {
      return CollectorinformationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CollectorinformationComponent = /*#__PURE__*/function () {
      function CollectorinformationComponent() {
        _classCallCheck(this, CollectorinformationComponent);
      }

      _createClass(CollectorinformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CollectorinformationComponent;
    }();

    CollectorinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-collectorinformation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./collectorinformation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/collectorinformation/collectorinformation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./collectorinformation.component.css */
      "./src/app/collectorinformation/collectorinformation.component.css"))["default"]]
    })], CollectorinformationComponent);
    /***/
  },

  /***/
  "./src/app/facebooklogin.service.ts":
  /*!******************************************!*\
    !*** ./src/app/facebooklogin.service.ts ***!
    \******************************************/

  /*! exports provided: FacebookloginService */

  /***/
  function srcAppFacebookloginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacebookloginService", function () {
      return FacebookloginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // Add the Firebase services that you want to use


    var FacebookloginService = /*#__PURE__*/function () {
      function FacebookloginService(http, router) {
        var _this2 = this;

        _classCallCheck(this, FacebookloginService);

        this.http = http;
        this.router = router;
        this.user = false;
        this.admin = false;
        this.vendor = false;
        this.collector = false;
        this.customer = false;
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
          if (user) {
            if (!user.emailVerified) {
              var uid = user.uid;
              console.log(user);
              user.sendEmailVerification().then(function () {
                // Email sent.
                this.signinerrormessage = "Please verify your email first, we have sent a verification";
              })["catch"](function (error) {
                // An error happened.
                console.log(error);
              });
            }

            _this2.user = user;
          } else {
            _this2.user = false;
          }
        });
      }

      _createClass(FacebookloginService, [{
        key: "login",
        value: function login() {
          /*  firebase.auth().signInWithEmailAndPassword(hi.email, hi.password).then(()=>{
          if(this.user && !this.user.emailVerified){
                  let uid = this.user.uid;
          console.log(uid);
          this.user.sendEmailVerification().then((jj)=> {
          // Email sent.
                this.signinerrormessage = "Please verify your email first, we have sent a verification";
          alert(this.signinerrormessage);
                }).catch(function(error) {
          // An error happen.
          });
          }
          if(this.user && this.user.emailVerified){
          this.user.getIdToken(/* forceRefresh */

          /*true).then((idToken)=>{
          // Send token to your backend via HTTPS
          // ...
          /*console.log(idToken);
          this.http.post<Status>('http://localhost:3030/api/setclaims', {id: idToken}, {
          headers: new HttpHeaders({
          "Content-Type" : "application/json"
          })
          }).pipe(map(data=><Status>{status:data.status})).subscribe((data)=>{
          console.log(data.status);
          if(data.status == "success"){console.log("admin");}
          this.user.getIdTokenResult(true).then((id)=>{
          console.log(id.claims);
          if (!!id.claims.admin) {
          if(!this.redirecturl){this.redirecturl = "/admin"}
          this.router.navigate([`${this.redirecturl}`]);
          this.admin = id.claims.admin
          }
          if(id.claims.claims=="customer"){
          if(!this.redirecturl){this.redirecturl = `/user/${this.user.uid}`}
          this.router.navigate([`${this.redirecturl}`]);
          this.customer = true;
          }
          if(id.claims.claims =="collector"){
          if(!this.redirecturl){this.redirecturl = `/collector/${this.user.uid}`}
          this.router.navigate([`${this.redirecturl}`]);
          this.collector = true;
          }
          this.user.getIdToken(/* forceRefresh */

          /*true).then((idTokn)=>{
          this.toUseIdToken = idTokn;
          }).catch((e)=>{
          console.log(e);
          })
          });
          console.log(this.user);
          });
          }).catch(function(error) {
          // Handle error
          });
          }
          }
          ).catch((error)=>{
          switch(error.code){
          case "auth/invalid-email":
          this.signinerrormessage = "the email entered is not valid";
          break;
          case "auth/user-not-found":
          this.signinerrormessage ="there is no user corresponding to the given email.";
          break;
          case "auth/wrong-password":
          this.signinerrormessage ="The password is invalid for the given email";
          break;
          default:
          this.signinerrormessage = "An error ocurred";
          break;
          }
          alert(this.signinerrormessage);
          return(this.signinerrormessage);
          });*/
        }
      }]);

      return FacebookloginService;
    }();

    FacebookloginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FacebookloginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FacebookloginService);
    /***/
  },

  /***/
  "./src/app/facebookuser/facebookuser.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/facebookuser/facebookuser.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacebookuserFacebookuserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n  margin: 0;\r\n  padding: 0;\r\n  outline:0;\r\n}\r\n.indexwrapper{\r\n  background-image: url(/assets/bg.jpg);\r\n  margin-top: 0px;\r\n  width:100vw;\r\n  font-family: \"Dosis\", sans-serif;\r\n  margin: 0;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  justify-content: center;\r\n  /* TO Change to flex start in reg form*/\r\n  align-items: flex-start;\r\n  /* */\r\n\r\n  /* to change */\r\nmin-height: 100vh;\r\noverflow: hidden;\r\n}\r\n.loginwrapper{\r\n  margin-top: 64px;\r\n  /*border: 2px solid green;*/\r\n  background-color: transparent;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  box-shadow: -2px 3px 5px 2px rgb(3 22 37);\r\n\r\n\r\n}\r\n.noborder {\r\n    border-bottom: 2px solid white;\r\n}\r\n.invalid{\r\n  border-bottom: 2px solid red;\r\n}\r\n.errormessage{\r\n  color:red;\r\n  display:block;\r\n}\r\n.invalid{\r\n  border: 1px solid red;\r\n}\r\n.loginheader{\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.loginbody{\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  margin-top: 15px;\r\n  padding:0px 20px;\r\n}\r\n.input{\r\n  margin-bottom: 19px;\r\n\r\n}\r\n.input input, .input select{\r\n  width: 200px;\r\n  margin-left: 15px;\r\n  font-size: 16px;\r\n  padding: 7px;\r\n  padding-left: 50px;\r\n  background-image: url(/assets/searchicon.png);\r\n  background-position: 10px;\r\n  background-size: 20px;\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  border:  1px solid #73ec05;\r\n  border-radius: 20px;\r\n  font-family: \"Dosis\", sans-serif;\r\n  color:  #73ec05;\r\n}\r\n.input input:focus{\r\n  outline: 0;\r\n  border: 1px solid #c7faa7;\r\n\r\n}\r\n.input label{\r\n  margin-right: 20px;\r\n    color: #a6ca17;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    margin-left: 15px;\r\n      text-align: center;\r\n          font-weight:bold;\r\n\r\n}\r\n.submit{\r\n  background-image: url();\r\n  width:100px;\r\n  background-color: #164a45;\r\n    border: none;\r\n    padding-left: 5px;\r\n\r\n}\r\n.orregister{\r\n  margin-left: 50px;\r\n    color: #a6ca17;\r\n}\r\n.orregister a{\r\n  color: #a6ca17;\r\n}\r\n.nav{\r\n  position: absolute;\r\n  top:0px;\r\n  left: 0px;\r\n  background-color: transparent;\r\n  z-index: 100;\r\n\r\n}\r\n.nav ul{\r\n  margin:0px;\r\n  padding: 0px;\r\n}\r\n.nav ul li{\r\n  display: inline-block;\r\n    /* margin-left: 30px; */\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    padding-top: 0;\r\n    border-right: 2px solid #164a45;\r\n    /* border-left: 2px solid #164a45;*/\r\n\r\n}\r\n.nav ul li a{\r\n   color:#73ec19;\r\n   font-weight: bold;\r\n   text-decoration: none;\r\n   font-size: 18px;\r\n}\r\n.uploadpicture{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n/*.uploadpicture button{\r\n  background-color: #164a45;\r\n    color: #8db11a;\r\n    margin-top: 10px;\r\n    outline: 0;\r\n    border: 0;\r\n    border-radius: 30px;\r\n    padding: 9px;\r\n}*/\r\n.loading{\r\n  display: none;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n.uploadblurr{\r\n  background-color: #73ec19;\r\n  opacity: 0.8;\r\n\r\n}\r\n.filling{\r\n  height: 20%;\r\n  background-color: blue;\r\n}\r\n.profilewrapper{\r\n  margin: 0;\r\n  margin-top: 60px;\r\n  width: 100%;\r\n  background-color: white;\r\n\r\n\r\n}\r\n.profileheader{\r\n  width:95%;\r\n  padding:0;\r\n  overflow-x:scroll;\r\n  box-sizing: border-box;\r\n  margin:auto;\r\n\r\n}\r\n.navlong{\r\n    width: 1000px;\r\n    box-sizing: border-box;\r\n    border-bottom: 3px solid green;\r\n    height:40px;\r\n    box-sizing: border-box;\r\n}\r\n.navlong ul{\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  list-style-type: none;\r\n  margin:0;\r\n}\r\n#uploadpas {\r\n    border-bottom: none;\r\n}\r\n.navlong ul li{\r\n  display: inline-block;\r\nbox-sizing: border-box;\r\n  margin-top:-1px;\r\n  margin-right: 50px;\r\n  border:none;\r\n  border-bottom:1px solid #008000;\r\nheight: 40px;\r\n}\r\n.navlong ul li.active{height: 40px;\r\n    border-bottom: 3px solid #1ce017;\r\n\r\n}\r\n.navlong ul li a{\r\n  color: #008000;\r\n  text-decoration: none;\r\n  font-weight:bold;\r\n  \tfont-family: 'Dosis', sans-serif;\r\n    font-weight:600;\r\n  \tletter-spacing: 0.6px;\r\n  \tline-height: 16px;\r\n}\r\nimg{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.bodywrapper{\r\nwidth:95%;\r\nmargin:auto;\r\nmargin-top:20px;\r\ndisplay: flex;\r\nflex-direction:column;\r\nalign-items: center;\r\n\r\n}\r\n.picture img{\r\n  border-radius:50%;\r\nz-index: 1;\r\n  width:100px;\r\n  display: block;\r\n/*margin-top: -50px;*/\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.label, .details{\r\n  width:100%;\r\n}\r\n.label{\r\n  font-weight:bold;\r\n  margin-bottom: 10px;\r\n  color: #333;\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n}\r\n.details{\r\n  color: green;\r\n  \tfont-family: 'Hind', sans-serif;\r\n    font-size:14px;\r\n}\r\n.detailsblock input, .detailsblock select{\r\n  width: 282px;\r\n    border: none;\r\n    border-bottom: 2px solid green;\r\n    padding:0;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n.detailsblock input:focus{\r\noutline:0;\r\nfont-size:18px;\r\n}\r\n.filecenter{\r\n  margin-top:50px;\r\n  background-color: transparent;\r\n  padding-left: 50px;\r\n  z-index:2;\r\n  color:green;\r\n\r\n}\r\n.button{\r\n  outline: 0;\r\n  border:0;\r\n  border-radius: 20px;\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  padding-right:20px;\r\n  padding-left: 20px;\r\n  font-size: 14px;\r\n;\r\n}\r\n.submitdiv{\r\n  display:flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n@media only screen and (min-width:1000px){\r\n.profileheader{\r\noverflow-x:hidden;\r\n\r\n}\r\n.navlong{\r\n    width: 100%;\r\n}\r\n.bodywrapper{\r\n  flex-direction:row;\r\n  flex-wrap:wrap;\r\n  justify-content: space-between;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\nbox-shadow: none;\r\n\r\n}\r\n.label, .details{\r\n  width:220px;\r\n}\r\n.detailsblock input{\r\nwidth:245px;\r\n\r\n}\r\n\r\n\r\n  .input label{\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n    margin-left:0;\r\n    text-align: left;\r\n    width: 130px;\r\n  }\r\n  .loginwrapper{\r\n    margin-top: 64px;\r\n  }\r\n  .input{\r\n    margin-bottom: 30px;\r\n  }\r\n  .indexwrapper{\r\n    /* TO Change to flex start in reg form*/\r\n    align-items: flex-start;\r\n    /* */\r\n\r\n  }\r\n  .errormessage{\r\n    color:red;\r\n    display:inline;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjZWJvb2t1c2VyL2ZhY2Vib29rdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLElBQUk7O0VBRUosY0FBYztBQUNoQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQix5Q0FBeUM7OztBQUczQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhOztFQUViLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5Qjs7QUFFM0I7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7TUFDZixrQkFBa0I7VUFDZCxnQkFBZ0I7O0FBRTFCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlCQUF5QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0VBQ0UsaUJBQWlCO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLG1DQUFtQzs7QUFFdkM7QUFDQTtHQUNHLGFBQWE7R0FDYixpQkFBaUI7R0FDakIscUJBQXFCO0dBQ3JCLGVBQWU7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTs7Ozs7Ozs7RUFRRTtBQUNGO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7OztBQUd6QjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7O0FBRWI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIsc0JBQXNCO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQyxZQUFZO0FBQ1o7QUFDQSxzQkFBc0IsWUFBWTtJQUM5QixnQ0FBZ0M7O0FBRXBDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtHQUNmLGdDQUFnQztJQUMvQixlQUFlO0dBQ2hCLHFCQUFxQjtHQUNyQixpQkFBaUI7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsZUFBZTtBQUNmLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsbUJBQW1COztBQUVuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CLFVBQVU7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQixxQkFBcUI7O0FBRXJCO0FBQ0E7RUFDRSxXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7O0lBRTVDLHVCQUF1QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwrQkFBK0I7Q0FDaEMsaUJBQWlCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0dBQ1gsK0JBQStCO0lBQzlCLGNBQWM7QUFDbEI7QUFDQTtFQUNFLFlBQVk7SUFDVixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYztBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLFlBQVk7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBLFdBQVc7O0FBRVg7OztFQUdFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsSUFBSTs7RUFFTjtFQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZhY2Vib29rdXNlci9mYWNlYm9va3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcbi5pbmRleHdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYmcuanBnKTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBUTyBDaGFuZ2UgdG8gZmxleCBzdGFydCBpbiByZWcgZm9ybSovXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLyogKi9cclxuXHJcbiAgLyogdG8gY2hhbmdlICovXHJcbm1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2dpbndyYXBwZXJ7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICAvKmJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBib3gtc2hhZG93OiAtMnB4IDNweCA1cHggMnB4IHJnYigzIDIyIDM3KTtcclxuXHJcblxyXG59XHJcbi5ub2JvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuLmludmFsaWR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4uZXJyb3JtZXNzYWdle1xyXG4gIGNvbG9yOnJlZDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbi5pbnZhbGlke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ubG9naW5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbmJvZHl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOjBweCAyMHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG5cclxufVxyXG4uaW5wdXQgaW5wdXQsIC5pbnB1dCBzZWxlY3R7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3NlYXJjaGljb24ucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogIDFweCBzb2xpZCAjNzNlYzA1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogICM3M2VjMDU7XHJcbn1cclxuLmlucHV0IGlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZmFhNztcclxuXHJcbn1cclxuXHJcbi5pbnB1dCBsYWJlbHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2E2Y2ExNztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblxyXG59XHJcbi5zdWJtaXR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NGE0NTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxufVxyXG4ub3JyZWdpc3RlcntcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGNvbG9yOiAjYTZjYTE3O1xyXG59XHJcbi5vcnJlZ2lzdGVyIGF7XHJcbiAgY29sb3I6ICNhNmNhMTc7XHJcbn1cclxuLm5hdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxufVxyXG4ubmF2IHVse1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5uYXYgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzE2NGE0NTtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE2NGE0NTsqL1xyXG5cclxufVxyXG4ubmF2IHVsIGxpIGF7XHJcbiAgIGNvbG9yOiM3M2VjMTk7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udXBsb2FkcGljdHVyZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi8qLnVwbG9hZHBpY3R1cmUgYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjRhNDU7XHJcbiAgICBjb2xvcjogIzhkYjExYTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufSovXHJcbi5sb2FkaW5ne1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51cGxvYWRibHVycntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNlYzE5O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuXHJcbi5maWxsaW5ne1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnByb2ZpbGV3cmFwcGVye1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcbn1cclxuLnByb2ZpbGVoZWFkZXJ7XHJcbiAgd2lkdGg6OTUlO1xyXG4gIHBhZGRpbmc6MDtcclxuICBvdmVyZmxvdy14OnNjcm9sbDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjphdXRvO1xyXG5cclxufVxyXG4ubmF2bG9uZ3tcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5uYXZsb25nIHVse1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46MDtcclxufVxyXG4jdXBsb2FkcGFzIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLm5hdmxvbmcgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6LTFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwODAwMDtcclxuaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXZsb25nIHVsIGxpLmFjdGl2ZXtoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFjZTAxNztcclxuXHJcbn1cclxuLm5hdmxvbmcgdWwgbGkgYXtcclxuICBjb2xvcjogIzAwODAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBcdGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIFx0bGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIFx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5ib2R5d3JhcHBlcntcclxud2lkdGg6OTUlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5waWN0dXJlIGltZ3tcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuei1pbmRleDogMTtcclxuICB3aWR0aDoxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuLyptYXJnaW4tdG9wOiAtNTBweDsqL1xyXG5cclxufVxyXG4ucGljdHVyZSwgLmRldGFpbHNibG9ja3tcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5waWN0dXJle1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6MTIwcHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAzMHB4ICovXHJcbn1cclxuLmRldGFpbHNibG9ja3tcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggcmdiKDIyMiAyMjAgMjIwKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwsIC5kZXRhaWxze1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBcdGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0LCAuZGV0YWlsc2Jsb2NrIHNlbGVjdHtcclxuICB3aWR0aDogMjgycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0OmZvY3Vze1xyXG5vdXRsaW5lOjA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcbi5maWxlY2VudGVye1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgei1pbmRleDoyO1xyXG4gIGNvbG9yOmdyZWVuO1xyXG5cclxufVxyXG4uYnV0dG9ue1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuO1xyXG59XHJcbi5zdWJtaXRkaXZ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMDBweCl7XHJcbi5wcm9maWxlaGVhZGVye1xyXG5vdmVyZmxvdy14OmhpZGRlbjtcclxuXHJcbn1cclxuLm5hdmxvbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm9keXdyYXBwZXJ7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuLnBpY3R1cmUsIC5kZXRhaWxzYmxvY2t7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHNibG9ja3tcclxuYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuLmxhYmVsLCAuZGV0YWlsc3tcclxuICB3aWR0aDoyMjBweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0e1xyXG53aWR0aDoyNDVweDtcclxuXHJcbn1cclxuXHJcblxyXG4gIC5pbnB1dCBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuICAubG9naW53cmFwcGVye1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmluZGV4d3JhcHBlcntcclxuICAgIC8qIFRPIENoYW5nZSB0byBmbGV4IHN0YXJ0IGluIHJlZyBmb3JtKi9cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLyogKi9cclxuXHJcbiAgfVxyXG4gIC5lcnJvcm1lc3NhZ2V7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/facebookuser/facebookuser.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/facebookuser/facebookuser.component.ts ***!
    \********************************************************/

  /*! exports provided: FacebookuserComponent */

  /***/
  function srcAppFacebookuserFacebookuserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacebookuserComponent", function () {
      return FacebookuserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts"); // Firebase App (the core Firebase SDK) is always required and
    // must be listed before other Firebase SDKs


    function confirmpassword(length) {
      return function (c) {
        var password = c.get('password');
        var confirmpassword = c.get('confirmpassword');

        if (password.pristine || confirmpassword.pristine) {
          return null;
        }

        if (password.value !== confirmpassword.value) {
          console.log(true);
          return {
            'passwordmatch': true
          };
        }

        return null;
      };
    }

    var FacebookuserComponent = /*#__PURE__*/function () {
      function FacebookuserComponent(fb, http, router, route, loginserv) {
        _classCallCheck(this, FacebookuserComponent);

        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
        this.loginserv = loginserv;
        this.errormessage = {};
        this.locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];
        this.error = {
          required: "This field is required",
          email: "Please enter correct email",
          minlength: "Your password must be at least eight characters",
          passwordmatch: "Your password did not match"
        };
        this.user = this.loginserv.user;
        this.idCardUrl = "";
        this.passportUrl = "";
      }

      _createClass(FacebookuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userid = this.route.snapshot.paramMap.get("userid");
          this.username = this.route.snapshot.paramMap.get("username");
          this.useremail = this.route.snapshot.paramMap.get("useremail");
          this.userphotoURL = this.route.snapshot.paramMap.get("userphotourl");
          this.registerform = this.fb.group({
            fullname: [{
              value: this.username,
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyornot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerornot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [{
              value: this.useremail,
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          var fullname = this.registerform.get('fullname');
          this.valuechange('fullname', fullname);
          var address = this.registerform.get('address');
          this.valuechange('address', address);
          var phonenumber = this.registerform.get('phonenumber');
          this.valuechange('phonenumber', phonenumber);
          var companyornot = this.registerform.get('companyornot');
          this.valuechange('companyornot', companyornot);
          var customerornot = this.registerform.get('customerornot');
          this.valuechange('customerornot', customerornot);
          var email = this.registerform.get('email');
          this.valuechange('email', email);
          var location = this.registerform.get('location');
          this.valuechange('location', location);
        }
      }, {
        key: "valuechange",
        value: function valuechange(label, c) {
          var _this3 = this;

          c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this3.seterror(c, label);
          });
        }
      }, {
        key: "seterror",
        value: function seterror(c, label) {
          var _this4 = this;

          this.errormessage[label] = "";
          console.log(c);

          if ((c.dirty || c.touched) && c.errors) {
            var varr = Object.keys(c.errors).map(function (key) {
              return _this4.error[key];
            }).join("");
            console.log(varr);
            this.errormessage[label] = varr;
          }
        }
      }, {
        key: "uploadpicture",
        value: function uploadpicture() {}
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          if (this.registerform.valid) {
            if (this.registerform.dirty) {
              console.log(this.registerform.value); //this.idCardUrl = document.getElementById("uploadidcardmessage").innerHTML;

              this.passportUrl = this.userphotoURL;

              if (this.passportUrl
              /*|| this.idCardUrl*/
              ) {
                  var urls = {
                    /*idCardUrl: this.idCardUrl, */
                    passportUrl: this.userphotoURL,
                    email: this.useremail,
                    fullname: this.username,
                    userid: this.userid
                  };
                  var together = Object.assign({}, urls, this.registerform.value);
                  console.log(together);
                  this.http.post('http://localhost:3030/api/facebookregistration', together, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      "Content-Type": "application/json"
                    })
                  }).subscribe(function (data) {
                    alert(data.message);

                    _this5.user.getIdToken(
                    /* forceRefresh */
                    true).then(function (idToken) {
                      // Send token to your backend via HTTPS
                      // ...
                      console.log(idToken);

                      _this5.http.post('http://localhost:3030/api/setclaims', {
                        id: idToken
                      }, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                          "Content-Type": "application/json"
                        })
                      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                        return {
                          status: data.status
                        };
                      })).subscribe(function (data) {
                        console.log(data.status);

                        if (data.status == "success") {
                          console.log("admin");
                        }

                        if (data.status == "unregistered") {
                          console.log("it's unregistered");

                          _this5.router.navigate(['/facebookuser', {
                            userid: _this5.user.uid,
                            useremail: _this5.user.providerData[0].email,
                            username: _this5.user.providerData[0].displayName,
                            userphotourl: _this5.user.photoURL
                          }]);
                        }

                        _this5.user.getIdTokenResult(true).then(function (id) {
                          console.log(id.claims);

                          if (!!id.claims.admin) {
                            if (!_this5.redirecturl) {
                              _this5.redirecturl = "/admin";
                            }

                            _this5.router.navigate(["".concat(_this5.redirecturl)]);

                            _this5.admin = id.claims.admin;
                          }

                          if (id.claims.claims == "customer") {
                            if (!_this5.redirecturl) {
                              _this5.redirecturl = "/user/".concat(_this5.user.uid);
                            }

                            _this5.router.navigate(["".concat(_this5.redirecturl)]);

                            _this5.customer = true;
                          }

                          if (id.claims.claims == "collector") {
                            if (!_this5.redirecturl) {
                              _this5.redirecturl = "/collector/".concat(_this5.user.uid);
                            }

                            _this5.router.navigate(["".concat(_this5.redirecturl)]);

                            _this5.collector = true;
                          }

                          _this5.user.getIdToken(
                          /* forceRefresh */
                          true).then(function (idTokn) {
                            _this5.toUseIdToken = idTokn;
                          })["catch"](function (e) {
                            console.log(e);
                          });
                        });
                      });
                    })["catch"](function (error) {// Handle error
                    });
                  }, function (error) {
                    alert(error.error);
                  });
                } else {
                alert("You need to upload passport and i.d. card ");
              }
            }
          }
        }
      }]);

      return FacebookuserComponent;
    }();

    FacebookuserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    FacebookuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facebookuser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/facebookuser/facebookuser.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facebookuser.component.css */
      "./src/app/facebookuser/facebookuser.component.css"))["default"]]
    })], FacebookuserComponent);
    /***/
  },

  /***/
  "./src/app/index/index.component.css":
  /*!*******************************************!*\
    !*** ./src/app/index/index.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndexIndexComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n  margin: 0;\r\n  padding: 0;\r\n  outline:0;\r\n}\r\n.indexwrapper{\r\n  background-image: url(/assets/bg.jpg);\r\n  margin-top: 0px;\r\n  width:100vw;\r\n  font-family: \"Dosis\", sans-serif;\r\n  margin: 0;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  justify-content: center;\r\n  /* TO Change to flex start in reg form*/\r\n  align-items: flex-start;\r\n  /* */\r\n\r\n  /* to change */\r\nmin-height: 100vh;\r\noverflow: hidden;\r\n}\r\n.loginwrapper{\r\n  margin-top: 64px;\r\n  /*border: 2px solid green;*/\r\n  background-color: transparent;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  box-shadow: -2px 3px 5px 2px rgb(3 22 37);\r\n\r\n\r\n}\r\n.noborder {\r\n    border-bottom: 2px solid white;\r\n}\r\n.invalid{\r\n  border-bottom: 2px solid red;\r\n}\r\n.errormessage{\r\n  color:red;\r\n  display:block;\r\n}\r\n.invalid{\r\n  border: 1px solid red;\r\n}\r\n.loginheader{\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.loginbody{\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  margin-top: 15px;\r\n  padding:0px 20px;\r\n}\r\n.input{\r\n  margin-bottom: 19px;\r\n\r\n}\r\n.input input, .input select{\r\n  width: 200px;\r\n  margin-left: 15px;\r\n  font-size: 16px;\r\n  padding: 7px;\r\n  padding-left: 50px;\r\n  background-image: url(/assets/searchicon.png);\r\n  background-position: 10px;\r\n  background-size: 20px;\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  border:  1px solid #73ec05;\r\n  border-radius: 20px;\r\n  font-family: \"Dosis\", sans-serif;\r\n  color:  #73ec05;\r\n}\r\n.input input:focus{\r\n  outline: 0;\r\n  border: 1px solid #c7faa7;\r\n\r\n}\r\n.input label{\r\n  margin-right: 20px;\r\n    color: #a6ca17;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n    margin-left: 15px;\r\n      text-align: center;\r\n          font-weight:bold;\r\n\r\n}\r\n.submit{\r\n  background-image: url();\r\n  width:100px;\r\n  background-color: #164a45;\r\n    border: none;\r\n    padding-left: 5px;\r\n\r\n}\r\n.orregister{\r\n  margin-left: 50px;\r\n    color: #a6ca17;\r\n}\r\n.orregister a{\r\n  color: #a6ca17;\r\n}\r\n.nav{\r\n  position: absolute;\r\n  top:0px;\r\n  left: 0px;\r\n  background-color: transparent;\r\n  z-index: 100;\r\n\r\n}\r\n.nav ul{\r\n  margin:0px;\r\n  padding: 0px;\r\n}\r\n.nav ul li{\r\n  display: inline-block;\r\n    /* margin-left: 30px; */\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    padding-top: 0;\r\n    border-right: 2px solid #164a45;\r\n    /* border-left: 2px solid #164a45;*/\r\n\r\n}\r\n.nav ul li a{\r\n   color:#73ec19;\r\n   font-weight: bold;\r\n   text-decoration: none;\r\n   font-size: 18px;\r\n}\r\n.uploadpicture{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n/*.uploadpicture button{\r\n  background-color: #164a45;\r\n    color: #8db11a;\r\n    margin-top: 10px;\r\n    outline: 0;\r\n    border: 0;\r\n    border-radius: 30px;\r\n    padding: 9px;\r\n}*/\r\n.loading{\r\n  display: none;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n.uploadblurr{\r\n  background-color: #73ec19;\r\n  opacity: 0.8;\r\n\r\n}\r\n.filling{\r\n  height: 20%;\r\n  background-color: blue;\r\n}\r\n.profilewrapper{\r\n  margin: 0;\r\n  margin-top: 60px;\r\n  width: 100%;\r\n  background-color: white;\r\n\r\n\r\n}\r\n.profileheader{\r\n  width:95%;\r\n  padding:0;\r\n  overflow-x:scroll;\r\n  box-sizing: border-box;\r\n  margin:auto;\r\n\r\n}\r\n.navlong{\r\n    width: 1000px;\r\n    box-sizing: border-box;\r\n    border-bottom: 3px solid green;\r\n    height:40px;\r\n    box-sizing: border-box;\r\n}\r\n.navlong ul{\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  list-style-type: none;\r\n  margin:0;\r\n}\r\n#uploadpas {\r\n    border-bottom: none;\r\n}\r\n.navlong ul li{\r\n  display: inline-block;\r\nbox-sizing: border-box;\r\n  margin-top:-1px;\r\n  margin-right: 50px;\r\n  border:none;\r\n  border-bottom:1px solid #008000;\r\nheight: 40px;\r\n}\r\n.navlong ul li.active{height: 40px;\r\n    border-bottom: 3px solid #1ce017;\r\n\r\n}\r\n.navlong ul li a{\r\n  color: #008000;\r\n  text-decoration: none;\r\n  font-weight:bold;\r\n  \tfont-family: 'Dosis', sans-serif;\r\n    font-weight:600;\r\n  \tletter-spacing: 0.6px;\r\n  \tline-height: 16px;\r\n}\r\nimg{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.bodywrapper{\r\nwidth:95%;\r\nmargin:auto;\r\nmargin-top:20px;\r\ndisplay: flex;\r\nflex-direction:column;\r\nalign-items: center;\r\n\r\n}\r\n.picture img{\r\n  border-radius:50%;\r\nz-index: 1;\r\n  width:100px;\r\n  display: block;\r\n/*margin-top: -50px;*/\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.label, .details{\r\n  width:100%;\r\n}\r\n.label{\r\n  font-weight:bold;\r\n  margin-bottom: 10px;\r\n  color: #333;\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n}\r\n.details{\r\n  color: green;\r\n  \tfont-family: 'Hind', sans-serif;\r\n    font-size:14px;\r\n}\r\n.detailsblock input, .detailsblock select{\r\n  width: 282px;\r\n    border: none;\r\n    border-bottom: 2px solid green;\r\n    padding:0;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n.detailsblock input:focus{\r\noutline:0;\r\nfont-size:18px;\r\n}\r\n.filecenter{\r\n  margin-top:50px;\r\n  background-color: transparent;\r\n  padding-left: 50px;\r\n  z-index:2;\r\n  color:green;\r\n\r\n}\r\n.button{\r\n  outline: 0;\r\n  border:0;\r\n  border-radius: 20px;\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  padding-right:20px;\r\n  padding-left: 20px;\r\n  font-size: 14px;\r\n;\r\n}\r\n.submitdiv{\r\n  display:flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n@media only screen and (min-width:1000px){\r\n.profileheader{\r\noverflow-x:hidden;\r\n\r\n}\r\n.navlong{\r\n    width: 100%;\r\n}\r\n.bodywrapper{\r\n  flex-direction:row;\r\n  flex-wrap:wrap;\r\n  justify-content: space-between;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\nbox-shadow: none;\r\n\r\n}\r\n.label, .details{\r\n  width:220px;\r\n}\r\n.detailsblock input{\r\nwidth:245px;\r\n\r\n}\r\n\r\n\r\n  .input label{\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n    margin-left:0;\r\n    text-align: left;\r\n    width: 130px;\r\n  }\r\n  .loginwrapper{\r\n    margin-top: 64px;\r\n  }\r\n  .input{\r\n    margin-bottom: 30px;\r\n  }\r\n  .indexwrapper{\r\n    /* TO Change to flex start in reg form*/\r\n    align-items: flex-start;\r\n    /* */\r\n\r\n  }\r\n  .errormessage{\r\n    color:red;\r\n    display:inline;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixJQUFJOztFQUVKLGNBQWM7QUFDaEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIseUNBQXlDOzs7QUFHM0M7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTs7RUFFYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7O0FBRTNCO0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO01BQ2Ysa0JBQWtCO1VBQ2QsZ0JBQWdCOztBQUUxQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx5QkFBeUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjs7QUFFckI7QUFDQTtFQUNFLGlCQUFpQjtJQUNmLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULDZCQUE2QjtFQUM3QixZQUFZOztBQUVkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixtQ0FBbUM7O0FBRXZDO0FBQ0E7R0FDRyxhQUFhO0dBQ2IsaUJBQWlCO0dBQ2pCLHFCQUFxQjtHQUNyQixlQUFlO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7Ozs7Ozs7O0VBUUU7QUFDRjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTs7QUFFZDtBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCOzs7QUFHekI7QUFDQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXOztBQUViO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0FBQ1Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCLHNCQUFzQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwrQkFBK0I7QUFDakMsWUFBWTtBQUNaO0FBQ0Esc0JBQXNCLFlBQVk7SUFDOUIsZ0NBQWdDOztBQUVwQztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7R0FDZixnQ0FBZ0M7SUFDL0IsZUFBZTtHQUNoQixxQkFBcUI7R0FDckIsaUJBQWlCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsV0FBVztBQUNYLGVBQWU7QUFDZixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLG1CQUFtQjs7QUFFbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQixVQUFVO0VBQ1IsV0FBVztFQUNYLGNBQWM7QUFDaEIscUJBQXFCOztBQUVyQjtBQUNBO0VBQ0UsV0FBVzs7RUFFWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsNENBQTRDOztJQUU1Qyx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsK0JBQStCO0NBQ2hDLGlCQUFpQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtHQUNYLCtCQUErQjtJQUM5QixjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0lBQ1YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNULGNBQWM7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7O0FBRWI7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7O0FBRWhDO0FBQ0E7RUFDRSxZQUFZO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7QUFDQSxXQUFXOztBQUVYOzs7RUFHRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLElBQUk7O0VBRU47RUFDQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuLmluZGV4d3JhcHBlcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iZy5qcGcpO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB3aWR0aDoxMDB2dztcclxuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIFRPIENoYW5nZSB0byBmbGV4IHN0YXJ0IGluIHJlZyBmb3JtKi9cclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAvKiAqL1xyXG5cclxuICAvKiB0byBjaGFuZ2UgKi9cclxubWluLWhlaWdodDogMTAwdmg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvZ2lud3JhcHBlcntcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIC8qYm9yZGVyOiAycHggc29saWQgZ3JlZW47Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJveC1zaGFkb3c6IC0ycHggM3B4IDVweCAycHggcmdiKDMgMjIgMzcpO1xyXG5cclxuXHJcbn1cclxuLm5vYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uaW52YWxpZHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xyXG59XHJcbi5lcnJvcm1lc3NhZ2V7XHJcbiAgY29sb3I6cmVkO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLmludmFsaWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbi5sb2dpbmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luYm9keXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6MHB4IDIwcHg7XHJcbn1cclxuLmlucHV0e1xyXG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcblxyXG59XHJcbi5pbnB1dCBpbnB1dCwgLmlucHV0IHNlbGVjdHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvc2VhcmNoaWNvbi5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAgMXB4IHNvbGlkICM3M2VjMDU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAgIzczZWMwNTtcclxufVxyXG4uaW5wdXQgaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzdmYWE3O1xyXG5cclxufVxyXG5cclxuLmlucHV0IGxhYmVse1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjYTZjYTE3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHJcbn1cclxuLnN1Ym1pdHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcclxuICB3aWR0aDoxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY0YTQ1O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG59XHJcbi5vcnJlZ2lzdGVye1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNhNmNhMTc7XHJcbn1cclxuLm9ycmVnaXN0ZXIgYXtcclxuICBjb2xvcjogI2E2Y2ExNztcclxufVxyXG4ubmF2e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG59XHJcbi5uYXYgdWx7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLm5hdiB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMzBweDsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTY0YTQ1O1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTY0YTQ1OyovXHJcblxyXG59XHJcbi5uYXYgdWwgbGkgYXtcclxuICAgY29sb3I6IzczZWMxOTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi51cGxvYWRwaWN0dXJle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLyoudXBsb2FkcGljdHVyZSBidXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NGE0NTtcclxuICAgIGNvbG9yOiAjOGRiMTFhO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59Ki9cclxuLmxvYWRpbmd7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVwbG9hZGJsdXJye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3M2VjMTk7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5cclxufVxyXG5cclxuLmZpbGxpbmd7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4ucHJvZmlsZXdyYXBwZXJ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG5cclxufVxyXG4ucHJvZmlsZWhlYWRlcntcclxuICB3aWR0aDo5NSU7XHJcbiAgcGFkZGluZzowO1xyXG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOmF1dG87XHJcblxyXG59XHJcbi5uYXZsb25ne1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm5hdmxvbmcgdWx7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowO1xyXG59XHJcbiN1cGxvYWRwYXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubmF2bG9uZyB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDotMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDA4MDAwO1xyXG5oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLm5hdmxvbmcgdWwgbGkuYWN0aXZle2hlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMWNlMDE3O1xyXG5cclxufVxyXG4ubmF2bG9uZyB1bCBsaSBhe1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIFx0Zm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgXHRsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgXHRsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmJvZHl3cmFwcGVye1xyXG53aWR0aDo5NSU7XHJcbm1hcmdpbjphdXRvO1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLnBpY3R1cmUgaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG56LWluZGV4OiAxO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4vKm1hcmdpbi10b3A6IC01MHB4OyovXHJcblxyXG59XHJcbi5waWN0dXJlLCAuZGV0YWlsc2Jsb2Nre1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLnBpY3R1cmV7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDoxMjBweDtcclxuICAvKm1hcmdpbi1ib3R0b206IDMwcHggKi9cclxufVxyXG4uZGV0YWlsc2Jsb2Nre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2IoMjIyIDIyMCAyMjApO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sYWJlbCwgLmRldGFpbHN7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4ubGFiZWx7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcblx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIFx0Zm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi5kZXRhaWxzYmxvY2sgaW5wdXQsIC5kZXRhaWxzYmxvY2sgc2VsZWN0e1xyXG4gIHdpZHRoOiAyODJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5kZXRhaWxzYmxvY2sgaW5wdXQ6Zm9jdXN7XHJcbm91dGxpbmU6MDtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuLmZpbGVjZW50ZXJ7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICB6LWluZGV4OjI7XHJcbiAgY29sb3I6Z3JlZW47XHJcblxyXG59XHJcbi5idXR0b257XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG47XHJcbn1cclxuLnN1Ym1pdGRpdntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4KXtcclxuLnByb2ZpbGVoZWFkZXJ7XHJcbm92ZXJmbG93LXg6aGlkZGVuO1xyXG5cclxufVxyXG4ubmF2bG9uZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib2R5d3JhcHBlcntcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG4ucGljdHVyZSwgLmRldGFpbHNibG9ja3tcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6MTIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZGV0YWlsc2Jsb2Nre1xyXG5ib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG4ubGFiZWwsIC5kZXRhaWxze1xyXG4gIHdpZHRoOjIyMHB4O1xyXG59XHJcbi5kZXRhaWxzYmxvY2sgaW5wdXR7XHJcbndpZHRoOjI0NXB4O1xyXG5cclxufVxyXG5cclxuXHJcbiAgLmlucHV0IGxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbndyYXBwZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIH1cclxuICAuaW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuaW5kZXh3cmFwcGVye1xyXG4gICAgLyogVE8gQ2hhbmdlIHRvIGZsZXggc3RhcnQgaW4gcmVnIGZvcm0qL1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAvKiAqL1xyXG5cclxuICB9XHJcbiAgLmVycm9ybWVzc2FnZXtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/index/index.component.ts":
  /*!******************************************!*\
    !*** ./src/app/index/index.component.ts ***!
    \******************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // Firebase App (the core Firebase SDK) is always required and
    // must be listed before other Firebase SDKs
    // Add the Firebase services that you want to use


    var firebaseConfig = {
      apiKey: "AIzaSyCxO-zbB4Kxr-xysON9p0WSZyuxIgsnOdw",
      authDomain: "sdgdisposify.firebaseapp.com",
      databaseURL: "https://sdgdisposify.firebaseio.com",
      projectId: "sdgdisposify",
      storageBucket: "sdgdisposify.appspot.com",
      messagingSenderId: "467862733031",
      appId: "1:467862733031:web:58d66e84047d1339606242",
      measurementId: "G-C7P2DGENT2"
    }; // Initialize Firebase

    firebase_app__WEBPACK_IMPORTED_MODULE_5__["initializeApp"](firebaseConfig);

    function confirmpassword(length) {
      return function (c) {
        var password = c.get('password');
        var confirmpassword = c.get('confirmpassword');

        if (password.pristine || confirmpassword.pristine) {
          return null;
        }

        if (password.value !== confirmpassword.value) {
          console.log(true);
          return {
            'passwordmatch': true
          };
        }

        return null;
      };
    }

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(fb, http) {
        _classCallCheck(this, IndexComponent);

        this.fb = fb;
        this.http = http;
        this.errormessage = {};
        this.locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];
        this.error = {
          required: "This field is required",
          email: "Please enter correct email",
          minlength: "Your password must be at least eight characters",
          passwordmatch: "Your password did not match"
        };
        this.idCardUrl = "";
        this.passportUrl = "";
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerform = this.fb.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyornot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerornot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwordblock: this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
              confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, {
              validator: confirmpassword(1)
            }),
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          var fullname = this.registerform.get('fullname');
          this.valuechange('fullname', fullname);
          var address = this.registerform.get('address');
          this.valuechange('address', address);
          var phonenumber = this.registerform.get('phonenumber');
          this.valuechange('phonenumber', phonenumber);
          var companyornot = this.registerform.get('companyornot');
          this.valuechange('companyornot', companyornot);
          var customerornot = this.registerform.get('customerornot');
          this.valuechange('customerornot', customerornot);
          var email = this.registerform.get('email');
          this.valuechange('email', email);
          var password = this.registerform.get('passwordblock.password');
          this.valuechange('password', password);
          var passwordblock = this.registerform.get("passwordblock");
          this.valuechange("passwordblock", passwordblock);
          var location = this.registerform.get('location');
          this.valuechange('location', location);
        }
      }, {
        key: "valuechange",
        value: function valuechange(label, c) {
          var _this6 = this;

          c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this6.seterror(c, label);
          });
        }
      }, {
        key: "seterror",
        value: function seterror(c, label) {
          var _this7 = this;

          this.errormessage[label] = "";
          console.log(c);

          if ((c.dirty || c.touched) && c.errors) {
            var varr = Object.keys(c.errors).map(function (key) {
              return _this7.error[key];
            }).join("");
            console.log(varr);
            this.errormessage[label] = varr;
          }
        }
      }, {
        key: "uploadpicture",
        value: function uploadpicture() {}
      }, {
        key: "save",
        value: function save() {
          if (this.registerform.valid) {
            if (this.registerform.dirty) {
              console.log(this.registerform.value); //this.idCardUrl = document.getElementById("uploadidcardmessage").innerHTML;

              this.passportUrl = document.getElementById("uploadpassportmessage").innerHTML;

              if (this.passportUrl
              /*|| this.idCardUrl*/
              ) {
                  var urls = {
                    /*idCardUrl: this.idCardUrl, */
                    passportUrl: this.passportUrl
                  };
                  var together = Object.assign({}, urls, this.registerform.value);
                  console.log(together);
                  this.http.post('http://localhost:3030/api/registration', together, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      "Content-Type": "application/json"
                    })
                  }).subscribe(function (data) {
                    alert(data.message);
                  }, function (error) {
                    alert(error.error);
                  });
                } else {
                alert("You need to upload passport and i.d. card ");
              }
            }
          }
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.css */
      "./src/app/index/index.component.css"))["default"]]
    })], IndexComponent);
    /***/
  },

  /***/
  "./src/app/login.service.ts":
  /*!**********************************!*\
    !*** ./src/app/login.service.ts ***!
    \**********************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // Add the Firebase services that you want to use


    var LoginService = /*#__PURE__*/function () {
      function LoginService(http, router) {
        var _this8 = this;

        _classCallCheck(this, LoginService);

        this.http = http;
        this.router = router;
        this.user = false;
        this.admin = false;
        this.vendor = false;
        this.collector = false;
        this.customer = false;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
          console.log(user);

          if (user) {
            _this8.user = user;

            if (!user.emailVerified && user.providerData[0].providerId !== "facebook.com") {
              var uid = user.uid;
              console.log(uid);
              user.sendEmailVerification().then(function () {
                // Email sent.
                this.signinerrormessage = "Please verify your email first, we have sent a verification";
              })["catch"](function (error) {
                // An error happened.
                console.log(error);
              });
            } else {
              _this8.user.getIdToken(
              /* forceRefresh */
              true).then(function (idToken) {
                // Send token to your backend via HTTPS
                // ...
                console.log(idToken);

                _this8.http.post('http://localhost:3030/api/setclaims', {
                  id: idToken
                }, {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json"
                  })
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                  return {
                    status: data.status
                  };
                })).subscribe(function (data) {
                  console.log(data.status);

                  if (data.status == "success") {
                    console.log("admin");
                  }

                  if (data.status == "unregistered") {
                    console.log("it's unregistered");

                    _this8.router.navigate(['/facebookuser', {
                      userid: _this8.user.uid,
                      useremail: _this8.user.providerData[0].email,
                      username: _this8.user.providerData[0].displayName,
                      userphotourl: _this8.user.photoURL
                    }]);
                  }

                  _this8.user.getIdTokenResult(true).then(function (id) {
                    console.log(id.claims);

                    if (!!id.claims.admin) {
                      if (!_this8.redirecturl) {
                        _this8.redirecturl = "/admin";
                      }

                      _this8.router.navigate(["".concat(_this8.redirecturl)]);

                      _this8.admin = id.claims.admin;
                    }

                    if (id.claims.claims == "customer") {
                      if (!_this8.redirecturl) {
                        _this8.redirecturl = "/user/".concat(_this8.user.uid);
                      }

                      _this8.router.navigate(["".concat(_this8.redirecturl)]);

                      _this8.customer = true;
                    }

                    if (id.claims.claims == "collector") {
                      if (!_this8.redirecturl) {
                        _this8.redirecturl = "/collector/".concat(_this8.user.uid);
                      }

                      _this8.router.navigate(["".concat(_this8.redirecturl)]);

                      _this8.collector = true;
                    }

                    _this8.user.getIdToken(
                    /* forceRefresh */
                    true).then(function (idTokn) {
                      _this8.toUseIdToken = idTokn;
                    })["catch"](function (e) {
                      console.log(e);
                    });
                  });

                  console.log(_this8.user);
                });
              })["catch"](function (error) {// Handle error
              });
            }
          } else {
            _this8.user = false;

            _this8.router.navigate(['/login']);
          }
        });
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(hi) {
          var _this9 = this;

          console.log("in login service");
          firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword(hi.email, hi.password).then(function () {
            if (_this9.user && !_this9.user.emailVerified) {
              var uid = _this9.user.uid;
              console.log(uid);

              _this9.user.sendEmailVerification().then(function (jj) {
                // Email sent.
                _this9.signinerrormessage = "Please verify your email first, we have sent a verification";
                alert(_this9.signinerrormessage);
              })["catch"](function (error) {// An error happen.
              });
            }

            if (_this9.user && _this9.user.emailVerified) {
              _this9.user.getIdToken(
              /* forceRefresh */
              true).then(function (idToken) {
                // Send token to your backend via HTTPS
                // ...
                console.log(idToken);

                _this9.http.post('http://localhost:3030/api/setclaims', {
                  id: idToken
                }, {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json"
                  })
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                  return {
                    status: data.status
                  };
                })).subscribe(function (data) {
                  console.log(data.status);

                  if (data.status == "success") {
                    console.log("admin");
                  }

                  _this9.user.getIdTokenResult(true).then(function (id) {
                    console.log(id.claims);

                    if (!!id.claims.admin) {
                      if (!_this9.redirecturl) {
                        _this9.redirecturl = "/admin";
                      }

                      _this9.router.navigate(["".concat(_this9.redirecturl)]);

                      _this9.admin = id.claims.admin;
                    }

                    if (id.claims.claims == "customer") {
                      if (!_this9.redirecturl) {
                        _this9.redirecturl = "/user/".concat(_this9.user.uid);
                      }

                      _this9.router.navigate(["".concat(_this9.redirecturl)]);

                      _this9.customer = true;
                    }

                    if (id.claims.claims == "collector") {
                      if (!_this9.redirecturl) {
                        _this9.redirecturl = "/collector/".concat(_this9.user.uid);
                      }

                      _this9.router.navigate(["".concat(_this9.redirecturl)]);

                      _this9.collector = true;
                    }

                    _this9.user.getIdToken(
                    /* forceRefresh */
                    true).then(function (idTokn) {
                      _this9.toUseIdToken = idTokn;
                    })["catch"](function (e) {
                      console.log(e);
                    });
                  });

                  console.log(_this9.user);
                });
              })["catch"](function (error) {// Handle error
              });
            }
          })["catch"](function (error) {
            switch (error.code) {
              case "auth/invalid-email":
                _this9.signinerrormessage = "the email entered is not valid";
                break;

              case "auth/user-not-found":
                _this9.signinerrormessage = "there is no user corresponding to the given email.";
                break;

              case "auth/wrong-password":
                _this9.signinerrormessage = "The password is invalid for the given email";
                break;

              default:
                _this9.signinerrormessage = "An error ocurred";
                break;
            }

            alert(_this9.signinerrormessage);
            return _this9.signinerrormessage;
          });
        }
      }, {
        key: "signout",
        value: function signout() {
          (function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().signOut();

                    case 2:
                      this.router.navigate(['/login']);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })();
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n  margin: 0;\r\n  padding: 0;\r\n  outline:0;\r\n}\r\n.facebookbuttton{\r\n  outline: 0;\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 15px 30px;\r\n    color: green;\r\n    font-family: 'Hind', sans-serif;\r\n    background-color: white;\r\n    border: none;\r\n}\r\n.facebooklogin{\r\n\r\n    margin-top: 20px;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.small{\r\n  display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 50px;\r\n    justify-content: flex-start;\r\n}\r\n.disposify{\r\n  font-family: 'Dosis', sans-serif;\r\n  font-size: 2em;\r\n  color: green;\r\n  margin-bottom: 20px;\r\n  font-weight: bold;\r\n}\r\n.small .seamless{\r\n  font-size: 14px;\r\n  font-family: 'Dosis', sans-serif;\r\n color: #1ce017;\r\n font-style: oblique;\r\n font-style: oblique;\r\n    margin-bottom: 21px;\r\n    letter-spacing: 0.8px;\r\n    font-weight: bold;\r\ntext-align: center;\r\n}\r\n.wrapper{\r\n  padding: 30px;\r\n  box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n}\r\n.loginheader{\r\n  border-top: 2px solid green;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.loginup{\r\n  font-family: 'Dosis', sans-serif;\r\n    color: green;\r\n    font-size: 16px;\r\n    margin-top: -14px;\r\n    width: 65px;\r\n    height: 30px;\r\n    background-color: white;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    letter-spacing: 0.7px;\r\n}\r\n.inputlabel, .input{\r\n  margin-bottom: 15px;\r\n  display: block;\r\n\r\n}\r\n.inputlabel{\r\n\r\n  display: flex;\r\n  font-size: 16px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n    font-family: 'Dosis', sans-serif;\r\n    font-weight:bold;\r\n}\r\n.input{\r\n  padding: 8px;\r\n    font-size: 16px;\r\n    border-radius: 3PX;\r\n    width: 261px;\r\n    border: 1px solid #babfc3;\r\n      font-family: 'Dosis', sans-serif;\r\n}\r\n.errormessage{\r\n  color:red;\r\n}\r\n.invalid{\r\n  border: 2px solid red;\r\n}\r\n.collecting{\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.input:focus{\r\n  outline:0;\r\n  border: none;\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n}\r\n.inputdiv{\r\n  display:flex;\r\n  flex-direction: column;\r\n\r\n}\r\n.submitarea{\r\ndisplay: flex;\r\njustify-content: flex-start;\r\nmargin-left: 0px;\r\nmargin-bottom: 10px;\r\n\r\n}\r\n.nodisplay{\r\n  display:none;\r\n}\r\n.display{\r\n  display: block;\r\n}\r\n.boss{\r\n  position: fixed;\r\n    left: 10px;\r\n    top: 0px;\r\n    z-index: 100000000000;\r\n    /* width: -webkit-max-content; */\r\n  padding:10px;\r\n\r\n    width: 70vw;\r\n    color: green;\r\n    height: 40px;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n}\r\n.loading{\r\n  display: flex;\r\n  position: fixed;\r\n  top:0px;\r\n  left:0px;\r\n  width:100vw;\r\n  height:100vh;\r\n  background-color: #eeeeee;\r\n  opacity:0.5;\r\nalign-items:center;\r\njustify-content: center;\r\nz-index: 10000px;\r\n}\r\n.rotate{\r\n  width:35px;\r\n  height:35px;\r\n  border-radius: 50%;\r\n  border:2px dotted blue;\r\n  border-top:3px dotted blue;\r\n\r\n  border-bottom: 1px dotted blue;\r\n}\r\n.nav{\r\n  position: fixed;\r\n  top:0px;\r\n  left: 0px;\r\n  background-color: transparent;\r\n  z-index: 100;\r\n\r\n}\r\n.nav ul{\r\n  margin:0px;\r\n  padding: 0px;\r\n}\r\n.nav ul li{\r\n  display: inline-block;\r\n    /* margin-left: 30px; */\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    padding-top: 0;\r\n    border-right: 2px solid #164a45;\r\n    /* border-left: 2px solid #164a45;*/\r\n\r\n}\r\n.nav ul li a{\r\n   color:#12de0e;\r\n   font-weight: bold;\r\n   text-decoration: none;\r\n   font-size: 18px;\r\n}\r\n.button{\r\n  outline: 0;\r\n  border:0;\r\n  border-radius: 20px;\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  padding-right:20px;\r\n  padding-left: 20px;\r\n  font-size: 14px;\r\n;\r\n}\r\n.submitdiv{\r\n  display:flex;\r\n  justify-content: center;\r\n}\r\n@media only screen and (min-width:1000px ){\r\n  .navwrapper{\r\n    width: inherit;\r\n  }\r\n  .inputlabel, .input{\r\n    float:left;\r\n    margin-right:20px;\r\n  }\r\n  .inputdiv{\r\n  margin-bottom: 20px;\r\n  clear:both;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  }\r\n  .input{\r\n    width: 400px;\r\n  }\r\n  .submitarea{\r\n    margin-left: 150px;\r\n  }\r\n  .inputlabel{\r\n    width: 200px;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0lBQ1IsNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9CO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0NBQ2pDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsbUJBQW1CO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0Qzs7QUFFOUM7QUFDQTtFQUNFLDJCQUEyQjs7SUFFekIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0VBQ0UsZ0NBQWdDO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYzs7QUFFaEI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixtQkFBbUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtNQUN2QixnQ0FBZ0M7QUFDdEM7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtJQUNWLDRDQUE0QztBQUNoRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLG1CQUFtQjs7QUFFbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtJQUNiLFVBQVU7SUFDVixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGdDQUFnQztFQUNsQyxZQUFZOztJQUVWLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2Isa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwwQkFBMEI7O0VBRTFCLDhCQUE4QjtBQUNoQztBQUdBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLG1DQUFtQzs7QUFFdkM7QUFDQTtHQUNHLGFBQWE7R0FDYixpQkFBaUI7R0FDakIscUJBQXFCO0dBQ3JCLGVBQWU7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtFQUNBO0VBQ0EsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcbi5mYWNlYm9va2J1dHR0b257XHJcbiAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2IoMjIyIDIyMCAyMjApO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZmFjZWJvb2tsb2dpbntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNtYWxse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmRpc3Bvc2lmeXtcclxuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc21hbGwgLnNlYW1sZXNze1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuIGNvbG9yOiAjMWNlMDE3O1xyXG4gZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud3JhcHBlcntcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2IoMjIyIDIyMCAyMjApO1xyXG5cclxufVxyXG4ubG9naW5oZWFkZXJ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZWVuO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubG9naW51cHtcclxuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG59XHJcbi5pbnB1dGxhYmVsLCAuaW5wdXR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuLmlucHV0bGFiZWx7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5pbnB1dHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzUFg7XHJcbiAgICB3aWR0aDogMjYxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFiZmMzO1xyXG4gICAgICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZXJyb3JtZXNzYWdle1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG4uaW52YWxpZHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLmNvbGxlY3Rpbmd7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5pbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOjA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4IHJnYigyMjIgMjIwIDIyMCk7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxufVxyXG4uc3VibWl0YXJlYXtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5tYXJnaW4tbGVmdDogMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG4ubm9kaXNwbGF5e1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZGlzcGxheXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYm9zc3tcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwMDA7XHJcbiAgICAvKiB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDsgKi9cclxuICBwYWRkaW5nOjEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2IoMjIyIDIyMCAyMjApO1xyXG59XHJcbi5sb2FkaW5ne1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowcHg7XHJcbiAgbGVmdDowcHg7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgb3BhY2l0eTowLjU7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbnotaW5kZXg6IDEwMDAwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGV7XHJcbiAgd2lkdGg6MzVweDtcclxuICBoZWlnaHQ6MzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOjJweCBkb3R0ZWQgYmx1ZTtcclxuICBib3JkZXItdG9wOjNweCBkb3R0ZWQgYmx1ZTtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xyXG59XHJcblxyXG5cclxuLm5hdntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxufVxyXG4ubmF2IHVse1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5uYXYgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzE2NGE0NTtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE2NGE0NTsqL1xyXG5cclxufVxyXG4ubmF2IHVsIGxpIGF7XHJcbiAgIGNvbG9yOiMxMmRlMGU7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYnV0dG9ue1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuO1xyXG59XHJcbi5zdWJtaXRkaXZ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHggKXtcclxuICAubmF2d3JhcHBlcntcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxuICAuaW5wdXRsYWJlbCwgLmlucHV0e1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gIH1cclxuICAuaW5wdXRkaXZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjbGVhcjpib3RoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAuc3VibWl0YXJlYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICB9XHJcbiAgLmlucHV0bGFiZWx7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _facebooklogin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../facebooklogin.service */
    "./src/app/facebooklogin.service.ts"); // Firebase App (the core Firebase SDK) is always required and
    // must be listed before other Firebase SDKs


    function confirmpassword(length) {
      return function (c) {
        var password = c.get('password');
        var confirmpassword = c.get('confirmpassword');

        if (password.pristine || confirmpassword.pristine) {
          return null;
        }

        if (password.value !== confirmpassword.value) {
          console.log(true);
          return {
            'passwordmatch': true
          };
        }

        return null;
      };
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, http, loginservice, faceb) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.http = http;
        this.loginservice = loginservice;
        this.faceb = faceb;
        this.errormessage = {};
        this.error = {
          required: "This field is required",
          email: "Please enter correct email",
          minlength: "Your password must be at least eight characters",
          passwordmatch: "Your password did not match"
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginform = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          });
          var password = this.loginform.get('password');
          this.valuechange('password', password);
          var email = this.loginform.get('email');
          this.valuechange('email', email);
        }
      }, {
        key: "testlogin",
        value: function testlogin() {//this.loginservice.testlogin();
        }
      }, {
        key: "valuechange",
        value: function valuechange(label, c) {
          var _this10 = this;

          c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this10.seterror(c, label);
          });
        }
      }, {
        key: "seterror",
        value: function seterror(c, label) {
          var _this11 = this;

          this.errormessage[label] = "";
          console.log(c);

          if ((c.dirty || c.touched) && c.errors) {
            var varr = Object.keys(c.errors).map(function (key) {
              return _this11.error[key];
            }).join("");
            console.log(varr);
            this.errormessage[label] = varr;
          }
        }
      }, {
        key: "uploadpicture",
        value: function uploadpicture() {}
      }, {
        key: "login",
        value: function login() {
          console.log(this.loginform.value);
          var boss = document.getElementsByClassName("boss")[0];
          boss.className = boss.className.replace(/\bnodisplay\b/g, "display"); //alert("Logging You in. It might take some seconds. Please wait.....")

          this.loginerror = this.loginservice.login(this.loginform.value);
          /*.subscribe((data)=>{
            console.log(data);
          },
          (error)=>{
            this.loginerror = error;
          }
          )*/
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: _facebooklogin_service__WEBPACK_IMPORTED_MODULE_6__["FacebookloginService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/nbsp.pipe.ts":
  /*!******************************!*\
    !*** ./src/app/nbsp.pipe.ts ***!
    \******************************/

  /*! exports provided: NbspPipe */

  /***/
  function srcAppNbspPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NbspPipe", function () {
      return NbspPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NbspPipe = /*#__PURE__*/function () {
      function NbspPipe() {
        _classCallCheck(this, NbspPipe);
      }

      _createClass(NbspPipe, [{
        key: "transform",
        value: function transform(value) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var character = args[0];
          var hi;
          hi = value.replace(args, "&nbsp;");
          return hi;
        }
      }]);

      return NbspPipe;
    }();

    NbspPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'nbsp'
    })], NbspPipe);
    /***/
  },

  /***/
  "./src/app/packagereg/packagereg.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/packagereg/packagereg.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPackageregPackageregComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profilewrapper{\r\n  margin: 0;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n  background-color: white;\r\n\r\n\r\n}\r\n#featurrr {\r\n    width: 226px;\r\n}\r\n.profileheader{\r\n  width:95%;\r\n  padding:0;\r\n  overflow-x:scroll;\r\n  box-sizing: border-box;\r\n  margin:auto;\r\n\r\n}\r\n.navlong{\r\n    width: 1000px;\r\n    box-sizing: border-box;\r\n    border-bottom: 3px solid green;\r\n    height:40px;\r\n    box-sizing: border-box;\r\n}\r\n.navlong ul{\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  list-style-type: none;\r\n  margin:0;\r\n}\r\n#uploadpas {\r\n    border-bottom: none;\r\n}\r\n.navlong ul li{\r\n  display: inline-block;\r\nbox-sizing: border-box;\r\n  margin-top:-1px;\r\n  margin-right: 50px;\r\n  border:none;\r\n  border-bottom:1px solid #008000;\r\nheight: 40px;\r\n}\r\n.navlong ul li.active{height: 40px;\r\n    border-bottom: 3px solid #1ce017;\r\n\r\n}\r\n.navlong ul li a{\r\n  color: #008000;\r\n  text-decoration: none;\r\n  font-weight:bold;\r\n  \tfont-family: 'Dosis', sans-serif;\r\n    font-weight:600;\r\n  \tletter-spacing: 0.6px;\r\n  \tline-height: 16px;\r\n}\r\nimg{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.bodywrapper{\r\nwidth:95%;\r\nmargin:auto;\r\nmargin-top:20px;\r\ndisplay: flex;\r\nflex-direction:column;\r\nalign-items: center;\r\n\r\n}\r\n.picture img{\r\n  border-radius:50%;\r\nz-index: 1;\r\n  width:100px;\r\n  display: block;\r\n/*margin-top: -50px;*/\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.label, .details{\r\n  width:100%;\r\n}\r\n.label{\r\n  font-weight:bold;\r\n  margin-bottom: 10px;\r\n  color: #333;\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n}\r\n.details{\r\n  color: green;\r\n  \tfont-family: 'Hind', sans-serif;\r\n    font-size:14px;\r\n}\r\n.detailsblock input, .detailsblock select{\r\n  width: 282px;\r\n    border: none;\r\n    border-bottom: 2px solid green;\r\n    padding:0;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n.detailsblock input:focus{\r\noutline:0;\r\nfont-size:18px;\r\n}\r\n.featuresblock{\r\n  DISPLAY: flex;\r\n    FLEX-DIRECTION: COLUMN;\r\n}\r\ntextarea{\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n.detailsblock .noborder {\r\n    border-bottom: 2px solid white;\r\n}\r\n.filecenter{\r\n  margin-top:50px;\r\n  background-color: transparent;\r\n  padding-left: 50px;\r\n  z-index:2;\r\n  color:green;\r\n\r\n}\r\n.plusbutton{\r\n  border-radius: 50%;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 25px;\r\n\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n.button{\r\n  outline: 0;\r\n  border:0;\r\n  border-radius: 20px;\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  padding-right:20px;\r\n  padding-left: 20px;\r\n  font-size: 14px;\r\n;\r\n}\r\n.submitdiv{\r\n  display:flex;\r\n  justify-content: center;\r\n}\r\n@media only screen and (min-width:1000px){\r\n.profileheader{\r\noverflow-x:hidden;\r\n\r\n}\r\n.navlong{\r\n    width: 100%;\r\n}\r\n.bodywrapper{\r\n  flex-direction:row;\r\n  flex-wrap:wrap;\r\n  justify-content: space-between;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\nbox-shadow: none;\r\n\r\n}\r\n.detailsblock {\r\n\r\nheight: auto;\r\n}\r\n.label, .details{\r\n  width:220px;\r\n}\r\n.detailsblock input{\r\nwidth:245px;\r\n\r\n}}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZXJlZy9wYWNrYWdlcmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7OztBQUd6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7O0FBRWI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIsc0JBQXNCO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQyxZQUFZO0FBQ1o7QUFDQSxzQkFBc0IsWUFBWTtJQUM5QixnQ0FBZ0M7O0FBRXBDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtHQUNmLGdDQUFnQztJQUMvQixlQUFlO0dBQ2hCLHFCQUFxQjtHQUNyQixpQkFBaUI7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsZUFBZTtBQUNmLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsbUJBQW1COztBQUVuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CLFVBQVU7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQixxQkFBcUI7O0FBRXJCO0FBQ0E7RUFDRSxXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7O0lBRTVDLHVCQUF1QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwrQkFBK0I7Q0FDaEMsaUJBQWlCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0dBQ1gsK0JBQStCO0lBQzlCLGNBQWM7QUFDbEI7QUFDQTtFQUNFLFlBQVk7SUFDVixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYztBQUNkO0FBQ0E7RUFDRSxhQUFhO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXOztBQUViO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixXQUFXOztJQUVYLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNkNBQTZDOztBQUVqRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsOEJBQThCOztBQUVoQztBQUNBO0VBQ0UsWUFBWTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxDQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZXJlZy9wYWNrYWdlcmVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXdyYXBwZXJ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbiNmZWF0dXJyciB7XHJcbiAgICB3aWR0aDogMjI2cHg7XHJcbn1cclxuLnByb2ZpbGVoZWFkZXJ7XHJcbiAgd2lkdGg6OTUlO1xyXG4gIHBhZGRpbmc6MDtcclxuICBvdmVyZmxvdy14OnNjcm9sbDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjphdXRvO1xyXG5cclxufVxyXG4ubmF2bG9uZ3tcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5uYXZsb25nIHVse1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46MDtcclxufVxyXG4jdXBsb2FkcGFzIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLm5hdmxvbmcgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6LTFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwODAwMDtcclxuaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXZsb25nIHVsIGxpLmFjdGl2ZXtoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFjZTAxNztcclxuXHJcbn1cclxuLm5hdmxvbmcgdWwgbGkgYXtcclxuICBjb2xvcjogIzAwODAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBcdGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIFx0bGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIFx0bGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5ib2R5d3JhcHBlcntcclxud2lkdGg6OTUlO1xyXG5tYXJnaW46YXV0bztcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5waWN0dXJlIGltZ3tcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuei1pbmRleDogMTtcclxuICB3aWR0aDoxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuLyptYXJnaW4tdG9wOiAtNTBweDsqL1xyXG5cclxufVxyXG4ucGljdHVyZSwgLmRldGFpbHNibG9ja3tcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5waWN0dXJle1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6MTIwcHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAzMHB4ICovXHJcbn1cclxuLmRldGFpbHNibG9ja3tcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggcmdiKDIyMiAyMjAgMjIwKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwsIC5kZXRhaWxze1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBcdGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0LCAuZGV0YWlsc2Jsb2NrIHNlbGVjdHtcclxuICB3aWR0aDogMjgycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0OmZvY3Vze1xyXG5vdXRsaW5lOjA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcbi5mZWF0dXJlc2Jsb2Nre1xyXG4gIERJU1BMQVk6IGZsZXg7XHJcbiAgICBGTEVYLURJUkVDVElPTjogQ09MVU1OO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5kZXRhaWxzYmxvY2sgLm5vYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZmlsZWNlbnRlcntcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHotaW5kZXg6MjtcclxuICBjb2xvcjpncmVlbjtcclxuXHJcbn1cclxuLnBsdXNidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMjVweDtcclxuXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggNHB4IDFweCByZ2IoMTgzIDE5MyAyMDQpO1xyXG5cclxufVxyXG4uYnV0dG9ue1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuO1xyXG59XHJcbi5zdWJtaXRkaXZ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHgpe1xyXG4ucHJvZmlsZWhlYWRlcntcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcblxyXG59XHJcbi5uYXZsb25ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvZHl3cmFwcGVye1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBmbGV4LXdyYXA6d3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcbi5waWN0dXJlLCAuZGV0YWlsc2Jsb2Nre1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzYmxvY2t7XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcbi5kZXRhaWxzYmxvY2sge1xyXG5cclxuaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5sYWJlbCwgLmRldGFpbHN7XHJcbiAgd2lkdGg6MjIwcHg7XHJcbn1cclxuLmRldGFpbHNibG9jayBpbnB1dHtcclxud2lkdGg6MjQ1cHg7XHJcblxyXG59fVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/packagereg/packagereg.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/packagereg/packagereg.component.ts ***!
    \****************************************************/

  /*! exports provided: PackageregComponent */

  /***/
  function srcAppPackageregPackageregComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageregComponent", function () {
      return PackageregComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // Add the Firebase services that you want to use


    function confirmpassword(length) {
      return function (c) {
        var password = c.get('password');
        var confirmpassword = c.get('confirmpassword');

        if (password.pristine || confirmpassword.pristine) {
          return null;
        }

        if (password.value !== confirmpassword.value) {
          console.log(true);
          return {
            'passwordmatch': true
          };
        }

        return null;
      };
    }

    var PackageregComponent = /*#__PURE__*/function () {
      function PackageregComponent(fb, http, route, loginservice) {
        _classCallCheck(this, PackageregComponent);

        this.fb = fb;
        this.http = http;
        this.route = route;
        this.loginservice = loginservice;
        this.locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];
        this.error = {
          email: "Please enter correct email",
          minlength: "Your password must be at least eight characters",
          passwordmatch: "Your password did not match",
          required: "This field is required"
        };
        this.errormessage = {};
      }

      _createClass(PackageregComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.business_id = this.route.parent.snapshot.paramMap.get('id');
          console.log(this.business_id);
          this.registerform = this.fb.group({
            packagename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            packagedescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            featureses: this.fb.array([this.buildfeatureses()]),
            packageprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          var packagename = this.registerform.get('packagename');
          this.valuechange('packagename', packagename);
          var packagedescription = this.registerform.get('packagedescription');
          this.valuechange('packagedescription', packagedescription);
          var packageprice = this.registerform.get('packageprice');
          this.valuechange('packageprice', packageprice);
        }
      }, {
        key: "valuechange",
        value: function valuechange(label, c) {
          var _this12 = this;

          c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this12.seterror(c, label);
          });
        }
      }, {
        key: "seterror",
        value: function seterror(c, label) {
          var _this13 = this;

          this.errormessage[label] = "";
          console.log(c);

          if ((c.dirty || c.touched) && c.errors) {
            var varr = Object.keys(c.errors).map(function (key) {
              return _this13.error[key];
            }).join("");
            console.log(varr);
            this.errormessage[label] = varr;
          }
        }
      }, {
        key: "buildfeatureses",
        value: function buildfeatureses() {
          return this.fb.group({
            features: ''
          });
        }
      }, {
        key: "addfeatureses",
        value: function addfeatureses() {
          this.featureses.push(this.buildfeatureses());
        }
      }, {
        key: "uploadpicture",
        value: function uploadpicture() {}
      }, {
        key: "save",
        value: function save() {
          var _this14 = this;

          if (this.registerform.valid) {
            if (this.registerform.dirty) {
              this.loginservice.user.getIdToken(
              /* forceRefresh */
              true).then(function (idToken) {
                _this14.id = idToken;
                console.log(_this14.id);
                console.log(_this14.registerform.value);
                var serviceimagesUrlstring = document.getElementById("uploadserviceimagesmessage").innerHTML;
                var iscomma = serviceimagesUrlstring.search(",");

                if (iscomma == -1) {
                  _this14.serviceimagesUrl = [];
                  _this14.serviceimagesUrl[0] = serviceimagesUrlstring;
                } else {
                  _this14.serviceimagesUrl = serviceimagesUrlstring.split(",");
                }

                console.log(_this14.serviceimagesUrl);

                if (_this14.serviceimagesUrl) {
                  var urls = {
                    serviceimagesUrl: _this14.serviceimagesUrl,
                    business_id: _this14.business_id,
                    id: _this14.id
                  };
                  var together = Object.assign({}, urls, _this14.registerform.value);
                  console.log(together);

                  _this14.http.post('http://localhost:3030/api/registration', together, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      "Content-Type": "application/json"
                    })
                  }).subscribe(function (data) {
                    alert(data.message);
                  }, function (error) {
                    alert(error.error.error);
                  });
                } else {
                  alert("You need to upload Images for your package ");
                }
              });
            }
          }
        }
      }, {
        key: "featureses",
        get: function get() {
          return this.registerform.get("featureses");
        }
      }]);

      return PackageregComponent;
    }();

    PackageregComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    PackageregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packagereg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/packagereg/packagereg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../index/index.component.css */
      "./src/app/index/index.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../serviceregister/serviceregister.component.css */
      "./src/app/serviceregister/serviceregister.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packagereg.component.css */
      "./src/app/packagereg/packagereg.component.css"))["default"]]
    })], PackageregComponent);
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundComponent = /*#__PURE__*/function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.component.css */
      "./src/app/pagenotfound/pagenotfound.component.css"))["default"]]
    })], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/app/registrationapprovals/registrationapprovals.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/registrationapprovals/registrationapprovals.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationapprovalsRegistrationapprovalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td img{\r\n  width: 100px;\r\n  height: 100px;\r\n  max-width: none;\r\n}\r\ntable, th, td{\r\n  border-collapse: collapse;\r\n}\r\ntable tr:nth-child(2n){\r\n  background-color: #eee;\r\n}\r\ntable tr:nth-child(2n+1){\r\n  background-color: #fff;\r\n}\r\ntable th{\r\n  background-color: blue;\r\n  color:white;\r\n}\r\ntd:first-child{\r\n\r\n\r\n  background-color: darkgray;\r\n}\r\ntd:first-child input{\r\n  background-color: green;\r\n  color:white;\r\n}\r\nth{\r\n  width: 100px;\r\n  height: 37px;\r\n}\r\n@media only screen and (min-width:1000px ){\r\n  td:first-child, th:first-child{\r\n    left:;\r\n    position:static ;\r\n\r\n  }\r\n  table{\r\n    margin-left: 10px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uYXBwcm92YWxzL3JlZ2lzdHJhdGlvbmFwcHJvdmFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUE7OztFQUdFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxLQUFLO0lBQ0wsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uYXBwcm92YWxzL3JlZ2lzdHJhdGlvbmFwcHJvdmFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQgaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxufVxyXG50YWJsZSwgdGgsIHRke1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGFibGUgdHI6bnRoLWNoaWxkKDJuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZCgybisxKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbnRhYmxlIHRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbnRkOmZpcnN0LWNoaWxke1xyXG5cclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxudGQ6Zmlyc3QtY2hpbGQgaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxudGh7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMDBweCApe1xyXG4gIHRkOmZpcnN0LWNoaWxkLCB0aDpmaXJzdC1jaGlsZHtcclxuICAgIGxlZnQ6O1xyXG4gICAgcG9zaXRpb246c3RhdGljIDtcclxuXHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/registrationapprovals/registrationapprovals.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/registrationapprovals/registrationapprovals.component.ts ***!
    \**************************************************************************/

  /*! exports provided: RegistrationapprovalsComponent */

  /***/
  function srcAppRegistrationapprovalsRegistrationapprovalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationapprovalsComponent", function () {
      return RegistrationapprovalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegistrationapprovalsComponent = /*#__PURE__*/function () {
      function RegistrationapprovalsComponent(route, http, loginservice) {
        _classCallCheck(this, RegistrationapprovalsComponent);

        this.route = route;
        this.http = http;
        this.loginservice = loginservice;
      }

      _createClass(RegistrationapprovalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.datacoming = this.route.snapshot.data['resolveadmin'];
          this.datacoming.subscribe(function (d) {
            _this15.datas = d;
            console.log(_this15.datas);
            _this15.dataarray = [];
            var indexes = Object.keys(_this15.datas);

            for (var _i = 0, _indexes = indexes; _i < _indexes.length; _i++) {
              var index = _indexes[_i];

              _this15.dataarray.push(_this15.datas[index]);
            }

            console.log(_this15.dataarray);
          });
        }
      }, {
        key: "approve",
        value: function approve(data) {
          var id = {
            id: this.loginservice.toUseIdToken
          };
          var together = Object.assign({}, data, id);
          this.http.post("http://localhost:3030/api/approveregistration", together, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (d) {
            return {
              message: d.message
            };
          })).subscribe(function (data) {
            alert(data.message);
          }, function (_ref) {
            var error = _ref.error;
            console.log(error);
            alert(error.error);
          });
        }
      }]);

      return RegistrationapprovalsComponent;
    }();

    RegistrationapprovalsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }];
    };

    RegistrationapprovalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registrationapprovals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registrationapprovals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovals/registrationapprovals.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registrationapprovals.component.css */
      "./src/app/registrationapprovals/registrationapprovals.component.css"))["default"]]
    })], RegistrationapprovalsComponent);
    /***/
  },

  /***/
  "./src/app/registrationapprovalsid/registrationapprovalsid.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/registrationapprovalsid/registrationapprovalsid.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationapprovalsidRegistrationapprovalsidComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbmFwcHJvdmFsc2lkL3JlZ2lzdHJhdGlvbmFwcHJvdmFsc2lkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/registrationapprovalsid/registrationapprovalsid.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/registrationapprovalsid/registrationapprovalsid.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RegistrationapprovalsidComponent */

  /***/
  function srcAppRegistrationapprovalsidRegistrationapprovalsidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationapprovalsidComponent", function () {
      return RegistrationapprovalsidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegistrationapprovalsidComponent = /*#__PURE__*/function () {
      function RegistrationapprovalsidComponent() {
        _classCallCheck(this, RegistrationapprovalsidComponent);
      }

      _createClass(RegistrationapprovalsidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistrationapprovalsidComponent;
    }();

    RegistrationapprovalsidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registrationapprovalsid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registrationapprovalsid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registrationapprovalsid/registrationapprovalsid.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registrationapprovalsid.component.css */
      "./src/app/registrationapprovalsid/registrationapprovalsid.component.css"))["default"]]
    })], RegistrationapprovalsidComponent);
    /***/
  },

  /***/
  "./src/app/requestintercept.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/requestintercept.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestinterceptService */

  /***/
  function srcAppRequestinterceptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestinterceptService", function () {
      return RequestinterceptService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _adminresolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adminresolver.service */
    "./src/app/adminresolver.service.ts");

    var RequestinterceptService = /*#__PURE__*/function () {
      function RequestinterceptService(ad) {
        _classCallCheck(this, RequestinterceptService);

        this.ad = ad;
      }

      _createClass(RequestinterceptService, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method == "POST" && req.url.startsWith("http://localhost:3030")) {
            var a = req.url;
            var b = a.replace(/http:\/\/localhost:3030/g, "https://us-central1-sdgdisposify.cloudfunctions.net/app");
            console.log(b);
            this.ad.loading = true;
            console.log("request method is post");
            var clone = req.clone({
              setHeaders: {
                "Content-Type": "application/json"
              },
              //url: b
              url: a
            });
            return next.handle(clone);
            this.ad.loading = false;
          } else {
            return next.handle(req);
          }
        }
      }]);

      return RequestinterceptService;
    }();

    RequestinterceptService.ctorParameters = function () {
      return [{
        type: _adminresolver_service__WEBPACK_IMPORTED_MODULE_2__["AdminresolverService"]
      }];
    };

    RequestinterceptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequestinterceptService);
    /***/
  },

  /***/
  "./src/app/routing-module/routing-module.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/routing-module/routing-module.module.ts ***!
    \*********************************************************/

  /*! exports provided: RoutingModuleModule */

  /***/
  function srcAppRoutingModuleRoutingModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModuleModule", function () {
      return RoutingModuleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../index/index.component */
    "./src/app/index/index.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _userprofileid_userprofileid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../userprofileid/userprofileid.component */
    "./src/app/userprofileid/userprofileid.component.ts");
    /* harmony import */


    var _userarea_userarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../userarea/userarea.component */
    "./src/app/userarea/userarea.component.ts");
    /* harmony import */


    var _vendor_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../vendor.guard */
    "./src/app/vendor.guard.ts");
    /* harmony import */


    var _testing_testing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../testing/testing.component */
    "./src/app/testing/testing.component.ts");
    /* harmony import */


    var _collector_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../collector.guard */
    "./src/app/collector.guard.ts");
    /* harmony import */


    var _collectorinformation_collectorinformation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../collectorinformation/collectorinformation.component */
    "./src/app/collectorinformation/collectorinformation.component.ts");
    /* harmony import */


    var _collector_collector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../collector/collector.component */
    "./src/app/collector/collector.component.ts");
    /* harmony import */


    var _packagereg_packagereg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../packagereg/packagereg.component */
    "./src/app/packagereg/packagereg.component.ts");
    /* harmony import */


    var _serviceregister_serviceregister_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../serviceregister/serviceregister.component */
    "./src/app/serviceregister/serviceregister.component.ts");
    /* harmony import */


    var _facebookuser_facebookuser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../facebookuser/facebookuser.component */
    "./src/app/facebookuser/facebookuser.component.ts");

    var routes = [{
      path: 'index',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
    }, {
      path: 'testing',
      component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_10__["TestingComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'facebookuser',
      component: _facebookuser_facebookuser_component__WEBPACK_IMPORTED_MODULE_16__["FacebookuserComponent"]
    },
    /* {path: 'admin', component: AdminComponent,  canActivate: [AdminGuardGuard],
    canActivateChild: [AdminGuardGuard],
     children: [
    {
      path: 'registrationapprovals', component: RegistrationapprovalsComponent, resolve:{resolveadmin: AdminResolverService}
    },
    {
      path: 'users', component: UserComponent, resolve:{userprofile: UserprofileService}
    },
    {
      path: 'report', component: ReportComponent, resolve:{report: ReportService},
    },
    {
      path: 'configure', component: ConfigurebankComponent
    },
    {
      path: 'configuremycharges', component: MychargesComponent
    },
    
    {
      path: 'user/:id', component: UserprofileComponent, resolve:{useriprofile: DetailsresolveService},
    children:[
    
    
        {
          path: 'userdetails', component: UserprofileidComponent
        },
        {
          path: 'dailytransaction/:id', component: DailytransactionComponent, resolve:{daily: DailytransactionService},
        },
        {
          path: 'transactions/:id', component: TransactionsComponent, resolve:{transactions: TransactionsService},
        },
            {path: ':id', resolve:{remmiteddetails: RemmitedresolveService }, children:[
              {
                path: 'moneyremmited', component: MoneyremittedComponent
              },
              //hildren
              //c
              {
                path: 'moneyremmitedadd', component: MoneyremittedaddComponent
              },
              {
                path: 'moneyallocated/:id', component: MoneyallocatedComponent, resolve:{allocated: AllocatedService}
              },
              {
                path: 'moneyallocatedadd/:id', component: MoneyallocatedaddComponent
              },*/

    /*  {
        path: 'moneyremmited/edit', component: MoneyremittededitComponent
      },*/

    /*
    {
    path: '',  redirectTo: 'moneyremmited', pathMatch: 'full'
    }
    ]},
    {
    path: '',  redirectTo: 'userdetails', pathMatch: 'full'
    }
    ]
    },
    {
    path: 'registrationapprovalsid/:id', component: RegistrationapprovalsidComponent, resolve:{resolveregistration: RegistrationapprResolverService}
    },
    {path: '', redirectTo: '/admin/users', pathMatch: 'full'},
    ]}, */
    {
      path: 'collector/:id',
      component: _collector_collector_component__WEBPACK_IMPORTED_MODULE_13__["CollectorComponent"],

      /*resolve:{collector: CollectorService},*/

      /*resolve:{deposit: DepositService},*/
      canActivate: [_collector_guard__WEBPACK_IMPORTED_MODULE_11__["CollectorGuard"]],
      canActivateChild: [_collector_guard__WEBPACK_IMPORTED_MODULE_11__["CollectorGuard"]],
      children: [{
        path: 'collectorinformation',
        component: _collectorinformation_collectorinformation_component__WEBPACK_IMPORTED_MODULE_12__["CollectorinformationComponent"]
      }, {
        path: 'businessreg',
        component: _serviceregister_serviceregister_component__WEBPACK_IMPORTED_MODULE_15__["ServiceregisterComponent"]
      }, {
        path: 'packagereg',
        component: _packagereg_packagereg_component__WEBPACK_IMPORTED_MODULE_14__["PackageregComponent"]
      }, {
        path: '',
        redirectTo: 'collectorinformation',
        pathMatch: 'full'
      }]
    }, {
      path: 'user/:id',
      component: _userarea_userarea_component__WEBPACK_IMPORTED_MODULE_8__["UserareaComponent"],

      /*resolve:{customer: CustomerService},*/

      /*resolve:{deposit: DepositService},*/
      canActivate: [_vendor_guard__WEBPACK_IMPORTED_MODULE_9__["VendorGuard"]],
      canActivateChild: [_vendor_guard__WEBPACK_IMPORTED_MODULE_9__["VendorGuard"]],
      children: [{
        path: 'information',
        component: _userprofileid_userprofileid_component__WEBPACK_IMPORTED_MODULE_7__["UserprofileidComponent"]
      }, {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
    }];

    var RoutingModuleModule = function RoutingModuleModule() {
      _classCallCheck(this, RoutingModuleModule);
    };

    RoutingModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], RoutingModuleModule);
    /***/
  },

  /***/
  "./src/app/serviceregister/serviceregister.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/serviceregister/serviceregister.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServiceregisterServiceregisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profilewrapper{\r\n  margin: 0;\r\n  /*margin-top: 60px;*/\r\n  width: 100%;\r\n  background-color: white;\r\n\r\n\r\n}\r\n.profileheader{\r\n  width:95%;\r\n  padding:0;\r\n  overflow-x:scroll;\r\n  box-sizing: border-box;\r\n  margin:auto;\r\n\r\n}\r\n.navlong{\r\n    width: 1000px;\r\n    box-sizing: border-box;\r\n    border-bottom: 3px solid green;\r\n    height:40px;\r\n    box-sizing: border-box;\r\n}\r\n.navlong ul{\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  list-style-type: none;\r\n  margin:0;\r\n}\r\n.loading{\r\n  display: none;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n.uploadblurr{\r\n  background-color: #73ec19;\r\n  opacity: 0.8;\r\n\r\n}\r\n.filling{\r\n  height: 20%;\r\n  background-color: blue;\r\n}\r\n#uploadpas {\r\n    border-bottom: none;\r\n}\r\n.navlong ul li{\r\n  display: inline-block;\r\nbox-sizing: border-box;\r\n  margin-top:-1px;\r\n  margin-right: 50px;\r\n  border:none;\r\n  border-bottom:1px solid #008000;\r\nheight: 40px;\r\n}\r\n.navlong ul li.active{height: 40px;\r\n    border-bottom: 3px solid #1ce017;\r\n\r\n}\r\n.navlong ul li a{\r\n  color: #008000;\r\n  text-decoration: none;\r\n  font-weight:bold;\r\n  \tfont-family: 'Dosis', sans-serif;\r\n    font-weight:600;\r\n  \tletter-spacing: 0.6px;\r\n  \tline-height: 16px;\r\n}\r\nimg{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.bodywrapper{\r\nwidth:95%;\r\nmargin:auto;\r\nmargin-top:20px;\r\ndisplay: flex;\r\nflex-direction:column;\r\nalign-items: center;\r\n\r\n}\r\n.picture img{\r\n  border-radius:50%;\r\nz-index: 1;\r\n  width:100px;\r\n  display: block;\r\n/*margin-top: -50px;*/\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.label, .details{\r\n  width:100%;\r\n}\r\n.errormessage{\r\n  color:red;\r\n}\r\n.loginheader{\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.label{\r\n  font-weight:bold;\r\n  margin-bottom: 10px;\r\n  color: #333;\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n}\r\n.details{\r\n  color: green;\r\n  \tfont-family: 'Hind', sans-serif;\r\n    font-size:14px;\r\n}\r\n.detailsblock input, .detailsblock select{\r\n  width: 282px;\r\n    border: none;\r\n    border-bottom: 2px solid green;\r\n    padding:0;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n.detailsblock input:focus{\r\noutline:0;\r\nfont-size:18px;\r\n}\r\n.featuresblock{\r\n  DISPLAY: flex;\r\n    FLEX-DIRECTION: COLUMN;\r\n}\r\ntextarea{\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n.detailsblock .noborder {\r\n    border-bottom: 2px solid white;\r\n}\r\n.filecenter{\r\n  margin-top:50px;\r\n  background-color: transparent;\r\n  padding-left: 50px;\r\n  z-index:2;\r\n  color:green;\r\n\r\n}\r\n.plusbutton{\r\n  border-radius: 50%;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 25px;\r\n\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n.button{\r\n  outline: 0;\r\n  border:0;\r\n  border-radius: 20px;\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  padding-right:20px;\r\n  padding-left: 20px;\r\n  font-size: 14px;\r\n;\r\n}\r\n.submitdiv{\r\n  display:flex;\r\n  justify-content: center;\r\n}\r\n@media only screen and (min-width:1000px){\r\n.profileheader{\r\noverflow-x:hidden;\r\n\r\n}\r\n.navlong{\r\n    width: 100%;\r\n}\r\n.bodywrapper{\r\n  flex-direction:row;\r\n  flex-wrap:wrap;\r\n  justify-content: space-between;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\nbox-shadow: none;\r\n\r\n}\r\n.label, .details{\r\n  width:220px;\r\n}\r\n.detailsblock input{\r\nwidth:245px;\r\n\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXJlZ2lzdGVyL3NlcnZpY2VyZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsdUJBQXVCOzs7QUFHekI7QUFDQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXOztBQUViO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTs7QUFFZDtBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIsc0JBQXNCO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQyxZQUFZO0FBQ1o7QUFDQSxzQkFBc0IsWUFBWTtJQUM5QixnQ0FBZ0M7O0FBRXBDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtHQUNmLGdDQUFnQztJQUMvQixlQUFlO0dBQ2hCLHFCQUFxQjtHQUNyQixpQkFBaUI7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsZUFBZTtBQUNmLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsbUJBQW1COztBQUVuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CLFVBQVU7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQixxQkFBcUI7O0FBRXJCO0FBQ0E7RUFDRSxXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7O0lBRTVDLHVCQUF1QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsK0JBQStCO0NBQ2hDLGlCQUFpQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtHQUNYLCtCQUErQjtJQUM5QixjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0lBQ1YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNULGNBQWM7QUFDZDtBQUNBO0VBQ0UsYUFBYTtJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVzs7QUFFYjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsV0FBVzs7SUFFWCxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZDQUE2Qzs7QUFFakQ7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLFlBQVk7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VyZWdpc3Rlci9zZXJ2aWNlcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxld3JhcHBlcntcclxuICBtYXJnaW46IDA7XHJcbiAgLyptYXJnaW4tdG9wOiA2MHB4OyovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG5cclxufVxyXG4ucHJvZmlsZWhlYWRlcntcclxuICB3aWR0aDo5NSU7XHJcbiAgcGFkZGluZzowO1xyXG4gIG92ZXJmbG93LXg6c2Nyb2xsO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOmF1dG87XHJcblxyXG59XHJcbi5uYXZsb25ne1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm5hdmxvbmcgdWx7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjowO1xyXG59XHJcbi5sb2FkaW5ne1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51cGxvYWRibHVycntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNlYzE5O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuXHJcbi5maWxsaW5ne1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuI3VwbG9hZHBhcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5uYXZsb25nIHVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOi0xcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDgwMDA7XHJcbmhlaWdodDogNDBweDtcclxufVxyXG4ubmF2bG9uZyB1bCBsaS5hY3RpdmV7aGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxY2UwMTc7XHJcblxyXG59XHJcbi5uYXZsb25nIHVsIGxpIGF7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgXHRmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBcdGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICBcdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uYm9keXdyYXBwZXJ7XHJcbndpZHRoOjk1JTtcclxubWFyZ2luOmF1dG87XHJcbm1hcmdpbi10b3A6MjBweDtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4ucGljdHVyZSBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbnotaW5kZXg6IDE7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbi8qbWFyZ2luLXRvcDogLTUwcHg7Ki9cclxuXHJcbn1cclxuLnBpY3R1cmUsIC5kZXRhaWxzYmxvY2t7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4ucGljdHVyZXtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OjEyMHB4O1xyXG4gIC8qbWFyZ2luLWJvdHRvbTogMzBweCAqL1xyXG59XHJcbi5kZXRhaWxzYmxvY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4IHJnYigyMjIgMjIwIDIyMCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxhYmVsLCAuZGV0YWlsc3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5lcnJvcm1lc3NhZ2V7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5sb2dpbmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBcdGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0LCAuZGV0YWlsc2Jsb2NrIHNlbGVjdHtcclxuICB3aWR0aDogMjgycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZGV0YWlsc2Jsb2NrIGlucHV0OmZvY3Vze1xyXG5vdXRsaW5lOjA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcbi5mZWF0dXJlc2Jsb2Nre1xyXG4gIERJU1BMQVk6IGZsZXg7XHJcbiAgICBGTEVYLURJUkVDVElPTjogQ09MVU1OO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5kZXRhaWxzYmxvY2sgLm5vYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZmlsZWNlbnRlcntcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHotaW5kZXg6MjtcclxuICBjb2xvcjpncmVlbjtcclxuXHJcbn1cclxuLnBsdXNidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMjVweDtcclxuXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggNHB4IDFweCByZ2IoMTgzIDE5MyAyMDQpO1xyXG5cclxufVxyXG4uYnV0dG9ue1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuO1xyXG59XHJcbi5zdWJtaXRkaXZ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHgpe1xyXG4ucHJvZmlsZWhlYWRlcntcclxub3ZlcmZsb3cteDpoaWRkZW47XHJcblxyXG59XHJcbi5uYXZsb25ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvZHl3cmFwcGVye1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBmbGV4LXdyYXA6d3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcbi5waWN0dXJlLCAuZGV0YWlsc2Jsb2Nre1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzYmxvY2t7XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcbi5sYWJlbCwgLmRldGFpbHN7XHJcbiAgd2lkdGg6MjIwcHg7XHJcbn1cclxuLmRldGFpbHNibG9jayBpbnB1dHtcclxud2lkdGg6MjQ1cHg7XHJcblxyXG59XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/serviceregister/serviceregister.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/serviceregister/serviceregister.component.ts ***!
    \**************************************************************/

  /*! exports provided: ServiceregisterComponent */

  /***/
  function srcAppServiceregisterServiceregisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceregisterComponent", function () {
      return ServiceregisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // Add the Firebase services that you want to use


    function confirmpassword(length) {
      return function (c) {
        var password = c.get('password');
        var confirmpassword = c.get('confirmpassword');

        if (password.pristine || confirmpassword.pristine) {
          return null;
        }

        if (password.value !== confirmpassword.value) {
          console.log(true);
          return {
            'passwordmatch': true
          };
        }

        return null;
      };
    }

    var ServiceregisterComponent = /*#__PURE__*/function () {
      function ServiceregisterComponent(fb, http, route, loginservice) {
        _classCallCheck(this, ServiceregisterComponent);

        this.fb = fb;
        this.http = http;
        this.route = route;
        this.loginservice = loginservice;
        this.errormessage = {};
        this.locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Delta', 'Imo', 'Gombe', 'Anambra'];
        this.error = {
          required: "This field is required",
          email: "Please enter correct email",
          minlength: "Your password must be at least eight characters",
          passwordmatch: "Your password did not match"
        };
        this.idCardUrl = "";
        this.passportUrl = "";
        this.certificateUrl = "";
      }

      _createClass(ServiceregisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.business_id = this.route.parent.snapshot.paramMap.get('id');
          console.log(this.business_id);
          this.registerform = this.fb.group({
            companyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyaddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_mon_fri_start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_mon_fri_end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_sat_start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_sat_end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_sun_start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            wh_sun_end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            servicedescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          var companyname = this.registerform.get('companyname');
          this.valuechange('companyname', companyname);
          var companyaddress = this.registerform.get('companyaddress');
          this.valuechange('companyaddress', companyaddress);
          var phonenumber = this.registerform.get('phonenumber');
          this.valuechange('phonenumber', phonenumber);
          var wh_mon_fri_start = this.registerform.get('wh_mon_fri_start');
          this.valuechange('wh_mon_fri_start', wh_mon_fri_start);
          var email = this.registerform.get('email');
          this.valuechange('email', email);
        }
      }, {
        key: "valuechange",
        value: function valuechange(label, c) {
          var _this16 = this;

          c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) {
            _this16.seterror(c, label);
          });
        }
      }, {
        key: "seterror",
        value: function seterror(c, label) {
          var _this17 = this;

          this.errormessage[label] = "";
          console.log(c);

          if ((c.dirty || c.touched) && c.errors) {
            var varr = Object.keys(c.errors).map(function (key) {
              return _this17.error[key];
            }).join("");
            console.log(varr);
            this.errormessage[label] = varr;
          }
        }
      }, {
        key: "uploadpicture",
        value: function uploadpicture() {}
      }, {
        key: "save",
        value: function save() {
          var _this18 = this;

          if (this.registerform.valid) {
            if (this.registerform.dirty) {
              this.loginservice.user.getIdToken(
              /* forceRefresh */
              true).then(function (idToken) {
                _this18.id = idToken;
                console.log(_this18.id);
                console.log(_this18.registerform.value);
                _this18.certificateUrl = document.getElementById("uploadcertificatemessage").innerHTML;
                _this18.idCardUrl = document.getElementById("uploadidcardmessage").innerHTML;
                _this18.passportUrl = document.getElementById("uploadpassportmessage").innerHTML;

                if (_this18.passportUrl || _this18.idCardUrl || _this18.certificateUrl) {
                  var urls = {
                    idCardUrl: _this18.idCardUrl,
                    passportUrl: _this18.passportUrl,
                    certificateUrl: _this18.certificateUrl,
                    business_id: _this18.business_id,
                    id: _this18.id
                  };
                  var together = Object.assign({}, urls, _this18.registerform.value);
                  console.log(together);

                  _this18.http.post('http://localhost:3030/api/registration', together, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      "Content-Type": "application/json"
                    })
                  }).subscribe(function (data) {
                    alert(data.message);
                  }, function (error) {
                    alert(error.error);
                  });
                } else {
                  alert("You need to upload passport and i.d. card ");
                }
              });
            }
          }
        }
      }]);

      return ServiceregisterComponent;
    }();

    ServiceregisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    ServiceregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./serviceregister.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/serviceregister/serviceregister.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../index/index.component.css */
      "./src/app/index/index.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./serviceregister.component.css */
      "./src/app/serviceregister/serviceregister.component.css"))["default"]]
    })], ServiceregisterComponent);
    /***/
  },

  /***/
  "./src/app/testing/testing.component.css":
  /*!***********************************************!*\
    !*** ./src/app/testing/testing.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestingTestingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menubutton{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 15px;\r\n  height: 30px;\r\n  \twidth: 20px;\r\n    background-color: transparent;\r\n    cursor:pointer;\r\n    z-index: 100;\r\n}\r\n.bar{\r\n  display: block;\r\n  padding: 1.55px;\r\n  margin: 3px;\r\n\tbackground-color: black;\r\n\twidth: 16px;\r\n}\r\n.dropdownwrapper{\r\n  width: 250px;\r\n  position: fixed;\r\n  z-index: 101;\r\n  color: green;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n\r\n  height: 100vh;\r\n/*  background-image: url(/assets/posbackground.png);*/\r\n  background-size: cover;\r\n\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 100%;\r\n\r\n  box-sizing: border-box;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n.picture{\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height:120px;\r\n  /*margin-bottom: 30px */\r\n}\r\n.detailsblock{\r\n    padding-left: 15px;\r\n    margin-bottom: 20px;\r\n    /* border-radius: 5px; */\r\n    box-shadow: 2px 2px 4px 0px rgb(222 220 220);\r\n\r\n    justify-content: center;\r\n}\r\n.infoheader{\r\n  font-family: \"Hind\", sans-serif;\r\n  line-height: 21px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color:green;\r\n  margin: 20px;\r\n\r\n}\r\n.infodetails{\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-size: 16px;\r\n  margin: 0px 20px 10px;\r\n\r\n\r\n}\r\n.dropdownsection{\r\nheight:150vh;\r\n}\r\n.adminwrapper{width:97%;\r\n  margin:auto;\r\n  margin-top:40px;\r\noverflow-x: scroll;}\r\n.shift{margin-left: 10px;}\r\n.dropdownwrapper::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: white;\r\n\r\n}\r\n/* Track */\r\n.dropdownwrapper::-webkit-scrollbar-track {\r\n\r\n\r\n}\r\n/* Handle */\r\n.dropdownwrapper::-webkit-scrollbar-thumb {\r\n background-color: #dedcdc;\r\n border: 2px solid #ffffff;\r\n border-radius: 8px;\r\n}\r\n.logoword, .logoandword img{\r\n  margin-right: 10px;\r\n}\r\n.listsectioncontent{\r\n  color: #74828e;\r\n  font-family: 'Hind', sans-serif;\r\n  font-size: 13px;\r\n    line-height: 21px;\r\n    font-weight: bold;\r\n}\r\n.sectioncontent ul{\r\n  list-style-type: none;\r\n    font-family: 'Hind', sans-serif;\r\n    line-height: 23px;\r\n\r\n    padding: 0;\r\n}\r\n.sectioncontent li{\r\n  margin-bottom: 10px;\r\n}\r\n.sectioncontent li a {\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n.logoandword{\r\ndisplay: flex;\r\nalign-items: center;\r\n}\r\n.logoandclose{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logoandclose,.section{\r\n  margin-bottom: 0;\r\n\r\n  padding: 20px 25px;\r\n    padding-right: 24px;\r\n    box-shadow: 2px 2px 4px 0px #dedcdc;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.logoandclose .logo img{\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.logoandclose .logo{\r\n  float: left;\r\n}\r\n.logoandclose .close{\r\n  float: right;\r\n}\r\n.dropdownwrapper{\r\n  display:none;\r\n}\r\n.dropdowndisplay{\r\n  display: block;\r\n}\r\n.sectionnameandicon{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n.sectioncontent{\r\n  display: none;\r\n}\r\n.display{\r\n  display:block;\r\n}\r\n.sectionheader{\r\n  height: 40px;\r\n}\r\n.sectionname{\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n  font-size: 14px;\r\n}\r\ntable tr:nth-child(even){\r\n  background-color: #f3f4f5;\r\n\r\n}\r\ntable tr:nth-child(odd){\r\n  background-color: white;\r\n\r\n}\r\ntable, th, td{\r\n  border-collapse: collapse;\r\n  border: 1px solid #f3f4f5;\r\n  color: #333;\r\n  padding:15px;\r\n}\r\ntable{\r\n  min-width: 70vw;\r\n}\r\ntable img{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.plusbutton{\r\n  border-radius: 50%;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    width: 40px;\r\n    left: 80vw;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    top: 80vh;\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n@media only screen and (min-width:1000px ){\r\n\r\n.dropdownwrapper{\r\n  display:block;\r\n  box-shadow: 2px 2px 4px 0px #dedcdc;\r\n}\r\n.dropdowndisplay{\r\n  display: none;\r\n}\r\n.adminwrapper{width:70%;\r\noverflow-x: scroll;\r\nmargin-left: 270px;}\r\n.shift{margin-left: auto;\r\nwidth:98%;\r\n\r\n}\r\n.picture, .detailsblock{\r\n  width: 270px;\r\n    height:120px;\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailsblock{\r\n/*box-shadow: none;*/\r\n\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGluZy90ZXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0dBQ1gsV0FBVztJQUNWLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0NBQ1osdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7RUFFdkIsYUFBYTtBQUNmLHNEQUFzRDtFQUNwRCxzQkFBc0I7OztBQUd4QjtBQUNBO0VBQ0UsV0FBVzs7RUFFWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsNENBQTRDOztJQUU1Qyx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixxQkFBcUI7OztBQUd2QjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsY0FBYyxTQUFTO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCLGtCQUFrQixDQUFDO0FBQ25CLE9BQU8saUJBQWlCLENBQUM7QUFDekI7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCOztBQUV6QjtBQUVBLFVBQVU7QUFDVjs7O0FBR0E7QUFFQSxXQUFXO0FBQ1g7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGVBQWU7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7SUFDbkIsK0JBQStCO0lBQy9CLGlCQUFpQjs7SUFFakIsVUFBVTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCOztFQUVoQixrQkFBa0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxnQ0FBZ0M7QUFDcEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLCtCQUErQjtDQUNoQyxpQkFBaUI7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNDO0VBQ0MsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNkNBQTZDOztBQUVqRDtBQUVBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGtCQUFrQjtBQUNsQixrQkFBa0IsQ0FBQztBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTOztBQUVUO0FBQ0E7RUFDRSxZQUFZO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVidXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBcdHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uYmFye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEuNTVweDtcclxuICBtYXJnaW46IDNweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHR3aWR0aDogMTZweDtcclxufVxyXG4uZHJvcGRvd253cmFwcGVye1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAxO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4vKiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcG9zYmFja2dyb3VuZC5wbmcpOyovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcblxyXG59XHJcbi5waWN0dXJlLCAuZGV0YWlsc2Jsb2Nre1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLnBpY3R1cmV7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDoxMjBweDtcclxuICAvKm1hcmdpbi1ib3R0b206IDMwcHggKi9cclxufVxyXG4uZGV0YWlsc2Jsb2Nre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCByZ2IoMjIyIDIyMCAyMjApO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pbmZvaGVhZGVye1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxufVxyXG4uaW5mb2RldGFpbHN7XHJcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xyXG5cclxuXHJcbn1cclxuLmRyb3Bkb3duc2VjdGlvbntcclxuaGVpZ2h0OjE1MHZoO1xyXG59XHJcbi5hZG1pbndyYXBwZXJ7d2lkdGg6OTclO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxub3ZlcmZsb3cteDogc2Nyb2xsO31cclxuLnNoaWZ0e21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLmRyb3Bkb3dud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uZHJvcGRvd253cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblxyXG5cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5kcm9wZG93bndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNkZWRjZGM7XHJcbiBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5sb2dvd29yZCwgLmxvZ29hbmR3b3JkIGltZ3tcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmxpc3RzZWN0aW9uY29udGVudHtcclxuICBjb2xvcjogIzc0ODI4ZTtcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IHVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuXHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZWN0aW9uY29udGVudCBsaXtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zZWN0aW9uY29udGVudCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4ubG9nb2FuZHdvcmR7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ29hbmRjbG9zZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dvYW5kY2xvc2UsLnNlY3Rpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjZGVkY2RjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuLmxvZ29hbmRjbG9zZSAubG9nbyBpbWd7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG5cclxufVxyXG4ubG9nb2FuZGNsb3NlIC5sb2dve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5sb2dvYW5kY2xvc2UgLmNsb3Nle1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRyb3Bkb3dud3JhcHBlcntcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLmRyb3Bkb3duZGlzcGxheXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2VjdGlvbm5hbWVhbmRpY29ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5zZWN0aW9uY29udGVudHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kaXNwbGF5e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnNlY3Rpb25oZWFkZXJ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5zZWN0aW9ubmFtZXtcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNTtcclxuXHJcbn1cclxuIHRhYmxlIHRyOm50aC1jaGlsZChvZGQpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG50YWJsZSwgdGgsIHRke1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjRmNTtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOjE1cHg7XHJcbn1cclxudGFibGV7XHJcbiAgbWluLXdpZHRoOiA3MHZ3O1xyXG59XHJcbnRhYmxlIGltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnBsdXNidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbGVmdDogODB2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdG9wOiA4MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDRweCAxcHggcmdiKDE4MyAxOTMgMjA0KTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHggKXtcclxuXHJcbi5kcm9wZG93bndyYXBwZXJ7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggI2RlZGNkYztcclxufVxyXG4uZHJvcGRvd25kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFkbWlud3JhcHBlcnt3aWR0aDo3MCU7XHJcbm92ZXJmbG93LXg6IHNjcm9sbDtcclxubWFyZ2luLWxlZnQ6IDI3MHB4O31cclxuLnNoaWZ0e21hcmdpbi1sZWZ0OiBhdXRvO1xyXG53aWR0aDo5OCU7XHJcblxyXG59XHJcbi5waWN0dXJlLCAuZGV0YWlsc2Jsb2Nre1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzYmxvY2t7XHJcbi8qYm94LXNoYWRvdzogbm9uZTsqL1xyXG5cclxufVxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/testing/testing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/testing/testing.component.ts ***!
    \**********************************************/

  /*! exports provided: TestingComponent */

  /***/
  function srcAppTestingTestingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestingComponent", function () {
      return TestingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestingComponent = /*#__PURE__*/function () {
      function TestingComponent() {
        _classCallCheck(this, TestingComponent);
      }

      _createClass(TestingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datas = [['name', {
            datetimedaily: "5/9/2020 - 10:30:13",
            amountowedinbank: -3120,
            amountremitedinbank: 1200,
            openingbalanceinbank: 0,
            profitbank: -3120
          }, [{
            datetime: "5/9/2020 - 10:05:08",
            type: "deposit",
            amountcollectedfromcustomer: 1000
          }, {
            datetime: "5/9/2020 - 10:26:11",
            type: "deposit",
            amountcollectedfromcustomer: 1000
          }]], ['Another Name', {
            datetimedaily: "5/9/2020 - 10:30:13",
            amountowedinbank: -3120,
            amountremitedinbank: 1200,
            openingbalanceinbank: 0,
            profitbank: -3120
          }, []], ['Again Name', {
            datetimedaily: "5/9/2020 - 10:30:13",
            amountowedinbank: -3120,
            amountremitedinbank: 1200,
            openingbalanceinbank: 0,
            profitbank: -3120
          }, []]];
        }
      }]);

      return TestingComponent;
    }();

    TestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-testing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./testing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./testing.component.css */
      "./src/app/testing/testing.component.css"))["default"]]
    })], TestingComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td img{\r\n  width: 50px;\r\n  height: 50px;\r\n  max-width: none;\r\n}\r\ntable, th, td{\r\n  border-collapse: collapse;\r\n  border: none;\r\n}\r\ntable{\r\n  border: 1px solid #eee;\r\n  margin-left: 15px;\r\n}\r\ntable tr:nth-child(2n){\r\n  background-color: #eee;\r\n}\r\ntable tr:nth-child(2n+1){\r\n  background-color: #fff;\r\n}\r\ntable th{\r\n  background-color: green;\r\n  color:white;\r\n}\r\ntd:first-child{\r\n\r\n\r\n  background-color: darkgray;\r\n}\r\ntd:first-child input{\r\n  background-color: green;\r\n  color:white;\r\n}\r\nth{\r\n  width: 100px;\r\n  height: 37px;\r\n}\r\n@media only screen and (min-width:1000px ){\r\n  td:first-child, th:first-child{\r\n    left:;\r\n    position:static ;\r\n\r\n  }\r\n  table{\r\n    margin-left: 10px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBRUE7OztFQUdFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxLQUFLO0lBQ0wsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCBpbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxufVxyXG50YWJsZSwgdGgsIHRke1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbnRhYmxle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxudGFibGUgdHI6bnRoLWNoaWxkKDJuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZCgybisxKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbnRhYmxlIHRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG50ZDpmaXJzdC1jaGlsZHtcclxuXHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG59XHJcbnRkOmZpcnN0LWNoaWxkIGlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbnRoe1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHggKXtcclxuICB0ZDpmaXJzdC1jaGlsZCwgdGg6Zmlyc3QtY2hpbGR7XHJcbiAgICBsZWZ0OjtcclxuICAgIHBvc2l0aW9uOnN0YXRpYyA7XHJcblxyXG4gIH1cclxuICB0YWJsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(route, router) {
        _classCallCheck(this, UserComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.datacoming = this.route.snapshot.data['userprofile'];
          this.datacoming.subscribe(function (d) {
            _this19.datas = d.result.users;
            console.log(_this19.datas);
          });
        }
      }, {
        key: "actions",
        value: function actions(uid) {
          this.router.navigate(['/admin', 'user', uid, "userdetails"]);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/userarea/userarea.component.css":
  /*!*************************************************!*\
    !*** ./src/app/userarea/userarea.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserareaUserareaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menubutton{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 15px;\r\n  height: 30px;\r\n  \twidth: 20px;\r\n    background-color: transparent;\r\n    cursor:pointer;\r\n    z-index: 100;\r\n}\r\n.bar{\r\n  display: block;\r\n  padding: 1.55px;\r\n  margin: 3px;\r\n\tbackground-color: black;\r\n\twidth: 16px;\r\n}\r\n.dropdownwrapper{\r\n  width: 250px;\r\n  position: fixed;\r\n  z-index: 101;\r\n  color: green;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n\r\n  height: 100vh;\r\n/*  background-image: url(/assets/posbackground.png);*/\r\n  background-size: cover;\r\n\r\n\r\n}\r\n.dropdownsection{\r\nheight:150vh;\r\n}\r\n.adminwrapper{width:97%;\r\n  margin:auto;\r\n  margin-top:40px;\r\noverflow-x: scroll;}\r\n.shift{margin-left: 10px;}\r\n.dropdownwrapper::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: white;\r\n\r\n}\r\n/* Track */\r\n.dropdownwrapper::-webkit-scrollbar-track {\r\n\r\n\r\n}\r\n/* Handle */\r\n.dropdownwrapper::-webkit-scrollbar-thumb {\r\n background-color: #dedcdc;\r\n border: 2px solid #ffffff;\r\n border-radius: 8px;\r\n}\r\n.logoword, .logoandword img{\r\n  margin-right: 10px;\r\n}\r\n.listsectioncontent{\r\n  color: #74828e;\r\n  font-family: 'Hind', sans-serif;\r\n  font-size: 13px;\r\n    line-height: 21px;\r\n    font-weight: bold;\r\n}\r\n.sectioncontent ul{\r\n  list-style-type: none;\r\n    font-family: Hind;\r\n    line-height: 23px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n}\r\n.sectioncontent li{\r\n  margin-bottom: 10px;\r\n}\r\n.sectioncontent li a {\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n.logoandword{\r\ndisplay: flex;\r\nalign-items: center;\r\n}\r\n.logoandclose{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logoandclose,.section{\r\n  margin-bottom: 0;\r\n\r\n  padding: 20px 25px;\r\n    padding-right: 24px;\r\n    box-shadow: 2px 2px 4px 0px #dedcdc;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.logoandclose .logo img{\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.logoandclose .logo{\r\n  float: left;\r\n}\r\n.logoandclose .close{\r\n  float: right;\r\n}\r\n.dropdownwrapper{\r\n  display:none;\r\n}\r\n.dropdowndisplay{\r\n  display: block;\r\n}\r\n.sectionnameandicon{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n.sectioncontent{\r\n  display: none;\r\n}\r\n.display{\r\n  display:block;\r\n}\r\n.sectionheader{\r\n  height: 40px;\r\n}\r\n.sectionname{\r\n  font-family: 'Hind', sans-serif;\r\n\tline-height: 21px;\r\n  font-size: 14px;\r\n}\r\n@media only screen and (min-width:1000px ){\r\n\r\n.dropdownwrapper{\r\n  display:block;\r\n}\r\n.dropdowndisplay{\r\n  display: none;\r\n}\r\n.adminwrapper{width:70%;\r\noverflow-x: scroll;\r\nmargin-left: 270px;}\r\n.shift{margin-left: auto;\r\nwidth:98%;\r\n\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmFyZWEvdXNlcmFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7R0FDWCxXQUFXO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7Q0FDWix1QkFBdUI7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsdUJBQXVCOztFQUV2QixhQUFhO0FBQ2Ysc0RBQXNEO0VBQ3BELHNCQUFzQjs7O0FBR3hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxjQUFjLFNBQVM7RUFDckIsV0FBVztFQUNYLGVBQWU7QUFDakIsa0JBQWtCLENBQUM7QUFDbkIsT0FBTyxpQkFBaUIsQ0FBQztBQUN6QjtFQUNFLFVBQVU7RUFDVix1QkFBdUI7O0FBRXpCO0FBRUEsVUFBVTtBQUNWOzs7QUFHQTtBQUVBLFdBQVc7QUFDWDtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7O0VBRWhCLGtCQUFrQjtJQUNoQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsK0JBQStCO0NBQ2hDLGlCQUFpQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBLGNBQWMsU0FBUztBQUN2QixrQkFBa0I7QUFDbEIsa0JBQWtCLENBQUM7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUzs7QUFFVDs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJhcmVhL3VzZXJhcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIFx0d2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5iYXJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMS41NXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdHdpZHRoOiAxNnB4O1xyXG59XHJcbi5kcm9wZG93bndyYXBwZXJ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDE7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbi8qICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9wb3NiYWNrZ3JvdW5kLnBuZyk7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuXHJcbn1cclxuLmRyb3Bkb3duc2VjdGlvbntcclxuaGVpZ2h0OjE1MHZoO1xyXG59XHJcbi5hZG1pbndyYXBwZXJ7d2lkdGg6OTclO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxub3ZlcmZsb3cteDogc2Nyb2xsO31cclxuLnNoaWZ0e21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLmRyb3Bkb3dud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uZHJvcGRvd253cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblxyXG5cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5kcm9wZG93bndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNkZWRjZGM7XHJcbiBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5sb2dvd29yZCwgLmxvZ29hbmR3b3JkIGltZ3tcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmxpc3RzZWN0aW9uY29udGVudHtcclxuICBjb2xvcjogIzc0ODI4ZTtcclxuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IHVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBIaW5kO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IGxpe1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNlY3Rpb25jb250ZW50IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5sb2dvYW5kd29yZHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9nb2FuZGNsb3Nle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ29hbmRjbG9zZSwuc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICNkZWRjZGM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4ubG9nb2FuZGNsb3NlIC5sb2dvIGltZ3tcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcblxyXG59XHJcbi5sb2dvYW5kY2xvc2UgLmxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmxvZ29hbmRjbG9zZSAuY2xvc2V7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZHJvcGRvd253cmFwcGVye1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZHJvcGRvd25kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZWN0aW9ubmFtZWFuZGljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLnNlY3Rpb25jb250ZW50e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRpc3BsYXl7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4uc2VjdGlvbmhlYWRlcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnNlY3Rpb25uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcblx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHggKXtcclxuXHJcbi5kcm9wZG93bndyYXBwZXJ7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4uZHJvcGRvd25kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFkbWlud3JhcHBlcnt3aWR0aDo3MCU7XHJcbm92ZXJmbG93LXg6IHNjcm9sbDtcclxubWFyZ2luLWxlZnQ6IDI3MHB4O31cclxuLnNoaWZ0e21hcmdpbi1sZWZ0OiBhdXRvO1xyXG53aWR0aDo5OCU7XHJcblxyXG59XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/userarea/userarea.component.ts":
  /*!************************************************!*\
    !*** ./src/app/userarea/userarea.component.ts ***!
    \************************************************/

  /*! exports provided: UserareaComponent */

  /***/
  function srcAppUserareaUserareaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserareaComponent", function () {
      return UserareaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");

    var UserareaComponent = /*#__PURE__*/function () {
      function UserareaComponent(route, loginservice) {
        _classCallCheck(this, UserareaComponent);

        this.route = route;
        this.loginservice = loginservice;
      }

      _createClass(UserareaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uid = this.route.snapshot.paramMap.get("id");
        }
      }, {
        key: "signout",
        value: function signout() {
          this.loginservice.signout();
        }
      }]);

      return UserareaComponent;
    }();

    UserareaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    UserareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userarea',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userarea.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userarea/userarea.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userarea.component.css */
      "./src/app/userarea/userarea.component.css"))["default"]]
    })], UserareaComponent);
    /***/
  },

  /***/
  "./src/app/userprofile/userprofile.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/userprofile/userprofile.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserprofileUserprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".routewrapper{\r\n  border: 1px solid lightblue;\r\n  padding: 10px;\r\n  width:-webkit-max-content;\r\n  width:-moz-max-content;\r\n  width:max-content;\r\n  /* to remove */\r\n\r\n}\r\n.routerheader{\r\n  background-color: #f3f4f5;\r\n  color: #333;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  margin: -10px;\r\n    margin-bottom: 20px;\r\n    height: 40px;\r\n    font-size: 18px;\r\n    padding-left: 35px;\r\n}\r\n.navwrapper{\r\n  border-bottom: 1px solid #dee2e6;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    margin-bottom: 25px;\r\n    width: 1500px;\r\n}\r\n.navdetails{\r\n  float:left;\r\n  justify-content: flex-start;\r\n  align-items: flex-end;\r\n}\r\n.navdetails ul{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.navdetails ul li{\r\n  display: inline-block;\r\n    background-color: white;\r\n    border-bottom: 1px solid #dee2e6;\r\n    padding: 15px;\r\n\r\n    font-size: 18px;\r\n\r\n    /* margin-right: 0px; */\r\n    /* padding: 0; */\r\n    margin-bottom: -1px;\r\n  /* border-color when clicked\r\n  border: 1px solid #dee2e6;\r\n      border-bottom: 1px solid white;\r\n\r\n  */\r\n\r\n}\r\n.active{\r\n  color: #333;\r\n}\r\n.navdetails ul li:hover{\r\n  border: 1px solid #dee2e6;\r\n      border-bottom: 1px solid white;\r\n}\r\n.navdetails ul li a{\r\n  color: blue;\r\n  text-decoration:none;\r\n}\r\n.rightback{\r\n  float:right;\r\n  background-color: white;\r\n  border: none;\r\n  padding: 15px;\r\n  font-size: 18px;\r\n}\r\n@media only screen and (min-width:1000px ){\r\n  .navwrapper{\r\n    width: inherit;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IseUJBQWlCO0VBQWpCLHNCQUFpQjtFQUFqQixpQkFBaUI7RUFDakIsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0VBQ0UsZ0NBQWdDO0lBQzlCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsYUFBYTs7SUFFYixlQUFlOztJQUVmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOzs7O0dBSUM7O0FBRUg7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO01BQ3JCLDhCQUE4QjtBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZXdyYXBwZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6bWF4LWNvbnRlbnQ7XHJcbiAgLyogdG8gcmVtb3ZlICovXHJcblxyXG59XHJcbi5yb3V0ZXJoZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNTtcclxuICBjb2xvcjogIzMzMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogLTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4ubmF2d3JhcHBlcntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxufVxyXG4ubmF2ZGV0YWlsc3tcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLm5hdmRldGFpbHMgdWx7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLm5hdmRldGFpbHMgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMHB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgLyogYm9yZGVyLWNvbG9yIHdoZW4gY2xpY2tlZFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgKi9cclxuXHJcbn1cclxuLmFjdGl2ZXtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ubmF2ZGV0YWlscyB1bCBsaTpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLm5hdmRldGFpbHMgdWwgbGkgYXtcclxuICBjb2xvcjogYmx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4ucmlnaHRiYWNre1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4ICl7XHJcbiAgLm5hdndyYXBwZXJ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/userprofile/userprofile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userprofile/userprofile.component.ts ***!
    \******************************************************/

  /*! exports provided: UserprofileComponent */

  /***/
  function srcAppUserprofileUserprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () {
      return UserprofileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserprofileComponent = /*#__PURE__*/function () {
      function UserprofileComponent(route, router) {
        _classCallCheck(this, UserprofileComponent);

        this.route = route;
      }

      _createClass(UserprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.route.paramMap.subscribe(function (params) {
            _this20.uid = params.get("id");
          });
        }
      }]);

      return UserprofileComponent;
    }();

    UserprofileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userprofile.component.css */
      "./src/app/userprofile/userprofile.component.css"))["default"]]
    })], UserprofileComponent);
    /***/
  },

  /***/
  "./src/app/userprofileid/userprofileid.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/userprofileid/userprofileid.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserprofileidUserprofileidComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table tr:nth-child(even){\r\n  background-color: #f3f4f5;\r\n\r\n}\r\n table tr:nth-child(odd){\r\n  background-color: white;\r\n\r\n}\r\n table, th, td{\r\n  border-collapse: collapse;\r\n  border: 1px solid #f3f4f5;\r\n  color: #333;\r\n  padding:15px;\r\n}\r\n table{\r\n  min-width: 70vw;\r\n}\r\n table img{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n .plusbutton{\r\n  border-radius: 50%;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    width: 40px;\r\n    left: 80vw;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    top: 80vh;\r\n    background-color: blue;\r\n    color: white;\r\n    box-shadow: -1px 2px 4px 1px rgb(183 193 204);\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGVpZC91c2VycHJvZmlsZWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7O0FBRTNCO0NBQ0M7RUFDQyx1QkFBdUI7O0FBRXpCO0NBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7Q0FDQTtFQUNFLGVBQWU7QUFDakI7Q0FDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7Q0FDQTtFQUNFLGtCQUFrQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2Q0FBNkM7O0FBRWpEIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGVpZC91c2VycHJvZmlsZWlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNTtcclxuXHJcbn1cclxuIHRhYmxlIHRyOm50aC1jaGlsZChvZGQpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG50YWJsZSwgdGgsIHRke1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjRmNTtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOjE1cHg7XHJcbn1cclxudGFibGV7XHJcbiAgbWluLXdpZHRoOiA3MHZ3O1xyXG59XHJcbnRhYmxlIGltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnBsdXNidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbGVmdDogODB2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdG9wOiA4MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDRweCAxcHggcmdiKDE4MyAxOTMgMjA0KTtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/userprofileid/userprofileid.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/userprofileid/userprofileid.component.ts ***!
    \**********************************************************/

  /*! exports provided: UserprofileidComponent */

  /***/
  function srcAppUserprofileidUserprofileidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserprofileidComponent", function () {
      return UserprofileidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserprofileidComponent = /*#__PURE__*/function () {
      function UserprofileidComponent(route) {
        _classCallCheck(this, UserprofileidComponent);

        this.route = route;
      }

      _createClass(UserprofileidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*this.datacomg = this.route.parent.snapshot.data['useriprofile'];
          console.log(this.datacomg);
            this.datacomg.subscribe((d)=>{
                      this.datas = d.user;
            
              console.log(this.datas);
          })*/
        }
      }]);

      return UserprofileidComponent;
    }();

    UserprofileidComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    UserprofileidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userprofileid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userprofileid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofileid/userprofileid.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userprofileid.component.css */
      "./src/app/userprofileid/userprofileid.component.css"))["default"]]
    })], UserprofileidComponent);
    /***/
  },

  /***/
  "./src/app/vendor.guard.ts":
  /*!*********************************!*\
    !*** ./src/app/vendor.guard.ts ***!
    \*********************************/

  /*! exports provided: VendorGuard */

  /***/
  function srcAppVendorGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorGuard", function () {
      return VendorGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");

    var VendorGuard = /*#__PURE__*/function () {
      function VendorGuard(router, loginservice) {
        _classCallCheck(this, VendorGuard);

        this.router = router;
        this.loginservice = loginservice;
      }

      _createClass(VendorGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.log("hi from guards");
          this.loginservice.redirecturl = state.url;
          console.log(this.isloggedin());

          if (this.isloggedin() == "true") {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          console.log("hi from guards");
          this.loginservice.redirecturl = state.url;
          console.log(this.isloggedin());

          if (this.isloggedin() == "true") {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }, {
        key: "isloggedin",
        value: function isloggedin() {
          if (this.loginservice.customer) {
            return "true";
          } else {
            return "false";
          }
        }
      }]);

      return VendorGuard;
    }();

    VendorGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    VendorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VendorGuard);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\user\Music\disposify\pos\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map