!function(e){function a(a){var t=e("<button />",{"class":"dropdown-toggle","aria-expanded":!1}).append(e("<span />",{"class":"screen-reader-text",text:screenReaderText.expand}));a.find(".menu-item-has-children > a").after(t),a.find(".current-menu-ancestor > button").addClass("toggled-on"),a.find(".current-menu-ancestor > .sub-menu").addClass("toggled-on"),a.find(".menu-item-has-children").attr("aria-haspopup","true"),a.find(".dropdown-toggle").click(function(a){var t=e(this),n=t.find(".screen-reader-text");a.preventDefault(),t.toggleClass("toggled-on"),t.next(".children, .sub-menu").toggleClass("toggled-on"),t.attr("aria-expanded","false"===t.attr("aria-expanded")?"true":"false"),n.text(n.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand)})}function t(){window.innerWidth<910?(o.hasClass("toggled-on")?o.attr("aria-expanded","true"):o.attr("aria-expanded","false"),l.hasClass("toggled-on")?(s.attr("aria-expanded","true"),d.attr("aria-expanded","true")):(s.attr("aria-expanded","false"),d.attr("aria-expanded","false")),o.attr("aria-controls","site-navigation social-navigation")):(o.removeAttr("aria-expanded"),s.removeAttr("aria-expanded"),d.removeAttr("aria-expanded"),o.removeAttr("aria-controls"))}function n(a){r.hasClass("page")||r.hasClass("search")||r.hasClass("single-attachment")||r.hasClass("error404")||e(".entry-content").find(a).each(function(){var t,n=e(this),r=n.offset(),i=r.top,o=n.closest("article").find(".entry-footer"),s=o.offset(),d=s.top+(o.height()+28),l=n.closest("figure");i>d?"img.size-full"===a?(t=new Image,t.src=n.attr("src"),e(t).on("load.prdxn",function(){t.width>=840&&(n.addClass("below-entry-meta"),l.hasClass("wp-caption")&&(l.addClass("below-entry-meta"),l.removeAttr("style")))})):n.addClass("below-entry-meta"):(n.removeClass("below-entry-meta"),l.removeClass("below-entry-meta"))})}var r,i,o,s,d,l,c;a(e(".main-navigation")),i=e("#masthead"),o=i.find("#menu-toggle"),l=i.find("#site-header-menu"),s=i.find("#site-navigation"),d=i.find("#social-navigation"),function(){o.length&&(o.add(s).add(d).attr("aria-expanded","false"),o.on("click.prdxn",function(){e(this).add(l).toggleClass("toggled-on"),e(this).add(s).add(d).attr("aria-expanded","false"===e(this).add(s).add(d).attr("aria-expanded")?"true":"false")}))}(),function(){function a(){window.innerWidth>=910?(e(document.body).on("touchstart.prdxn",function(a){e(a.target).closest(".main-navigation li").length||e(".main-navigation li").removeClass("focus")}),s.find(".menu-item-has-children > a").on("touchstart.prdxn",function(a){var t=e(this).parent("li");t.hasClass("focus")||(a.preventDefault(),t.toggleClass("focus"),t.siblings(".focus").removeClass("focus"))})):s.find(".menu-item-has-children > a").unbind("touchstart.prdxn")}s.length&&s.children().length&&("ontouchstart"in window&&(e(window).on("resize.prdxn",a),a()),s.find("a").on("focus.prdxn blur.prdxn",function(){e(this).parents(".menu-item").toggleClass("focus")}))}(),e(document).ready(function(){r=e(document.body),e(window).on("load.prdxn",t).on("resize.prdxn",function(){clearTimeout(c),c=setTimeout(function(){n("img.size-full"),n("blockquote.alignleft, blockquote.alignright")},300),t()}),n("img.size-full"),n("blockquote.alignleft, blockquote.alignright")})}(jQuery);