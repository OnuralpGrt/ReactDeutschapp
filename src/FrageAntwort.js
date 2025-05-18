import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Alert } from '@mui/material';

const exercises = {
  A1: [
    {
      id: 1,
      title: "Leseverstehen: Fragen und Antworten",
      instruction: "Ordnen Sie die Fragen den passenden Antworten zu. Schreiben Sie die richtigen Buchstaben (a, b, c …) neben die Fragen.",
      type: "fill_in_the_blanks",
      text: `1. Von welchem Gleis ist die Abfahrt vom Zug? - ________\n2. Wie lange dauert der Flug nach Berlin? - ________\n3. Wohin fährt der Bus? - ________\n4. Wann ist die Ankunft vom ICE? - ________\n5. Auf welchem Gleis kommt der Zug an? - ________\n6. Kann ich zu Fuß zum Bahnhof gehen? - ________\n7. Wo ist der nächste Flughafen? - ________\n8. Wann fährt der Zug ab? - ________\n9. Wie lange dauert es zu Fuß ins Stadtzentrum? - ________\n10. Wohin fliegt das nächste Flugzeug? - ________\n\nAntworten:\na) Er fährt zum Hauptbahnhof.\nb) Die Ankunft ist um 16:45 Uhr.\nc) Der Flug dauert zwei Stunden.\nd) Das nächste Flugzeug fliegt nach München.\ne) Der Zug fährt um 10:30 Uhr ab.\nf) Ja, das dauert nur 10 Minuten.\ng) Die Abfahrt ist vom Gleis 5.\nh) Er kommt auf dem nächsten Gleis an.\ni) Der Flughafen ist in der Nähe der Autobahn.\nj) Es dauert etwa 20 Minuten.`,
      blanks: [
        { answer: "g" },
        { answer: "c" },
        { answer: "a" },
        { answer: "b" },
        { answer: "h" },
        { answer: "f" },
        { answer: "i" },
        { answer: "e" },
        { answer: "j" },
        { answer: "d" }
      ]
    },
    {
      id: 2,
      title: "Fragen bilden",
      instruction: "Bilden Sie die passenden Fragen zu den Antworten.",
      type: "fill_in_the_blanks",
      text: `1. ________ ________ Mario? - Mario kommt aus Portugal.\n2. ________ ________ er? - Er lebt in Deutschland.\n3. ________ ________ spricht er? - Er spricht Spanisch, Portugiesisch und Deutsch.\n4. ________ ________ er in Nürnberg? - Mario studiert in Nürnberg Informatik.\n5. ________ ________ er in seiner Freizeit? - Er entwickelt mit seinen Freunden zusammen Computerspiele und spielt gerne Gitarre.\n6. ________ ________ er jeden Tag mit der U-Bahn zur Universität? - Er fährt jeden Tag mit der U-Bahn zur Universität, denn die Fahrt ist bequem.\n7. ________ ________ das Studium? - Das Studium ist nicht leicht.\n8. ________ ________ er nach dem Studium machen? - Er will nach dem Studium als Informatiker in Deutschland arbeiten.\n\nMögliche Fragewörter:\nWoher\nWo\nWelche Sprachen\nWas\nWarum\nWie\nWas`,
      blanks: [
        { answer: "Woher" },
        { answer: "kommt" },
        { answer: "Wo" },
        { answer: "lebt" },
        { answer: "Welche Sprachen" },
        { answer: "spricht" },
        { answer: "Was" },
        { answer: "studiert" },
        { answer: "Was" },
        { answer: "macht" },
        { answer: "Warum" },
        { answer: "fährt" },
        { answer: "Wie" },
        { answer: "ist" },
        { answer: "Was" },
        { answer: "will" }
      ]
    },
    {
      id: 3,
      title: "Fragen und Antworten zum Thema Einkaufen",
      instruction: "Ordnen Sie die Antworten den Fragen zu.",
      type: "fill_in_the_blanks",
      text: `1. Wo kann ich Brot kaufen? - ________\n\n2. Wie viel kostet ein Kilo Äpfel? - ________\n\n3. Wann hat der Supermarkt geöffnet? - ________\n\n4. Wo finde ich die Milch? - ________\n\n5. Kann ich mit Karte bezahlen? - ________\n\n6. Wo ist die Kasse? - ________\n\n7. Haben Sie auch Bio-Produkte? - ________\n\n8. Wie komme ich zum nächsten Supermarkt? - ________\n\nAntworten:\nA) Ja, wir haben viele Bio-Produkte im Regal 3.\nB) Die Kasse ist am Ende des Ganges.\nC) Die Milch finden Sie im Kühlregal.\nD) Sie können Brot in der Bäckerei kaufen.\nE) Ein Kilo Äpfel kostet 2,99 Euro.\nF) Der Supermarkt ist von 8 bis 20 Uhr geöffnet.\nG) Ja, wir akzeptieren alle Karten.\nH) Gehen Sie die Straße entlang und biegen Sie rechts ab.`,
      blanks: [
        { answer: "D" },
        { answer: "E" },
        { answer: "F" },
        { answer: "C" },
        { answer: "G" },
        { answer: "B" },
        { answer: "A" },
        { answer: "H" }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Telefongespräche",
      instruction: "Ergänzen Sie den Dialog. Beachten Sie die Reihenfolge.",
      type: "fill_in_the_blanks",
      text: `Patientin:\nGuten Tag, ________ ________ Ursula Schiller.\n\n________ ________ einen Termin vereinbaren.\n\nArzthelferin:\nBrauchen Sie den Termin dringend, Frau Schiller? Herr Müller ist gerade nicht in der Praxis.\n________ ________ zwei Tage später.\n\nAm Freitag Nachmittag um 18 Uhr kann Herr Müller Sie sehen.\n\nPatientin:\n________ es nicht etwas früher?\n________ ________ etwas weh.\n\nArzthelferin:\nEin Moment, bitte.\n________ ________ Ihre Telefonnummer?\n\nIch ________ Herrn Müller fragen. Dann rufe ich Sie zurück.\n________ ________ so in Ordnung für Sie?\n\nPatientin:\nJa, ________ ________ ist 0975614.\n\nVielen Dank.\n________.\n\nMögliche Antworten:\nHier spricht\nIch möchte\nEr kommt\nGeht\nMein Zahn tut\nWie ist\nmuss\nIst das\nmeine Telefonnummer\nAufwiederhören`,
      blanks: [
        { answer: "Hier spricht" },
        { answer: "Ich möchte" },
        { answer: "Er kommt" },
        { answer: "Geht" },
        { answer: "Mein Zahn tut" },
        { answer: "Wie ist" },
        { answer: "muss" },
        { answer: "Ist das" },
        { answer: "meine Telefonnummer" },
        { answer: "Aufwiederhören" }
      ]
    },
    {
      id: 2,
      title: "Fragen und Antworten",
      instruction: "Schreiben Sie die Antworten in ganzen Sätzen.",
      type: "fill_in_the_blanks",
      text: `1. Wie heißt die Hauptstadt von Frankreich?\nAntwort: ________\n\n2. Wer ist der erste Präsident der USA?\nAntwort: ________\n\n3. Wie heißt die Hauptstadt von Deutschland?\nAntwort: ________\n\n4. Welches Land liegt südlich von Deutschland?\nAntwort: ________\n\n5. Wie heißt der größte Fluss in Deutschland?\nAntwort: ________\n\n6. Wie viele Kontinente gibt es?\nAntwort: ________\n\n7. Wie viele Monate hat ein Jahr?\nAntwort: ________\n\n8. Welches Tier ist der König der Tiere?\nAntwort: ________\n\n9. Wie viele Tage hat eine Woche?\nAntwort: ________\n\n10. Was trinken die Menschen in Deutschland normalerweise zum Frühstück?\nAntwort: ________\n\n11. Wie heißt der höchste Berg der Welt?\nAntwort: ________\n\n12. Welcher Feiertag ist am 25. Dezember?\nAntwort: ________\n\n13. Wie viele Farben hat der Regenbogen?\nAntwort: ________`,
      blanks: [
        { answer: "Die Hauptstadt von Frankreich heißt Paris" },
        { answer: "Der erste Präsident der USA ist George Washington" },
        { answer: "Die Hauptstadt von Deutschland ist Berlin" },
        { answer: "Österreich liegt südlich von Deutschland" },
        { answer: "Der größte Fluss in Deutschland heißt der Rhein" },
        { answer: "Es gibt sieben Kontinente" },
        { answer: "Ein Jahr hat zwölf Monate" },
        { answer: "Der König der Tiere ist der Löwe" },
        { answer: "Eine Woche hat sieben Tage" },
        { answer: "Die Menschen in Deutschland trinken normalerweise Kaffee zum Frühstück" },
        { answer: "Der höchste Berg der Welt heißt Mount Everest" },
        { answer: "Der Feiertag am 25. Dezember ist Weihnachten" },
        { answer: "Der Regenbogen hat sieben Farben" }
      ]
    },
    {
      id: 3,
      title: "Fragen und Antworten zum Thema Reisen",
      instruction: "Beantworten Sie die Fragen mit den passenden Antworten.",
      type: "fill_in_the_blanks",
      text: `1. Wohin fahren Sie in den Urlaub? - ________\n\n2. Wie lange bleiben Sie dort? - ________\n\n3. Mit wem reisen Sie? - ________\n\n4. Wie reisen Sie? - ________\n\n5. Wo übernachten Sie? - ________\n\n6. Was möchten Sie dort machen? - ________\n\n7. Wann fahren Sie los? - ________\n\n8. Wie viel kostet der Urlaub? - ________\n\nAntworten:\nA) Ich fahre mit dem Zug nach Italien.\nB) Ich bleibe zwei Wochen.\nC) Ich reise mit meiner Familie.\nD) Ich übernachte in einem Hotel am Strand.\nE) Ich möchte schwimmen und die Stadt besichtigen.\nF) Der Urlaub kostet 800 Euro pro Person.\nG) Ich fahre nächsten Montag los.\nH) Ich fahre nach Italien, ans Meer.`,
      blanks: [
        { answer: "H" },
        { answer: "B" },
        { answer: "C" },
        { answer: "A" },
        { answer: "D" },
        { answer: "E" },
        { answer: "G" },
        { answer: "F" }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Telefongespräch",
      instruction: "Ergänzen Sie die richtigen Sätze zu der entsprechenden Lücke. Beachten Sie dabei den Inhalt.",
      type: "fill_in_the_blanks",
      text: `Zentrale:\nJa, Guten Tag. ________\n\nHerr Akyurt:\nGuten Tag. Mein Name ist Kaya Akyurt.\n________\n\nZentrale:\n________\n\nHerr Akyurt:\n________\n\nJa, richtig.\n________\n\nZentrale:\n________\n\nHerr Akyurt:\n________\n\nZentrale:\n________\n\nHerr Grötz:\nGuten Tag, Herr Akyurt. Ich kontrolliere sofort die Lieferungen.\n________\n\n________\n\nHerr Akyurt:\n________\n\nSie sind immer sehr pünktlich.\n\nHerr Grötz:\n________\n\n________\n\nHerr Akyurt:\nBitte, Auf Wiederhören Herr Grötz.\n\nMögliche Antworten:\nWas kann ich für Sie tun?\nKann ich bitte Herrn Groß sprechen?\nMeinen Sie Herrn Grötz von der Finanzabteilung?\nOh, Entschuldigung.\nKönnten Sie mich mit ihm verbinden?\nWorum geht es Herr Akyurt?\nEs geht um eine noch nicht versendete Rechnung.\nBleiben Sie bitte dran, ich verbinde Sie.\nDie Rechnung wurde versendet, aber sie ist in der Post stecken geblieben.\nIch entschuldige mich für die Verzögerung.\nKein Problem, Herr Grötz.\nIch denke, die Rechnung bekommen Sie morgen.\nVielen Dank für Ihr Verständnis.`,
      blanks: [
        { answer: "Was kann ich für Sie tun?" },
        { answer: "Kann ich bitte Herrn Groß sprechen?" },
        { answer: "Meinen Sie Herrn Grötz von der Finanzabteilung?" },
        { answer: "Oh, Entschuldigung." },
        { answer: "Könnten Sie mich mit ihm verbinden?" },
        { answer: "Worum geht es Herr Akyurt?" },
        { answer: "Es geht um eine noch nicht versendete Rechnung." },
        { answer: "Bleiben Sie bitte dran, ich verbinde Sie." },
        { answer: "Die Rechnung wurde versendet, aber sie ist in der Post stecken geblieben." },
        { answer: "Ich entschuldige mich für die Verzögerung." },
        { answer: "Kein Problem, Herr Grötz." },
        { answer: "Ich denke, die Rechnung bekommen Sie morgen." },
        { answer: "Vielen Dank für Ihr Verständnis." }
      ]
    },
    {
      id: 2,
      title: "Fragen bilden",
      instruction: "Stellen Sie die Frage nach dem gedruckten Teil in der Antwort.",
      type: "fill_in_the_blanks",
      text: `1. Herr Müller, ________ ________ ein Hobbyfotograf?\n\nEin Hobbyfotograf ist eine Person, die Fotografie als Freizeitbeschäftigung und Leidenschaft betreibt, ohne dabei hauptberuflich als Fotograf zu arbeiten.\n\n2. ________ ________ Sie sich für das Fotografieren?\n\nIch interessiere mich schon seit dem Anfang des Studiums für das Fotografieren.\n\n3. ________ ________ Sie gern?\n\nDa ich gerne spazieren gehe und die Natur mag, will ich die Momente erfassen, damit sie nicht vergessen werden.\n\n4. ________ ________ Sie jetzt mit einem Fotografiekurs?\n\nIch beginne jetzt mit einem Fotografiekurs, weil ich den technischen Hintergrund des Fotografierens lernen will.\n\n5. ________ ________ Sie nach dem Kurs machen?\n\nIch habe danach vor, für eine Zeitschrift Fotos zu machen.\n\n6. Heißt das, dass Sie ________ ________?\n\nJa, ich möchte aus meinem Hobby einen Beruf machen.\n\n7. ________ ________ Sie dieses Hobby empfehlen?\n\nJa, ich würde dieses Hobby allen Altersgruppen empfehlen.\n\n8. ________ ________ einen Nachteil?\n\nJa, leider. Ein Nachteil ist, dass die Kosten zu hoch sind.\n\n9. ________ ________ das Fotografieren?\n\nEs hilft den Menschen, sich kreativ auszudrücken und man kann viele Menschen kennenlernen.\n\nMögliche Fragewörter:\nwas/wer ist\nseit wann interessieren\nwarum fotografieren\nwarum beginnen\nwas wollen\naus Ihrem Hobby einen Beruf machen\nwem würden\nhat\nwelchen Vorteil hat`,
      blanks: [
        { answer: "was/wer ist" },
        { answer: "seit wann interessieren" },
        { answer: "warum fotografieren" },
        { answer: "warum beginnen" },
        { answer: "was wollen" },
        { answer: "aus Ihrem Hobby einen Beruf machen" },
        { answer: "wem würden" },
        { answer: "hat" },
        { answer: "welchen Vorteil hat" }
      ]
    },
    {
      id: 3,
      title: "Fragen und Antworten zum Thema Beruf",
      instruction: "Beantworten Sie die Fragen mit den passenden Antworten.",
      type: "fill_in_the_blanks",
      text: `1. Was machen Sie beruflich? - ________\n\n2. Wie lange arbeiten Sie schon in diesem Beruf? - ________\n\n3. Was gefällt Ihnen an Ihrer Arbeit? - ________\n\n4. Was sind die größten Herausforderungen? - ________\n\n5. Wie sieht Ihr typischer Arbeitstag aus? - ________\n\n6. Welche Qualifikationen braucht man für diesen Beruf? - ________\n\n7. Was sind Ihre Ziele für die Zukunft? - ________\n\n8. Wie wichtig ist Work-Life-Balance für Sie? - ________\n\nAntworten:\nA) Ich arbeite als Projektmanager in einer IT-Firma.\nB) Ich bin seit fünf Jahren in diesem Bereich tätig.\nC) Die Abwechslung und die Zusammenarbeit mit verschiedenen Teams.\nD) Die ständigen Deadlines und der Zeitdruck.\nE) Ich beginne mit Teammeetings, plane Projekte und koordiniere die Arbeit.\nF) Man braucht ein Studium in Informatik und Erfahrung im Projektmanagement.\nG) Ich möchte in Zukunft ein eigenes Team leiten.\nH) Sehr wichtig. Ich achte darauf, dass ich genug Zeit für Familie und Hobbys habe.`,
      blanks: [
        { answer: "A" },
        { answer: "B" },
        { answer: "C" },
        { answer: "D" },
        { answer: "E" },
        { answer: "F" },
        { answer: "G" },
        { answer: "H" }
      ]
    }
  ],
  B2: [
    {
      id: 1,
      title: "Fragen und Antworten",
      instruction: "Ordnen Sie die Antworten den Fragen zu.",
      type: "fill_in_the_blanks",
      text: `a) Was brauchen Sie, um am Arbeitsplatz zufrieden zu sein? - ________\n\nb) Was steht für Sie bei der Berufswahl an erster Stelle? - ________\n\nc) Was sollten die Vorgesetzten am Arbeitsplatz vor allem schaffen? - ________\n\nd) Wann sind die Menschen heutzutage nicht glücklich? - ________\n\ne) Würden Sie gerne von zu Hause aus arbeiten? - ________\n\nf) Würden Sie sich selbstständig machen? - ________\n\ng) Warum erwarten Arbeitgeber immer Erfahrung? - ________\n\nh) Welches Ziel hat ein Praktikum? - ________\n\nAntworten:\n1) Wenn sie keine Arbeit haben, fühlen sie sich unsicher und das führt zur Depression.\n2) Nein, weil ich das anstrengend finde.\n3) Guten Kontakt mit meinen Kollegen und Kolleginnen, natürlich auch mit meinem Chef oder meiner Chefin.\n4) So können sie herausfinden, ob der Bewerber die notwendigen Qualifikationen erfüllt.\n5) Für mich ist es am wichtigsten, dass der Beruf mich weiterentwickeln kann.\n6) Man kann seine Kommunikationsfähigkeit erweitern.\n7) Da ich seit der Pandemie Homeoffice arbeite, habe ich mich daran gewöhnt.\n8) Sie sollten für ein angenehmes Arbeitsfeld sorgen.`,
      blanks: [
        { answer: "3" },
        { answer: "5" },
        { answer: "8" },
        { answer: "1" },
        { answer: "7" },
        { answer: "2" },
        { answer: "4" },
        { answer: "6" }
      ]
    },
    {
      id: 2,
      title: "Fragen und Antworten zum Thema Nachhaltigkeit",
      instruction: "Beantworten Sie die Fragen mit den passenden Antworten.",
      type: "fill_in_the_blanks",
      text: `1. Was verstehen Sie unter nachhaltiger Entwicklung? - ________\n\n2. Welche Rolle spielt der Einzelne beim Umweltschutz? - ________\n\n3. Wie können Unternehmen nachhaltiger werden? - ________\n\n4. Was sind die größten Herausforderungen beim Klimaschutz? - ________\n\n5. Wie wichtig ist Bildung für nachhaltige Entwicklung? - ________\n\n6. Welche Maßnahmen sind besonders effektiv? - ________\n\n7. Wie kann man Nachhaltigkeit im Alltag umsetzen? - ________\n\n8. Was sind die Vorteile einer nachhaltigen Lebensweise? - ________\n\nAntworten:\nA) Nachhaltige Entwicklung bedeutet, die Bedürfnisse der Gegenwart zu befriedigen, ohne die Möglichkeiten zukünftiger Generationen zu gefährden.\nB) Jeder Einzelne kann durch sein Konsumverhalten und seinen Lebensstil einen wichtigen Beitrag leisten.\nC) Unternehmen können durch umweltfreundliche Produktionsprozesse und soziale Verantwortung nachhaltiger werden.\nD) Die größten Herausforderungen sind die globale Koordination und die Umstellung der Wirtschaft.\nE) Bildung ist entscheidend, um das Bewusstsein für Nachhaltigkeit zu schärfen und Handlungskompetenz zu entwickeln.\nF) Besonders effektiv sind Maßnahmen zur Reduzierung des CO2-Ausstoßes und der Förderung erneuerbarer Energien.\nG) Im Alltag kann man durch bewussten Konsum, Mülltrennung und energiesparendes Verhalten nachhaltig leben.\nH) Eine nachhaltige Lebensweise schützt die Umwelt, spart Ressourcen und verbessert die Lebensqualität.`,
      blanks: [
        { answer: "A" },
        { answer: "B" },
        { answer: "C" },
        { answer: "D" },
        { answer: "E" },
        { answer: "F" },
        { answer: "G" },
        { answer: "H" }
      ]
    },
    {
      id: 3,
      title: "Fragen und Antworten zum Thema Studium",
      instruction: "Ordnen Sie die Antworten den Fragen zu.",
      type: "fill_in_the_blanks",
      text: `a) Welche Vorteile bringen Fremdsprachen mit sich? - ________\n\nb) Aus welchen Gründen wollen Studierende nach dem Studium ins Ausland gehen? - ________\n\nc) Was müssen Studierende während des Studiums machen? - ________\n\nd) Wie lange dauert ein Semester? - ________\n\ne) Was fällt Ihnen in dieser Grafik auf? - ________\n\nf) Was versteht man unter Studienkolleg? - ________\n\nAntworten:\nA) In dieser Grafik fällt mir auf, dass die Zahl der Studierenden, die im Ausland studieren wollen, gesunken ist.\nB) Studierende müssen während des Studiums auch ein Praktikum machen.\nC) Fremdsprachen bringen die Karriere und Entwicklung der kognitiven Fähigkeiten mit sich.\nD) Studierende wollen nach dem Studium ins Ausland gehen, weil sie denken, dass Auslandserfahrung ihnen ermöglicht, leichter einen Arbeitsplatz zu finden und weil sie ihre Fremdsprache erweitern können.\nE) Unter Studienkolleg versteht man eine Institution, die 1 Jahr lang auf das Studium sprachlich und fachlich vorbereitet.\nF) Ein Semester dauert ca. vier Monate.`,
      blanks: [
        { answer: "C" },
        { answer: "D" },
        { answer: "B" },
        { answer: "F" },
        { answer: "A" },
        { answer: "E" }
      ]
    }
  ]
};

function FrageAntwort() {
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
        Frage & Antwort
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
                      ? `${i + 1}. soru: Doğru!`
                      : `${i + 1}. soru: Yanlış. Doğru cevap: ${blank.answer}`}
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

export default FrageAntwort; 