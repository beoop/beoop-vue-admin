import{_ as t,a,b as e,c as l,d as i,e as o}from"./index.07dea43c.js";import{d as r,a1 as s,r as n,o as d,c as u,e as m,w as f,g as x,n as p}from"./vendor.d0315eed.js";var g=r({components:{Echart:t,Trend:a,EchartCard:e,InfoCircleOutlined:s,MiniArea:l,MiniBar:i,MiniProgress:o},setup:()=>({tabListNoTitle:[{key:"article",tab:"销售额"},{key:"app",tab:"访问量"}],option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"1%",right:"0",bottom:"1%",top:"4%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220,145,245,234,157,142]}]},data:["工专路 0 号店","工专路 1 号店","工专路 2 号店","工专路 3 号店","工专路 4 号店","工专路 5 号店","工专路 6 号店"]})});const c=x("周同比"),_=x(" 12% "),y=x("日同比"),h=x(" 11% "),b=x(" 日均销售额"),v=m("span",{style:{"margin-left":"8px"}},"￥ 234.56",-1),B=x(" 日访问量"),w=m("span",null,p("1234"),-1),C=x(" 转化率 "),k=m("span",null,"60%",-1),A=x("同周比"),E=x(" 12% "),L=x("日环比"),M=x(" 80% "),T=m("h4",{style:{marginBottom:"20px"}},"销售趋势",-1),z=m("h4",{style:{marginBottom:"20px"}},"门店销售额排名",-1),I=x(" 323,234 "),j=m("a",{href:"#"},"More",-1);g.render=function(t,a,e,l,i,o){const r=n("InfoCircleOutlined"),s=n("a-tooltip"),g=n("trend"),N=n("echart-card"),O=n("a-col"),P=n("mini-area"),W=n("mini-bar"),R=n("mini-progress"),S=n("a-row"),q=n("Echart"),D=n("a-avatar"),F=n("a-list-item"),G=n("a-list"),H=n("a-card");return d(),u("div",null,[m(S,{gutter:24},{default:f((()=>[m(O,{xs:24,md:12,xl:6,style:{marginBottom:"24px"}},{default:f((()=>[m(N,{title:"总销售额",total:"￥126,560"},{action:f((()=>[m(s,{title:"指标说明"},{default:f((()=>[m(r)])),_:1})])),footer:f((()=>[b,v])),default:f((()=>[m("div",null,[m(g,{flag:"up",style:{"margin-right":"16px"}},{term:f((()=>[c])),default:f((()=>[_])),_:1}),m(g,{flag:"down"},{term:f((()=>[y])),default:f((()=>[h])),_:1})])])),_:1})])),_:1}),m(O,{xs:24,md:12,xl:6,style:{marginBottom:"24px"}},{default:f((()=>[m(N,{title:"访问量",total:"8846"},{action:f((()=>[m(s,{title:"指标说明"},{default:f((()=>[m(r)])),_:1})])),footer:f((()=>[B,w])),default:f((()=>[m("div",null,[m(P)])])),_:1})])),_:1}),m(O,{xs:24,md:12,xl:6,style:{marginBottom:"24px"}},{default:f((()=>[m(N,{title:"支付笔数",total:6560},{action:f((()=>[m(s,{title:"指标说明"},{default:f((()=>[m(r)])),_:1})])),footer:f((()=>[C,k])),default:f((()=>[m("div",null,[m(W)])])),_:1})])),_:1}),m(O,{xs:24,md:12,xl:6,style:{marginBottom:"24px"}},{default:f((()=>[m(N,{title:"运营活动效果",total:"78%"},{action:f((()=>[m(s,{title:"指标说明"},{default:f((()=>[m(r)])),_:1})])),footer:f((()=>[m(g,{flag:"down",style:{"margin-right":"16px"}},{term:f((()=>[A])),default:f((()=>[E])),_:1}),m(g,{flag:"up"},{term:f((()=>[L])),default:f((()=>[M])),_:1})])),default:f((()=>[m("div",null,[m(R)])])),_:1})])),_:1})])),_:1}),m(H,{"tab-list":t.tabListNoTitle,style:{marginBottom:"24px"}},{tabBarExtraContent:f((()=>[j])),default:f((()=>[m(S,{gutter:32},{default:f((()=>[m(O,{xs:24,md:14,xl:16,style:{marginBottom:"24px"}},{default:f((()=>[m("div",null,[T,m(q,{option:t.option,height:270},null,8,["option"])])])),_:1}),m(O,{xs:24,md:10,xl:8},{default:f((()=>[m("div",null,[z,m(G,{"data-source":t.data,size:"small",class:"anliysis-list",split:!1},{renderItem:f((({item:t,index:a})=>[m(F,null,{actions:f((()=>[I])),default:f((()=>[m("div",null,[m(D,{size:20,style:{backgroundColor:a<=3?"#314659":"#fafafa",color:a<=3?"#fafafa":"#314659",marginRight:"14px",fontSize:"14px",verticalAlign:"middle"}},{default:f((()=>[x(p(a+1),1)])),_:2},1032,["style"]),x(" "+p(t),1)])])),_:2},1024)])),_:1},8,["data-source"])])])),_:1})])),_:1})])),_:1},8,["tab-list"]),m(S,{gutter:24},{default:f((()=>[m(O,{xs:24,md:12,xl:12,style:{marginBottom:"24px"}},{default:f((()=>[m(H,{title:"线上热门搜索"})])),_:1}),m(O,{xs:24,md:12,xl:12,style:{marginBottom:"24px"}},{default:f((()=>[m(H,{title:"销售额类别占比"})])),_:1})])),_:1})])};export default g;
