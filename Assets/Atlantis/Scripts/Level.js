#pragma strict

// This script server as an interface for other scripts. Contains the variables that hold the progress of player in the game.

// Import Scripts
var inventoryScript : Inventory;
// --

var player : Transform;
var cam : Transform;


// If close to player, object becomes available
static var canGetObject = new Hashtable();
	canGetObject["hammer"] = false;
	canGetObject["ball"] = false;
// --

// Current selected item
static var selectedItem = null;
// --

// If close to Puzzle Object, player can interact with it
static var interactPuzzleObject = false;
// --

// Hint Message
var hintMessage = null; // not using
// --

// Container that stores player's progress in the game.
static var playerProgress = new Hashtable();
	playerProgress[0] = false;
	playerProgress[1] = false;
// --

function Start () {
 
	selectedItem = null;
	interactPuzzleObject = false;
}

function Update () {

}

function ActionResponse(){
	
	if(selectedItem != null)
		interactPuzzleObject = true;
	else 
		interactPuzzleObject = false;
		
	// Check if any item is ready to be taken.
	for(var item in canGetObject.Keys){
		if(canGetObject[item]){
			inventoryScript.addItemToInventory(item);
			break;
		}
	}
}
