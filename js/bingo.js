var bullshitwords = new Array(
  'Klarer Sieg',
  'Regierungsauftrag',
  'R&uuml;ckenwind',
  'stabile Verh&auml;ltnisse',
  'eindeutiges Ergebnis',
  'W&auml;hlerauftrag',
  'W&auml;hlerwille',
  'Trendwende',
  'Wiedergeburt',
  'klar in F&uuml;hrung',
  'klar abgew&auml;hlt',
  'st&auml;rkste Kraft',
  'instabile B&uuml;ndnisse',
  'wackelig',
  'herausragendes Ergebnisse',
  'verantwortungsvolle Politik',
  'Menschen begeistern',
  'Mehrheitsbeschaffer',
  'Politik f&uuml;r die Menschen',
  'Politik aus einem Guss',
  'w&auml;hlt eine gro&szlig;e Koalition',
  'Personenwahlkampf',
  'auf Inhalte setzen',
  'K&ouml;nnten Sie sich vorstellen',
  '(k)ein &uuml;berraschendes Ergebnis',
  'in Ruhe analysieren',
  'ein Tag gro&szlig;er Freude',
  'das ist heute nicht der Tag',
  'bundespolitische Themen',
  'gro&szlig;artiger Sieg',
  'Endergebnis abwarten',
  'der Verantwortung stellen',
  'stabile Mehrheiten',
  'nichts besch&ouml;nigen',
  'was wir vor der Wahl gesagt haben',
  'zun&auml;chst mal',
  'eine bittere Niederlage',
  'den Ministerpr&auml;sidenten stellen',
  'eindeutiges Signal',
  'unser Ziel erreicht',
  'bei unseren W&auml;hlern bedanken',
  'die Quittung bekommen',
  'Politikwechsel',
  'mit allen Parteien Gespr&auml;che f&uuml;hren',
  'besseres Ergebnis gew&uuml;nscht',
  'historisch',
  'werden uns jetzt zusammensetzen',
  'Wahlkampfman&ouml;ver',
  'keine Bundestagswahl',
  'Auftrag zur Regierungsbildung',
  'ein deutliches Zeichen'
);

function getIntBetween(from, to) {
  return Math.round(Math.exp(Math.random() * Math.log(to - from + 1))) + from - 1;
}

function getRandomWords(i) {
  var tempwords = bullshitwords.slice(0);
  var randomwords = new Array();
  
  for (; i > 0; --i) {
    var pos = getIntBetween(0, tempwords.length - 1);
    
    randomwords.push(tempwords[pos]);
    tempwords.splice(pos, 1);
  }
  
  return randomwords;
}

function fillTable() {
  var randomwords = getRandomWords (25);
  
  $('#bingotable td').each(function(index, element) {
    element.innerHTML = randomwords[index];
  })
}

window.onload = function () {
  fillTable();
}
