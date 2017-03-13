var sub=document.getElementById('sub');
var write=document.getElementById('write');
var ok=document.getElementById('ok');
var text=document.getElementById('text');
var main_btn=document.getElementById('main-btn');
var person_remove=document.getElementsByClassName('person-remove');
	sub.onclick=function(){
		write.innerHTML='编辑'	
	}
	ok.onclick=function(){
		write.innerHTML='榜单'
		var val=text.value;
		if(val==""){
			alert('不能为空')
		}else{
			var btn=document.createElement('button');
			var span=document.createElement('span');
			btn.className="person-btn mr-10 ml-10 mt-10";
			span.className="fa fa-remove person-remove";
			btn.innerHTML=val;
			btn.appendChild(span)
		}	
		main_btn.insertBefore(btn,sub)

	}