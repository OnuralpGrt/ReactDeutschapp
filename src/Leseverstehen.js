import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Alert, FormControlLabel, Radio, RadioGroup, FormControl, Checkbox } from '@mui/material';

const exercises = {
  A1: [
    {
      id: 1,
      title: "Martinas Familie",
      text: `Ich heiße Martina Schwarz und bin jetzt 19 Jahre alt. Ich bin Deutsche. Jetzt lerne ich in Madrid Spanisch. Madrid liegt in Spanien. Ich bin in Waiblingen geboren. Waiblingen liegt in der Nähe von Stuttgart. Stuttgart ist eine Stadt in Süddeutschland. Sie ist sehr schön. 

Meine Eltern heißen Herbert und Maria. Mein Vater ist Bankkaufmann von Beruf und ist jetzt 47 Jahre alt. Meine Mutter ist Lehrerin und ist 44. Ich habe drei Geschwister, eine Schwester und zwei Brüder. Meine Schwester heißt Sigrid und ist erst 12. Sie geht noch zur Schule. Mein kleiner Bruder ist 17. Er macht jetzt sein Abitur. Mein großer Bruder ist schon 21. Er studiert in München. 

Ich habe eine Tante. Sie heißt Helga und wohnt in Bonn. Sie hat eine kleine Tochter. Das ist meine Cousine. Mein Onkel heißt Fritz. Er ist Mechaniker. Er ist auch verheiratet, aber er hat keine Kinder. Mein Großvater und meine Großmutter wohnen in Freiburg. Sie sind 66 und 62 Jahre alt.`,
      type: "open_ended_quiz",
      questions: [
        {
          question: "Wie alt ist Martina?",
          answer: "Martina ist 19 Jahre alt.",
          hint: "Metinde Martina'nın yaşını bulun."
        },
        {
          question: "Wo ist sie geboren?",
          answer: "Martina ist in Waiblingen geboren.",
          hint: "Doğum yeri Waiblingen."
        },
        {
          question: "Wo liegt Waiblingen?",
          answer: "Waiblingen liegt in der Nähe von Stuttgart.",
          hint: "Waiblingen'in konumunu metinde arayın."
        },
        {
          question: "Was ist ihr Vater von Beruf?",
          answer: "Ihr Vater ist Bankkaufmann.",
          hint: "Babanın mesleğini metinde bulun."
        },
        {
          question: "Wie viele Geschwister hat sie?",
          answer: "Sie hat drei Geschwister.",
          hint: "Kardeş sayısını metinde arayın."
        },
        {
          question: "Wo wohnt ihre Tante?",
          answer: "Ihre Tante wohnt in Bonn.",
          hint: "Teyzenin yaşadığı şehri bulun."
        },
        {
          question: "Ist ihr Onkel verheiratet?",
          answer: "Ja, ihr Onkel ist verheiratet.",
          hint: "Amcanın evli olup olmadığını kontrol edin."
        },
        {
          question: "Wie alt sind ihre Großeltern?",
          answer: "Sie sind 66 und 62 Jahre alt.",
          hint: "Büyükanne ve büyükbabanın yaşlarını metinde arayın."
        }
      ]
    },
    {
      id: 2,
      title: "Krankmeldung",
      text: `Betreff: Krankmeldung

Liebe Frau Schmidt,

leider bin ich krank. Ich habe eine Erkältung und Fieber.
Der Arzt hat mir ein Rezept geschrieben.
Ich muss zwei Tage im Bett bleiben und Medikamente nehmen.
Dann werde ich wieder gesund.
Könnte Herr Meier meine Arbeit im Büro übernehmen?
Ich habe der Chefin Bescheid gegeben.
Bei Fragen bin ich telefonisch erreichbar.

Viele Grüße
Anna Müller`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Anna ist erkältet und hat Fieber.",
          answer: "richtig",
          hint: "Metinde Anna'nın sağlık durumunu kontrol edin."
        },
        {
          question: "Anna darf am nächsten Tag zur Arbeit gehen.",
          answer: "falsch",
          hint: "Anna'nın ne kadar süre dinlenmesi gerektiğine bakın."
        },
        {
          question: "Herr Meier soll der Chefin Bescheid geben.",
          answer: "falsch",
          hint: "Kimin kime haber verdiğini kontrol edin."
        },
        {
          question: "Anna kann man bei Fragen anrufen.",
          answer: "richtig",
          hint: "Anna'nın iletişim bilgilerini kontrol edin."
        }
      ]
    },
    {
      id: 3,
      title: "WG-Zimmer frei!",
      text: `WG-Zimmer frei!

Hallo,
wir suchen einen neuen Mitbewohner oder eine neue Mitbewohnerin!
Unser WG-Zimmer ist 15 m² groß und kostet 400 Euro im Monat. Die Wohnung ist in der Stadtmitte. Es gibt eine Küche, ein Bad und ein Wohnzimmer.
Wir sind zwei Studenten und sehr freundlich.
Wir suchen eine Person, die:
ordentlich ist,
ruhig ist,
und gerne zusammen kocht oder spricht.

Rauchen ist in der Wohnung nicht erlaubt. Haustiere sind leider auch nicht erlaubt.
Wenn du Interesse hast, schreib uns bitte eine E-Mail!
Wir freuen uns auf dich!`,
      tasks: [
        {
          type: "multiple_choice",
          title: "Aufgabe 1: Lesen Sie die obige Anzeige. Was erfahren Sie aus der Anzeige? (Es sind mehrere Antworten richtig!)",
          questions: [
            {
              question: "Das Zimmer kostet 500 Euro monatlich.",
              answer: false,
              hint: "Kira miktarını kontrol edin."
            },
            {
              question: "Die Wohnung liegt zentral.",
              answer: true,
              hint: "Evin konumunu kontrol edin."
            },
            {
              question: "Die WG hat eine Küche und ein Wohnzimmer.",
              answer: true,
              hint: "Ortak alanları kontrol edin."
            },
            {
              question: "Haustiere sind erlaubt.",
              answer: false,
              hint: "Evcil hayvan kurallarını kontrol edin."
            },
            {
              question: "Die Mitbewohner sind Studenten.",
              answer: true,
              hint: "Ev arkadaşlarının mesleklerini kontrol edin."
            },
            {
              question: "Rauchen ist erlaubt.",
              answer: false,
              hint: "Sigara içme kurallarını kontrol edin."
            }
          ]
        },
        {
          type: "open_ended",
          title: "Aufgabe 2: Lesen Sie die Anzeige noch einmal. Beantworten Sie folgende Fragen in vollständigen Sätzen.",
          questions: [
            {
              question: "Wie hoch ist die Miete monatlich?",
              answer: "Die Miete ist 400 Euro im Monat.",
              hint: "Aylık kira miktarını bulun."
            },
            {
              question: "Wie groß ist das Zimmer?",
              answer: "Das Zimmer ist 15 Quadratmeter groß.",
              hint: "Odanın büyüklüğünü kontrol edin."
            },
            {
              question: "Wo liegt die Wohnung?",
              answer: "Die Wohnung liegt in der Stadtmitte.",
              hint: "Evin konumunu bulun."
            },
            {
              question: "Wie viele gemeinsame Räume gibt es?",
              answer: "Es gibt drei gemeinsame Räume: eine Küche, ein Bad und ein Wohnzimmer.",
              hint: "Ortak alanları sayın."
            },
            {
              question: "Was machen die Mitbewohner beruflich?",
              answer: "Die Mitbewohner sind Studenten.",
              hint: "Ev arkadaşlarının mesleklerini kontrol edin."
            },
            {
              question: "Was für eine Person soll der neue Mitbewohner sein?",
              answer: "Der neue Mitbewohner soll ordentlich und ruhig sein. Er soll gern kochen und sprechen.",
              hint: "Yeni ev arkadaşından beklenen özellikleri bulun."
            },
            {
              question: "Was ist in der Wohnung verboten?",
              answer: "Rauchen und Haustiere sind in der Wohnung verboten.",
              hint: "Evde yasaklı olan şeyleri kontrol edin."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Marco lernt Deutsch",
      text: `Ich heiße Marco und komme aus Italien. Ich bin 27 Jahre alt und lebe in Italien, aber jetzt bin ich schon etwa vier Monate in Deutschland, in Berlin. Ich bin ein Student und mache gleichzeitig Musik mit der Gruppe "SOWIESO". Musik machen ist nur mein Hobby.
Die Gruppe ist aus Deutschland, aber nur ich bin aus dem Ausland. Ich kenne sie schon seit fünf Jahren.Ich lebe mit dem Schlagzeuger zusammen. Er heißt Max. Max studiert nicht . Er arbeitet als Mechaniker. Er verdient also schon Geld und deshalb bezahlt er die Miete. Ich möchte eigentlich auch  Geld geben, aber er sagt:"Später!"
Wir möchten zusammen  deutsche Musik machen. Deshalb lerne ich gerade Deutsch. Ich singe und möchte auch Lyrics schreiben. Ich schreibe gerne. Ich mache jeden Tag von 10.00 Uhr bis 12.00 Uhr einen Sprachkurs .Ich kann schon ein Buch auf Deutsch lesen. Natürlich ist es sehr leicht.Ich mache auch oft Fehler . Dann verbessern meine Freunde die Fehler. So lerne ich auch gut. In fünf Monaten möchten wir ein Konzert an der Universität Berlin geben. Nicht nur Rock- Musik auf Englisch ,sondern auch Deutsche Musik   möchten wir dann spielen . Ich möchte auch gut auf Deutsch singen. Damit sind auch die Zuschauer zufrieden. Oder nicht?`,
      type: "multiple_choice_quiz",
      questions: [
        {
          question: "Woher kommt Marco?",
          options: ["Berlin", "Spanien", "Deutschland", "Italien"],
          answer: 3,
          hint: "Marco'nun geldiği ülkeyi bulun."
        },
        {
          question: "Wie lange ist er in Berlin?",
          options: ["27 Jahre", "vier Monate", "ungefähr vier Monate", "vier Jahre"],
          answer: 2,
          hint: "Berlin'de ne kadar süredir olduğunu kontrol edin."
        },
        {
          question: "Was ist er von Beruf?",
          options: ["Mechaniker", "Student", "Schüler", "Musiker"],
          answer: 1,
          hint: "Marco'nun mesleğini bulun."
        },
        {
          question: "Wer verdient Geld?",
          options: ["Marco", "Marcos Freunde", "die Gruppe", "Max"],
          answer: 3,
          hint: "Para kazanan kişiyi bulun."
        },
        {
          question: "Welche Sprache lernt er?",
          options: ["Englisch", "Italienisch", "Deutsch und Englisch", "Deutsch"],
          answer: 3,
          hint: "Marco'nun öğrendiği dili bulun."
        },
        {
          question: "Welche Musikart möchte die Gruppe machen?",
          options: ["Volksmusik", "Rock-Musik", "Deutsche Musik", "Englische Musik"],
          answer: 2,
          hint: "Grubun yapmak istediği müzik türünü bulun."
        },
        {
          question: "Wie lange macht er den Sprachkurs pro Tag?",
          options: ["zwei Stunden", "jeden Tag", "zwei Tage", "drei Stunden"],
          answer: 0,
          hint: "Günlük dil kursu süresini kontrol edin."
        },
        {
          question: "Was verbessern seine Freunde?",
          options: ["Texte", "Briefe", "Fehler", "Musik"],
          answer: 2,
          hint: "Arkadaşlarının düzelttiği şeyi bulun."
        },
        {
          question: "Muss die Gruppe ein Interview machen?",
          options: ["Natürlich", "Nein", "Doch", "Ja"],
          answer: 1,
          hint: "Metinde röportaj yapma zorunluluğu var mı kontrol edin."
        },
        {
          question: "Marco möchte gut auf Deutsch singen,denn er spricht gerne Deutsch?",
          options: ["Doch", "Nie", "Nein", "Ja"],
          answer: 2,
          hint: "Marco'nun Almanca konuşma isteğini kontrol edin."
        }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Endlich bin ich fit",
      text: `Früher habe ich mich zu dick gefühlt. Ich konnte keine engen Klamotten tragen. Bei einem Einkaufsbummel hat mal eine Freundin zu mir gesagt: "Das kannst du nicht anziehen,dazu bist du zu dick."Das hat mich total getroffen. Ich habe angefangen abzunehmen.Ich habe keine Schokolade,sondern Obst gegessen.Süße Limonade habe ich auch nicht mehr getrunken.Nach 18 Uhr habe ich gar nichts mehr gegessen.Dazu habe ich regelmäßig Sport getrieben.In eineinhalb Jahren habe ich so ungefähr 15 Kilo abgenommen.Weil es mit der Diät so gut geklappt hat,habe ich immer weiter gemacht.Bis meine Mutter sagte,"jetzt reicht es."
Sie hatte Angst, weil sie geglaubt hat, ich bin magersüchtig  und hat mich zu einem Arzt geschickt.Der Arzt hat mir gesagt,ich soll mehr Kohlenhydrate essen.Doch vier Brötchen zum Frühstück schaffe ich einfach nicht. Ich esse seitdem normal.Jezt wiege ich 53 Kilo bei 1,77 Meter Größe.Einmal in der Woche kontrolliere ich mein GewichtWenn ich drei bis vier Kilo zunehme,fange ich wieder mit einer Diät an.Einige meiner Freunde sagen jetzt,"du bist zu dünn und magersüchtig!"Ich finde das nicht.Ich beneide sie,weil sie essen können,was sie wollen.Ich sitze immer nur daneben und kann nichts essen.Ich fühle mich außerdem jetzt auch besser.Ich bin selbstbewußter geworden,auch im Umgang mit Jungen.Wenn man dünner ist , hat man mehr Freunde.Wenn man einen starken Charakter hat,kann man so aussehen, wie man will.Aber das ist doch wohl selten. Ich kenne jedenfalls nicht viele Dicke,die sagen,"Ich bin zufrieden mit meinem Gewicht!"`,
      type: "ja_nein_quiz",
      questions: [
        {
          question: "Fühlte sich die Person früher zu dick?",
          answer: "ja",
          hint: "Metnin başında kişinin kendini nasıl hissettiğini kontrol edin."
        },
        {
          question: "Konnte die Person enge Klamotten tragen?",
          answer: "nein",
          hint: "Dar kıyafet giyme durumunu kontrol edin."
        },
        {
          question: "Sagte eine Freundin zu ihr, dass sie auch enge Kleidungen anziehen kann?",
          answer: "nein",
          hint: "Arkadaşının söylediği sözü kontrol edin."
        },
        {
          question: "Hat die Bemerkung der Freundin sie getroffen?",
          answer: "ja",
          hint: "Arkadaşının sözünün etkisini kontrol edin."
        },
        {
          question: "Hat die Person mit dem Abnehmen begonnen?",
          answer: "ja",
          hint: "Kilo vermeye başlama durumunu kontrol edin."
        },
        {
          question: "Hat sie Schokolade gegessen, während sie abgenommen hat?",
          answer: "nein",
          hint: "Kilo verirken çikolata yeme durumunu kontrol edin."
        },
        {
          question: "Hat sie nach 18 Uhr nichts mehr gegessen?",
          answer: "nein",
          hint: "Akşam 18'den sonra yemek yeme durumunu kontrol edin."
        },
        {
          question: "Hat sie auch Sport getrieben?",
          answer: "ja",
          hint: "Spor yapma durumunu kontrol edin."
        },
        {
          question: "Hat sie in eineinhalb Jahren über 15 Kilo abgenommen?",
          answer: "nein",
          hint: "Bir buçuk yılda verdiği kilo miktarını kontrol edin."
        },
        {
          question: "Hat der Arzt ihr geraten, mehr Kohlenhydrate zu essen?",
          answer: "ja",
          hint: "Doktorun tavsiyesini kontrol edin."
        },
        {
          question: "Kann sie vier Brötchen zum Frühstück essen?",
          answer: "nein",
          hint: "Kahvaltıda ekmek yeme durumunu kontrol edin."
        },
        {
          question: "Wiegt sie jetzt 53 Kilo?",
          answer: "ja",
          hint: "Şu anki kilosunu kontrol edin."
        },
        {
          question: "Finden einige Freunde, dass sie immer noch dick ist?",
          answer: "nein",
          hint: "Arkadaşlarının onun hakkındaki düşüncelerini kontrol edin."
        },
        {
          question: "Denkt sie, dass ihre Freunde einen stärkeren Charakter haben als sie?",
          answer: "nein",
          hint: "Arkadaşlarının karakteri hakkındaki düşüncelerini kontrol edin."
        },
        {
          question: "Hat sie viele dicke Freunde, die mit ihrem Übergewicht zufrieden sind?",
          answer: "nein",
          hint: "Şişman ve kilosundan memnun arkadaşları olup olmadığını kontrol edin."
        }
      ]
    },
    {
      id: 2,
      title: "Mein erster Tag in einer neuen Stadt",
      text: `Mein erster Tag in einer neuen Stadt
von Tom, Reiseblogger und Influencer

Hallo! Ich heiße Tom und ich reise sehr viel. Auf meinem Blog und auf Instagram berichte ich über meine Abenteuer. Heute erzähle ich euch, wie ich den ersten Tag in einer neuen Stadt verbringe.

Wenn ich ankomme, gehe ich zuerst spazieren. Ich nehme kein Taxi und keine U-Bahn. Zu Fuß sehe ich mehr von der Stadt. Ich suche einen Park oder einen schönen Platz. Dort setze ich mich kurz hin und beobachte die Menschen. So bekomme ich ein erstes Gefühl für die Stadt.

Danach esse ich in einem kleinen Restaurant oder Café. Ich frage die Kellner, was typisch für die Stadt ist. Meistens haben sie gute Tipps!

Am Nachmittag mache ich eine Stadtführung. Oft gibt es kostenlose Führungen. Ein Guide erklärt wichtige Orte und erzählt Geschichten. So lerne ich viel über die Kultur und die Geschichte.

Hier sind meine drei goldenen Tipps für euren ersten Tag:
Lauft viel zu Fuß! Ihr entdeckt kleine Straßen und schöne Plätze.

Fragt die Einheimischen nach Empfehlungen! Sie kennen die besten Orte.

Nehmt euch Zeit! Rennt nicht von einer Sehenswürdigkeit zur nächsten!

So wird euer erster Tag in einer neuen Stadt ein echtes Abenteuer!`,
      type: "matching_quiz",
      questions: [
        {
          statement: "Tom geht zu Fuß durch die Stadt, wenn er ankommt.",
          options: [
            "Warum fährt Tom gleich Taxi?",
            "Was macht Tom nach seiner Ankunft?",
            "Wohin fliegt Tom zuerst?"
          ],
          answer: 1,
          hint: "Tom'un şehre vardığında ne yaptığını kontrol edin."
        },
        {
          statement: "Tom setzt sich in einen Park oder auf einen Platz.",
          options: [
            "Wo übernachtet Tom in der neuen Stadt?",
            "Wo bekommt er den ersten Eindruck von der Stadt?",
            "Wo entspannt sich Tom am Anfang?"
          ],
          answer: [1, 2],
          hint: "Tom'un şehir hakkında ilk izlenimini nerede edindiğini kontrol edin."
        },
        {
          statement: "Tom isst in kleinen Restaurants oder Cafés.",
          options: [
            "Wo isst Tom am ersten Tag?",
            "Was kocht Tom am ersten Tag?",
            "Was trinkt Tom unterwegs?"
          ],
          answer: 0,
          hint: "Tom'un ilk gün nerede yemek yediğini kontrol edin."
        },
        {
          statement: "Tom fragt Kellner nach typischen Gerichten.",
          options: [
            "Wen fragt Tom nach einem Stadtplan?",
            "Wen fragt Tom nach Essenstipps?",
            "Wie erfährt Tom die Spezialitäten der Stadt?"
          ],
          answer: [1, 2],
          hint: "Tom'un yemek önerilerini kimden aldığını kontrol edin."
        },
        {
          statement: "Tom nimmt oft an kostenlosen Stadtführungen teil.",
          options: [
            "An welchen Touren beteiligt sich Tom oft?",
            "Welche Museen besucht Tom am ersten Tag?",
            "Welche Busse benutzt Tom für die Stadtrundfahrt?"
          ],
          answer: 0,
          hint: "Tom'un hangi turlara katıldığını kontrol edin."
        },
        {
          statement: "Tom rät, zu Fuß durch die Stadt zu gehen.",
          options: [
            "Was rät Tom für einen entspannten Abend?",
            "Was empfiehlt Tom für die erste Stadterkundung?",
            "Was schlägt Tom für eine Reise ans Meer vor?"
          ],
          answer: 1,
          hint: "Tom'un şehri keşfetmek için ne önerdiğini kontrol edin."
        },
        {
          statement: "Tom meint, man soll sich am ersten Tag Zeit lassen.",
          options: [
            "Was sagt Tom über das Tempo am ersten Tag?",
            "Was sagt Tom über die Hotels in der Stadt?",
            "Welchen Tipp gibt Tom über die Sehenswürdigkeiten der Stadt?"
          ],
          answer: 0,
          hint: "Tom'un ilk gün için tempo hakkında ne söylediğini kontrol edin."
        }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Weltmeister im Datenschutz",
      text: `Weltmeister im Datenschutz

Seit einigen Jahren gibt es in Europa einen besonderen Schutz für persönliche Daten. Die Datenschutz-Grundverordnung (DSGVO) sorgt dafür, dass Firmen und Organisationen vorsichtig mit unseren Informationen umgehen. Dazu gehören zum Beispiel Name, Adresse, Telefonnummer oder E-Mail.

Eine Firma darf diese Daten nur benutzen, wenn die Person vorher zugestimmt hat. Außerdem muss die Firma erklären, warum sie die Daten sammelt und wie lange sie sie speichert. Das Ziel ist, die Privatsphäre jedes Menschen zu schützen.

Die Regeln gelten in allen Ländern der Europäischen Union. Besonders im Internet ist der Datenschutz wichtig. Viele Webseiten fragen heute, ob man mit der Nutzung von Cookies einverstanden ist. Cookies speichern Informationen über das Verhalten im Internet.

Nicht alle Menschen wissen, wie sie ihre Daten schützen können. Starke Passwörter, sichere Internetseiten und Vorsicht beim Teilen von Informationen sind wichtige Schritte. So kann jeder selbst zur Datensicherheit beitragen.`,
      type: "multiple_choice_quiz",
      questions: [
        {
          question: "Was ist die Datenschutz-Grundverordnung (DSGVO)?",
          options: [
            "Eine App zum Schutz von Handys.",
            "Ein Gesetz in Europa zum Schutz persönlicher Daten.",
            "Ein Programm für Firmen zur Datenspeicherung."
          ],
          answer: 1,
          hint: "DSGVO'nun ne olduğunu metnin başında arayın."
        },
        {
          question: "Was darf eine Firma mit persönlichen Daten machen?",
          options: [
            "Sie darf alles ohne Zustimmung speichern.",
            "Sie darf sie nur mit Zustimmung nutzen.",
            "Sie darf Daten verkaufen, wenn sie will."
          ],
          answer: 1,
          hint: "Firmaların kişisel verilerle ne yapabileceğini kontrol edin."
        },
        {
          question: "Was ist ein Cookie?",
          options: [
            "Ein kleines Geschenk von der Firma.",
            "Ein Programm, das Passwörter erstellt.",
            "Eine Datei, die Informationen über das Surfverhalten speichert."
          ],
          answer: 2,
          hint: "Cookie'nin ne olduğunu metinde arayın."
        },
        {
          question: "Was kann jeder Mensch tun, um Daten zu schützen?",
          options: [
            "Keine E-Mails mehr schreiben.",
            "Informationen nur auf Papier speichern.",
            "Starke Passwörter benutzen und vorsichtig im Internet sein."
          ],
          answer: 2,
          hint: "Kişisel verileri korumak için yapılabilecekleri kontrol edin."
        },
        {
          question: "Warum gibt es die DSGVO in der EU?",
          options: [
            "Um Werbung besser zu machen.",
            "Um Daten von Menschen zu schützen.",
            "Um Firmen beim Datensammeln zu helfen."
          ],
          answer: 1,
          hint: "DSGVO'nun amacını metinde arayın."
        }
      ]
    },
    {
      id: 2,
      title: "Ein Spannendes Abenteuer am Strand",
      text: `Ein Spannendes Abenteuer am Strand

Es war ein heißer Sommertag, und die Freunde Mia, Leon und Sara beschlossen, zum Strand zu gehen. Sie packten ihre Rucksäcke mit Snacks, Handtüchern und Sonnencreme. Am Strand angekommen, sprangen sie sofort ins Wasser. Die Wellen waren groß und machten viel Spaß!

Nach dem Schwimmen entdeckten sie eine geheimnisvolle Höhle in den Felsen. "Lass uns hineingehen!", rief Leon aufgeregt. Vorsichtig schlichen sie zur Höhle und schalteten ihre Taschenlampen ein. Drinnen war es dunkel und kühl. Plötzlich hörten sie ein Geräusch! Es war nur ein kleiner Vogel, der in der Ecke saß.

Die Freunde lachten erleichtert und erkundeten die Höhle weiter. Sie fanden viele interessante Steine und Muscheln. Nach einer Weile verließen sie die Höhle und setzten sich auf den Sand, um ihre Schätze zu zeigen. Der Tag endete mit einem wunderschönen Sonnenuntergang, während sie Geschichten erzählten und Pläne für das nächste Abenteuer schmiedeten.`,
      type: "open_ended_quiz",
      questions: [
        {
          question: "Wer sind die Hauptpersonen im Text?",
          answer: "Mia, Leon und Sara.",
          hint: "Metinde bahsedilen arkadaşların isimlerini bulun."
        },
        {
          question: "Was haben die Freunde zuerst am Strand gemacht?",
          answer: "Sie sind sofort ins Wasser gesprungen.",
          hint: "Arkadaşların sahile vardıklarında ilk yaptıkları şeyi bulun."
        },
        {
          question: "Was haben sie in den Felsen entdeckt?",
          answer: "Eine geheimnisvolle Höhle.",
          hint: "Kayalıklarda buldukları şeyi kontrol edin."
        },
        {
          question: "Was hörten sie in der Höhle?",
          answer: "Ein Geräusch von einem kleinen Vogel.",
          hint: "Mağarada duydukları sesin ne olduğunu bulun."
        },
        {
          question: "Warum setzten sie sich auf den Sand?",
          answer: "Weil sie ihre Schätze zeigen wollen.",
          hint: "Kumda oturma nedenlerini kontrol edin."
        }
      ]
    },
    {
      id: 3,
      title: "Meine erste schlechte Erfahrung beim Online-Shopping",
      text: `Meine erste schlechte Erfahrung beim Online-Shopping

Hallo zusammen,
ich bestelle oft Dinge im Internet und hatte bisher nie Probleme. Vor einiger Zeit habe ich aber leider eine schlechte Erfahrung gemacht. Ich habe einen neuen Online-Shop entdeckt, der mit sehr günstiger Kleidung geworben hat. Es gab dort großartige Angebote für T-Shirts und Jacken. Um dort etwas zu bestellen, musste ich ein Kundenkonto anlegen und meine persönlichen Daten eingeben.

Ich entschied mich für eine Jacke, die nur 29,90 Euro gekostet hat und habe sie bestellt. Einen Tag später bekam ich eine E-Mail mit zwei Rechnungen: eine für die Jacke und eine weitere über 96 Euro für ein angebliches Abo. In der Nachricht stand, ich hätte einen Abonnementvertrag abgeschlossen und müsse den Betrag überweisen.

Ich war überrascht, weil ich nie ein Abo abgeschlossen habe. Also schrieb ich sofort zurück und erklärte, dass ich nur die Jacke kaufen wollte. Leider bekam ich keine Antwort. Ein paar Wochen später kam eine Mahnung. Ich versuchte es telefonisch, aber es ging nur ein Anrufbeantworter ran. Noch später erhielt ich eine zweite Mahnung – diesmal mit Mahngebühren.

Erst als ich schrieb, dass ich rechtliche Schritte prüfen würde, hörte ich nichts mehr von dem Shop. Ich war erleichtert, aber gleichzeitig auch sehr vorsichtig geworden. Seitdem bestelle ich nur noch bei bekannten Online-Shops, bei denen ich gute Erfahrungen gemacht habe.

Mein Tipp an euch: Lest euch vor einer Bestellung immer alles genau durch. Prüft, ob der Shop seriös ist und schaut euch Bewertungen von anderen Kunden an. So kann man sich viel Ärger sparen.

Viele Grüße
Tim`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Tim hat zum ersten Mal online eingekauft.",
          answer: "falsch",
          hint: "Tim'in daha önce online alışveriş yapıp yapmadığını kontrol edin."
        },
        {
          question: "Tim hat versehentlich ein Abo abgeschlossen.",
          answer: "falsch",
          hint: "Tim'in abonelik sözleşmesi imzalayıp imzalamadığını kontrol edin."
        },
        {
          question: "Der Kundenservice des Shops hat Tim sehr gut geholfen.",
          answer: "falsch",
          hint: "Müşteri hizmetlerinin Tim'e yardım edip etmediğini kontrol edin."
        },
        {
          question: "Tim hat auf seine erste E-Mail keine Antwort bekommen.",
          answer: "richtig",
          hint: "Tim'in e-postasına cevap gelip gelmediğini kontrol edin."
        },
        {
          question: "Tim hat sich schließlich mit einem Anwalt beraten.",
          answer: "falsch",
          hint: "Tim'in avukatla görüşüp görüşmediğini kontrol edin."
        },
        {
          question: "Seit dieser Erfahrung prüft Tim Online-Shops genauer.",
          answer: "richtig",
          hint: "Tim'in artık online mağazaları daha dikkatli kontrol edip etmediğini bulun."
        }
      ]
    },
    {
      id: 4,
      title: "Studie: Computerspiele halten Kinder nicht vom Lesen ab",
      text: `Studie: Computerspiele halten Kinder nicht vom Lesen ab 
Berlin (AFP) 

Computerspiele sind laut einer Studie entgegen bisheriger Annahmen kein Hindernis für das Leseverhalten von Kindern und Jugendlichen. Diejenigen, die viel vor dem Computer sitzen, würden auch viel lesen, sagte Bodo Franzmann von der Stiftung Lesen am Donnerstag im Deutschlandradio Berlin unter Berufung auf eine repräsentative Studie seines Hauses. Schnelles Lesen sei eine Grundvoraussetzung für den EDV-Gebrauch, sagte der Leseforscher. "Der Computer ist eigentlich ein Lesemedium." Es komme allerdings auf die sorgfältige Auswahl der Computerspiele durch die Eltern an.

Ein Problem seien solche Spiele dann, wenn Kinder sich ausschließlich damit beschäftigten und Eltern sich nicht darum kümmerten, betonte er. Es sei gravierend, dass in der PISA-Studie 42 Prozent der deutschen Jugendlichen gesagt hätten, dass sie nicht gerne läsen. "Und es ist auch gar nicht von der Hand zu weisen, dass das Medienangebot, das den Jugendlichen insgesamt zur Verfügung steht, etwas damit zu tun hat", sagte Franzmann. 

Eine Sucht nach Computerspielen kann laut Franzmann dann entstehen, wenn Eltern ihren Kindern keine Geschichten vorlesen und keine interessanten Bücher geben. Dies sei aber nicht den Spielen anzulasten, sondern eine Frage des schlechten Umgangs mit dem Medium Computerspiel.`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Laut der Studie haben Computerspiele negative Auswirkungen auf das Leseverhalten von Kindern und Jugendlichen.",
          answer: "falsch",
          hint: "Çalışmanın bilgisayar oyunlarının okuma alışkanlığı üzerindeki etkisi hakkında ne söylediğini kontrol edin."
        },
        {
          question: "Bodo Franzmann behauptet, dass viel Computernutzung mit viel Lesen einhergeht.",
          answer: "richtig",
          hint: "Bodo Franzmann'ın bilgisayar kullanımı ve okuma alışkanlığı arasındaki ilişki hakkındaki görüşünü kontrol edin."
        },
        {
          question: "Schnelles Lesen wird als irrelevant für den Gebrauch von EDV angesehen.",
          answer: "falsch",
          hint: "Hızlı okumanın bilgisayar kullanımı için önemini kontrol edin."
        },
        {
          question: "Die Auswahl der Computerspiele durch die Eltern hat keinen Einfluss auf das Leseverhalten der Kinder.",
          answer: "falsch",
          hint: "Ebeveynlerin bilgisayar oyunu seçiminin çocukların okuma alışkanlığı üzerindeki etkisini kontrol edin."
        },
        {
          question: "42 Prozent der deutschen Jugendlichen geben an, dass sie gerne lesen.",
          answer: "falsch",
          hint: "PISA çalışmasında Alman gençlerinin okuma alışkanlıkları hakkında ne söylediklerini kontrol edin."
        },
        {
          question: "Eine Sucht nach Computerspielen kann entstehen, wenn Eltern ihren Kindern keine Bücher zur Verfügung stellen.",
          answer: "richtig",
          hint: "Bilgisayar oyunu bağımlılığının nasıl oluşabileceğini kontrol edin."
        },
        {
          question: "Franzmann sieht die Computerspiele als die Hauptursache für die Leseflaute bei Jugendlichen.",
          answer: "falsch",
          hint: "Franzmann'ın gençlerdeki okuma isteksizliğinin ana nedeni hakkındaki görüşünü kontrol edin."
        },
        {
          question: "Der schlechte Umgang mit dem Medium Computerspiel kann das Leseverhalten der Kinder beeinflussen.",
          answer: "richtig",
          hint: "Bilgisayar oyunlarıyla kötü etkileşimin çocukların okuma alışkanlığı üzerindeki etkisini kontrol edin."
        }
      ]
    },
    {
      id: 5,
      title: "Strom aus der Sonne",
      text: `Strom aus der Sonne

Immer mehr Menschen interessieren sich für umweltfreundliche Energie. Eine besonders beliebte Möglichkeit ist die Nutzung von Sonnenenergie. Dafür braucht man Solarmodule, die auf dem Dach oder auf freien Flächen installiert werden. Sie sammeln das Licht der Sonne und machen daraus Strom.

Ein Team aus jungen Forscherinnen und Forschern hat in Deutschland ein neues Projekt gestartet. Ihr Ziel ist es, kleine Häuser komplett mit Solarstrom zu versorgen – also ohne Strom aus dem Kraftwerk. Das ist gut für die Umwelt, denn so werden keine schädlichen Gase produziert.

Natürlich gibt es auch Nachteile: Wenn das Wetter schlecht ist, gibt es weniger Strom. Deshalb speichern die Häuser den Strom in Batterien für Regentage. Das Projekt ist noch neu, aber viele finden die Idee spannend. Vielleicht wird so in Zukunft ein großer Teil unserer Energie erzeugt.`,
      tasks: [
        {
          type: "richtig_falsch_quiz",
          title: "Aufgabe 1: Richtig oder falsch?",
          questions: [
            {
              question: "Man kann mit Sonnenlicht Strom erzeugen.",
              answer: "richtig",
              hint: "Güneş ışığından elektrik üretilip üretilemeyeceğini kontrol edin."
            },
            {
              question: "Nur große Kraftwerke können Sonnenenergie nutzen.",
              answer: "falsch",
              hint: "Güneş enerjisinin sadece büyük santraller tarafından kullanılıp kullanılamayacağını kontrol edin."
            },
            {
              question: "Solarmodule funktionieren nur bei Regen.",
              answer: "falsch",
              hint: "Güneş panellerinin sadece yağmurlu havalarda çalışıp çalışmadığını kontrol edin."
            },
            {
              question: "Junge Forscher arbeiten an einem neuen Projekt.",
              answer: "richtig",
              hint: "Genç araştırmacıların yeni bir proje üzerinde çalışıp çalışmadığını kontrol edin."
            },
            {
              question: "Das Projekt will Strom ohne Stromspeicher erzeugen.",
              answer: "falsch",
              hint: "Projenin elektrik depolama olmadan elektrik üretmeyi hedefleyip hedeflemediğini kontrol edin."
            }
          ]
        },
        {
          type: "multiple_choice_quiz",
          title: "Aufgabe 2: Wähle den richtigen Satz",
          questions: [
            {
              question: "Frage 1:",
              options: [
                "Solaranlagen funktionieren nur im Winter.",
                "Sonnenenergie ist eine umweltfreundliche Stromquelle.",
                "Ohne Strom kann man keine Kleidung tragen."
              ],
              answer: 1,
              hint: "Güneş enerjisinin çevre dostu olup olmadığını kontrol edin."
            },
            {
              question: "Frage 2:",
              options: [
                "Batterien speichern Strom für Zeiten ohne Sonne.",
                "Sonnenenergie funktioniert nur mit Windrädern.",
                "Solarmodule werden immer im Keller installiert."
              ],
              answer: 0,
              hint: "Pillerin güneş olmadığı zamanlar için elektrik depolayıp depolamadığını kontrol edin."
            },
            {
              question: "Frage 3:",
              options: [
                "Solaranlagen verursachen sehr viele Abgase.",
                "Sonnenlicht kann Strom erzeugen.",
                "Ohne Regen gibt es keinen Strom aus Solaranlagen."
              ],
              answer: 1,
              hint: "Güneş ışığının elektrik üretip üretemeyeceğini kontrol edin."
            },
            {
              question: "Frage 4:",
              options: [
                "Solaranlagen machen Strom aus Sonnenlicht.",
                "Sonnenlicht macht Häuser kaputt.",
                "Batterien kann man nur im Sommer benutzen."
              ],
              answer: 0,
              hint: "Güneş panellerinin güneş ışığından elektrik üretip üretmediğini kontrol edin."
            },
            {
              question: "Frage 5:",
              options: [
                "Das Projekt nutzt Windkraft, um Häuser zu versorgen.",
                "Solaranlagen produzieren Strom auch bei Nacht.",
                "Mit Sonnenenergie können Häuser umweltfreundlich Strom bekommen."
              ],
              answer: 2,
              hint: "Güneş enerjisiyle evlerin çevre dostu elektrik alıp alamayacağını kontrol edin."
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Sprachreisen – Lernen mit Spaß",
      text: `Sprachreisen – Lernen mit Spaß

Viele Jugendliche möchten ihre Sprachkenntnisse verbessern. Manche haben schlechte Noten in der Schule, andere wollen im Urlaub oder später im Beruf besser sprechen können. Eine Sprachreise ist eine gute Möglichkeit, eine Sprache zu lernen und dabei auch Spaß zu haben.

Bei einer Sprachreise reist man für ein paar Wochen in ein anderes Land. Man hat dort Unterricht in der Fremdsprache und lernt mit Jugendlichen aus verschiedenen Ländern. Nach dem Unterricht gibt es Sport, Ausflüge und Freizeitangebote. So kann man die Sprache auch im Alltag üben.

Bevor man bucht, sollte man genau überlegen, was man will: Wie lange möchte man bleiben? Wie viel Geld kann man ausgeben? Möchte man in einer Gastfamilie wohnen oder in einem Wohnheim? Will man auch Sport machen?

Der Unterricht findet an fünf Tagen pro Woche statt. Man kann Einzelunterricht nehmen oder in kleinen Gruppen lernen. Am Anfang macht man meistens einen Test, damit man in eine passende Gruppe kommt.

Sprachreisen sind nicht billig, aber oft im Preis enthalten: Flug, Unterkunft, Unterricht, Verpflegung und Ausflüge. Taschengeld braucht man zusätzlich. Wichtig ist: Der Anbieter sollte zuverlässig sein.

In einer Gastfamilie erlebt man das Leben der Menschen im Land. Im Wohnheim kann man viele neue Freunde finden. Beide Varianten haben Vorteile.

Sprachreisen machen Spaß und man lernt viel – über Sprache, Menschen und das Land.`,
      tasks: [
        {
          type: "richtig_falsch_quiz",
          title: "Aufgabe 1: Richtig oder falsch?",
          questions: [
            {
              question: "Bei einer Sprachreise bleibt man in seinem Heimatland.",
              answer: "falsch",
              hint: "Dil kursunda kişinin kendi ülkesinde kalıp kalmadığını kontrol edin."
            },
            {
              question: "Man hat während der Sprachreise auch Freizeit.",
              answer: "richtig",
              hint: "Dil kursu sırasında boş zaman olup olmadığını kontrol edin."
            },
            {
              question: "Einzelunterricht ist nicht möglich.",
              answer: "falsch",
              hint: "Birebir ders alınıp alınamayacağını kontrol edin."
            },
            {
              question: "Vor Beginn macht man oft einen Test.",
              answer: "richtig",
              hint: "Kurs başlamadan önce test yapılıp yapılmadığını kontrol edin."
            },
            {
              question: "Sprachreisen sind immer kostenlos.",
              answer: "falsch",
              hint: "Dil kurslarının ücretsiz olup olmadığını kontrol edin."
            }
          ]
        },
        {
          type: "multiple_choice_quiz",
          title: "Aufgabe 2: Wähle den richtigen Satz",
          questions: [
            {
              question: "Frage 1:",
              options: [
                "Sprachreisen sind nur für Kinder geeignet.",
                "Sprachreisen verbinden Lernen und Freizeit.",
                "Sprachreisen finden immer nur in Deutschland statt."
              ],
              answer: 1,
              hint: "Dil kurslarının öğrenme ve boş zamanı birleştirip birleştirmediğini kontrol edin."
            },
            {
              question: "Frage 2:",
              options: [
                "Bei einer Sprachreise lernt man die Sprache nur am Abend.",
                "Man kann bei einer Sprachreise auch Sport treiben und Städte besichtigen.",
                "Sprachreisen dauern mindestens ein Jahr."
              ],
              answer: 1,
              hint: "Dil kursunda spor yapılıp yapılamadığını ve şehir gezilerinin olup olmadığını kontrol edin."
            },
            {
              question: "Frage 3:",
              options: [
                "In einer Gastfamilie spricht man meistens die eigene Sprache.",
                "Im Wohnheim wohnt man nur mit Leuten aus dem eigenen Land.",
                "In einer Gastfamilie erlebt man den Alltag der Menschen im Gastland."
              ],
              answer: 2,
              hint: "Aile yanında kalmanın avantajlarını kontrol edin."
            },
            {
              question: "Frage 4:",
              options: [
                "Einzelunterricht ist meistens sehr günstig.",
                "Sprachreisen helfen dabei, neue Freunde aus anderen Ländern kennenzulernen.",
                "Auf einer Sprachreise macht man keine Ausflüge."
              ],
              answer: 1,
              hint: "Dil kurslarının farklı ülkelerden arkadaş edinmeye yardımcı olup olmadığını kontrol edin."
            },
            {
              question: "Frage 5:",
              options: [
                "Man braucht bei einer Sprachreise kein Taschengeld.",
                "Vor der Sprachreise sollte man überlegen, was man will.",
                "Alle Sprachreisen sind kostenlos."
              ],
              answer: 1,
              hint: "Dil kursuna gitmeden önce ne düşünülmesi gerektiğini kontrol edin."
            }
          ]
        },
        {
          type: "fill_in_blank_quiz",
          title: "Aufgabe 3: Wähle die passenden Wörter",
          questions: [
            {
              question: "Eine Sprachreise hilft, eine __________ zu lernen.",
              answer: "Sprache",
              hint: "Dil kursunun ne öğrenmeye yardımcı olduğunu kontrol edin."
            },
            {
              question: "Man hat Unterricht und macht viele __________ zusammen mit anderen Jugendlichen.",
              answer: "Aktivitäten",
              hint: "Diğer gençlerle birlikte yapılan şeyleri kontrol edin."
            },
            {
              question: "In einer __________ lebt man mit einer Familie im Gastland.",
              answer: "Gastfamilie",
              hint: "Misafir ülkede kiminle yaşandığını kontrol edin."
            },
            {
              question: "Vor dem Kurs macht man oft einen __________, damit man die richtige Gruppe findet.",
              answer: "Test",
              hint: "Kurs başlamadan önce yapılan şeyi kontrol edin."
            },
            {
              question: "Eine Sprachreise dauert meistens ein paar __________.",
              answer: "Wochen",
              hint: "Dil kursunun ne kadar sürdüğünü kontrol edin."
            }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Freundschaft im Wandel der Zeit",
      text: `Freundschaft im Wandel der Zeit

Freunde sind ein wichtiger Teil unseres Lebens – das war früher so und ist auch heute noch so. Eine aktuelle Studie hat untersucht, wie sich Freundschaften im Laufe der Generationen verändert haben. Dafür wurden sowohl ältere Menschen als auch Jugendliche befragt.

Früher blieben Freundschaften oft ein Leben lang bestehen. Schon in der Kindheit geschlossene Freundschaften hielten oft bis ins hohe Alter. Die Menschen blieben meist in ihrer Heimatstadt, was es einfacher machte, Kontakt zu halten. Außerdem hatten Freundschaften einen sehr hohen Stellenwert: Freunde galten fast als Teil der Familie.

Heute sieht das etwas anders aus. Junge Menschen wechseln häufiger ihren Wohnort, zum Beispiel für das Studium oder die Arbeit. Dadurch ist es schwieriger, alte Freundschaften dauerhaft zu pflegen. Neue Kontakte entstehen oft schnell – etwa über soziale Medien. Trotzdem legen junge Leute großen Wert auf gute Freundschaften. Viele gaben an, dass sie sich ein Leben ohne Freunde nicht vorstellen können.

Die Studie zeigt auch: Freundschaften erfüllen wichtige Funktionen. Freunde geben emotionale Unterstützung, helfen bei Problemen und sorgen für schöne Erlebnisse im Alltag. Auch wenn sich die Art der Freundschaften verändert hat, bleibt ihre Bedeutung für das persönliche Wohlbefinden gleich hoch.`,
      tasks: [
        {
          type: "matching_quiz",
          title: "Aufgabe 1: Satzhälften verbinden",
          questions: [
            {
              statement: "Früher hielten Freundschaften oft ein Leben lang,",
              options: [
                "weil junge Menschen oft umziehen und alte Freundschaften schwerer pflegen können.",
                "weil Freunde emotionale Unterstützung und Freude bringen.",
                "da sie für das Wohlbefinden der Menschen wichtig sind.",
                "weil die Menschen meist in ihrer Heimatstadt blieben."
              ],
              answer: 3,
              hint: "Eski zamanlarda arkadaşlıkların neden uzun sürdüğünü kontrol edin."
            },
            {
              statement: "Junge Menschen legen heute großen Wert auf Freundschaften,",
              options: [
                "weil junge Menschen oft umziehen und alte Freundschaften schwerer pflegen können.",
                "weil Freunde emotionale Unterstützung und Freude bringen.",
                "da sie für das Wohlbefinden der Menschen wichtig sind.",
                "weil die Menschen meist in ihrer Heimatstadt blieben."
              ],
              answer: 2,
              hint: "Gençlerin neden arkadaşlıklara değer verdiğini kontrol edin."
            },
            {
              statement: "Die Art, Freundschaften zu pflegen, hat sich verändert,",
              options: [
                "weil junge Menschen oft umziehen und alte Freundschaften schwerer pflegen können.",
                "weil Freunde emotionale Unterstützung und Freude bringen.",
                "da sie für das Wohlbefinden der Menschen wichtig sind.",
                "weil die Menschen meist in ihrer Heimatstadt blieben."
              ],
              answer: 0,
              hint: "Arkadaşlık kurma şeklinin neden değiştiğini kontrol edin."
            },
            {
              statement: "Freundschaften tragen auch heute stark zum Glück bei,",
              options: [
                "weil junge Menschen oft umziehen und alte Freundschaften schwerer pflegen können.",
                "weil Freunde emotionale Unterstützung und Freude bringen.",
                "da sie für das Wohlbefinden der Menschen wichtig sind.",
                "weil die Menschen meist in ihrer Heimatstadt blieben."
              ],
              answer: 1,
              hint: "Arkadaşlıkların mutluluğa nasıl katkıda bulunduğunu kontrol edin."
            }
          ]
        },
        {
          type: "multiple_choice_quiz",
          title: "Aufgabe 2: Fragen zu Antworten finden",
          questions: [
            {
              question: "Antwort: In ihrer Heimatstadt.",
              options: [
                "Wo lebten die Menschen früher meistens?",
                "Wann verließen die Menschen ihre Heimatstadt?",
                "Warum war das Leben früher schwieriger?"
              ],
              answer: 0,
              hint: "İnsanların eskiden nerede yaşadığını kontrol edin."
            },
            {
              question: "Antwort: Durch soziale Medien und neue Lebenssituationen.",
              options: [
                "Wie entstehen heute neue Freundschaften?",
                "Wo treffen sich junge Menschen heute?",
                "Wann entscheiden sich junge Menschen für neue Freunde?"
              ],
              answer: 0,
              hint: "Yeni arkadaşlıkların nasıl oluştuğunu kontrol edin."
            },
            {
              question: "Antwort: Emotionale Unterstützung und schöne Erlebnisse.",
              options: [
                "Warum kündigen manche Menschen ihre Freundschaften?",
                "Wann braucht man Freunde am dringendsten?",
                "Was bieten Freundschaften den Menschen?"
              ],
              answer: 2,
              hint: "Arkadaşlıkların insanlara ne sunduğunu kontrol edin."
            },
            {
              question: "Antwort: Weil viele Menschen für Studium oder Arbeit umziehen.",
              options: [
                "Wo finden die meisten Umzüge statt?",
                "Warum ist es heute schwieriger, alte Freundschaften zu behalten?",
                "Wie lange dauert eine Freundschaft heutzutage?"
              ],
              answer: 1,
              hint: "Eski arkadaşlıkları sürdürmenin neden zorlaştığını kontrol edin."
            }
          ]
        }
      ]
    }
  ],
  B2: [
    {
      id: 1,
      title: "Studienwahl: Geschlechtsunterschiede bleiben",
      text: `Studienwahl: Geschlechtsunterschiede bleiben

Trotz jahrzehntelanger Bemühungen, Frauen für MINT-Fächer (Mathematik, Informatik, Naturwissenschaften und Technik) zu gewinnen, bestehen weiterhin markante Unterschiede in der Studienwahl. Männer bevorzugen technische und naturwissenschaftliche Fächer, während Frauen sich stärker zu Sozialwissenschaften, Medizin und Pädagogik hingezogen fühlen. Diese Unterschiede spiegeln sich sowohl in den Immatrikulationszahlen als auch in den Studienabbrüchen wider. Beispielsweise sind in Informatik nur 23 % der Erstsemester Frauen, während in Ernährungswissenschaften, Psychologie und Medizin Frauen dominieren.

Das sogenannte "Gender-Paradox" zeigt, dass in Ländern mit hoher Geschlechtergerechtigkeit, wie in Skandinavien, Frauen häufiger stereotype Studiengänge wählen. In ärmeren Ländern hingegen entscheiden sich Frauen oft für MINT-Fächer, da dort wirtschaftliche Überlegungen stärker wiegen. In Deutschland ergaben PISA-Studien, dass leistungsstarke Schüler:innen meist geschlechtstypische Berufsziele verfolgen, wie Ingenieurberufe bei Jungen und Gesundheitsberufe bei Mädchen.

Diese Entwicklung wirft Fragen zur Gleichstellungspolitik auf. Sollten Frauen und Männer stärker in untypische Studienrichtungen gelenkt werden, oder sollte man ihnen die Freiheit lassen, gemäß ihren Interessen zu wählen? Die Autor:innen betonen, dass individuelle Wahlfreiheit wichtiger sei als staatlich auferlegte Quoten oder Umsteuerungen.

Das Konzept einer emanzipativen Gleichberechtigung wird als Alternative vorgeschlagen. Es zielt darauf ab, allen Menschen unabhängig von Geschlecht, sozialem Hintergrund oder Herkunft gleiche Möglichkeiten zu geben, ihr Leben selbstbestimmt zu gestalten. In diesem Rahmen könnten auch soziale Berufe, die oft von Frauen dominiert und schlecht bezahlt sind, aufgewertet werden.

Letztlich wird kritisiert, dass die heutige Gleichstellungspolitik vor allem Frauenförderung in wirtschaftsnahen Bereichen priorisiert und gesellschaftliche Spaltungen vernachlässigt. Um soziale Ungleichheiten zu überwinden, bedarf es eines breiteren, inklusiven Ansatzes, der allen Bürger:innen gleiche Partizipationsmöglichkeiten eröffnet und die zunehmende gesellschaftliche Spaltung abbaut.`,
      type: "multiple_choice_quiz",
      questions: [
        {
          question: "Welche Studienfächer bevorzugen Frauen laut dem Text?",
          options: [
            "Mathematik und Technik",
            "Sozialwissenschaften, Medizin und Pädagogik",
            "Ingenieurwesen und Informatik",
            "Naturwissenschaften und Technik"
          ],
          answer: 1,
          hint: "Kadınların hangi alanları tercih ettiğini metinde arayın."
        },
        {
          question: "Wie hoch ist der Frauenanteil unter den Erstsemestern in Informatik?",
          options: [
            "weniger als 20 Prozent",
            "fast 25 Prozent",
            "zirka 35 Prozent",
            "fast die Hälfte"
          ],
          answer: 1,
          hint: "Bilgisayar bilimlerinde birinci sınıf öğrencileri arasındaki kadın oranını kontrol edin."
        },
        {
          question: "Was zeigt das sogenannte Gender-Paradox?",
          options: [
            "Frauen wählen in allen Ländern ähnliche Studiengänge.",
            "In Ländern mit Geschlechtergerechtigkeit wählen Frauen häufiger stereotype Studiengänge.",
            "Frauen entscheiden sich in reichen Ländern häufiger für MINT-Fächer.",
            "Männer und Frauen zeigen ähnliche Interessen in Skandinavien."
          ],
          answer: 1,
          hint: "Cinsiyet paradoksunun ne gösterdiğini metinde arayın."
        },
        {
          question: "Warum wählen Frauen in ärmeren Ländern häufiger MINT-Fächer?",
          options: [
            "Aufgrund wirtschaftlicher Überlegungen",
            "Wegen besserer Förderung von Frauen",
            "Weil sie dort keine Alternativen haben",
            "Um der Diskriminierung zu entgehen"
          ],
          answer: 0,
          hint: "Fakir ülkelerde kadınların neden MINT alanlarını tercih ettiğini kontrol edin."
        },
        {
          question: "Was wurde durch die PISA-Studien in Deutschland herausgefunden?",
          options: [
            "Leistungsstarke Schüler:innen wählen oft geschlechtstypische Berufsziele.",
            "Mädchen bevorzugen Ingenieurberufe.",
            "Jungen und Mädchen zeigen die gleichen beruflichen Interessen.",
            "Leistungsstarke Schüler:innen entscheiden sich für untypische Studienfächer."
          ],
          answer: 0,
          hint: "PISA çalışmalarının Almanya'da ne bulduğunu kontrol edin."
        },
        {
          question: "Welche zentrale Frage wird in Bezug auf die Gleichstellungspolitik im Text aufgeworfen?",
          options: [
            "Sollten Frauen stärker zu Sozialwissenschaften gelenkt werden?",
            "Sollten Frauen und Männer stärker in untypische Studienrichtungen gelenkt werden?",
            "Ist staatliche Förderung von Frauen in sozialen Berufen sinnvoll?",
            "Sollte das Studium in MINT-Fächern vereinfacht werden?"
          ],
          answer: 1,
          hint: "Eşitlik politikasıyla ilgili metinde sorulan temel soruyu bulun."
        },
        {
          question: "Was versteht man unter 'emanzipativer Gleichberechtigung' laut dem Text?",
          options: [
            "Die Förderung von Frauen in wirtschaftsnahen Bereichen",
            "Gleiche Möglichkeiten zur selbstbestimmten Lebensgestaltung für alle",
            "Quoten für Frauen in technischen Studiengängen",
            "Mehr Freiheit bei der Studienwahl für Männer"
          ],
          answer: 1,
          hint: "Özgürleştirici eşitlik kavramının ne anlama geldiğini kontrol edin."
        },
        {
          question: "Welche Berufe sollten laut dem Text aufgewertet werden?",
          options: [
            "Ingenieurberufe",
            "Technische Berufe",
            "Soziale Berufe",
            "Naturwissenschaftliche Berufe"
          ],
          answer: 2,
          hint: "Hangi mesleklerin değerinin artırılması gerektiğini kontrol edin."
        },
        {
          question: "Worin wird die heutige Gleichstellungspolitik kritisiert?",
          options: [
            "Sie gibt der Frauenförderung in marktorientierten Bereichen den Vorrang.",
            "Sie fördert zu stark soziale Berufe.",
            "Sie legt zu viel Wert auf individuelle Wahlfreiheit.",
            "Sie hebt die gesellschaftliche Spaltung auf."
          ],
          answer: 0,
          hint: "Günümüz eşitlik politikasının neden eleştirildiğini kontrol edin."
        },
        {
          question: "Welche Lösung wird im Text vorgeschlagen, um soziale Ungleichheiten zu überwinden?",
          options: [
            "Mehr Frauenförderung in MINT-Fächern",
            "Quotenregelungen für Männer in sozialen Berufen",
            "Eine umfassende und integrative Herangehensweise, die alle Menschen einbezieht",
            "Strengere Vorgaben bei der Studienwahl"
          ],
          answer: 2,
          hint: "Sosyal eşitsizlikleri aşmak için metinde önerilen çözümü bulun."
        }
      ]
    }
  ]
};

function Leseverstehen() {
  const [currentLevel, setCurrentLevel] = useState('A1');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showHints, setShowHints] = useState({});

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const toggleHint = (questionIndex) => {
    setShowHints(prev => ({
      ...prev,
      [questionIndex]: !prev[questionIndex]
    }));
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setCurrentExercise(0);
    setAnswers({});
    setShowResults(false);
    setShowHints({});
  };

  const handleExerciseChange = (exerciseIndex) => {
    setCurrentExercise(exerciseIndex);
    setAnswers({});
    setShowResults(false);
    setShowHints({});
  };

  const handleBackToMenu = () => {
    window.location.reload();
  };

  const exercise = exercises[currentLevel][currentExercise];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          onClick={handleBackToMenu}
          sx={{
            color: '#E65100',
            borderColor: '#E65100',
            '&:hover': {
              backgroundColor: '#FFF8E1',
              borderColor: '#E65100'
            }
          }}
        >
          Ana Menüye Dön
        </Button>
        <Typography variant="h4" component="h1" sx={{ color: '#E65100' }}>
          Leseverstehen
        </Typography>
        <Box sx={{ width: 100 }} />
      </Box>

      {/* Seviye Seçimi */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        {Object.keys(exercises).map((level) => (
          <Button
            key={level}
            variant={currentLevel === level ? "contained" : "outlined"}
            onClick={() => handleLevelChange(level)}
            sx={{
              backgroundColor: currentLevel === level ? '#E65100' : 'transparent',
              color: currentLevel === level ? 'white' : '#E65100',
              borderColor: '#E65100',
              '&:hover': {
                backgroundColor: currentLevel === level ? '#BF360C' : '#FFF8E1',
                borderColor: '#E65100'
              }
            }}
          >
            {level}
          </Button>
        ))}
      </Box>

      {/* Alıştırma Seçimi */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
        {exercises[currentLevel].map((ex, index) => (
          <Button
            key={index}
            variant={currentExercise === index ? "contained" : "outlined"}
            onClick={() => handleExerciseChange(index)}
            sx={{
              backgroundColor: currentExercise === index ? '#E65100' : 'transparent',
              color: currentExercise === index ? 'white' : '#E65100',
              borderColor: '#E65100',
              '&:hover': {
                backgroundColor: currentExercise === index ? '#BF360C' : '#FFF8E1',
                borderColor: '#E65100'
              }
            }}
          >
            {ex.title}
          </Button>
        ))}
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 3, backgroundColor: '#FFF8E1' }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#E65100' }}>
          {exercise.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {exercise.text}
        </Typography>
      </Paper>

      {/* Sorular */}
      {exercise.type === "open_ended_quiz" && (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#FFF8E1' }}>
          {exercise.questions.map((q, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#E65100' }}>
                {index + 1}. {q.question}
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                value={answers[index] || ''}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                variant="outlined"
                sx={{ mb: 1 }}
              />
              <Button 
                variant="text" 
                onClick={() => toggleHint(index)}
                sx={{ color: '#E65100' }}
              >
                {showHints[index] ? 'İpucunu Gizle' : 'İpucu Göster'}
              </Button>
              {showHints[index] && (
                <Alert severity="info" sx={{ mt: 1 }}>
                  {q.hint}
                </Alert>
              )}
              {showResults && (
                <Alert 
                  severity={answers[index]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'success' : 'error'}
                  sx={{ mt: 1 }}
                >
                  {answers[index]?.toLowerCase().trim() === q.answer.toLowerCase().trim()
                    ? 'Doğru!'
                    : `Yanlış. Doğru cevap: ${q.answer}`}
                </Alert>
              )}
            </Box>
          ))}
        </Paper>
      )}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          onClick={handleCheckAnswers}
          sx={{ 
            backgroundColor: '#E65100',
            '&:hover': {
              backgroundColor: '#BF360C'
            }
          }}
        >
          Cevapları Kontrol Et
        </Button>
      </Box>
    </Container>
  );
}

export default Leseverstehen; 