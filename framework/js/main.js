!function(n){var t={};function i(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=n,i.c=t,i.i=function(n){return n},i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=3)}([function(n,t){n.exports=Backbone},function(n,t){n.exports=_},function(n,t){n.exports=jQuery},function(n,t,i){"use strict";var e=i(0),o=i(1),r=i(2),a=window.HangarAlpha.Components,s=e.View.extend({el:"body",events:{"click .js-ContactLink":"_onClickContactLink"},initialize:function(){this._initViews()},_initViews:function(){this.navbar=new a.Navbar,this.navbarFixed=new a.NavbarFixed({el:this.$(".js-Navbar--fixed"),$header:this.$(".js-Header")[0]}),this._initDropdowns(),this.dialog=new a.Dialog,this.card=new a.Card({el:this.$(".js-downloadCard")}),this._initTabs()},_initTabs:function(){o.each(this.$(".js-Tabs"),function(n){new a.Tab({el:n})})},_initDropdowns:function(){o.each(this.$(".js-Dropdown"),function(n){new a.Dropdown({el:r(n)})})},_onKeyDown:function(n){switch(n.which){case 27:this._closeContactDialog()}},_closeDialogs:function(){this.dialog.close()},_onClickContactLink:function(n){r(window).width()>=1280&&(n.preventDefault(),this.dialog.open())}});r(function(){new s})}]);