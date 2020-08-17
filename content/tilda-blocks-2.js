function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){if($(window).width()>=960){var t228_navLinks=$("#rec"+recid+" .t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=new Array(),t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_updateSectionsOffsets(t228_sections);t228_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t228_updateSectionsOffsets(t228_sections)},200));$('.t228').bind('displayChanged',function(){t228_updateSectionsOffsets(t228_sections)});setInterval(function(){t228_updateSectionsOffsets(t228_sections)},5000);t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_updateSectionsOffsets(sections){$(sections).each(function(){var t228_curSection=$(this);t228_curSection.attr("data-offset-top",t228_curSection.offset().top)})}
function t228_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop(),t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!=0&&t228_clickedSectionId==null&&t228_sections[t228_sections.length-1].attr("data-offset-top")>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_sectionTop=t228_curSection.attr("data-offset-top"),t228_id=t228_curSection.attr('id'),t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setPath(){}
function t228_setWidth(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth();if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}}
function t228_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t228"),burger=el.find(".t228__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t228_opened")})
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t347_setHeight(recid){var el=$('#rec'+recid);var div=el.find(".t347__table");var height=div.width()*0.5625;div.height(height)}
window.t347showvideo=function(recid){$(document).ready(function(){var el=$('#rec'+recid);var videourl='';var youtubeid=$("#rec"+recid+" .t347__video-container").attr('data-content-popup-video-url-youtube');if(youtubeid>''){videourl='https://www.youtube.com/embed/'+youtubeid}
$("#rec"+recid+" .t347__video-container").removeClass("t347__hidden");$("#rec"+recid+" .t347__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t347__iframe\" width=\"100%\" height=\"100%\" src=\""+videourl+"?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>")})}
window.t347hidevideo=function(recid){$(document).ready(function(){$("#rec"+recid+" .t347__video-container").addClass("t347__hidden");$("#rec"+recid+" .t347__video-carier").html("")})}
function t376_setbg(){var bg="no";$(".r").each(function(){var el=$(this);if(el.find('.t376').length){bg=el.find('.t376').attr('data-section-bg-color')}
if(el.is("[data-bg-color]")===!1){if(bg!=="no"){if(el.is("[data-t376-bg-manual-setted]")===!1||(el.is("[data-t376-bg-manual-setted]")&&el.attr('data-t376-bg-manual-setted')!==bg)){el.css('background-color',bg);el.attr('data-t376-bg-manual-setted',bg)}}
if(bg==="no"&&el.is("[data-t376-bg-manual-setted]")){el.css('background-color','');el.removeAttr('data-t376-bg-manual-setted')}}})}
function t481_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t481__list_item a[href='"+url+"']").addClass("t-active");$(".t481__list_item a[href='"+url+"/']").addClass("t-active");$(".t481__list_item a[href='"+pathname+"']").addClass("t-active");$(".t481__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t481__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t481__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t481_checkAnchorLinks(recid){if($(window).width()>=960){var t481_navLinks=$("#rec"+recid+" .t481__list_item a:not(.tooltipstered)[href*='#']");if(t481_navLinks.length>0){t481_catchScroll(t481_navLinks)}}}
function t481_catchScroll(t481_navLinks){var t481_clickedSectionId=null,t481_sections=new Array(),t481_sectionIdTonavigationLink={},t481_interval=100,t481_lastCall,t481_timeoutId,t481_offsetTop=$(".t270").attr("data-offset-top");if(typeof t481_offsetTop=="undefined"){t481_offsetTop=0}
t481_navLinks=$(t481_navLinks.get().reverse());t481_navLinks.each(function(){var t481_cursection=t481_getSectionByHref($(this));if(typeof t481_cursection.attr("id")!="undefined"){t481_sections.push(t481_cursection)}
t481_sectionIdTonavigationLink[t481_cursection.attr("id")]=$(this)});t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);t481_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t481_navLinks.removeClass('t-active');t481_sectionIdTonavigationLink[t481_getSectionByHref($(this)).attr("id")].addClass('t-active');t481_clickedSectionId=t481_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t481_now=new Date().getTime();if(t481_lastCall&&t481_now<(t481_lastCall+t481_interval)){clearTimeout(t481_timeoutId);t481_timeoutId=setTimeout(function(){t481_lastCall=t481_now;t481_clickedSectionId=t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop)},t481_interval-(t481_now-t481_lastCall))}else{t481_lastCall=t481_now;t481_clickedSectionId=t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop)}})}
function t481_getSectionByHref(curlink){if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curlink.attr("href").substring(1)+"']")}
else{return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']")}}
function t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,offsetTop){var t481_scrollPosition=$(window).scrollTop(),t481_valueToReturn=t481_clickedSectionId;$(t481_sections).each(function(e){var t481_curSection=$(this),t481_sectionTop=t481_curSection.offset().top,t481_id=t481_curSection.attr('id'),t481_navLink=t481_sectionIdTonavigationLink[t481_id];if(t481_scrollPosition>=(t481_sectionTop-offsetTop)||(t481_sections[0].attr("id")==t481_id&&$(window).scrollTop()>=$(document).height()-$(window).height())){if(t481_clickedSectionId==null&&!t481_navLink.hasClass('t-active')){t481_navLinks.removeClass('t-active');t481_navLink.addClass('t-active');t481_valueToReturn=null}else{if(t481_clickedSectionId!=null&&t481_id==t481_clickedSectionId){t481_valueToReturn=null}}
return!1}});return t481_valueToReturn}
function t481_setPath(){}
function t481_setWidth(recid){var window_width=$(window).width();if(window_width>980){$(".t481").each(function(){var el=$(this);var left_exist=el.find('.t481__leftcontainer').length;var left_w=el.find('.t481__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t481__rightcontainer').length;var right_w=el.find('.t481__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t481__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t481__maincontainer").outerWidth(!0);if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t481__leftside").css("min-width",max_w+"px");el.find(".t481__rightside").css("min-width",max_w+"px")}}else{el.find(".t481__leftside").css("min-width","");el.find(".t481__rightside").css("min-width","")}})}}
function t481_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t481").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t481").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t481_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t481").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("visibility","visible");el.animate({"opacity":"1"},200,function(){})}}else{el.stop();el.animate({"opacity":"0"},200,function(){});el.css("visibility","hidden")}}})}}
function t481_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t481").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t481_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t481"),burger=el.find(".t481__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t481_opened")})
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t486_setHeight(recid){var el=$('#rec'+recid);var window_width=$(window).width();if(window_width>980){el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').innerWidth());var textwrapper=el.find('.t486__textwrapper');var blockimg=el.find('.t486__imgcontainer');textwrapper.css('height',blockimg.innerHeight())}else{el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').width());el.find('.t486__textwrapper').css('height','auto')}}
function t722_onSuccess(t722_form){var t722_inputsWrapper=t722_form.find('.t-form__inputsbox');var t722_inputsHeight=t722_inputsWrapper.height();var t722_inputsOffset=t722_inputsWrapper.offset().top;var t722_inputsBottom=t722_inputsHeight+t722_inputsOffset;var t722_targetOffset=t722_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t722_target=t722_targetOffset-200}else{var t722_target=t722_targetOffset-100}
if(t722_targetOffset>$(window).scrollTop()||($(document).height()-t722_inputsBottom)<($(window).height()-100)){t722_inputsWrapper.addClass('t722__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t722_target},400);setTimeout(function(){t722_inputsWrapper.addClass('t722__inputsbox_hidden')},400)}
var successurl=t722_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t722_fixcontentheight(id){var el=$("#rec"+id);var hcover=el.find(".t-cover").height();var hcontent=el.find("div[data-hook-content]").outerHeight();if(hcontent>300&&hcover<hcontent){var hcontent=hcontent+120;if(hcontent>1000){hcontent+=100}
console.log('auto correct cover height: '+hcontent);el.find(".t-cover").height(hcontent);el.find(".t-cover__filter").height(hcontent);el.find(".t-cover__carrier").height(hcontent);el.find(".t-cover__wrapper").height(hcontent);if($isMobile==!1){setTimeout(function(){var divvideo=el.find(".t-cover__carrier");if(divvideo.find('iframe').length>0){console.log('correct video from cover_fixcontentheight');setWidthHeightYoutubeVideo(divvideo,hcontent+'px')}},2000)}}}
function t814_init(recid){t814_setHeight(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!="undefined"&&window.noAdaptive==!0&&$isMobile){return}
t814_setHeight(recid)},200));$('.t814').bind('displayChanged',function(){t814_setHeight(recid)})}
function t814_setHeight(rec){el=$('#rec'+rec)
var imgWrapperHeight=el.find(".t814__blockimg").height();var blockTextWrapper=el.find(".t814__blocktext-wrapper");var textWrapper=el.find(".t814__blocktext");if($(window).width()>960){textWrapper.css('height',imgWrapperHeight);blockTextWrapper.css('height',textWrapper.outerHeight(!0))}else{blockTextWrapper.css('height','auto')}}