import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Tabs, Tab } from '@mui/material';

const exercises = {
  A1: [
    {
      words: ['ich', 'bin', 'Student'],
      correct: 'Ich bin Student.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['du', 'kommst', 'aus', 'der', 'Türkei'],
      correct: 'Du kommst aus der Türkei.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['er', 'wohnt', 'in', 'Berlin'],
      correct: 'Er wohnt in Berlin.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['Sonntags', 'muss', 'er', 'eine', 'Stunde', 'laufen'],
      correct: 'Sonntags muss er eine Stunde laufen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Jeden', 'Tag', 'muss', 'Julia', 'um', '7', 'Uhr', 'aufstehen'],
      correct: 'Jeden Tag muss Julia um 7 Uhr aufstehen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Aber', 'sie', 'kann', 'am', 'Wochenende', 'bis', '10', 'Uhr', 'schlafen'],
      correct: 'Aber sie kann am Wochenende bis 10 Uhr schlafen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Julia', 'kann', 'gut', 'Tennis', 'spielen'],
      correct: 'Julia kann gut Tennis spielen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Deshalb', 'geht', 'sie', 'sonntags', 'Tennis', 'spielen'],
      correct: 'Deshalb geht sie sonntags Tennis spielen.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['Ihre', 'Freundinnen', 'möchten', 'sie', 'manchmal', 'auch', 'treffen'],
      correct: 'Ihre Freundinnen möchte sie manchmal auch treffen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Dann', 'gehen', 'sie', 'zusammen', 'Kaffee', 'trinken'],
      correct: 'Dann gehen sie zusammen Kaffee trinken.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['Julia', 'lebt', 'alleine'],
      correct: 'Julia lebt alleine.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      words: ['Deshalb', 'muss', 'sie', 'selbst', 'kochen'],
      correct: 'Deshalb muss sie selbst kochen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Aber', 'sie', 'möchte', 'am', 'Wochenende', 'zu', 'Hause', 'oft', 'nicht', 'essen'],
      correct: 'Aber sie möchte am Wochenende zu Hause oft nicht essen.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['An', 'den', 'Wochentagen', 'muss', 'sie', 'bis', '19', 'Uhr', 'arbeiten'],
      correct: 'An den Wochentagen muss sie bis 19 Uhr arbeiten.',
      hint: 'Modal fiil ile cümle kurun.'
    },
    {
      words: ['Am', 'Samstag', 'kocht', 'sie', 'für', 'die', 'ganze', 'Woche'],
      correct: 'Am Samstag kocht sie für die ganze Woche.',
      hint: 'Cümleyi doğru sırayla kurun.'
    },
    {
      type: 'sentence_build',
      words: ['Am', 'Wochenende', 'lernt', 'Elisabeth', 'gern', 'kochen'],
      correct: 'Am Wochenende lernt Elisabeth gern kochen.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wo', 'joggen', 'Eva', 'und', 'Petra', 'morgens'],
      correct: 'Wo joggen Eva und Petra morgens?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wohin', 'reist', 'ihr', 'gern', 'im', 'Sommer'],
      correct: 'Wohin reist ihr gern im Sommer?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Mein', 'Mann', 'und', 'ich', 'fotografieren', 'sehr', 'gern', 'in', 'der', 'Natur'],
      correct: 'Mein Mann und ich fotografieren sehr gern in der Natur.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Im', 'Winter', 'fährt', 'Christiane', 'sehr', 'gern', 'Ski'],
      correct: 'Im Winter fährt Christiane sehr gern Ski.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Können', 'Sie', 'den', 'Text', 'lesen', 'und', 'verstehen'],
      correct: 'Können Sie den Text lesen und verstehen?',
      hint: 'Soru cümlesi kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Hast', 'du', 'Durst'],
      correct: 'Hast du Durst?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wer', 'hat', 'Hunger'],
      correct: 'Wer hat Hunger?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Mein', 'kleiner', 'Sohn', 'möchte', 'ein', 'Glas', 'Wasser', 'trinken'],
      correct: 'Mein kleiner Sohn möchte ein Glas Wasser trinken.',
      hint: 'Cümleyi doğru sırayla kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Kann', 'ich', 'Obst', 'bringen'],
      correct: 'Kann ich Obst bringen?',
      hint: 'Soru cümlesi kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Brauchst', 'du', 'Hilfe'],
      correct: 'Brauchst du Hilfe?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Kannst', 'du', 'mir', 'bei', 'der', 'Party', 'helfen'],
      correct: 'Kannst du mir bei der Party helfen?',
      hint: 'Soru cümlesi kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'kann', 'ich', 'dir', 'vor', 'der', 'Party', 'helfen'],
      correct: 'Wie kann ich dir vor der Party helfen?',
      hint: 'Soru cümlesi kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Morgen', 'hat', 'unser', 'Chef', 'Geburtstag'],
      correct: 'Morgen hat unser Chef Geburtstag.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wir', 'müssen', 'für', 'ihn', 'ein', 'Geschenk', 'kaufen'],
      correct: 'Wir müssen für ihn ein Geschenk kaufen.',
      hint: 'Cümleyi doğru sırayla kurun ve modal fiili doğru kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'essen', 'Sie', 'gern', 'zum', 'Frühstück'],
      correct: 'Was essen Sie gern zum Frühstück?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'isst', 'man', 'in', 'der', 'Türkei', 'zum', 'Frühstück'],
      correct: 'Was isst man in der Türkei zum Frühstück?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'trinkt', 'man', 'dazu'],
      correct: 'Was trinkt man dazu?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Viele', 'Menschen', 'essen', 'gern', 'Butterbrot', 'und', 'Käse', 'zum', 'Frühstück'],
      correct: 'Viele Menschen essen gern Butterbrot und Käse zum Frühstück.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'trinken', 'gern', 'ein', 'Glas', 'Tee', 'dazu'],
      correct: 'Sie trinken gern ein Glas Tee dazu.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Manche', 'Menschen', 'essen', 'gern', 'gesund'],
      correct: 'Manche Menschen essen gern gesund.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'mögen', 'Müsli', 'mit', 'Obst'],
      correct: 'Sie mögen Müsli mit Obst.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Nach', 'dem', 'Frühstück', 'trinkt', 'man', 'einen', 'türkischen', 'Kaffee'],
      correct: 'Nach dem Frühstück trinkt man einen türkischen Kaffee.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Essen', 'Sie', 'keine', 'Milchprodukte'],
      correct: 'Essen Sie keine Milchprodukte?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sind', 'Sie', 'auch', 'Vegetarier'],
      correct: 'Sind Sie auch Vegetarier?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'sind', 'Sie', 'von', 'Beruf'],
      correct: 'Was sind Sie von Beruf?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'machen', 'Sie', 'beruflich'],
      correct: 'Was machen Sie beruflich?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'ist', 'deine', 'Mutter', 'von', 'Beruf'],
      correct: 'Was ist deine Mutter von Beruf?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'machen', 'deine', 'Eltern', 'beruflich'],
      correct: 'Was machen deine Eltern beruflich?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Mein', 'Vater', 'arbeitet', 'als', 'Ingenieur', 'bei', 'Siemens'],
      correct: 'Mein Vater arbeitet als Ingenieur bei Siemens.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Arbeiten', 'Sie', 'als', 'Verkäufer', 'bei', 'Migros'],
      correct: 'Arbeiten Sie als Verkäufer bei Migros?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wer', 'arbeitet', 'als', 'Kellner', 'im', 'Restaurant'],
      correct: 'Wer arbeitet als Kellner im Restaurant?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Von', 'wann', 'bis', 'wann', 'arbeitet', 'der', 'Informatiker', 'in', 'der', 'Firma'],
      correct: 'Von wann bis wann arbeitet der Informatiker in der Firma?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wann', 'hast', 'du', 'frei'],
      correct: 'Wann hast du frei?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wo', 'unterrichtet', 'der', 'Lehrer'],
      correct: 'Wo unterrichtet der Lehrer?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Um', '17', 'Uhr', 'kommt', 'der', 'Zug', 'aus', 'Stuttgart', 'am', 'Gleis', '5', 'an'],
      correct: 'Um 17 Uhr kommt der Zug aus Stuttgart am Gleis 5 an.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Fährt', 'der', 'Regionalexpress', 'heute', 'Nachmittag', 'vom', 'Hauptbahnhof', 'ab'],
      correct: 'Fährt der Regionalexpress heute Nachmittag vom Hauptbahnhof ab?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Die', 'Ankunft', 'ist', 'um', '13.30', 'Uhr'],
      correct: 'Die Ankunft ist um 13.30 Uhr.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Um', 'wie', 'viel', 'Uhr', 'ist', 'die', 'Ankunft', 'vom', 'ICE'],
      correct: 'Um wie viel Uhr ist die Ankunft vom ICE?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Um', 'wie', 'viel', 'Uhr', 'ist', 'die', 'Abfahrt', 'vom', 'Regionalexpress'],
      correct: 'Um wie viel Uhr ist die Abfahrt vom Regionalexpress?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Mein', 'Flugzeug', 'fliegt', 'heute', 'vom', 'Frankfurter', 'Flughafen', 'ab'],
      correct: 'Mein Flugzeug fliegt heute vom Frankfurter Flughafen ab.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'lange', 'dauert', 'der', 'Flug', 'von', 'Istanbul', 'nach', 'Izmir'],
      correct: 'Wie lange dauert der Flug von Istanbul nach Izmir?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'lange', 'dauert', 'die', 'Fahrt', 'mit', 'dem', 'Bus', 'von', 'Bonn', 'nach', 'Essen'],
      correct: 'Wie lange dauert die Fahrt mit dem Bus von Bonn nach Essen?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Die', 'Fahrt', 'dauert', 'fünfundvierzig', 'Minuten', 'mit', 'dem', 'Zug'],
      correct: 'Die Fahrt dauert fünfundvierzig Minuten mit dem Zug.',
      hint: 'Cümleyi doğru sırayla kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'spät', 'ist', 'es'],
      correct: 'Wie spät ist es?',
      hint: 'Soru cümlesi kurun ve fiili doğru çekin.',
      tense: 'Präsens'
    }
  ],
  A2: [
    {
      words: ['ich', 'habe', 'gestern', 'einen', 'Film', 'gesehen'],
      correct: 'Ich habe gestern einen Film gesehen.',
      hint: 'Perfekt cümlesi kurun.'
    },
    {
      words: ['wir', 'sind', 'letzte', 'Woche', 'nach', 'Deutschland', 'gefahren'],
      correct: 'Wir sind letzte Woche nach Deutschland gefahren.',
      hint: 'Perfekt cümlesi kurun.'
    },
    {
      type: 'sentence_build',
      words: ['gehen', 'gerne', 'du', 'zu', 'der', 'Schule', 'in'],
      correct: 'Bist du gerne zur Schule gegangen?',
      hint: 'Perfekt cümlesi kurun. Soru cümlesi yapın.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Eigentlich', 'um', 'aufstehen', 'ich', 'müssen', 'schon', '6', 'Uhr', 'aber'],
      correct: 'Eigentlich musste ich schon um 6 Uhr aufstehen.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'sentence_build',
      words: ['wohnen', 'auf', 'wir', 'dem', 'Land', 'und', 'um', 'fahren', 'der', 'Schulbus', '7', 'Uhr', 'zu', 'der', 'Schule'],
      correct: 'Wir haben auf dem Land gewohnt, und sind um 7 Uhr mit dem Schulbus zur Schule gefahren.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['können', 'ich', 'treffen', 'keine', 'Freunde', 'nach', 'der', 'Schule', 'weil', 'lernen', 'müssen', 'ich', 'oft'],
      correct: 'Nach der Schule konnte ich keine Freunde treffen, weil ich oft lernen musste.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'sentence_build',
      words: ['der', 'Schulzeit', 'sich', 'erinnern', 'an', 'ich', 'noch', 'und', 'immer', 'noch', 'mit', 'meinen', 'Schulfreunden', 'Kontakt', 'haben', 'ich'],
      correct: 'Ich erinnere mich noch an die Schulzeit und ich habe immer noch Kontakt mit meinen Schulfreunden.',
      hint: 'Präsens cümlesi kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['in', 'Mathe', 'sein', 'ich', 'nicht', 'sehr', 'gut', 'weil', 'nervös', 'sein', 'unser', 'Lehrer', 'immer'],
      correct: 'In Mathe war ich nicht sehr gut, weil unser Lehrer immer nervös war.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'sentence_build',
      words: ['können', 'wir', 'machen', 'nicht', 'lange', 'in', 'der', 'Türkei', 'Urlaub', 'zu', 'kurz', 'die', 'Schulferien', 'sein', 'in', 'Deutschland', 'weil'],
      correct: 'Wir konnten nicht lange in der Türkei Urlaub machen, weil die Schulferien in Deutschland zu kurz waren.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'sentence_build',
      words: ['können', 'in', 'Deutschland', 'ohne', 'Schuluniform', 'die', 'Schüler', 'zur', 'Schule', 'gehen'],
      correct: 'Die Schüler können in Deutschland ohne Schuluniform zur Schule gehen.',
      hint: 'Präsens cümlesi kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['können', 'die', 'Schüler', 'lange', 'spielen', 'draußen', 'nach', 'der', 'Schule', 'früher', 'mit', 'ihren', 'Freunden'],
      correct: 'Früher konnten die Schüler nach der Schule lange mit ihren Freunden draußen spielen.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'sentence_build',
      words: ['mehr', 'Spaß', 'haben', 'früher', 'die', 'Kinder', 'als', 'heute', 'in', 'der', 'Schule'],
      correct: 'Früher hatten die Kinder mehr Spaß in der Schule als heute.',
      hint: 'Präteritum cümlesi kurun.',
      tense: 'Präteritum'
    },
    {
      type: 'word_find',
      question: 'Mein Arm tut seit Tagen weh. Was habe ich am Arm?',
      hint: 'Artikel: die',
      correct: 'die Schmerzen',
      pattern: 'd___ S___________'
    },
    {
      type: 'word_find',
      question: 'Das ist ein Genre im Bereich Filme. Diese Filme sieht man zum Beispiel im Fernsehen bei National Geographic.',
      hint: 'Artikel: der',
      correct: 'der Dokumentarfilm',
      pattern: 'd___ D___________'
    },
    {
      type: 'word_find',
      question: 'Ich habe letzte Woche online ein T-Shirt gekauft. Leider hat mir die Größe nicht gefallen. Was soll ich tun?',
      hint: 'Artikel yok',
      correct: 'umtauschen',
      pattern: 'u___________'
    },
    {
      type: 'word_find',
      question: 'Ich versuche, mein Zimmer ordentlich zu machen. Was mache ich?',
      hint: 'Artikel yok',
      correct: 'aufräumen',
      pattern: 'a___________'
    },
    {
      type: 'word_find',
      question: 'Meine Nachbarn machen zu viel Lärm. Ich bin damit nicht zufrieden. Was tun meine Nachbarn?',
      hint: 'Artikel yok',
      correct: 'stören',
      pattern: 's___________'
    },
    {
      type: 'word_find',
      question: 'Ich brauche einen Termin beim Arzt. Ich rufe beim Arzt an. Was möchte ich machen? (einen Termin _______)',
      hint: 'Artikel yok',
      correct: 'vereinbaren',
      pattern: 'v__________'
    },
    {
      type: 'word_find',
      question: 'Max hat eine Wohnung. Er kann die Wohnung vermieten oder verkaufen, wenn er möchte. Die Wohnung gehört ihm. Was ist er?',
      hint: 'Artikel: der/die',
      correct: 'der Besitzer / die Besitzerin',
      pattern: 'd___ B_________'
    },
    {
      type: 'word_find',
      question: 'Meine Studenten mögen keine Online-Übungen. Sie wollen lieber auf Hardcopys schreiben. Ich habe einen Drucker zu Hause. Was muss ich meine Arbeitsblätter machen?',
      hint: 'Artikel yok',
      correct: 'ausdrucken',
      pattern: 'a_________'
    },
    {
      type: 'word_find',
      question: 'Ich bin in einem Kleidergeschäft. Eine nette Verkäuferin hilft mir und gibt mir eine Hose in meiner Größe. Ich suche eine Umkleidekabine. Was möchte ich zuerst die Hose machen?',
      hint: 'Artikel yok',
      correct: 'anprobieren',
      pattern: 'a_________'
    },
    {
      type: 'word_find',
      question: 'Ich rufe bei der Firmenzentrale an und möchte Frau Schulz sprechen. Aber die Leitung von Frau Schulz ist besetzt und ich warte ein paar Minuten am Apparat. Was kann die Sekretärin an der Zentrale leider nicht machen?',
      hint: 'Artikel yok',
      correct: 'verbinden',
      pattern: 'v_________'
    },
    {
      type: 'sentence_build',
      words: ['Freundin', 'Fahrrad', 'ist', 'kaputt'],
      correct: 'Ihr Fahrrad ist kaputt.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'möchte', 'ihr', 'Fahrrad', 'verkaufen'],
      correct: 'Sie möchte ihr Fahrrad verkaufen.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Student', 'Heft', 'ist', 'voll'],
      correct: 'Sein Heft ist voll.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Er', 'nimmt', 'sein', 'Heft'],
      correct: 'Er nimmt sein Heft.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Lehrer', 'Stuhl', 'ist', 'unbequem'],
      correct: 'Sein Stuhl ist unbequem.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'gebe', 'seinen', 'Stuhl'],
      correct: 'Ich gebe seinen Stuhl.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Amy', 'Winehouse', 'Musik', 'ist', 'sehr', 'gut'],
      correct: 'Ihre Musik ist sehr gut.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'finde', 'ihre', 'Musik', 'sehr', 'gut'],
      correct: 'Ich finde ihre Musik sehr gut.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Arzt', 'Telefonnummer', 'ist', '5640098'],
      correct: 'Seine Telefonnummer ist 5640098.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'brauche', 'seine', 'Telefonnummer'],
      correct: 'Ich brauche seine Telefonnummer.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Max', 'und', 'Marcel', 'Noten', 'sind', 'schlecht'],
      correct: 'Ihre Noten sind schlecht.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'sehen', 'ihre', 'Noten'],
      correct: 'Sie sehen ihre Noten.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Du', 'Deutschunterricht', 'ist', 'gut'],
      correct: 'Dein Deutschunterricht ist gut.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Findest', 'du', 'deinen', 'Deutschunterricht', 'gut'],
      correct: 'Findest du deinen Deutschunterricht gut?',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'Ring', 'ist', 'aus', 'Gold'],
      correct: 'Ihr Ring ist aus Gold.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Suchen', 'Sie', 'Ihren', 'Ring'],
      correct: 'Suchen Sie Ihren Ring?',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Gast', 'Glas', 'ist', 'leer'],
      correct: 'Sein Glas ist leer.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Er', 'nimmt', 'sein', 'Glas'],
      correct: 'Er nimmt sein Glas.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Kinder', 'Bilder', 'sind', 'wunderschön'],
      correct: 'Ihre Bilder sind wunderschön.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'zeigen', 'ihre', 'Bilder'],
      correct: 'Sie zeigen ihre Bilder.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Tourist', 'Passfoto', 'fehlt'],
      correct: 'Sein Passfoto fehlt.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Er', 'hat', 'sein', 'Passfoto', 'nicht', 'dabei'],
      correct: 'Er hat sein Passfoto nicht dabei.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['ich', 'Opa', 'lebt', 'in', 'Bodrum'],
      correct: 'Mein Opa lebt in Bodrum.',
      hint: 'Nominativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'besuche', 'meinen', 'Opa', 'gern'],
      correct: 'Ich besuche meinen Opa gern.',
      hint: 'Akkusativ durumunda iyelik zamiri kullanın.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'gefällt', 'mir', 'nicht', 'dass', 'ich', 'bei', 'meinen', 'Großeltern', 'wohnen', 'muss'],
      correct: 'Es gefällt mir nicht, dass ich bei meinen Großeltern wohnen muss.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'schön', 'dass', 'ich', 'im', 'Studentenwohnheim', 'nicht', 'allein', 'bin'],
      correct: 'Es ist schön, dass ich im Studentenwohnheim nicht allein bin.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'hoffe', 'dass', 'ich', 'in', 'der', 'Zukunft', 'eine', 'große', 'Wohnung', 'mit', 'Balkon', 'finde'],
      correct: 'Ich hoffe, dass ich in der Zukunft eine große Wohnung mit Balkon finde.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'wichtig', 'dass', 'die', 'Wohnung', 'in', 'einer', 'ruhigen', 'Gegend', 'liegt'],
      correct: 'Es ist wichtig, dass die Wohnung in einer ruhigen Gegend liegt.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'denke', 'dass', 'Gruppenarbeit', 'im', 'Unterricht', 'hilfreich', 'ist'],
      correct: 'Ich denke, dass Gruppenarbeit im Unterricht hilfreich ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'gut', 'dass', 'wir', 'zusammenarbeiten', 'können'],
      correct: 'Es ist gut, dass wir zusammenarbeiten können.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'hoffe', 'dass', 'mein', 'Arbeitsplatz', 'sehr', 'modern', 'ist'],
      correct: 'Ich hoffe, dass mein Arbeitsplatz sehr modern ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'gefällt', 'mir', 'dass', 'ich', 'nette', 'Kollegen', 'habe'],
      correct: 'Es gefällt mir, dass ich nette Kollegen habe.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'wünsche', 'mir', 'dass', 'ich', 'später', 'flexibel', 'arbeiten', 'kann'],
      correct: 'Ich wünsche mir, dass ich später flexibel arbeiten kann.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'mein', 'Ziel', 'dass', 'ich', 'als', 'Lehrerin', 'in', 'einer', 'Schule', 'arbeite'],
      correct: 'Es ist mein Ziel, dass ich als Lehrerin in einer Schule arbeite.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'freue', 'mich', 'dass', 'du', 'zu', 'meiner', 'Hochzeit', 'kommen', 'kannst'],
      correct: 'Ich freue mich, dass du zu meiner Hochzeit kommen kannst.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'schön', 'dass', 'wir', 'diesen', 'besonderen', 'Tag', 'zusammen', 'feiern'],
      correct: 'Es ist schön, dass wir diesen besonderen Tag zusammen feiern.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'tut', 'mir', 'sehr', 'leid', 'dass', 'ich', 'den', 'Termin', 'absagen', 'muss'],
      correct: 'Es tut mir sehr leid, dass ich den Termin absagen muss.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'hoffe', 'dass', 'wir', 'einen', 'neuen', 'Termin', 'finden', 'können'],
      correct: 'Ich hoffe, dass wir einen neuen Termin finden können.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'möchte', 'Sie', 'bitten', 'dass', 'wir', 'einen', 'Termin', 'für', 'eine', 'Besprechung', 'machen'],
      correct: 'Ich möchte Sie bitten, dass wir einen Termin für eine Besprechung machen.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'wäre', 'gut', 'dass', 'wir', 'uns', 'nächste', 'Woche', 'treffen'],
      correct: 'Es wäre gut, dass wir uns nächste Woche treffen.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'finde', 'dass', 'vegetarische', 'Ernährung', 'gesund', 'ist'],
      correct: 'Ich finde, dass vegetarische Ernährung gesund ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Viele', 'Menschen', 'denken', 'dass', 'man', 'ohne', 'Fleisch', 'nicht', 'genug', 'Energie', 'hat'],
      correct: 'Viele Menschen denken, dass man ohne Fleisch nicht genug Energie hat.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'finde', 'dass', 'Deutsch', 'eine', 'interessante', 'Sprache', 'ist'],
      correct: 'Ich finde, dass Deutsch eine interessante Sprache ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'ist', 'wichtig', 'dass', 'man', 'jeden', 'Tag', 'neue', 'Wörter', 'lernt'],
      correct: 'Es ist wichtig, dass man jeden Tag neue Wörter lernt.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Meine', 'Lehrerin', 'sagt', 'dass', 'regelmäßige', 'Übung', 'der', 'Schlüssel', 'zum', 'Erfolg', 'ist'],
      correct: 'Meine Lehrerin sagt, dass regelmäßige Übung der Schlüssel zum Erfolg ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Meine', 'Mutter', 'schlägt', 'vor', 'dass', 'wir', 'im', 'Sommer', 'nach', 'Italien', 'reisen'],
      correct: 'Meine Mutter schlägt vor, dass wir im Sommer nach Italien reisen.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Es', 'gefällt', 'mir', 'dass', 'das', 'Hotel', 'direkt', 'am', 'Meer', 'liegt'],
      correct: 'Es gefällt mir, dass das Hotel direkt am Meer liegt.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Viele', 'sagen', 'dass', 'das', 'Reisen', 'in', 'andere', 'Länder', 'spannend', 'ist'],
      correct: 'Viele sagen, dass das Reisen in andere Länder spannend ist.',
      hint: 'Cümleyi "dass" bağlacıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'habe', 'meine', 'Großeltern', 'in', 'der', 'Schweiz', 'besucht'],
      correct: 'Ich habe meine Großeltern in der Schweiz besucht.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Wir', 'haben', 'ein', 'köstliches', 'Abendessen', 'im', 'Restaurant', 'gegessen'],
      correct: 'Wir haben ein köstliches Abendessen im Restaurant gegessen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'bin', 'mit', 'dem', 'Zug', 'nach', 'München', 'gefahren'],
      correct: 'Ich bin mit dem Zug nach München gefahren.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Mein', 'Freund', 'hat', 'ein', 'leckeres', 'Mittagessen', 'für', 'uns', 'gekocht'],
      correct: 'Mein Freund hat ein leckeres Mittagessen für uns gekocht.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Wir', 'haben', 'einen', 'Spaziergang', 'im', 'Park', 'gemacht'],
      correct: 'Wir haben einen Spaziergang im Park gemacht.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Er', 'hat', 'ein', 'interessantes', 'Buch', 'gelesen'],
      correct: 'Er hat ein interessantes Buch gelesen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'habe', 'für', 'die', 'Prüfung', 'gelernt', 'und', 'ich', 'habe', 'sie', 'bestanden'],
      correct: 'Ich habe für die Prüfung gelernt und ich habe sie bestanden!',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Herr', 'Schmidt', 'ist', 'durch', 'den', 'Wald', 'spazieren', 'gegangen', 'und', 'er', 'hat', 'viele', 'Tiere', 'gesehen'],
      correct: 'Herr Schmidt ist durch den Wald spazieren gegangen und er hat viele Tiere gesehen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'habe', 'die', 'ganze', 'Nacht', 'auf', 'der', 'Party', 'getanzt', 'und', 'ich', 'habe', 'viel', 'Spaß', 'gehabt'],
      correct: 'Ich habe die ganze Nacht auf der Party getanzt und ich habe viel Spaß gehabt.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Die', 'Kinder', 'haben', 'einen', 'neuen', 'Film', 'im', 'Kino', 'gesehen', 'und', 'sie', 'haben', 'ihn', 'sehr', 'gut', 'gefunden'],
      correct: 'Die Kinder haben einen neuen Film im Kino gesehen und sie haben ihn sehr gut gefunden.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ihr', 'habt', 'Fußball', 'im', 'Park', 'gespielt', 'und', 'ihr', 'habt', 'das', 'Spiel', 'gewonnen'],
      correct: 'Ihr habt Fußball im Park gespielt und ihr habt das Spiel gewonnen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Mit', 'wem', 'hast', 'du', 'denn', 'telefoniert'],
      correct: 'Mit wem hast du denn telefoniert?',
      hint: 'Perfekt soru cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Was', 'hast', 'du', 'am', 'Samstag', 'gemacht'],
      correct: 'Was hast du am Samstag gemacht?',
      hint: 'Perfekt soru cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Peter', 'hat', 'die', 'Briefe', 'aus', 'dem', 'Briefkasten', 'genommen'],
      correct: 'Peter hat die Briefe aus dem Briefkasten genommen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Wer', 'hat', 'dir', 'bei', 'den', 'Hausaufgaben', 'geholfen'],
      correct: 'Wer hat dir bei den Hausaufgaben geholfen?',
      hint: 'Perfekt soru cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'habe', 'eine', 'E-Mail', 'an', 'meine', 'Freundin', 'geschrieben', 'und', 'sie', 'hat', 'schon', 'geantwortet'],
      correct: 'Ich habe eine E-Mail an meine Freundin geschrieben und sie hat schon geantwortet.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'lange', 'hat', 'das', 'Kind', 'geschlafen'],
      correct: 'Wie lange hat das Kind geschlafen?',
      hint: 'Perfekt soru cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Sabine', 'ist', 'immer', 'um', '20.00', 'Uhr', 'ins', 'Bett', 'gegangen'],
      correct: 'Sabine ist immer um 20.00 Uhr ins Bett gegangen.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Die', 'Kinder', 'haben', 'Pizza', 'gegessen', 'und', 'Cola', 'getrunken'],
      correct: 'Die Kinder haben Pizza gegessen und Cola getrunken.',
      hint: 'Perfekt cümlesi kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Wie', 'lange', 'bist', 'du', 'bei', 'deinem', 'Freund', 'geblieben'],
      correct: 'Wie lange bist du bei deinem Freund geblieben?',
      hint: 'Perfekt soru cümlesi kurun.',
      tense: 'Perfekt'
    }
  ],
  B1: [
    {
      words: ['obwohl', 'es', 'regnet', 'gehen', 'wir', 'spazieren'],
      correct: 'Obwohl es regnet, gehen wir spazieren.',
      hint: 'Nebensatz ile cümle kurun.'
    },
    {
      words: ['weil', 'ich', 'krank', 'bin', 'bleibe', 'ich', 'zu', 'Hause'],
      correct: 'Weil ich krank bin, bleibe ich zu Hause.',
      hint: 'Nebensatz ile cümle kurun.'
    },
    {
      type: 'sentence_build',
      words: ['Einerseits', 'habe', 'ich', 'neue', 'Kulturen', 'kennengelernt', 'andererseits', 'habe', 'ich', 'meine', 'Selbstständigkeit', 'gesteigert'],
      correct: 'Einerseits habe ich neue Kulturen kennengelernt, andererseits habe ich meine Selbstständigkeit gesteigert.',
      hint: 'Cümleleri "einerseits-andererseits" bağlaçlarıyla birleştirin.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Einerseits', 'habe', 'ich', 'während', 'meines', 'Auslandspraktikums', 'viele', 'neue', 'Fähigkeiten', 'erworben', 'andererseits', 'habe', 'ich', 'auch', 'Herausforderungen', 'gemeistert'],
      correct: 'Einerseits habe ich während meines Auslandspraktikums viele neue Fähigkeiten erworben, andererseits habe ich auch Herausforderungen gemeistert.',
      hint: 'Cümleleri "einerseits-andererseits" bağlaçlarıyla birleştirin.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Einerseits', 'bin', 'ich', 'während', 'meines', 'Austausches', 'viel', 'gereist', 'andererseits', 'konnte', 'ich', 'tiefe', 'Einblicke', 'in', 'die', 'lokale', 'Lebensweise', 'gewinnen'],
      correct: 'Einerseits bin ich während meines Austausches viel gereist, andererseits konnte ich tiefe Einblicke in die lokale Lebensweise gewinnen.',
      hint: 'Cümleleri "einerseits-andererseits" bağlaçlarıyla birleştirin.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Einerseits', 'habe', 'ich', 'im', 'Ausland', 'viele', 'neue', 'Freunde', 'gefunden', 'andererseits', 'habe', 'ich', 'auch', 'Heimweh', 'gehabt'],
      correct: 'Einerseits habe ich im Ausland viele neue Freunde gefunden, andererseits habe ich auch Heimweh gehabt.',
      hint: 'Cümleleri "einerseits-andererseits" bağlaçlarıyla birleştirin.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Ich', 'habe', 'weder', 'Zeit', 'für', 'Hobbys', 'noch', 'für', 'ein', 'Praktikum'],
      correct: 'Ich habe weder Zeit für Hobbys noch für ein Praktikum.',
      hint: 'Cümleyi "weder...noch" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Sie', 'spricht', 'weder', 'Englisch', 'noch', 'Deutsch'],
      correct: 'Sie spricht weder Englisch noch Deutsch.',
      hint: 'Cümleyi "weder...noch" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Er', 'interessiert', 'sich', 'weder', 'für', 'Sport', 'noch', 'für', 'Musik'],
      correct: 'Er interessiert sich weder für Sport noch für Musik.',
      hint: 'Cümleyi "weder...noch" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Die', 'Aufgabe', 'ist', 'weder', 'einfach', 'noch', 'schnell', 'erledigt'],
      correct: 'Die Aufgabe ist weder einfach noch schnell erledigt.',
      hint: 'Cümleyi "weder...noch" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Im', 'Sommerurlaub', 'habe', 'ich', 'weder', 'die', 'Sonne', 'noch', 'den', 'Strand', 'genossen'],
      correct: 'Im Sommerurlaub habe ich weder die Sonne noch den Strand genossen.',
      hint: 'Cümleyi "weder...noch" bağlaçlarıyla kurun.',
      tense: 'Perfekt'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'mehr', 'Erfahrungen', 'ich', 'sammle', 'desto', 'besser', 'kann', 'ich', 'meine', 'Zukunft', 'planen'],
      correct: 'Je mehr Erfahrungen ich sammle, desto besser kann ich meine Zukunft planen.',
      hint: 'Cümleyi "je-desto" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'mehr', 'neue', 'Kulturen', 'ich', 'kennenlerne', 'desto', 'offener', 'werde', 'ich', 'und', 'erweitere', 'meinen', 'Horizont'],
      correct: 'Je mehr neue Kulturen ich kennenlerne, desto offener werde ich und erweitere meinen Horizont.',
      hint: 'Cümleyi "je-desto" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'mehr', 'Aufgaben', 'ich', 'erledige', 'und', 'je', 'mehr', 'Verantwortung', 'ich', 'übernehme', 'umso', 'mehr', 'Selbstvertrauen', 'gewinne', 'ich'],
      correct: 'Je mehr Aufgaben ich erledige und je mehr Verantwortung ich übernehme, umso mehr Selbstvertrauen gewinne ich.',
      hint: 'Cümleyi "je-umso" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'intensiver', 'das', 'Praktikum', 'ist', 'desto', 'mehr', 'Kenntnisse', 'kann', 'ich', 'erwerben'],
      correct: 'Je intensiver das Praktikum ist, desto mehr Kenntnisse kann ich erwerben.',
      hint: 'Cümleyi "je-desto" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'länger', 'ich', 'in', 'einem', 'anderen', 'Land', 'lebe', 'umso', 'mehr', 'schätze', 'ich', 'meine', 'eigene', 'Kultur'],
      correct: 'Je länger ich in einem anderen Land lebe, umso mehr schätze ich meine eigene Kultur.',
      hint: 'Cümleyi "je-umso" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'mehr', 'Zeit', 'ich', 'für', 'das', 'Lernen', 'nehme', 'umso', 'schneller', 'erreiche', 'ich', 'meine', 'Ziele'],
      correct: 'Je mehr Zeit ich für das Lernen nehme, umso schneller erreiche ich meine Ziele.',
      hint: 'Cümleyi "je-umso" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    },
    {
      type: 'sentence_build',
      words: ['Je', 'weiter', 'ich', 'reise', 'desto', 'mehr', 'lerne', 'ich', 'über', 'verschiedene', 'Kulturen'],
      correct: 'Je weiter ich reise, desto mehr lerne ich über verschiedene Kulturen.',
      hint: 'Cümleyi "je-desto" bağlaçlarıyla kurun.',
      tense: 'Präsens'
    }
  ]
};

export default function SatzeBilden() {
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleLevelChange = (event, newLevel) => {
    setSelectedLevel(newLevel);
    setCurrentExercise(0);
    setUserAnswer('');
    setShowResult(false);
  };

  const handleSubmit = () => {
    const currentExerciseData = exercises[selectedLevel][currentExercise];
    if (currentExerciseData.type === 'word_find') {
      if (userAnswer.trim().toLowerCase() === currentExerciseData.correct.toLowerCase()) {
        setScore(prev => prev + 1);
      }
    } else {
      if (userAnswer.trim().toLowerCase() === currentExerciseData.correct.toLowerCase()) {
        setScore(prev => prev + 1);
      }
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentExercise < exercises[selectedLevel].length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer('');
      setShowResult(false);
    }
  };

  const currentExerciseData = exercises[selectedLevel][currentExercise];

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

      <Paper sx={{ p: 3, mb: 3, background: '#FFF8E1' }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#E65100' }}>
          {selectedLevel} Seviyesi - {currentExerciseData.type === 'word_find' ? 'Kelime Bulma' : 'Cümle Kurma'} Alıştırması {currentExercise + 1}/{exercises[selectedLevel].length}
        </Typography>

        {currentExerciseData.type === 'word_find' ? (
          <>
            <Typography sx={{ mb: 2 }}>
              {currentExerciseData.question}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                Kelime Deseni:
              </Typography>
              <Typography sx={{ fontFamily: 'monospace' }}>
                {currentExerciseData.pattern}
              </Typography>
            </Box>

            <Typography sx={{ mb: 1, color: '#666' }}>
              İpucu: {currentExerciseData.hint}
            </Typography>

            <TextField
              fullWidth
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showResult}
              sx={{ mb: 2 }}
            />
          </>
        ) : (
          <>
            <Typography sx={{ mb: 2 }}>
              Verilen kelimeleri kullanarak anlamlı bir cümle kurun:
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                Kelimeler:
              </Typography>
              <Typography>
                {currentExerciseData.words.join(' - ')}
              </Typography>
            </Box>

            <Typography sx={{ mb: 1, color: '#666' }}>
              İpucu: {currentExerciseData.hint}
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={2}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showResult}
              sx={{ mb: 2 }}
            />
          </>
        )}

        {!showResult ? (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
          >
            Kontrol Et
          </Button>
        ) : (
          <Box>
            <Typography 
              sx={{ 
                color: userAnswer.trim().toLowerCase() === currentExerciseData.correct.toLowerCase() ? 'green' : 'red',
                mb: 2
              }}
            >
              {userAnswer.trim().toLowerCase() === currentExerciseData.correct.toLowerCase() 
                ? 'Doğru!' 
                : `Yanlış! Doğru cevap: ${currentExerciseData.correct}`}
            </Typography>
            
            {currentExercise < exercises[selectedLevel].length - 1 && (
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleNext}
              >
                Sonraki Soru
              </Button>
            )}
          </Box>
        )}
      </Paper>

      <Typography sx={{ mt: 3, fontWeight: 'bold', color: '#E65100' }}>
        Doğru sayısı: {score} / {exercises[selectedLevel].length}
      </Typography>
    </Box>
  );
} 