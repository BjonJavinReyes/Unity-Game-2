#pragma strict

function Start () {

}

function Update () {
	for (var touch : Touch in Input.touches)
	{
		// Action button pressed			
		if(touch.phase == TouchPhase.Began && this.guiTexture.HitTest(touch.position)) {
			Application.LoadLevel(0);
		}
		// --
	}
}