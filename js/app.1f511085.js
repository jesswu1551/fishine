(function(){"use strict";var e={2795:function(e,t,l){var n=l(5130),o=l(6768),a=l(4232);const s={class:"w-full"},r={class:"sidebar pt-10 fixed top-0 bottom-0 border-r border-gray-100 lg:left-0 p-2 w-[300px] overflow-y-auto text-center text-cyan-600 select-none"},i={class:"items-center text-left duration-300 cursor-pointer"},c=(0,o.Lk)("i",{class:"bi bi-house-door-fill"},null,-1),d={class:"items-center text-left duration-300 cursor-pointer"},u=(0,o.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),b={class:"items-center text-left duration-300 cursor-pointer"},m=(0,o.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),p={class:"items-center text-left duration-300 cursor-pointer"},f=(0,o.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),k={class:"items-center text-left duration-300 cursor-pointer"},g=(0,o.Lk)("i",{class:"bi bi-bookmark-fill"},null,-1),x=(0,o.Lk)("i",{class:"bi bi-chat-left-text-fill"},null,-1),v={class:"flex w-full items-center"},y={class:"ml-4 font-bold text-lg"},L={class:"cursor-pointer"},h={class:"cursor-pointer"},w={class:"cursor-pointer"},A={class:"main-content relative h-full"};function C(e,t,l,n,C,I){const _=(0,o.g2)("NavBar"),D=(0,o.g2)("BanknotesIcon"),F=(0,o.g2)("router-link"),E=(0,o.g2)("TableCellsIcon"),P=(0,o.g2)("KeyIcon"),z=(0,o.g2)("StarIcon"),T=(0,o.g2)("Squares2X2Icon"),O=(0,o.g2)("UserGroupIcon"),M=(0,o.g2)("ChevronUpIcon"),X=(0,o.g2)("ChevronDownIcon"),U=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(_,{setActive:I.setActive},null,8,["setActive"]),(0,o.Lk)("div",s,[(0,o.Lk)("aside",r,[(0,o.Lk)("div",i,[c,(0,o.bF)(F,{to:"/account",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"account"===C.activeLink}]),onClick:t[0]||(t[0]=e=>I.setActive("account","帳務管理"))},{default:(0,o.k6)((()=>[(0,o.bF)(D,{class:"mr-2 h-5 w-5 inline"}),(0,o.eW)("帳務管理 ")])),_:1},8,["class"])]),(0,o.Lk)("div",d,[u,(0,o.bF)(F,{to:"/list",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"list"===C.activeLink}]),onClick:t[1]||(t[1]=e=>I.setActive("list","名單管理"))},{default:(0,o.k6)((()=>[(0,o.bF)(E,{class:"mr-2 h-5 w-5 inline"}),(0,o.eW)("名單管理 ")])),_:1},8,["class"])]),(0,o.Lk)("div",b,[m,(0,o.bF)(F,{to:"/auth",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"auth"===C.activeLink}]),onClick:t[2]||(t[2]=e=>I.setActive("auth","權限管理"))},{default:(0,o.k6)((()=>[(0,o.bF)(P,{class:"mr-2 h-5 w-5 inline"}),(0,o.eW)("權限管理 ")])),_:1},8,["class"])]),(0,o.Lk)("div",p,[f,(0,o.bF)(F,{to:"/perf",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"perf"===C.activeLink}]),onClick:t[3]||(t[3]=e=>I.setActive("perf","績效管理"))},{default:(0,o.k6)((()=>[(0,o.bF)(z,{class:"mr-2 h-5 w-5 inline"}),(0,o.eW)("績效管理 ")])),_:1},8,["class"])]),(0,o.Lk)("div",k,[g,(0,o.bF)(F,{to:"/product",class:(0,a.C4)(["py-2 px-4 w-100 block font-bold text-lg rounded",{"bg-orange-100":"product"===C.activeLink}]),onClick:t[4]||(t[4]=e=>I.setActive("product","商品管理"))},{default:(0,o.k6)((()=>[(0,o.bF)(T,{class:"mr-2 h-5 w-5 inline"}),(0,o.eW)("商品管理 ")])),_:1},8,["class"])]),(0,o.Lk)("div",{class:"py-1 px-4 mt-2 items-center text-left rounded-md duration-300 cursor-pointer",onClick:t[5]||(t[5]=e=>I.dropdown())},[x,(0,o.Lk)("div",v,[(0,o.Lk)("span",y,[(0,o.bF)(O,{class:"h-5 w-5 inline"}),(0,o.eW)(" 會員管理")]),C.isDropdownOpen?((0,o.uX)(),(0,o.Wv)(X,{key:1,class:"ml-4 h-5 w-5 inline"})):((0,o.uX)(),(0,o.Wv)(M,{key:0,class:"ml-4 h-5 w-5 inline"}))])]),(0,o.Lk)("div",{class:(0,a.C4)(["mt-2 mx-auto w-3/5 text-left text-base font-bold text-lg",{hidden:C.isDropdownOpen}])},[(0,o.Lk)("h1",L,[(0,o.bF)(F,{to:"/account",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userList"===C.activeLink}]),onClick:t[6]||(t[6]=e=>I.setActive("member/userList","使用者清單"))},{default:(0,o.k6)((()=>[(0,o.eW)(" 使用者清單 ")])),_:1},8,["class"])]),(0,o.Lk)("h1",h,[(0,o.bF)(F,{to:"/list",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userActionHistroy"===C.activeLink}]),onClick:t[7]||(t[7]=e=>I.setActive("member/userActionHistroy","使用者操作紀錄"))},{default:(0,o.k6)((()=>[(0,o.eW)(" 使用者操作紀錄 ")])),_:1},8,["class"])]),(0,o.Lk)("h1",w,[(0,o.bF)(F,{to:"/auth",class:(0,a.C4)(["p-2 mt-1 w-100 block font-bold text-lg rounded",{"bg-orange-100":"member/userGroupRole"===C.activeLink}]),onClick:t[8]||(t[8]=e=>I.setActive("member/userGroupRole","群組權限管理"))},{default:(0,o.k6)((()=>[(0,o.eW)(" 群組權限管理 ")])),_:1},8,["class"])])],2)])]),(0,o.Lk)("main",A,[(0,o.bF)(U)])],64)}var I=l.p+"img/logo.2f57c631.png";const _={class:"px-20 fixed w-full flex justify-between items-center bg-white shadow-sm z-50"},D=(0,o.Lk)("img",{alt:"Vue logo",src:I,class:"logo-img mx-2"},null,-1),F={key:0,class:"mt-2 absolute w-40 bg-white border rounded-lg shadow-lg",ref:"dropdown"};function E(e,t,l,n,s,r){const i=(0,o.g2)("router-link"),c=(0,o.g2)("ChevronDownIcon");return(0,o.uX)(),(0,o.CE)("nav",_,[(0,o.bF)(i,{to:"/account",onClick:t[0]||(t[0]=e=>l.setActive("account","帳務管理"))},{default:(0,o.k6)((()=>[D])),_:1}),(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:(0,a.C4)(["py-2 px-4 relative font-bold rounded-full hover:bg-cyan-600 hover:text-white",{"text-white bg-cyan-600":s.isOpen,"text-gray-800":!s.isOpen}]),ref:"dropdownButton",onClick:t[1]||(t[1]=e=>s.isOpen=!s.isOpen)},[(0,o.eW)(" 後台管理系統 "),(0,o.bF)(c,{class:"ml-2 inline h-3 w-3"})],2),s.isOpen?((0,o.uX)(),(0,o.CE)("div",F,[(0,o.Lk)("a",{href:"#",class:"py-2 px-4 my-2 block text-gray-800 text-left hover:bg-cyan-600 hover:text-white",onClick:t[2]||(t[2]=(...e)=>r.handleDropdownItemClick&&r.handleDropdownItemClick(...e))},"登入")],512)):(0,o.Q3)("",!0)])])}var P=l(5305),z={name:"NavBar",components:{ChevronDownIcon:P.A},data(){return{isOpen:!1}},props:{setActive:Function},methods:{handleDropdownItemClick(){this.isOpen=!1},closeDropdownOnOutsideClick(e){const t=this.$refs.dropdown,l=this.$refs.dropdownButton;!this.isOpen||t.contains(e.target)||l.contains(e.target)||(this.isOpen=!1)}},mounted(){document.addEventListener("click",this.closeDropdownOnOutsideClick)},beforeUnmount(){document.removeEventListener("click",this.closeDropdownOnOutsideClick)}},T=l(1241);const O=(0,T.A)(z,[["render",E]]);var M=O,X=l(3413),U=l(5712),W=l(7489),S=l(9707),G=l(1948),N=l(5434),J=l(7902),V={name:"App",components:{NavBar:M,BanknotesIcon:X.A,ChevronUpIcon:U.A,ChevronDownIcon:P.A,KeyIcon:W.A,TableCellsIcon:S.A,UserGroupIcon:G.A,StarIcon:N.A,Squares2X2Icon:J.A},data(){return{isDropdownOpen:!1,activeLink:localStorage.getItem("activeLink")||""}},methods:{dropdown(){this.isDropdownOpen=!this.isDropdownOpen},setActive(e,t){this.activeLink=e,localStorage.setItem("activeLink",e),localStorage.setItem("routeName",t)}},watch:{"$route.path"(e){const t=localStorage.getItem("activeLink")?.replace(/^\//,"");this.activeLink=t||e.replace(/^\//,"")}}};const j=(0,T.A)(V,[["render",C]]);var B=j,H=l(1387);const q={class:"px-20 py-10 text-left"},R={class:"py-2 text-left"},K={class:"text-cyan-600 font-bold"},$=(0,o.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),Q=(0,o.Lk)("span",{class:"text-cyan-600 font-bold"},"權限管理",-1),Y=(0,o.Fv)('<h5 class="title my-2 text-2xl font-bold">權限管理</h5><div class="mt-4 py-4 border border-gray-200 rounded-md"><div class="list-title mx-4 bg-orange-100"><h5 class="p-2 font-bold border border-gray-200">權限類型/群組名稱</h5></div><div class="list-title mx-4 bg-orange-100"><h5 class="p-2 font-bold border border-gray-200">權限類型/群組名稱</h5></div></div>',2);function Z(e,t,l,n,a,s){const r=(0,o.g2)("HomeIcon");return(0,o.uX)(),(0,o.CE)("div",q,[(0,o.Lk)("div",R,[(0,o.Lk)("span",K,[(0,o.bF)(r,{class:"h-4 w-4 inline"}),(0,o.eW)(" 首頁 ")]),$,Q]),Y])}var ee=l(6113),te={name:"AuthManage",components:{HomeIcon:ee.A}};const le=(0,T.A)(te,[["render",Z]]);var ne=le;const oe={class:"px-20 py-10 text-left"},ae={class:"py-2 text-left"},se={class:"text-cyan-600 font-bold"},re=(0,o.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),ie=(0,o.Lk)("span",{class:"text-cyan-600 font-bold"},"帳務管理",-1),ce=(0,o.Lk)("h5",{class:"title my-2 text-2xl font-bold"},"帳務管理",-1),de={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},ue={class:"border-b border-gray-200"},be=(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),me=[be],pe={class:"mb-3 md:flex md:items-center"},fe=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"帳號")],-1),ke={class:"md:w-6/12"},ge={class:"mb-3 md:flex md:items-center"},xe=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"姓名")],-1),ve={class:"md:w-6/12"},ye={class:"mb-3 md:flex md:items-center"},Le=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"群組")],-1),he={class:"md:w-6/12"},we=["value"],Ae={class:"mb-3 md:flex md:items-center"},Ce=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"狀態")],-1),Ie={class:"md:w-6/12 flex space-x-4"},_e=["value"],De=["id","value"],Fe=["for"],Ee={class:"mt-6 text-right"},Pe={class:"bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 ml-3 rounded-full"},ze={class:"mt-10 py-2 px-4 border rounded-md"},Te={id:"accountDatatable",class:"display"},Oe=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"帳號"),(0,o.Lk)("th",null,"姓名"),(0,o.Lk)("th",null,"群組"),(0,o.Lk)("th",null,"狀態")])],-1);function Me(e,t,l,s,r,i){const c=(0,o.g2)("HomeIcon"),d=(0,o.g2)("MagnifyingGlassIcon"),u=(0,o.g2)("DocumentArrowDownIcon");return(0,o.uX)(),(0,o.CE)("div",oe,[(0,o.Lk)("div",ae,[(0,o.Lk)("span",se,[(0,o.bF)(c,{class:"h-4 w-4 inline"}),(0,o.eW)(" 首頁 ")]),re,ie]),ce,(0,o.Lk)("div",de,[(0,o.Lk)("div",ue,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,o.eW)(" 篩選 "),((0,o.uX)(),(0,o.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===r.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},me,2))])]),(0,o.bo)((0,o.Lk)("div",{class:(0,a.C4)(["px-6 py-4 bg-white rounded-b",{hidden:1!==r.activeIndex}])},[(0,o.Lk)("div",null,[(0,o.Lk)("div",pe,[fe,(0,o.Lk)("div",ke,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.userAccount=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入帳號"},null,512),[[n.Jo,r.userAccount]])])]),(0,o.Lk)("div",ge,[xe,(0,o.Lk)("div",ve,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.username=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入姓名"},null,512),[[n.Jo,r.username]])])]),(0,o.Lk)("div",ye,[Le,(0,o.Lk)("div",he,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.group=e),class:"border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.groupList,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.value},(0,a.v_)(e.text),9,we)))),128))],512),[[n.u1,r.group]])])]),(0,o.Lk)("div",Ae,[Ce,(0,o.Lk)("div",Ie,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.statusList,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,value:e.value,class:"flex items-center space-x-1"},[(0,o.bo)((0,o.Lk)("input",{type:"radio",id:e.id,value:e.value,"onUpdate:modelValue":t[4]||(t[4]=e=>r.status=e),name:"options",class:"focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 cursor-pointer"},null,8,De),[[n.XL,r.status]]),(0,o.Lk)("label",{for:e.id,class:"text-gray-700 cursor-pointer"},(0,a.v_)(e.text),9,Fe)],8,_e)))),128))])]),(0,o.Lk)("div",Ee,[(0,o.Lk)("button",{class:"bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full",onClick:t[5]||(t[5]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,o.bF)(d,{class:"h-4 w-4 inline"}),(0,o.eW)("篩選 ")]),(0,o.Lk)("button",Pe,[(0,o.bF)(u,{class:"h-4 w-4 inline"}),(0,o.eW)("匯出 ")])])])],2),[[n.aG,1===r.activeIndex]])]),(0,o.Lk)("div",ze,[(0,o.Lk)("table",Te,[Oe,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.items,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",null,(0,a.v_)(e.account),1),(0,o.Lk)("td",null,(0,a.v_)(e.name),1),(0,o.Lk)("td",null,(0,a.v_)(e.group),1),(0,o.Lk)("td",null,(0,a.v_)(e.status),1)])))),128))])])])])}var Xe=l(973),Ue=l(3148),We=l(6587),Se=l.n(We),Ge={name:"AccountManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Xe.A,DocumentArrowDownIcon:Ue.A},data(){return{activeIndex:1,userAccount:"",username:"",group:"99",status:"99",statusList:[{id:1,text:"全部",value:"99"},{id:2,text:"啟用",value:"1"},{id:3,text:"禁用",value:"0"}],groupList:[{id:1,text:"全部",value:"99"},{id:2,text:"Admin",value:"1"},{id:3,text:"User",value:"2"},{id:4,text:"Guest",value:"3"}],items:[{id:1,userAccount:"user01",username:"John Doe",group:"Admin",status:"啟用"},{id:2,userAccount:"user02",username:"Jane Smith",group:"User",status:"禁用"},{id:3,userAccount:"user03",username:"Paul Brown",group:"Guest",status:"啟用"},{id:4,userAccount:"user04",username:"Mary Johnson",group:"Admin",status:"禁用"},{id:5,userAccount:"user05",username:"James Wilson",group:"User",status:"啟用"},{id:6,userAccount:"user06",username:"Patricia Garcia",group:"Guest",status:"禁用"},{id:7,userAccount:"user07",username:"Robert Martinez",group:"Admin",status:"啟用"},{id:8,userAccount:"user08",username:"Linda Rodriguez",group:"User",status:"禁用"},{id:9,userAccount:"user09",username:"Michael Hernandez",group:"Guest",status:"啟用"},{id:10,userAccount:"user10",username:"Barbara Moore",group:"Admin",status:"禁用"},{id:11,userAccount:"user11",username:"William Jackson",group:"User",status:"啟用"},{id:12,userAccount:"user12",username:"Elizabeth Clark",group:"Guest",status:"禁用"}],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Se()("#accountDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"userAccount",title:"帳號"},{data:"username",title:"姓名"},{data:"group",title:"群組"},{data:"status",title:"狀態",render:function(e){let t="";return"啟用"==e?t="bg-cyan-50 text-cyan-600 border-cyan-200":"禁用"==e&&(t="bg-orange-50 text-orange-600 border-orange-200"),`<span class="px-2 py-1 border rounded ${t}">${e}</span>`}}]})},applyFilter(){const e={userAccount:this.userAccount.trim().toLowerCase(),username:this.username.trim().toLowerCase(),group:this.groupList.find((e=>e.value==this.group)),status:this.statusList.find((e=>e.value==this.status))};e.userAccount||e.username||"99"!==e.group.value||"99"!==e.status.value?this.filteredItems=this.items.filter((t=>(console.log(!e.userAccount||t.userAccount.toLowerCase().includes(e.userAccount)),(!e.userAccount||t.userAccount.toLowerCase().includes(e.userAccount))&&(!e.username||t.username.toLowerCase().includes(e.username))&&("99"===e.group.value||t.group.toLowerCase()===e.group.text.toLowerCase())&&("99"===e.status.value||t.status.toLowerCase()===e.status.text.toLowerCase())))):this.filteredItems=this.items,this.table.clear().rows.add(this.filteredItems).draw()}},mounted(){this.initializeDataTable()}};const Ne=(0,T.A)(Ge,[["render",Me]]);var Je=Ne;const Ve={class:"px-20 py-10 text-left"},je={class:"py-2 text-left"},Be={class:"text-cyan-600 font-bold"},He=(0,o.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),qe=(0,o.Lk)("span",{class:"text-cyan-600 font-bold"},"名單管理",-1),Re=(0,o.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"名單管理",-1),Ke={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},$e={class:"border-b border-gray-200"},Qe=(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),Ye=[Qe],Ze={class:"px-6 py-4 bg-white rounded-b"},et={class:"md:flex md:items-center mb-3"},tt=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"操作時間")],-1),lt={class:"md:w-6/12"},nt={class:"flex items-stretch"},ot=(0,o.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),at={class:"mb-3 md:flex md:items-center"},st=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-group"},"操作動作")],-1),rt={class:"md:w-6/12"},it=(0,o.Lk)("option",{value:"99"},"全部",-1),ct=[it],dt={class:"md:flex md:items-center mb-3"},ut=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"使用者名稱")],-1),bt={class:"md:w-6/12"},mt={class:"mb-3 md:flex md:items-center"},pt=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"備註")],-1),ft={class:"md:w-6/12 flex space-x-4"},kt={class:"mt-6 text-right"},gt={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},xt={class:"mt-10 py-2 px-4 border rounded-md"},vt={id:"listDatatable",class:"display"},yt=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"操作時間"),(0,o.Lk)("th",null,"操作動作"),(0,o.Lk)("th",null,"使用者名稱"),(0,o.Lk)("th",null,"備註")])],-1);function Lt(e,t,l,s,r,i){const c=(0,o.g2)("HomeIcon"),d=(0,o.g2)("MagnifyingGlassIcon"),u=(0,o.g2)("DocumentArrowDownIcon");return(0,o.uX)(),(0,o.CE)("div",Ve,[(0,o.Lk)("div",je,[(0,o.Lk)("span",Be,[(0,o.bF)(c,{class:"h-4 w-4 inline"}),(0,o.eW)(" 首頁 ")]),He,qe]),Re,(0,o.Lk)("div",Ke,[(0,o.Lk)("div",$e,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,o.eW)(" 篩選 "),((0,o.uX)(),(0,o.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===r.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Ye,2))])]),(0,o.bo)((0,o.Lk)("div",Ze,[(0,o.Lk)("div",null,[(0,o.Lk)("div",et,[tt,(0,o.Lk)("div",lt,[(0,o.Lk)("div",nt,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateStart]]),ot,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateEnd]])])])]),(0,o.Lk)("div",at,[st,(0,o.Lk)("div",rt,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.selectedAction=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},ct,512),[[n.u1,r.selectedAction]])])]),(0,o.Lk)("div",dt,[ut,(0,o.Lk)("div",bt,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.userName=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入使用者名稱"},null,512),[[n.Jo,r.userName]])])]),(0,o.Lk)("div",mt,[pt,(0,o.Lk)("div",ft,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[n.Jo,r.note]])])]),(0,o.Lk)("div",kt,[(0,o.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[6]||(t[6]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,o.bF)(d,{class:"h-4 w-4 inline"}),(0,o.eW)(" 篩選 ")]),(0,o.Lk)("button",gt,[(0,o.bF)(u,{class:"h-4 w-4 inline"}),(0,o.eW)(" 匯出 ")])])])],512),[[n.aG,1===r.activeIndex]])]),(0,o.Lk)("div",xt,[(0,o.Lk)("table",vt,[yt,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.items,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",null,(0,a.v_)(e.operateDate),1),(0,o.Lk)("td",null,(0,a.v_)(e.operateAction),1),(0,o.Lk)("td",null,(0,a.v_)(e.username),1),(0,o.Lk)("td",null,(0,a.v_)(e.note),1)])))),128))])])])])}var ht={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Xe.A,DocumentArrowDownIcon:Ue.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",selectedAction:"99",userName:"",note:"",items:[],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Se()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"operateDate",title:"操作時間"},{data:"operateAction",title:"操作動作"},{data:"username",title:"使用者名稱"},{data:"note",title:"備註"}]})},applyFilter(){}},mounted(){this.initializeDataTable()}};const wt=(0,T.A)(ht,[["render",Lt]]);var At=wt;const Ct={class:"px-20 py-10 text-left"},It={class:"py-2 text-left"},_t={class:"text-cyan-600 font-bold"},Dt=(0,o.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),Ft=(0,o.Lk)("span",{class:"text-cyan-600 font-bold"},"名單管理",-1),Et=(0,o.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"名單管理",-1),Pt={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md"},zt={class:"border-b border-gray-200"},Tt=(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),Ot=[Tt],Mt={class:"px-6 py-4 bg-white rounded-b"},Xt={class:"md:flex md:items-center mb-3"},Ut=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"操作時間")],-1),Wt={class:"md:w-6/12"},St={class:"flex items-stretch"},Gt=(0,o.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),Nt={class:"mb-3 md:flex md:items-center"},Jt=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-group"},"操作動作")],-1),Vt={class:"md:w-6/12"},jt=(0,o.Lk)("option",{value:"99"},"全部",-1),Bt=[jt],Ht={class:"md:flex md:items-center mb-3"},qt=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"使用者名稱")],-1),Rt={class:"md:w-6/12"},Kt={class:"mb-3 md:flex md:items-center"},$t=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"備註")],-1),Qt={class:"md:w-6/12 flex space-x-4"},Yt={class:"mt-6 text-right"},Zt={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},el={class:"mt-10 py-2 px-4 border rounded-md"},tl={id:"listDatatable",class:"display"},ll=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"操作時間"),(0,o.Lk)("th",null,"操作動作"),(0,o.Lk)("th",null,"使用者名稱"),(0,o.Lk)("th",null,"備註")])],-1);function nl(e,t,l,s,r,i){const c=(0,o.g2)("HomeIcon"),d=(0,o.g2)("MagnifyingGlassIcon"),u=(0,o.g2)("DocumentArrowDownIcon");return(0,o.uX)(),(0,o.CE)("div",Ct,[(0,o.Lk)("div",It,[(0,o.Lk)("span",_t,[(0,o.bF)(c,{class:"h-4 w-4 inline"}),(0,o.eW)(" 首頁 ")]),Dt,Ft]),Et,(0,o.Lk)("div",Pt,[(0,o.Lk)("div",zt,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,o.eW)(" 篩選 "),((0,o.uX)(),(0,o.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===r.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Ot,2))])]),(0,o.bo)((0,o.Lk)("div",Mt,[(0,o.Lk)("div",null,[(0,o.Lk)("div",Xt,[Ut,(0,o.Lk)("div",Wt,[(0,o.Lk)("div",St,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateStart]]),Gt,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateEnd]])])])]),(0,o.Lk)("div",Nt,[Jt,(0,o.Lk)("div",Vt,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.selectedAction=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 cursor-pointer"},Bt,512),[[n.u1,r.selectedAction]])])]),(0,o.Lk)("div",Ht,[qt,(0,o.Lk)("div",Rt,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.userName=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",type:"text",placeholder:"請輸入使用者名稱"},null,512),[[n.Jo,r.userName]])])]),(0,o.Lk)("div",Kt,[$t,(0,o.Lk)("div",Qt,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[n.Jo,r.note]])])]),(0,o.Lk)("div",Yt,[(0,o.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[6]||(t[6]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,o.bF)(d,{class:"h-4 w-4 inline"}),(0,o.eW)(" 篩選 ")]),(0,o.Lk)("button",Zt,[(0,o.bF)(u,{class:"h-4 w-4 inline"}),(0,o.eW)(" 匯出 ")])])])],512),[[n.aG,1===r.activeIndex]])]),(0,o.Lk)("div",el,[(0,o.Lk)("table",tl,[ll,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.items,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",null,(0,a.v_)(e.operateDate),1),(0,o.Lk)("td",null,(0,a.v_)(e.operateAction),1),(0,o.Lk)("td",null,(0,a.v_)(e.username),1),(0,o.Lk)("td",null,(0,a.v_)(e.note),1)])))),128))])])])])}var ol={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Xe.A,DocumentArrowDownIcon:Ue.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",selectedAction:"99",userName:"",note:"",items:[],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Se()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},columns:[{data:"operateDate",title:"操作時間"},{data:"operateAction",title:"操作動作"},{data:"username",title:"使用者名稱"},{data:"note",title:"備註"}]})},applyFilter(){}},mounted(){this.initializeDataTable()}};const al=(0,T.A)(ol,[["render",nl]]);var sl=al;const rl={class:"px-20 py-10 text-left"},il={class:"py-2 text-left"},cl={class:"text-cyan-600 font-bold"},dl=(0,o.Lk)("span",{class:"mx-1 text-gray-600"},"/",-1),ul=(0,o.Lk)("span",{class:"text-cyan-600 font-bold"},"商品管理",-1),bl=(0,o.Lk)("h5",{class:"my-2 text-2xl font-bold title"},"商品管理",-1),ml={class:"accordion mt-4 border border-gray-200 bg-cyan-50 rounded-md",style:{display:"none"}},pl={class:"border-b border-gray-200"},fl=(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z","clip-rule":"evenodd"},null,-1),kl=[fl],gl={class:"px-6 py-4 bg-white rounded-b"},xl={class:"mb-3 md:flex md:items-center"},vl=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0"},"商品名稱")],-1),yl={class:"md:w-6/12 flex space-x-4"},Ll={class:"md:flex md:items-center mb-3"},hl=(0,o.Lk)("div",{class:"md:w-2/12"},[(0,o.Lk)("label",{class:"pr-4 mb-1 block text-gray-500 font-bold md:text-left md:mb-0",for:"inline-account"},"建立時間")],-1),wl={class:"md:w-6/12"},Al={class:"flex items-stretch"},Cl=(0,o.Lk)("span",{class:"border border-gray-300 text-gray-500 bg-gray-200 px-4 content-center"},"~",-1),Il={class:"mt-6 text-right"},_l={class:"py-2 px-4 ml-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full"},Dl={class:"mt-10 py-2 px-4 border rounded-md"},Fl={id:"listDatatable",class:"display"},El=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"商品種類"),(0,o.Lk)("th",null,"規格"),(0,o.Lk)("th",null,"單位數量"),(0,o.Lk)("th",null,"事業體底價"),(0,o.Lk)("th",null,"營銷人員成本價"),(0,o.Lk)("th",null,"營銷售價"),(0,o.Lk)("th",null,"市場定價"),(0,o.Lk)("th",null,"備註")])],-1);function Pl(e,t,l,s,r,i){const c=(0,o.g2)("HomeIcon"),d=(0,o.g2)("MagnifyingGlassIcon"),u=(0,o.g2)("DocumentArrowDownIcon");return(0,o.uX)(),(0,o.CE)("div",rl,[(0,o.Lk)("div",il,[(0,o.Lk)("span",cl,[(0,o.bF)(c,{class:"h-4 w-4 inline"}),(0,o.eW)(" 首頁 ")]),dl,ul]),bl,(0,o.Lk)("div",ml,[(0,o.Lk)("div",pl,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>i.toggleAccordion(1)),class:"py-2 px-6 w-full flex items-center justify-between text-left font-bold text-cyan-600"},[(0,o.eW)(" 篩選 "),((0,o.uX)(),(0,o.CE)("svg",{class:(0,a.C4)(["w-4 h-4 transition-transform transform",{"rotate-180":1===r.activeIndex}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},kl,2))])]),(0,o.bo)((0,o.Lk)("div",gl,[(0,o.Lk)("div",null,[(0,o.Lk)("div",xl,[vl,(0,o.Lk)("div",yl,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.note=e),class:"py-2 px-4 w-full border border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500",placeholder:"請輸入關鍵字"},null,512),[[n.Jo,r.note]])])]),(0,o.Lk)("div",Ll,[hl,(0,o.Lk)("div",wl,[(0,o.Lk)("div",Al,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.dateStart=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-l focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateStart]]),Cl,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.dateEnd=e),class:"py-2 px-3 w-auto border border-gray-300 rounded-r focus:outline-none focus:border-cyan-500 z-10 flex-1",type:"date"},null,512),[[n.Jo,r.dateEnd]])])])]),(0,o.Lk)("div",Il,[(0,o.Lk)("button",{class:"py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full",onClick:t[4]||(t[4]=(...e)=>i.applyFilter&&i.applyFilter(...e))},[(0,o.bF)(d,{class:"h-4 w-4 inline"}),(0,o.eW)(" 篩選 ")]),(0,o.Lk)("button",_l,[(0,o.bF)(u,{class:"h-4 w-4 inline"}),(0,o.eW)(" 匯出 ")])])])],512),[[n.aG,1===r.activeIndex]])]),(0,o.Lk)("div",Dl,[(0,o.Lk)("table",Fl,[El,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.items,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",null,(0,a.v_)(e.item),1),(0,o.Lk)("td",null,(0,a.v_)(e.size),1),(0,o.Lk)("td",null,(0,a.v_)(e.quantity),1),(0,o.Lk)("td",null,(0,a.v_)(e.lowPrice),1),(0,o.Lk)("td",null,(0,a.v_)(e.costPrice),1),(0,o.Lk)("td",null,(0,a.v_)(e.marketPrice),1),(0,o.Lk)("td",null,(0,a.v_)(e.sellPrice),1),(0,o.Lk)("td",null,(0,a.v_)(e.note),1)])))),128))])])])])}var zl={name:"ListManage",components:{HomeIcon:ee.A,MagnifyingGlassIcon:Xe.A,DocumentArrowDownIcon:Ue.A},data(){return{activeIndex:1,dateStart:"",dateEnd:"",note:"",items:[{id:1,item:"酵素白蝦(生鮮)",size:"中",quantity:"20 隻以上",lowPrice:190,costPrice:220,marketPrice:250,sellPrice:300,note:""},{id:2,item:"酵素白蝦(生鮮)",size:"大",quantity:"16-20 隻",lowPrice:220,costPrice:250,marketPrice:280,sellPrice:330,note:""},{id:3,item:"酵素蝦仁(生鮮)",size:"中",quantity:"20 隻以上",lowPrice:190,costPrice:230,marketPrice:260,sellPrice:310,note:""},{id:4,item:"酵素蝦仁(生鮮)",size:"大",quantity:"16-20 隻",lowPrice:220,costPrice:260,marketPrice:290,sellPrice:340,note:""},{id:5,item:"蝦酥",size:"原味",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:6,item:"蝦酥",size:"椒鹽",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:7,item:"蝦酥",size:"芥末",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""},{id:7,item:"蝦酥",size:"麻辣",quantity:"50g",lowPrice:150,costPrice:180,marketPrice:210,sellPrice:260,note:""}],filteredItems:[],table:null}},methods:{toggleAccordion(e){this.activeIndex=this.activeIndex===e?null:e},initializeDataTable(){this.table=Se()("#listDatatable").DataTable({data:this.items,language:{lengthMenu:"顯示 _MENU_ 筆",info:"顯示第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆資料",infoFiltered:"(從 _MAX_ 條中過濾)",infoEmpty:"顯示第 0 到 0 筆，共 0 筆資料",zeroRecords:"查無資料",emptyTable:"查無資料",search:"查詢 : "},pageLength:25,order:[[0,"desc"]],columns:[{data:"item",title:"商品種類"},{data:"size",title:"規格"},{data:"quantity",title:"單位數量"},{data:"lowPrice",title:"事業體<br>底價",class:"dt-body-center"},{data:"costPrice",title:"營銷人員<br>成本價",class:"dt-body-center"},{data:"marketPrice",title:"營銷售價",class:"dt-body-center"},{data:"sellPrice",title:"市場定價",class:"dt-body-center"},{data:"note",title:"備註"}]})},applyFilter(){}},mounted(){this.initializeDataTable()}};const Tl=(0,T.A)(zl,[["render",Pl]]);var Ol=Tl;const Ml=(0,H.aE)({history:(0,H.LA)("/fishine/"),routes:[{path:"/account",component:Je},{path:"/list",component:At},{path:"/auth",component:ne},{path:"/perf",component:sl},{path:"/product",component:Ol},{path:"/",redirect:"/account"},{path:"/index",component:Je}]});Ml.beforeEach(((e,t,l)=>{t.path&&localStorage.setItem("previousPath",t.path);const n=localStorage.getItem("routeName");document.title=n?`${n} | 全民養殖平台`:"全民養殖平台",l()}));var Xl=Ml;l(1461);(0,n.Ef)(B).use(Xl).mount("#app")}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,n,o,a){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.p="/fishine/"}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,s=n[0],r=n[1],i=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)l.o(r,o)&&(l.m[o]=r[o]);if(i)var d=i(l)}for(t&&t(n);c<s.length;c++)a=s[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(d)},n=self["webpackChunkfish_proj"]=self["webpackChunkfish_proj"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[504],(function(){return l(2795)}));n=l.O(n)})();
//# sourceMappingURL=app.1f511085.js.map