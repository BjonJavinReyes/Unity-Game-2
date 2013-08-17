#pragma strict

// Import Scripts
var levelScript : Level;
// --

// Action Button
private var actionButton : GUITexture;
private var actionButtonBg : GUITexture;
// --

function Start () {
	actionButton = GameObject.Find("Action").guiTexture;
	actionButtonBg = GameObject.Find("Action_background").guiTexture;
	actionButtonBg.color.a = 0;
}

function Update () {

	for (var touch : Touch in Input.touches)
	{
		// Action button pressed			
		if(touch.phase == TouchPhase.Began && actionButton.HitTest(touch.position)) {
			levelScript.ActionResponse();
		}
		// --
	}
}
