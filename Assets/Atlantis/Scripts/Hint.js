#pragma strict

var levelScript : Level;
var fadeScript : Fade;

private var hintButton : GUITexture;

// Hint Message
private var hintMessage : GUIText;
// --

// Store hint messages in array
private var hintMessagesArray = new Array();
	hintMessagesArray[0] = "Explore the church and look for items that you can use.";
	hintMessagesArray[1] = "Try using the inventory items around the church.";
	hintMessagesArray[2] = "Run!";
// --

private var seeHint = true;
   
function Start () {
	hintButton = GameObject.Find("Hint").guiTexture; // get guiTexture
	hintMessage = GameObject.Find("Hint_message").guiText; // get guiTexture
	hintMessage.enabled = false; // disable guiTexture on game start
	hintMessage.font.material.color.a = 0; // start with opacity 0 for fade in effect
}

function Update () {
	
	for (var touch : Touch in Input.touches){
		// Hint button pressed
		if(touch.phase == TouchPhase.Began && hintButton.HitTest(touch.position)) {

				// Loop through playerProgress hastable
				for(var item in levelScript.playerProgress.Keys){
					if(!levelScript.playerProgress[item]){
						showHint(item);
						break;
					}
				}				
		}
		// --	
	}
}

function showHint(hint){

	if(seeHint){
	
		seeHint = false;// avoid displaying the hint over and over		
		hintMessage.enabled = true;
		hintMessage.text = hintMessagesArray[hint];
		
		fadeScript.Alpha(hintMessage.material, 0, 1, 2);	
			yield WaitForSeconds(5);
		fadeScript.Alpha(hintMessage.material, 1, 0, 5.0);
			yield WaitForSeconds(5);
		seeHint = true;
	}
	
}
