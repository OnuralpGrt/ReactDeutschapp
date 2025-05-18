import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Alert } from '@mui/material';

const exercises = {
  A1: [
    {
      id: 1,
      title: "W-Fragen und Antworten",
      instruction: "Ergänzen Sie die Tabelle mit den passenden W-Fragen und Antworten.",
      type: "fill_in_the_blanks",
      text: `1. ________ ________ Franz? - In Istanbul.\n2. ________ ________ Franz? - Aus Frankreich.\n3. ________ ________ spricht er? - Französisch, Englisch und Deutsch.\n4. ________ ________ Franz gerade? - Gerade Türkisch.\n5. ________ ________ er in seiner Freizeit? - Er spielt Gitarre und liest gerne Bücher.\n6. ________ ________ Franz in Istanbul? - Er arbeitet an einer Privatschule.\n7. ________ ________ er von Beruf? - Er ist Deutsch und Englischlehrer.\n8. ________ ________ arbeitet er in Istanbul? - Seit zwei Jahren.\n9. ________ er ________ in Istanbul? - Ja, er ist glücklich.\n10. ________ er ________? - Nein, er ist ledig.\n11. ________ ________ sie beruflich? - Sie arbeitet als Lehrerin.`,
      blanks: [
        { answer: "Wo" },
        { answer: "wohnt" },
        { answer: "Woher" },
        { answer: "kommt" },
        { answer: "Welche Sprachen" },
        { answer: "spricht" },
        { answer: "Was" },
        { answer: "lernt" },
        { answer: "Was" },
        { answer: "macht" },
        { answer: "Wo" },
        { answer: "arbeitet" },
        { answer: "Was" },
        { answer: "ist" },
        { answer: "Seit wann" },
        { answer: "arbeitet" },
        { answer: "Ist" },
        { answer: "glücklich" },
        { answer: "Ist" },
        { answer: "verheiratet" },
        { answer: "Was" },
        { answer: "macht" }
      ]
    },
    {
      id: 2,
      title: "Was passt?",
      instruction: "Ordnen Sie zu. Was passt?",
      type: "fill_in_the_blanks",
      text: `1. Was möchten Sie? - ________\n2. Wo ist das Snack-Regal im Supermarkt? - ________\n3. Wie möchten Sie zahlen? - ________\n4. Brauchen Sie die Quittung? - ________\n5. Was kosten die Orangen? - ________\n6. Gibt es Sonderangebot? - ________\n\nMöglichkeiten:\na) Mit der Kreditkarte.\nb) 2,60 Euro.\nc) Nein, leider noch nicht.\nd) 500 gr Emmantaler, bitte.\ne) Gehen Sie bitte geradeaus, dann links.\nf) Nein, danke.`,
      blanks: [
        { answer: "d" },
        { answer: "e" },
        { answer: "a" },
        { answer: "f" },
        { answer: "b" },
        { answer: "c" }
      ]
    }
  ],
  A2: [
    {
      id: 1,
      title: "Adjektive",
      instruction: "Finden Sie die ähnlichen Begriffe für die Adjektive.",
      type: "fill_in_the_blanks",
      text: `groß - ________\nklein - ________\nschön - ________\nschnell - ________\nlangsam - ________\ntraurig - ________\nglücklich - ________\n\nWörter zur Auswahl:\nunglücklich\nkompliziert\nleicht\nwinzig\nriesig\nhübsch\nfroh\neinfach\nflink\nschwer\ngemächlich`,
      blanks: [
        { answer: "riesig" },
        { answer: "winzig" },
        { answer: "hübsch" },
        { answer: "flink" },
        { answer: "gemächlich" },
        { answer: "unglücklich" },
        { answer: "froh" }
      ]
    },
    {
      id: 2,
      title: "Was passt?",
      instruction: "Ordnen Sie zu. Was passt?",
      type: "fill_in_the_blanks",
      text: `1. Hätten Sie gerne noch ein Stück? - ________\n2. Wie würden Sie lieber zahlen? - ________\n3. Wann gibt es wieder Sonderangebote bei Amazon? - ________\n4. Wo kaufen Sie am liebsten ein? - ________\n5. Wer zu Hause geht am meisten einkaufen? - ________\n6. Wo kann ich die Milchprodukte finden? - ________\n\nMöglichkeiten:\na) Auf dem Markt.\nb) Leider habe ich darüber keine Information.\nc) Ich denke, meine Mutter.\nd) Lieber Bar.\ne) In der Tiefkühltruhe.\nf) Ja, gerne.`,
      blanks: [
        { answer: "f" },
        { answer: "d" },
        { answer: "b" },
        { answer: "a" },
        { answer: "c" },
        { answer: "e" }
      ]
    }
  ],
  B1: [
    {
      id: 1,
      title: "Erfahrungsbericht: Sprachenlernen",
      instruction: "Lesen Sie den Text und bringen Sie die Satzhälften zusammen.",
      type: "fill_in_the_blanks",
      text: `1. Tobias war Sprachenlernen immer wichtig, ________\n2. Spanisch hat er gelernt, ________\n3. Der Spanischkurs war gut, ________\n4. Kleine Notizen im Alltag zu machen, ________\n5. Ohne Geduld und Übung ist es schwer, ________\n\nMöglichkeiten:\na) weil er dort die Sprache direkt mit Muttersprachlern anwenden konnte.\nb) eine neue Sprache zu lernen.\nc) weil er in einer internationalen Firma arbeiten wollte.\nd) ist ratsam zum Wörterlernen.\ne) weil er auch Kunden aus Spanien betreuen wollte.`,
      blanks: [
        { answer: "c" },
        { answer: "e" },
        { answer: "a" },
        { answer: "d" },
        { answer: "b" }
      ]
    },
    {
      id: 2,
      title: "Was passt?",
      instruction: "Ordnen Sie zu. Was passt?",
      type: "fill_in_the_blanks",
      text: `1. Hat es Ihnen geschmeckt? - ________\n2. Darf es noch etwas sein? - ________\n3. Wo kaufen Sie am häufigsten? - ________\n4. Wissen Sie, wo man Tshirts am günstigsten kaufen kann? - ________\n5. Wäre es vorteilhaft, wenn man Bar zahlen würde? - ________\n6. Ist es bequem, etwas von zu Hause zu bestellen? - ________\n\nMöglichkeiten:\na) Ich denke schon.\nb) Ich empfehle Ihnen, mal bei Amazon nachzuschauen.\nc) Ja, auf jeden Fall.\nd) Ja, der Kuchen war sehr lecker.\ne) Nein, danke, das wäre alles.\nf) Im Internet.`,
      blanks: [
        { answer: "d" },
        { answer: "e" },
        { answer: "f" },
        { answer: "b" },
        { answer: "a" },
        { answer: "c" }
      ]
    }
  ],
  B2: [
    {
      id: 1,
      title: "Redemittel zuordnen",
      instruction: "Ergänzen Sie die Sätze mit den passenden Redemitteln und ordnen Sie die Satzteile zu.",
      type: "fill_in_the_blanks",
      text: `1. Die USA hat die höchste Zahl an internationalen Studierenden.\na. ____________________________\n,dass die Deutschen Tierliebhaber sind.\n2. Die meisten Studierenden in Deutschland wohnen in Berlin.\nb. _____________________________\n, dass diese Situation nicht die Erwachsenen ,sondern die jüngeren Personen betrifft.\n3. Mediale Aktivitäten sind die beliebtesten Aktivitäten in Deutschland.\nc. ____________________________\n, dass die Menschen trotz der schwankenden wirtschaftlichen Lage die zukünftige Umwelt in Acht nehmen.\n4. Luxemburg ist das Land mit dem größten Anteil an geschützten Landflächen in der EU.\nd. ____________________________\n, dass Englisch die meistgesprochene Weltsprache ist.\n5. Es gibt in Deutschland 34,5 Millionen Haustiere.\ne. ____________________________\n, weil die Digitalisierung weit verbreitet ist.\n6. 32 % der Deutschen besitzen einen Golden Retriever.\nf. _______________________________\n,dass Deutschland weniger unter Naturschutz steht.\n7.Die meisten Wohnungslosen in Deutschland sind Jugendliche, die bis 24 Jahre alt sind.\ng. _________________________________\nist diese Aussage irreführend , weil es auch andere bedeutende Standorte für Studierende gibt.\n8. Etwa 32 % der Befragten würden für einen nachhaltigen Artikel mehr bezahlen als für einen Standartartikel.\nh. ________________________________\ndie beliebteste Hunderasse in Deutschland.\n\nRedemittel zur Auswahl:\nEs ist auffallend\nIch finde es interessant\nZusammenfassend kann man sagen\nDas verwundert mich nicht\nEs ist überraschend\nDie Grafik gibt einen Überblick über\nMeiner Meinung nach\nDer Grund dafür ist`,
      blanks: [
        { answer: "Zusammenfassend kann man sagen" },
        { answer: "Es ist überraschend" },
        { answer: "Ich finde es interessant" },
        { answer: "Der Grund dafür ist" },
        { answer: "Das verwundert mich nicht" },
        { answer: "Es ist auffallend" },
        { answer: "Meiner Meinung nach" },
        { answer: "Die Grafik gibt einen Überblick über" }
      ]
    },
    {
      id: 2,
      title: "Partizip 2",
      instruction: "Ergänzen Sie die Sätze mit den passenden Partizip 2 Formen der Verben.",
      type: "fill_in_the_blanks",
      text: `Die Daten im Computer wurden von der Polizei ________.\nAls man den Verdächtigen nach dem Grund des Attentats gefragt hat, hat er eine ganze Weile ________.\nDer Zeuge hat auf die Richtigkeit seiner Aussage ________.\nDer Richter hat sich an den Gerichtshof ________.\nIn der Sendung wurde über die Konsequenzen der neuen Schulregeln ________.\nDie wissenschaftliche Arbeit hat der Professor ________.\n________ Lebensmittel können für die Gesundheit der Verbraucher schädlich sein.\nWelcher Müll soll als Sondermüll ________ werden?\nNachdem der Müll ________ worden ist, brachte man ihn auf die Abfalldeponie, damit der Müll dort ________ wird.\nKann man das ________ Eis wieder einfrieren?\n\nVerben zur Auswahl:\nwenden\nbestehen\ndeponieren\nschweigen\nentsorgen\nschmelzen\nverfassen\ndiskutieren\nabholen\nverarbeiten\nuntersuchen`,
      blanks: [
        { answer: "untersucht" },
        { answer: "geschwiegen" },
        { answer: "bestanden" },
        { answer: "gewandt" },
        { answer: "diskutiert" },
        { answer: "verfasst" },
        { answer: "verarbeitete" },
        { answer: "entsorgt" },
        { answer: "abgeholt" },
        { answer: "deponiert" },
        { answer: "geschmolzene" }
      ]
    }
  ]
};

function Zuordnung() {
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
        Zuordnung
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
        ) : null}
      </Paper>
    </Container>
  );
}

export default Zuordnung; 