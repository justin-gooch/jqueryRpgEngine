/*!
 * jQuery Rpg Engine-levels
 * 
 * @requires engine.js 
 * 
 * version: 1.0.0 (17-march-2013)
 *
 * Author: Justin Gooch, wet-monkey games 
 * 
 *  licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html 
 * 
 * all artwork property of wet-monkey 
 */	


//functions that start with level. 
inDialog=false;
battleDialogString = '';
battleDialogArrayLocation = 0;
inBattleDialog = false;
passedRandomAlert=false;
passedRandomFunction=false;
passedMultiPartDialog=false;
$(document).ready(function(){
//initialize first level through changelevel dialog
//all level code can be found in levels.js
changeLevel(fountainLevelStartPoint, fountainLevelDesign, fountainLevelNpcPlacement, fountainLevelNoAccessTiles, fountainLevelDialog, fountainLevelChangePoints, fountainLevelEnemyFrequency, fountainLevelEnemyList);
//initiated variables for game start point
$('#menu').hide();
$('#subMenu').hide();
$('#attributesMenu').hide();
menuShow=0;
backpackWeaponArray = new Array();
backpackItemArray = new Array();
bullets =0;
health = 100;
maxHealth = 100;
//start off with just your fists..
weapon = 3;
attack = 40;
defense = 40;
accuracy = 40;
speed = 40;
agility = 40;
//start off with just a shirt on...
armor = 0;
xp = 0;
//players level
playerLvl = 1;
//level experience requirements.
//xpRequired;attackIncrement;defenseIncrement;accuracyIncrement;speedIncrement;agilityIncrement;healthIncrement;bulletBonus
levelXp = '0;0;0;0;0;0;0;0:0;0;0;0;0;0;0;0:50;10;10;10;10;10;10;10:100;20;20;20;20;20;20;20:200;40;40;40;40;40;40;40'
levelXpArray = levelXp.split(':');
//declare new arrays....
xpRequiredArray = new Array();
attackIncrementArray = new Array();
defenseIncrementArray = new Array();
accuracyIncrementArray = new Array();
speedIncrementArray = new Array();
agilityIncrementArray = new Array();
healthIncrementArray = new Array();
bulletBonusArray = new Array();

i=0
while(i < levelXpArray.length)
{
	levelXpStatsArray = levelXpArray[i].split(';');
	xpRequiredArray.push(levelXpStatsArray[0]);
	attackIncrementArray.push(levelXpStatsArray[1]);
	defenseIncrementArray.push(levelXpStatsArray[2]);
	accuracyIncrementArray.push(levelXpStatsArray[3]);
	speedIncrementArray.push(levelXpStatsArray[4]);
	agilityIncrementArray.push(levelXpStatsArray[5]);
	healthIncrementArray.push(levelXpStatsArray[6]);
	bulletBonusArray.push(levelXpStatsArray[7]);
	
	
	i++;
}

$('#battleScreen').hide();
$('#battleMenu').hide();
inBattle = false;
//create paralel arrays of weapons with stats. 
weaponsListArray = weaponsList.split(':');
//initiate new arrays for weapon data
weaponStatsArray = new Array();
weaponNameArray = new Array();
weaponAttackArray = new Array();
weaponTypeArray = new Array();
weaponValueArray = new Array();
weaponCountArray = new Array();

i=0;
while(i < weaponsListArray.length)
{
	weaponStatsArray = weaponsListArray[i].split(';');
	weaponNameArray.push(weaponStatsArray[0]);
	weaponAttackArray.push(weaponStatsArray[1]);
	weaponTypeArray.push(weaponStatsArray[2]);
	weaponValueArray.push(weaponStatsArray[3]);
	weaponCountArray.push(weaponStatsArray[4]);
	i++
}
itemListArray = itemList.split(':');

itemNameArray = new Array();
itemStatTypeArray = new Array();
itemStatIntArray = new Array();
itemValueArray = new Array();
itemCountArray = new Array();
i=0
while(i < itemListArray.length)
{
	itemStatsArray = itemListArray[i].split(';');
	itemNameArray.push(itemStatsArray[0]);
	itemStatTypeArray.push(itemStatsArray[1]);
	itemStatIntArray.push(itemStatsArray[2]);
	itemValueArray.push(itemStatsArray[3]);
	itemCountArray.push(itemStatsArray[4]);
	i++
}
i=0;
//armorName;armorDefense;armorValue;armorCount
armorNameArray = new Array();
armorDefenseArray = new Array();
armorValueArray = new Array()
armorCountArray = new Array();

armorListArray = armorList.split(':');
while(i < armorListArray.length)
{
	armorStatsArray = armorListArray[i].split(';');
	armorNameArray.push(armorStatsArray[0]);
	armorDefenseArray.push(armorStatsArray[1]);
	armorValueArray.push(armorStatsArray[2]);
	armorCountArray.push(armorStatsArray[3]);
	i++;
}

});

/*
 * items / weapons code goes past this point, see current syntax for future edits, 
 * always ask noko if confused
 */
 
//weapons list
//weaponName;weaponAttack;weaponType;weaponValue;weaponCount
weaponsList = 'stick;10;melee;10;0:peaShooter;20;gun;50;0:horse.45;30;gun;150;0:fist;0;melee;0;2'

//jquery class manipulation related to weapons.
	//stick
	$(document).on('click', '.weapon0', function(){
		weaponNumber = 0;
		if(weapon == weaponNumber)
		{
			alert('you already have this weapon equipped');
		}
		if(weapon != weaponNumber)
		{
			weapon = weaponNumber;
			alert('you have equipped');
			alert(weaponNameArray[weaponNumber]);
			
		}
	});
	//peaShooter
	$(document).on('click', '.weapon1', function(){
		weaponNumber = 1;
		if(weapon == weaponNumber)
		{
			alert('you already have this weapon equipped');
		}
		if(weapon != weaponNumber)
		{
			weapon = weaponNumber;
			alert('you have equipped');
			alert(weaponNameArray[weaponNumber]);
			
		}
	});
	//horse.45
	$(document).on('click', '.weapon2', function(){
		weaponNumber = 2;
		if(weapon == weaponNumber)
		{
			alert('you already have this weapon equipped');
		}
		if(weapon != weaponNumber)
		{
			weapon = weaponNumber;
			alert('you have equipped');
			alert(weaponNameArray[weaponNumber]);
			
		}
	});
	//fist
	$(document).on('click', '.weapon3', function(){
		weaponNumber = 3;
		if(weapon == weaponNumber)
		{
			alert('you already have this weapon equipped');
		}
		if(weapon != weaponNumber)
		{
			weapon = weaponNumber;
			alert('you have equipped');
			alert(weaponNameArray[weaponNumber]);
			
		}
		
	});
	

//items List
//itemName;statImprovement;statImprovementInt;value;numberInStock
itemList = 'potion;health;30;10;0:superPotion;health;100;40;0:steroids;strength;10;100;0';

//jquery class manipulation related to Items. 

	//potion
	$(document).on('click', '.item0', function(){
		itemNumber = 0;
		potionFunction(30)
		itemCountArrayInt = parseInt(itemCountArray[itemNumber]);
		itemCountArray[itemNumber] = itemCountArrayInt - 1;
		$('#subMenu').empty();
		$('#subMenu').hide();
	});
	//superPotion
	$(document).on('click', '.item1', function(){
		itemNumber = 1;
		potionFunction(100)
		itemCountArrayInt = parseInt(itemCountArray[itemNumber]);
		itemCountArray[itemNumber] = itemCountArrayInt - 1;
		$('#subMenu').empty();
		$('#subMenu').hide();
	});
	//steroids
	$(document).on('click', '.item2', function(){
		itemNumber = 2;
		strength = strength + 10;
		itemCountArrayInt = parseInt(itemCountArray[itemNumber]);
		itemCountArray[itemNumber] = itemCountArrayInt - 1;
		$('#subMenu').empty();
		$('#subMenu').hide();
	});
		
	//armor List
	//armorName;armorDefense;armorValue;armorCount
	armorList = 'shirt;0;0;1:vest;10;10;0:kevlar;30;90;0:nikola vesla;100;1000;0:clint Coat;80;800;0'

	//jquery class manipulation related to armor
	//shirt
	$(document).on('click', '.armor0', function(){
		armorNumber = 0;
		if(armor == armorNumber)
		{
			alert('you already have this equipped');
		}
		if(armor != armorNumber)
		{
			armor = armorNumber;
			alert('you have equipped');
			alert(armorNameArray[armorNumber]);
			
		}
		
	});
	//vest
	$(document).on('click', '.armor1', function(){
		armorNumber = 1;
		if(armor == armorNumber)
		{
			alert('you already have this equipped');
		}
		if(armor != armorNumber)
		{
			armor = armorNumber;
			alert('you have equipped');
			alert(armorNameArray[armorNumber]);
			
		}
	});
	//kevlar
	$(document).on('click', '.armor2', function(){
		armorNumber = 2;
		if(armor == armorNumber)
		{
			alert('you already have this equipped');
		}
		if(armor != armorNumber)
		{
			armor = armorNumber;
			alert('you have equipped');
			alert(armorNameArray[armorNumber]);
			
		}
	});
	//nikola vesla
	$(document).on('click', '.armor3', function(){
		armorNumber = 3;
		if(armor == armorNumber)
		{
			alert('you already have this equipped');
		}
		if(armor != armorNumber)
		{
			armor = armorNumber;
			alert('you have equipped');
			alert(armorNameArray[armorNumber]);
			
		}
	});
	//clint coat
	$(document).on('click', '.armor4', function(){
		armorNumber = 4;
		if(armor == armorNumber)
		{
			alert('you already have this equipped');
		}
		if(armor != armorNumber)
		{
			armor = armorNumber;
			alert('you have equipped');
			alert(armorNameArray[armorNumber]);
			
		}
	});
		
		
/*
 * Level information past this point
 * sets enemies etc with engine readable code for rpgEngine
 */
 
//html pasted from grid creator text box
fountainLevelDesign = '<div class="darkStone" id="x1y1"></div><div class="darkStone" id="x2y1"></div><div class="darkStone" id="x3y1"></div><div class="darkStone" id="x4y1"></div><div class="darkStone" id="x5y1"></div><div class="darkStone" id="x6y1"></div><div class="darkStone" id="x7y1"></div><div class="darkStone" id="x8y1"></div><div class="darkStone" id="x9y1"></div><div class="darkStone" id="x10y1"></div><br/><div class="darkStone" id="x1y2"></div><div class="water" id="x2y2"></div><div class="water" id="x3y2"></div><div class="lightStone" id="x4y2"></div><div class="lightStone" id="x5y2"></div><div class="lightStone" id="x6y2"></div><div class="lightStone" id="x7y2"></div><div class="water" id="x8y2"></div><div class="water" id="x9y2"></div><div class="darkStone" id="x10y2"></div><br/><div class="darkStone" id="x1y3"></div><div class="water" id="x2y3"></div><div class="lightStone" id="x3y3"></div><div class="darkGrass" id="x4y3"></div><div class="darkGrass" id="x5y3"></div><div class="darkGrass" id="x6y3"></div><div class="darkGrass" id="x7y3"></div><div class="lightStone" id="x8y3"></div><div class="water" id="x9y3"></div><div class="darkStone" id="x10y3"></div><br/><div class="darkStone" id="x1y4"></div><div class="lightStone" id="x2y4"></div><div class="darkGrass" id="x3y4"></div><div class="darkGrass" id="x4y4"></div><div class="water" id="x5y4"></div><div class="water" id="x6y4"></div><div class="darkGrass" id="x7y4"></div><div class="darkGrass" id="x8y4"></div><div class="lightStone" id="x9y4"></div><div class="darkStone" id="x10y4"></div><br/><div class="darkStone" id="x1y5"></div><div class="lightStone" id="x2y5"></div><div class="darkGrass" id="x3y5"></div><div class="water" id="x4y5"></div><div class="water" id="x5y5"></div><div class="water" id="x6y5"></div><div class="water" id="x7y5"></div><div class="darkGrass" id="x8y5"></div><div class="lightStone" id="x9y5"></div><div class="darkStone" id="x10y5"></div><br/><div class="darkStone" id="x1y6"></div><div class="lightStone" id="x2y6"></div><div class="darkGrass" id="x3y6"></div><div class="water" id="x4y6"></div><div class="water" id="x5y6"></div><div class="water" id="x6y6"></div><div class="water" id="x7y6"></div><div class="darkGrass" id="x8y6"></div><div class="lightStone" id="x9y6"></div><div class="darkStone" id="x10y6"></div><br/><div class="darkStone" id="x1y7"></div><div class="lightStone" id="x2y7"></div><div class="darkGrass" id="x3y7"></div><div class="darkGrass" id="x4y7"></div><div class="water" id="x5y7"></div><div class="water" id="x6y7"></div><div class="darkGrass" id="x7y7"></div><div class="darkGrass" id="x8y7"></div><div class="lightStone" id="x9y7"></div><div class="darkStone" id="x10y7"></div><br/><div class="darkStone" id="x1y8"></div><div class="water" id="x2y8"></div><div class="lightStone" id="x3y8"></div><div class="darkGrass" id="x4y8"></div><div class="darkGrass" id="x5y8"></div><div class="darkGrass" id="x6y8"></div><div class="darkGrass" id="x7y8"></div><div class="lightStone" id="x8y8"></div><div class="water" id="x9y8"></div><div class="darkStone" id="x10y8"></div><br/><div class="darkStone" id="x1y9"></div><div class="water" id="x2y9"></div><div class="water" id="x3y9"></div><div class="lightStone" id="x4y9"></div><div class="lightStone" id="x5y9"></div><div class="lightStone" id="x6y9"></div><div class="lightStone" id="x7y9"></div><div class="water" id="x8y9"></div><div class="water" id="x9y9"></div><div class="darkStone" id="x10y9"></div><br/><div class="darkStone" id="x1y10"></div><div class="darkStone" id="x2y10"></div><div class="darkStone" id="x3y10"></div><div class="darkStone" id="x4y10"></div><div class="lightStone" id="x5y10"></div><div class="lightStone" id="x6y10"></div><div class="darkStone" id="x7y10"></div><div class="darkStone" id="x8y10"></div><div class="darkStone" id="x9y10"></div><div class="darkStone" id="x10y10"></div><br/>';
//level startpoint set at xy coordinates
fountainLevelStartPoint = '#x3y3';
fountainLevelEndPoint = '#x5y9';
//tile names separated by colon
fountainLevelNoAccessTiles='water:darkStone:black';
//charactor name and placement separated by colon, charactor and their respective position separated by semicolon
//will be used to programmatically <-my one buzzword of the day... place nps on board.
fountainLevelNpcPlacement = 'sheriff;x4y2;sheriff.png:woman;x3y5;woman.png:cowboy;x9y4;cowboy.png';
//dialog in game. 
fountainLevelDialog = 'sheriff;0/So ye wanna be Deputy, eh;0/Ya know all dem laws?;0/Ya always gotta follow dem laws as Deputy;1/Ever since I was a little boy I thought, I ought to be sheriff; 1/you remember my dad gunned away by dem bandits right?;1/ever since I saw him gunned down;1/ the justice that was swiftly had;1/made me want put on my boots;1/and live protecting tombstone;0/well since today be your first day;0/and I wanna see you prove yourself;0/go to that cave behind the jail;0/ and grab that peashooter I dropped there;0/Youll wanna get yerself armed fore you go in dere;1/sure thing sheriff, wheres my gun?;0/ gun.... when I was your age ya pa told me to go out and get that very gun from that very cave..and just like me;0/you gunna go into that cave with this here stick;1/....;1/....;2/0;3/fountainLevelChangePointsPostStick;4/fountainLevelDialogPostStick:woman;0/im a woman, and you are talking to me;0/why are you talking to me;0/I am here as a filler charactor:cowboy;0/yeehaw;0/I say cowboy things;0/clint eastwood is my hero'
fountainLevelDialogPostStick = 'woman;0/im a woman, and you are talking to me;0/why are you talking to me;0/I am here as a filler charactor:cowboy;0/yeehaw;0/I say cowboy things;0/clint eastwood is my hero:sheriff;0/you got that peashooter yet son?;1/no, not yet;0/then go and get it son... geez when I was your age;0/I already had that gun'

//level change points put in the format of
//tile coordinates then
//LevelStartPoint, LevelDesign, LevelNpcPlacement, LevelNoAccessTiles, LevelDialog, LevelChangePoints
//do not add spaces, that messes with the fabric of the universe
fountainLevelChangePoints = 'x5y10;woodsLevelStartPoint,woodsLevelDesign,woodsLevelNpcPlacement,woodsLevelNoAccessTiles,woodsLevelDialog,woodsLevelChangePoints,woodsLevelEnemyFrequency,woodsLevelEnemyList:x6y10;woodsLevelStartPoint,woodsLevelDesign,woodsLevelNpcPlacement,woodsLevelNoAccessTiles,woodsLevelDialog,woodsLevelChangePoints,woodsLevelEnemyFrequency,woodsLevelEnemyList';
fountainLevelChangePointsPostStick = 'x5y10;woodsLevelStartPoint,woodsLevelDesign,woodsLevelNpcPlacement,woodsLevelNoAccessTiles,woodsLevelDialog,woodsLevelChangePoints,woodsLevelEnemyFrequency,woodsLevelEnemyList:x6y10;woodsLevelStartPoint,woodsLevelDesign,woodsLevelNpcPlacement,woodsLevelNoAccessTiles,woodsLevelDialog,woodsLevelChangePoints,woodsLevelEnemyFrequency,woodsLevelEnemyList';

fountainLevelEnemyFrequency = 0;
//enemyName;health;attack;item;ammo
fountainLevelEnemyList ='null;0;0;null;5:null;0;0;null;5:null;0;0;null;5'


woodsLevelDesign = '<div class="darkGrass" id="x1y1"></div><div class="darkGrass" id="x2y1"></div><div class="darkGrass" id="x3y1"></div><div class="lightGrass" id="x4y1"></div><div class="lightGrass" id="x5y1"></div><div class="darkGrass" id="x6y1"></div><div class="darkGrass" id="x7y1"></div><div class="darkGrass" id="x8y1"></div><div class="darkGrass" id="x9y1"></div><div class="darkGrass" id="x10y1"></div><br><div class="darkGrass" id="x1y2"></div><div class="darkGrass" id="x2y2"></div><div class="darkGrass" id="x3y2"></div><div class="lightGrass" id="x4y2"></div><div class="lightGrass" id="x5y2"></div><div class="darkGrass" id="x6y2"></div><div class="darkGrass" id="x7y2"></div><div class="lightGrass" id="x8y2"></div><div class="lightGrass" id="x9y2"></div><div class="darkGrass" id="x10y2"></div><br><div class="darkGrass" id="x1y3"></div><div class="lightGrass" id="x2y3"></div><div class="darkGrass" id="x3y3"></div><div class="lightGrass" id="x4y3"></div><div class="lightGrass" id="x5y3"></div><div class="darkGrass" id="x6y3"></div><div class="darkGrass" id="x7y3"></div><div class="lightGrass" id="x8y3"></div><div class="darkGrass" id="x9y3"></div><div class="darkGrass" id="x10y3"></div><br><div class="darkGrass" id="x1y4"></div><div class="lightGrass" id="x2y4"></div><div class="darkGrass" id="x3y4"></div><div class="lightGrass" id="x4y4"></div><div class="lightGrass" id="x5y4"></div><div class="lightGrass" id="x6y4"></div><div class="lightGrass" id="x7y4"></div><div class="lightGrass" id="x8y4"></div><div class="darkGrass" id="x9y4"></div><div class="darkGrass" id="x10y4"></div><br><div class="darkGrass" id="x1y5"></div><div class="lightGrass" id="x2y5"></div><div class="darkGrass" id="x3y5"></div><div class="lightGrass" id="x4y5"></div><div class="lightGrass" id="x5y5"></div><div class="lightGrass" id="x6y5"></div><div class="lightGrass" id="x7y5"></div><div class="lightGrass" id="x8y5"></div><div class="darkGrass" id="x9y5"></div><div class="darkGrass" id="x10y5"></div><br><div class="darkGrass" id="x1y6"></div><div class="lightGrass" id="x2y6"></div><div class="darkGrass" id="x3y6"></div><div class="darkGrass" id="x4y6"></div><div class="lightGrass" id="x5y6"></div><div class="lightGrass" id="x6y6"></div><div class="lightGrass" id="x7y6"></div><div class="lightGrass" id="x8y6"></div><div class="lightGrass" id="x9y6"></div><div class="darkGrass" id="x10y6"></div><br><div class="darkGrass" id="x1y7"></div><div class="lightGrass" id="x2y7"></div><div class="darkGrass" id="x3y7"></div><div class="darkGrass" id="x4y7"></div><div class="lightGrass" id="x5y7"></div><div class="lightGrass" id="x6y7"></div><div class="lightGrass" id="x7y7"></div><div class="lightGrass" id="x8y7"></div><div class="lightGrass" id="x9y7"></div><div class="darkGrass" id="x10y7"></div><br><div class="darkGrass" id="x1y8"></div><div class="lightGrass" id="x2y8"></div><div class="lightGrass" id="x3y8"></div><div class="lightGrass" id="x4y8"></div><div class="lightGrass" id="x5y8"></div><div class="darkGrass" id="x6y8"></div><div class="darkGrass" id="x7y8"></div><div class="darkGrass" id="x8y8"></div><div class="lightGrass" id="x9y8"></div><div class="darkGrass" id="x10y8"></div><br><div class="darkGrass" id="x1y9"></div><div class="lightGrass" id="x2y9"></div><div class="lightGrass" id="x3y9"></div><div class="lightGrass" id="x4y9"></div><div class="lightGrass" id="x5y9"></div><div class="darkGrass" id="x6y9"></div><div class="lightGrass" id="x7y9"></div><div class="lightGrass" id="x8y9"></div><div class="lightGrass" id="x9y9"></div><div class="darkGrass" id="x10y9"></div><br><div class="darkGrass" id="x1y10"></div><div class="darkGrass" id="x2y10"></div><div class="darkGrass" id="x3y10"></div><div class="darkGrass" id="x4y10"></div><div class="darkGrass" id="x5y10"></div><div class="darkGrass" id="x6y10"></div><div class="darkGrass" id="x7y10"></div><div class="darkGrass" id="x8y10"></div><div class="darkGrass" id="x9y10"></div><div class="darkGrass" id="x10y10"></div><br>'

woodsLevelNoAccessTiles = 'darkGrass:water';

woodsLevelStartPoint = '#x4y2';

woodsLevelNpcPlacement ='woman;x3y5;woman.png:cowboy;x9y4;cowboy.png';

woodsLevelDialog = 'woman;0/im a woman, so....;0/stop talking to me;0/I have to get back;0/to my kitchen:cowboy;0/yeehaw motherfucker;0/this is the good, the bad;0/and your face';

woodsLevelChangePoints = 'x4y1;fountainLevelEndPoint,fountainLevelDesign,fountainLevelNpcPlacement,fountainLevelNoAccessTiles,fountainLevelDialog,fountainLevelChangePoints,fountainLevelEnemyFrequency,fountainLevelEnemyList:x5y1;fountainLevelEndPoint,fountainLevelDesign,fountainLevelNpcPlacement,fountainLevelNoAccessTiles,fountainLevelDialog,fountainLevelChangePoints,fountainLevelEnemyFrequency,fountainLevelEnemyList';
woodsLevelChangePointsPostStick = 'x4y1;fountainLevelEndPoint,fountainLevelDesign,fountainLevelNpcPlacement,fountainLevelNoAccessTiles,fountainLevelDialogPostStick,fountainLevelChangePointsPostStick,fountainLevelEnemyFrequency,fountainLevelEnemyList:x5y1;fountainLevelEndPoint,fountainLevelDesign,fountainLevelNpcPlacement,fountainLevelNoAccessTiles,fountainLevelDialogPostStick,fountainLevelChangePointsPostStick,fountainLevelEnemyFrequency,fountainLevelEnemyList';


woodsLevelEnemyFrequency = 3;
//enemyName;health;attack;defense;accuracy;speed;agility;item;ammo
woodsLevelEnemyList ='tzuBat;100;30;30;30;30;30;0;5:tzuBat;100;30;30;30;30;30;0;5:yetAnotherTzuBat;100;30;30;30;30;30;0;5';
caravanLvlExample = '<div class="waterTile" id="x1y1"></div><div class="waterTile" id="x2y1"></div><div class="waterTile" id="x3y1"></div><div class="waterTile" id="x4y1"></div><div class="waterTile" id="x5y1"></div><div class="water2" id="x6y1"></div><div class="sandTile" id="x7y1"></div><div class="sandTile" id="x8y1"></div><div class="sandTile" id="x9y1"></div><div class="water2" id="x10y1"></div><div class="waterTile" id="x11y1"></div><div class="waterTile" id="x12y1"></div><div class="waterTile" id="x13y1"></div><div class="waterTile" id="x14y1"></div><div class="waterTile" id="x15y1"></div><br><br><div class="grassTile" id="x1y2"></div><div class="grassTile" id="x2y2"></div><div class="grassTile" id="x3y2"></div><div class="grassTile" id="x4y2"></div><div class="grassTile" id="x5y2"></div><div class="water2" id="x6y2"></div><div class="sandTile" id="x7y2"></div><div class="sandTile" id="x8y2"></div><div class="sandTile" id="x9y2"></div><div class="sandTile" id="x10y2"></div><div class="grassTile" id="x11y2"></div><div class="grassTile" id="x12y2"></div><div class="grassTile" id="x13y2"></div><div class="grassTile" id="x14y2"></div><div class="grassTile" id="x15y2"></div><br><br><div class="grassTile" id="x1y3"></div><div class="grassTile" id="x2y3"></div><div class="grassTile" id="x3y3"></div><div class="grassTile" id="x4y3"></div><div class="grassTile" id="x5y3"></div><div class="dirtTile" id="x6y3"></div><div class="sandTile" id="x7y3"></div><div class="sandTile" id="x8y3"></div><div class="wagon-0-0" id="x9y3"></div><div class="sandTile" id="x10y3"></div><div class="grassTile" id="x11y3"></div><div class="grassTile" id="x12y3"></div><div class="grassTile" id="x13y3"></div><div class="grassTile" id="x14y3"></div><div class="grassTile" id="x15y3"></div><br><br><div class="grassTile" id="x1y4"></div><div class="grassTile" id="x2y4"></div><div class="grassTile" id="x3y4"></div><div class="grassTile" id="x4y4"></div><div class="grassTile" id="x5y4"></div><div class="dirtTile" id="x6y4"></div><div class="sandTile" id="x7y4"></div><div class="sandTile" id="x8y4"></div><div class="wagon-1-0" id="x9y4"></div><div class="wagon-0-0" id="x10y4"></div><div class="grassTile" id="x11y4"></div><div class="grassTile" id="x12y4"></div><div class="grassTile" id="x13y4"></div><div class="grassTile" id="x14y4"></div><div class="grassTile" id="x15y4"></div><br><br><div class="grassTile" id="x1y5"></div><div class="grassTile" id="x2y5"></div><div class="grassTile" id="x3y5"></div><div class="grassTile" id="x4y5"></div><div class="grassTile" id="x5y5"></div><div class="dirtTile" id="x6y5"></div><div class="sandTile" id="x7y5"></div><div class="sandTile" id="x8y5"></div><div class="wagon-0-0" id="x9y5"></div><div class="wagon-1-0" id="x10y5"></div><div class="grassTile" id="x11y5"></div><div class="grassTile" id="x12y5"></div><div class="grassTile" id="x13y5"></div><div class="grassTile" id="x14y5"></div><div class="grassTile" id="x15y5"></div><br><br><div class="grassTile" id="x1y6"></div><div class="grassTile" id="x2y6"></div><div class="grassTile" id="x3y6"></div><div class="grassTile" id="x4y6"></div><div class="grassTile" id="x5y6"></div><div class="dirtTile" id="x6y6"></div><div class="sandTile" id="x7y6"></div><div class="sandTile" id="x8y6"></div><div class="wagon-1-0" id="x9y6"></div><div class="wagon-0-0" id="x10y6"></div><div class="grassTile" id="x11y6"></div><div class="grassTile" id="x12y6"></div><div class="grassTile" id="x13y6"></div><div class="grassTile" id="x14y6"></div><div class="grassTile" id="x15y6"></div><br><br><div class="grassTile" id="x1y7"></div><div class="grassTile" id="x2y7"></div><div class="grassTile" id="x3y7"></div><div class="grassTile" id="x4y7"></div><div class="grassTile" id="x5y7"></div><div class="dirtTile" id="x6y7"></div><div class="sandTile" id="x7y7"></div><div class="sandTile" id="x8y7"></div><div class="wagon-0-0" id="x9y7"></div><div class="wagon-1-0" id="x10y7"></div><div class="grassTile" id="x11y7"></div><div class="grassTile" id="x12y7"></div><div class="grassTile" id="x13y7"></div><div class="grassTile" id="x14y7"></div><div class="grassTile" id="x15y7"></div><br><br><div class="grassTile" id="x1y8"></div><div class="grassTile" id="x2y8"></div><div class="grassTile" id="x3y8"></div><div class="grassTile" id="x4y8"></div><div class="grassTile" id="x5y8"></div><div class="dirtTile" id="x6y8"></div><div class="sandTile" id="x7y8"></div><div class="sandTile" id="x8y8"></div><div class="wagon-1-0" id="x9y8"></div><div class="wagon-0-0" id="x10y8"></div><div class="grassTile" id="x11y8"></div><div class="grassTile" id="x12y8"></div><div class="grassTile" id="x13y8"></div><div class="grassTile" id="x14y8"></div><div class="grassTile" id="x15y8"></div><br><br><div class="grassTile" id="x1y9"></div><div class="grassTile" id="x2y9"></div><div class="grassTile" id="x3y9"></div><div class="grassTile" id="x4y9"></div><div class="grassTile" id="x5y9"></div><div class="dirtTile" id="x6y9"></div><div class="sandTile" id="x7y9"></div><div class="sandTile" id="x8y9"></div><div class="wagon-0-0" id="x9y9"></div><div class="wagon-1-0" id="x10y9"></div><div class="grassTile" id="x11y9"></div><div class="grassTile" id="x12y9"></div><div class="grassTile" id="x13y9"></div><div class="grassTile" id="x14y9"></div><div class="grassTile" id="x15y9"></div><br><br><div class="grassTile" id="x1y10"></div><div class="grassTile" id="x2y10"></div><div class="grassTile" id="x3y10"></div><div class="grassTile" id="x4y10"></div><div class="grassTile" id="x5y10"></div><div class="dirtTile" id="x6y10"></div><div class="sandTile" id="x7y10"></div><div class="sandTile" id="x8y10"></div><div class="wagon-1-0" id="x9y10"></div><div class="wagon-0-0" id="x10y10"></div><div class="grassTile" id="x11y10"></div><div class="grassTile" id="x12y10"></div><div class="grassTile" id="x13y10"></div><div class="grassTile" id="x14y10"></div><div class="grassTile" id="x15y10"></div><br><br><div class="grassTile" id="x1y11"></div><div class="grassTile" id="x2y11"></div><div class="grassTile" id="x3y11"></div><div class="grassTile" id="x4y11"></div><div class="grassTile" id="x5y11"></div><div class="dirtTile" id="x6y11"></div><div class="sandTile" id="x7y11"></div><div class="sandTile" id="x8y11"></div><div class="wagon-0-0" id="x9y11"></div><div class="wagon-1-0" id="x10y11"></div><div class="grassTile" id="x11y11"></div><div class="grassTile" id="x12y11"></div><div class="grassTile" id="x13y11"></div><div class="grassTile" id="x14y11"></div><div class="grassTile" id="x15y11"></div><br><br><div class="grassTile" id="x1y12"></div><div class="grassTile" id="x2y12"></div><div class="grassTile" id="x3y12"></div><div class="grassTile" id="x4y12"></div><div class="grassTile" id="x5y12"></div><div class="dirtTile" id="x6y12"></div><div class="sandTile" id="x7y12"></div><div class="sandTile" id="x8y12"></div><div class="wagon-1-0" id="x9y12"></div><div class="wagon-0-0" id="x10y12"></div><div class="grassTile" id="x11y12"></div><div class="grassTile" id="x12y12"></div><div class="grassTile" id="x13y12"></div><div class="grassTile" id="x14y12"></div><div class="grassTile" id="x15y12"></div><br><br><div class="grassTile" id="x1y13"></div><div class="grassTile" id="x2y13"></div><div class="grassTile" id="x3y13"></div><div class="grassTile" id="x4y13"></div><div class="grassTile" id="x5y13"></div><div class="dirtTile" id="x6y13"></div><div class="sandTile" id="x7y13"></div><div class="sandTile" id="x8y13"></div><div class="sandTile" id="x9y13"></div><div class="wagon-1-0" id="x10y13"></div><div class="grassTile" id="x11y13"></div><div class="grassTile" id="x12y13"></div><div class="grassTile" id="x13y13"></div><div class="grassTile" id="x14y13"></div><div class="grassTile" id="x15y13"></div><br><br><div class="grassTile" id="x1y14"></div><div class="grassTile" id="x2y14"></div><div class="grassTile" id="x3y14"></div><div class="grassTile" id="x4y14"></div><div class="grassTile" id="x5y14"></div><div class="water2" id="x6y14"></div><div class="sandTile" id="x7y14"></div><div class="sandTile" id="x8y14"></div><div class="sandTile" id="x9y14"></div><div class="sandTile" id="x10y14"></div><div class="grassTile" id="x11y14"></div><div class="grassTile" id="x12y14"></div><div class="grassTile" id="x13y14"></div><div class="grassTile" id="x14y14"></div><div class="grassTile" id="x15y14"></div><br><br><div class="waterTile" id="x1y15"></div><div class="waterTile" id="x2y15"></div><div class="waterTile" id="x3y15"></div><div class="waterTile" id="x4y15"></div><div class="waterTile" id="x5y15"></div><div class="water2" id="x6y15"></div><div class="sandTile" id="x7y15"></div><div class="sandTile" id="x8y15"></div><div class="sandTile" id="x9y15"></div><div class="water2" id="x10y15"></div><div class="waterTile" id="x11y15"></div><div class="waterTile" id="x12y15"></div><div class="waterTile" id="x13y15"></div><div class="waterTile" id="x14y15"></div><div class="waterTile" id="x15y15"></div><br><br>'

