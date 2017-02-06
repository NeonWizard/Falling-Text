"use strict";var input=document.getElementById("input");var modifiers={rainbow:false,reverse:false,beeQuotes:false};var fallingTimer=0;function setSpawnRate(msRate){if(fallingTimer)clearInterval(fallingTimer);fallingTimer=setInterval(function(){if(input.value!=""){createFallingText(input.value);}},msRate);}function newBeeQuote(){getBeeQuote().then(function(quote){input.value=quote;var lengthMod=Math.floor(quote.length/20);setSpawnRate(100+lengthMod*25);});}var params=new URLSearchParams(window.location.search);modifiers.rainbow=params.get("rainbow")==="true";modifiers.reverse=params.get("reverse")==="true";modifiers.beeQuotes=params.get("beeQuotes")==="true";var text=params.get("text");if(!text&&!modifiers.beeQuotes){document.getElementById("inputBox").style.display="block";}if(!modifiers.beeQuotes){var btn=document.getElementById("btn_beeQuote");btn.parentElement.removeChild(btn);}if(text)input.value=text;if(modifiers.beeQuotes){newBeeQuote();}function openSharingWindow(){document.getElementById("sharing-window").style.display="flex";document.getElementById("inputBox").style.display="none";document.getElementById("sharing-input").value="http://wizardlywonders.xyz/fallingtext/?text="+encodeURIComponent(input.value);}function closeSharingWindow(){document.getElementById("sharing-window").style.display="none";if(!modifiers.beeQuotes&&!params.get("text"))document.getElementById("inputBox").style.display="block";}function copyShareURL(){document.getElementById("sharing-input").select();document.execCommand('copy');}document.getElementById("toggleRainbow").addEventListener("click",function(e){modifiers.rainbow=!modifiers.rainbow;});if(document.getElementById("btn_beeQuote")){document.getElementById("btn_beeQuote").addEventListener("click",function(e){newBeeQuote();});}setSpawnRate(100);