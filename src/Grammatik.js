import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Alert } from '@mui/material';

const exercises = {
  A1: [
    {
      id: 1,
      title: "Lückenergänzung: Wörter im Satz",
      instruction: "Ergänzen Sie die Sätze mit den folgenden Wörtern:\nkleine / Hund / liegt / schön / tanzen / schwimmen / klein / Familien / essen / Musik / großen / möchte / aber",
      type: "fill_in_the_blanks",
      text: `Das Wetter ist ________ heute.\n\nEin ________ läuft im Park.\n\nEr ________ mit einem Ball spielen.\n\nIch möchte im See ________ , ________ er ist kalt.\n\nMein Bruder hat einen ________ Ball.\n\nWir ________ Pizza zum Mittagessen im Park.\n\nEine Katze ________ neben uns. Die Katze ist sehr ________ und süß.\n\nManche ________ machen Picknick.\n\nZwei ________ Kinder ________ und hören ________.`,
      blanks: [
        { answer: "schön" },
        { answer: "Hund" },
        { answer: "möchte" },
        { answer: "schwimmen" },
        { answer: "aber" },
        { answer: "großen" },
        { answer: "essen" },
        { answer: "liegt" },
        { answer: "klein" },
        { answer: "Familien" },
        { answer: "kleine" },
        { answer: "tanzen" },
        { answer: "Musik" }
      ]
    },
    {
      id: 2,
      title: "Partizip II – Lückentext-Übung",
      instruction: "Schreiben Sie die Verben im Partizip Perfekt.",
      type: "fill_in_the_blanks",
      text: `1. Ich habe Deutsch _______________. (lernen)\n\n2. Wir haben einen Apfel _______________. (essen)\n\n3. Sie hat ein Bild _______________. (malen)\n\n4. Du hast viel _______________. (arbeiten)\n\n5. Papa hat das Auto _______________. (waschen)\n\n6. Oma hat Kuchen _______________. (backen)\n\n7. Ich habe einen Brief _______________. (schreiben)\n\n8. Ihr habt Musik _______________. (hören)\n\n9. Lisa hat das Fenster _______________. (öffnen)\n\n10. Wir haben im Park _______________. (spielen)\n\n11. Er hat eine Geschichte _______________. (erzählen)\n\n12. Du hast ein Buch _______________. (lesen)\n\n13. Wir haben das Zimmer _______________. (aufräumen)\n\n14. Ich habe Wasser _______________. (trinken)\n\n15. Ihr habt sehr laut _______________. (lachen)\n\n16. Sie hat das Brot _______________. (essen)\n\n17. Wir haben einen Film _______________. (sehen)\n\n18. Ich habe meine Hausaufgaben _______________. (machen)\n\n19. Er hat mit dem Hund _______________. (spielen)\n\n20. Du hast das Licht _______________. (machen)\n\n21. Ihr habt das Bild _______________. (malen)\n\n22. Ich habe meine Tasche _______________. (packen)\n\n23. Wir haben die Hausaufgabe _______________. (machen)\n\n24. Sie hat mit mir _______________. (sprechen)\n\n25. Du hast den Ball _______________. (bringen)`,
      blanks: [
        { answer: "gelernt" },
        { answer: "gegessen" },
        { answer: "gemalt" },
        { answer: "gearbeitet" },
        { answer: "gewaschen" },
        { answer: "gebacken" },
        { answer: "geschrieben" },
        { answer: "gehört" },
        { answer: "geöffnet" },
        { answer: "gespielt" },
        { answer: "erzählt" },
        { answer: "gelesen" },
        { answer: "aufgeräumt" },
        { answer: "getrunken" },
        { answer: "gelacht" },
        { answer: "gegessen" },
        { answer: "gesehen" },
        { answer: "gemacht" },
        { answer: "gespielt" },
        { answer: "ausgemacht" },
        { answer: "gemalt" },
        { answer: "gepackt" },
        { answer: "gemacht" },
        { answer: "gesprochen" },
        { answer: "gebracht" }
      ]
    },
    {
      id: 3,
      title: "Personalpronomen im Akkusativ und Dativ",
      instruction: "Ergänzen Sie die fehlenden Personalpronomen im Akkusativ oder Dativ. Achten Sie darauf, ob das Personalpronomen im Akkusativ oder Dativ verwendet werden muss.",
      type: "fill_in_the_blanks",
      text: `In der Mail an die Touristeninformation:\nIch suche dringend eine günstige Unterkunft für meine Reise nach München. Können Sie ________ bitte kurz über die durchschnittlichen Zimmerpreise informieren?\n\nIm Restaurant:\nEntschuldigung Sie bitte! Meine Freundin und ich möchten gern etwas zum Essen bestellen. Können Sie ________ bitte eine Speisekarte bringen?\n\nIm Café:\nWie schmeckt ________ der Cappuccino, Liebling? Hättest du noch etwas Sahne?\n\nIm Krankenhaus:\nLegen Sie sich bitte hin. Wo tut es ________ genau weh? Hier am Fuß oder am Knie?\n\nAnruf bei der Firma:\nGuten Tag, Herr Meier! Frau Schilling hat gerade eine Besprechung. Schreiben Sie ________ lieber eine Mail und schicken Sie auch den digitalen Katalog mit. Die Mailadresse von Frau Schilling ist schilling@firma.de. Ich buchstabiere s-c-h …………………….\n\nAn der Hotelrezeption:\nEntschuldigung Sie! Ich kann meinen Zimmerschlüssel nicht finden. Ich glaube, ich habe ________ im Zimmer vergessen. Können ________ mir bitte einen neuen Schlüssel geben?`,
      blanks: [
        { answer: "mich" },
        { answer: "uns" },
        { answer: "dir" },
        { answer: "ihnen" },
        { answer: "Ihnen" },
        { answer: "ihn" },
        { answer: "Sie" }
      ]
    },
    {
      id: 4,
      title: "Demonstrativartikel und Fragewörter",
      instruction: "Lesen Sie den Dialog und ergänzen Sie die Lücken mit den passenden Formen von 'dies-' und 'welch-'.",
      type: "fill_in_the_blanks",
      text: `IN DER BIBLIOTHEK. Wie kann ich diese Aufgabe lösen?\n\n• Du weißt doch, ich besuche gerade einen Deutschkurs. Ich muss heute für die Prüfung lernen. Kannst du mir bitte helfen?\no Ja klar. Wo hast du denn Probleme? Was findest du schwer?\n• Ich kann mir die Vokabeln nicht merken. Ohne Vokabeln kann ich den Text nicht verstehen.\no Es gibt hier aber viele Bücher. _________(1) Buch gehört dir?\n• _________(2) Buch ist unser Lehrwerk. Es gehört mir.\no _________(3) Themen habt ihr im Unterricht bearbeitet?\n• Wir haben schon _________(4) Kapitel hinter uns. Das Kapitel 10 haben wir gestern beendet.\no Das ist aber eine Menge.\n• _________(5) Übung ist meine Hausaufgabe. Ich muss _________(6) Text lesen und _________(7) Fragen beantworten.\no Bringst du mir bitte den Markierstift da vom Tisch?\n• _________(8) denn? _________(9) hier?\no Ja, genau. Du musst zuerst _________(10) Aufgabe gut durchlesen und verstehen. Sie ist eine Zuordnungsaufgabe. _________(11) Kurztexte sind Kleinanzeigen. Wir müssen sie mit _________(12) Situationen oder Personen verbinden. Das heißt, wir müssen für _________(13) Personen passende Anzeigen suchen. Lies doch! In der Aufgabe steht: _________(14) Anzeige passt zu _________(15) Person am besten?\n• In _________(16) Aufgabe gibt es viele neue Wörter für mich. Ich verstehe gar nichts.\no Nur mit Geduld! _________(17) Wörter sind dir schon bekannt? _________(18) Textstellen verstehst du? Du kannst _________(19) Sätze markieren oder unterstreichen. Konzentriere dich zuerst nur auf _________(20) Wörter. _________(21) Information findest du besonders wichtig?\n• _________(22) hier.\no Du hast Recht. _________(23) Information gibt uns Schlüsselwörter. Nun kannst du _________(24) Aufgabe lösen. _________(25) Antwort ist richtig?\n• Ich glaube, _________(26) hier.\no Ok, dann trage deine Lösungen in _________(27) Antwortbogen ein.\n• Meinst du _________(28) Tabelle hier?\no Genau, das ist der Antwortbogen.\n• Prima! Gut gemacht!`,
      blanks: [
        { answer: "Welches" },
        { answer: "Dieses" },
        { answer: "Welche" },
        { answer: "dieses" },
        { answer: "Diese" },
        { answer: "diesen" },
        { answer: "diese" },
        { answer: "Welchen" },
        { answer: "Diesen" },
        { answer: "diese" },
        { answer: "Diese" },
        { answer: "diesen" },
        { answer: "diese" },
        { answer: "Welche" },
        { answer: "welcher" },
        { answer: "dieser" },
        { answer: "Welche" },
        { answer: "Welche" },
        { answer: "diese" },
        { answer: "diese" },
        { answer: "Welche" },
        { answer: "Diese" },
        { answer: "Diese" },
        { answer: "diese" },
        { answer: "Welche" },
        { answer: "diese" },
        { answer: "diesen" },
        { answer: "diese" }
      ]
    },
    {
      id: 5,
      title: "Pronomen im Satz",
      instruction: "Ergänzen Sie die Lücken mit den passenden Pronomen.",
      type: "fill_in_the_blanks",
      text: `1. Da ist mein Füller. Ich suche ________ seit gestern.\n\n2. Die Bücher gehören meiner Tochter. Sie soll ________ in die Schule mitnehmen.\n\n3. Hast du meine E-Mail noch nicht gelesen? Ich habe ________ dir vor zwei Tagen zugeschickt.\n\n4. Die Konferenz beginnt in einer Stunde. Du solltest ________ nicht verpassen.\n\n5. Wann war dein Termin beim Zahnarzt? Willst du ________ nicht aufs Wochenende verschieben?\n\n6. Ich muss zum Supermarkt fahren. Könntest du mir dein Fahrrad leihen? Ich bringe ________ dir in anderthalb Stunden wieder zurück. Versprochen!\n\n7. Interessiert du dich auch für Muscheln? Du kannst ________ einfach am Ufer finden und sammeln. Ich bastle Schmuckstücke damit für meine Wohnung. Das ist mein Hobby.\n\n8. Du solltest dein Zimmer aufräumen. Nimm zuerst die Kleider vom Bett weg. Dann kannst du ________ wieder an die Kleiderbügel aufhängen.\n\n9. Dein T-Shirt hat eine tolle Farbe. ________ steht dir echt gut.\n\n10. Der Zitronenkuchen schmeckt lecker. Hast du ________ selbst gebacken?\n\n11. Das ist ein tolles Geschenk. Vielen Dank dafür. Ich habe ________ mir so lange gewünscht.\n\n12. Jeder hat Träume für die Zukunft. Man braucht meistens nur Mut und Geduld, um ________ zu verwirklichen.\n\n13. Wo ist die Scheere? ________ musste in der Schublade liegen. Da ist ________ aber jetzt nicht.\n\n14. Papa, ich muss diesen Textabschnitt zusammenfassen. Kannst du ________ mir bitte vorlesen?\n\n15. Die Blumen sind alle so trocken. Wir müssen ________ begießen.`,
      blanks: [
        { answer: "ihn" },
        { answer: "sie" },
        { answer: "sie" },
        { answer: "sie" },
        { answer: "ihn" },
        { answer: "es" },
        { answer: "sie" },
        { answer: "sie" },
        { answer: "Es" },
        { answer: "ihn" },
        { answer: "es" },
        { answer: "sie" },
        { answer: "Sie" },
        { answer: "sie" },
        { answer: "ihn" },
        { answer: "sie" }
      ]
    },
    {
      id: 6,
      title: "Konjugation im Präsens",
      instruction: "Ergänzen Sie die Verben.",
      type: "fill_in_the_blanks",
      text: `studieren\nMaria _______________ in Istanbul.\nEva und Jonas _______________ in Istanbul.\nEva _______________ mit Jonas zusammen in Istanbul.\n\nreisen\nAhmet _______________ nach Amerika.\nUmut und Selin _______________ nach Österreich.\nEmir _______________ mit Yağmur zusammen in die Schweiz.\n\narbeiten\nIch _______________ im Büro.\nAylin _______________ an der Universität.\nMara und Judith _______________ an der Universität.\nThomas _______________ mit Leyla zusammen in einer großen Firma.`,
      blanks: [
        { answer: "studiert" },
        { answer: "studieren" },
        { answer: "studiert" },
        { answer: "reist" },
        { answer: "reisen" },
        { answer: "reist" },
        { answer: "arbeite" },
        { answer: "arbeitet" },
        { answer: "arbeiten" },
        { answer: "arbeitet" }
      ]
    },
    {
      id: 7,
      title: "Fragewörter: wo, wohin, woher",
      instruction: "Ergänzen Sie das Fragewort: wo, wohin oder woher.",
      type: "fill_in_the_blanks",
      text: `_______________ kommst du? Aus der Schweiz.\n\n_______________ lernst du Deutsch? Zu Hause.\n\n_______________ gehst du nach der Arbeit? Nach Hause.\n\n_______________ kommt Demir? Aus Izmir.\n\n_______________ fahren Mara und Eva am Wochenende? Nach Paris.\n\n_______________ spielt Deniz Gitarre? Im Garten.\n\n_______________ kocht die Mutter das Abendessen? In der Küche\n\n_______________ kommen Hänsel und Gretel? Aus dem Wald.\n\n_______________ kommen deine Eltern? Aus den Niederlanden.\n\n_______________ fährst du mit der U-Bahn? Nach Kadıköy.`,
      blanks: [
        { answer: "woher" },
        { answer: "wo" },
        { answer: "wohin" },
        { answer: "woher" },
        { answer: "wohin" },
        { answer: "wo" },
        { answer: "wo" },
        { answer: "woher" },
        { answer: "woher" },
        { answer: "wohin" }
      ]
    },
    {
      id: 8,
      title: "Haben/Sein Übung",
      instruction: "Ergänzen Sie die Sätze mit 'haben' oder 'sein'.",
      type: "fill_in_the_blanks",
      text: `1. Ich _______________ ein Buch.\n\n2. Du _______________ müde.\n\n3. Er _______________ einen Hund.\n\n4. Sie _______________ eine Katze.\n\n5. Es _______________ kalt.\n\n6. Wir _______________ Hunger.\n\n7. Ihr _______________ Durst.\n\n8. Sie _______________ im Park.\n\n9. Ich _______________ zu Hause.\n\n10. Du _______________ im Kino.`,
      blanks: [
        { answer: "habe" },
        { answer: "bist" },
        { answer: "hat" },
        { answer: "hat" },
        { answer: "ist" },
        { answer: "haben" },
        { answer: "habt" },
        { answer: "sind" },
        { answer: "bin" },
        { answer: "bist" }
      ]
    },
    {
      id: 9,
      title: "Präpositionen mit Dativ",
      instruction: "Ergänzen Sie die Sätze mit den richtigen Präpositionen (in, an, auf, bei, mit, nach, von, zu).",
      type: "fill_in_the_blanks",
      text: `1. Ich wohne _______________ Berlin.\n\n2. Das Buch liegt _______________ dem Tisch.\n\n3. Der Hund schläft _______________ dem Sofa.\n\n4. Ich gehe _______________ der Schule.\n\n5. Sie kommt _______________ der Arbeit.\n\n6. Wir fahren _______________ Hause.\n\n7. Er spricht _______________ seinem Freund.\n\n8. Sie geht _______________ dem Supermarkt.\n\n9. Das Bild hängt _______________ der Wand.\n\n10. Ich bin _______________ meiner Mutter.`,
      blanks: [
        { answer: "in" },
        { answer: "auf" },
        { answer: "auf" },
        { answer: "zur" },
        { answer: "von" },
        { answer: "nach" },
        { answer: "mit" },
        { answer: "zum" },
        { answer: "an" },
        { answer: "bei" }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Partizip II – Lückentext-Übung",
      instruction: "Ergänze das richtige Partizip II. Die Verben stehen in der Klammer.",
      type: "fill_in_the_blanks",
      text: `1. Ich habe den Film _______________. (sehen)\n\n2. Wir haben das Haus _______________. (verlassen)\n\n3. Sie hat ihren Freund _______________. (besuchen)\n\n4. Du hast deine Hausaufgaben _______________. (vergessen)\n\n5. Er hat viel _______________. (lesen)\n\n6. Ihr habt den Test _______________. (bestehen)\n\n7. Ich habe ein neues Handy _______________. (bekommen)\n\n8. Wir haben im Garten _______________. (gearbeitet)\n\n9. Sie hat laut _______________. (lachen)\n\n10. Du hast einen Kuchen _______________. (backen)\n\n11. Ich habe den Brief _______________. (abschicken)\n\n12. Wir haben alles gut _______________. (organisieren)\n\n13. Sie hat einen Pullover _______________. (stricken)\n\n14. Er hat sein Fahrrad _______________. (reparieren)\n\n15. Du hast dein Zimmer _______________. (aufräumen)\n\n16. Ihr habt lange _______________. (diskutieren)\n\n17. Ich habe dir die Wahrheit _______________. (sagen)\n\n18. Wir haben zusammen _______________. (kochen)\n\n19. Sie hat die Lampe _______________. (anmachen)\n\n20. Du hast das Paket _______________. (abholen)`,
      blanks: [
        { answer: "gesehen" },
        { answer: "verlassen" },
        { answer: "besucht" },
        { answer: "vergessen" },
        { answer: "gelesen" },
        { answer: "bestanden" },
        { answer: "bekommen" },
        { answer: "gearbeitet" },
        { answer: "gelacht" },
        { answer: "gebacken" },
        { answer: "abgeschickt" },
        { answer: "organisiert" },
        { answer: "gestrickt" },
        { answer: "repariert" },
        { answer: "aufgeräumt" },
        { answer: "diskutiert" },
        { answer: "gesagt" },
        { answer: "gekocht" },
        { answer: "angemacht" },
        { answer: "abgeholt" }
      ]
    },
    {
      id: 2,
      title: "Relativpronomen – Lückentext",
      instruction: "Ergänzen Sie die Lücken mit den passenden Relativpronomen (der, die, das, welcher, welche, welches, wo, dessen, deren, in dem).",
      type: "fill_in_the_blanks",
      text: `Das ist der Mann, _______________ dort steht.\n\nKennst du den Film, _______________ gestern im Kino lief?\n\nIch habe eine Freundin, _______________ sehr gut singen kann.\n\nDer Hund, _______________ im Garten spielt, ist sehr süß.\n\nDas ist das Buch, _______________ ich letzte Woche gekauft habe.\n\nDie Stadt, _______________ wir besucht haben, war sehr schön.\n\nDer Lehrer, _______________ gerade spricht, ist mein Lieblingslehrer.\n\nDas ist das Restaurant, _______________ wir immer essen gehen.\n\nDer Mann, _______________ Auto gestohlen wurde, ist sehr traurig.\n\nDie Frau, _______________ ich das Geschenk gegeben habe, war sehr überrascht.\n\nDas Mädchen, _______________ Vater ein berühmter Schauspieler ist, geht in meine Klasse.\n\nDie Stadt, _______________ Geschichte ich studiere, hat viele Sehenswürdigkeiten.\n\nDer Schüler, _______________ Aufgaben nicht gemacht wurden, bekommt eine Strafe.`,
      blanks: [
        { answer: "der" },
        { answer: "der" },
        { answer: "die" },
        { answer: "der" },
        { answer: "das" },
        { answer: "die" },
        { answer: "der" },
        { answer: "in dem" },
        { answer: "dessen" },
        { answer: "der" },
        { answer: "dessen" },
        { answer: "deren" },
        { answer: "dessen" }
      ]
    },
    {
      id: 3,
      title: "Relativpronomen – Satzübung",
      instruction: "Schreiben Sie vollständige Sätze, indem Sie die folgenden Satzteile mit den richtigen Relativpronomen verbinden.",
      type: "fill_in_the_blanks",
      text: `Der Film / ich gestern gesehen habe / war spannend.\n\nDie Tasche / sie auf dem Tisch liegt / gehört mir.\n\nDas Buch / du mir empfohlen hast / ist sehr gut.\n\nDie Leute / im Park spazieren gehen / sind freundlich.\n\nDer Hund / du gesehen hast / ist mein Hund.\n\nDie Schuhe / ich gekauft habe / sind sehr bequem.\n\nDas Hotel / wir übernachtet haben / war teuer.\n\nDas Auto / vor der Tür steht / gehört meinem Bruder.`,
      blanks: [
        { answer: "Der Film, den ich gestern gesehen habe, war spannend." },
        { answer: "Die Tasche, die auf dem Tisch liegt, gehört mir." },
        { answer: "Das Buch, das du mir empfohlen hast, ist sehr gut." },
        { answer: "Die Leute, die im Park spazieren gehen, sind freundlich." },
        { answer: "Der Hund, den du gesehen hast, ist mein Hund." },
        { answer: "Die Schuhe, die ich gekauft habe, sind sehr bequem." },
        { answer: "Das Hotel, in dem wir übernachtet haben, war teuer." },
        { answer: "Das Auto, das vor der Tür steht, gehört meinem Bruder." }
      ]
    },
    {
      id: 4,
      title: "Adjektivendungen",
      instruction: "Ergänzen Sie die Adjektivendungen für die Adjektivphrasen.",
      type: "fill_in_the_blanks",
      text: `Ich suche ein ruhig_______________ Zimmer.\n\nEr nimmt seinen schwer_______________ Koffer mit.\n\nDas neu_______________ Auto steht auf dem Parkplatz.\n\nIch brauche ein frisch_______________ Brot und gut_______________ Käse.\n\nIn der Arbeit trägt mein Freund lieber einen dunklen Anzug und ein weiß_______________ Hemd.\n\nUnsere höflich_______________ Nachbarin lädt uns zum Abendessen ein.\n\nDer krank_______________ Junge möchte nichts essen. Er hat keinen Appetit.\n\nDer faul_______________ Schüler hat wieder keine Hausaufgaben gemacht.\n\nDie neu_______________ Nachbarn laden uns auf eine Party ein.\n\nDie grün_______________ Schuhe sind sehr teuer.`,
      blanks: [
        { answer: "es" },
        { answer: "en" },
        { answer: "e" },
        { answer: "es" },
        { answer: "es" },
        { answer: "e" },
        { answer: "e" },
        { answer: "e" },
        { answer: "en" },
        { answer: "en" }
      ]
    },
    {
      id: 5,
      title: "Demonstrativartikel-Endungen",
      instruction: "Ergänzen Sie die Endungen der Demonstrativartikel.",
      type: "fill_in_the_blanks",
      text: `Dies_______________ Professor macht immer schwere Prüfungen.\n\nDies_______________ Bücher sind sehr teuer.\n\nDies_______________ Film habe ich schon gesehen.\n\nDies_______________ Mann kenne ich nicht.\n\nDies_______________ Gericht mag ich nicht.\n\nDies_______________ Kinder spielen kein Fußball.\n\nIch fahre jeden Tag mit dies_______________ Auto zur Uni.\n\nWir machen mit dies_______________ Lehrbuch Deutschunterricht.\n\nDies_______________ Prüfung war nicht einfach.\n\nMit dies_______________ Aufgabe habe ich verstanden, wie man Adjektive dekliniert.\n\nSchau mal! Hier ist eine sehr teure Krawatte. Ein Mann mit dies_______________ Krawatte ist immer elegant auf Events.\n\nMit dies_______________ Schnellzug kommst du in einer halben Stunde zu Hause an.`,
      blanks: [
        { answer: "er" },
        { answer: "e" },
        { answer: "en" },
        { answer: "en" },
        { answer: "es" },
        { answer: "e" },
        { answer: "em" },
        { answer: "em" },
        { answer: "e" },
        { answer: "er" },
        { answer: "er" },
        { answer: "em" }
      ]
    },
    {
      id: 6,
      title: "Interrogativartikel-Endungen",
      instruction: "Ergänzen Sie die Endungen der Interrogativartikel.",
      type: "fill_in_the_blanks",
      text: `Welch_______________ Buch ist spannend?\n\nWelch_______________ Land hat keine Millionenstadt?\n\nWelch_______________ Stadt ist am schönsten?\n\nWelch_______________ Flughafen findest du schöner?\n\nMit welch_______________ Kleidung gehst du am liebsten zur Uni?\n\nWelch_______________ Länder haben Könige und Königinnen?\n\nWelch_______________ Hose findest du hässlich?\n\nAuf welch_______________ Party gehst du morgen?\n\nMit welch_______________ Studentin lernst du am besten?\n\nIn welch_______________ Jahr sind wir jetzt?\n\nAn welch_______________ Tag triffst du deine Freunde?\n\nIn welch_______________ Monat ist das Wetter sehr heiß?\n\nMit welch_______________ Zug fährst du zur Uni?\n\nAn welch_______________ Haltestelle musst du aussteigen?\n\nWelch_______________ Film möchtest du nach dem Unterricht sehen?\n\nWelch_______________ Internetseite findest du nützlich?\n\nBei welch_______________ Freund fühlst du dich wohl?\n\nIn welch_______________ Stadt willst du gern reisen?\n\nIn welch_______________ Stadt gibt es kein Meer?\n\nWelch_______________ Schuhe findest du am besten?\n\nWelch_______________ Kleidung trägst du am seltensten?`,
      blanks: [
        { answer: "es" },
        { answer: "es" },
        { answer: "e" },
        { answer: "en" },
        { answer: "er" },
        { answer: "e" },
        { answer: "e" },
        { answer: "e" },
        { answer: "er" },
        { answer: "em" },
        { answer: "em" },
        { answer: "em" },
        { answer: "em" },
        { answer: "er" },
        { answer: "en" },
        { answer: "e" },
        { answer: "em" },
        { answer: "e" },
        { answer: "er" },
        { answer: "e" },
        { answer: "e" }
      ]
    },
    {
      id: 6,
      title: "Konjunktionen",
      instruction: "Ergänzen Sie die Sätze mit den passenden Konjunktionen (weil, denn, aber, oder, und).",
      type: "fill_in_the_blanks",
      text: `1. Ich gehe nicht zur Party, _______________ ich krank bin.\n\n2. Er ist müde, _______________ er hat lange gearbeitet.\n\n3. Ich möchte Kaffee, _______________ du?\n\n4. Sie spricht Deutsch _______________ Englisch.\n\n5. Das Wetter ist schön, _______________ es regnet.\n\n6. Ich lerne Deutsch, _______________ ich in Deutschland studieren möchte.\n\n7. Er ist reich, _______________ er ist nicht glücklich.\n\n8. Möchtest du Tee _______________ Kaffee?\n\n9. Sie arbeitet viel, _______________ sie hat wenig Zeit.\n\n10. Ich gehe ins Kino, _______________ ich sehe einen Film.`,
      blanks: [
        { answer: "weil" },
        { answer: "denn" },
        { answer: "und" },
        { answer: "und" },
        { answer: "aber" },
        { answer: "weil" },
        { answer: "aber" },
        { answer: "oder" },
        { answer: "denn" },
        { answer: "und" }
      ]
    },
    {
      id: 7,
      title: "Perfekt mit haben/sein",
      instruction: "Ergänzen Sie die Sätze im Perfekt mit 'haben' oder 'sein'.",
      type: "fill_in_the_blanks",
      text: `1. Ich _______________ nach Hause gegangen.\n\n2. Du _______________ ein Buch gelesen.\n\n3. Er _______________ im Park gewesen.\n\n4. Sie _______________ einen Brief geschrieben.\n\n5. Es _______________ kalt gewesen.\n\n6. Wir _______________ ins Kino gegangen.\n\n7. Ihr _______________ Pizza gegessen.\n\n8. Sie _______________ nach Berlin gefahren.\n\n9. Ich _______________ müde gewesen.\n\n10. Du _______________ einen Film gesehen.`,
      blanks: [
        { answer: "bin" },
        { answer: "hast" },
        { answer: "ist" },
        { answer: "hat" },
        { answer: "ist" },
        { answer: "sind" },
        { answer: "habt" },
        { answer: "sind" },
        { answer: "bin" },
        { answer: "hast" }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Konjunktiv II",
      instruction: "Ergänzen Sie die Sätze im Konjunktiv II.",
      type: "fill_in_the_blanks",
      text: `1. Wenn ich reich wäre, _______________ ich ein großes Haus kaufen.\n\n2. Wenn du Zeit hättest, _______________ du mit mir ins Kino kommen.\n\n3. Wenn er Deutsch könnte, _______________ er in Deutschland arbeiten.\n\n4. Wenn sie mehr Geld hätte, _______________ sie eine Weltreise machen.\n\n5. Wenn wir früher aufgestanden wären, _______________ wir den Bus nicht verpasst haben.\n\n6. Wenn ihr fleißiger wäret, _______________ ihr bessere Noten bekommen.\n\n7. Wenn sie mehr üben würden, _______________ sie die Prüfung bestehen.\n\n8. Wenn ich mehr Zeit hätte, _______________ ich mehr Sport treiben.\n\n9. Wenn du mir geholfen hättest, _______________ ich schneller fertig geworden sein.\n\n10. Wenn er die Wahrheit gesagt hätte, _______________ wir ihm geglaubt haben.`,
      blanks: [
        { answer: "würde" },
        { answer: "würdest" },
        { answer: "könnte" },
        { answer: "würde" },
        { answer: "hätten" },
        { answer: "würdet" },
        { answer: "würden" },
        { answer: "würde" },
        { answer: "wäre" },
        { answer: "hätten" }
      ]
    },
    {
      id: 2,
      title: "Passiv",
      instruction: "Formen Sie die Sätze ins Passiv um.",
      type: "fill_in_the_blanks",
      text: `1. Der Lehrer korrigiert die Tests.\nDie Tests _______________ vom Lehrer korrigiert.\n\n2. Die Mutter kocht das Essen.\nDas Essen _______________ von der Mutter gekocht.\n\n3. Der Mechaniker repariert das Auto.\nDas Auto _______________ vom Mechaniker repariert.\n\n4. Die Schüler schreiben die Prüfung.\nDie Prüfung _______________ von den Schülern geschrieben.\n\n5. Der Künstler malt ein Bild.\nEin Bild _______________ vom Künstler gemalt.\n\n6. Die Ärztin untersucht den Patienten.\nDer Patient _______________ von der Ärztin untersucht.\n\n7. Der Bäcker backt das Brot.\nDas Brot _______________ vom Bäcker gebacken.\n\n8. Die Putzfrau reinigt das Zimmer.\nDas Zimmer _______________ von der Putzfrau gereinigt.\n\n9. Der Gärtner pflanzt die Blumen.\nDie Blumen _______________ vom Gärtner gepflanzt.\n\n10. Der Koch bereitet das Menü vor.\nDas Menü _______________ vom Koch vorbereitet.`,
      blanks: [
        { answer: "werden" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "wird" },
        { answer: "werden" },
        { answer: "wird" }
      ]
    },
    {
      id: 3,
      title: "Nebensätze mit dass",
      instruction: "Verbinden Sie die Sätze mit 'dass'.",
      type: "fill_in_the_blanks",
      text: `1. Ich weiß, _______________ du Deutsch lernst.\n\n2. Er glaubt, _______________ das Wetter morgen besser wird.\n\n3. Sie hofft, _______________ sie die Prüfung besteht.\n\n4. Wir denken, _______________ das Konzert gut wird.\n\n5. Ihr wisst, _______________ ich Recht habe.\n\n6. Sie meinen, _______________ der Film interessant ist.\n\n7. Ich finde, _______________ du fleißig bist.\n\n8. Er sagt, _______________ er müde ist.\n\n9. Sie glaubt, _______________ das Problem gelöst werden kann.\n\n10. Wir hoffen, _______________ ihr uns besucht.`,
      blanks: [
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" },
        { answer: "dass" }
      ]
    }
  ]
};

function Grammatik() {
  const [currentLevel, setCurrentLevel] = useState('A1');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const exercise = exercises[currentLevel][currentExercise];

  const handleAnswerChange = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setCurrentExercise(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleExerciseChange = (index) => {
    setCurrentExercise(index);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ color: '#E65100', mb: 4 }}>Grammatik</Typography>
      
      {/* Seviye Seçimi */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#E65100', mb: 2 }}>Seviye Seçin:</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
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
                  backgroundColor: currentLevel === level ? '#E65100' : '#FFF8E1',
                  borderColor: '#E65100',
                }
              }}
            >
              {level}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Alıştırma İçeriği */}
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#FFF8E1', mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#E65100' }}>{exercise.title}</Typography>
        {exercise.instruction && (
          <Typography variant="body1" sx={{ mb: 2, whiteSpace: 'pre-line' }}>{exercise.instruction}</Typography>
        )}
        {exercise.type === 'fill_in_the_blanks' ? (
          <Box>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
              {exercise.text.split(/_______________/).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <TextField
                      size="small"
                      value={answers[i] || ''}
                      onChange={e => handleAnswerChange(i, e.target.value)}
                      sx={{ width: 80, mx: 1 }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Typography>
            <Button variant="contained" onClick={handleCheckAnswers} sx={{ backgroundColor: '#E65100', mt: 2 }}>
              Cevapları Kontrol Et
            </Button>
            {showResults && (
              <Box sx={{ mt: 2 }}>
                {exercise.blanks.map((blank, i) => (
                  <Alert key={i} severity={answers[i]?.trim().toLowerCase() === blank.answer.toLowerCase() ? 'success' : 'error'} sx={{ mb: 1 }}>
                    {answers[i]?.trim().toLowerCase() === blank.answer.toLowerCase()
                      ? `${i + 1}. boşluk: Doğru!`
                      : `${i + 1}. boşluk: Yanlış. Doğru cevap: ${blank.answer}`}
                  </Alert>
                ))}
              </Box>
            )}
          </Box>
        ) : null}
      </Paper>
    </Container>
  );
}

export default Grammatik; 