// TODO: When the page gets to the point when it scales virtically
function setNavigation(page) {
	var nav = '<nav class="navbar navbar-inverse">';
	nav += '<div class="container-fluid">';
	nav += '<div class="navbar-header">';
	nav += '<a class="navbar-brand" href="Home.html">Andy Rose</a>';
	nav += '</div>';
	nav += '<ul class="nav navbar-nav">';
	nav += '<li id="home"><a href="Home.html">Home</a></li>';
	nav += '<li id="info"><a href="Info.html">Info/Skills</a></li>';
	nav += '<li id="work"><a href="Work.html">Work History</a></li>';
	nav += '<li id="projects"><a href="Projects.html">Projects</a></li>';
	nav += '<li id="papers"><a href="Papers.html">Papers</a></li>';
	nav += '</ul>';
	nav += '</div>';
	nav += '</nav>';

	document.getElementById("navMenu").innerHTML = nav;
	
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

function setHomeNav() {
	setNavigation('home');
	$(".navbar-brand")[0].remove();
	$(".navbar").css("text-align", "center");
}