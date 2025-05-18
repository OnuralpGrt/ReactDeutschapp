import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Alert } from '@mui/material';

const exercises = {
  A1: [
    {
      id: 1,
      title: "Verbkonjugation im Text (Gegenwart)",
      instruction: `Aufgabe: Ergänzen Sie den folgenden Text mit den richtigen Formen der angegebenen Verben. Achten Sie dabei besonders auf die korrekte Verbkonjugation in der Gegenwart.\nHinweis: Lesen Sie den Text sorgfältig durch und überlegen Sie, welche Form des Verbs in den jeweiligen Lücken benötigt wird. Berücksichtigen Sie die Person (ich, du, er/sie/es, wir, ihr, sie) und die Zeitform.`,
      type: "fill_in_the_blanks",
      text: `Hallo, mein Name ________ (1-sein) Weber, Nathalie Weber. Ich ________ (2-sein) eine Ingenieurin von Beruf und ________ (3-arbeiten) seit zwei Jahren als Entwicklungsingenieurin bei Siemens. Ich ________ (4-arbeiten) sechs Tage die Woche. Ich ________ (5-haben) nur montags frei. Am Wochenende ________ (6-arbeiten) ich am Computer von Zuhause. In der Arbeit ________ (7-machen) ich oft Projekte und ________ (8-schreiben) viele E-Mails. Als Team ________ (9-haben) wir Chatgruppen auf WhatsApp und ________ (10-chatten) per WhatsApp über die Arbeit. In meiner Freizeit ________ (11-gehen) ich vormittags zum Sport und nachmittags ________ (12-kochen) ich das Abendessen für meine Familie.`,
      blanks: [
        { answer: "ist" },
        { answer: "bin" },
        { answer: "arbeitet" },
        { answer: "arbeite" },
        { answer: "habe" },
        { answer: "arbeite" },
        { answer: "mache" },
        { answer: "schreibe" },
        { answer: "haben" },
        { answer: "chatten" },
        { answer: "gehe" },
        { answer: "koche" }
      ]
    },
    {
      id: 2,
      title: "möchten, essen, trinken oder mögen?",
      instruction: `Ergänzen Sie die Verben in richtiger Konjugation.`,
      type: "fill_in_the_blanks",
      text: `_____________________ du einen Hamburger oder nur Pommfrites bestellen?\nIch ____________________ gerne Hamburger.\nWas ___________________ Sie ___________________ ? Cola oder Apfelsaft?\nHarald _________________abends immer Tee.\nIch ___________________ nicht gerne zu Abend.\nDie Kinder _____________________ Schokolade, aber die Erwachsenen nicht so sehr.\n_______________________ du süße Getränke?\nMeine Mutter __________________ Kaffee immer ohne Zucker.\nDie Lehrer _________________in der Pause oft Tee oder Kaffee.\nDas Kind _____________________ gerne beim Fernsehen.\n___________________ ihr ins Café gehen?\nDer Sportler _________________ und __________________ immer gesund.\nMeine Oma _________________ alkoholische Getränke nicht, aber sie ___________ manchmal ein Glas Wein.\n"Heute abend ____________________ wir nicht zu Hause __________________.Wir gehen lieber ins Restaurant."\n Nachmittags _______________ die Deutschen meistens Kuchen.`,
      blanks: [
        { answer: "Möchtest" },
        { answer: "esse" },
        { answer: "möchten" },
        { answer: "trinken" },
        { answer: "trinkt" },
        { answer: "esse" },
        { answer: "mögen" },
        { answer: "essen" },
        { answer: "Trinkst" },
        { answer: "Magst" },
        { answer: "trinkt" },
        { answer: "trinken" },
        { answer: "isst" },
        { answer: "Möchtet" },
        { answer: "isst" },
        { answer: "trinkt" },
        { answer: "mag" },
        { answer: "trinkt" },
        { answer: "möchten" },
        { answer: "essen" },
        { answer: "essen" }
      ]
    },
    {
      id: 3,
      title: "Modalverben - Betüls Geburtstag",
      instruction: "Welches Modalverb passt: können, wollen, müssen oder sollen?",
      type: "fill_in_the_blanks",
      text: `BETÜL HAT GEBURTSTAG 🎂\n\nHallo liebe Ahu,\nBetül hat bald Geburtstag. Alev und ich haben schon etwas für sie geplant. 😊 Wir ________ (1) nächsten Samstag eine Überraschungsparty organisieren.\nWir laden dich herzlich ein.\nWir feiern bei mir zu Hause. Die Party beginnt um 7 Uhr abends und dauert ungefähr drei Stunden. Hast du Zeit? ________ (2) du kommen? Ist das möglich? Oder ________ (3) du auch am Wochenende arbeiten? : ( Oh, bitte, bitte!\nSag nicht sofort: Nein! Du ________ (4) auch mal abschalten!\nAlev _________(5) unbedingt etwas Besonderes für Betül backen. Du weißt ja schon, sie ist eine super Köchin.\nIch hätte eine kleine Bitte: ________ (6) du vielleicht eine Flasche Wein mitbringen? Oder ________ (7) sich lieber Arzu um die Getränke kümmern?\nÜbrigens, mach dir keine Sorgen um die Adresse.\nAlev _______ (8) dich gern am Bahnhof abholen und zu mir bringen.\nDas wird bestimmt toll! Gib bitte bis Freitag Bescheid. Wir freuen uns schon auf unser Treffen.\n\nMit lieben Grüßen\nDeine Aylin`,
      blanks: [
        { answer: "wollen" },
        { answer: "kannst" },
        { answer: "musst" },
        { answer: "musst" },
        { answer: "will" },
        { answer: "könntest" },
        { answer: "soll" },
        { answer: "kann" }
      ]
    },
    {
      id: 4,
      title: "Der Klassenraum",
      instruction: "Ergänzen Sie die Wörter: Laptop, Stühle, Tafel, Fenster, Lehrbuch, Tafelstift, Computer, Bildschirm, Schreibtisch, Tastatur, Tische",
      type: "fill_in_the_blanks",
      text: `Der Klassenraum\nIn der Klasse gibt es viele ____________________. Die Studenten haben aber keine __________________________________. Jeder Student bringt sein _____________________ mit, aber man kann es auch am __________________________ sehen. Manche Studenten bringen auch ihren _________________ zum Unterricht . Leider geht der _________________________________ in der Klasse langsam. Denn er ist alt. Der Lehrer benutzt einen ______________________________. Er schreibt unbekannte Wörter oder Sätze an die ________________________________.\nManchmal arbeitet er an dem __________________________________. Dort liegt auch eine ___________________________________________. Die Klasse ist hell . Denn sie hat zwei ______________________________________.`,
      blanks: [
        { answer: "Stühle" },
        { answer: "Tische" },
        { answer: "Lehrbuch" },
        { answer: "Bildschirm" },
        { answer: "Laptop" },
        { answer: "Computer" },
        { answer: "Tafelstift" },
        { answer: "Tafel" },
        { answer: "Schreibtisch" },
        { answer: "Tastatur" },
        { answer: "Fenster" }
      ]
    },
    {
      id: 5,
      title: "Richtige Sätze",
      instruction: "Welcher Satz ist richtig? Wählen Sie die richtige Lösung.",
      type: "multiple_choice",
      questions: [
        {
          question: "1. Welcher Satz ist richtig?",
          options: [
            "Ich fahre nach Ankara.",
            "Ich fahre mit dem Zug nach Ankara."
          ],
          answer: 1
        },
        {
          question: "2. Welcher Satz ist richtig?",
          options: [
            "Ich kann kommen nach Istanbul.",
            "Ich kann nach Istanbul kommen."
          ],
          answer: 1
        },
        {
          question: "3. Welcher Satz ist richtig?",
          options: [
            "Was ist Ihre Adresse?",
            "Wie ist Ihre Adresse?"
          ],
          answer: 1
        },
        {
          question: "4. Welcher Satz ist richtig?",
          options: [
            "Ich habe nicht ein Fahrrad.",
            "Ich habe kein Fahrrad."
          ],
          answer: 1
        },
        {
          question: "5. Welcher Satz ist richtig?",
          options: [
            "Ich möchte morgen zum Arzt gehen.",
            "Ich möchte zum Arzt morgen gehen."
          ],
          answer: 0
        },
        {
          question: "6. Welcher Satz ist richtig?",
          options: [
            "Otto braucht einem Medikament.",
            "Otto braucht ein Medikament."
          ],
          answer: 1
        },
        {
          question: "7. Welcher Satz ist richtig?",
          options: [
            "Sie versteht den Satz nicht.",
            "Sie versteht nicht den Satz."
          ],
          answer: 0
        },
        {
          question: "8. Welcher Satz ist richtig?",
          options: [
            "Dann er frühstückt um 8:00 Uhr.",
            "Dann frühstückt er um 8:00 Uhr."
          ],
          answer: 1
        },
        {
          question: "9. Welcher Satz ist richtig?",
          options: [
            "Ich esse gerne Käsebrot zu Frühstück.",
            "Ich esse gerne Käsebrot zum Frühstück."
          ],
          answer: 1
        },
        {
          question: "10. Welcher Satz ist richtig?",
          options: [
            "Frau Schmidt, haben Sie das Formular ausgefüllt?",
            "Sie haben das Formular ausgefüllt, Frau Schmidt?"
          ],
          answer: 0
        },
        {
          question: "11. Welcher Satz ist richtig?",
          options: [
            "Die Eltern von meiner Freundin sind geschieden.",
            "Die Eltern von meiner Freundin ist geschieden."
          ],
          answer: 0
        },
        {
          question: "12. Welcher Satz ist richtig?",
          options: [
            "Der Student studiert jeden Tag Deutsch bis 14 Uhr.",
            "Der Student lernt jeden Tag bis 14 Uhr Deutsch."
          ],
          answer: 1
        }
      ]
    },
    {
      id: 6,
      title: "Verben ergänzen",
      instruction: "Finden Sie die Verben. Ergänzen Sie die Verben.",
      type: "fill_in_the_blanks",
      text: `1. einen Kurs _be__________________\n2. das Computerspiel _sp_______________\n3. Englisch ________sp_______________\n4. die Rechnung ____be___________________\n5. den Kellner _ru_____________________\n6. mit ihrer Mutter _tel_____________________\n7. im Studentenwohnheim _wo_________\n8. in der Türkei ____l_______________________\n9. bei der Commerzbank _ar_________________\n10. Germanistik _st_________________\n11. eine Wohnung in Berlin _su______________\n12. mit dem Bus _fa_______________\n13. zu Abend e_____________________\n14. einen Urlaub ___m___________________\n15. im Supermarkt _ei_____________________\n16. das Formular _au____________________\n17. die Mail schr______________________\n18. die kaputte Uhr re_______________________\n19. zur Schule g_______________________\n20. den Weg __be_____________________________\n21. die Wohnung m___________________________\n22. die Tür au____________________________\n23. die Hose an_________________________\n24. den Termin ve_______________________\n25. mit dem Zug in Berlin an__________________\n26. ein Hotelzimmer __b________________\n27. das Geschirr sp______________________\n28. die Fenster p_______________________\n29. mit Kreditkarte z_____________________\n30. die Einkaufstüte tr________________________`,
      blanks: [
        { answer: "besuchen" },
        { answer: "spielen" },
        { answer: "sprechen" },
        { answer: "bezahlen" },
        { answer: "rufen" },
        { answer: "telefonieren" },
        { answer: "wohnen" },
        { answer: "leben" },
        { answer: "arbeiten" },
        { answer: "studieren" },
        { answer: "suchen" },
        { answer: "fahren" },
        { answer: "essen" },
        { answer: "machen" },
        { answer: "einkaufen" },
        { answer: "ausfüllen" },
        { answer: "schreiben" },
        { answer: "reparieren" },
        { answer: "gehen" },
        { answer: "beschreiben" },
        { answer: "mieten" },
        { answer: "aufmachen" },
        { answer: "anziehen" },
        { answer: "vereinbaren" },
        { answer: "ankommen" },
        { answer: "buchen" },
        { answer: "spülen" },
        { answer: "putzen" },
        { answer: "zahlen" },
        { answer: "tragen" }
      ]
    },
    {
      id: 7,
      title: "Backe backe Kuchen…",
      instruction: "Artikel bei Backrezepten - Ergänzen Sie die Artikel",
      type: "fill_in_the_blanks",
      text: `1. ________________ Teig ausrollen\n2. ____________ Teig halbieren\n3. ________________ Äpfel schälen\n4. aus ____________ Teig ___________ weiteren Kreis ausstechen\n5. _____________ Marmelade auf ______________ Teig geben\n6. _________ Milch kommt dazu\n7. __________ trockenen Zutaten eingeben\n8. Mehl durch _______________ Sieb geben\n9. ____________ Form mit Butter streichen\n10. mit ______________ Gabel ein paar Mal einstechen\n11. _______________ Rezept empfehle ich\n12. ____________ Käsekuchen ist proteinreich\n13. _______________ Pfannkuchen mit Zimt bestreuen\n14. _____________ Kaffee einbischen abkühlen lassen\n15. ____________ Eiklar stef schlagen\n16. ____________ Eisschnee kommt darein\n17. ______________ Prise Salz\n18. ______________ Marmorkuchen ist _______________ der besten Kuchen\n19. ____________ Puddingpulver nach Anweisung anrühren\n20. für ____________Mürbeteig brauche ich ..\n21. in _______________ Kuchenform kommt jetzt ____________ Backpapier\n22. ___________ Teig zu ____________ glatten Teig kneten\n23. er kommt jetzt in _______________ Backofen`,
      blanks: [
        { answer: "den" },
        { answer: "den" },
        { answer: "die" },
        { answer: "dem" },
        { answer: "einen" },
        { answer: "die" },
        { answer: "den" },
        { answer: "die" },
        { answer: "den" },
        { answer: "die" },
        { answer: "der" },
        { answer: "diesen" },
        { answer: "den" },
        { answer: "dieser" },
        { answer: "der" },
        { answer: "den" },
        { answer: "die" },
        { answer: "der" },
        { answer: "eine" },
        { answer: "der" },
        { answer: "einer" },
        { answer: "das" },
        { answer: "den" },
        { answer: "die" },
        { answer: "das" },
        { answer: "den" },
        { answer: "einem" },
        { answer: "den" }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Trennbare und untrennbare Verben",
      instruction: "Ergänzen Sie die Lücken mit den passenden Verbformen. Entscheiden Sie: Sind die Verben trennbar oder untrennbar?",
      type: "fill_in_the_blanks",
      text: `buchstabieren: Ich ________ meinen Namen ________.\nfrühstücken: Um wie viel Uhr ________ du ________?\nkennenlernen: Martha ________ ihren Mann in England ________.\ns. unterhalten: Otto ________ sich mit Yara über die Prüfung ________.\nspazierengehen: Wie oft ________ du in der Woche ________?\nunterrichten: Frau Müller ________ gern ________.\nunterscheiden: Wir ________ Grammatik und Wortschatz voneinander ________.\nunterschreiben: Der Mieter ________ den Mietvertrag ________.\nunterstreichen: Er ________ die Schlüsselwörter im Text ________.\nunterstützen: Die Eltern ________ ihre Kinder ________.\nuntersuchen: Die Ärztinnen ________ den Patienten ________.\ns. überlegen: Warum ________ du dir immer noch ________, ob du das Angebot annehmen sollst?\nübernachten: Unser Chef ________ in Köln ________.\nübersetzen: Die Studentin ________ den Text in ihre Muttersprache ________.\nüberweisen: Der Vermieter ________ die Miete monatlich ________.\nwiederholen: Mein Schüler ________ die Grammatik regelmäßig ________.`,
      blanks: [
        { answer: "buchstabiere" },
        { answer: "" },
        { answer: "frühstückst" },
        { answer: "" },
        { answer: "lernt" },
        { answer: "kennen" },
        { answer: "unterhält" },
        { answer: "" },
        { answer: "gehst" },
        { answer: "spazieren" },
        { answer: "unterrichtet" },
        { answer: "" },
        { answer: "unterscheiden" },
        { answer: "" },
        { answer: "unterschreibt" },
        { answer: "" },
        { answer: "unterstreicht" },
        { answer: "" },
        { answer: "unterstützen" },
        { answer: "" },
        { answer: "untersuchen" },
        { answer: "" },
        { answer: "überlegst" },
        { answer: "" },
        { answer: "übernachtet" },
        { answer: "" },
        { answer: "übersetzt" },
        { answer: "" },
        { answer: "überweist" },
        { answer: "" },
        { answer: "wiederholt" },
        { answer: "" }
      ]
    },
    {
      id: 2,
      title: "Als Tourist in einer Stadt",
      instruction: "Ergänzen Sie die Lücken mit den passenden Wörtern. Achten Sie auf die Wortart (Konjunktion, Verb, Fragewort, Modalverb, Präposition, Adjektiv, Nomen).",
      type: "fill_in_the_blanks",
      text: `_______Wenn______(Konjunktion) ich eine Stadt ______besichtigen-besuchen__ ( Verb)will, möchte ich zuerst ___wissen________(Verb), ___was_________( Fragewort) ich dort besichtigen ___kann___________ (Modalverb). Denn ___für____________ ( Präposition)mich ist es wichtig, eine _____neue_________ ( Adjektiv) Kultur kennenzulernen. Ich ____bereite_____________ (Verb) mich fast zwei Wochen lang_____auf_______(Präp.) eine Reise _____vor_____(Präfix) .\nIch ___suche-buche____________(Verb) ein Hotel, kaufe ein ___günstiges____ (Adjektiv) Flugticket und packe meinen __Koffer_____(Nomen) ein. Ich gehe für die Resevierung nicht ins ___Reisebüro_____ (Nomen), sondern ich erledige alles online, im ___Internet_____(Nomen) .\n______Obwohl_________ (Konj.)die Hotepreise hoch sind, wohne ich gerne ______in__ (Präp.) Fünf-Sterne Hotels, ____weil______( Konj.) diese Hotels viele bessere Möglichkeiten ___anbieten____________ (Verb) als die anderen Hotels. Es gefällt mir, ___wenn-dass___________ (Konj.) das Hotel Stadtrundfahrten organisiert oder ____offenes-leckeres_________ ( Adjektiv) Büffet hat. Außerdem mache ich gerne ___Spaziergänge_____________(Nomen) in der Natur oder ich fahre gerne Kajak _____auf________ (Präp.)einem Fluß. Deshalb ist es gut, __wenn_____________( Konj.) das Hotel in`,
      blanks: [
        { answer: "Wenn" },
        { answer: "besichtigen" },
        { answer: "wissen" },
        { answer: "was" },
        { answer: "kann" },
        { answer: "für" },
        { answer: "neue" },
        { answer: "bereite" },
        { answer: "auf" },
        { answer: "vor" },
        { answer: "suche" },
        { answer: "günstiges" },
        { answer: "Koffer" },
        { answer: "Reisebüro" },
        { answer: "Internet" },
        { answer: "Obwohl" },
        { answer: "in" },
        { answer: "weil" },
        { answer: "anbieten" },
        { answer: "wenn" },
        { answer: "leckeres" },
        { answer: "Spaziergänge" },
        { answer: "auf" },
        { answer: "wenn" },
        { answer: "Nähe" }
      ]
    },
    {
      id: 3,
      title: "nichts-alles-etwas-etwas anderes",
      instruction: "Ergänzen Sie die Sätze mit nichts, alles, etwas oder etwas anderes.",
      type: "fill_in_the_blanks",
      text: `Ich habe heute schon belegtes Brot gegessen. Deshalb möchte ich am Abend ________________________________ essen.\nIch war im Seminar von Professor Müller. Leider habe ich ________________ verstanden.\nIst das _____________ ? Ja, danke.\n"Nein, danke. Ich habe schon _______________ gegessen!"\n"Ich muss bald meine Präsentation vortragen. Aber leider habe ich noch _________________ geschrieben."\nIch kann heute Abend das schwarze Kleid anziehen, aber ich will _____________________ anziehen, vielleicht eine schicke Bluse.\nMan muss jeden Tag ___________Gutes für seine Gesundheit tun.\nEs gibt _________________ Besseres als eine Katze im Haus. Katzen sind so lieb!\n"Ich habe das gern gemacht, ______________________ zu danken!"\nIn der mündlichen Prüfung soll man mit dem Partner gemeinsam _____________ planen.\n"Manuela, hast du morgen ____________ Zeit für mich?"\nMorgen ziehen wir um. Ich habe ______________ zu Hause eingepackt.\nIch habe Steak bestellt. Mein Freund will kein Steak essen. Deshalb bestellt er ________________________________.\n"Nein, ich habe bis jetzt noch _______________ gehört!"\nIch habe viel recherchiert. Endlich habe ich über dieses Thema ___________ gefunden.\nDie Studenten können in der Mensa nicht ______________ essen.\nIch möchte ______________ anbieten, was lecker und gesund ist.\nUnsere Nachbarn haben _______________ Zeit mit unserem Hund verbracht.\nKannst du ________________ auf Deutsch übersetzen?\nDer Gast hat noch ________________ in das Formular geschrieben.`,
      blanks: [
        { answer: "etwas anderes" },
        { answer: "nichts" },
        { answer: "alles" },
        { answer: "etwas" },
        { answer: "nichts" },
        { answer: "etwas anderes" },
        { answer: "etwas" },
        { answer: "nichts" },
        { answer: "nichts" },
        { answer: "etwas" },
        { answer: "etwas" },
        { answer: "alles" },
        { answer: "etwas anderes" },
        { answer: "nichts" },
        { answer: "etwas" },
        { answer: "alles" },
        { answer: "etwas" },
        { answer: "etwas" },
        { answer: "alles" },
        { answer: "nichts" }
      ]
    },
    {
      id: 4,
      title: "Als Tourist in einer Stadt (A2)",
      instruction: "Ergänzen Sie die Wörter, beachten Sie die Angaben in den Klammern!",
      type: "fill_in_the_blanks",
      text: `_________________________(Konjunktion) ich eine Stadt _______________________ ( Verb)will, möchte ich zuerst _______________________(Verb), ____________( Fragewort) ich dort besichtigen ______________ (Modalverb). Denn _______________ ( Präposition)mich ist es wichtig, eine ______________ ( Adjektiv) Kultur kennenzulernen. Ich _________________ (Verb) mich fast zwei Wochen lang____________(Präp.) eine Reise ______________(Präfix) .\nIch _______________(Verb) ein Hotel, kaufe ein ______________ (Adjektiv) Flugticket und packe meinen _________________(Nomen) ein. Ich gehe für die Resevierung nicht ins ________________________ (Nomen), sondern ich erledige alles online, im _____________________(Nomen) .\n___________________ (Konj.)die Hotepreise hoch sind, wohne ich gerne _______________ (Präp.) Fünf-Sterne Hotels, ___________________( Konj.) diese Hotels viele bessere Möglichkeiten ____________________ (Verb) als die anderen Hotels. Es gefällt mir, ______________ (Konj.) das Hotel Stadtrundfahrten organisiert oder _____________ ( Adjektiv) Büffet hat. Außerdem mache ich gerne _____________________(Nomen) in der Natur oder ich fahre gerne Kajak _____________ (Präp.)einem Fluß. Deshalb ist es gut, _______________( Konj.) das Hotel in der _______________ ( Nomen)von der Natur liegt.`,
      blanks: [
        { answer: "Wenn" },
        { answer: "besichtigen" },
        { answer: "wissen" },
        { answer: "was" },
        { answer: "kann" },
        { answer: "für" },
        { answer: "neue" },
        { answer: "bereite" },
        { answer: "auf" },
        { answer: "vor" },
        { answer: "suche" },
        { answer: "günstiges" },
        { answer: "Koffer" },
        { answer: "Reisebüro" },
        { answer: "Internet" },
        { answer: "Obwohl" },
        { answer: "in" },
        { answer: "weil" },
        { answer: "anbieten" },
        { answer: "wenn" },
        { answer: "leckeres" },
        { answer: "Spaziergänge" },
        { answer: "auf" },
        { answer: "wenn" },
        { answer: "Nähe" }
      ]
    },
    {
      id: 5,
      title: "Wortschatzkontrolle AS.A1",
      instruction: "Ergänzen Sie die Lücken mit den passenden Verben.",
      type: "fill_in_the_blanks",
      text: `Thema: Kleidung\nbrauchen / anprobieren / suchen /umtauschen / ausziehen / kosten /tragen / sein/ mögen / finden\n\nMein Sohn _______________________ eine neue Jeans. Seine Jeans sind zu eng.\nMeine Lieblingsfarbe ______________________ grün.\nDarf ich den Pullover ein mal _____________________ ?\nWas _________________________ die Jacke?\nIch _____________________ diesen blauen Mantel!\nWie ____________________ du die Krawatte?\n"Es ist hier sehr warm !"   -  "_______________ Sie doch ihre Jacke _____________!"\n"Entschuldigung, meine Mutter hat Geburtstag. Ich __________________ für sie eine schicke Bluse.\nIch soll den Pullover nicht in der Waschmaschine waschen. Leider kann ich ihn nicht zur Wäscheservice bringen. Deshalb möchte ich ihn _________________________.\nDer Popstar ___________________ auf der Bühne immer sehr interessante Kostüme.\n\nThema: Tätigkeiten bei der Arbeit\nsprechen / vereinbaren/ halten / kontrollieren / haben /anrufen / beantworten / verbinden / drucken / lösen / weiterleiten / abholen\n\nKönnen Sie mich bitte mit dem Studentenwerk ____________________?\nGuten Tag, ich ____________________ Sie _____________, denn Ihre Anzeige interessiert mich.\nMein Kollege hat mein Problem in kurzer Zeit ___________________________ .\nHat der Projektleiter eure Rechnungen ______________________ ?\nDer Student hat bei der Firma Siemens für sein Praktikum einen Termin ___________________________.\nDer Firmenleiter hat in der Konferenz eine Rede ________________________ und am Ende hat er die Fragen der Zuschauer ________________________.\nDer Mitarbeiter __________________ gestern eine Besprechung mit seinem Arbeitgeber.\nIn der Versammlung hat man auf Englisch _____________________.\nHat Herr Müller die SMS an seine Kollegen  _________________________?\nIch soll die Italiener vom Flughafen ______________________ .\n\nThema: Wohnen\nwohnen / einziehen / mieten / besitzen / umziehen / stören / haben / aufräumen / suchen / liegen\n\nDas Einfamilienhaus _______________________ am Stadtrand.\nDie Deutschen ________________ lieber eine Wohnung. Denn die Mieten sind sehr hoch.\nIch muss leider bald _______________________ . Denn mein Mietvertrag ist ausgelaufen.\nViele Studenten ______________________________ nicht gerne im Studentenwohnheim. Sie wollen meistens gemeinsam eine Wohnung ______________________.\nIch habe diese Woche sehr viel Zeit draußen verbracht. Deshalb muss ich am Wochenende die Wohnung _______________________.\nHeute ____________________ eine Familie mit zwei kleinen Kindern in die Wohnung ________________. Ich habe einen Lastwagen vor dem Haus gesehen. Hoffentlich _________________ die Kinder uns nicht!\nMein Bruder hat eine Arbeitsstelle in München gefunden. Jetzt ________________ er dort eine Wohnung.\nViele Menschen wollen ein eigenes Haus ________________________.`,
      blanks: [
        { answer: "braucht" },
        { answer: "ist" },
        { answer: "anprobieren" },
        { answer: "kostet" },
        { answer: "möchte" },
        { answer: "findest" },
        { answer: "Ziehen" },
        { answer: "aus" },
        { answer: "suche" },
        { answer: "umtauschen" },
        { answer: "trägt" },
        { answer: "verbinden" },
        { answer: "rufe" },
        { answer: "an" },
        { answer: "gelöst" },
        { answer: "kontrolliert" },
        { answer: "vereinbart" },
        { answer: "gehalten" },
        { answer: "beantwortet" },
        { answer: "hatte" },
        { answer: "gesprochen" },
        { answer: "weitergeleitet" },
        { answer: "abholen" },
        { answer: "liegt" },
        { answer: "mieten" },
        { answer: "umziehen" },
        { answer: "wohnen" },
        { answer: "mieten" },
        { answer: "aufräumen" },
        { answer: "zieht" },
        { answer: "ein" },
        { answer: "stören" },
        { answer: "sucht" },
        { answer: "besitzen" }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Brief an Ursula",
      instruction: "Ergänzen Sie die Lücken im Brief mit den passenden Wörtern.",
      type: "fill_in_the_blanks",
      text: `Hamburg, den 05.05.2025\n\n_____Liebe_____________(0) Ursula,\n\nich habe ________________(1) Nachrichten für ___________________________(2). Du ____________________ (3), ich bin vor vier Monaten _____________________ (4) Hamburg __________________________(5). Und ich ___________________ (6) bisher _______________ meiner Kollegin gewohnt, ________________________ (7) ich _________________________ (8) keine ___________________________ (9) Wohnung finden. Die Mieten sind hier sehr ________________________ (10). Deshalb ___________________ (11) ich so lange nach _____________________ (12) Wohnung gesucht. Die Nachbarin __________________ (13) meiner Kollegin wollte ihre Wohnung _________________________ (14). Natürlich habe ich mit ihr sofort einen _________________ (15) abgeschlossen. Ist das nicht toll? Jetzt bin ich die Nachbarin ________________ (16) meiner Kollegin _____________________ (17). Ich kenne den Wohnort schon gut. Und ich kann mit meiner Kollegin ____________________ (18) zur Arbeit fahren. Die Wohnung hat einen __________________ (19) und _______________ (20) Balkon mit Ausblick ___________ (21) das Meer. Ich denke, meine Wohnung ist die _________________(22) in dem Haus. Ich habe schon meine Möbel ____________________(23) und die Wohnung eingerichtet. Ein paar Sachen habe ich __________________ (24) gemacht.\nDu kannst __________________ (25) jederzeit besuchen. Es gibt auch ein _____________________ (26). _____________ (27) mich bitte an! Wir können zusammen ein _____________________ (28) Wochenende verbringen.\n\nLiebe Grüße\n\nDeine Petra`,
      blanks: [
        { answer: "gute" },
        { answer: "dich" },
        { answer: "weißt" },
        { answer: "nach" },
        { answer: "umgezogen" },
        { answer: "habe" },
        { answer: "bei" },
        { answer: "konnte" },
        { answer: "eine" },
        { answer: "preiswerte" },
        { answer: "hoch" },
        { answer: "habe" },
        { answer: "einer" },
        { answer: "von" },
        { answer: "vermieten" },
        { answer: "Mietvertrag" },
        { answer: "von" },
        { answer: "geworden" },
        { answer: "zusammen" },
        { answer: "großen" },
        { answer: "schönen" },
        { answer: "auf" },
        { answer: "schönste" },
        { answer: "gekauft" },
        { answer: "selbst" },
        { answer: "mich" },
        { answer: "Gästezimmer" },
        { answer: "Ruf" },
        { answer: "erholsames" }
      ]
    },
    {
      id: 2,
      title: "Als Tourist in einer Stadt (B1)",
      instruction: "Ergänzen Sie die Wörter, beachten Sie die Angaben in den Klammern!",
      type: "fill_in_the_blanks",
      text: `Meistens fahre ich ___________(Präp.) den Urlaub mit meinen ____________________ ( Nomen), weil wir ________________ (Reflexivpronomen) gut verstehen können.\nMeine Muttersprache ist Türkisch, aber ich kann auch zwei ______________________________(Nomen) Deutsch und Englisch. Deshalb habe ich ___________________ (Artikel) Kommunikationsprobleme, ___________________ ( Konj.) ich im Ausland bin. Ich habe Deutsch in _____________ (Artikel) Schule und auch in einem Kurs ___________________ ( Verb). ________________(Präp.) Deutschlernen hatte ich Schwierigkeiten __________( Präp.) den Artikeln, aber ich habe mich daran gewöhnt. ______________________( Konj.) ich in der Schule war, hatte ich einen guten Lehrer. Jetzt habe ich Spaß, Deutsch _____________ ( Konj.) sprechen.\nDie _________________________ (Adjektiv-superlativ) Städte, ______________ ( Relativpronomen) ich bisher gesehen habe, sind Rom und München. Ich ________________( Verb) allen vor, diese Städte zu ___________________ (Verb).`,
      blanks: [
        { answer: "in" },
        { answer: "Freunden" },
        { answer: "uns" },
        { answer: "Fremdsprachen" },
        { answer: "keine" },
        { answer: "wenn" },
        { answer: "der" },
        { answer: "gelernt" },
        { answer: "Beim" },
        { answer: "mit" },
        { answer: "Als" },
        { answer: "zu" },
        { answer: "schönsten" },
        { answer: "die" },
        { answer: "empfehle" },
        { answer: "besuchen" }
      ]
    }
  ]
};

function Wortschatz() {
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
      <Typography variant="h4" sx={{ color: '#E65100', mb: 3 }}>
        Wortschatz
      </Typography>

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

      {/* Alıştırma Seçimi */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#E65100', mb: 2 }}>Alıştırma Seçin:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {exercises[currentLevel].map((ex, index) => (
            <Button
              key={ex.id}
              variant={currentExercise === index ? "contained" : "outlined"}
              onClick={() => handleExerciseChange(index)}
              sx={{
                backgroundColor: currentExercise === index ? '#E65100' : 'transparent',
                color: currentExercise === index ? 'white' : '#E65100',
                borderColor: '#E65100',
                '&:hover': {
                  backgroundColor: currentExercise === index ? '#E65100' : '#FFF8E1',
                  borderColor: '#E65100',
                }
              }}
            >
              {ex.title}
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
              {exercise.text.split(/________/).map((part, i, arr) => (
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
        ) : exercise.type === 'multiple_choice' ? (
          <Box>
            {exercise.questions.map((q, qIndex) => (
              <Box key={qIndex} sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>{q.question}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {q.options.map((option, oIndex) => (
                    <Button
                      key={oIndex}
                      variant={answers[qIndex] === oIndex ? "contained" : "outlined"}
                      onClick={() => handleAnswerChange(qIndex, oIndex)}
                      sx={{
                        backgroundColor: answers[qIndex] === oIndex ? '#E65100' : 'transparent',
                        color: answers[qIndex] === oIndex ? 'white' : '#E65100',
                        borderColor: '#E65100',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          backgroundColor: answers[qIndex] === oIndex ? '#E65100' : '#FFF8E1',
                          borderColor: '#E65100',
                        }
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </Box>
              </Box>
            ))}
            <Button variant="contained" onClick={handleCheckAnswers} sx={{ backgroundColor: '#E65100', mt: 2 }}>
              Cevapları Kontrol Et
            </Button>
            {showResults && (
              <Box sx={{ mt: 2 }}>
                {exercise.questions.map((q, i) => (
                  <Alert key={i} severity={answers[i] === q.answer ? 'success' : 'error'} sx={{ mb: 1 }}>
                    {answers[i] === q.answer
                      ? `${i + 1}. soru: Doğru!`
                      : `${i + 1}. soru: Yanlış. Doğru cevap: ${q.options[q.answer]}`}
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

export default Wortschatz; 