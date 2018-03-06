function logout() {
	var exp = new Date();
	exp.setTime(1);
	document.cookie="PHPSESSID=x;expires="+exp.toGMTString();
	location.reload();
}
function lock(tip) {
	$('#waiting>h1').html(tip).css('margin-top',$(window).height()/2-60);
	$('#waiting').css('display','block');
}
function unlock() {
	$('#waiting').css('display','none');
}
function redtip (txt,time) {
	$('#login_error').css({'top':$(window).height()/2,'display':'block'}).html(txt).hide().slideDown(400).delay(time).slideToggle(400);
}
function bluetip (txt,time) {
	$('#blue').css({'top':$(window).height()/2,'display':'block'}).html(txt).hide().slideDown(400).delay(time).slideToggle(400);
}
function getGet(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null) return unescape(r[2]);
	return null;
}
function getCookie(name){
	var reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	var r = document.cookie.match(reg);
	if(r!=null) return unescape(r[2]);
	return null;
}
function myalert(tip,onhidden) {
	$('#myalert').find('p').html(tip);
	$('#myalert').modal('show');
	$('#myalert').on('hidden.bs.modal', onhidden);
}
function success(tip,onhidden) {
	$('#success').find('p').html(tip);
	$('#success').modal('show');
	$('#success').on('hidden.bs.modal', onhidden);
}
function insertBS(){
	$('head').append('<link href="'+chrome.runtime.getURL('css/bootstrap.min.css')+'" rel="stylesheet"><link href="'+chrome.runtime.getURL('css/mystyle.css')+'" rel="stylesheet"><script src="'+chrome.runtime.getURL('js/bootstrap.min.js')+'"></script>');
}
function myeval(evalstr) {
	$('body').append('<script>'+evalstr+'</script>');
}