var sub=document.getElementById('sub');
var write=document.getElementById('write');
var ok=document.getElementById('ok');
var text=document.getElementById('text');
var main_btn=document.getElementById('main-btn');
var person_remove=main_btn.getElementsByTagName('span');
var person_btn=main_btn.getElementsByClassName('person_btn');
	sub.onclick=function(){
		write.innerHTML='编辑';
		for(var i=0;i<person_remove.length;i++){
			person_remove[i].style.display='block';
		}
		for(var i=0;i<person_btn.length;i++){
			person_btn[i].onclick=function(){
				this.style.display='none'
			}
		}
		
	}
	ok.onclick=function(){
		write.innerHTML='榜单'
		for(var i=0;i<person_remove.length;i++){
			person_remove[i].style.display='none';
		}
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