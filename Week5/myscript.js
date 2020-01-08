$(document).ready(function(){


		function jumbotron(data){

			var htmlcode = '<div class = "jumbotron">'+
      							'<div class = "container">'+
        							'<h1>' + data.heading + '</h1>'+
        							'<p>' + data.subheading +'</p>'+
      							'</div>'+
    						'</div>';
    		console.log(htmlcode);
			$("#main").append(htmlcode);
		};

        /*console.log("It works!!");
        alert("I am a popup window");

        var things = "50";
        var things2 = "5";
        console.log(things);
        console.log("The value in things is:" + things);
        var things3 = things + things2;
        console.log(things3);

        things3 = things - things2;
        console.log(things3);
        
        things3 = things * things2;
        console.log(things3);

        things3 = things / things2;
        console.log(things3);
        $('#heading').html('Learing JavaScript');
        $('#jumbo').append('<h1>This is a title</h1><p class="text-center">This is a paragraph text</p>');
        var title = "This is a title";
        var subtitle = "This is a paragarph";
        $('#jumbo2').append('<h1>'+title+'</h1><p>'+subtitle+'</p>');

        var foods = ["Pasta", "Pizza", "Burgers", "Fries", "Ice-Cream"];
        console.log(foods);
        console.log(foods.length);
        console.log(foods[4]);

        for(var i = 0; i < foods.length; i++){
            console.log(foods[i]);
            $("#myfoods").append('<li>'+ foods[i]+'</li>')
            /*$("#mynav").append('<li class="nav-item"><a class="nav-link" href="#">'+ foods[i]+'</a></li>')*
        }*/
        var content = {
            "navbar": [
                {
                    "title": "Home",
                    "url" : "index.html"
                },
                {
                    "title": "About Us",
                    "url" : "about.html"
                },
                {
                    "title": "Our Team",
                    "url" : "team.html"
                },
                {
                    "title": "Contact Us",
                    "url" : "contact.html"
                }
            ],

            "index.html" : {
            	"blocks" : [
            	{
                    "type" : "jumbotron",
                    "heading" : "This is a pretty cool title for index!",
                    "subheading": "This is our cool subheading that goes here for index!"
            	}
            	]
            },

            "about.html" : {
                "blocks" : [
                    {
                        "type" : "jumbotron",
                        "heading" : "about page",
                        "subheading": "This is our about page"
                    }
                ]
            },

            "team.html" : {
                "blocks" : [
                    {
                        "type" : "jumbotron",
                        "heading" : "team page",
                        "subheading": "This is our team page"
                    }
                ]
            },

            "contact.html" : {
                "blocks" : [
                    {
                        "type" : "jumbotron",
                        "heading" : "contact page",
                        "subheading": "This is our contact page"
                    }
                ]
            }

        }

        for(var i=0; i<content.navbar.length; i++){
            console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);
            $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+ content.navbar[i].url +'">'+ content.navbar[i].title +'</a></li>')
        }

        /*jumbotron();*/

        console.log(window.location);
        console.log(window.location.pathname);
        var pagefile = window.location.pathname.split("/").pop();

        console.log(pagefile);

        var blocks = content[pagefile].blocks;
        console.log(blocks);
        for(var i=0; i<blocks.length; i++){
        	if (blocks[i].type == 'jumbotron'){
        		jumbotron(blocks[i]);
        	}
        }

    });