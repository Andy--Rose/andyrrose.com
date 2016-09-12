function setNavigation() {
	var nav = '<nav class="navbar navbar-inverse navbar-fixed-top">';
	nav += '<div class="container-fluid">';
	nav += '<div class="navbar-header">';
	nav += '<a class="navbar-brand" href="Home.html">Andy Rose</a>';
	nav += '</div>';
	nav += '<ul class="nav navbar-nav">';
	nav += '<li class="active"><a href="Home.html">Home</a></li>';
	nav += '<li><a href="Info.html">Info/Skills</a></li>';
	nav += '<li><a href="Work.html">Work History</a></li>';
	nav += '<li><a href="Projects.html">Projects</a></li>';
	nav += '<li><a href="Papers.html">Papers</a></li>';
	nav += '</ul>';
	nav += '</div>';
	nav += '</nav>';

	document.getElementById("navMenu").innerHTML = nav; 
}