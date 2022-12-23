// Auxiliary verbs (the first word in the sentence
auxiliary_verbs = ["will", "will", "present", 
"could", "could", "present",
"are", "is", "active",
"have", "has", "past",
"do", "does", "present",
"can", "can", "present"];
// Transitive phrases (i.e. bad thing they do
transitive_phrases = ["give", "given", "giving", "cancer",
"give", "given", "giving", "cancer", // Have it twice as they're so bloody obsessed by it
"infect", "infected", "infecting", "with AIDS",
"give", "given", "giving", "swine flu",
"make", "made", "making", "obese",
"give", "given", "giving", "diabetes",
"make", "made", "making", "impotent",
"turn","turned","turning","gay",    // Cunts
"scrounge off","scrounged off","scrounging off","",
"tax", "taxed", "taxing", "",
"cheat", "cheated", "cheating", "",
"defraud", "defrauded", "defrauding", "",
"steal from","stolen from","stealing from","",
"burgle","burgled","burgling","",
"devalue","devalued","devaluing","",
"rip off","ripped off","ripping off","",
"molest","molested","molesting","",
"have sex with","had sex with","having sex with","",
"impregnate", "impregnated", "impregnating", "",
"steal the identity of","stolen the identity of","stealing the identity of","",	
"destroy","destroyed","destroying","",
"kill","killed", "killing","",
"ruin","ruined","ruining","",
"hurt","hurt", "hurting","",
/* BOTB TIME */
"mess with","messed with","messing with","",
"froon with","frooned with","frooning with","",
"hack","hacking","hacked","",
"hack","hacking","hacked","with hacks",
"hack","hacked","hacking","",
"hack","hacked","hacking","with hacks",
"solicit","solicited","soliciting","",
"give","given","giving","a hard time",
//new Phrase("give","given","giving","a run for their money","",
"troll","trolled","trolling","",
"refuse to give","refuse to give","refuse to give","a chance",
"cause","caused","causing","to go mad",
"beshitify","beshitified","beshitifying","",
"pitch-shift","pitch-shifted","pitch-shifting","",
"confuse the hell out of","confused the hell out of",
"confusing the hell out of","",
"just leave","ever left","leaving","alone",
"prove","proven","proving","to be illegal",
"prove","proven","proving","a threat to the public",
"accidentally","accidentally","accidentally","",
"make", "made", "making", "go wild",
"convince", "convinced", "convincing", "to vote boomlinde",
"set", "set", "setting", "up the bomb",
"be in","been in","in","",
"put","put","putting","in a coma",
"seduce","seduced","seducing","",
"condone","condoned","condoning","",
"soil","soiled","soiling","",
"give up on","given up on","giving up on","",
"throw away traditional","thrown away traditional",
"throwing away traditional","values",
"poke","poked","poking","to death",
"tickle","tickled","tickling","to death",
"totally throw","totally threw","totally throwing","off",
"make conversations about","made conversations about",
"making conversations about","awkward",
"clone","cloned","cloning","",
"flip-off","flipped-off","flipping-off","",
"project","projected","projecting","at an all time high",
"take out","take out","taking out","to eat",
"go to the movies with","went to the movies with","going to the movies with","",
"go out with","went out with","going out with","",
"be in the kitchen with","in the kitchen with","in the kitchen with","",
"blow","blown","blowing","out of the water",
"pretend to be","pretended to be","pretending to be","",
"cross-dress with","cross-dressed with","cross-dressing with",""];
subjects = [
// Subjects (i.e. bad things
"the labour party",3,1,
"brussels",3,1,
"the bbc",3,1,
"the e.u.",3,1,
"the euro",3,1,
"the loony left",3,1,
"the unions",3,2,       // May be a bit quaint this one
"channel 4",3,1,
"your local council",3,1,
"the french",3,2,
"the germans",3,2,
"the poles",3,2,
"brussels bureaucrats",3,2,
"muslims",3,2,
"immigrants",3,2,        // Except those from the UK to Spain & the Algarve of course
"teachers",3,2,
"the unemployed",3,2,
"gypsies",3,2,
"yobs",3,2,
"hoodies",3,2,
"feral children",3,2,    // They hate children *and* paedophiles FFS, make your minds up
"chavs",3,2,
"the p.c. brigade",3,2,
"cyclists",3,2,          // Thanks to Chris Richards for this suggestion
"foxes",3,2,
"asylum seekers",3,2,    // Nicer way of saying 'brown people'
"gays",3,2,
"lesbians",3,2,
"single mothers",3,2,
"paedophiles",3,2,
"working mothers",3,2,   // Thanks to Maggie A for this suggestion
"teenage sex",3,1,
"political correctness",3,1,
"health &amp; safety",3,1,
"feminism",3,1,
"the metric system",3,1,    // For fuck's sake
"dumbing-down",3,1,
"rip-off britain",3,1,
"the internet",3,1,
"facebook",3,1,             // I CAN'T BELIEVE THE MAIL ACTUALLY SAID FACEBOOK COULD GIVE YOU CANCER, FOR REAL
"twitter",3,1,             
"filth on television",3,1,
"the human rights act",3,1,
"the nanny state",3,1,
"cancer",3,1,               // Could cancer give you cancer?
"binge drinking",3,1,
"the MMR jab",3,1,          // Murdering cunts
"the house price crash",3,1, // Hahahaha
/*BOTB time*/
"barrel rolls",3,2,
"Barack Obama",3,1,
"Scientology",3,1,
"Apple",3,1,
"hackers",3,2,
"Richard Stallman",3,1,
"the dream police",3,1,
"breastfeeding",3,1,
"squirrles",3,2,
"turds",3,2,
"tincans",3,2,
"Windows ME",3,1,
"professional wrestling",3,1,
"#mod_shrine",3,1,
"drugs",3,2, // Drugs are bad, 'mmmkay?
"rabies",3,1,
"geese",3,2,
"a goose",3,1,
"pop culture",3,1,
"dubstep",3,1,
"haters",3,2,
"weed",3,1,
"male compassion",3,1,
"fizzy drinks",3,2,
"the Twilight craze",3,1,
"racism",3,1,
"pornographic tatoos",3,2,
"Kim Jong-un",3,1,
"Tom Cruise",3,1,
"data mining",3,1,
"the recent healthcare mandate",3,1,
"recent Supreme Court rulings",3,2,
"the middle eastern crisis",3,1,
"strange bodily odors",3,2,
"fan fiction",3,1,
"the polls",3,2,
"the Polish",3,2,
"butthurt",3,1,
"slang",3,1,
"poor management",3,1,
"fish",3,2,
"durgs",3,2,
"Internet Explorer 6",3,1,
"Walmart",3,1,
"con artists",3,2,
"spies",3,2,
"angry Russians",3,2,
"drunken Germans",3,2,
"mainstream media",3,1,
"Windows XP",3,1,
"Windows Vista",3,1,
"telemarketers",3,2,
"the green party",3,1, //That's right! No capitalization!
"VEVO",3,1,
"8bc",3,1,
"dubmood",3,1,
"those mean rich people",3,2,
"heat wave",3,1,
// Objects (i.e. saintly, saintly things
"the british people",3,1,
"the middle class",3,1,
"middle britain",3,1, // Cunts
"england",3,1,
"hard-working families",3,2,
"homeowners",3,2,
"pensioners",3,2,
"drivers",3,2,
"taxpayers",3,2,
"taxpayers' money",3,1,
"house prices",3,2,
"property prices",3,2, // Hahahahahahahaa
"britain's farmers",3,2,
"the countryside",3,1,
"british justice",3,1,
"british sovereignty",3,1,
"common sense and decency",3,1,
"the queen",3,1,    // God bless 'er
"the royal family",3,1,
"the church",3,1,
"you",2,1,
"your mortgage",2,1,
"your pension",2,1,
"your daughters",2,2,
"your children",2,2,
"your house",2,1,
"your pets",2,2,
"the conservative party",3,1,  // FAIL
"cliff richard",3,1,           // Should this be in here?
"the memory of diana",3,1,
"Britain's swans",3,2,          // This always stays
/* BOTB TIME */
"Strobe",3,1,
"Svetlana",3,1,
"Jangler",3,1,
"ui",3,1,
"nys",3,1,
"CreepSmash",3,1,
"CreepTD",3,1,
"the BotB IRC Bot",3,1,
"Chip Champion",3,1,
"chunter",3,1,
"Slimeball",3,1,
"Waffle House",3,1,
"waffles",3,2,
"*nix",3,1,
"GNU/Linux",3,1,
"beards",3,2,
"beard",3,1,
"Firefox",3,1,
"Chrome",3,1,
"the average finger",3,1,
"zanzan",3,1,
"video games",3,2,
"furries",3,2,
"Lucille Ball",3,1,
"kfaraday",3,1,
"rainwarrior",3,1,
"Windows",3,1,
"Richard Stallman",3,1,
"KungFuFurby",3,1,
"dw",3,1,
"Americans",3,2,
"Candaians",3,2,
"Germans",3,2,
"gyms",3,1,
"trough",3,1,
"Baron Knoxbury",3,1,
"the world's longest dog",3,1,
"Gabe Newell",3,1,
"Kirby",3,1,
"the Internet",3,1,
"your fridge",2,1,
"cross country races",3,2,
"Jude",3,1, //NAAAAAA NAA NAAA NA NA NA NAAA
"#ducks",3,1,
"tacos",3,1,
"male compassion",3,1,
"America",3,1,
"Canada",3,1,
"Sweden",3,1,
"Japan",3,1,
"Finland",3,1,
"Germany",3,1,
"Linus Torvalds",3,1,
"an OHC",3,1,
"lesbian space dog pilots",3,2,
"modern consumerism",3,1,
"technology",3,1,
"the typical hipster",3,1,
"hipsters",3,2,
"Super Mario Bros",3,1,
"#botb",3,1,
"your privacy",3,1,
"an OHB",3,1,
"Blitz Lunar",3,1,
"your qualifications",3,2,
"your cell phone",3,1,
"privacy",3,1,
"your car",3,1,
"your tincans",3,1,
"your bet",2,1, //I meant to type "your pet" but this is better
"OHB",3,1,
"OHBs",3,2,
"your assets",2,2,
"peace",3,1,
"freedom",3,1,
"capitalism",3,1,
"OHCs",3,2,
"OHC",3,1,
"your pet",3,1,
"gambling",3,1,
"the value of the dollar",3,1,
"a website",3,1,
"a shell script",3,1,
"Windows 2000",3,1,
"MS-DOS",3,1,
"a grilled cheese sandwich",3,1,
"pizza",3,1,
"sandwiches",3,2,
"a sandvich",3,1,
"pasta",3,1,
"fish",3,2,
"a fish",3,1,
"Hank Hill",3,1,
"propane",3,1,
"ramen",3,1,
"ramen prices",3,2,
"RushJet1",3,1,
"Kulor",3,1,
"miau",3,1,
"Warlord",3,1,
"null1024",3,1,
"TristEndo",3,1,
"michu",3,1,
"iamgreaser",3,1,
"MandraSigma",3,1,
"El Huesudo II",3,1,
"jrlepage",3,1,    
"tadpole",3,1,
"Soiled Bargains",3,1,
"a compo",3,1,
"compos",3,2,
"demoscene",3,1,
"beer",3,1,
"NTRQ",3,1,
"bencils",3,2,
"frantic",3,1,
"sci",3,1,
"sc",3,1,
"vimster",3,1,
"chipchop",3,1,
"xterm",3,1,
"wollymammoth",3,1,
"lunar",3,1,
"coda",3,1,
"people",3,1,
"Detriot",3,1,
"mootbooxle",3,1,
"Velathnos",3,1,
"Shnabubula",3,1,
"mint",3,1,
"Microsoft",3,1,
"cannabis",3,1,
"Snoop Dogg",3,1,
"David Cameron",3,1,
"Sarah Connor",3,1,
"Wing",3,1,
"basil",3,1];