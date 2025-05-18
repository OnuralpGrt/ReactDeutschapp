import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper, Tabs, Tab } from '@mui/material';

const questions = {
  A1: [
    {
      question: 'Guten Tag, ich bin Tim Schneider. Und wie _________ Sie?\n▲ Louis Moreau.',
      options: ['heißt', 'heißen', 'sind'],
      answer: 1
    },
    {
      question: 'Was _________ du?\n▲ Deutsch und ein bisschen Englisch.',
      options: ['spricht', 'sprechst', 'sprichst'],
      answer: 2
    },
    {
      question: '_________ kommen Sie, Herr Dupont? ▲ _________ Frankreich.',
      options: ['Wo ... In', 'Woher ... Aus', 'Woher ... Im'],
      answer: 1
    },
    {
      question: '_________ du Kinder? ▲ Ja, zwei.',
      options: ['Haben', 'Habt', 'Hast'],
      answer: 2
    },
    {
      question: 'Das _________ meine Schwester und das _________ meine Eltern.',
      options: ['ist ... sind', 'ist ... ist', 'sind ... ist'],
      answer: 0
    },
    {
      question: 'Das sind Claire und Charles. _________ leben in der Schweiz.',
      options: ['Wir', 'Sie', 'Ihr'],
      answer: 1
    },
    {
      question: 'Wo _________ ihr? ▲ In Berlin.',
      options: ['kommt', 'liebt', 'wohnt'],
      answer: 2
    },
    {
      question: 'Mama, ist das eine Tomate? ▲ Nein. Das ist doch _________ Tomate, das ist eine Orange.',
      options: ['nicht', 'keine', 'kein'],
      answer: 1
    },
    {
      question: 'Möchten Sie sonst noch etwas? ▲ Ja, ich brauche noch _________. Was kostet ein Kilo?',
      options: ['Äpfel', 'Apfeln', 'Äpfeln'],
      answer: 0
    },
    {
      question: '_________ du auch gern Pizza?',
      options: ['Esst', 'Essen', 'Isst'],
      answer: 2
    },
    {
      question: 'Wie gefällt Ihnen der Tisch hier? ▲ Gut, _________ ist sehr schön.',
      options: ['sie', 'es', 'er'],
      answer: 1
    },
    {
      question: 'Das Wohnzimmer ist sehr klein. ▲ Was? Das Zimmer ist doch _____ klein. Es ist groß!',
      options: ['nicht', 'kein', 'keine'],
      answer: 0
    },
    {
      question: 'Ist die Wohnung teuer? ▲ Nein, sie ist sehr _________.',
      options: ['breit', 'neu', 'billig'],
      answer: 2
    },
    {
      question: 'Wie spät ist es? ▲ Es ist 13.25 Uhr',
      options: ['fünf nach halb eins', 'fünfundzwanzig nach dreizehn', 'fünf vor halb zwei'],
      answer: 2
    },
    {
      question: 'Was machst du gern? ▲ Ich _________.',
      options: ['fernsehe', 'sehe gern fern', 'sehen fern gern'],
      answer: 1
    },
    {
      question: 'Wann ist die Praxis geöffnet? ▲ _______ 8 Uhr 30 ________ 16 Uhr 30.',
      options: ['Von ... bis', 'Um ... um', 'Bis ... von'],
      answer: 0
    },
    {
      question: 'Was machst du _______ Freitag? ▲ Da habe ich ______ 15 Uhr einen Englischkurs.',
      options: ['bis ... am', 'am ... um', 'in ... um'],
      answer: 1
    },
    {
      question: 'Hast du _________ Lieblingsfilm? ▲ Ja, Metropolis. Der Film ist super!',
      options: ['ein', 'der', 'einen'],
      answer: 0
    },
    {
      question: 'Wie findest du die Lampe? ▲ Schön. Aber ich brauche _________ Lampe.',
      options: ['keine', 'nicht', 'keinen'],
      answer: 0
    },
    {
      question: 'Was ist dein Hobby? ▲ Lesen. _________ auch gern?',
      options: ['Liest du', 'Lest du', 'Lesest du'],
      answer: 0
    },
    {
      question: 'Hast du den Wein nicht dabei? ▲ _________! Hier ist er.',
      options: ['Ja', 'Nein', 'Doch'],
      answer: 2
    },
    {
      question: 'Die Suppe schmeckt nicht. Ich _________ einfach nicht kochen.',
      options: ['können', 'könne', 'kann'],
      answer: 2
    },
    {
      question: 'Die Wochenendkurse hier sind sehr interessant. ▲ Ich _________ aber am Wochenende keinen Kurs ___________.',
      options: ['wolle ... machen', 'will … machen', 'möchten … machen'],
      answer: 1
    },
    {
      question: 'Was _________ du am Sonntag gemacht? ▲ Nichts.',
      options: ['bist', 'kannst', 'hast'],
      answer: 2
    },
    {
      question: 'Ich bin am Wochenende zu Marco _________.',
      options: ['gegehen', 'gekommt', 'gefahren'],
      answer: 2
    },
    {
      question: 'Was sind Sie von Beruf? ▲ Ich arbeite _________ Journalist.',
      options: ['als', 'bei', 'in'],
      answer: 0
    },
    {
      question: 'Wir gehen Fußball spielen. ▲_________ du __________?',
      options: ['Rufst … an', 'Kommst … mit', 'Räumst … auf'],
      answer: 1
    },
    {
      question: 'Tim hat Lara im Deutschkurs _________.',
      options: ['gekennenlernt', 'kennengelernen', 'kennengelernt'],
      answer: 2
    },
    {
      question: 'Wie heißt das Partizip II von "sprechen"?',
      options: ['gesprechen', 'gesprecht', 'gesprochen'],
      answer: 2
    },
    {
      question: 'Die Sonne ________.',
      options: ['schneit', 'scheint', 'regnet'],
      answer: 1
    },
    {
      question: 'Es sind nur 3 Grad. Es ist ________.',
      options: ['kalt', 'warm', 'heiß'],
      answer: 0
    },
    {
      question: 'Wie viel Uhr ist es? ▲Es ist 18.15 Uhr.',
      options: ['sechs Uhr fünfzehn', 'Viertel nach achtzehn', 'achtzehn Uhr fünfzehn'],
      answer: 2
    },
    {
      question: 'Wie viel Uhr ist es? ▲Es ist 19.58 Uhr.',
      options: ['Es ist zwei vor zwanzig', 'Es ist kurz vor acht', 'Es ist kurz nach acht'],
      answer: 0
    },
    {
      question: 'Wie heißt das Gegenteil von "dunkel"?',
      options: ['groß', 'hell', 'alt'],
      answer: 1
    },
    {
      question: 'Das ist Sofia und das ist ________ Vater Walter.',
      options: ['ihr', 'sein', 'mein'],
      answer: 0
    },
    {
      question: 'Das ist Tim und das ist ________ Freundin Lara.',
      options: ['deine', 'seine', 'ihre'],
      answer: 1
    },
    {
      question: 'Frau Baumann, ist das ________ Schwester?',
      options: ['ihre', 'deine', 'Ihre'],
      answer: 2
    },
    {
      question: 'Du studierst nicht, oder?   ► _________, ich studiere Biologie.',
      options: ['Ja', 'Doch', 'Nein'],
      answer: 1
    },
    {
      question: 'Ich habe __________ Laptop, aber __________ Handy.',
      options: ['einen / keinen', 'kein / ein', 'keinen / ein'],
      answer: 2
    },
    {
      question: 'Was hätten Sie gern? ► Ein Stück ___________ bitte.',
      options: ['Kuchen', 'Suppe', 'Tee'],
      answer: 0
    },
    {
      question: 'Ich _____ 20 Jahre alt.',
      options: ['bin', 'habe'],
      answer: 0
    },
    {
      question: 'Ich ____ keine Geschwister.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Ich ____ heute keine Zeit.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Ich ____ heute keinen Unterricht.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Ich ____ eine Studentin.',
      options: ['bin', 'habe'],
      answer: 0
    },
    {
      question: 'Wir ____ zu Hause.',
      options: ['sind', 'haben'],
      answer: 0
    },
    {
      question: 'Was ____ du von Beruf?',
      options: ['bist', 'hast'],
      answer: 0
    },
    {
      question: '____ du einen Stift?',
      options: ['Bist', 'Hast'],
      answer: 1
    },
    {
      question: '____ du krank?',
      options: ['Bist', 'Hast'],
      answer: 0
    },
    {
      question: '____ du ein Wörterbuch?',
      options: ['Bist', 'Hast'],
      answer: 1
    },
    {
      question: '____ du Hausaufgaben?',
      options: ['Bist', 'Hast'],
      answer: 1
    },
    {
      question: 'Du ____ sehr nett.',
      options: ['bist', 'hast'],
      answer: 0
    },
    {
      question: 'Ich ____ eine Wohnung.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: '____ ihr ein Auto?',
      options: ['Seid', 'Habt'],
      answer: 1
    },
    {
      question: '____ ihr an der Uni?',
      options: ['Seid', 'Habt'],
      answer: 0
    },
    {
      question: 'Ihr ____ zu spät.',
      options: ['seid', 'habt'],
      answer: 0
    },
    {
      question: 'Ich ____ einen Termin.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Sie ____ eine Lehrerin von Beruf.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Ich ____ keinen Beruf.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Wir ____ verheiratet und ____ zwei Kinder.',
      options: ['sind / haben', 'haben / sind'],
      answer: 0
    },
    {
      question: '____ Sie verheiratet?',
      options: ['Sind', 'Haben'],
      answer: 0
    },
    {
      question: '____ Sie Ihren Ausweis dabei?',
      options: ['Sind', 'Haben'],
      answer: 1
    },
    {
      question: 'Wie ____ Ihre Handynummer?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Meine Wohnung ____ zwei Zimmer.',
      options: ['ist', 'hat'],
      answer: 1
    },
    {
      question: 'Wie ____ Ihr Familienname bitte?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Meine Kollegin ____ leider nicht da.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: '____ Sie eine Türkin?',
      options: ['Sind', 'Haben'],
      answer: 0
    },
    {
      question: 'Wo ____ der Deutschkurs?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Wie ____ deine Adresse?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: '____ ihr noch Fragen?',
      options: ['Seid', 'Habt'],
      answer: 1
    },
    {
      question: 'Das ____ kein Problem.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Entschuldigen Sie, wir ____ ein Problem.',
      options: ['sind', 'haben'],
      answer: 1
    },
    {
      question: 'Entschuldigen Sie, wo ____ die Post?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Guten Tag, ____ hier noch frei?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Es tut mir leid, wir ____ heute keinen Platz.',
      options: ['sind', 'haben'],
      answer: 1
    },
    {
      question: 'Hallo, mein Name ____ Deniz.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: '____ Sie Kleingeld?',
      options: ['Sind', 'Haben'],
      answer: 1
    },
    {
      question: 'Tut mir leid, ich ____ kein Geld dabei.',
      options: ['bin', 'habe'],
      answer: 1
    },
    {
      question: 'Wer ____ ein Wörterbuch?',
      options: ['ist', 'hat'],
      answer: 1
    },
    {
      question: 'Wer ____ neu hier?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Wer ____ Wasser dabei?',
      options: ['ist', 'hat'],
      answer: 1
    },
    {
      question: '____ Istanbul die Hauptstadt von der Türkei?',
      options: ['Ist', 'Hat'],
      answer: 0
    },
    {
      question: '____ Deutsch Ihre Muttersprache?',
      options: ['Ist', 'Hat'],
      answer: 0
    },
    {
      question: '____ Sie Hobbys?',
      options: ['Haben', 'Sind'],
      answer: 0
    },
    {
      question: 'Es ____ zu laut hier.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: '____ du einen Computer?',
      options: ['Hast', 'Bist'],
      answer: 0
    },
    {
      question: 'Wo ____ meine Brille?',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Er ____ Fieber.',
      options: ['ist', 'hat'],
      answer: 1
    },
    {
      question: 'Das ____ nicht meine Tasche.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: 'Der Tisch ____ teuer.',
      options: ['ist', 'hat'],
      answer: 0
    },
    {
      question: '____ du Lust auf ein Spiel?',
      options: ['Bist', 'Hast'],
      answer: 1
    },
    {
      question: '….. Kleid findest du schöner?  - …..  rote hier.',
      options: ['Welchen – Diesen', 'Welches – Dieses', 'Welche – Diese'],
      answer: 1
    },
    {
      question: 'Wir sind auf einer Insel und hier ….. keine Autos fahren.',
      options: ['müssen', 'können', 'dürfen'],
      answer: 2
    },
    {
      question: 'Warum geht Tim nicht zur Schule? - Weil …. .',
      options: ['krank er ist.', 'er krank ist.', 'er ist krank.'],
      answer: 1
    },
    {
      question: 'Heute regnet es. ___ können wir nicht draußen spielen.',
      options: ['Deshalb', 'Denn', 'Aber'],
      answer: 0
    },
    {
      question: 'Claudia, hast du …. Notizbuch gesehen? -  Ja, es liegt … Regal.',
      options: ['mein – im', 'meine – ins', 'mein – ins'],
      answer: 0
    },
    {
      question: 'Kommst du mit ins Kino? – Nein, ich kann diesmal ….. .',
      options: ['nicht', 'kein', 'nie'],
      answer: 0
    },
    {
      question: 'Was ….. man hier alles machen?',
      options: ['kannt', 'kann', 'könne'],
      answer: 1
    },
    {
      question: 'Kommt ihr heute? - Nein,  leider haben wir heute …. Zeit. …. morgen kommen wir gerne.',
      options: ['keine - Aber', 'kein - Denn', 'keine – Weil'],
      answer: 0
    },
    {
      question: 'Kann mir jemand ein … und … Buch empfehlen?',
      options: ['spannendes – fesselndes', 'langweiliges – uninteressantes', 'dünnes  - zerrissenes'],
      answer: 0
    },
    {
      question: 'Welcher Pullover gefällt dir am besten?  - Dieser … sieht gut aus.',
      options: ['schwarzen', 'schwarze', 'schwarzes'],
      answer: 1
    },
    {
      question: 'Was wünscht du dir zu Weihnachten? - Ich wünsche … einen neuen Schal.',
      options: ['mir', 'mich', 'meinen'],
      answer: 0
    },
    {
      question: 'Guten Tag! Mein Name ist Schneider. Ich möchte bitte mit ….. sprechen.',
      options: ['Herr Fischer', 'Herrn Fischer', 'Herren Fischer'],
      answer: 1
    },
    {
      question: 'Seit wann leben Sie in Berlin? Seit  … Jahr.',
      options: ['ein', 'einen', 'einem'],
      answer: 2
    },
    {
      question: 'Was macht er gern? - … .',
      options: ['Er sieht fern gern .', 'Er sieht gern fern.', 'Er fernsehen gern.'],
      answer: 1
    },
    {
      question: 'Sylvester ist am …. Dezember.',
      options: ['einunddreizigsten', 'einunddreißigsten', 'einsunddreizigsten'],
      answer: 1
    },
    {
      question: 'Mein Urlaub in den Alpen war super! – Schön, dass es … dort gefallen hat.',
      options: ['dir', 'mir', 'ihm'],
      answer: 0
    },
    {
      question: 'Ich bin der Meinung, … du mitfahren solltest.',
      options: ['dass', 'ob', 'wenn'],
      answer: 0
    },
    {
      question: 'Möchten Sie bestellen? – Ja, ich__________ ein Schnitzel und eine Cola.',
      options: ['zahle', 'würde gern', 'hätte gern'],
      answer: 2
    },
    {
      question: 'Wann ist Vanessa geboren? -  ….',
      options: ['Am sechsten April.', 'Im sechsten April.', 'Um sechsten April.'],
      answer: 0
    },
    {
      question: 'Schmeckt dir die Pizza nicht? - …..',
      options: ['Ja, sie schmeckt mir.', 'Doch, sie schmeckt mir.', 'Ich esse gerne Pizza.'],
      answer: 1
    },
    {
      question: 'Welche Kombination passt nicht?\nDownloaden-Hochladen\nb) Produktion-Herstellung\nc) Experiment-Versuch\nd) Produkt-Ware',
      options: ['Downloaden-Hochladen', 'Produktion-Herstellung', 'Experiment-Versuch', 'Produkt-Ware'],
      answer: 3
    },
    {
      question: 'Welche Kombination passt nicht?\nReservierung-Buchung\nb) Start - Ende\nc) Event-Veranstaltung\nd) Studie - Forschung',
      options: ['Reservierung-Buchung', 'Start - Ende', 'Event-Veranstaltung', 'Studie - Forschung'],
      answer: 1
    },
    {
      question: 'Welche Kombination passt nicht?\nÄußerlichkeit-Innerlichkeit\nb) Tiefe-Höhe\nc) Länge-Breite\nd) Umgebung-Gegend',
      options: ['Äußerlichkeit-Innerlichkeit', 'Tiefe-Höhe', 'Länge-Breite', 'Umgebung-Gegend'],
      answer: 3
    },
    {
      question: 'Welche Kombination passt nicht?\nHinauf-Hinunter\nb) Draußen-im Freien\nc) Drinnen-Draußen\nd) Hinein-Hinaus',
      options: ['Hinauf-Hinunter', 'Draußen-im Freien', 'Drinnen-Draußen', 'Hinein-Hinaus'],
      answer: 1
    },
    {
      question: 'Was passt nicht?\ndie Einwohnerzahl\nb) die Fläche\nc) die Wahl\nd) die Nachbarländer',
      options: ['die Einwohnerzahl', 'die Fläche', 'die Wahl', 'die Nachbarländer'],
      answer: 2
    },
    {
      question: 'Was passt nicht?\nStabilität-Schwankung\nb) Anstieg-Wachstum\nc) Reduzierung-Vermehrung\nd) Senkung-Steigerung',
      options: ['Stabilität-Schwankung', 'Anstieg-Wachstum', 'Reduzierung-Vermehrung', 'Senkung-Steigerung'],
      answer: 1
    },
    {
      question: 'Was passt nicht nicht? Geld .............\nsparen\nb) ausgeben\nc) verbrauchen\nd) abheben',
      options: ['sparen', 'ausgeben', 'verbrauchen', 'abheben'],
      answer: 2
    },
    {
      question: 'Was passt nicht? Geld .....\nkaufen\nb) anlegen\nc) verdienen\nd) überweisen',
      options: ['kaufen', 'anlegen', 'verdienen', 'überweisen'],
      answer: 0
    },
    {
      question: 'Was passt nicht? Medikamente .........\nnehmen\nb) verschreiben\nc) heilen \td) schicken',
      options: ['nehmen', 'verschreiben', 'heilen', 'schicken'],
      answer: 3
    },
    {
      question: 'Was passt nicht? Patienten ..........\nuntersuchen\nb) suchen\nc) behandeln\td) überweisen',
      options: ['untersuchen', 'suchen', 'behandeln', 'überweisen'],
      answer: 1
    },
    {
      question: 'Was passt? Maßnahmen .....\nbekommen\nb) nehmen\nc) sein\td) treffen',
      options: ['bekommen', 'nehmen', 'sein', 'treffen'],
      answer: 3
    },
    {
      question: 'Was passt? Erfahrungen .....\nsammeln\nb) finden\nc) geben\td) nehmen',
      options: ['sammeln', 'finden', 'geben', 'nehmen'],
      answer: 0
    },
    {
      question: 'Was gehört nicht zu einer Bewerbungsmappe?\ndie Rechnung\nb) Zeugnisse und Bescheinigungen\nc) ein Foto\nd) ein Bewerbungsschreiben\ne) der Lebenslauf',
      options: ['die Rechnung', 'Zeugnisse und Bescheinigungen', 'ein Foto', 'ein Bewerbungsschreiben', 'der Lebenslauf'],
      answer: 0
    },
    {
      question: 'Welchen Teil umfasst der Lebenslauf nicht?\nBerufserfahrung\nb) Schulabschluss\nc) EDV-Kenntnisse\nd) Ausbildung der Kinder\ne) Sprachkenntnisse',
      options: ['Berufserfahrung', 'Schulabschluss', 'EDV-Kenntnisse', 'Ausbildung der Kinder', 'Sprachkenntnisse'],
      answer: 3
    },
    {
      question: 'Welche Information gehört nicht zum Reklamationsschreiben?',
      options: ['die Rechnungsnummer', 'Mit wem ich das Produkt gekauft habe', 'das Rechnungs- und Lieferdatum', 'Modell des Artikels', 'ausführliche Beschreibung des Problems'],
      answer: 1
    },
    {
      question: 'Welche Rechte hat man bei einer Reklamation?',
      options: ['das Produkt selbst reparieren', 'Reparatur', 'einen Gutschein bekommen', 'das Geld zurückbekommen', 'umtauschen'],
      answer: 0
    },
    {
      question: 'Welche Schulabschlüsse braucht man für die Universitätsaufnahme?',
      options: ['die Hochschulreife', 'Teilnahmebescheinigung für den Deutschkurs am Goethe Institut', 'den Führerschein', 'das Abitur', 'den Hauptschulabschluss'],
      answer: 1
    },
    {
      question: 'Welche Tätigkeit gehört nicht zum Berufsalltag?',
      options: ['sich mit Kollegen zum Kaffeeklatsch treffen', 'Produkte entwickeln', 'eine Besprechung haben', 'Kunden besuchen', 'neue Produkte präsentieren'],
      answer: 0
    },
    {
      question: 'Sie müssen einen Termin verschieben oder absagen. Welche Ausrede klingt nicht sehr glaubwürdig?',
      options: [
        'Ich wollte dich so gern sehen, aber ich fühle mich nicht gut. Ich glaube, ich habe Fieber.',
        'Mein Flug hat leider eine Stunde Verspätung.',
        'Ich habe eine Reifenpanne. Leider muss ich mein Auto zur Werkstatt bringen.',
        'Ich bin im Stau stecken geblieben. Ich suche einen Umweg.',
        'Ich bin im Tunnel und mein Handy funktioniert nicht gut. Ich höre Sie leider nicht.'
      ],
      answer: 0
    },
    {
      question: 'Ihr plant einen Wanderausflug mit der Klasse zusammen. Welche Probleme muss man lösen?',
      options: [
        'womit man hinfahren soll.',
        'ob man etwas zum Essen und Trinken mitnehmen soll.',
        'wann und wo man sich vor der Abfahrt treffen soll.',
        'was für ein Souvenir man als Geschenk kaufen soll.',
        'wie das Wetter am Reisetag wird und was für eine Ausrüstung man braucht.'
      ],
      answer: 3
    },
    {
      question: 'Welche Struktur oder welches Redemittel ist für eine höfliche Bitte unpassend?',
      options: [
        'Gib mir ..........!',
        'Würdest du bitte ?',
        'Wurdest du ........?',
        'Könntest du bitte ?',
        'Hättest du vielleicht ?'
      ],
      answer: 0
    },
    {
      question: 'Welche Struktur oder welches Redemittel passt einer guten Ratschlag-Formulierung nicht?',
      options: [
        'Wenn ich du wäre, ..........',
        'Es ist schade, dass du nicht .......',
        'An Ihrer Stelle würde ich .......',
        'Ich würde Ihnen nur raten, .............',
        'Du solltest lieber ..........'
      ],
      answer: 1
    },
    {
      question: 'Du möchtest deinem Freund zustimmen. Was sagst du nicht?',
      options: [
        'Du hast Recht.',
        'Ich stimme völlig zu.',
        'Ich bin eher einer anderen Meinung.',
        'Ich sehe das auch so.',
        'Ich bin der gleichen Meinung.'
      ],
      answer: 2
    },
    {
      question: 'Du möchtest über Vor- und Nachteile der öffentlichen Verkehrsmittel sprechen. Was sagst du nicht?',
      options: [
        'Die Fahrkarten sind nicht so teuer wie die Benzinkosten der privaten Autos. Das sehe ich auch positiv.',
        'Es gibt viele Vor- und Nachteile für öffentliche Verkehrsmitteln.',
        'Es ist von Nachteil, dass man in Bussen kaum einen Sitzplatzt finden kann.',
        'Mit der U-Bahn bleibt man nicht im Stau stehen. Das ist ein großer Vorteil.',
        'Bei uns in der Türkei nehmen viele Studenten öffentliche Verkehrsmittel zur Uni.'
      ],
      answer: 4
    },
    {
      question: 'Du beschreibst eine Grafik. Was sagst du nicht?',
      options: [
        'Die Forscher haben den Befragten 20 Fragen gestellt. Diese waren teilweise Ja/Nein -Fragen.',
        'Mich hat es überrascht, dass die Befragten nicht genug Interesse für dieses Kriterium gezeigt haben.',
        'An zweiter Stelle kommt der Stadturlaub mit 35 Prozent. Dann folgt der Kururlaub mit 22 Prozent.',
        'Die Daten der Grafik stammen aus einer Studie der Verbraucherzentrale.',
        'In dieser Grafik geht es um eine Studie, die sich mit dem Konsumverhalten der Jugendlichen in Deutschland beschäftigt'
      ],
      answer: 1
    },
    {
      question: 'In Großstädten gibt es viele Herausforderungen, besonders im Bereich Verkehr. -1- die Bevölkerungsdichte in Großstädten Tag für Tag steigt, nehmen auch die Verkehrsprobleme zu.',
      options: ['Obwohl', 'Während', 'Wenn'],
      answer: 1
    },
    {
      question: '-2- viele Menschen in die Stadt ziehen, gibt es oft zu wenig Platz auf den Straßen.',
      options: ['als', 'deshalb', 'Weil'],
      answer: 2
    },
    {
      question: '-3- viele Autos unterwegs sind, dauert es oft lange, bis man an sein Ziel gelangt.',
      options: ['Da', 'Damit', 'Wenn'],
      answer: 0
    },
    {
      question: '-4- die öffentlichen Verkehrsmittel modernisiert werden, gibt es häufig Verspätungen und Überfüllungen.',
      options: ['Trotzdem', 'Obwohl', 'Weil'],
      answer: 1
    },
    {
      question: 'Viele Menschen versuchen, alternative Routen zu finden. -5- der ständige Stau ist nervig.',
      options: ['Weil', 'Deshalb', 'Denn'],
      answer: 2
    },
    {
      question: '-6- man oft im Stau steht, sollte man sich über eine andere Verkehrsmöglichkeit Gedanken machen.',
      options: ['Wenn', 'Denn', 'Obwohl'],
      answer: 0
    },
    {
      question: '-7- die Technologie voranschreitet, braucht man immer noch intelligentere Verkehrssysteme,',
      options: ['Denn', 'Obwohl', 'Wenn'],
      answer: 1
    },
    {
      question: '-8- den Verkehr zu regeln.',
      options: ['um', 'damit', 'weil'],
      answer: 0
    },
    {
      question: 'Ich __________, dass er es nicht böse __________.',
      options: ['habe verstanden - gemeint hat', 'bin verstanden – gemein ist', 'habe verstehe – habt gemeint'],
      answer: 0
    },
    {
      question: 'Maria __________, dass sie doch nach London reist.',
      options: ['ist sich entschieden', 'hat sich entscheiden', 'hat sich entschieden'],
      answer: 2
    },
    {
      question: 'Wir __________, Herrn Müller anzurufen.',
      options: ['sind vergessen', 'haben vergessen', 'haben vergisst'],
      answer: 1
    },
    {
      question: 'Er  __________ den Weg mehrmals __________.',
      options: ['hat - beschrieben', 'ist - beschrieben', 'habe - beschreiben'],
      answer: 0
    },
    {
      question: 'Er __________ letzte Woche ein unvergessliches Konzert ____.',
      options: ['hast - erleben', 'hat - erlebt', 'ist - erlebt'],
      answer: 1
    },
    {
      question: 'Was _____ du ihm gestern  __________?',
      options: ['hast - empfohlen', 'hast - empfehlen', 'habst - empfohlenen'],
      answer: 0
    },
    {
      question: '___ du das neue Buch von dem Autor __________?',
      options: ['Bist - gelesen', 'Habst - geliest', 'Hast - gelesen'],
      answer: 2
    },
    {
      question: 'Frau Sanchez  __________ ihre Sprachkenntnisse ___ .',
      options: ['hat - verbessert', 'haben - verbessert', 'haben - verbessert'],
      answer: 0
    },
    {
      question: 'Wir __________ die Präsentation _________.',
      options: ['haben - vorbereiten', 'sind - vorbereitet', 'haben - vorbereitet'],
      answer: 2
    },
    {
      question: 'Er __________ jedes Mal eine interessante Geschichte _____.',
      options: ['hat -  erfunden', 'ist - erfunden', 'habt - erfunden'],
      answer: 0
    },
    {
      question: 'Eva hofft _____, dass sie eine gute Note von der Prüfung bekommt.',
      options: ['für', 'darauf', 'auf', 'dafür'],
      answer: 1
    },
    {
      question: 'Max wartet ______ den Tag, an dem er endlich mit B2 anfangen kann.',
      options: ['darauf', 'auf', 'dafür', 'für'],
      answer: 1
    },
    {
      question: 'Mara interessiert sich ______ asiatische Sprachen.',
      options: ['auf', 'darauf', 'dafür', 'für'],
      answer: 3
    },
    {
      question: 'Tim sorgt ______, dass seine Firma gut verdient.',
      options: ['darauf', 'für', 'dafür', 'auf'],
      answer: 2
    },
    {
      question: 'Lara und Bea nehmen ………… Konferenz teil.',
      options: ['mit dem', 'an den', 'für den', 'an der'],
      answer: 3
    },
    {
      question: 'Wer wartet …………. Bea?',
      options: ['für', 'darauf', 'auf', 'an'],
      answer: 2
    },
    {
      question: 'Wir sind ... interessiert, einen Sprachkurs zu eröffnen.',
      options: ['für', 'an', 'dafür', 'daran'],
      answer: 3
    },
    {
      question: 'Maria bereitet sich ... vor, nächsten Monat nach Deutschland zu reisen.',
      options: ['dafür', 'darauf', 'daran', 'für'],
      answer: 1
    },
    {
      question: 'Mehmet redet ..., was gestern im Kurs passiert ist.',
      options: ['darüber', 'damit', 'von das', 'mit'],
      answer: 0
    },
    {
      question: 'Die Lehrerin freut sich ……. die gute Leistung ihrer Klasse.',
      options: ['auf', 'darüber', 'mit', 'über'],
      answer: 3
    },
    {
      question: 'Nach dem B2-Kurs möchte Maya ... eine Therapie anfangen.',
      options: ['mit', 'auf', 'über', 'an'],
      answer: 0
    },
    {
      question: 'Zeynep warnt uns ... dem Unwetter am Wochenende.',
      options: ['für', 'vor', 'gegen', 'gegenüber'],
      answer: 1
    },
    {
      question: 'Das Wetter ist _____ heute.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 3
    },
    {
      question: 'Ein _____ läuft im Park.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 1
    },
    {
      question: 'Er ________ mit einem Ball spielen.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 11
    },
    {
      question: 'Ich möchte im See _____ , ______ er ist kalt.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 5
    },
    {
      question: 'Mein Bruder hat einen _____ Ball.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 10
    },
    {
      question: 'Wir _____ Pizza zum Mittagessen im Park.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 8
    },
    {
      question: 'Eine Katze ____________ neben uns. Die Katze ist sehr _____ und süß.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 2
    },
    {
      question: 'Manche ________ machen Picknick.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 7
    },
    {
      question: 'Zwei ___________ Kinder ______________ und hören ____________.',
      options: ['kleine', 'Hund', 'liegt', 'schön', 'tanzen', 'schwimmen', 'klein', 'Familien', 'essen', 'Musik', 'großen', 'möchte', 'aber'],
      answer: 0
    },
    {
      question: 'Ich habe Deutsch _______________.',
      options: ['gelernt', 'gelernen', 'gelerntet'],
      answer: 0
    },
    {
      question: 'Wir haben einen Apfel _______________.',
      options: ['gegessen', 'gegesset', 'gegess'],
      answer: 0
    },
    {
      question: 'Sie hat ein Bild _______________.',
      options: ['gemalt', 'gemalen', 'gemalet'],
      answer: 0
    },
    {
      question: 'Du hast viel _______________.',
      options: ['gearbeitet', 'gearbeit', 'gearbeitet'],
      answer: 0
    },
    {
      question: 'Papa hat das Auto _______________.',
      options: ['gewaschen', 'gewaschen', 'gewaschen'],
      answer: 0
    },
    {
      question: 'Oma hat Kuchen _______________.',
      options: ['gebacken', 'gebackt', 'gebacket'],
      answer: 0
    },
    {
      question: 'Ich habe einen Brief _______________.',
      options: ['geschrieben', 'geschreibet', 'geschreibt'],
      answer: 0
    },
    {
      question: 'Ihr habt Musik _______________.',
      options: ['gehört', 'gehöret', 'gehörtet'],
      answer: 0
    },
    {
      question: 'Lisa hat das Fenster _______________.',
      options: ['geöffnet', 'geöffnt', 'geöffnet'],
      answer: 0
    },
    {
      question: 'Wir haben im Park _______________.',
      options: ['gespielt', 'gespiel', 'gespielt'],
      answer: 0
    },
    {
      question: 'Er hat eine Geschichte _______________.',
      options: ['erzählt', 'erzählen', 'erzähltet'],
      answer: 0
    },
    {
      question: 'Du hast ein Buch _______________.',
      options: ['gelesen', 'gelesst', 'geleset'],
      answer: 0
    },
    {
      question: 'Wir haben das Zimmer _______________.',
      options: ['aufgeräumt', 'aufräumen', 'aufgeräumet'],
      answer: 0
    },
    {
      question: 'Ich habe Wasser _______________.',
      options: ['getrunken', 'getrunk', 'getrunkt'],
      answer: 0
    },
    {
      question: 'Ihr habt sehr laut _______________.',
      options: ['gelacht', 'gelachen', 'gelachtet'],
      answer: 0
    },
    {
      question: 'Sie hat das Brot _______________.',
      options: ['gegessen', 'gegesset', 'gegess'],
      answer: 0
    },
    {
      question: 'Wir haben einen Film _______________.',
      options: ['gesehen', 'geseht', 'gesehet'],
      answer: 0
    },
    {
      question: 'Ich habe meine Hausaufgaben _______________.',
      options: ['gemacht', 'gemachen', 'gemachet'],
      answer: 0
    },
    {
      question: 'Er hat mit dem Hund _______________.',
      options: ['gespielt', 'gespiel', 'gespielt'],
      answer: 0
    },
    {
      question: 'Du hast das Licht _______________.',
      options: ['ausgemacht', 'ausgemachen', 'ausgemachet'],
      answer: 0
    },
    {
      question: 'Ihr habt das Bild _______________.',
      options: ['gemalt', 'gemalen', 'gemalet'],
      answer: 0
    },
    {
      question: 'Ich habe meine Tasche _______________.',
      options: ['gepackt', 'gepacken', 'gepacket'],
      answer: 0
    },
    {
      question: 'Wir haben die Hausaufgabe _______________.',
      options: ['gemacht', 'gemachen', 'gemachet'],
      answer: 0
    },
    {
      question: 'Sie hat mit mir _______________.',
      options: ['gesprochen', 'gesprechen', 'gesprecht'],
      answer: 0
    },
    {
      question: 'Du hast den Ball _______________.',
      options: ['gebracht', 'gebrachten', 'gebrachtet'],
      answer: 0
    },
    {
      question: 'In der Mail an die Touristeninformation: Ich suche dringend eine günstige Unterkunft für meine Reise nach München. Können ______ bitte kurz über die durchschnittlichen Zimmerpreise informieren?',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 0
    },
    {
      question: 'Im Restaurant: Entschuldigen Sie bitte! Meine Freundin und ich möchten gern etwas zum Essen bestellen. Können ______ bitte eine Speisekarte bringen?',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 1
    },
    {
      question: 'Im Café: Wie schmeckt ______ der Cappuccino, Liebling? Hättest du noch etwas Sahne?',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 2
    },
    {
      question: 'Im Krankenhaus: Legen Sie sich bitte hin. Wo tut es ______ genau weh? Hier am Fuß oder am Knie?',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 3
    },
    {
      question: 'Anruf bei der Firma: Guten Tag, Herr Meier! Frau Schilling hat gerade eine Besprechung. Schreiben Sie ______ lieber eine Mail und schicken Sie auch den digitalen Katalog mit. Die Mailadresse von Frau Schilling ist schilling@firma.de. Ich buchstabiere s-c-h …………………….',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 4
    },
    {
      question: 'An der Hotelrezeption: Entschuldigen Sie! Ich kann meinen Zimmerschlüssel nicht finden. Ich glaube, ich habe ______ im Zimmer vergessen. Können ______ mir bitte einen neuen Schlüssel geben?',
      options: ['mich', 'uns', 'dir', 'ihnen', 'Ihnen', 'ihn', 'Sie'],
      answer: 5
    }
  ],
  A2: [
    {
      question: 'Hi, Lisa. Wie geht\'s? Sag mal, was _____ los gestern Abend bei dir zu Hause?',
      options: ['hatte', 'ist', 'war', 'hat'],
      answer: 2
    },
    {
      question: '______ du vielleicht eine Party zu Hause?',
      options: ['bist', 'hattest', 'hast', 'war'],
      answer: 1
    },
    {
      question: 'Was ______ ihr denn ______?',
      options: ['habt ...... gefeiert', 'hast ….gefeiert'],
      answer: 0
    },
    {
      question: '______ gestern dein Geburtstag?',
      options: ['bist', 'ist', 'hatte', 'war'],
      answer: 3
    },
    {
      question: 'Entschuldige bitte! Das habe ich nicht ______. Herzlichen Glückwunsch!',
      options: ['gewusst', 'gewisst'],
      answer: 0
    },
    {
      question: 'Warum hast du mich nicht ______?',
      options: ['einladen', 'eingeladet', 'eingeladen'],
      answer: 2
    },
    {
      question: 'Ach, du ______ mich dreimal ______. Wann?',
      options: ['hast ....... angeruft', 'hast angerufen'],
      answer: 1
    },
    {
      question: 'Komisch! Ich habe mein Handy gar nicht ______.',
      options: ['gehört', 'gehören'],
      answer: 0
    },
    {
      question: 'Schade, dass du mich telefonisch nicht ______ hast. :(',
      options: ['geerreicht', 'erreicht', 'erreicht'],
      answer: 1
    },
    {
      question: 'Was ______ du für deine Gäste ______? Nudeln?',
      options: ['hast ....... gekocht', 'hast …. gekochen'],
      answer: 0
    },
    {
      question: '______ ihr nur Nudeln ______? Und keine Vorspeise?',
      options: ['habt …… gegessen', 'habt …. gegesst', 'hat ….. essen'],
      answer: 0
    },
    {
      question: 'Was ______ ihr dazu ______?',
      options: ['habt .......... getrinkt', 'habt …… getrunken'],
      answer: 1
    },
    {
      question: '______ du deine Geburtstagstorte selbst ______?',
      options: ['hast …..  backen', 'hast …. gebacken'],
      answer: 1
    },
    {
      question: 'Wie hat die Torte ______?',
      options: ['geschmeckt', 'geschmecken', 'geschmackt'],
      answer: 0
    },
    {
      question: '______ kein Stück für mich übrig ______? Ach wie schade! :(',
      options: ['hat ….. gebleibt', 'ist …. geblieben', 'ist ….. gebleiben'],
      answer: 1
    },
    {
      question: 'Wer ______ zur Party ______?',
      options: ['ist .... gekommt', 'hat ….. gekommt', 'ist ….. gekommen'],
      answer: 2
    },
    {
      question: '______ Javier aus der Firma auch dabei? Du fragst jetzt, woher ich ihn kenne. :)',
      options: ['hat', 'ist', 'war'],
      answer: 2
    },
    {
      question: 'Wir ______ uns vor zwei Jahren im Sprachkurs ______.',
      options: ['haben ..... gekennlernt', 'haben ……. kennengelernt', 'haben …. kennenlernte'],
      answer: 1
    },
    {
      question: 'Er ______ damals mein Tandempartner.',
      options: ['war', 'ist', 'hat', 'hatte'],
      answer: 0
    },
    {
      question: 'Er ______ mit mir Spanisch ______.',
      options: ['hat ...... gesprecht', 'hat …. gesprochen'],
      answer: 1
    },
    {
      question: 'Und ich ______ mit ihm auf Deutsch ______.',
      options: ['hat ...... gereden', 'habe ….. geredet'],
      answer: 1
    },
    {
      question: 'Wir ______ uns auch viel ______.',
      options: ['hat ........ geschreibt', 'haben …. geschrieben', 'haben ….. geschreiben'],
      answer: 1
    },
    {
      question: 'Weißt du, wir ______ uns auch mal in einer Kneipe ______.',
      options: ['haben …… getroffen', 'haben ……. getrefft'],
      answer: 0
    },
    {
      question: '______ er für dich Blumen ______?',
      options: ['hat ..... mitbringen', 'hat ….. mitgebracht'],
      answer: 1
    },
    {
      question: 'Was ______er ______?',
      options: ['hat …. angezogen', 'hat ….. an', 'hat ….. geanzieht'],
      answer: 0
    },
    {
      question: 'Mensch! ______ ihr nichts ______? Zeig doch!',
      options: ['habt ........ gefotografiert', 'habt ….. fotografiert'],
      answer: 1
    },
    {
      question: 'Hoffentlich ______ Peter seine Kamera nicht ______.',
      options: ['hat .... vergesst', 'hat …. vergessen', 'hat … gevergesst'],
      answer: 1
    },
    {
      question: '______ du auch Geschenke ______?',
      options: ['hast  ….  bekommen', 'hat ….. gebekommen', 'hast ….. bekommt'],
      answer: 0
    },
    {
      question: '______ die Geschenke dir ______?',
      options: ['haben ........ gefallen', 'hat ….. gefallt', 'hat …. gefallen'],
      answer: 0
    },
    {
      question: 'Das war bestimmt eine tolle Party. Ich muss aber schnell los. Ich habe gleich ein Meeting und habe mich leider ______.',
      options: ['verspäten', 'verspätung', 'verspätet'],
      answer: 2
    },
    {
      question: '….. Kleid findest du schöner?  - …..  rote hier.',
      options: ['Welchen – Diesen', 'Welches – Dieses', 'Welche – Diese'],
      answer: 1
    },
    {
      question: 'Wir sind auf einer Insel und hier ….. keine Autos fahren.',
      options: ['müssen', 'können', 'dürfen'],
      answer: 2
    },
    {
      question: 'Warum geht Tim nicht zur Schule? - Weil …. .',
      options: ['krank er ist.', 'er krank ist.', 'er ist krank.'],
      answer: 1
    },
    {
      question: 'Heute regnet es. ___ können wir nicht draußen spielen.',
      options: ['Deshalb', 'Denn', 'Aber'],
      answer: 0
    },
    {
      question: 'Claudia, hast du …. Notizbuch gesehen? -  Ja, es liegt … Regal.',
      options: ['mein – im', 'meine – ins', 'mein – ins'],
      answer: 0
    },
    {
      question: 'Kommst du mit ins Kino? – Nein, ich kann diesmal ….. .',
      options: ['nicht', 'kein', 'nie'],
      answer: 0
    },
    {
      question: 'Was ….. man hier alles machen?',
      options: ['kannt', 'kann', 'könne'],
      answer: 1
    },
    {
      question: 'Kommt ihr heute? - Nein,  leider haben wir heute …. Zeit. …. morgen kommen wir gerne.',
      options: ['keine - Aber', 'kein - Denn', 'keine – Weil'],
      answer: 0
    },
    {
      question: 'Kann mir jemand ein … und … Buch empfehlen?',
      options: ['spannendes – fesselndes', 'langweiliges – uninteressantes', 'dünnes  - zerrissenes'],
      answer: 0
    },
    {
      question: 'Welcher Pullover gefällt dir am besten?  - Dieser … sieht gut aus.',
      options: ['schwarzen', 'schwarze', 'schwarzes'],
      answer: 1
    },
    {
      question: 'Was wünscht du dir zu Weihnachten? - Ich wünsche … einen neuen Schal.',
      options: ['mir', 'mich', 'meinen'],
      answer: 0
    },
    {
      question: 'Guten Tag! Mein Name ist Schneider. Ich möchte bitte mit ….. sprechen.',
      options: ['Herr Fischer', 'Herrn Fischer', 'Herren Fischer'],
      answer: 1
    },
    {
      question: 'Seit wann leben Sie in Berlin? Seit  … Jahr.',
      options: ['ein', 'einen', 'einem'],
      answer: 2
    },
    {
      question: 'Was macht er gern? - … .',
      options: ['Er sieht fern gern .', 'Er sieht gern fern.', 'Er fernsehen gern.'],
      answer: 1
    },
    {
      question: 'Sylvester ist am …. Dezember.',
      options: ['einunddreizigsten', 'einunddreißigsten', 'einsunddreizigsten'],
      answer: 1
    },
    {
      question: 'Mein Urlaub in den Alpen war super! – Schön, dass es … dort gefallen hat.',
      options: ['dir', 'mir', 'ihm'],
      answer: 0
    },
    {
      question: 'Ich bin der Meinung, … du mitfahren solltest.',
      options: ['dass', 'ob', 'wenn'],
      answer: 0
    },
    {
      question: 'Möchten Sie bestellen? – Ja, ich__________ ein Schnitzel und eine Cola.',
      options: ['zahle', 'würde gern', 'hätte gern'],
      answer: 2
    },
    {
      question: 'Wann ist Vanessa geboren? -  …. ',
      options: ['Am sechsten April.', 'Im sechsten April.', 'Um sechsten April.'],
      answer: 0
    },
    {
      question: 'Schmeckt dir die Pizza nicht? - …..',
      options: ['Ja, sie schmeckt mir.', 'Doch, sie schmeckt mir.', 'Ich esse gerne Pizza.'],
      answer: 1
    }
  ],
  B1: [
    {
      question: 'In Großstädten gibt es viele Herausforderungen, besonders im Bereich Verkehr. _____ die Bevölkerungsdichte in Großstädten Tag für Tag steigt, nehmen auch die Verkehrsprobleme zu.',
      options: ['Obwohl', 'Während', 'Wenn'],
      answer: 1
    },
    {
      question: '-2- viele Menschen in die Stadt ziehen, gibt es oft zu wenig Platz auf den Straßen.',
      options: ['als', 'deshalb', 'Weil'],
      answer: 2
    },
    {
      question: '-3- viele Autos unterwegs sind, dauert es oft lange, bis man an sein Ziel gelangt.',
      options: ['Da', 'Damit', 'Wenn'],
      answer: 0
    },
    {
      question: '-4- die öffentlichen Verkehrsmittel modernisiert werden, gibt es häufig Verspätungen und Überfüllungen.',
      options: ['Trotzdem', 'Obwohl', 'Weil'],
      answer: 1
    },
    {
      question: 'Viele Menschen versuchen, alternative Routen zu finden. -5- der ständige Stau ist nervig.',
      options: ['Weil', 'Deshalb', 'Denn'],
      answer: 2
    },
    {
      question: '-6- man oft im Stau steht, sollte man sich über eine andere Verkehrsmöglichkeit Gedanken machen.',
      options: ['Wenn', 'Denn', 'Obwohl'],
      answer: 0
    },
    {
      question: '-7- die Technologie voranschreitet, braucht man immer noch intelligentere Verkehrssysteme,',
      options: ['Denn', 'Obwohl', 'Wenn'],
      answer: 1
    },
    {
      question: '-8- den Verkehr zu regeln.',
      options: ['um', 'damit', 'weil'],
      answer: 0
    },
    {
      question: 'Ich __________, dass er es nicht böse __________.',
      options: ['habe verstanden - gemeint hat', 'bin verstanden – gemein ist', 'habe verstehe – habt gemeint'],
      answer: 0
    },
    {
      question: 'Maria __________, dass sie doch nach London reist.',
      options: ['ist sich entschieden', 'hat sich entscheiden', 'hat sich entschieden'],
      answer: 2
    },
    {
      question: 'Wir __________, Herrn Müller anzurufen.',
      options: ['sind vergessen', 'haben vergessen', 'haben vergisst'],
      answer: 1
    },
    {
      question: 'Er  __________ den Weg mehrmals __________.',
      options: ['hat - beschrieben', 'ist - beschrieben', 'habe - beschreiben'],
      answer: 0
    },
    {
      question: 'Er __________ letzte Woche ein unvergessliches Konzert ____.',
      options: ['hast - erleben', 'hat - erlebt', 'ist - erlebt'],
      answer: 1
    },
    {
      question: 'Was _____ du ihm gestern  __________?',
      options: ['hast - empfohlen', 'hast - empfehlen', 'habst - empfohlenen'],
      answer: 0
    },
    {
      question: '___ du das neue Buch von dem Autor __________?',
      options: ['Bist - gelesen', 'Habst - geliest', 'Hast - gelesen'],
      answer: 2
    },
    {
      question: 'Frau Sanchez  __________ ihre Sprachkenntnisse ___ .',
      options: ['hat - verbessert', 'haben - verbessert', 'haben - verbessert'],
      answer: 0
    },
    {
      question: 'Wir __________ die Präsentation _________.',
      options: ['haben - vorbereiten', 'sind - vorbereitet', 'haben - vorbereitet'],
      answer: 2
    },
    {
      question: 'Er __________ jedes Mal eine interessante Geschichte _____.',
      options: ['hat -  erfunden', 'ist - erfunden', 'habt - erfunden'],
      answer: 0
    }
  ]
};

export default function MultipleChoice() {
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selected, setSelected] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleLevelChange = (event, newLevel) => {
    setSelectedLevel(newLevel);
    setSelected({});
    setShowResult(false);
  };

  const handleChange = (qIdx, value) => {
    setSelected(prev => ({
      ...prev,
      [qIdx]: value
    }));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const currentQuestions = questions[selectedLevel];
  const correctCount = currentQuestions.reduce((count, q, idx) => {
    return count + (parseInt(selected[idx]) === q.answer ? 1 : 0);
  }, 0);

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#E65100', fontWeight: 'bold' }}>
        Seviye Seçin
      </Typography>
      
      <Tabs value={selectedLevel} onChange={handleLevelChange} sx={{ mb: 3 }}>
        <Tab label="A1" value="A1" />
        <Tab label="A2" value="A2" />
        <Tab label="B1" value="B1" />
      </Tabs>

      <Typography variant="h6" sx={{ mb: 2, color: '#E65100' }}>
        {selectedLevel === 'A1' ? 'A1 Seviyesi Alıştırmalar' : 
         selectedLevel === 'A2' ? 'A2 Seviyesi Alıştırmalar' : 
         'B1 Seviyesi Alıştırmalar'}
      </Typography>

      {currentQuestions.map((q, idx) => (
        <Paper key={idx} sx={{ p: 2, mb: 2, background: '#FFF8E1' }}>
          <Typography sx={{ mb: 1 }}>{idx + 1}. {q.question}</Typography>
          <RadioGroup
            value={selected[idx] ?? ''}
            onChange={e => handleChange(idx, e.target.value)}
          >
            {q.options.map((opt, oIdx) => (
              <FormControlLabel
                key={oIdx}
                value={oIdx.toString()}
                control={<Radio color="primary" />}
                label={opt}
                disabled={showResult}
                sx={{
                  color: showResult && q.answer === oIdx ? 'green' : undefined,
                  fontWeight: showResult && q.answer === oIdx ? 'bold' : undefined
                }}
              />
            ))}
          </RadioGroup>
          {showResult && selected[idx] !== undefined && (
            <Typography sx={{ color: selected[idx] === q.answer.toString() ? 'green' : 'red', mt: 1 }}>
              {selected[idx] === q.answer.toString() ? 'Doğru!' : `Yanlış! Doğru cevap: ${q.options[q.answer]}`}
            </Typography>
          )}
        </Paper>
      ))}
      
      {!showResult && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit} 
          sx={{ mt: 2 }}
          disabled={Object.keys(selected).length !== currentQuestions.length}
        >
          Cevapları Göster
        </Button>
      )}
      
      {showResult && (
        <Typography sx={{ mt: 3, fontWeight: 'bold', color: '#E65100' }}>
          Doğru sayısı: {correctCount} / {currentQuestions.length}
        </Typography>
      )}
    </Box>
  );
} 