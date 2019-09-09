

 ;(function(){
 	"use strict"
  $(".banner1").banner({
        items:$(".banner1").find("img"),      //必选
        left:$(".banner1").find("#left"),     //可选，传了就有功能，没传就没有功能
        right:$(".banner1").find("#right"),   //可选，传了就有功能，没传就没有功能
        list:true,         //可选，默认为true
        autoPlay:true,     //可选，默认为true
        delayTime:2000,     //可选，默认为3000
        index:0             
})
// 	$.ajax({
//      type: "post",
//      url: "/ajax/user.php",
//      dataType: "json",
//      success: function (data) {
//          var user_str = '';
//          if(data.code == "0000" && data.info.is_login == 1){
//              $("#header_user_session_userid").val(data.info.userid);
//              $("#header_user_session_name").val(data.info.name);
//              $("#header_user_session_mobilephone").val(data.info.mobilephone);
//              $("#header_user_session_header").val(data.info.header);
//              //console.log(11);
//              user_str += '欢迎，' + data.info.name;
//              user_str += '<span class="pd-0005 cl-c">|</span>';
//              user_str += '<a class="mr-30 hover cl-6" href="/login.php?act=loginout" title="退出登录">退出登录</a>';
//
//              qimoClientId = {
//                  userId: data.info.userid, 
//                  nickName: data.info.name,
//                  customField: { //扩展字段，json对象，对象中的key-value都自定义
//                      "用户UID":data.info.userid,
//                      "用户名称":data.info.name,
//                      "手机号码":data.info.mobilephone
//                  }
//              };
//              
//              chatflag = 1;
//
//              var dq_goods_id = "";
//                                  
//              if(dq_goods_id != ""){
//                  //扩展信息
//                  m7CardInfo = {
//                      "left":{
//                          "url": "https://bnmppic.bookuu.com/"  // 左侧图片地址，可不填
//                      },
//                      "right1": {
//                          "text": "",  // 首行文字内容，展示时超出两行隐藏，卡片上单行隐藏
//                          "color": "#595959",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#595959
//                          "fontSize": 12                      // 字体大小， 默认12 ， 请传入number类型的数字
//                      },
//                      "right2": {
//                          "text": "",        // 第二行文字内容，展示时超出两行隐藏，卡片上单行隐藏
//                          "color": "#595959",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#595959
//                          "fontSize": 12                      // 字体大小， 默认12 ， 请传入number类型的数字
//                      },
//                      "right3": {
//                          "text": "¥",           // 第三行文字内容，展示时超出两行隐藏，卡片上单行隐藏
//                          "color": "#ff6b6b",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#ff6b6b
//                          "fontSize": 14                      // 字体大小， 默认14 ， 请传入number类型的数字
//                      },
//                      "extraInfos": [],             // 额外信息，访客不可见，座席点击卡片上的更多可见，可不填，字符串形式的文本数组
//                      "url": "//www.bookuu.com/detail.php?id="                     // 点击可跳转的链接
//                  };
//              }
//
//          }else{
//              user_str += '<a class="hover cl-6" href="/login.php" target="_blank" title="登录">登录</a><span class="pd-0005 cl-c">|</span><a class="mr-30 hover cl-6" href="/passport/register.php" target="_blank" title="免费注册">免费注册</a>';
//          }
//
//          user_str += '<a class="hover cl-6" href="/download.php" target="_blank" title="下载博库APP"><span class="icon-phone-line cl-bl-l fs-16 tp-3 mr-2 pr">&#xe933;</span>下载博库APP</a>';
//
//          $("#www_user_session_info").html(user_str);
//
//      }
//  })
// 	$(function(){
// 	           //默认搜索词更新
// 	           var bar_type = 'index';
// 	           if(bar_type == 'index' || bar_type == 'detail'){
// 	               $("#gudingsearch").attr('value','');
// 	           }
// 	           $.ajax({
// 	               type: "post",
// 	               url: "/ajax/getdefaultkey.php",
// 	               dataType: "json",
// 	               success: function (data) {
// 	                   var defaultkey = '';
// 	                   if(data.code == "0000"){
// 	                       defaultkey = data.info.defaultkey;
// 	                       $("#gudingsearch").attr('placeholder',defaultkey);
// 	                   }
// 	               }
// 	           });
// 	       })
// 	
 

 	
 	
// 	滚动交互
//      $(window).on('scroll', function(){
//          var _scroll = $(window).scrollTop();
//          if(_scroll >= 200 ){
//              $('#search-container').addClass('active');
//          }else{
//              $('#search-container').removeClass('active');
//          }
//      });
//      $(".tosearch").click(function(){
//          var key = $(this).parent().find(".searchkey").val();
//          if(key == ''){
//              key = $(this).parent().find(".searchkey").attr('placeholder');
//          }
//          location.href = '/search.php?k=' + key;
//      });
//
//
//      function getKeyMore(_associateBox,_key){
//
//          console.log('开始请求',_key);
//          //获取关联词
//          $.ajax({
//              type: "post",
//              url:"/goods/search.php",
//              data: {act:"getMoreKeys",keyword:_key},
//              dataType: "json",
//              success: function(data) {
//                  if(data.length > 0){
//                      _associateBox.empty();
//                      var str = "";
//                      for(var i=0;i<data.length;i++){
//                          var search_url = '/search.php?k=' + data[i].key;
//                          str += '<li class="associate-content">'+
//                                  '<a class="fl" href="'+search_url+'">'+data[i].akey+'</a>'+
//                                  '<label class="fr delete"><span class="icon-close-line fr">&#xe919;</span></label>'+
//                                  '<div class="cb"></div>'+
//                                  '</li>';
//                      }
//                      _associateBox.append(str);
//                  }
//              }
//          });
//      }
//      function getHistoryKeys(_associateBox,_key){
//          console.log('历史记录',_key);
//          //获取最近搜索
//          $.ajax({
//              type: "post",
//              url:"/goods/search.php",
//              data: {act:"getHistoryKeys",keyword:_key},
//              dataType: "json",
//              success: function(data) {
//                  if(data.length > 0){
//                      _associateBox.empty();
//                      var str = '<li class="associate-title">'+
//                              '<div class="fl text">最近搜索</div>'+
//                              '<label class="fr delete all"><span class="icon-delete-line">&#xe91d;</span></label>'+
//                              '<div class="cb"></div>'+
//                              '</li>';
//                      for(var i=0;i<data.length;i++){
//                          var search_url = '/search.php?k=' + data[i].key;
//                          str += '<li class="associate-content">'+
//                                  '<a class="fl" href="'+search_url+'">'+data[i].key+'</a>'+
//                                  '<label class="fr delete"><span class="icon-close-line fr">&#xe919;</span></label>'+
//                                  '<div class="cb"></div>'+
//                                  '</li>';
//                      }
//                      _associateBox.append(str);
//                  }
//              }
//          });
//      }
//      var timer1 = '';    //定时器1
//      var timer2 = '';    //定时器2
//
//      $('body').on('hover', '.associate-box li.associate-content', function(){
//          $('.associate-box li.associate-content').removeClass('active');
//          $(this).addClass('active');
//      });
//
//      //输入完成回车搜索
//      $('body').on('keyup focus', '.search-box input', function(event){
//          var e = event || window.event || arguments.callee.caller.arguments[0];
//
//
//          var _this = $('.search-box input');
//          var _inputId = _this.attr("id");
//          var _key = _this.val();
//          var _associateContainer = _this.parents('.associate-container');
//          var _associateBox = _this.siblings('.associate-box');
//          var _associateTitle = _associateBox.find('.associate-title');   //最近搜索
//          var _associateLi = $('.associate-box li');
//          var _associateLiActive = $('.associate-box li.active');
//          // 键盘向上
//          if( e && e.keyCode == 38 ){
//              var _associateTitleLength = _associateTitle.length;
//              var _associateContentLength = _associateLi.length;
//              var _associateContentActiveLength = _associateLiActive.length;
//              var _index = _associateLiActive.index();
//              _associateLi.removeClass('active');
//              _index = _index - 1;
//              // 历史记录
//              if( _associateTitleLength == 0 ){
//                  // 第一次focuse
//                  if( _index == -1 ) _index = _associateContentLength - 1;
//                  if( _associateContentActiveLength == 0 ) _index = 0;
//              }else{
//                  // 第一次focuse
//                  if( _index == 0 ) _index = _associateContentLength - 1;
//                  if( _associateContentActiveLength == 0 ) _index = 1;
//
//              }
//              _associateLi.eq( _index ).addClass('active');
//              _this.val( _associateLi.eq( _index ).find('a').text() );
//
//              return false;
//          }
//          // 键盘向下
//          if ( e && e.keyCode == 40 ){
//              var _associateTitleLength = _associateTitle.length;
//              var _associateContentLength = _associateLi.length;
//              var _associateContentActiveLength = _associateLiActive.length;
//              var _index = _associateLiActive.index();
//              _associateLi.removeClass('active');
//              _index = _index + 1;
//              // 历史记录
//              if( _associateTitleLength == 0 ){
//                  if( _associateContentActiveLength == 0 || _index == _associateContentLength ) _index = 0;
//              }else{
//                  if( _associateContentActiveLength == 0 || _index == _associateContentLength ) _index = 1;
//              }
//              _associateLi.eq( _index ).addClass('active');
//              _this.val( _associateLi.eq( _index ).find('a').text() );
//
//              return false;
//          }
//          //清空
//          _associateBox.empty();
//          // 文字为空，显示搜索记录
//          if( _key == '' ){
//              //延迟xx
//              if(timer2){
////                    console.log(22,timer2);
//                  clearTimeout(timer2);
//                  console.log('未结束',timer2);
//              } else{
//                  console.log('开始了');
//              }
//              timer2 = setTimeout(function(){getHistoryKeys(_associateBox, _key)},600);
//              _associateBox.addClass('history');
//          }else{
//              //延迟xx
//              if(timer1){
////                    console.log(11,timer1);
//                  clearTimeout(timer1);
//                  console.log('未结束',timer1);
//              } else{
//                  console.log('开始了');
//              }
//              timer1 = setTimeout(function(){getKeyMore(_associateBox, _key)},600);
//              _associateBox.removeClass('history');
//          }
//          // 搜索出来数据不为空才显示出来
//          _associateBox.css('display', 'block');
//          // enter键
//          if( e && e.keyCode == 13 ){
//              if( _key == '' ){
//                  _key = _this.attr('placeholder');
//                  _this.val(_key);
//              }
//              location.href = '/search.php?k=' + _key;
//          }
//      });
//      $('.search-box input').on('blur', function(){
//          blurFunc();
//      });
//      // 删除历史记录
//      $('body').on('click', '.associate-box label.delete', function(){
//          var _this = $(this);
//          var _associateBox = _this.parents('.associate-box');
//          var _input = _this.parents('.search-box').find('input');
//          var _associateContent = _this.parents('.associate-content');
//          var _associateTitle = _associateBox.find('.associate-title');
//          var keyword = _associateContent.children("a").html();
//          if( _this.hasClass('all') ){
//              _associateBox.empty();
//              keyword = '';
//          }
//          _associateContent.remove();
//          var _contentLength = _associateBox.find('.associate-content').length;
//          if( _contentLength == 0 ){
//              _associateTitle.remove();
//              _associateBox.css('display', 'none');
//          }else{
////                _input.focus();
//          }
//          //删除记录
//          $.ajax({
//              type: "post",
//              url:"/goods/search.php",
//              data: {act:"deleteKeys",keyword:keyword},
//              dataType: "json",
//              success: function(data) {
//
//              }
//          });
//      });
//      $('.associate-box').on('mouseenter', function(){
//          var _input = $('.search-box input');
//          _input.off('blur');
//      });
//      $('.associate-box').on('mouseleave', function(){
//          var _input = $('.search-box input');
//          _input.on('blur', function(){
//              blurFunc();
//          });
//      });
//      function blurFunc(){
//          var _associateBox = $('.search-box .associate-box');
//          _associateBox.css('display', 'none');
//      }

//<div class="section bc-f5">
//  <!-- 菜单、banner、公告 -->
//  <div class="ht-400 pr">
//      <!-- 菜单 -->
//          <!-- 公共 菜单 展示页 -->
//  <div class="menu fl mouseenter-box">
//              <div class="mouseenter mouseleave">
//          <div class="title">
//              <label style="background-image: url(https://bnmpstyle.bookuu.com/www/images/category.png);"></label>
//              <a target="_blank" href="/index.php" class="cl-f lh-40 db">文学艺术</a>
//              <div class="triangle-patch"><span class="icon-triangle-block2">&#xe958;</span></div>
//              <div class="patch"><span class="icon-arrow-line2">&#xe903;</span></div>
                
})();
   
//轮播图
