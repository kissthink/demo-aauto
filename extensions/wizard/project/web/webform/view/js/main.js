require.config({
	paths: {
		jquery: 'jQuery/jquery.min' //可在这里自定义库文件的实际路径,省略'.js'文件后缀名 
	}
});
 
require(
	["jquery","aardio"], //异步导入JS库文件
	function($,aardio) { //请求的库加载完成后触发此函数 
		$(document).ready( 
			function(){ //在网页完成加载后激活函数 
				//添加事件
				$("#btnSysPath").on("click",
					function(){  
						aardio.getSysPath({
							onEnd:function(path){
								$("#txtSysPath").html( path );
							}
						});
					} 
				);

				//动画效果
				$("#form_main").hide().fadeIn("slow");
			}
		);
	}
);
 