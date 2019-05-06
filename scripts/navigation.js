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
	var nav = [
	'<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">',
	'<div class="container-fluid" id="navfluid">',
	'<div class="navbar-header">',
	'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">',
	'<span class="sr-only">Toggle Navigation</span>',
	'<span class="icon-bar"></span>',
	'<span class="icon-bar"></span>',
	'<span class="icon-bar"></span>',
	'</button>',
	'<a id="home" class="navbar-brand" href="./Home.html">Andy Rose</a>',
	'</div>',
	'<div class="collapse navbar-collapse" id="navigationbar">',
	'<ul class="nav navbar-nav">',
	'<li id="about"><a href="./About.html">About</a></li>',
	'<li id="info"><a href="./Info.html">Info/Skills</a></li>',
	'<li id="work"><a href="./Work.html">Work History</a></li>',
	'<li id="projects"><a href="./Projects.html">Projects</a></li>',
	'<li id="papers"><a href="./Papers.html">Papers</a></li>',
	// '<li id="lights"><a href="./Lights.html">Lights</a></li>',
	'</ul>',
	'</div>',
	'</div>',
	'</nav>'].join('');
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