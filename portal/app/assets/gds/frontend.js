$(function(){function n(){var e=$(".search-navigation a").map(function(e,t){return $(t).attr("href").split("#").pop()}),t=$(".search-navigation li.active a").first().attr("href").replace("#",""),n=$.inArray(t,e);return n>-1?n:0}function r(e,n){if(typeof n!="undefined"){var r=$("input[name=tab]");r.length===0&&(r=$('<input type="hidden" name="tab">'),t.prepend(r)),r.val(n)}}var e=$("#search-results-tabs"),t=$(".js-search-hash");e.length>0&&e.tabs({defaultTab:n(),scrollOnload:!0}),t.length&&e.on("tabChanged",r)}),$(document).ready(function(){var e=$("section.more");e.find(".js-tabs").length&&e.tabs(),$("form#completed-transaction-form").append('<input type="hidden" name="service_feedback[javascript_enabled]" value="true"/>')});