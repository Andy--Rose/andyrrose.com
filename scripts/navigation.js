function setNavigation(page) {
	$(".nav").find("li").each(function () {
		var item = $(this)[0];
		if (item.id == page) {
			item.className = "active";
		}
		else {
			item.className = "inactive";
		}
	});
}

function getNavigationHtml() {
	var nav = '<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">';
	nav += '<div class="container-fluid" id="navfluid">';
	nav += '<div class="navbar-header">';
	nav += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">';
	nav += '<span class="sr-only">Toggle Navigation</span>';
	nav += '<span class="icon-bar"></span>';
	nav += '<span class="icon-bar"></span>';
	nav += '<span class="icon-bar"></span>';
	nav += '</button>';
	nav += '<a id="home" class="navbar-brand" href="./Home.html">Andy Rose</a>';
	nav += '</div>';
	nav += '<div class="collapse navbar-collapse" id="navigationbar">';
	nav += '<ul class="nav navbar-nav">';
	nav += '<li id="about"><a href="./About.html">About</a></li>';
	nav += '<li id="info"><a href="./Info.html">Info/Skills</a></li>';
	nav += '<li id="work"><a href="./Work.html">Work History</a></li>';
	nav += '<li id="projects"><a href="./Projects.html">Projects</a></li>';
	nav += '<li id="papers"><a href="./Papers.html">Papers</a></li>';
	nav += '</ul>';
	nav += '</div>';
	nav += '</div>';
	nav += '</nav>';
	return nav;
}

function setHomeNav() {
	setNavigation('home');
	$(".navbar-brand").each(function() {
		$(this).remove()
	});
	$("#navMenu").find(".navbar").css("display", "inline-block");
    $("#navMenu").find(".navbar").css("float", "none");
}