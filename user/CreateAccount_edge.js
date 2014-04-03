/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle3',
            type:'rect',
            rect:['8px','74px','533px','200px','auto','auto'],
            fill:["rgba(206,206,206,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'passR',
            type:'rect',
            rect:['154px','220px','350px','15px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'pass',
            type:'rect',
            rect:['154px','180px','350px','15px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'mail',
            type:'rect',
            rect:['154px','140px','350px','15px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'name',
            type:'rect',
            rect:['154px','100px','350px','15px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['-16px','-5px','582px','71px','auto','auto'],
            fill:["rgba(255,0,0,1)",[270,[['rgba(0,68,243,1.00)',0],['rgba(167,191,250,1.00)',100],['rgba(102,181,255,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'designtxt1',
            type:'text',
            rect:['29px','16px','300px','42px','auto','auto'],
            text:"会員登録",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'idtxt',
            type:'text',
            rect:['29px','95px','94px','25px','auto','auto'],
            text:"ID<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'mailtxt',
            type:'text',
            rect:['29px','135px','94px','25px','auto','auto'],
            text:"Mail<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'passtxt',
            type:'text',
            rect:['29px','175px','94px','25px','auto','auto'],
            text:"Password",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'passtxtR',
            type:'text',
            rect:['29px','220px','111px','25px','auto','auto'],
            text:"Password<br>(確認)",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['488','293','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '-5px'],
            ["gradient", "background-image", [270,[['rgba(0,68,243,1.00)',0],['rgba(167,191,250,1.00)',100],['rgba(102,181,255,1.00)',100]]]],
            ["style", "left", '-16px'],
            ["style", "height", '71px']
         ],
         "${_passR}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '15px'],
            ["style", "top", '220px'],
            ["style", "left", '154px'],
            ["style", "width", '350px']
         ],
         "${_passtxt}": [
            ["style", "top", '175px'],
            ["style", "text-align", 'left'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ],
         "${_designtxt1}": [
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_name}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '15px'],
            ["style", "top", '100px'],
            ["style", "left", '154px'],
            ["style", "width", '350px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(206,206,206,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_pass}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '15px'],
            ["style", "top", '180px'],
            ["style", "left", '154px'],
            ["style", "width", '350px']
         ],
         "${_passtxtR}": [
            ["style", "top", '220px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '18px'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '29px'],
            ["style", "width", '111px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mail}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '15px'],
            ["style", "top", '140px'],
            ["style", "left", '154px'],
            ["style", "width", '350px']
         ],
         "${_mailtxt}": [
            ["style", "top", '135px'],
            ["style", "text-align", 'left'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ],
         "${_idtxt}": [
            ["style", "top", '95px'],
            ["style", "text-align", 'left'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','48px','25px','auto','auto'],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      fill: ['rgba(188,188,188,1.00)'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'OK',
      align: 'center',
      rect: ['-1px','0px','49px','25px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '0px'],
            ["style", "left", '-1px'],
            ["style", "text-align", 'center'],
            ["style", "width", '49px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-57269247");
