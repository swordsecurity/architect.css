$(document).ready(function(){


$(".docsource").each(function(){

var h = $(this).html();
h = h.trim();
var encodedStr = h.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
   return '&#'+i.charCodeAt(0)+';';
});
var e = "<pre class=\"language-html\"><code class=\"language-html\">"+encodedStr+"</pre></code>";

$(this).append(e);


});




$("pre").each(function (i, e) {
    Prism.highlightElement(e);
//    hljs.highlightBlock(e);
});



});
