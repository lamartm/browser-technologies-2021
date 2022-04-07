# Browser Technologies

![homepage](https://user-images.githubusercontent.com/55801193/162301071-04cf1533-8143-485e-b88e-c59af55caa51.png)

[Link naar de site](https://browser-tech-mohamed-lamarti.herokuapp.com/)

Ik heb in dit vak gefocussed op de enquête over de minor.

## Installatie 💽
Clone de repo:

``` git clone https://github.com/lamartm/browser-technologies-2021.git ```

Install dependencies:

``` npm install ```

Start de site:

``` npm start ```

## De Enquete 📜

Dit is wat de gebruiker wilt:

Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

Het was mij snel duidelijk dat ik localStorage zal moeten gebruiken om de gekozen antwoorden van de gebruiker op te slaan in de browser. Hierdoor kan de gebruiker door gaan wanneer ze willen. Verder wou ik nog kijken hoe ik de error handling wou implementeren. Ook wou ik een confirmation message sturen aan de gebruiker zodra ze een form hebben ingevuld. Ik heb nu een duidelijk idee wat ik wil maken, nu ging ik een wireflow maken van hoe de general flow eruit zal zien:
![wireflow 2](https://user-images.githubusercontent.com/55801193/162275297-d810c495-2fef-4bb5-a1ce-142b216afd66.jpeg)

De gebruiker moet eerst zijn naam en studentennummer invullen. Vervolgens kunnen ze een van de vakken kiezen die tijdens de minor werd gegeven. Ten slot kunnen ze de form invullen door de benodigde informatie toe te voegen.

![wireflow 1](https://user-images.githubusercontent.com/55801193/162275514-0defc95f-5fa5-4c6e-8b72-589dea13d60f.jpeg)

Ik wou bij het raten van de vakken een range slider toevoegen. De waarde hiervan veranderen en doorgeven aan de gebruiker is iets dat ik hoogstwaarschijnlijk met JS moet doen, vandaar bedacht ik gelijk dat ik een fallback moet hebben. Wanneer de gebruiker geen JS heeft krijg je radio buttons te zien. Als laatst zie je hier onderaan nog de pop up message die ik wil toevoegen wanneer de gebruiker de form submit.

## Toegankelijkheid 🔍

Ik ging mijn site in Chrome en Firefox testen om te kijken of het tab vriendelijk is als je zo wilt navigeren. Geluk ging dit vlekkenloos en is mijn site compleet tab vriendelijk. Zelfs de range slider was tab vriendelijk, wat ik als eerst niet had verwacht.

Toen ging ik door middel van lighthouse kijken of elk van mijn pagina goed is qua Performance, Best Practices en Accessibility. Ik kwam wat problemen tegen in accessibility, wat vooral te maken had met inputs die niet de correcte id hadden, maar nadat dit te fixen scoorde mijn site vrij hoog in al deze categorieen:

Inlog page:
![light1](https://user-images.githubusercontent.com/55801193/162276906-515fee80-05e4-4220-83af-90cad5b3192d.png)
Vak selectie page:
![light2](https://user-images.githubusercontent.com/55801193/162276947-cf3c28b3-038a-4998-b006-7ef7948d6220.png)
Form page:
![light3](https://user-images.githubusercontent.com/55801193/162276967-b804d707-ea5c-474d-8bd2-dd443fbfbd8e.png)

Vervolgens ging ik kijken of de kleur combinaties die ik gebruik goed qua contrast zijn. Er waren twee secties waar ik zeker wou zijn dat het contrast goed is. Wanneer de gebruiker hovered op een link en wanneer ze een error melding krijgen. Ik gebruik blauw op wit voor wanneer de gebruiker hovered. In eerste instantie was de contrast hier niet goed en was het niet totaal leesbaar. Ik had toen de tint blauw die ik had gebruikt donkerder gemaakt waardoor de contrast nu wel goed was:

![blue](https://user-images.githubusercontent.com/55801193/162278125-6211b4de-9274-42c9-8f59-8df29fcefec4.png)

Het zelfde geld voor het rood dat ik had gebruikt wanneer je een error krijgt. Ik heb een donkere tint gebruikt om dit beter leesbaar te maken:

![red](https://user-images.githubusercontent.com/55801193/162278261-47ebf70b-ef65-4cfa-8f12-beef4efcb139.png)

Verder is al het leesbare content op mijn site zwart op wit, wat zeker hoog scoort qua contrast leesbaarheid.

## Progressive enhancement 🎂
Progressive enhancement is wanneer je een site/applicatie maakt in lagen. 

De eerste laag is de functional layer. Dit is de laag waar je core functionaliteit werkt zodat de gebruik kan doen waarvoor de site/app is bedoeld. Hier gaat het dan alleen om HTML. Ook al is je CSS en JS uit, de site moet nog steeds doen waar het voor gemaakt is.

De tweede laag is de usable layer. In deze laag gaat het om het visueele door middel van CSS. Je probeert hier dan de site/app beter uit te laten zien en dingen toevoegen die de user experience beter kunnen maken.

Als laatst is de pleasurable layer. In deze laag gaat het om functionaliteiten die je kan toevoegen met JS. Deze kunnen de user experience beter maken en gebruiker interactie toevoegen. Zoals altijd moet je core functionaliteit door al deze lagen heen werken zoals toebehoren. Je kan niet in de usable of pleasurable layer iets toevoegen dat cruciaal is voor de app/site. 

Als je op zo'n manieer je app/site maakt zorg je ervoor dat in welk context dan ook, je site/app bruikbaar is.

Ik zal nu door elk van deze lagen heen gaan en laten zien hoe het er bij mij eruit ziet.

### Functional layer 🎂
Log in:
![inlog html](https://user-images.githubusercontent.com/55801193/162281978-b4d6e0ad-4090-46d1-acf1-91ddd423f46f.png)

Select:
![select html](https://user-images.githubusercontent.com/55801193/162282211-c96e477b-33da-449e-bd03-ebd48d53318e.png)

Form:
![form html](https://user-images.githubusercontent.com/55801193/162281874-bf5205b7-d4dc-407b-a454-51c8718f1da5.png)

Je kan hier zien dat de core functionaliteit door elk pagina heen werkt zoals toebehoren. De gebruiker kan zijn gegevens doorgeven, een vak selecteren en die invullen.
Als de gebruiker een form heeft geselecteerd worden ze redirect naar de vak selectie pagina en is de form die ze hebben ingevuld niet meer klikbaar. Dit komt doordat de code die dit regelt via de server gaat en niks met de client te maken heeft. Hierdoor kon ik ervoor zorgen dat er zelf zonder JS en CSS ervoor kan zorgen dat de pagina's doen wat ze horen te doen.

### Usable layer 🎂
Log in:
![login css](https://user-images.githubusercontent.com/55801193/162283182-27e92d70-4b23-44e1-ab87-bb4c6e051be3.png)

Select:
![select css](https://user-images.githubusercontent.com/55801193/162283208-99760d29-fca8-436b-8335-0df3d846fc9a.png)

Form:
![form css](https://user-images.githubusercontent.com/55801193/162283263-4f38ccd1-68c9-4894-b0b2-866ee953f8ef.png)

Form error:
![form error css ](https://user-images.githubusercontent.com/55801193/162283284-328fbf36-f0f5-4ca2-b4e7-2d3114752b5d.png)

Alles hierboven is wat je ziet wanneer JS niet aanstaat. Ik heb hier geprobeerd om de vormgeving te verbeteren en wat interactie toe te voegen door hover animaties.
De form die je hier ziet is wat je krijgt wanneer JS niet aanstaat. Ik check hier natuurlijk voor in mijn code, zodat de gebruiker de slider krijgt te zien als JS aan staat en de radio buttons wanneer dit niet het geval is. Zoals je kan zien krijgt de gebruiker een standaard error wanneer je niet alles van de form hebt ingevuld. Ook is er geen confirmation message wanneer de form helemaal is ingevuld. Dit zijn allemaal dingen die ik in de volgende layer zal implementeren.

### Pleasurable layer 🎂
Log in:
![login css](https://user-images.githubusercontent.com/55801193/162283182-27e92d70-4b23-44e1-ab87-bb4c6e051be3.png)

Select:
![select css](https://user-images.githubusercontent.com/55801193/162283208-99760d29-fca8-436b-8335-0df3d846fc9a.png)

Form:
![form js](https://user-images.githubusercontent.com/55801193/162283996-84207814-9031-4d41-a14c-5a08014bedae.png)

Form Error:
![form js error](https://user-images.githubusercontent.com/55801193/162284038-7273c7b1-bf1b-4fdb-878c-c62e1e6db9dd.png)

Form confirmation message:
![form js confirm](https://user-images.githubusercontent.com/55801193/162284076-38a07693-c41c-44b3-9a31-6a29dbc292f4.png)

In de form page heb ik de slider toegevoegd in het geval dat JS aanstaat. Dit doordat ik alleen met JS de nummer kan veranderen die naast de slider staat, zodat de gebruiker weet welke cijfer ze nu hebben. Er is hier een groter element van interactie en ik vond het een waardige toevoeging in het geval dat de gebruiker JS heeft. Door middel van localStorage sla ik elke aanpassing van de gebruiker in de form op. Hierdoor kunnen ze altijd terug komen naar een form en doorgaan waar ze waren.

Verder heb ik in het geval dat de gebruiker een veld niet heeft ingevuld ervoor gezorgd dat de pagina automatisch scrollt naar het gedeelte dat nog ingevuld moet worden en de tekst rood wordt om aan te geven dat dit is wat nog ingevuld moet worden.

Wanneer de gebruiker de form verstuurd krijgen ze een confirmation message terug. Ik heb ervoor gezorgd dat er een delay is voordat ze geredirect worden naar de vak pagina, zodat de gebruiker de message kan lezen. 

## Test verslag 🧪
Om zeker te zijn dat mijn applicatie in elke context werkt qua browser of OS, zal ik het vier testen in vier verschillende browsers. Dit zijn de volgende browser waarin ik ging testen:

- Chrome
- Firefox
- Android Chrome
- Safari

### Chrome
Ik heb mijn applicatie vanaf het begin gemaakt in chrome en kon het daarom continu testen om te kijken of alles werkt. Dit was geluk wel het geval. Het enigste waar ik nog mee zat is dat je met de chrome web dev tools de CSS kan uitdoen maar JS wel aan kan zetten. Dit is een erge edge case sinds je bijna nooit zou meemaken dat je wel JS hebt maar geen CSS, maar om ervoor te zorgen dat mijn applicatie in elke context werkt ging ik nadenken hoe ik de problemen hierin kon oplossen.

Mijn probleem was dat ik met JS elementen aanmaak en toevoeg aan de DOM. Wanneer je geen JS hebt worden deze elementen niet gemaakt en krijg je de elementen te zien die je alleen tevoorschijn komen als je alleen CSS hebt en geen JS. Wat er nu dan gebeurt wanneer je JS aan hebt en CSS uit, de aangemaakte elementen via JS worden toegevoegd aan de DOM en de elementen die ik ontzichtbaar had met display: none worden nu ook getoond.

Ik moest dus een manier vinden om te checken of de gebruiker CSS heeft. Dit deed ik door middel van de volgende check:
```
window.getComputedStyle(formSection).getPropertyValue("display") === "flex"
```
Ik check hier of de form display: flex heeft. Dit gebeurt alleen als er CSS is en dit toegevoegd wordt. Als dit het geval is, voeg dan de elementen toe aan de DOM, zo niet doe dan niks. Hierdoor krijg je zelf in de edge case dat je geen CSS hebt maar wel JS, de correcte elementen te zien.

### Firefox
De applicatie werkte zoals verwacht, alleen waren er wat problemen met de styling, waardoor de app er niet helemaal goed uitzag. Na wat te exprimenteren had ik ervoor gezorgd dat de app er ook in Firefox goed uitziet. Ik ging hier ook nog een media query toevoegen in mijn CSS sinds ik zag dat de applicatie er niet helemaal goed uitzag in kleinere schermformaten. Verder heeft Firefox een andere layout voor de datums, namelijk geen agenda icon naast de input, maar dit komt nog steeds overeen met hoe ik het me voor me zag.

![home](https://user-images.githubusercontent.com/55801193/162287998-5acf114b-3d12-47b7-ab74-693d66a369f9.png)

### Android Chrome
Tijdens het testen voor Android besefte ik me hoe belangrijk testen is. De App werkte zoals verwacht totdat je kwam naar de form. Hier sloeg het de gekozen waardes niet op bij bepaalde input fields, in de localStorage. Het was moeilijk te debuggen, maar het bleek iets te maken te hebben met dat de focusout event niet altijd vuurt op mobile. Hierdoor ging ik inplaats van  ```addEventListener("focusout")``` change gebruiken: ```addEventListener("change")```. Hiervoor was het wel het geval dat de gebruiker eerst een andere element moet selecteren voordat de ingevoerde waarde in de localStorage wordt toegevoegd. Dit gelde in zowel Chrome en Firefox op desktop. Gelukkig wordt de localStorage nu altijd geupdate wanneer er een verandering komt in een van de inputs. Nu werkt de app wel helemaal op android chrome.

### Safari mobile
Op Safari had ik hetzelfde probleem als in android chrome. Het was hier wel wat moeilijker te debuggen aangezien ik niet veel tools had om mee te werken. Uiteindelijk kon ik door middel van browserstack een iphone emulaten en in de console checken wat er mis is. Zoals ik had verwacht werd de localStorage hier ook niet geupdate. Dit was dus makkelijk op te lossen sinds ik al met iets kwam tijdens het testen op chrome. Ik wou hier vooral kijken of als de gebruiker niet de alle informatie had ingevuld, dat dan de view automatisch wordt gescrolled naar de sectie die nog ingevuld moet worden. Gelukkig werkte dit goed en kreeg je ook een message wanneer de form wordt gestuurd.

## Feature Detection ❗

Door middel van localStorage zorg ik ervoor dat de waardes die de gebruiker invult in de form worden opgeslagen. Hierdoor kan de gebruiker terugkomen naar een form en doorgaan waar ze waren gebleven. Ik moet natuurlijk wel eerst checken of localStorage gesupport wordt. Dit doe ik door het volgende toe te passen:
```
function localStorageCheck() {
  const test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
```
Ik maak een variabel aan genaamd test, ik probeer deze toe te voegen in de localStorage. In het geval dit werkt, betekent het dat localStorage gesupport wordt, en returned de functie true. Zo niet zal de functie false returnen.

Wat de functie ook returned, dit gebruik ik dan in het volgende:
```
if (localStorageCheck() === true) {
  form.addEventListener("change", function (e) {
    if (e.target.type !== "submit") {
      localStorage.setItem(
        `${username}-${selectedForm}-${e.target.name}`,
        e.target.value
      );
    }
  });
  window.addEventListener("load", answers);
} else {
  console.log("no sir");
}
```
In het geval dat de functie true returned, betekent het dat localStorage werkt en er dan geluisterd wordt naar elke verandering in de form. Deze veranderingen worden dan toegevoegd aan localStorage. Als de functie false returned wordt dit dan niet uitgevoerd en gaat de applicatie verder zonder gebruik te maken van localStorage, sinds dit er niet is.

Dit is niet per se feature detection, maar de gedachte hoe ik mijn code had opgezet was wel zo. Ik heb er nu voor gezorgd dat de input range elements alleen gerendered worden in het geval er JS is. Ik voeg ze dus in Javascript toe aan de DOM. Ook in JS zorg ik ervoor dat de radio input elements display: none; krijg. Dus in het geval er geen JS is, zullen deze elementen geen display: none; krijgen en worden de radio range inputs niet gerendered.

Ongeacht het feit dat dit een edge case is, ging ik wel checken of er CSS is. Dit deed ik door middel van het volgende:
```
if (
  window.getComputedStyle(formSection).getPropertyValue("display") === "flex"
)
```
Ik check hier of de form display: flex heeft. Dit heb ik in de CSS toegevoegd, en in het geval dat dit true is, betekent het dat er wel CSS is. Wanneer dit het geval is voeg ik de input range elements toe aan de DOM, sinds er CSS is en de andere input radio elements display: none hebben.

Ik ging verder door mijn CSS heen kijken om te zien of er properties zijn die niet in elke browser wordt gesupport. Ik vond er namelijk twee. Het gebruik van vh en linear-gradient(). Door middel van @support {} check ik of deze properties werken op de browser die er momenteel wordt gebruikt. Als dit het geval is wordt de css binnen de @support {} gerunned. Zo niet is de CSS die er vooraf is gedefineerd toepasbaar:
```
@supports (
  background-image:
    linear-gradient(
      120deg,
      rgb(240, 238, 238) 0%,
      rgb(240, 238, 238) 50%,
      #001FFF 50%
    )
) 

@supports (height: 100vh) {
  body,
  .section-inlog {
    height: 100vh;
  }
}
```
## Opdracht 1
In opdracht 1 ging ik samen met mijn team kijken naar progressive enhancement. Dit is wat we vonden: https://max-hauser.github.io/browser-technologies-2021/Opdracht1/index.html

## Opdracht 2
Ik ga hier kijken naar Kleur en Custom fonts. Hiervoor ga ik een site gebruiken die ik zelf gemaakt heb tijdens mijn stage: https://debuurtontdekkers.nl/

### Custom fonts

Als eerst ging ik kijken naar custom fonts. In het algemeen is het niet bepaald makkelijk om custom fonts the blokkeren. De gebruiker moet meestal zelf handmatig een bepaalde font weg filteren via hun device. In het geval dat dit gebeurt is het verstandig om een back up font te hebben wanneer de custom font niet meer beschikbaar is. 

![img 1](https://github.com/lamartm/browser-technologies-2021/blob/master/img/1.PNG)

Je ziet hier rechtsboven dat ik een icon gebruik, wat in dit geval een IMG is. Ik had geen rekening gehouden dat de IMG misschien niet laadt. Daarom had ik ook geen backup font of iets soortgelijk voor wanneer dit gebeurt:

![img 2](https://github.com/lamartm/browser-technologies-2021/blob/master/img/2.PNG)

Verder heb ik er wel aan gedacht om een back up font te hebben als de custom font die ik gekozen heb niet gelaadt wordt op een systeem voor een of andere reden. 

![img 3](https://github.com/lamartm/browser-technologies-2021/blob/master/img/3.PNG)

Naar:

![img 4](https://github.com/lamartm/browser-technologies-2021/blob/master/img/4.PNG)

De font lijkt redelijk veel op de vorige, waardoor de stijl nog wat overeen met elkaar komt.

Custom fonts voegen wat leuks aan je site toe, maar in het geval dat de font niet geaccepteerd wordt, is het belangrijk om altijd een back up te hebben.

### Kleur

Met kleur moet je er altijd aan denken om nooit belangrijke content over te brengen met kleur. In het geval dat iemand kleurenblind is, en de verschillen niet kan merken, zullen ze de content niet begrijpen. Zo is het verschil van rood en groen voor veel mensen met kleurenblindheid niet te zien. Je wilt daarom dat je content altijd door iedereen te zien en te begrijpen is.

Ik heb gebruik gemaakt van de volgende tool om te kijken of de content uit de site leesbaar is voor mensen met kleurenblindheid: https://www.color-blindness.com/coblis-color-blindness-simulator/

Dit zijn de volgende screenshots die ik heb gebruikt om te kijken of het goed zit:

![img 5](https://github.com/lamartm/browser-technologies-2021/blob/master/img/5.PNG)

![img 6](https://github.com/lamartm/browser-technologies-2021/blob/master/img/6.PNG)

Zoals je kan zien, zijn er geen problemen te vinden met de gekozen kleuren qua kleurenblindheid:

![img 7](https://github.com/lamartm/browser-technologies-2021/blob/master/img/7.PNG)

![img 8](https://github.com/lamartm/browser-technologies-2021/blob/master/img/8.PNG)

Ik wou nog ook kijken of de contrast voldoende is door de volgende tool te gebruiken: https://contrastchecker.com/

De tekst op de gele achtergrond is hier niet goed genoeg qua contrast:

![img 9](https://github.com/lamartm/browser-technologies-2021/blob/master/img/9.PNG)



