(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{249:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,'body[data-v-0f115c45]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.login[data-v-0f115c45]{font-size:10px;background:url("https://static.pipk.top/vueshop/public/images/fst/bg_login.png") no-repeat 50%/100% 100%;min-height:100vh}[data-dpr="2"] .login[data-v-0f115c45]{font-size:20px}[data-dpr="3"] .login[data-v-0f115c45]{font-size:30px}.login .header[data-v-0f115c45]{left:0;height:1.06667rem;top:0;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#666;padding:0 .2rem;font-size:14px}[data-dpr="2"] .login .header[data-v-0f115c45]{font-size:28px}[data-dpr="3"] .login .header[data-v-0f115c45]{font-size:42px}.login .header .back-btn[data-v-0f115c45]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.login .header .back-btn svg[data-v-0f115c45]{font-size:12px}[data-dpr="2"] .login .header .back-btn svg[data-v-0f115c45]{font-size:24px}[data-dpr="3"] .login .header .back-btn svg[data-v-0f115c45]{font-size:36px}.login .header .title[data-v-0f115c45]{font-size:19px}[data-dpr="2"] .login .header .title[data-v-0f115c45]{font-size:38px}[data-dpr="3"] .login .header .title[data-v-0f115c45]{font-size:57px}.login .header .option[data-v-0f115c45]{width:1.2rem}.login .logo[data-v-0f115c45]{display:block;width:4rem;height:4.8rem;margin:.4rem auto}.login form[data-v-0f115c45]{height:auto}.login form .login-box[data-v-0f115c45]{width:8.26667rem;height:4rem;margin:1rem auto;background:#fff;border-radius:.1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.login form .login-box label[data-v-0f115c45]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:6.66667rem;height:1.33333rem;margin:.3rem .4rem 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;border-bottom:.03rem solid #eee}[data-dpr="2"] .login form .login-box label[data-v-0f115c45]{font-size:32px}[data-dpr="3"] .login form .login-box label[data-v-0f115c45]{font-size:48px}.login form .login-box label svg[data-v-0f115c45]{font-size:22px;color:#ccc;width:.8rem;border-right:.03rem solid #eee}[data-dpr="2"] .login form .login-box label svg[data-v-0f115c45]{font-size:44px}[data-dpr="3"] .login form .login-box label svg[data-v-0f115c45]{font-size:66px}.login form .login-box label input[data-v-0f115c45]{font-size:14px;border:none;width:5.33333rem;height:.8rem;background:none;padding:0 .2rem}[data-dpr="2"] .login form .login-box label input[data-v-0f115c45]{font-size:28px}[data-dpr="3"] .login form .login-box label input[data-v-0f115c45]{font-size:42px}.login .btn-login[data-v-0f115c45]{width:8.26667rem;height:1.33333rem;margin:0 auto;display:block;color:#b84747;background:#fff;border:none;border-radius:.1rem;font-size:16px}[data-dpr="2"] .login .btn-login[data-v-0f115c45]{font-size:32px}[data-dpr="3"] .login .btn-login[data-v-0f115c45]{font-size:48px}.login .support[data-v-0f115c45]{font-size:12px;color:#666;text-align:center;width:100%;position:relative;top:1.6rem}[data-dpr="2"] .login .support[data-v-0f115c45]{font-size:24px}[data-dpr="3"] .login .support[data-v-0f115c45]{font-size:36px}',""])},250:function(t,e,a){var i=a(249);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,a(3).default)("2f30351f",i,!0,{})},302:function(t,e,a){"use strict";a.r(e);var i=a(44),n=a.n(i),o=a(75),r=a.n(o),s=a(0),l=a(9),d=a(74),c=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,p={router:l.a,store:s.a,data:function(){return{company:s.a.state.company,h:c,styles:{height:c+"px"}}},mounted:function(){console.log("窗口高度"+c)},methods:{go:function(){l.a.push("/"+this.company)},login:function(t){var e=this;return r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.auth({userName:document.querySelector("#username").value,passWord:document.querySelector("#password").value});case 2:t.sent,s.a.commit("syncState",{stateName:"myInfo",stateValue:{name:"你猜??",userName:document.querySelector("#username").value,passWord:document.querySelector("#password").value,avatarUrl:"",address:{default:"",container:[]}}}),s.a.commit("syncSession","myInfo"),l.a.push("/"+e.company);case 6:case"end":return t.stop()}},t,e)}))()}}},f=a(2),g=Object(f.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login",style:t.styles},[a("header",{staticClass:"header"},[a("span",{staticClass:"back-btn",on:{click:t.go}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})]),t._v("\n        返回\n      ")]),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(t.company)+"登录")]),t._v(" "),a("span",{staticClass:"option"})]),t._v(" "),a("img",{staticClass:"logo",attrs:{src:"https://static.pipk.top/vueshop/public/images/fst/fst_logo.png"}}),t._v(" "),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"login-box"},[a("label",[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-wode"}})]),t._v(" "),a("input",{attrs:{type:"text",name:"username",id:"username",placeholder:"请输入账号"}})]),t._v(" "),a("label",[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-tubiao202"}})]),t._v(" "),a("input",{attrs:{type:"password",name:"password",id:"password",placeholder:"请输入密码"}})])]),t._v(" "),a("button",{staticClass:"btn-login",on:{click:t.login}},[t._v("登录")])]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",{staticClass:"support"},[this._v("©道成科技 提供技术支持")])])}],!1,function(t){a(250)},"data-v-0f115c45",null);e.default=g.exports}}]);