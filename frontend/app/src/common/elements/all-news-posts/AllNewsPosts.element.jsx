import React from "react";
import { DigitLayout } from "@cthit/react-digit-components";
import NewsPost from "../news-post";

//TODO: Add img in markdown, not a hardcoded image
const dummyNews = [
  {
    title: "Alla hjärtans dag-firande",
    img: "/news_1.jpg",
    text:
      "Kom och mys med FikIT i Hubben 2.1 imorgon på Alla hjärtans dag!\n" +
      "\n" +
      "Vid lunch imorgon kommer vi i FikIT bjuda på hemmagjort fika i form av det mest kärleksfulla bakverket som finns: Kärleksmums! Så skynda er till Hubben, fikat räcker till de första 60 personerna.\n" +
      "\n" +
      "Varmt välkomna att fira Alla hjärtans dag med oss ♥\n" +
      "\n"
  },
  {
    title: "Badminton i Fjäderborgen!!",
    img: "/news_2.png",
    text:
      "För nästa fredagspass kommer vi återigen besöka fjäderborgen för att spela badminton. Ta gärna med er eget racket men ifall ni inte har något racket kommer vi ta med ett gäng racket att låna ut.\n" +
      "\n" +
      "Datum: 31/1 - fredag LV2\n" +
      "Tid: 15:30 - 17:30\n" +
      "Plats: Fjäderborgen, södra Viktoriagatan 44\n" +
      "Vi tänker gå från hubben kl 15:00 ifall ni vill hänga med. Om ni går direkt får ni gärna skriva till oss på FB eller slack.\n" +
      "\n" +
      "Vi kör på anmälan då vi har ett begränsat antal banor. Följ den här länken för att komma till\n" +
      "Formuläret: https://forms.gle/XPUVdF2TbX7bKT4C6\n" +
      "\n" +
      "Det kommer bli kul, men framförallt roligt!"
  },
  {
    title: "Pluggkväll med extra pannkakor",
    img: "/news_3.jpeg",
    text:
      "Nu på torsdag, 30/1, håller SnIT en pluggkväll. Kom och ät goda mackor! Denna kväll kommer vi även servera pannkakor som lovat! Kvällen håller på från 17 tills rimligt."
  },
  {
    title: "CM i Pingis!",
    img: "/news_4.png",
    text:
      "Nu har det blivit dags för CM i bordtennis och det är vi i frITid som kommer arrangera det! För att värma upp inför detta event kommer vi förstås ha pingis på fredag 21:a februari.\n" +
      "\n" +
      "Turneringen kommer att spelas i Ex-huset på Parkgatan 35 lägligt placerad precis bredvid Heden busstation. Närvarocheck vid sekretariatet öppnar vid kl 8:00 och matcherna börjar kl 09:00 på morgonen. Det kommer kosta 90:- per person.\n" +
      "\n" +
      "Turneringen är en singelturnering där vi kommer att använda oss av ett Monradsystem där man hela tiden möter motståndare som har lika många poäng som en själv(0 till 3 poäng per match). Man får då möta folk på ens egna nivå och alla får spela ungefär lika mycket. Turneringen kommer avslutas med ett slutspel där de fyra som samlat ihop flest poäng möter varandra i semifinal och sedan final för att utse en vinnare. Mer detaljerad information och regler kring turneringen finns att hitta på vårt Facebook event: FB-event\n" +
      "\n" +
      "Det kommer finns rack att låna vid behov men ta gärna med egna.\n" +
      "\n" +
      "Om man blir hungrig så finns det ett gatukök och en mataffär i närheten.\n" +
      "\n" +
      "Vi betalar kostnaden för alla som anmäler sig från IT och det är först i kvarn. Vi har fem garanterade platser och tar in fler ifall det får plats. Anmälan är bindande om du inte avanmäler dig till oss via fritid@chalmers.it åtminstone 8 dagar innan tävlingen (27 February). Anmälan sker senast den 27 februari på den länken nedan:\n" +
      "Anmälan här!"
  }
];

const AllNewsPosts = ({ news = dummyNews }) => {
  return (
    <DigitLayout.Size width={"800px"} minWidth={"300px"}>
      <DigitLayout.Column>
        {news.map(newsPost => (
          <NewsPost
            title={newsPost.title}
            img={newsPost.img}
            text={newsPost.text}
          />
        ))}
      </DigitLayout.Column>
    </DigitLayout.Size>
  );
};

export default AllNewsPosts;
