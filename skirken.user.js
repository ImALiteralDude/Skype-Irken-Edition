// ==UserScript==
// @name         Skype Irken edition
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I'm a fucking Invader Zim nerd shut the fuck up
// @author       You
// @match        https://web.skype.com/
// @icon         https://media.discordapp.net/attachments/1107424838592770049/1123008693550723072/Irken_Skype_Logo.png?width=388&height=388
// @grant        none
// ==/UserScript==

function fuckTheBanner() {
    var element = document.querySelector('div[style="position: relative; display: flex; flex-flow: row wrap; flex-grow: 0; flex-shrink: 0; overflow: hidden; align-items: center; min-height: 32px; justify-content: space-between; padding-right: 8px; background-color: rgb(43, 44, 51); padding-left: 8px;"]');
    if (element) {
        element.remove();
    }
    var textElement = document.querySelector('div[data-text-as-pseudo-element="Here are some quick actions to get you started"]');
    if (textElement) {
        textElement.remove();
    }
    var anotherElement = document.querySelector('div[role="none"][style="position: relative; display: flex; flex-direction: row; flex-grow: 0; flex-shrink: 0; overflow: hidden; align-items: stretch; justify-content: center;"]');
    if (anotherElement) {
        console.log("yeah the shit's there go edit it");
}
}

function fuckTheRoundBitches() {
    // Select the buttons based on their titles
    const buttons = Array.from(document.querySelectorAll('*'));
    // Iterate through each button
    buttons.forEach(button => {
        // Remove the roundness by setting the border-radius CSS property to 0
        var cum = button.firstChild;
        console.log("Button" + cum + "rounded.")
        button.style.borderRadius = '0';
    });
}
function changeTheFuckingColors() {
    var targetElement = document.querySelector('[style="position: relative; display: flex; flex-direction: column; flex-grow: 1; flex-shrink: 1; overflow: hidden; align-items: center; justify-content: center; padding-left: 45px; padding-right: 45px; background-color: rgb(20, 20, 20); opacity: 1; transition: none 0s ease 0s; border-radius: 0px;"]');
    if (targetElement) {
        targetElement.style.backgroundColor = 'rgb(44,18,45)';
    }
    var otherTarget = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(1)")
    if (otherTarget) {
        otherTarget.style.backgroundColor = 'rgb(100, 10, 70)';
    }
    var yetAnotherTarget = otherTarget.parentElement.childNodes[1];
    if (yetAnotherTarget) {
        yetAnotherTarget.style.backgroundColor = 'rgb(100, 10, 70)';
        console.log("Color fucked.");
   } else if (yetAnotherTarget == null) {
       console.log("Element not detected. Try changing selector?");
    }
var theTextOne = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > button:nth-child(1) > div");
var theTextTwo = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > button:nth-child(2) > div")
var theTextThree = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > button > div > div")
if (theTextOne) {
    theTextOne.style.color = 'rgb(150, 70, 140)';

    console.log("Color changed!");
}
if (theTextTwo) {
    theTextTwo.style.color = 'rgb(150, 70, 140)';

    console.log("Color changed!");
}
if (theTextThree) {
    theTextThree.style.color = 'rgb(150, 70, 140)';

    console.log("Color changed!");
}

var theDumbFuckingDots = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button > div > svg");
var theOtherFuckingDots = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > button > div")
if (theDumbFuckingDots) {
    theDumbFuckingDots.style.fill = 'rgb(116, 42, 111)';
    theDumbFuckingDots.style.gradientColor1 = 'rgb(116, 42, 111)';
    theDumbFuckingDots.style.gradientColor2 = 'rgb(116, 42, 111)';
}
if (theOtherFuckingDots) {
    theOtherFuckingDots.style.textOverflow = 'clip';
}
var theMotherfuckening = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(2) > div")
if (theMotherfuckening) {
    theMotherfuckening.style.backgroundColor = 'rgb(20, 13, 21)';
}
var theCunt = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > div > div > div")
if (theCunt) {
    theCunt.style.backgroundColor = 'rgb(20, 13, 21)';
}
var theLittleFucker = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(2) > div > div")
if (theLittleFucker) {
    theLittleFucker.style.backgroundColor = 'rgb(20, 13, 21)';
}
var theFuckingSidebar = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)")
if (theFuckingSidebar) {
    theFuckingSidebar.style.backgroundColor = 'rgb(49, 16, 40)';
}
var theRestOfTheFuckingSidebar = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)")
if (theRestOfTheFuckingSidebar) {
    theRestOfTheFuckingSidebar.style.backgroundColor = 'rgb(49, 16, 40)';
}
var theEntireFuckingShit = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)")
var discountGunSales = theEntireFuckingShit.querySelectorAll("*");
for (var i = 0; i < discountGunSales.length; i++) {
     var penisPenis = discountGunSales[i];
     if (penisPenis.style.fill == '#099ADE' || !(penisPenis.style.fill == '#8a8d91')) {
         penisPenis.style.fill = '#accc81';
         penisPenis.style.gradientColor1 = '#accc81';
         penisPenis.style.gradientColor2 = '#accc81';
     } else {
         console.log("fuck u lmao");
}
}
var thisIsActuallyHell = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div > div:nth-child(2)")
if (thisIsActuallyHell) {
    thisIsActuallyHell.style.color = '#accc81'
}
var thisIsActuallyHell2 = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > div > div:nth-child(2)")
if (thisIsActuallyHell2) {
    thisIsActuallyHell2.style.color = '#accc81'
}
var thisIsActuallyHell3 = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3) > div > div > div:nth-child(2)")
if (thisIsActuallyHell3) {
    thisIsActuallyHell3.style.color = '#accc81'
}
var thisIsActuallyHell4 = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4) > div > div:nth-child(2)")
if (thisIsActuallyHell4) {
    thisIsActuallyHell4.style.color = '#accc81'
}
var thisIsStillHell = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(4) > div > div:nth-child(1)");
if (thisIsStillHell) {
    thisIsStillHell.style.background = '#640A46'
}

var stopThereAndLetMeCorrectIt = document.querySelector("body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div > div.scrollViewport.scrollViewportV > div > div:nth-child(2)")
if (stopThereAndLetMeCorrectIt) {
var stopFuckingMyWife = Array.prototype.slice.call(stopThereAndLetMeCorrectIt.querySelectorAll("*"));
for (let v = 0; v < stopFuckingMyWife.length; v++) {
    if (stopFuckingMyWife[v].style.backgroundColor == 'rgb(14, 59, 130)') {
        stopFuckingMyWife[v].style.backgroundColor = 'rgb(72, 9, 69)'
    } else if (stopFuckingMyWife[v].style.backgroundColor == 'rgb(41, 41, 41)') {
        stopFuckingMyWife[v].style.backgroundColor = 'rgb(60 15 15)'
}
}
}
//rgb(41, 41, 41)
//"#480945"
//rgb(20, 13, 21)
}
function emojiChanger() {

    //NOTE
    //THIS SHIT DOESN'T WORK, SO I DISABLED IT AT THE END
    //IF YOU FIX IT LEMME KNOW, WILL GIVE CREDIT IF YOU PERMIT ME TO USE YOUR CODE IN THE ORIGINAL REPO
    // Select all elements with the specified class
var elements = document.getElementsByClassName("SpriteComponentAnimationPause");

// Loop through the elements and find the specific one using the title
var targetElement = null;
for (var i = 0; i < elements.length; i++) {
  if (elements[i].title === "(smilerobot)") {
    targetElement = elements[i];
    break;
  }
}

// Check if the specific element was found
if (targetElement) {
  // Change the background image
  targetElement.style.backgroundImage = 'url("https://api.asm.skype.com/v1/objects/0-eus-d2-ba51fe65d24260d918affaaffe122b54/views/imgpsh_mobile_save_anim")';

  // Stop the element from moving
  targetElement.style.animation = "none";
  targetElement.style.transform = "none";
  targetElement.onload = function() {
    targetElement.style.backgroundSize = targetElement.style.width + " " + targetElement.style.width;
    targetElement.style.height = targetElement.style.width;
  };
}
}

function changeTheFonts() {
  // Define the desired fonts
  const boldFont = '"Century Gothic", CenturyGothic, AppleGothic, sans-serif;';
  const regularFont = '"Century Gothic", CenturyGothic, AppleGothic, sans-serif;';

  // Select all elements containing text on the page
  const textElements = document.querySelectorAll("body *");

  // Iterate through each text element
  textElements.forEach(element => {
    // Check if the element has the Segoe System UI Semibold font
    if (element.style.fontFamily.includes("Segoe System UI Semibold") ||
        element.style.fontFamily.includes("Segoe UI Semibold")) {
      // Assign the bold font
      element.style.fontWeight = 700;
      element.style.fontFamily = boldFont;
    }
    // Check if the element has the specified regular font
    else if (element.style.fontFamily.includes("Segoe System UI Regular") ||
             element.style.fontFamily.includes("Segoe UI Regular")) {
      // Assign the regular font
      element.style.fontFamily = regularFont;
      element.style.fontWeight = 400
    }
  });
}

function capitalPunishment() {
  var elements = document.body.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.textTransform = 'uppercase';
  }
}
function iconPenisPenisIcon() {
var link2 = document.getElementById("favicon");
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://eus1-api.asm.skype.com/v1/objects/0-eus-d10-297cc26084629a625047c0050de6d5ed/views/original';
link2.href = 'https://eus1-api.asm.skype.com/v1/objects/0-eus-d10-297cc26084629a625047c0050de6d5ed/views/original';
}
function fuckTheTinyLittleAssBarAtTheBottomYeahThatOne(){
const penisVagina = document.querySelector('body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(2)')
penisVagina.remove();
}
function executeTheShit() {
fuckTheBanner();
fuckTheRoundBitches();
changeTheFuckingColors();
//emojiChanger();
changeTheFonts();
capitalPunishment();
iconPenisPenisIcon();
fuckTheTinyLittleAssBarAtTheBottomYeahThatOne();
}
setInterval(executeTheShit, 100);
