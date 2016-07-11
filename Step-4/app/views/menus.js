define("app/views/menus",["jquery","magix"],function($,magix){
	var a = magix.View.extend({
		init: function() {
            this.observeLocation({
                path: true
            });
        },

		render : function() {
			this.setHTML(this.id,this.tmpl);

			var pn = this.location.path;
			var link = $("#" + this.id).find('a[href="#!' + pn + '"]');
		
			if(link){
				link.addClass('hover');

		        // 如果菜单项为二级菜单，展现其所在 ul，并设置正确的父级菜单之前的箭头方向。
		        var topNav = link.parent('.topnav-list');
		        var ul = topNav.find('ul');

		        if (ul) {
		            ul.removeClass('none');
		            var arrow = topNav.find('i');
		            if(arrow) {
		                arrow.html('&#405');
		            }
		        }
			}
		},

		'toggleSubMenus<click>': function(e) {

            // 获取被点击的标签 A
            var target = $('#' + e.target.id);
            if (target[0].tagName == "I") {
                target = target.parent();
            }
            // 改变 A 的兄弟节点 ul 和 A 的子节点 arrow 的状态
            var ul = target.next("ul");
            var arrow = target.find("i");

            if (ul.hasClass("none")) {
                ul.removeClass("none");
                arrow.html("&#405");
            } else {
                ul.addClass("none");
                arrow.html("&#402");
            }
        }
	});
	return a;
});