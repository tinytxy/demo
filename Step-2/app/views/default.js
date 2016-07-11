define("app/views/default",["magix"],function(magix){
	//console.log(arguments);
	var a = magix.View.extend({
		init : function() {
			this.observeLocation({
				path: true
			});
		},
		render : function() {
		    this.setHTML(this.id, this.tmpl);

		    // 获取 path，this.location 由视图的基类传入
		    // pathname 为 #! 之后，下一个 ? 之前（如果有）的部分
		    var pn = this.location.path;

		    // this.id 为当前视图所在 vframe 的 id
		    // 在 vframe 内寻找是否有目标为 "#!" + path 的链接，如果找到了设置高亮。
		    var link = $("#" + this.id).find('a[href="#!' + pn + '"]');

		    if (link) {
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
	}
	});
	//console.log(a);
	return a;
});