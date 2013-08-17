using UnityEngine;
using System.Collections;

public class ActionButton : MonoBehaviour {
	
	private GUITexture interactButton;
	
	// Use this for initialization
	void Start () {
		interactButton = GameObject.Find("Action").guiTexture;
	}
	
	// Update is called once per frame
	void Update () {
		
		foreach (Touch touch in Input.touches) {
            if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
                if (!_gui.HitTest(touch.position)){
					Debug.Log ("asdasd");
				}
        }
		
	}
}
