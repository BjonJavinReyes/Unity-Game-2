#pragma strict

// If player collides with puzzle object, right item is selected and action button is pressed, then object respondes.

// Import Scripts
var inventoryScript : Inventory;
var levelScript : Level;
// --

private var obj : GameObject;
private var isReady = false;
private var go = false;
private var time : float;
private var delta : int = 0;

function Start () {
	time = Time.deltaTime;
	obj = this.gameObject;
}

function Update () {
	if(levelScript.interactPuzzleObject && isReady){
		Response(levelScript.selectedItem);
		levelScript.interactPuzzleObject = false;
	}
	
	if(go){
		this.gameObject.transform.position.y += Mathf.Lerp(this.gameObject.transform.position.y, 1, Time.deltaTime * 2000);
		delta++;
		if(delta >= 0.4) go = false;
		levelScript.selectedItem = null;
	}
}

function OnTriggerEnter(collision: Collider){
    if(collision.tag == "Player"){
		isReady = true;
    }
}

function OnTriggerExit (collision : Collider) {
    if(collision.tag == "Player"){
		isReady = false;
	}
}

function Response(item){

	Debug.Log(item);
	switch (item){
		case "hammerGUI":
			if(this.gameObject.name == "Cube"){
				go = true;
			}
			break;
		case "ballGUI":
			break;
	}

}
