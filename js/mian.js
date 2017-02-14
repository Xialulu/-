
window.onload=function(){
	// 五边形
	function wbx(id,font1,font2){
		var canvas=document.getElementById(id);
		var ctx=canvas.getContext('2d');
		canvas.width =167;
		canvas.height = 155;
		ctx.beginPath();
		ctx.strokeStyle='#949492';
		ctx.moveTo(34,0);
		ctx.lineTo(136,0);
		ctx.lineTo(167,97);
		ctx.lineTo(86,155);
		ctx.lineTo(0,95);
		ctx.lineTo(34,0);
		ctx.stroke();
		ctx.font = "24px Microsoft Yahei";
		ctx.fillStyle="#fff";
		ctx.textAlign = "center";
		ctx.fillText(font1, 167/2,55);
		ctx.fillText(font2, 167/2,90);
	}

	wbx('wjx','不再','昂贵');
	wbx('wjx2',"不再","复杂");
	wbx('wjx3',"不再","高端");


	var $way=$("#xlx_way").offset().top;
	var $xlxCb=$("#xlx_cb").offset().top;
	var $fa=$("#xlx_fa").offset().top;
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>$way&&top<$xlxCb){
			$("#xlx_cb .container").addClass("zoomIn");
		}else if(top>$xlxCb&&top<$fa){
			$("#xlx_fa").find("h3").addClass("lightSpeedIn");
			$("#xlx_fa").find("h3").addClass("animated");
			$("#xlx_fa > p").addClass("lightSpeedIn animated");
			$("#xlx_fa > p").css("animation-delay","200ms");
			$("#xlx_fa .row > div > div").addClass("zoomIn animated");
			$("#xlx_fa .row div").css("animation-delay","300ms");	
			$("#xlx_gx").find("h3").addClass("rollIn animated").css("animation-delay","500ms");;			
			
			}else if(top>$fa){
				for(var i=0;i< $("#xlx_gx .row div").length;i++){
				$("#xlx_gx .row div").eq(i).addClass("tada animated").css("animation-delay",i*100+500+"ms");
			}
			}
		
	});
}