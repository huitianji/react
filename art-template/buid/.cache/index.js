/*TMODJS:{"version":8,"md5":"2a3d117230d7b0b264ab0258a03ddb6d"}*/
template('index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,value=$data.value,i=$data.i,$out='';$out+='<h1>';
$out+=$escape(title);
$out+='</h1> <ul> ';
$each(list,function(value,i){
$out+=' <li>索引 ';
$out+=$escape(i + 1);
$out+=' ：';
$out+=$escape(value);
$out+='</li> ';
});
$out+=' </ul> ';
return new String($out);
});