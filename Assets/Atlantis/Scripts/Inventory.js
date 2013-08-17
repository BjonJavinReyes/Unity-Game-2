#pragma strict

// Import Scripts
var levelScript : Level;
// --

// Inventory
private var inventoryButton : GUITexture;
private var inventory : GUITexture;
private var itemsInInventory = new Array();
// --

// Items GUITexture
private var hammerGUI : GUITexture;
private var ballGUI : GUITexture;
private var squareGUI : GUITexture;
// --

// inventoryItemsPos = [position of item, x position, page in inventory]
static var inventoryItemsPos = [
	[null, 120, 1],
	[null, 140, 1],
	[null, 160, 1],
	[null, 180, 1],
	[null, 200, 1],
	[null, 220, 2],
	[null, 240, 2],
	[null, 260, 2],
	[null, 280, 2],
	[null, 300, 2]
];
// --

// Open/close inventory
private var isOpened = false;
// --

function Start () {
	isOpened = false; // Start with inventory closed always
	inventoryButton = GameObject.Find("Pouch").guiTexture;	
	inventory = GameObject.Find("Inventory").guiTexture;
	inventory.transform.position.z = 1000; // bring image forth with z-index			
}

function Update () {
	if(isOpened == false) levelScript.selectedItem = null; // deselect Item if inventory is closed
	for (var touch : Touch in Input.touches)
	{
		// Inventory button pressed
		if(touch.phase == TouchPhase.Began && inventoryButton.HitTest(touch.position)) {
			if(isOpened){
				closeInventory();
				isOpened = false;
			}
			else{
				openInventory();
				isOpened = true;
			}
		}
		// --
		// if Inventory is openned
		else if(isOpened) {
			for(var o in inventoryItemsPos){
				if(o[0] != null){
				var itemGUI : GUITexture = GameObject.Find(o[0]).guiTexture;
					if(touch.phase == TouchPhase.Began && itemGUI.HitTest(touch.position)){
						if(levelScript.selectedItem == null){
							levelScript.selectedItem = itemGUI.texture.name+"GUI";
							Debug.Log("selected");
						}
						else{ 
							levelScript.selectedItem = null;
							Debug.Log("not selected");
						}
					}
				}
			}
		}
		// --
	}

}

function addItemToInventory(item){

	var obj = GameObject.Find(item);
		obj.SetActive(false);
		
	var itemGUI = GameObject.Find(item+"GUI").guiTexture;
		itemGUI.enabled = true;
		itemGUI.transform.position.z += 1001; // bring image forth with z-index	
	
	itemsInInventory.Push(item);
	
	for(var o in inventoryItemsPos){
		if(o[0] == null){
			o[0] = item+"GUI";
			break;
		}
	}
	

	
	cannotGetObject(item);
}

// Set the value to false for items that are in the inventory
function cannotGetObject(item){
	levelScript.canGetObject[item] = false;
}
// --

function openInventory(){
	inventory.transform.position.y += 0.1;
	PlayerPrefs.DeleteAll();
}

function closeInventory(){
	inventory.transform.position.y -= 0.1;
}