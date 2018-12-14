if (matchMedia) {
	const mobileLandscape = window.matchMedia("(min-width: 480px)");
	mobileLandscape.addListener(WidthChange);
	WidthChange(mobileLandscape);
}

// media query change
function WidthChange(mobileLandscape) {

  // h1 Title change
  const titleShort = "The best of Slack &amp; WhatsApp combined and natively built in Office 365"
  const titleLarge = "The best of Slack & WhatsApp combined and built in Office 365"
	const msg = mobileLandscape.matches ? titleLarge : titleShort;
	document.querySelector(".early-access__title").innerHTML = msg;

  // Phones-large is injected with (min-width: 480) for save a request to the server
  const phonesLarge = '<div class="early-access__phones--large"><img class="early-access__phones-img" src="assets/images/phones-desktop/phones-desktop.png" srcset="assets/images/phones-desktop/phones-desktop@2x.png 2x,                   assets/images/phones-desktop/phones-desktop@3x.png 3x" alt="Iphones showing Contoso App" /></div>';
  const injectPhotos = document.getElementById("inject-photos");
  if(mobileLandscape.matches){
    injectPhotos.innerHTML = phonesLarge;
  }else{
    injectPhotos.innerHTML = null;
  }

}
