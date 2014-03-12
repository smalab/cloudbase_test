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
            id:'Ellipse',
            type:'ellipse',
            rect:['369px','200px','142px','137px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Ellipse2',
            type:'ellipse',
            rect:['119px','200px','117px','137px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Ellipse3',
            type:'ellipse',
            rect:['214px','45px','99px','106px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,104,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'space',
            type:'rect',
            rect:['73px','408px','407px','232px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['295px','551px','86px','36px','auto','auto'],
            fill:["rgba(50,38,187,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '119px'],
            ["style", "top", '200px']
         ],
         "${_Ellipse}": [
            ["style", "left", '369px'],
            ["style", "top", '200px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(0,104,255,1.00)'],
            ["style", "left", '214px'],
            ["style", "top", '45px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '550px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(50,38,187,1.00)']
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
})(jQuery, AdobeEdge, "EDGE-48485405");
