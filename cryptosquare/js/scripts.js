// user interface logic
$(function() {

  $("#submit").click(function(){
    // debugger
    var message= $("input#coded").val();
    var cryptic= cryptosquare(message);
    $("#output").text(cryptic);
});
});
// business logic
var cryptosquare=function(message){
  // removing punchuatin ,special characteristics and lowercasing it
  message = message.replace(/[.,'?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  message = message.replace(/[" "]/g,"");
  message = message.toLowerCase();
  // string length
  var size = message.length;
  // no.of columns, rows=column+1
  var len =parseInt(Math.sqrt(size));
  // splitting strings into letter and storing it in array
  var myArray=message.split("");
  // creating rectangular or square array
  var array=new Array(len+1);
 var emptyArray=[];
  var k=0;
  for(var i=0 ; i<len+1; i++){
    array[i]=new Array(len);
    for(var j=0; j<len; j++){
      if(k<size) {
        array[i][j] = myArray[k];
        k+=1;
      }
    }

  }
  // code for reading elements through columns
  var k=0;
  var str="";
  var coded=[];
  for(var i=0 ; i<len; i++){
    for(var j=0; j<len+1; j++){
      if(array[j][i]!=undefined){
        str+=array[j][i];
        k+=1;
        if(k===5){
          coded.push(str);
          k=0;
          str="";
      }

       }
}
     var encrypted = coded.join(" ");
      }
return encrypted;
  }
