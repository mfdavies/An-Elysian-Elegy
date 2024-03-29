//-----------------------------------------------------------------------------
//  Galv's Puzzle Functions
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_PuzzleFunctions.js
//-----------------------------------------------------------------------------
//  2016-09-28 - Version 1.1 - fixed bug with using 0 for player
//  2016-08-15 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_PuzzleFunctions = true;

var Galv = Galv || {};          // Galv's main object
Galv.PUZ = Galv.PUZ || {};      // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.1) A bunch of functions to use to make eventing puzzles easier
 * 
 * @author Galv - galvs-scripts.com
 *
 * @help
 *   Galv's Puzzle Functions
 * ----------------------------------------------------------------------------
 * This plugin adds some functions to use that may help with eventing puzzles.
 *
 * 1. Self-switch flipping
 * Change self switches for any event from any event
 * Change self switches for events adjacent to other events
 * Specify turning these self switches off, on or flip them
 *
 * 2. Determine location without having to use Control Variables beforehand.
 * Test to see if an event or player is at an x,y location 
 * Test to see if an event or player is at another event's location
 *
 * 3. Group switch/self-switch checking
 * Test to see if a group of specified switches are on or off
 * Test to see if a group of events have a certain self switch on or off
 *
 * 4. Checking event activation order
 * Set a combination
 * Make events add combination values
 * Check if the player has activated the events in the right order set in the
 * combination specified.
 *
 * 5. Multiple Item Checking
 * Check if there are multiple items, armors, weapons in inventory using
 * code with only one conditional branch.
 *
 * ----------------------------------------------------------------------------
 *
 * ----------------------------------------------------------------------------
 *  1. SWITCH
 * ----------------------------------------------------------------------------
 * Used in "Script" event command. The "switch" script call allows you to make
 * an event turn on or off self-switches of events adjacent to it.
 *
 *    Galv.PUZ.switch(d,s,x,e);  // d = direction
 *                               // 2 down, 8 up, 4 left, 6 right, 0 under
 *                               // '4dir' all directions
 *                               // 'front' in the direction the event faces
 *                               // [d,d,d] specific directions
 *                               // 'event' change specified event only
 *                               // s = self switch. 'A', 'B', 'C' or 'D'
 *                               // x = 'on', 'off' or 'flip'
 *                               //     'flip' changes on to off or off to on
 *                               // e = specify an event ID. Leave blank to
 *                               //     use the event ID of the current event
 * EXAMPLES:
 * Galv.PUZ.switch(2,'B','on');        // turn self switch 'B' on for events
 *                                     // located down from this event
 * Galv.PUZ.switch(2,'B','on',7);      // turn self switch 'B' on for events
 *                                     // located down from event 7
 * Galv.PUZ.switch('4dir','A','off');  // turn all self switch 'A's off for all
 *                                     // events adjacent to this one
 * Galv.PUZ.switch([8,0],'C','flip');  // flip self switch 'C' for event under
 *                                     // and event located up from this event
 * Galv.PUZ.switch('event','D','on',5);  // turn self switch 'D' on for event 5
 *                                       // must specify event Id for this one
 *
 * The above script call can also be used inside move routes, however you need
 * to specify an event ID. To get the current event's ID you can use:
 * this._eventId
 *
 * EXAMPLE:
 * Galv.PUZ.switch(2,'B','on',this._eventId); // turn self switch 'B' on for
 *                                            // events located down from this
 *
 * If you do not want an event to be affected by another event's adjacent 
 * switch change, put in the event NOTE field:
 *
 *    <puznope>
 *
 * ----------------------------------------------------------------------------
 *  2. IS AT
 * ----------------------------------------------------------------------------
 * Used in Conditional Branch 'Script' field. The "isAt" function allows you to
 * check if the player or an event is at the same position as another event or
 * x,y coordinates without having to use Control Variables beforehand.
 *
 *    Galv.PUZ.isAt(t,e)    // t = target event Id (or 0 for player)
 *                          //     or [x,y] to specify a target x,y location
 *                          // e = event Id of the event you want to check if
 *                          //     is at the target's position. Leave blank to
 *                          //     use the event ID of the current event. Use
 *                          //     0 for player
 *
 * EXAMPLES:
 * Galv.PUZ.isAt([12,14])    // is current event is at x12, y14
 * Galv.PUZ.isAt([12,14],9)  // is event 9 at x12, y14
 * Galv.PUZ.isAt(0,5)        // is event 5 is at same position as player
 * Galv.PUZ.isAt(4)          // is current event at same position as event 4
 *
 * ----------------------------------------------------------------------------
 *  3. GROUP SWITCH CONDITIONS
 * ----------------------------------------------------------------------------
 * Used in Conditional Branch 'Script' field. These functions allow you to
 * check and see if groups of switches are on or off.
 *
 *    Galv.PUZ.selfSwitchesOn(s,x,x,x)  // s = self switch 'A', 'B', 'C' or 'D'
 *                                      // x's are event Id's. Check to see if
 *                                      // ALL event's listed have the self
 *                                      // switch letter turned ON. (any number
 *                                      // of event Id's can be used)
 *
 *    Galv.PUZ.selfSwitchesOff(s,x,x,x) // Same as above but checks if all
 *                                      // events self switches are turned OFF.
 *
 *    Galv.PUZ.switchesOn(x,x,x)        // x's are switch Id's. Check to see if
 *                                      // all specified switches are ON.
 *
 *    Galv.PUZ.switchesOff(x,x,x)       // x's are switch Id's. Check to see if
 *                                      // all specified switches are OFF.
 *
 * ----------------------------------------------------------------------------
 *  4. EVENT ACTIVATION ORDER - COMBINATIONS
 * ----------------------------------------------------------------------------
 * Makes it easier check if events are activated in a certain order to proceed
 * or succeed in a puzzle.
 * To do this, first make a script call before your puzzle to set the order
 * combination (and give it an id to reference it):
 *
 *    Galv.PUZ.setComb(id,v,v,v)      // id (to reference the combination)
 *                                    // v's are the values to use to create
 *                                    // a combination. (can have any amount)
 *                                    // You can make the values any number or
 *                                    // event id's if you are using automatic
 *                                    // value adding (more on that below)
 *
 * EXAMPLE
 * Galv.PUZ.setComb(4,1,2,3)  // Combination 4 is: 1,2,3
 *
 * Next, whenever you want an event to count toward the combination, use this
 * script call in the activated event:
 *
 *    Galv.PUZ.addToComb(id,v)     // id is the combination id (you set above)
 *                                 // v is the value you want the script call
 *                                 // to add toward checking if the player has
 *                                 // activated the right order of events for
 *                                 // the combination. Leave this out if you
 *                                 // want to add the event id as an automatic
 *                                 // value instead
 *
 * EXAMPLES:
 * Galv.PUZ.addToComb(4,1)  // Counts toward activating combo 4 with value 1
 * Galv.PUZ.addToComb(4)    // Counts toward activating combo 4 with a value
 *                          // equal to the event's id
 *
 * Lastly, you'll need to check if the combination has been successful with
 * a script that can be used in a CONDITIONAL BRANCH:
 *
 *    Galv.PUZ.checkComb(id)   // true if the player has activated the right
 *                             // combination set for combination 1
 *
 * See the demo for example of this.
 *
 *
 * ----------------------------------------------------------------------------
 *  5. MULTIPLE ITEM CHECKING
 * ----------------------------------------------------------------------------
 * In default eventing you can use Control Variables to get the number of an
 * item in the inventory or a Conditional Branch to check if the player has
 * any number of a certain item in the inventory.
 * The below commands add ability to check multiple items easier and are all
 * used in Conditional Branches:
 *
 *    Galv.PUZ.hasItems(x,x,x)     // x's are item id's, you can check as many
 *                                 // as required
 *
 *    Galv.PUZ.hasWeapons(x,x,x)   // x's are weapon id's, you can check as
 *                                 // many as required
 *
 *    Galv.PUZ.hasArmors(x,x,x)    // x's are armor id's, you can check as
 *                                 // many as required
 *
 *    Galv.PUZ.itemAmount(t,id)    // type = 'item', 'weapon' or 'armor'
 *                                 // id is the item's id
 *                                 // this returns the number of items and can
 *                                 // be compared to a number with code:
 *                                 //   ==     is equal to
 *                                 //   >=     greater or equal
 *                                 //   <=     lesser or equal
 *                                 //   >      greater
 *                                 //   <      lesser
 *
 * These can be used together in the same Conditional Branch by separating them
 * with &&.
 *
 * EXAMPLES:
 * Galv.PUZ.hasItems(1,2,3)   // Check if player has at least one of each item
 * Galv.PUZ.hasArmors(1,2)    // Check if player has at least one of each armor
 * Galv.PUZ.itemAmount('item',1) >= 10   // Check if there is 10+ item id 1's
 * And to check all three together in the same conditional branch:
 * Galv.PUZ.hasItems(1,2,3) && Galv.PUZ.hasArmors(1,2) && Galv.PUZ.itemAmount('item',1) >= 10
 *
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {


Galv.PUZ.itemAmount = function(type,id) {
	switch(type) {
		case 'item':
			var t = $dataItems;
			break;
		case 'weapon':
			var t = $dataWeapons;
			break;
		case 'armor':
			var t = $dataArmors;
			break;
	};
	return t[id] ? $gameParty.numItems(t[id]) : 0;
};



Galv.PUZ.hasItems = function() {
	return Galv.PUZ.hasGear(0,arguments);
};

Galv.PUZ.hasWeapons = function() {
	return Galv.PUZ.hasGear(1,arguments);
};

Galv.PUZ.hasArmors = function() {
	return Galv.PUZ.hasGear(2,arguments);
};

Galv.PUZ.hasGear = function(type,args) {
	switch(type) {
		case 0:
			var t = $dataItems;
			break;
		case 1:
			var t = $dataWeapons;
			break;
		case 2:
			var t = $dataArmors;
			break;
	};
	for (var i = 0; i < args.length; i++) {
		if (!$gameParty.hasItem(t[args[i]])) return false;
	};
	return true;
};

Galv.PUZ.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Galv.PUZ.Game_System_initialize.call(this);
	this._combinations = {};
};

Galv.PUZ.setComb = function(id) {
	var array = Array.prototype.slice.call(arguments);
	array.shift();
	$gameSystem._combinations[id] = {'answer': array, 'pressed': []};
};

Galv.PUZ.addToComb = function(id,value) {
	// if no value, make it event ID
	if (!value) var value = $gameMap._interpreter._eventId;
	var comb = $gameSystem._combinations[id];
	if (comb) {
		comb.pressed.push(value);
		if (comb.pressed.length > comb.answer.length) {
			$gameSystem._combinations[id].pressed.shift();
		};
	};
};

Galv.PUZ.checkComb = function(id) {
	var comb = $gameSystem._combinations[id];
	return comb ? comb.pressed.equals(comb.answer) : false;
};

Galv.PUZ.switchesOn = function() {
	for (var i = 0; i < arguments.length; i++) {
		if (!$gameSwitches.value(arguments[i])) return false;
	};
	return true;
};

Galv.PUZ.switchesOff = function() {
	for (var i = 0; i < arguments.length; i++) {
		if ($gameSwitches.value(arguments[i])) return false;
	};
	return true;
};

Galv.PUZ.selfSwitchesOn = function(letter) {
	var letter = letter.toUpperCase();

	for (var i = 1; i < arguments.length; i++) {
		var key = [$gameMap.mapId(), arguments[i], letter];
		if (!$gameSelfSwitches.value(key)) return false;
	};
	return true;
};

Galv.PUZ.selfSwitchesOff = function(letter) {
	var letter = letter.toUpperCase();

	for (var i = 1; i < arguments.length; i++) {
		var key = [$gameMap.mapId(), arguments[i], letter];
		if ($gameSelfSwitches.value(key)) return false;
	};
	return true;
};

Galv.PUZ.isAt = function(targetId,eventId) {
	if (eventId != undefined) {
		var char = eventId > 0 ? $gameMap.event(eventId) : $gamePlayer;
	} else {
		var char = $gameMap.event($gameMap._interpreter._eventId);
	};
	if (Array.isArray(targetId)) {
		var target = {x: targetId[0], y: targetId[1]};
	} else {
		var target = targetId > 0 ? $gameMap.event(targetId) : $gamePlayer;
	};
	
	return char.x == target.x && char.y == target.y
};

Galv.PUZ.isAnyAt = function(eventId) {
	isTouchingSomething = false
	allEvents = $gameMap._events
	targetEvent = $gameMap.event(eventId);
	for (var i = 1; i  < allEvents.length ; i++) {
		if (allEvents[i] ? (allEvents[i]._eventId != eventId && (allEvents[i].x == targetEvent.x && allEvents[i].y == targetEvent.y)) : false){
			isTouchingSomething = true
		}
	}
	return isTouchingSomething;
}

Galv.PUZ.switch = function(dir,letter,state,eventId) {
	var dirs = [];
	var letter = letter.toUpperCase();
	
	switch(dir) {
		case '4dir':
			// do 4 directions
			dirs = [2,4,6,8];
			break;
		case 'front':
			// get event's direction
			if (!eventId) var eventId = $gameMap._interpreter._eventId;
			dirs = [$gameMap.event(eventId).direction()];
			break;
		case 'event':
			if (!eventId) var eventId = $gameMap._interpreter._eventId;
			var key = [$gameMap.mapId(), $gameMap.event(eventId).eventId(), letter.toUpperCase()];
			var currentState = $gameSelfSwitches.value(key);
			var state = Galv.PUZ.getSwitchState(state,currentState);
			$gameSelfSwitches.setValue(key, state);
			return;
			break;
		default:
			dirs = Array.isArray(dir) ? dir : [dir];
	};
	
	Galv.PUZ.doSwitches(dirs,letter,state,eventId);
};

Galv.PUZ.doSwitches = function(dirs,letter,state,eventId) {
	// For each direction
	if (eventId != undefined) {
		var char = eventId > 0 ? $gameMap.event(eventId) : $gamePlayer;
	} else {
		var char = $gameMap.event($gameMap._interpreter._eventId);
	};

	if (char) {
		for (var i = 0; i < dirs.length; i++) {
			// get all events in that direction
			var direction = dirs[i];
			if (direction > 0) {
				var x = $gameMap.roundXWithDirection(char.x, direction);
				var y = $gameMap.roundYWithDirection(char.y, direction);
			} else {
				var x = char.x;
				var y = char.y;
			};
			var eventList = $gameMap.eventsXy(x,y);
			// do switch for all events
			for (var e = 0; e < eventList.length; e++) {
				var event = eventList[e];
				if (event.event().meta.puznope) continue;
				var key = [$gameMap.mapId(), event.eventId(), letter];
				var currentState = $gameSelfSwitches.value(key);
				var setState = Galv.PUZ.getSwitchState(state,currentState);
				$gameSelfSwitches.setValue(key, setState);
			};
		};
	};
};

Galv.PUZ.getSwitchState = function(state, currentState) {
	switch(state) {
		case true:
		case 'on':
			var set = true;
			break;
		case false:
		case 'off':
			var set = false;
			break;
		case 'flip':
			var set = !currentState;
			break;
	};
	return set;
};

})();
