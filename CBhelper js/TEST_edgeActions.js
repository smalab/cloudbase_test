/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         // initialise the helper object with the code, secret code and the
         // generic helper
         var helper = new CBHelper("smalab", "8f417d4ebf05ff7504812bb21fbebb85", new GenericHelper());
         // use the md5 library provided to set the password
         helper.setPassword(hex_md5("sumarabo"));
         
         var txt
         // call the searchDocuments function
         helper.searchDocuments(
             // the search condition structure. This is created as an object
             // exactly as explained in the restful APIs documentation
             {"racket": "racket3"},
             // the name of the collection
             "players",
             // a function to handle the response.
             function(resp) {
                 alert(resp.outputString);
                 txt=resp.outputData;
                 alert(txt[0].lastName);
             }
         );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse2}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         // initialise the helper object with the code, secret code and the
         // generic helper
         var helper = new CBHelper("smalab", "8f417d4ebf05ff7504812bb21fbebb85", new GenericHelper());
         // use the md5 library provided to set the password
         helper.setPassword(hex_md5("sumarabo"));
         
         
         // create an object to be inserted in our CloudBase
         var dataObject = {
             "racket": "racket3",
             "lastName" : "てつお",
             "title" : ".io"
         };
         
         // use the insertDocument method to send the call and insert the data
         // in the users collection then print out the response using the
         // outputString property of the CBHelperResponseInfo object
         helper.updateDocument(dataObject,{"racket": "racket3"},"players",null, function(resp) {
             alert(resp.outputString);
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse3}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         // initialise the helper object with the code, secret code and the
         // generic helper
         var helper = new CBHelper("smalab", "8f417d4ebf05ff7504812bb21fbebb85", new GenericHelper());
         // use the md5 library provided to set the password
         helper.setPassword(hex_md5("sumarabo"));
         
         
         // create an object to be inserted in our CloudBase
         var dataObject = {
             "racket": "racket3",
             "lastName" : "Base",
             "title" : ".io"
         };
         
         // use the insertDocument method to send the call and insert the data
         // in the users collection then print out the response using the
         // outputString property of the CBHelperResponseInfo object
         helper.insertDocument("players",dataObject,null, function(resp) {
             alert(resp.outputString);
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
                  
                  var test = sym.$("space")
                  test.html("This is Test Form : ");
                  inputTest = $('<input />').attr({'type':'text', 'value':'', 'id':'name'});
                  inputTest .css ('font-size', 14);
                  inputTest .css ('width', 350);
                  inputTest .css ('background-color', '#0a81fb');
                  inputTest .appendTo(test);
                  
                  
                  
                  

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         
         var str2 = inputTest.val();
         if(str2.match(/[^0-9A-Za-z]+/)) {
         alert("MOJIno!!")
         } else {
         alert("MOJIok!!");	       
         	    }
         
         var tnum  = inputTest.val().length;
         alert(tnum);
         
         if(!str2.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
         alert("MAILno!!")
         } else {
         alert("MAILok!!");	       
         	    }		 
         
         		 
         		 

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-48485405");