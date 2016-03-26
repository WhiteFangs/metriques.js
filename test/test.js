var test = require('tape');
var metriques = require('../metriques');

test('syllabes should cut "énergumène" word correctly to 5 syllables', function (t) {
    var result = metriques.syllabes('énergumène');
    t.deepEqual(result.syllabes, ['é', 'ner', 'gu', 'mè', 'ne']);
    t.equal(result.nb, 5);
    t.equal(result.max, 5);
    t.end();
});

test('metriques should cut text to verses and then to words and fine correct meter', function (t) {
    var result = metriques.metrique("Je suis mon cher ami très heureux de te voir <br> Heureux qui comme Ulysse a fait un beau voyage");
    t.deepEqual(result.vers, ['Je suis mon cher ami très heureux de te voir ', ' Heureux qui comme Ulysse a fait un beau voyage']);
    t.deepEqual(result.mots, [['Je', 'suis', 'mon', 'cher', 'ami', 'très', 'heureux', 'de', 'te', 'voir'], ['Heureux', 'qui', 'comme', 'Ulysse', 'a', 'fait', 'un', 'beau', 'voyage']]);
    t.deepEqual(result.nbsyllabes, [{ nb: 12, max: 13 }, { nb: 12, max: 13 }]);
    t.end();
});