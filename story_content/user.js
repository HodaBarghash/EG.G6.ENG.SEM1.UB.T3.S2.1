function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kxY3mqq54p":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v41q1attempts:player.GetVar("v41q1attempts"),v41q1answeredcorrect:player.GetVar("v41q1answeredcorrect"),v41q2attempts:player.GetVar("v41q2attempts"),v41q2answeredcorrect:player.GetVar("v41q2answeredcorrect")})
	}
	)
}

