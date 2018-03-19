
       window.onload = function() {
       		var container=document.getElementById('container');
            var list = document.getElementById('list');
            var buttons=document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index=1;/*当前存放的第几张图片*/
            var timer;
           
           function showButton(){
           	for (var i=0;i<buttons.length;i++){
           		if(buttons[i].className=='on'){
           			buttons[i].className='';
           			break;
           		}
           	}
           	buttons[index-1].className='on';
           }

			function animate(offset){
				var newLeft=parseInt(list.style.left)+offset;
				
				list.style.left=newLeft+'px';
				
				if(newLeft>-830){
					list.style.left=-4150+'px';
				}
				if(newLeft<-4150){
					list.style.left=-830+'px';
				}
			}
			function play(){
				timer=setInterval(function(){/*setInterval一直执行*/
					next.onclick();
				},3000);	
			}
			function stop(){
				clearInterval(timer);
			}
            next.onclick=function(){
            	if(index==5){
            		index=1;
            	}
            	else{
            		index+=1;
            	}
            	showButton();
            	animate(-830);
            }
            prev.onclick=function(){
            	if(index==1){
            		index=5;
            	}
            	else{
            		index-=1;
            	}           	
            	showButton();
            	animate(830);       
           }
            for(var i=0;i<buttons.length;i++){
            	buttons[i].onclick=function(){
            		if (this.className=='on'){
            			return;
            		}
            		var myIndex=parseInt(this.getAttribute('index'));
            		var offset=-830*(myIndex-index);
            		
            		animate(offset);
            		index=myIndex;
            		showButton();
            	}
            }
            container.onmouseover=stop;
            container.onmouseout=play;
            play();

}
       

