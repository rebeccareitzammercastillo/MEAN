// Pointers: Imagine that we're building a game for children. They may wander the Hundred Acre Wood and interact with Winnie the Pooh and other characters. Let's draw a map of where the different characters live in the Hundred Acre Wood.
var tigger = { character: "Tigger" };

var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"}; 
var bees = { character: "Bees"}
var owl = { character: "owl"}
var chris = { character: "Christopher Robin"}
var rabbit = { character: "Rabbit"}
var gopher = { character: "Gopher"}
var kanga = { character: "Kanga"}
var eeyore = { character: "Eeyore"}
var Heffalumps = { character: "Heffalumps"}


tigger.north = pooh;

pooh.south = tigger;
pooh.east=bees;
pooh.west=piglet;
pooh.north=chris;

piglet.east = tigger.north;      
piglet.north=owl;

owl.east=pooh.north;
owl.south=pooh.west;

chris.north=kanga;
chris.east=rabbit;
chris.west=piglet.north;
chris.south=tigger.north;

rabbit.east=gopher;
rabbit.west=pooh.north;

gopher.west=chris.east;

kanga.north=eeyore;
kanga.south=pooh.north;

eeyore.east=huffalumps;
eeyore.south=chris.north;

huffalumps.west=kanga.north;





