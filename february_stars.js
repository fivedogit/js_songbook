function play(){
	
}

function sing(){
	
}

var intro = [ {
	"chord" : "Dsus",
	"lyrics" : [ "Hanging", "Even" ]
}, {
	"chord" : "D",
	"lyrics" : [ "on", "though" ]
}, {
	"chord" : "Dmaj7",
	"lyrics" : [ "Here until I'm", "Watched you come and" ]
}, {
	"chord" : "G",
	"lyrics" : [ "Gone", "Go" ]
}, {
	"chord" : "E",
	"lyrics" : [ "Right where I be", "How was I to" ]
}, {
	"chord" : "G",
	"lyrics" : [ "Long. Just hanging", "know you'd steal the" ]
}, {
	"chord" : "Dmaj7",
	"lyrics" : [ "On.", "show?" ]
} ];

var x = 0;
var y = 0;
while(x < 2)
{
	y = 0;
	while(y < intro.length)
	{
		play(intro[y].chord);
		sing(intro[y].lyrics[x]);
		y++;
	}	
	x++;
}	

