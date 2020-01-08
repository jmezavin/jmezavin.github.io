$(document).ready(function(){

		console.log(window.location);
        var pagefile = window.location.pathname.split("/").pop();

        if (pagefile.includes("Projects")){
            $("#banner").html('<h1>Projects</h1>');
			$("#mynav").html('<a class="navbar-brand" href="index.html">Home</a>'+
		  						'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">'+
		    						'<span class="navbar-toggler-icon"></span>'+
		  						'</button>'+

		  					'<div class="collapse navbar-collapse" id="collapsibleNavbar">'+
		    					'<ul class="navbar-nav">'+
		      						'<li class="nav-item">'+
		        						'<a id="activeTab" class="nav-link" href="personalSite/personalSiteProjects.html">Projects</a>'+
		      						'</li>'+

		      						'<li class="nav-item">'+
		        						'<a class="nav-link" href="personalSite/personalSiteResume.html">Resume</a>'+
		      						'</li>'+   
		    					'</ul>'+
		  					'</div>');
        }

        else if (pagefile.includes("Resume")){
            $("#banner").html('<h1>Resume</h1>');
			$("#mynav").html('<a class="navbar-brand" href="index.html">Home</a>'+
		  						'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">'+
		    						'<span class="navbar-toggler-icon"></span>'+
		  						'</button>'+

		  					'<div class="collapse navbar-collapse" id="collapsibleNavbar">'+
		    					'<ul class="navbar-nav">'+
		      						'<li class="nav-item">'+
		        						'<a class="nav-link" href="personalSite/personalSiteProjects.html">Projects</a>'+
		      						'</li>'+

		      						'<li class="nav-item">'+
		        						'<a id="activeTab" class="nav-link" href="personalSite/personalSiteResume.html">Resume</a>'+
		      						'</li>'+   
		    					'</ul>'+
		  					'</div>');
        }

        else{
        	$("#banner").html('<h1>Juan Diego Meza Vinasco</h1>'+'<p id="blurb"> (site in progress!) your number juan choice for all your data/finance/gamedev/webdev needs</p>');
			$("#mynav").html('<a id="activeTab" class="navbar-brand" href="index.html">Home</a>'+
		  						'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">'+
		    						'<span class="navbar-toggler-icon"></span>'+
		  						'</button>'+

		  					'<div class="collapse navbar-collapse" id="collapsibleNavbar">'+
		    					'<ul class="navbar-nav">'+
		      						'<li class="nav-item">'+
		        						'<a class="nav-link" href="personalSite/personalSiteProjects.html">Projects</a>'+
		      						'</li>'+

		      						'<li class="nav-item">'+
		        						'<a class="nav-link" href="personalSite/personalSiteResume.html">Resume</a>'+
		      						'</li>'+   
		    					'</ul>'+
		  					'</div>');
        }

	$("#footer").html("Contact me at: <br> Email: 123456@gmail.com </br> Phone: 201-111-2222");
});