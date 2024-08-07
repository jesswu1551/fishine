(function(){"use strict";var e={1485:function(e,t,n){var o=n(5130),l=n(6768),a=n(4232);const r={class:"w-full"},s={class:"sidebar pt-10 fixed top-0 bottom-0 border-r border-gray-100 lg:left-0 p-2 w-[300px] overflow-y-auto text-center text-cyan-600 select-none"},i={class:"items-center text-left duration-300 cursor-pointer"},c=(0,l.Lk)("i",{class:"bi bi-house-door-fill"},null,-1),d={class:"items-center text-left duration-300 cursor-pointer"},u=(0,l.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),p={class:"items-center text-left duration-300 cursor-pointer"},m=(0,l.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),b={class:"items-center text-left duration-300 cursor-pointer"},f=(0,l.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),g={class:"items-center text-left duration-300 cursor-pointer"},k=(0,l.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),x=(0,l.Lk)("i",{class:"bi bi-chat-left-text-fill"},null,-1),v={class:"flex w-full items-center"},L={class:"ml-4 font-bold text-lg"},y={class:"cursor-pointer"},h={class:"cursor-pointer"},w={class:"cursor-pointer"},A={class:"main-content relative h-full"};function C(e,t,n,o,C,I){const _=(0,l.g2)("NavBar"),F=(0,l.g2)("BanknotesIcon"),D=(0,l.g2)("router-link"),E=(0,l.g2)("TableCellsIcon"),P=(0,l.g2)("KeyIcon"),z=(0,l.g2)("StarIcon"),M=(0,l.g2)("Squares2X2Icon"),T=(0,l.g2)("UserGroupIcon"),U=(0,l.g2)("ChevronUpIcon"),O=(0,l.g2)("ChevronDownIcon"),W=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(_,{setActive:I.setActive},null,8,["setActive"]),(0,l.Lk)("div",r,[(0,l.Lk)("aside",s,[(0,l.Lk)("div",i,[c,(0,l.bF)(D,{to:"/account",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"account"===C.activeLink}]),onClick:t[0]||(t[0]=e=>I.setActive("account","帳務管理"))},{default:(0,l.k6)((()=>[(0,l.bF)(F,{class:"mr-2 h-5 w-5 inline"}),(0,l.eW)("帳務管理 ")])),_:1},8,["class"])]),(0,l.Lk)("div",d,[u,(0,l.bF)(D,{to:"/list",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"list"===C.activeLink}]),onClick:t[1]||(t[1]=e=>I.setActive("list","名單管理"))},{default:(0,l.k6)((()=>[(0,l.bF)(E,{class:"mr-2 h-5 w-5 inline"}),(0,l.eW)("名單管理 ")])),_:1},8,["class"])]),(0,l.Lk)("div",p,[m,(0,l.bF)(D,{to:"/auth",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"auth"===C.activeLink}]),onClick:t[2]||(t[2]=e=>I.setActive("auth","權限管理"))},{default:(0,l.k6)((()=>[(0,l.bF)(P,{class:"mr-2 h-5 w-5 inline"}),(0,l.eW)("權限管理 ")])),_:1},8,["class"])]),(0,l.Lk)("div",b,[f,(0,l.bF)(D,{to:"/perf",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"perf"===C.activeLink}]),onClick:t[3]||(t[3]=e=>I.setActive("perf","績效管理"))},{default:(0,l.k6)((()=>[(0,l.bF)(z,{class:"mr-2 h-5 w-5 inline"}),(0,l.eW)("績效管理 ")])),_:1},8,["class"])]),(0,l.Lk)("div",g,[k,(0,l.bF)(D,{to:"/product",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"product"===C.activeLink}]),onClick:t[4]||(t[4]=e=>I.setActive("product","商品管理"))},{default:(0,l.k6)((()=>[(0,l.bF)(M,{class:"mr-2 h-5 w-5 inline"}),(0,l.eW)("商品管理 ")])),_:1},8,["class"])]),(0,l.Lk)("div",{class:"py-1 px-4 mt-2 items-center text-left rounded-md duration-300 cursor-pointer",onClick:t[5]||(t[5]=e=>I.dropdown())},[x,(0,l.Lk)("div",v,[(0,l.Lk)("span",L,[(0,l.bF)(T,{class:"h-5 w-5 inline"}),(0,l.eW)(" 會員管理")]),C.isDropdownOpen?((0,l.uX)(),(0,l.Wv)(O,{key:1,class:"ml-4 h-5 w-5 inline"})):((0,l.uX)(),(0,l.Wv)(U,{key:0,class:"ml-4 h-5 w-5 inline"}))])]),(0,l.Lk)("div",{class:(0,a.C4)(["mt-2 mx-auto w-3/5 text-left text-base font-bold text-lg",{hidden:C.isDropdownOpen}])},[(0,l.Lk)("h1",y,[(0,l.bF)(D,{to:"/account",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userList"===C.activeLink}]),onClick:t[6]||(t[6]=e=>I.setActive("member/userList","使用者清單"))},{default:(0,l.k6)((()=>[(0,l.eW)(" 使用者清單 ")])),_:1},8,["class"])]),(0,l.Lk)("h1",h,[(0,l.bF)(D,{to:"/list",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userActionHistroy"===C.activeLink}]),onClick:t[7]||(t[7]=e=>I.setActive("member/userActionHistroy","使用者操作紀錄"))},{default:(0,l.k6)((()=>[(0,l.eW)(" 使用者操作紀錄 ")])),_:1},8,["class"])]),(0,l.Lk)("h1",w,[(0,l.bF)(D,{to:"/auth",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userGroupRole"===C.activeLink}]),onClick:t[8]||(t[8]=e=>I.setActive("member/userGroupRole","群組權限管理"))},{default:(0,l.k6)((()=>[(0,l.eW)(" 群組權限管理 ")])),_:1},8,["class"])])],2)])]),(0,l.Lk)("main",A,[(0,l.bF)(W)])],64)}var I=n.p+"img/logo.2f57c631.png";const _={class:"px-20 fixed w-full flex justify-between items-center bg-white shadow-sm z-50"},F=(0,l.Lk)("img",{alt:"Vue logo",src:I,class:"logo-img mx-2"},null,-1),D={key:0,class:"mt-2 absolute w-40 bg-white border rounded-lg shadow-lg",ref:"dropdown"};function E(e,t,n,o,r,s){const i=(0,l.g2)("router-link"),c=(0,l.g2)("ChevronDownIcon");return(0,l.uX)(),(0,l.CE)("nav",_,[(0,l.bF)(i,{to:"/account",onClick:t[0]||(t[0]=e=>n.setActive("account","帳務管理"))},{default:(0,l.k6)((()=>[F])),_:1}),(0,l.Lk)("div",null,[(0,l.Lk)("button",{class:(0,a.C4)(["py-2 px-4 relative font-bold rounded-full hover:bg-cyan-600 hover:text-white",{"text-white bg-cyan-600":r.isOpen,"text-gray-800":!r.isOpen}]),ref:"dropdownButton",onClick:t[1]||(t[1]=e=>r.isOpen=!r.isOpen)},[(0,l.eW)(" 後台管理系統 "),(0,l.bF)(c,{class:"ml-2 inline h-3 w-3"})],2),r.isOpen?((0,l.uX)(),(0,l.CE)("div",D,[(0,l.Lk)("a",{href:"#",class:"py-2 px-4 my-2 block text-gray-800 text-left hover:bg-cyan-600 hover:text-white",onClick:t[2]||(t[2]=(...e)=>s.handleDropdownItemClick&&s.handleDropdownItemClick(...e))},"登入")],512)):(0,l.Q3)("",!0)])])}var P=n(5305),z={name:"NavBar",components:{ChevronDownIcon:P.A},data(){return{isOpen:!1}},props:{setActive:Function},methods:{handleDropdownItemClick(){this.isOpen=!1},closeDropdownOnOutsideClick(e){const t=this.$refs.dropdown,n=this.$refs.dropdownButton;!this.isOpen||t.contains(e.target)||n.contains(e.target)||(this.isOpen=!1)}},mounted(){document.addEventListener("click",this.closeDropdownOnOutsideClick)},beforeUnmount(){document.removeEventListener("click",this.closeDropdownOnOutsideClick)}},M=n(1241);const T=(0,M.A)(z,[["render",E]]);var U=T,O=n(3413),W=n(5712),X=n(7489),G=n(9707),S=n(1948),J=n(5434),N=n(7902),V={name:"App",components:{NavBar:U,BanknotesIcon:O.A,ChevronUpIcon:W.A,ChevronDownIcon:P.A,KeyIcon:X.A,TableCellsIcon:G.A,UserGroupIcon:S.A,StarIcon:J.A,Squares2X2Icon:N.A},data(){return{isDropdownOpen:!1,activeLink:localStorage.getItem("activeLink")||""}},methods:{dropdown(){this.isDropdownOpen=!this.isDropdownOpen},setActive(e,t){this.activeLink=e,localStorage.setItem("activeLink",e),localStorage.setItem("routeName",t)}},watch:{"$route.path"(e){const t=localStorage.getItem("activeLink")?.replace(/^\//,"");this.activeLink=t||e.replace(/^\//,"")}}};const B=(0,M.A)(V,[["render",C]]);var H=B,R=n(1387);const j={class:"px-20 py-10 text-left"},q={class:"py-2 text-left"},K={class:"text-cyan-600 font-bold"},$=(0,l.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),Q=(0,l.Lk)("span",{class:"text-cyan-600 font-bold"},"權限管理",-1),Y=(0,l.Fv)('<h5 class="title my-2 text-2xl font-bold">權限管理</h5><div class="mt-4 py-4 border border-gray-200 rounded-md"><div class="list-title mx-4 bg-orange-100"><h5 class="p-2 font-bold border border-gray-200">權限類型/群組名稱</h5></div><div class="list-title mx-4 bg-orange-100"><h5 class="p-2 font-bold border border-gray-200">權限類型/群組名稱</h5></div></div>',2);function Z(e,t,n,o,a,r){const s=(0,l.g2)("HomeIcon");return(0,l.uX)(),(0,l.CE)("div",j,[(0,l.Lk)("div",q,[(0,l.Lk)("span",K,[(0,l.bF)(s,{class:"h-4 w-4 inline"}),(0,l.eW)(" 首頁 ")]),$,Q]),Y])}var ee=n(6113),te={name:"AuthManage",components:{HomeIcon:ee.A}};const ne=(0,M.A)(te,[["render",Z]]);var oe=ne;const le={class:"px-20 py-10 text-left"},ae={class:"py-2 text-left"},re={class:"text-cyan-600 font-bold"},se=(0,l.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),ie=(0,l.Lk)("span",{class:"text-cyan-600 font-bold"},"帳務管理",-1),ce=(0,l.Lk)("h5",{class:"title my-2 text-2xl font-bold"},"帳務管理",-1),de={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},ue={class:"border-b border-gray-200"},pe=(0,l.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),me=[pe],be={class:"mb-3 md:flex md:items-center"},fe=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"帳號")],-1),ge={class:"md:w-6/12"},ke={class:"mb-3 md:flex md:items-center"},xe=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"姓名")],-1),ve={class:"md:w-6/12"},Le={class:"mb-3 md:flex md:items-center"},ye=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"群組")],-1),he={class:"md:w-6/12"},we=["value"],Ae={class:"mb-3 md:flex md:items-center"},Ce=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"狀態")],-1),Ie={class:"md:w-6/12 flex space-x-4"},_e=["value"],Fe=["id","value"],De=["for"],Ee={class:"mt-6 text-right"},Pe={class:"bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 ml-3 rounded-full"},ze={class:"mt-10 py-2 px-4 border rounded-md"},Me={id:"accountDatatable",class:"display"},Te=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"帳號"),(0,l.Lk)("th",null,"姓名"),(0,l.Lk)("th",null,"群組"),(0,l.Lk)("th",null,"狀態")])],-1);function Ue(e,t,n,r,s,i){const c=(0,l.g2)("HomeIcon"),d=(0,l.g2)("MagnifyingGlassIcon"),u=(0,l.g2)("DocumentArrowDownIcon");return(0,l.uX)(),(0,l.CE)("div",le,[(0,l.Lk)("div",ae,[(0,l.Lk)("span",re,[(0,l.bF)(c,{class:"h-4 w-4 inline"}),(0,l.eW)(" 首頁 ")]),se,ie]),ce,(0,l.Lk)("div",de,[(0,l.Lk)("div",ue,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,l.eW)(" 篩選 "),((0,l.uX)(),(0,l.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===s.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},me,2))])]),(0,l.bo)((0,l.Lk)("div",{class:(0,a.C4)(["px-6 py-4 bg-white rounded-b",{hidden:1!==s.activeIndex}])},[(0,l.Lk)("div",null,[(0,l.Lk)("div",be,[fe,(0,l.Lk)("div",ge,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.userAccount=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入帳號"},null,512),[[o.Jo,s.userAccount]])])]),(0,l.Lk)("div",ke,[xe,(0,l.Lk)("div",ve,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.username=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入姓名"},null,512),[[o.Jo,s.username]])])]),(0,l.Lk)("div",Le,[ye,(0,l.Lk)("div",he,[(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.group=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.groupList,(e=>((0,l.uX)(),(0,l.CE)("option",{key:e.id,value:e.value},(0,a.v_)(e.text),9,we)))),128))],512),[[o.u1,s.group]])])]),(0,l.Lk)("div",Ae,[Ce,(0,l.Lk)("div",Ie,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.statusList,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,value:e.value,class:"flex items-center space-x-1"},[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:e.id,value:e.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s.status=e),name:"options",class:"focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 cursor-pointer"},null,8,Fe),[[o.XL,s.status]]),(0,l.Lk)("label",{for:e.id,class:"text-gray-700 cursor-pointer"},(0,a.v_)(e.text),9,De)],8,_e)))),128))])]),(0,l.Lk)("div",Ee,[(0,l.Lk)("button",{class:"bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full",onClick:t[5]||(t[5]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,l.bF)(d,{class:"h-4 w-4 inline"}),(0,l.eW)("篩選 ")]),(0,l.Lk)("button",Pe,[(0,l.bF)(u,{class:"h-4 w-4 inline"}),(0,l.eW)("匯出 ")])])])],2),[[o.aG,1===s.activeIndex]])]),(0,l.Lk)("div",ze,[(0,l.Lk)("table",Me,[Te,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.items,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,a.v_)(e.account),1),(0,l.Lk)("td",null,(0,a.v_)(e.name),1),(0,l.Lk)("td",null,(0,a.v_)(e.group),1),(0,l.Lk)("td",null,(0,a.v_)(e.status),1)])))),128))])])])])}var Oe=n(973),We=n(3148),Xe=n(6587),Ge=n.n(Xe),Se={name:"AccountManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Oe.A,DocumentArrowDownIcon:We.A},data(){return{activeIndex:1,userAccount:"",username:"",group:"99",status:"99",statusList:[{id:1,text:"全部",value:"99"},{id:2,text:"啟用",value:"1"},{id:3,text:"禁用",value:"0"}],groupList:[{id:1,text:"全部",value:"99"},{id:2,text:"Admin",value:"1"},{id:3,text:"User",value:"2"},{id:4,text:"Guest",value:"3"}],items:[{id:1,userAccount:"user01",username:"John Doe",group:"Admin",status:"啟用"},{id:2,userAccount:"user02",username:"Jane Smith",group:"User",status:"禁用"},{id:3,userAccount:"user03",username:"Paul Brown",group:"Guest",status:"啟用"},{id:4,userAccount:"user04",username:"Mary Johnson",group:"Admin",status:"禁用"},{id:5,userAccount:"user05",username:"James Wilson",group:"User",status:"啟用"},{id:6,userAccount:"user06",username:"Patricia Garcia",group:"Guest",status:"禁用"},{id:7,userAccount:"user07",username:"Robert Martinez",group:"Admin",status:"啟用"},{id:8,userAccount:"user08",username:"Linda Rodriguez",group:"User",status:"禁用"},{id:9,userAccount:"user09",username:"Michael Hernandez",group:"Guest",status:"啟用"},{id:10,userAccount:"user10",username:"Barbara Moore",group:"Admin",status:"禁用"},{id:11,userAccount:"user11",username:"William Jackson",group:"User",status:"啟用"},{id:12,userAccount:"user12",username:"Elizabeth Clark",group:"Guest",status:"禁用"}],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Ge()("#accountDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"userAccount",title:"帳號"},{data:"username",title:"姓名"},{data:"group",title:"群組"},{data:"status",title:"狀態",render:function(e){let t="";return"啟用"==e?t="bg-cyan-50 text-cyan-600 border-cyan-200":"禁用"==e&&(t="bg-orange-50 text-orange-600 border-orange-200"),`<span class="px-2 py-1 border rounded ${t}">${e}</span>`}}]})},applyFilter(){const e={userAccount:this.userAccount.trim().toLowerCase(),username:this.username.trim().toLowerCase(),group:this.groupList.find((e=>e.value==this.group)),status:this.statusList.find((e=>e.value==this.status))};e.userAccount||e.username||"99"!==e.group.value||"99"!==e.status.value?this.filteredItems=this.items.filter((t=>(console.log(!e.userAccount||t.userAccount.toLowerCase().includes(e.userAccount)),(!e.userAccount||t.userAccount.toLowerCase().includes(e.userAccount))&&(!e.username||t.username.toLowerCase().includes(e.username))&&("99"===e.group.value||t.group.toLowerCase()===e.group.text.toLowerCase())&&("99"===e.status.value||t.status.toLowerCase()===e.status.text.toLowerCase())))):this.filteredItems=this.items,this.table.clear().rows.add(this.filteredItems).draw()}},mounted(){this.initializeDataTable()}};const Je=(0,M.A)(Se,[["render",Ue]]);var Ne=Je;const Ve={class:"px-20 py-10 text-left"},Be={class:"py-2 text-left"},He={class:"text-cyan-600 font-bold"},Re=(0,l.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),je=(0,l.Lk)("span",{class:"text-cyan-600 font-bold"},"名單管理",-1),qe=(0,l.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"名單管理",-1),Ke={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},$e={class:"border-b border-gray-200"},Qe=(0,l.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),Ye=[Qe],Ze={class:"px-6 py-4 bg-white rounded-b"},et={class:"md:flex md:items-center mb-3"},tt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"操作時間")],-1),nt={class:"md:w-6/12"},ot={class:"flex items-stretch"},lt=(0,l.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),at={class:"mb-3 md:flex md:items-center"},rt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-group"},"操作動作")],-1),st={class:"md:w-6/12"},it=(0,l.Lk)("option",{value:"99"},"全部",-1),ct=[it],dt={class:"md:flex md:items-center mb-3"},ut=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"使用者名稱")],-1),pt={class:"md:w-6/12"},mt={class:"mb-3 md:flex md:items-center"},bt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"備註")],-1),ft={class:"md:w-6/12 flex space-x-4"},gt={class:"mt-6 text-right"},kt={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},xt={class:"mt-10 py-2 px-4 border rounded-md"},vt={id:"listDatatable",class:"display"},Lt=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"操作時間"),(0,l.Lk)("th",null,"操作動作"),(0,l.Lk)("th",null,"使用者名稱"),(0,l.Lk)("th",null,"備註")])],-1);function yt(e,t,n,r,s,i){const c=(0,l.g2)("HomeIcon"),d=(0,l.g2)("MagnifyingGlassIcon"),u=(0,l.g2)("DocumentArrowDownIcon");return(0,l.uX)(),(0,l.CE)("div",Ve,[(0,l.Lk)("div",Be,[(0,l.Lk)("span",He,[(0,l.bF)(c,{class:"h-4 w-4 inline"}),(0,l.eW)(" 首頁 ")]),Re,je]),qe,(0,l.Lk)("div",Ke,[(0,l.Lk)("div",$e,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,l.eW)(" 篩選 "),((0,l.uX)(),(0,l.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===s.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Ye,2))])]),(0,l.bo)((0,l.Lk)("div",Ze,[(0,l.Lk)("div",null,[(0,l.Lk)("div",et,[tt,(0,l.Lk)("div",nt,[(0,l.Lk)("div",ot,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateStart]]),lt,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateEnd]])])])]),(0,l.Lk)("div",at,[rt,(0,l.Lk)("div",st,[(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.selectedAction=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},ct,512),[[o.u1,s.selectedAction]])])]),(0,l.Lk)("div",dt,[ut,(0,l.Lk)("div",pt,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.userName=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入使用者名稱"},null,512),[[o.Jo,s.userName]])])]),(0,l.Lk)("div",mt,[bt,(0,l.Lk)("div",ft,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>s.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[o.Jo,s.note]])])]),(0,l.Lk)("div",gt,[(0,l.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[6]||(t[6]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,l.bF)(d,{class:"h-4 w-4 inline"}),(0,l.eW)(" 篩選 ")]),(0,l.Lk)("button",kt,[(0,l.bF)(u,{class:"h-4 w-4 inline"}),(0,l.eW)(" 匯出 ")])])])],512),[[o.aG,1===s.activeIndex]])]),(0,l.Lk)("div",xt,[(0,l.Lk)("table",vt,[Lt,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.items,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,a.v_)(e.operateDate),1),(0,l.Lk)("td",null,(0,a.v_)(e.operateAction),1),(0,l.Lk)("td",null,(0,a.v_)(e.username),1),(0,l.Lk)("td",null,(0,a.v_)(e.note),1)])))),128))])])])])}var ht={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Oe.A,DocumentArrowDownIcon:We.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",selectedAction:"99",userName:"",note:"",items:[],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Ge()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"operateDate",title:"操作時間"},{data:"operateAction",title:"操作動作"},{data:"username",title:"使用者名稱"},{data:"note",title:"備註"}]})},applyFilter(){}},mounted(){this.initializeDataTable()}};const wt=(0,M.A)(ht,[["render",yt]]);var At=wt;const Ct={class:"px-20 py-10 text-left"},It={class:"py-2 text-left"},_t={class:"text-cyan-600 font-bold"},Ft=(0,l.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),Dt=(0,l.Lk)("span",{class:"text-cyan-600 font-bold"},"名單管理",-1),Et=(0,l.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"名單管理",-1),Pt={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},zt={class:"border-b border-gray-200"},Mt=(0,l.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),Tt=[Mt],Ut={class:"px-6 py-4 bg-white rounded-b"},Ot={class:"md:flex md:items-center mb-3"},Wt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"操作時間")],-1),Xt={class:"md:w-6/12"},Gt={class:"flex items-stretch"},St=(0,l.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),Jt={class:"mb-3 md:flex md:items-center"},Nt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-group"},"操作動作")],-1),Vt={class:"md:w-6/12"},Bt=(0,l.Lk)("option",{value:"99"},"全部",-1),Ht=[Bt],Rt={class:"md:flex md:items-center mb-3"},jt=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"使用者名稱")],-1),qt={class:"md:w-6/12"},Kt={class:"mb-3 md:flex md:items-center"},$t=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"備註")],-1),Qt={class:"md:w-6/12 flex space-x-4"},Yt={class:"mt-6 text-right"},Zt={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},en={class:"mt-10 py-2 px-4 border rounded-md"},tn={id:"listDatatable",class:"display"},nn=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"推薦碼"),(0,l.Lk)("th",null,"會員名稱"),(0,l.Lk)("th",null,"群組"),(0,l.Lk)("th",null,"積點"),(0,l.Lk)("th",null,"百分比"),(0,l.Lk)("th")])],-1),on=(0,l.Lk)("td",null,null,-1);function ln(e,t,n,r,s,i){const c=(0,l.g2)("HomeIcon"),d=(0,l.g2)("MagnifyingGlassIcon"),u=(0,l.g2)("DocumentArrowDownIcon");return(0,l.uX)(),(0,l.CE)("div",Ct,[(0,l.Lk)("div",It,[(0,l.Lk)("span",_t,[(0,l.bF)(c,{class:"h-4 w-4 inline"}),(0,l.eW)(" 首頁 ")]),Ft,Dt]),Et,(0,l.Lk)("div",Pt,[(0,l.Lk)("div",zt,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,l.eW)(" 篩選 "),((0,l.uX)(),(0,l.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===s.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Tt,2))])]),(0,l.bo)((0,l.Lk)("div",Ut,[(0,l.Lk)("div",null,[(0,l.Lk)("div",Ot,[Wt,(0,l.Lk)("div",Xt,[(0,l.Lk)("div",Gt,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateStart]]),St,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateEnd]])])])]),(0,l.Lk)("div",Jt,[Nt,(0,l.Lk)("div",Vt,[(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.selectedAction=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},Ht,512),[[o.u1,s.selectedAction]])])]),(0,l.Lk)("div",Rt,[jt,(0,l.Lk)("div",qt,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.userName=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入使用者名稱"},null,512),[[o.Jo,s.userName]])])]),(0,l.Lk)("div",Kt,[$t,(0,l.Lk)("div",Qt,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>s.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[o.Jo,s.note]])])]),(0,l.Lk)("div",Yt,[(0,l.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[6]||(t[6]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,l.bF)(d,{class:"h-4 w-4 inline"}),(0,l.eW)(" 篩選 ")]),(0,l.Lk)("button",Zt,[(0,l.bF)(u,{class:"h-4 w-4 inline"}),(0,l.eW)(" 匯出 ")])])])],512),[[o.aG,1===s.activeIndex]])]),(0,l.Lk)("div",en,[(0,l.Lk)("table",tn,[nn,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.items,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,a.v_)(e.refCode),1),(0,l.Lk)("td",null,(0,a.v_)(e.username),1),(0,l.Lk)("td",null,(0,a.v_)(e.group),1),(0,l.Lk)("td",null,(0,a.v_)(e.point),1),(0,l.Lk)("td",null,(0,a.v_)(e.percent),1),on])))),128))])])])])}var an={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Oe.A,DocumentArrowDownIcon:We.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",selectedAction:"99",userName:"",note:"",groupList:[{id:1,text:"全部",value:"99"},{id:2,text:"Admin",value:"1"},{id:3,text:"User",value:"2"},{id:4,text:"Guest",value:"3"}],items:[{id:1,refCode:"F2407001",username:"John Doe",group:"Admin",point:200,percent:""},{id:2,refCode:"F2407002",username:"Jane Smith",group:"User",point:194,percent:""},{id:3,refCode:"F2407003",username:"Paul Brown",group:"Guest",point:226,percent:""},{id:4,refCode:"F2407004",username:"Mary Johnson",group:"Admin",point:1340,percent:""},{id:5,refCode:"F2407005",username:"James Wilson",group:"User",point:850,percent:""},{id:6,refCode:"F2407006",username:"Patricia Garcia",group:"Guest",point:0,percent:""},{id:7,refCode:"F2407007",username:"Robert Martinez",group:"Admin",point:570,percent:""},{id:8,refCode:"F2407008",username:"Linda Rodriguez",group:"User",point:880,percent:""},{id:9,refCode:"F2407009",username:"Michael Hernandez",group:"Guest",point:461,percent:""},{id:10,refCode:"F2407010",username:"Barbara Moore",group:"Admin",point:364,percent:""},{id:11,refCode:"F2407011",username:"William Jackson",group:"User",point:778,percent:""},{id:12,refCode:"F2407012",username:"Elizabeth Clark",group:"Guest",point:2240,percent:""}],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Ge()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"refCode",title:"推薦碼"},{data:"username",title:"會員名稱"},{data:"group",title:"群組"},{data:"point",title:"積點"},{data:"percent",title:"百分比",render:function(e,t,n){let o=8103,l=n.point/o*100;return l.toFixed(2)+"%"}},{title:"",render:function(){return"<div style='text-align: center;'><button class='py-1 px-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded-sm'>查看更多</button></div>"}}],order:{name:"point",dir:"asc"}})},applyFilter(){}},mounted(){this.initializeDataTable()}};const rn=(0,M.A)(an,[["render",ln]]);var sn=rn;const cn={class:"px-20 py-10 text-left"},dn={class:"py-2 text-left"},un={class:"text-cyan-600 font-bold"},pn=(0,l.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),mn=(0,l.Lk)("span",{class:"text-cyan-600 font-bold"},"商品管理",-1),bn=(0,l.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"商品管理",-1),fn={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md",style:{display:"none"}},gn={class:"border-b border-gray-200"},kn=(0,l.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),xn=[kn],vn={class:"px-6 py-4 bg-white rounded-b"},Ln={class:"mb-3 md:flex md:items-center"},yn=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"商品名稱")],-1),hn={class:"md:w-6/12 flex space-x-4"},wn={class:"md:flex md:items-center mb-3"},An=(0,l.Lk)("div",{class:"md:w-2/12"},[(0,l.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"建立時間")],-1),Cn={class:"md:w-6/12"},In={class:"flex items-stretch"},_n=(0,l.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),Fn={class:"mt-6 text-right"},Dn={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},En={class:"mt-10 py-2 px-4 border rounded-md"},Pn={id:"listDatatable",class:"display"},zn=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"商品種類"),(0,l.Lk)("th",null,"規格"),(0,l.Lk)("th",null,"單位數量"),(0,l.Lk)("th",null,"事業體底價"),(0,l.Lk)("th",null,"營銷人員成本價"),(0,l.Lk)("th",null,"營銷售價"),(0,l.Lk)("th",null,"市場定價"),(0,l.Lk)("th",null,"備註")])],-1);function Mn(e,t,n,r,s,i){const c=(0,l.g2)("HomeIcon"),d=(0,l.g2)("MagnifyingGlassIcon"),u=(0,l.g2)("DocumentArrowDownIcon");return(0,l.uX)(),(0,l.CE)("div",cn,[(0,l.Lk)("div",dn,[(0,l.Lk)("span",un,[(0,l.bF)(c,{class:"h-4 w-4 inline"}),(0,l.eW)(" 首頁 ")]),pn,mn]),bn,(0,l.Lk)("div",fn,[(0,l.Lk)("div",gn,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,l.eW)(" 篩選 "),((0,l.uX)(),(0,l.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===s.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},xn,2))])]),(0,l.bo)((0,l.Lk)("div",vn,[(0,l.Lk)("div",null,[(0,l.Lk)("div",Ln,[yn,(0,l.Lk)("div",hn,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[o.Jo,s.note]])])]),(0,l.Lk)("div",wn,[An,(0,l.Lk)("div",Cn,[(0,l.Lk)("div",In,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateStart]]),_n,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[o.Jo,s.dateEnd]])])])]),(0,l.Lk)("div",Fn,[(0,l.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[4]||(t[4]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,l.bF)(d,{class:"h-4 w-4 inline"}),(0,l.eW)(" 篩選 ")]),(0,l.Lk)("button",Dn,[(0,l.bF)(u,{class:"h-4 w-4 inline"}),(0,l.eW)(" 匯出 ")])])])],512),[[o.aG,1===s.activeIndex]])]),(0,l.Lk)("div",En,[(0,l.Lk)("table",Pn,[zn,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.items,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,a.v_)(e.item),1),(0,l.Lk)("td",null,(0,a.v_)(e.size),1),(0,l.Lk)("td",null,(0,a.v_)(e.quantity),1),(0,l.Lk)("td",null,(0,a.v_)(e.lowPrice),1),(0,l.Lk)("td",null,(0,a.v_)(e.costPrice),1),(0,l.Lk)("td",null,(0,a.v_)(e.marketPrice),1),(0,l.Lk)("td",null,(0,a.v_)(e.sellPrice),1),(0,l.Lk)("td",null,(0,a.v_)(e.note),1)])))),128))])])])])}var Tn={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Oe.A,DocumentArrowDownIcon:We.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",note:"",items:[{id:1,item:"酵素白蝦(生鮮)",size:"中",quantity:"20 隻以上",lowPrice:190,costPrice:220,marketPrice:250,sellPrice:300,note:""},{id:2,item:"酵素白蝦(生鮮)",size:"大",quantity:"16-20 隻",lowPrice:220,costPrice:250,marketPrice:280,sellPrice:330,note:""},{id:3,item:"酵素蝦仁(生鮮)",size:"中",quantity:"20 隻以上",lowPrice:190,costPrice:230,marketPrice:260,sellPrice:310,note:""},{id:4,item:"酵素蝦仁(生鮮)",size:"大",quantity:"16-20 隻",lowPrice:220,costPrice:260,marketPrice:290,sellPrice:340,note:""},{id:5,item:"蝦酥",size:"原味",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:6,item:"蝦酥",size:"椒鹽",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:7,item:"蝦酥",size:"芥末",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:7,item:"蝦酥",size:"麻辣",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""}],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Ge()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},pageLength:25,order:[[0,"desc"]],columns:[{data:"item",title:"商品種類"},{data:"size",title:"規格"},{data:"quantity",title:"單位數量"},{data:"lowPrice",title:"事業體<br>底價",class:"dt-body-center"},{data:"costPrice",title:"營銷人員<br>成本價",class:"dt-body-center"},{data:"marketPrice",title:"營銷售價",class:"dt-body-center"},{data:"sellPrice",title:"市場定價",class:"dt-body-center"},{data:"note",title:"備註"}]})},applyFilter(){}},mounted(){this.initializeDataTable()}};const Un=(0,M.A)(Tn,[["render",Mn]]);var On=Un;const Wn=(0,R.aE)({history:(0,R.LA)("/fishine/"),routes:[{path:"/account",component:Ne},{path:"/list",component:At},{path:"/auth",component:oe},{path:"/perf",component:sn},{path:"/product",component:On},{path:"/",redirect:"/account"},{path:"/index",component:Ne}]});Wn.beforeEach(((e,t,n)=>{t.path&&localStorage.setItem("previousPath",t.path);const o=localStorage.getItem("routeName");document.title=o?`${o} | 全民養殖平台`:"全民養殖平台",n()}));var Xn=Wn;n(1461);(0,o.Ef)(H).use(Xn).mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,a){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],l=e[d][1],a=e[d][2];for(var s=!0,i=0;i<o.length;i++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,l,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/fishine/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,a,r=o[0],s=o[1],i=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(i)var d=i(n)}for(t&&t(o);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkfish_proj"]=self["webpackChunkfish_proj"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1485)}));o=n.O(o)})();
//# sourceMappingURL=app.5f8644ce.js.map