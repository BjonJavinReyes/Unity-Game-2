#pragma strict

// Import Scripts
var levelScript : Level;
// --
private var obj : GameObject;

function Start () {
	obj = this.gameObject;
}

function Update () {

}

function OnTriggerEnter(collision: Collider){
    if(collision.tag == "Player"){
    	levelScript.canGetObject[obj.name] = true;
    }
}

function OnTriggerExit (collision : Collider) {
    if(collision.tag == "Player"){
    	levelScript.canGetObject[obj.name] = false;
	}
}