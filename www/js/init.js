$(function(){

    //setup scrolling
    $(document)
	.bind('touchmove', function(e){
		if (window.inAction || window.editing || window.draggingDown || document.height <= 356) {
			e.preventDefault();
		} else {
			window.globalDrag = true;
		}
	})
	.bind('touchend touchcancel', function(e){
		window.globalDrag = false;
	});

	app.initialize();
    
    // grab json
    app.renderList( app.getNerds() );
});

app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);
        alert('app ready says phonegap');
    },
    renderList: function(nerds) {
    	var NerdList = [];
            
            for (var i = 0; i < nerds.length; i++) { // style="left:-'+$(window).width()+'px;"
                  var nerd = nerds[i];
                  var nerdMeta = [];
                  
                  for (var attr in nerd) {
                      if (attr != '_id') {
                          if(attr == 'name') {
                            nerdMeta.push(new Todo('<a _id="'+nerd['_id']+'" _name="'+nerd[attr]+'" _meta="'+attr+'" class="icon '+attr+'"></a>'+nerd[attr]));  
                          }
                          else if(attr == 'google' || attr == 'facebook' || attr == 'linkedin' || attr == 'website') {
                            nerdMeta.push(new Todo('<a _meta="'+attr+'" class="icon '+attr+'" href="'+nerd[attr]+'"></a>Visit Profile'));
                          }
                          else if(nerd[attr] != '' && attr != 'image') {
                            nerdMeta.push(new Todo('<a class="icon '+attr+'"></a>'+nerd[attr]));
                          }
                      }
                  }
                  
                  NerdList.push(
                     new List(nerd.name, nerdMeta)   
                  );
            }
            
            var app = new Home(NerdList);
            app.render().appendTo('#wrapper');
    },
    getNerds: function() {
    	return [{
	          "_id": "4f60537a63d137000500000b",
	          "city": "West Seattle",
	          "degree": "BS Web Design and Interactive Media",
	          "email": "adam@ratiointeractive.com",
	          "facebook": "http://www.facebook.com/adamargyle",
	          "google": "https://plus.google.com/113556563890081284759/about",
	          "hours": "M - F / 9am - 5pm",
	          "im": "",
	          "image": "http://sphotos.xx.fbcdn.net/hphotos-ash4/417446_10151312951010554_856545553_22888518_891391917_n.jpg",
	          "likes": "Sierra and video games",
	          "linkedin": "http://www.linkedin.com/in/adamargyle",
	          "movie": "",
	          "name": "",
	          "role": "Front End Developer",
	          "school": "Art Institute or Seattle ",
	          "skills": "CSS, jQuery, HTML, AS3, .NET",
	          "skype": "",
	          "twitter": "",
	          "website": ""
	      }, {
	          "_id": "4f6055e35f14c7ba67000008",
	          "city": "Seattle Baby",
	          "email": "aaron@ratiointeractive.com",
	          "hours": "M - F  /  8am - 4pm",
	          "im": "aaron@ratio",
	          "likes": "Chocolate dipped old fashioned doughnuts",
	          "name": "Aaron Johnson",
	          "role": "UX/UI Designer",
	          "school": "DIY University ",
	          "website": "www.pixelandquill.com"
	      }, {
	          "_id": "4f6056005f14c7ba6700000b",
	          "email": "amanda@ratiointeractive.com",
	          "name": "Amanda Shumack",
	          "role": "iOS Engineer"
	      }, {
	          "_id": "4f60561f5f14c7ba6700000e",
	          "name": "Anchal Kumar",
	          "role": "PiMP"
	      }, {
	          "_id": "4f6056555f14c7ba67000012",
	          "name": "Andy Scearce",
	          "role": "Software Developer"
	      }, {
	          "_id": "4f6056915f14c7ba67000017",
	          "email": "bart@ratiointeractive.com",
	          "name": "Bart Claeys",
	          "role": "UI/UX Designer"
	      }, {
	          "name": "Chris Hawkins",
	          "_id": "4f6056be5f14c7ba6700001c"
	      }, {
	          "_id": "4f6055a45f14c7ba67000004",
	          "city": "With his mom",
	          "name": "Cody Cushing",
	          "role": "Dork "
	      }, {
	          "name": "Craig Fisher",
	          "_id": "4f6055b65f14c7ba67000006"
	      }, {
	          "name": "Dean Graziano",
	          "_id": "4f6055ed5f14c7ba67000009"
	      }, {
	          "name": "Jasenka Gracic",
	          "_id": "4f60560a5f14c7ba6700000c"
	      }, {
	          "name": "Jeremy Thompson",
	          "_id": "4f60562a5f14c7ba6700000f"
	      }, {
	          "name": "Joe Do",
	          "_id": "4f6056475f14c7ba67000011"
	      }, {
	          "_id": "4f60567c5f14c7ba67000015",
	          "email": "Johnathan@ratiointeractive.com",
	          "name": "Johnathan Buell",
	          "phone": "215 605 0405",
	          "role": "Resident Goodlooking",
	          "school": "Lycoming College"
	      }, {
	          "name": "Jordan Sims",
	          "_id": "4f60c205d4642b0100000001"
	      }, {
	          "name": "Mandla Mondin",
	          "_id": "4f60569a5f14c7ba67000018"
	      }, {
	          "name": "Mike Hitchcock",
	          "_id": "4f6056ac5f14c7ba6700001a"
	      }, {
	          "name": "Miles Pember",
	          "_id": "4f6056c75f14c7ba6700001d"
	      }, {
	          "name": "Miles Pember",
	          "_id": "4f6056c75f14c7ba6700001e"
	      }, {
	          "name": "Nathan Broyles",
	          "_id": "4f6055d85f14c7ba67000007"
	      }, {
	          "_id": "4f6055f55f14c7ba6700000a",
	          "email": "Rick@ratiointeractive.com",
	          "name": "Rick Locke"
	      }, {
	          "name": "Russ Whitman",
	          "_id": "4f6056155f14c7ba6700000d"
	      }, {
	          "name": "Shelby Blair",
	          "_id": "4f6056335f14c7ba67000010"
	      }, {
	          "name": "Spenser Pothier",
	          "_id": "4f6056635f14c7ba67000013"
	      }, {
	          "name": "Tyler Eide",
	          "_id": "4f6056875f14c7ba67000016"
	      }, {
	          "name": "William Power",
	          "_id": "4f6056a25f14c7ba67000019"
	      }, {
	          "name": "Yamini Shah",
	          "_id": "4f6056b45f14c7ba6700001b"
	      }];
	}
};