/*!
 * jQuery Rpg Engine
 * 
 * version: 1.0.0 (17-march-2013)
 *
 * Author: Justin Gooch, wet-monkey games 
 * 
 *   licensed under the GPL 1.0+ license:
 *   http://www.gnu.org/licenses/gpl.html 
 *   all artwork property of wet-monkey 
 */	
	
	
	//loop to use movement, initialized due to need to be initialized
	//keypress that calls functions for movement
	$(this).keypress(function(event)
	{
		if(event.which === 119)
		{
			moveUpFunction();
			nonAccessable == false;
		}
		if(event.which === 97)
		{	
			moveLeftFunction();
			nonAccessable == false;
		}
		if(event.which === 115)
		{
			moveDownFunction();
			nonAccessable == false;
		}
		if(event.which === 100)
		{
			moveRightFunction();
			nonAccessable == false;
		}	
		if(event.which === 13)
		{
			enterButtonFunction();	
		}
		if(event.which === 109)
		{
			menuFunction();			
		}
		});
		 
/*
 * this section is what does the movement,  move down / up / right / left determine
 * if its possible to move to that tile, 
 * noAccessTest tests whether movement to those tiles is allowed...
 */		
	//move down function
	function moveDownFunction()
	{
		newLocationY = y +1;
		noAccessTest(newLocationY, x);
		if(inDialog==false)
		{
		if(nonAccessable == false)
		{			
			locationDiv = newLocation;
			y++;
			newLocation = '#x'+x+'y'+y;
			$(locationDiv).children().appendTo(newLocation);
		}
	}
	if(nonAccessable==true)
	{
	}		
	}
	
	//moveRightFunction
	function moveRightFunction()
	{
		newLocationX = x +1;
		noAccessTest(y, newLocationX);
		if(inDialog==false)
		{
		if(nonAccessable == false)
		{	
			
				locationDiv = newLocation;
				x++;
				newLocation = '#x'+x+'y'+y;
				$(locationDiv).children().appendTo(newLocation);
			
		}
	}
		if(nonAccessable==true)
		{
		}		
	}
	
	//moveLeftFunction
	function moveLeftFunction()
	{
		newLocationX = x -1;
		noAccessTest(y, newLocationX);
		if(inDialog==false)
		{
		if(nonAccessable == false)
		{	
			
				locationDiv = newLocation;
				x--;
				newLocation = '#x'+x+'y'+y;
				$(locationDiv).children().appendTo(newLocation);
			
		}
	}
		if(nonAccessable==true)
		{
		}		
	}
	
	//move up function
	function moveUpFunction()
	{
	newLocationY = y -1;
	noAccessTest(newLocationY, x);
	if(inDialog==false)
	{
	if(nonAccessable == false)
	{	
		
			locationDiv = newLocation;
			y--;
			newLocation = '#x'+x+'y'+y;
			$(locationDiv).children().appendTo(newLocation);
			isBattleThisMove();
		
	}
}
	if(nonAccessable==true)
	{
	}	
}
	//function to test if the tile is accessable... tests against no access tiles.
	//child function of move up/down/left/right functions...
	function noAccessTest(y, x)
	{
		//get location to test...
		var testLocation = '#x'+x+'y'+y;
		testLocationClass = $(testLocation).attr('class');
	
		i = 0;
		j = 0;
		//tests whether currently in battle or not
		if(inBattle == true)
		{
			i=9001;
			j=9001;
			isNpcTileIterator = 9001;
			nonAccessable = true;
		}
		//tests whether the tile is meant to change levels or not..
		while(j < levelChangePointTilesArrayLength)
		{
			if( '#' + levelChangePointTilesArray[j] == testLocation)
			{				
				//puts all variables into array which then sets the level change to that array
				//and sends em through as window events :D
				levelChangeVariablesArray = levelChangePointVariablesArray[j].split(',');
				levelStartPoint = levelChangeVariablesArray[0];
				levelDesign = levelChangeVariablesArray[1];
				levelNpcPlacement = levelChangeVariablesArray[2];
				levelNoAccessTiles = levelChangeVariablesArray[3];
				levelDialog = levelChangeVariablesArray[4];
				levelChangePoints = levelChangeVariablesArray[5];
				levelEnemyFrequency = levelChangeVariablesArray[6];
				levelEnemyList = levelChangeVariablesArray[7];
				//call level changing function and pass global variables.. 
				changeLevel(window[levelStartPoint], window[levelDesign], window[levelNpcPlacement], window[levelNoAccessTiles], window[levelDialog], window[levelChangePoints],window[levelEnemyFrequency], window[levelEnemyList]);
				
				i=9001;
				j=9001;
				isNpcTileIterator = 9001;
				nonAccessable = true;
			}
			j++;
		}
		
		//tests whether there is a npc on the desired tile.. 
		isNpcTileIterator = 0
		while(isNpcTileIterator <= npcLocationListArrayLength)
		{
			if(testLocation === npcLocationListArray[isNpcTileIterator])
			{
				nonAccessable = true;
				//if the test location has a charactor on it, it makes it skip the tile test loop
				i = 9001;
				//exits out of this while loop..
				isNpcTileIterator = isNpcTileIterator + 9001
			}		
			isNpcTileIterator++;		
		}
		//tests whether there is a non accessable tile present
		while(i < numberOfExplodedNoAccessTileItems)
		{
			if(testLocationClass === explodedNoAccessTiles[i])
			{
				nonAccessable = true;				
				i=numberOfExplodedNoAccessTileItems;	
			}				
			i++;
			if(i == numberOfExplodedNoAccessTileItems)
			{				
				nonAccessable = false;
			}				
		}			
	}
	
/*
 * initiates the enter button function which calls npc dialog if npc is around. * 
 */ 	
function enterButtonFunction()
{
		
		if(inBattleDialog ==false)
		{
	//test to see if there are npc's around charactor by putting
	//areas around charactor into an array to test..
		//initialize possibleNpcAreas
		possibleNpcAreas = [];
		
		//set x y coordinates for possible areas above and below charactor... 
		xRight = x+1;
		xLeft = x-1;
		yUp = y-1;
		yDown = y+1;
		//area to the right of charactor
		possibleNpcAreas[0]= "#x"+ xRight +"y"+ y +"";
		//area to the left of charactor
		possibleNpcAreas[1]= "#x"+ xLeft +"y"+ y +"";
		//area above charactor
		possibleNpcAreas[2]= "#x"+ x +"y"+ yUp +"";
		//area below charactor
		possibleNpcAreas[3]= "#x"+ x +"y"+ yDown +"";
		
		//initialize counter to determine if npc is in defined areas around charactor
		npcAreasIncrementer = 0;
		if(inDialog==true)
		{
			$('#battleMenu').empty();
			dialog();
			npcAreasIncrementer = 9000;
		}
		if(inDialog==false)
		{
			//iterate through possibleNpcAreas to test if there is a npc in those areas. 
			while(npcAreasIncrementer < 4)
			{
				//initializes npclocationNear charactor incrementer...
				npcLocationNearCharactorIncrementer = 0;
				//increments npcLocationNearCharactorIncrementer against npc location array 
				//length to go through all array items to see if they match against the list of
				//array object..
				while(npcLocationNearCharactorIncrementer <= npcLocationListArrayLength)
				{
					//if there is a match on the npcLocationArrayLength against the possibleNpc
					//Areas array...
					if(npcLocationListArray[npcLocationNearCharactorIncrementer] === possibleNpcAreas[npcAreasIncrementer])
					{
						//if there is an npc around charactor during this function call
						//do this... (aka call desired functions etc... )
						npc=npcNameListArray[npcLocationNearCharactorIncrementer];
						//upon pressing enter call the damn dialog against said npc...
						$('#battleMenu').empty();
						initiateNpcDialog(npc);
					
						//exit out of loops... 
						npcAreasIncrementer = 9001;
						npcLocationNearCharactorIncrementer = 9001;
					}
					npcLocationNearCharactorIncrementer++;
				
				}
				npcAreasIncrementer++;						
			}
		}	
		
	}
	else
	{
		enterButtonDialogDisplayFunction();
	}
		
}
	
	//create dialog function
	//child function of enterButtonFunction that calls the dialog of the npc
	//parent function of dialog button which this function sets to 
	// continue dialog with npc
	function initiateNpcDialog(npc)
	{
		//find numeric representation of npc. 
		npcNameFindingIncrementer = 0;
		while(npcNameFindingIncrementer < charactorPlusDialogLength)
		{
			if(npcDialogCharactors[npcNameFindingIncrementer] == npc)
			{
				npcArrayLocation = npcNameFindingIncrementer;	
				//call function to start and continue said dialog...
				dialogStart = npcDialogStartLocation[npcArrayLocation];
				dialogStop = npcDialogStopLocation[npcArrayLocation];
				dialogStop++
				dialogStartIncrementer = dialogStart; 
				//empty and show the battle menu.
				$('#battleMenu').empty();
				$('#battleMenu').show();
				//sets the state of being in dialog to true.
				inDialog=true;
				
				dialog();
				npcNameFindingIncrementer = npcNameFindingIncrementer+9000;
			}
			npcNameFindingIncrementer++;
		}		
	}

	function dialog()
	{
		if(dialogStartIncrementer >= dialogStop)
		{
			inDialog=false;						
			$('#battleMenu').hide();
			
		}	
		
		if(dialogStartIncrementer < dialogStop)
		{
			npcDialogCharactorAssignmentArray = npcDialog[dialogStartIncrementer].split('/');
			//if is npc...
			if(npcDialogCharactorAssignmentArray[0] == 0)
			{
				
				currentDialogCharactor = npc;
				currentDialog = currentDialogCharactor.toUpperCase() + ': ' + npcDialogCharactorAssignmentArray[1];				
				$('#battleMenu').append(currentDialog);
				dialogStartIncrementer++;
			}
			//if is charactor
			if(npcDialogCharactorAssignmentArray[0] == 1)
			{
				//change to charactor name later on...
				currentDialogCharactor = 'you';
				currentDialog = currentDialogCharactor.toUpperCase() + ': ' + npcDialogCharactorAssignmentArray[1];				
				$('#battleMenu').append(currentDialog);
				dialogStartIncrementer++;
			}
			//if is weapon
			if(npcDialogCharactorAssignmentArray[0] == 2)
			{
				npcWeapon = npcDialogCharactorAssignmentArray[1];
				npcWeapon = parseInt(npcWeapon);
				weaponCount = parseInt(weaponCountArray[npcWeapon]);
				weaponCountArray[npcWeapon] = weaponCount + 1;				
				dialogStartIncrementer++;
				weapon = npcWeapon;
				//recursively call dialog function so it doesn't appear 
				//broken when adding weapon, changing stuff etc
				dialog(npcArrayLocation);
			}
			//if changing level change points
			if(npcDialogCharactorAssignmentArray[0] == 3)
			{
				levelChangePoints = npcDialogCharactorAssignmentArray[1];
				initiatLevelChangePoints(window[levelChangePoints]);				
				dialogStartIncrementer++;
				//recursively call dialog function so it doesn't appear 
				//broken when adding weapon, changing stuff etc
				dialog(npcArrayLocation);
			}
			//if changing other dialog
			if(npcDialogCharactorAssignmentArray[0] == 4)
			{
				newDialog = npcDialogCharactorAssignmentArray[1];
				initiateDialog(window[newDialog]);	
				dialogStartIncrementer++;
				//assuming dialog change signals the end of the dialog....
				inDialog = false;
				$('#battleMenu').hide();
				
			}		
		}	
			
				
			
	}
/*
 * menu function that shows all menu options such as charactor, menu etc. 
 */
	function menuFunction()
	{ 
		if(menuShow==0)
		{
			$('#menu').show();
			menuShow=1;
		}
		else
		{
			$('#menu').hide();
			$('#subMenu').hide();			
			$('#attributesMenu').hide();
			menuShow=0;
		}
	}
	
/*
 * child functions of menu functions that are called upon clicking the items
 */
	//place backpack functions here
	$(document).on('mouseenter', '#backpackWeapons', function(){		
		$('#attributesMenu').hide();
		$('#subMenu').hide();
		$('#subMenu').empty();		
		
		i=0
		while(i < weaponsListArray.length)
		{
			numberOfWeapons = parseInt(weaponCountArray[i]);
			if(numberOfWeapons > 0)
			{
				$('#subMenu').append("<div class='weapon" + i + "'>" + weaponNameArray[i] + ': ' + numberOfWeapons + '</div><br/>');
			}
			i++;
		}			
		$('#subMenu').show();		
	});
	
	$(document).on('mouseenter', '#backpackItems', function(){
		$('#attributesMenu').hide();
		$('#subMenu').hide();		
		//give list of available items 
		$('#subMenu').empty();
		i=0;
		while(i<itemListArray.length)
		{
			//turn item number into integer
			numberOfItems = parseInt(itemCountArray[i]);
			if(numberOfItems > 0)
			{	
				$('#subMenu').append('<div class="item' + i + '">' + itemNameArray[i] + ': ' + numberOfItems + '</div><br/>');				
			}
			i++;
		}
		$('#subMenu').show();
		
	});
	
	//backpack armor show...
	$(document).on('mouseenter', '#backpackArmor', function(){
		$('#attributesMenu').hide();
		$('#subMenu').hide();		
		$('#subMenu').empty();
		i=0;
		while(i<armorListArray.length)
		{
			numberOfArmor = parseInt(armorCountArray[i]);
			if(numberOfArmor > 0)
			{
				$('#subMenu').append('<div class="armor' + i + '">' + armorNameArray[i] + ': ' + numberOfArmor + '</div><br/>');
			}
			i++;
		}
		$('#subMenu').show();
		
	});
	//show dialog for weapon attributes menu (equip, stats etc)
	//in the attributesMenu... 
	function showWeaponAttributes(weaponName)
	{
		$('#attributesMenu').hide();
		$('#attributesMenu').empty();
		$('#attributesMenu').show();
		if(weapon==weaponName)
		{
			//if unequipped, you now have your fists as a weapon... good luck son, but what happens if you unequip your fists? do you want to know?
			newWeapon = 3;
			$('#attributesMenu').append('<div id="unequip">unequip?</div>');
		}
		if(weapon != weaponName)		
		{
			newWeapon = weaponName;
			$('#attributesMenu').append('<div id="equip">equip?</div>');
		}		
	}
	
	//equips and unequips weapon
	$(document).on('click', '#equip', function(){
		weapon = newWeapon; 
		alert(newWeapon + " has been equipped");
		$('#attributesMenu').hide();
	});
	$(document).on('click', '#unequip', function(){		
		alert('you have unequipped the '+ weapon);
		weapon = newWeapon;
		$('#attributesMenu').hide();
	});
		
	
	//place stats functions here
	$(document).on('mouseenter', '#stats', function(){		
		$('#attributesMenu').hide();
		$('#subMenu').hide();
		$('#subMenu').empty();
		$('#subMenu').append('health: ' + health + '<br/>' + 'Bullets: ' + bullets + '<br/>' + 'Weapon: ' + weapon);
		$('#subMenu').show();
	});
	
	//hides the sub menus on click of the menu area...
	$(document).on('click', '#menu', function(){
		$('#attributesMenu').hide();
		$('#attributesMenu').empty();	
		$('#subMenu').empty();
		$('#subMenu').hide();
	});

/*
 * level changing functions, the changeLevelFunction initiates all of them
 * at the same time, the individual functions beneath it initiate all of the
 * individual parts of the level and are used modularly by other parts of the 
 * engine...
 */
	
	
	//function to change the current level.
	function changeLevel(levelStartPoint, levelDesign, levelNpcPlacement, levelNoAccessTiles, levelDialog, levelChangePoints, levelEnemyFrequency, levelEnemyList)
	{
		//empties the grid...
		$('#theGrid').empty();
		//adds current level to the grid
		$('#theGrid').append(levelDesign);
		
		//calls starting location function with startPoint...
		startLocationFunction(levelStartPoint);
		
		//calls non accessable tile function
		nonAccessableTilesFunction(levelNoAccessTiles);	
		
		//calls function that throws npc's into an array. 
		npcPlacementFunction(levelNpcPlacement);	
		
		//calls dialog initializtion function
		initiateDialog(levelDialog);	
		
		//calls function to initiate level change Point
		initiatLevelChangePoints(levelChangePoints);
		
		//sets enemy frequency...
		enemyFrequency = levelEnemyFrequency;
		
		//calls function to initiate list of enemies in area
		initiateLevelEnemyList(levelEnemyList);
	}
	
	//sets starting location for charactor
	function startLocationFunction(startPoint)
	{
		//gets the x and y coordinates from the start point... 
		xAndYCoordinates = startPoint.split('y');
		y = xAndYCoordinates[1];
		x = xAndYCoordinates[0].split('x');
		x = x[1];
		//initialise to integer as x and y are strings...
		x = parseInt(x);
		y = parseInt(y);
		
		//set starting location x y coordinates. 
		startingLocation = '#x'+ x +'y'+ y;
		$(startingLocation).append('<img src="sprites/completedSprites/deputy.png">');
		locationDiv = startingLocation;
		newLocation = startingLocation;		
	}
	
	//puts non accessable tiles into array named explodedNoAccessTiles
	function nonAccessableTilesFunction(noAccessTiles)
	{
		//initializes non accessable as false (so the tiles are accessable at first... then its tested ya know?)...
		nonAccessable = false;
		
		//splits the tiles by the : from the noAccessTiles which is passed..
		explodedNoAccessTiles = noAccessTiles.split(':');
		//gets number of non access tiles.
		numberOfExplodedNoAccessTileItems = explodedNoAccessTiles.length;
		//removes 1 from the number of no access tiles to prepare it for an array.. 
		numberOfExplodedNoAccessTileItems--;			
	}
	
	function npcPlacementFunction(levelNpcPlacement)
	{
		//gets the initial level of the string which includes charactor name and location.
		levelNpcPlacementArray = levelNpcPlacement.split(':');
		//gets length of array
		levelNpcPlacementArrayLength = levelNpcPlacementArray.length;
		levelNpcPlacementArrayLength--;
		
		//initialize npcLocationList and NpcNameList
		npcLocationList ='';
		npcNameList ='';
		
		i=0;
		while(i<= levelNpcPlacementArrayLength)
		{
			levelNpcCharactorLocationArray = levelNpcPlacementArray[i].split(';');
			
			//gets charactor location and appends charactor and image of charactor to that div. 
			npcName = levelNpcCharactorLocationArray[0];
			npcLocation = levelNpcCharactorLocationArray[1];
			npcImage = levelNpcCharactorLocationArray[2];
			//appends to location
			$('#'+ npcLocation +'').append('<div id="'+ npcName +'"><img src="http://wet-monkey.com/rpgGame/sprites/completedSprites/'+ npcImage +'"></div>');
			//adds npc location to npcLocationList
			npcLocationList = npcLocationList + ':';
			npcLocationList = npcLocationList + '#';	
			npcLocationList = npcLocationList + npcLocation;
			npcNameList = npcNameList + ':';
			npcNameList = npcNameList + npcName;				
			i++;			
		}	
		//removes initial colon as its unneeded...	
		npcLocationList = npcLocationList.substr(1);
		npcNameList = npcNameList.substr(1);
		
		//puts location list into array...
		npcLocationListArray = npcLocationList.split(':');
		npcNameListArray = npcNameList.split(':');
		
		
		//gets length of array
		npcLocationListArrayLength = npcLocationListArray.length;
		npcNameListArrayLength = npcNameListArray.length;
		npcLocationListArrayLength--;
		npcNameListArrayLength--;
		
		
	}

	//create change dialog function.... 
	function initiateDialog(levelDialog)
	{
		//uses split function on the level dialog to separate each npc+dialog from other npc+dialog
		charactorPlusDialog = levelDialog.split(':');
		charactorPlusDialogLength = charactorPlusDialog.length;
		dialogIncrementer=0;
		dialogStartLocation = 0;
		//initiate arrays for storage of individual parts of the array... 
		npcDialogCharactors = new Array();
		npcDialogStartLocation = new Array();
		npcDialogStopLocation = new Array();
		npcDialog = new Array();
		//empties arrays
		npcDialogCharactors.length=0;
		npcDialogStartLocation.length=0;
		npcDialogStopLocation.length=0;
		npcDialog.length=0;
		
		while(dialogIncrementer < charactorPlusDialogLength)
		{
			charactorDialogArray = charactorPlusDialog[dialogIncrementer].split(';');
			charactorDialogArrayLength = charactorDialogArray.length;
			charactorDialogArrayLength--;
			charactorDialogIncrementer=0;
			while(charactorDialogIncrementer <= charactorDialogArrayLength)
			{
				if(charactorDialogIncrementer == 0)
				{
					npcDialogCharactors.push(charactorDialogArray[charactorDialogIncrementer]);
					npcDialogStartLocation.push(dialogStartLocation);
					dialogStartLocation--;
					dialogStartLocation = dialogStartLocation+charactorDialogArrayLength;
					npcDialogStopLocation.push(dialogStartLocation);
					dialogStartLocation++;
					
				}
				if(charactorDialogIncrementer != 0)
				{
					npcDialog.push(charactorDialogArray[charactorDialogIncrementer]);
										
				}
				charactorDialogIncrementer++;
								
			}
			dialogIncrementer++;		
		}		
	}
	
	//function that initiates level change points on the grid. 
	function initiatLevelChangePoints(levelChangePoints)
	{	
		levelChangePointsArray = levelChangePoints.split(':');		
		levelChangePointsArrayLength = levelChangePointsArray.length;
		levelChangePointsIncrementer = 0;
		//declare level changePoints array.. 
		levelChangePointTilesArray = new Array();
		levelChangePointVariablesArray = new Array();
		
		while(levelChangePointsIncrementer < levelChangePointsArrayLength)
		{
			levelChangeTilesAndVariablesArray = levelChangePointsArray[levelChangePointsIncrementer].split(';');
			levelChangePointTilesArray.push(levelChangeTilesAndVariablesArray[0]);
			levelChangePointVariablesArray.push(levelChangeTilesAndVariablesArray[1]);			
			levelChangePointsIncrementer++;
		}
		levelChangePointTilesArrayLength = levelChangePointTilesArray.length;			
	}
	
	
	//function for different enemies. 
	function initiateLevelEnemyList(levelEnemyList)
	{
		//enemyName;health;attack;item;ammo
		enemyArray = levelEnemyList.split(':');
		enemyArrayLength = enemyArray.length;
		i=0;
		//initiate arrays based on current enemy list for level
		enemyNameArray = new Array();
		enemyHealthArray = new Array();
		enemyAttackArray = new Array();
		enemyDefenseArray = new Array();
		enemyAccuracyArray = new Array();
		enemySpeedArray = new Array();
		enemyAgilityArray = new Array();
		enemyItemArray = new Array();
		enemyAmmoArray = new Array();
		
		while(i<enemyArrayLength)
		{			
			enemyStatsArray = enemyArray[i].split(';');
			//add to enemy stats via arrays to allow for paralel arrays
			enemyNameArray.push(enemyStatsArray[0]);
			enemyHealthArray.push(enemyStatsArray[1]);
			enemyAttackArray.push(enemyStatsArray[2]);
			enemyDefenseArray.push(enemyStatsArray[3]);
			enemyAccuracyArray.push(enemyStatsArray[4]);
			enemySpeedArray.push(enemyStatsArray[5]);
			enemyAgilityArray.push(enemyStatsArray[6]);
			enemyItemArray.push(enemyStatsArray[7]);
			enemyAmmoArray.push(enemyStatsArray[8]);
			i++;
		}
	}
	
	//checks to see if this move results in a battle...
	function isBattleThisMove()
	{
		if(enemyFrequency!=0)
		{
			randomNumber = Math.floor((Math.random()*enemyFrequency)+1);
			if(randomNumber == enemyFrequency)
			{
				randomEnemy = Math.floor((Math.random()*enemyArrayLength));
				currentEnemy = enemyArray[randomEnemy];
			
				
				initiateBattle(randomEnemy);
			}
		}
	}

	//function that initiates battle...
	function initiateBattle(randomEnemy)
	{
		
		$('#theGrid').hide();
		$('#battleScreen').show();
		$('#battleMenu').show();
		$('#battleMenu').append('<br><div id="attackMenu">Attack</div><div id="itemMenu">Items</div><br/><br/><div id="run">Run</div><div id="showStats">Stats</div>');
		inBattle = true;
		//add battle functions here,,,
		enemyName = enemyNameArray[randomEnemy];
		enemyHealth = enemyHealthArray[randomEnemy];
		enemyAttack = enemyAttackArray[randomEnemy];
		enemyDefense = enemyDefenseArray[randomEnemy];
		enemyAccuracy = enemyAccuracyArray[randomEnemy];
		enemySpeed = enemySpeedArray[randomEnemy];
		enemyAgility = enemyAgilityArray[randomEnemy];
		enemyItem = enemyItemArray[randomEnemy];
		enemyAmmo = enemyAmmoArray[randomEnemy];
		//convert numeric input to integers
		enemyHealth = parseInt(enemyHealth);
		enemyAttack = parseInt(enemyAttack);
		enemyDefense = parseInt(enemyDefense);
		enemyAccuracy = parseInt(enemyAccuracy);
		enemySpeed = parseInt(enemySpeed);
		enemyAgility = parseInt(enemyAgility);
		enemyAmmo = parseInt(enemyAmmo);
		
	}
	//function that is called when player clicks on the attack div
	$(document).on('click', '#attackMenu', function(){
		
		//empty battleMenu and append new attack menu items. 
		$('#battleMenu').empty();
		$('#battleMenu').append('<br><div id="melee">Melee</div><div id="shootEnemy">Shoot</div><br/><br/><div id="run">Run</div><div id="exitSubBattleMenu">Exit Menu</div>');
				
	});
	
	//attack menu options including melee and shooting enemy...
	
	//random js to attempt hack....
	$(document).on('click', '#melee', function(){
		if(weaponTypeArray[weapon] != 'melee')
		{
			$('#battleMenu').empty();
			$('#battleMenu').append('you do not have a melee weapon equipped <br><br><div id="next">Next</div>');
			inBattleDialog = true;
			battleDialogArrayLocation = 45;
		}
		if(weaponTypeArray[weapon] == 'melee')
		{

			//empty battleDialogString to display relevent information only
			battleDialogString = '';	
			
			
			//put attack stuff here... 
			weaponAttackInt = parseInt(weaponAttackArray[weapon]);
			withWeaponAttack = weaponAttackInt + attack;
			//get defense after armor
			armorDefenseInt = parseInt(armorDefenseArray[armor]);
			withArmorDefense = armorDefenseInt + defense;
			//chance of hit calculator
			chanceOfHit = accuracy + (speed - enemyAgility);
			//generates random number between 1 and 100, if its less than the chance of hit,
			//the hit is successful
			randomHitNumber = Math.floor((Math.random()*100)+1);
			if(randomHitNumber <= chanceOfHit)
			{
				//players attack against enemy
				attackMultiplier = Math.floor((Math.random()*2)+1);
				currentAttack = withWeaponAttack * attackMultiplier;
				damage = currentAttack - enemyDefense;
				//if the defense is better than your attack...
				if(damage < 0)
				{ //no damage will be done... 
					damage = 0;
					battleDialogString = battleDialogString + ' you have dealt 0 damage to the enemy ';
				}
				else
				{					
					enemyHealth = enemyHealth - damage;
					battleDialogString = battleDialogString + 'you have dealt ' + damage + ' damage to the enemy ' + ' Leaving their health at ' + enemyHealth + ' health points';				
				}
				
				//if you killed the enemy....
				if(enemyHealth <=0)
				{
					enemySlainFunction();									
				}
				else
				{
					enemyAttackFunction();				
				}
			}
			else
			{				
				battleDialogString = battleDialogString + " your Hit Missed";				
				enemyAttackFunction();
			}		
		}
	});

	function enemyAttackFunction()
	{
		//append colon to battleDialogString so it can be split into two parts
		battleDialogString = battleDialogString + ':';
		/*
		 * enemy reply goes here, its basically same as above but with a focus
		 * on the enemies attack reply as opposed to the users attack reply
		 */
		chanceOfHit = enemyAccuracy + (enemySpeed - agility);
		//generates random number between 1 and 100, if its less than the chance of hit,
		//the hit is successful
		randomHitNumber = Math.floor((Math.random()*100)+1);
		
		if(randomHitNumber <= chanceOfHit)
		{
			//enemies attack against player. 
			attackMultiplier = Math.floor((Math.random()*2)+1);
			currentEnemyAttack = enemyAttack * attackMultiplier;
			damage = currentEnemyAttack - withArmorDefense;
			//if the defense is better than your attack...
			if(damage < 0)
			{ //no damage will be done... 
				damage = 0;
				battleDialogString = battleDialogString + " the enemy has inflicted 0 damage";
			}
			else
			{
				health = health - damage; 
				battleDialogString = battleDialogString + ' The enemy has dealt ' + damage + ' damage ' + 'Leaving your health at ' + health + ' health points!';	
			}	
			displayBattleDialogStringFunction(battleDialogString)			
		}
		else
		{
			battleDialogString = battleDialogString + " The Enemy Hit Missed ";
			displayBattleDialogStringFunction(battleDialogString)
		}
	}
	
		 
	function displayBattleDialogStringFunction(battleDialogString)
	{
		battleDialogArray = battleDialogString.split(':');
		battleDialogArrayLocation = 0;
		enterButtonDialogDisplayFunction();
		inBattleDialog = true;
				
	}
	
	function enterButtonDialogDisplayFunction()
	{
		if(battleDialogArrayLocation <2)
		{
			$('#battleMenu').empty();
			$('#battleMenu').append(battleDialogArray[battleDialogArrayLocation] + '<br><br><div id="next">Next</div>');
			battleDialogArrayLocation++;
		}
		else
		{
			if(battleDialogArrayLocation < 50)
			{
				$('#battleMenu').empty();
				$('#battleMenu').append('<br><div id="melee">Melee</div><div id="shootEnemy">Shoot</div><br/><br/><div id="run">Run</div><div id="exitSubBattleMenu">Exit Menu</div>');
				inBattleDialog=false;
			}
			//hack that exits passed dialog upon pressing enter...
			else
			{
				$('#battleMenu').empty();
				$('#battleMenu').hide();				
				$('#battleScreen').hide();
				inBattleDialog=false;
				inBattle=false;
			}
			
		}
	}
	//shoot attack option
	$(document).on('click', '#shootEnemy', function(){
		if(weaponTypeArray[weapon] != 'gun')
		{
			$('#battleMenu').empty();
			$('#battleMenu').append('you do not have a Gun equipped <br><br><div id="next">Next</div>');
			inBattleDialog = true;
			battleDialogArrayLocation = 45;
		}
	});
	
	//function that is called when player clicks on the item div
	$(document).on('click', '#itemMenu', function(){
		//give list of available items 
		$('#subMenu').empty();
		i=0;
		while(i<itemListArray.length)
		{
			//turn item number into integer
			numberOfItems = parseInt(itemCountArray[i]);
			if(numberOfItems > 0)
			{	
				$('#subMenu').append('<div class="item' + i + '">' + itemNameArray[i] + ': ' + numberOfItems + '</div><br/>');					
			}
			i++;
		}		
		$('#subMenu').show();
		
	});
	//function that is called when player clicks the run div (exits battle)
	$(document).on('click', '#run', function(){
		$('#theGrid').show();
		$('#battleScreen').hide();
		$('#battleMenu').empty();
		$('#battleMenu').hide();
		inBattle = false;		
	});
	//function that is called when player clicks on the show stats div
	$(document).on('click', '#showStats', function(){
		$('#battleMenu').empty();
		$('#battleMenu').append('<div id="health">Health: ' + health +'</div><div id="bullets">Bullets: ' + bullets + '</div><br/><br/><div id="exitSubBattleMenu">Exit</div>');
	});
	//function that is called when player clicks on the exit sub battles div (reverts back to original menu)
	$(document).on('click', '#exitSubBattleMenu', function(){
		
		$('#battleMenu').empty();
		$('#battleMenu').append('<div id="attackMenu">Attack</div><div id="itemMenu">Items</div><br/><br/><div id="run">Run</div><div id="showStats">Stats</div>');
	});

	/*
	 *Here lies the function that adds experience to the user.
	 */
	 
	 function experienceFunction(givenXp)
	 {
		 xp = xp + givenXp;		 
		 levelTest = playerLvl + 1;
		 nextLevelRequirements = parseInt(xpRequiredArray[levelTest]);
		 if(xp >= nextLevelRequirements)
		 {
			 //increment stats to next level stats....
			 playerLvl = levelTest;
			 attack = attack + parseInt(attackIncrementArray[playerLvl]);
		     defense = defense + parseInt(defenseIncrementArray[playerLvl]);
			 accuracy = accuracy + parseInt(accuracyIncrementArray[playerLvl]);
			 speed = speed + parseInt(speedIncrementArray[playerLvl]);
             agility = agility + parseInt(agilityIncrementArray[playerLvl]);
             maxHealth = maxHealth + parseInt(healthIncrementArray[playerLvl]);
             bullets = bullets + parseInt(bulletBonusArray[playerLvl]);
             alert('you have gone to level');
             alert(playerLvl);
			 
		 }
		 
	 }
	 
	 //potion function
	 function potionFunction(potionHealth)
	 {
		 //test if potion gives more than max health
		 testHealth = potionHealth + health
		 if(health >= maxHealth)
		 {
			 alert('you don"t need this potion, your health is maxxed out');
			 itemCountArrayInt = parseInt(itemCountArray[itemNumber]);
		     itemCountArray[itemNumber] = itemCountArrayInt + 1;
		     health = maxHealth;
		     testHealth = 0
		 }
		 if(testHealth > maxHealth)
		 {
			 health = maxHealth;
		 }
		 if(testHealth <= maxHealth)
		 {
			 health = health + testHealth;
		 }
	 }
		 

	function enemySlainFunction()
	{
		$('#theGrid').show();
					$('#battleScreen').hide();
					$('#battleMenu').empty();
					bullets = bullets+enemyAmmo;
					$('#battleMenu').append('you have slain the enemy, you now have ' + bullets + ' bullets' + '<br><br><div id="next">Next</div>');
					inBattleDialog = true;
					battleDialogArrayLocation = 100;			

					//send bullet count to experience...
					experienceFunction(enemyAmmo);
					//add item from slain enemy. 
					if(enemyItem != 'null')
					{
						enemyItem=parseInt(enemyItem);
						numberOfCurrentItem = parseInt(itemCountArray[enemyItem]);
						itemCountArray[enemyItem] = numberOfCurrentItem + 1;
					}
	}
	//allows player to click on dialog to go to next part of dialog..
	$(document).on('click', '#next', function(){
		if(inBattleDialog == true)
		{
			enterButtonDialogDisplayFunction();
		}
	});
		
