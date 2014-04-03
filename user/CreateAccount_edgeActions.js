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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var Name = sym.$("name")
         inputName = $('<input />').attr({'type':'text', 'value':'', 'id':'name'});
         inputName .css ('font-size', 14);
         inputName .css ('width', 350);
         inputName .css ('background-color', '#ffffff');
         inputName .appendTo(Name);
         
         var Mail = sym.$("mail")
         inputMail = $('<input />').attr({'type':'text', 'value':'', 'id':'name'});
         inputMail .css ('font-size', 14);
         inputMail .css ('width', 350);
         inputMail .css ('background-color', '#ffffff');
         inputMail .appendTo(Mail);
         
         var Pass = sym.$("pass")
         inputPass = $('<input />').attr({'type':'password', 'value':'', 'id':'name'});
         inputPass .css ('font-size', 14);
         inputPass .css ('width', 350);
         inputPass .css ('background-color', '#ffffff');
         inputPass .appendTo(Pass);
         
         var PassR = sym.$("passR")
         inputPassR = $('<input />').attr({'type':'password', 'value':'', 'id':'name'});
         inputPassR .css ('font-size', 14);
         inputPassR .css ('width', 350);
         inputPassR .css ('background-color', '#ffffff');
         inputPassR .appendTo(PassR);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         
         var flag=0;
         
         str1 = inputName.val();
         if(str1.match(/[^0-9A-Za-z]+/)) {
         alert("IDを半角英数で入力してください");
         flag=1;
         } 
         
         str2 = inputMail.val();
         if(!str2.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
         alert("メールアドレスが正しくありません");
         flag=1;
         }	 
         
         str3 = inputPass.val();
         if(str3.match(/[^0-9A-Za-z]+/)) {
         alert("passは半角英数で入力してください");
         flag=1;
         } 
         
         str4 = inputPassR.val();
         if(str3!=str4){
         alert("パスワードが一致していません");
         flag=1;
         }
         
         tnum  = inputPass.val().length;
         if(tnum<6||tnum>15){
         alert("passは6から15文字で入力してください");
         flag=1;
         }
         
         if(flag==0){
         
         alert(str1+"OK!!");
         CBsend();
         
         }
         
         function CBsend(){
         // マウスクリックのコードをここに挿入します
         
         // initialise the helper object with the code, secret code and the
         // generic helper
         var helper = new CBHelper("smalab", "8f417d4ebf05ff7504812bb21fbebb85", new GenericHelper());
         // use the md5 library provided to set the password
         helper.setPassword(hex_md5("sumarabo"));
         
         
         // create an object to be inserted in our CloudBase
         var dataObject = {
             "ID" : str1,
             "mail" : str2,
             "pass" : str3
         };
         
         // use the insertDocument method to send the call and insert the data
         // in the users collection then print out the response using the
         // outputString property of the CBHelperResponseInfo object
         helper.insertDocument(str1,dataObject,null, function(resp) {
             alert(resp.outputString);
         });
         
         
         }
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-57269247");