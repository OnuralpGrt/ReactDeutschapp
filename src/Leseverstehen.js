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
        }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Ein Tag in der Stadt",
      text: `Heute ist Samstag und ich gehe in die Stadt. Zuerst gehe ich in die Bibliothek, um ein Buch zurückzugeben. Dann möchte ich in einem Café einen Kaffee trinken. Nach dem Kaffee gehe ich zum Supermarkt, um Lebensmittel einzukaufen. Ich brauche Brot, Milch und Obst.

Am Nachmittag treffe ich mich mit meiner Freundin Lisa. Wir gehen zusammen ins Kino. Der Film beginnt um 15 Uhr. Nach dem Film essen wir in einem italienischen Restaurant zu Abend. Das Restaurant ist sehr gut und nicht teuer.

Um 20 Uhr fahre ich mit dem Bus nach Hause. Es war ein schöner Tag!`,
      type: "open_ended_quiz",
      questions: [
        {
          question: "Welchen Tag ist es heute?",
          answer: "Es ist Samstag.",
          hint: "Metnin başlangıcına bakın."
        },
        {
          question: "Was macht die Person zuerst?",
          answer: "Die Person geht in die Bibliothek, um ein Buch zurückzugeben.",
          hint: "İlk aktiviteyi bulun."
        },
        {
          question: "Wo trinkt die Person Kaffee?",
          answer: "Die Person trinkt Kaffee in einem Café.",
          hint: "Kahve içilen yeri bulun."
        },
        {
          question: "Was kauft die Person im Supermarkt?",
          answer: "Die Person kauft Brot, Milch und Obst.",
          hint: "Süpermarkette alınan ürünleri bulun."
        },
        {
          question: "Mit wem trifft sich die Person am Nachmittag?",
          answer: "Die Person trifft sich mit ihrer Freundin Lisa.",
          hint: "Öğleden sonra kiminle buluştuğunu bulun."
        },
        {
          question: "Wann beginnt der Film?",
          answer: "Der Film beginnt um 15 Uhr.",
          hint: "Filmin başlama saatini bulun."
        },
        {
          question: "Wo essen sie zu Abend?",
          answer: "Sie essen in einem italienischen Restaurant zu Abend.",
          hint: "Akşam yemeği yedikleri yeri bulun."
        },
        {
          question: "Wie fährt die Person nach Hause?",
          answer: "Die Person fährt mit dem Bus nach Hause.",
          hint: "Eve nasıl döndüğünü bulun."
        }
      ]
    },
    {
      id: 2,
      title: "Mein Traumurlaub",
      text: `Mein Traumurlaub wäre eine Reise nach Japan. Ich möchte Tokio besuchen, die größte Stadt Japans. Dort möchte ich den berühmten Fischmarkt Tsukiji sehen und Sushi essen. Ich interessiere mich sehr für japanische Kultur und Geschichte.

Am liebsten würde ich im Frühling reisen, wenn die Kirschblüten blühen. Das ist eine sehr schöne Zeit in Japan. Ich möchte auch einen traditionellen Kimono anprobieren und an einer Teezeremonie teilnehmen.

Für die Reise muss ich viel Geld sparen. Ich schaue mir schon jetzt Reiseführer an und lerne ein bisschen Japanisch. Meine Freunde finden meine Pläne sehr interessant.`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Die Person möchte nach China reisen.",
          answer: "falsch",
          hint: "Hedef ülkeyi kontrol edin."
        },
        {
          question: "Tokio ist die größte Stadt Japans.",
          answer: "richtig",
          hint: "Tokio'nun Japonya'daki konumunu kontrol edin."
        },
        {
          question: "Die Person möchte im Winter reisen.",
          answer: "falsch",
          hint: "Seyahat mevsimini kontrol edin."
        },
        {
          question: "Die Person lernt schon Japanisch.",
          answer: "richtig",
          hint: "Dil öğrenme durumunu kontrol edin."
        },
        {
          question: "Die Freunde finden die Pläne langweilig.",
          answer: "falsch",
          hint: "Arkadaşların tepkisini kontrol edin."
        }
      ]
    },
    {
      id: 3,
      title: "Ein neuer Job",
      text: `Ich suche einen neuen Job. Ich habe Wirtschaft studiert und fünf Jahre Erfahrung im Marketing. Ich kann gut mit Menschen umgehen und spreche fließend Englisch und Französisch. Ich suche eine Stelle in einer internationalen Firma.

Meine Stärken sind:
- Teamarbeit
- Projektmanagement
- Kreativität
- Zeitmanagement

Ich möchte gerne:
- Vollzeit arbeiten
- Ein gutes Gehalt bekommen
- In einer modernen Firma arbeiten
- Mich weiterbilden können

Bitte kontaktieren Sie mich, wenn Sie eine passende Stelle haben.`,
      tasks: [
        {
          type: "multiple_choice",
          title: "Aufgabe 1: Lesen Sie den Text. Was erfahren Sie über die Person? (Mehrere Antworten sind möglich)",
          questions: [
            {
              question: "Die Person hat Jura studiert.",
              answer: false,
              hint: "Eğitim alanını kontrol edin."
            },
            {
              question: "Die Person spricht drei Sprachen.",
              answer: true,
              hint: "Konuştuğu dilleri sayın."
            },
            {
              question: "Die Person möchte Teilzeit arbeiten.",
              answer: false,
              hint: "Çalışma şeklini kontrol edin."
            },
            {
              question: "Die Person hat Erfahrung im Marketing.",
              answer: true,
              hint: "İş deneyimini kontrol edin."
            },
            {
              question: "Die Person möchte in einer kleinen Firma arbeiten.",
              answer: false,
              hint: "Firma tercihini kontrol edin."
            }
          ]
        },
        {
          type: "open_ended",
          title: "Aufgabe 2: Beantworten Sie die Fragen in vollständigen Sätzen.",
          questions: [
            {
              question: "Was hat die Person studiert?",
              answer: "Die Person hat Wirtschaft studiert.",
              hint: "Eğitim alanını bulun."
            },
            {
              question: "Welche Sprachen spricht die Person?",
              answer: "Die Person spricht Deutsch, Englisch und Französisch.",
              hint: "Konuştuğu dilleri bulun."
            },
            {
              question: "Was sind die Stärken der Person?",
              answer: "Die Stärken der Person sind Teamarbeit, Projektmanagement, Kreativität und Zeitmanagement.",
              hint: "Güçlü yönlerini bulun."
            },
            {
              question: "Was möchte die Person in einem neuen Job?",
              answer: "Die Person möchte Vollzeit arbeiten, ein gutes Gehalt bekommen, in einer modernen Firma arbeiten und sich weiterbilden können.",
              hint: "İş beklentilerini bulun."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Gesund leben",
      text: `Gesund zu leben ist wichtig für mich. Ich esse viel Obst und Gemüse und trinke jeden Tag zwei Liter Wasser. Ich gehe dreimal pro Woche ins Fitnessstudio und mache Yoga. Ich schlafe mindestens sieben Stunden pro Nacht.

Ich rauche nicht und trinke nur selten Alkohol. Ich versuche, Stress zu vermeiden und mache regelmäßig Pausen bei der Arbeit. Am Wochenende gehe ich oft spazieren oder fahre Rad.

Meine Freunde sagen, ich lebe zu gesund, aber ich fühle mich gut dabei.`,
      type: "multiple_choice_quiz",
      questions: [
        {
          question: "Wie viel Wasser trinkt die Person pro Tag?",
          options: ["Ein Liter", "Zwei Liter", "Drei Liter", "Vier Liter"],
          answer: 1,
          hint: "Günlük su miktarını bulun."
        },
        {
          question: "Wie oft geht die Person ins Fitnessstudio?",
          options: ["Einmal pro Woche", "Zweimal pro Woche", "Dreimal pro Woche", "Täglich"],
          answer: 2,
          hint: "Spor salonuna gidiş sıklığını kontrol edin."
        },
        {
          question: "Wie lange schläft die Person pro Nacht?",
          options: ["Fünf Stunden", "Sechs Stunden", "Sieben Stunden", "Acht Stunden"],
          answer: 2,
          hint: "Gece uyku süresini bulun."
        },
        {
          question: "Was macht die Person am Wochenende?",
          options: ["Nur zu Hause bleiben", "Spazieren gehen oder Rad fahren", "Im Fitnessstudio trainieren", "Yoga machen"],
          answer: 1,
          hint: "Hafta sonu aktivitelerini kontrol edin."
        },
        {
          question: "Was denken die Freunde über den Lebensstil?",
          options: ["Sie finden ihn gut", "Sie finden ihn zu gesund", "Sie finden ihn zu ungesund", "Sie interessieren sich nicht dafür"],
          answer: 1,
          hint: "Arkadaşların düşüncelerini bulun."
        }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Umweltbewusstsein",
      text: `Umweltbewusstsein ist heute wichtiger denn je. Viele Menschen versuchen, ihren ökologischen Fußabdruck zu verringern. Sie kaufen regionale Produkte, nutzen öffentliche Verkehrsmittel und trennen ihren Müll. Doch reicht das aus?

Ein wichtiger Aspekt ist der Energieverbrauch. Durch den Wechsel zu erneuerbaren Energien können wir viel CO2 einsparen. Solaranlagen auf dem Dach oder Windräder in der Nähe sind gute Alternativen zu fossilen Brennstoffen.

Auch im Alltag können wir viel tun: LED-Lampen statt Glühbirnen verwenden, Wasser sparen und weniger Fleisch essen. Jeder kleine Beitrag zählt.`,
      type: "open_ended_quiz",
      questions: [
        {
          question: "Warum ist Umweltbewusstsein heute besonders wichtig?",
          answer: "Umweltbewusstsein ist heute wichtiger denn je, weil wir unseren ökologischen Fußabdruck verringern müssen.",
          hint: "Metnin başlangıcına bakın."
        },
        {
          question: "Welche Maßnahmen ergreifen viele Menschen für die Umwelt?",
          answer: "Viele Menschen kaufen regionale Produkte, nutzen öffentliche Verkehrsmittel und trennen ihren Müll.",
          hint: "İnsanların çevre için yaptığı şeyleri bulun."
        },
        {
          question: "Wie können wir Energie sparen?",
          answer: "Wir können durch den Wechsel zu erneuerbaren Energien wie Solaranlagen und Windrädern Energie sparen.",
          hint: "Enerji tasarrufu yöntemlerini bulun."
        },
        {
          question: "Welche alltäglichen Maßnahmen werden im Text erwähnt?",
          answer: "Im Text werden LED-Lampen verwenden, Wasser sparen und weniger Fleisch essen als alltägliche Maßnahmen erwähnt.",
          hint: "Günlük hayatta yapılabilecek şeyleri bulun."
        }
      ]
    },
    {
      id: 2,
      title: "Digitalisierung",
      text: `Die Digitalisierung verändert unsere Gesellschaft grundlegend. Smartphones, Tablets und Computer sind aus unserem Alltag nicht mehr wegzudenken. Doch diese Entwicklung hat nicht nur Vorteile.

Einerseits erleichtert die Digitalisierung viele Prozesse. Wir können von überall aus arbeiten, schnell Informationen finden und mit Menschen auf der ganzen Welt kommunizieren. Andererseits gibt es auch Risiken: Datenschutzprobleme, Cybermobbing und die Abhängigkeit von Technologie.

Es ist wichtig, einen gesunden Umgang mit digitalen Medien zu finden. Dazu gehört auch, regelmäßig digitale Auszeiten zu nehmen und sich bewusst zu machen, wie viel Zeit man online verbringt.`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Die Digitalisierung hat nur positive Auswirkungen.",
          answer: "falsch",
          hint: "Dijitalleşmenin etkilerini kontrol edin."
        },
        {
          question: "Smartphones sind heute ein wichtiger Teil unseres Alltags.",
          answer: "richtig",
          hint: "Günlük hayatta teknolojinin rolünü kontrol edin."
        },
        {
          question: "Die Digitalisierung ermöglicht es uns, von überall zu arbeiten.",
          answer: "richtig",
          hint: "Çalışma esnekliğini kontrol edin."
        },
        {
          question: "Digitale Auszeiten sind nicht wichtig.",
          answer: "falsch",
          hint: "Dijital molaların önemini kontrol edin."
        }
      ]
    },
    {
      id: 3,
      title: "Gesundheit im Beruf",
      text: `Die Gesundheit am Arbeitsplatz wird immer wichtiger. Viele Unternehmen bieten ihren Mitarbeitern Gesundheitsprogramme an. Dazu gehören:

- Regelmäßige Gesundheitschecks
- Sportangebote im Unternehmen
- Stressmanagement-Kurse
- Ergonomische Arbeitsplätze
- Flexible Arbeitszeiten

Studien zeigen, dass gesunde Mitarbeiter produktiver sind und seltener krank werden. Deshalb investieren immer mehr Firmen in die Gesundheit ihrer Angestellten.`,
      tasks: [
        {
          type: "multiple_choice",
          title: "Aufgabe 1: Lesen Sie den Text. Was erfahren Sie über Gesundheitsprogramme? (Mehrere Antworten sind möglich)",
          questions: [
            {
              question: "Gesundheitsprogramme sind nur für kranke Mitarbeiter.",
              answer: false,
              hint: "Programların hedef kitlesini kontrol edin."
            },
            {
              question: "Flexible Arbeitszeiten sind Teil der Gesundheitsprogramme.",
              answer: true,
              hint: "Programların içeriğini kontrol edin."
            },
            {
              question: "Gesunde Mitarbeiter sind produktiver.",
              answer: true,
              hint: "Sağlıklı çalışanların performansını kontrol edin."
            },
            {
              question: "Nur große Unternehmen bieten Gesundheitsprogramme an.",
              answer: false,
              hint: "Programların yaygınlığını kontrol edin."
            }
          ]
        },
        {
          type: "open_ended",
          title: "Aufgabe 2: Beantworten Sie die Fragen in vollständigen Sätzen.",
          questions: [
            {
              question: "Welche Gesundheitsprogramme werden im Text erwähnt?",
              answer: "Im Text werden Gesundheitschecks, Sportangebote, Stressmanagement-Kurse, ergonomische Arbeitsplätze und flexible Arbeitszeiten erwähnt.",
              hint: "Programların listesini bulun."
            },
            {
              question: "Warum investieren Firmen in die Gesundheit ihrer Mitarbeiter?",
              answer: "Firmen investieren in die Gesundheit ihrer Mitarbeiter, weil gesunde Mitarbeiter produktiver sind und seltener krank werden.",
              hint: "Yatırım nedenlerini bulun."
            }
          ]
        }
      ]
    }
  ],
  B2: [
    {
      id: 1,
      title: "Künstliche Intelligenz",
      text: `Die Entwicklung der künstlichen Intelligenz (KI) schreitet rasant voran. KI-Systeme können bereits komplexe Aufgaben lösen, die früher nur Menschen vorbehalten waren. Doch diese Entwicklung wirft auch wichtige ethische Fragen auf.

Einerseits bietet KI große Chancen: Sie kann bei der medizinischen Diagnose helfen, den Verkehr optimieren und sogar kreative Aufgaben übernehmen. Andererseits gibt es Bedenken bezüglich Datenschutz, Arbeitsplatzverlust und der Kontrolle über KI-Systeme.

Experten fordern eine verantwortungsvolle Entwicklung und Nutzung von KI. Es müssen klare Regeln und Grenzen festgelegt werden, um die Technologie zum Wohle der Menschheit einzusetzen.`,
      type: "open_ended_quiz",
      questions: [
        {
          question: "Welche Aufgaben können KI-Systeme heute übernehmen?",
          answer: "KI-Systeme können heute komplexe Aufgaben wie medizinische Diagnosen, Verkehrsoptimierung und kreative Aufgaben übernehmen.",
          hint: "Yapay zekanın yapabildiği işleri bulun."
        },
        {
          question: "Welche Bedenken gibt es bezüglich KI?",
          answer: "Es gibt Bedenken bezüglich Datenschutz, Arbeitsplatzverlust und der Kontrolle über KI-Systeme.",
          hint: "Yapay zeka ile ilgili endişeleri bulun."
        },
        {
          question: "Was fordern Experten für die Entwicklung von KI?",
          answer: "Experten fordern eine verantwortungsvolle Entwicklung und Nutzung von KI mit klaren Regeln und Grenzen.",
          hint: "Uzmanların taleplerini bulun."
        }
      ]
    },
    {
      id: 2,
      title: "Globalisierung",
      text: `Die Globalisierung hat unsere Welt grundlegend verändert. Durch moderne Kommunikationstechnologien und Transportmöglichkeiten ist die Welt enger zusammengerückt. Doch diese Entwicklung hat nicht nur positive Auswirkungen.

Einerseits profitieren wir von einem weltweiten Warenaustausch, kulturellem Austausch und internationaler Zusammenarbeit. Andererseits gibt es auch negative Folgen: Umweltprobleme, soziale Ungleichheit und kulturelle Konflikte.

Es ist wichtig, die Globalisierung nachhaltig zu gestalten. Dazu gehören faire Handelsbeziehungen, Umweltschutz und die Achtung kultureller Vielfalt.`,
      type: "richtig_falsch_quiz",
      questions: [
        {
          question: "Die Globalisierung hat nur positive Auswirkungen.",
          answer: "falsch",
          hint: "Küreselleşmenin etkilerini kontrol edin."
        },
        {
          question: "Moderne Technologien haben die Welt enger zusammengebracht.",
          answer: "richtig",
          hint: "Teknolojinin etkisini kontrol edin."
        },
        {
          question: "Faire Handelsbeziehungen sind für eine nachhaltige Globalisierung wichtig.",
          answer: "richtig",
          hint: "Sürdürülebilir küreselleşme için gerekli olanları kontrol edin."
        },
        {
          question: "Kulturelle Vielfalt spielt bei der Globalisierung keine Rolle.",
          answer: "falsch",
          hint: "Kültürel çeşitliliğin önemini kontrol edin."
        }
      ]
    },
    {
      id: 3,
      title: "Bildung der Zukunft",
      text: `Die Bildung steht vor großen Herausforderungen. Durch die Digitalisierung und den raschen Wandel der Arbeitswelt müssen sich Bildungssysteme anpassen. Experten fordern eine grundlegende Reform.

Wichtige Aspekte sind:
- Digitale Kompetenzen
- Kritisches Denken
- Kreativität
- Teamfähigkeit
- Lebenslanges Lernen

Traditionelle Unterrichtsmethoden werden durch neue Konzepte ergänzt. Online-Learning, Projektarbeit und interaktive Lernmethoden gewinnen an Bedeutung.`,
      tasks: [
        {
          type: "multiple_choice",
          title: "Aufgabe 1: Lesen Sie den Text. Was erfahren Sie über die Bildung der Zukunft? (Mehrere Antworten sind möglich)",
          questions: [
            {
              question: "Traditionelle Unterrichtsmethoden werden vollständig abgeschafft.",
              answer: false,
              hint: "Geleneksel öğretim yöntemlerinin geleceğini kontrol edin."
            },
            {
              question: "Digitale Kompetenzen werden immer wichtiger.",
              answer: true,
              hint: "Dijital becerilerin önemini kontrol edin."
            },
            {
              question: "Lebenslanges Lernen ist ein wichtiger Aspekt.",
              answer: true,
              hint: "Sürekli öğrenmenin önemini kontrol edin."
            },
            {
              question: "Online-Learning spielt keine Rolle in der Zukunft.",
              answer: false,
              hint: "Online öğrenmenin önemini kontrol edin."
            }
          ]
        },
        {
          type: "open_ended",
          title: "Aufgabe 2: Beantworten Sie die Fragen in vollständigen Sätzen.",
          questions: [
            {
              question: "Welche Kompetenzen werden in der Zukunft wichtig sein?",
              answer: "In der Zukunft werden digitale Kompetenzen, kritisches Denken, Kreativität, Teamfähigkeit und lebenslanges Lernen wichtig sein.",
              hint: "Gelecekte önemli olacak becerileri bulun."
            },
            {
              question: "Warum müssen sich Bildungssysteme anpassen?",
              answer: "Bildungssysteme müssen sich wegen der Digitalisierung und des raschen Wandels der Arbeitswelt anpassen.",
              hint: "Eğitim sistemlerinin neden değişmesi gerektiğini bulun."
            }
          ]
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

      {exercise.type === "richtig_falsch_quiz" && (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#FFF8E1' }}>
          {exercise.questions.map((q, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#E65100' }}>
                {index + 1}. {q.question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[index] || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  <FormControlLabel value="richtig" control={<Radio />} label="Richtig" />
                  <FormControlLabel value="falsch" control={<Radio />} label="Falsch" />
                </RadioGroup>
              </FormControl>
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
                  severity={answers[index] === q.answer ? 'success' : 'error'}
                  sx={{ mt: 1 }}
                >
                  {answers[index] === q.answer
                    ? 'Doğru!'
                    : `Yanlış. Doğru cevap: ${q.answer}`}
                </Alert>
              )}
            </Box>
          ))}
        </Paper>
      )}

      {exercise.type === "multiple_choice_quiz" && (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#FFF8E1' }}>
          {exercise.questions.map((q, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#E65100' }}>
                {index + 1}. {q.question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[index] || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {q.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={optionIndex.toString()}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
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
                  severity={answers[index] === q.answer.toString() ? 'success' : 'error'}
                  sx={{ mt: 1 }}
                >
                  {answers[index] === q.answer.toString()
                    ? 'Doğru!'
                    : `Yanlış. Doğru cevap: ${q.options[q.answer]}`}
                </Alert>
              )}
            </Box>
          ))}
        </Paper>
      )}

      {exercise.tasks && (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#FFF8E1' }}>
          {exercise.tasks.map((task, taskIndex) => (
            <Box key={taskIndex} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#E65100' }}>
                {task.title}
              </Typography>
              {task.type === "multiple_choice" && (
                <>
                  {task.questions.map((q, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={answers[`${taskIndex}-${index}`] || false}
                            onChange={(e) => handleAnswerChange(`${taskIndex}-${index}`, e.target.checked)}
                          />
                        }
                        label={q.question}
                      />
                      {showResults && (
                        <Alert 
                          severity={answers[`${taskIndex}-${index}`] === q.answer ? 'success' : 'error'}
                          sx={{ mt: 1 }}
                        >
                          {answers[`${taskIndex}-${index}`] === q.answer
                            ? 'Doğru!'
                            : `Yanlış. Bu ifade ${q.answer ? 'doğru' : 'yanlış'}.`}
                        </Alert>
                      )}
                    </Box>
                  ))}
                </>
              )}
              {task.type === "open_ended" && (
                <>
                  {task.questions.map((q, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {index + 1}. {q.question}
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        value={answers[`${taskIndex}-${index}`] || ''}
                        onChange={(e) => handleAnswerChange(`${taskIndex}-${index}`, e.target.value)}
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                      <Button 
                        variant="text" 
                        onClick={() => toggleHint(`${taskIndex}-${index}`)}
                        sx={{ color: '#E65100' }}
                      >
                        {showHints[`${taskIndex}-${index}`] ? 'İpucunu Gizle' : 'İpucu Göster'}
                      </Button>
                      {showHints[`${taskIndex}-${index}`] && (
                        <Alert severity="info" sx={{ mt: 1 }}>
                          {q.hint}
                        </Alert>
                      )}
                      {showResults && (
                        <Alert 
                          severity={answers[`${taskIndex}-${index}`]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'success' : 'error'}
                          sx={{ mt: 1 }}
                        >
                          {answers[`${taskIndex}-${index}`]?.toLowerCase().trim() === q.answer.toLowerCase().trim()
                            ? 'Doğru!'
                            : `Yanlış. Doğru cevap: ${q.answer}`}
                        </Alert>
                      )}
                    </Box>
                  ))}
                </>
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