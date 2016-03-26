# metriques.js
A small Javascript module to get meter informations from french words

## Functions

### Syllabes

**Fonction pour compter le nombre de syllabes d'un mot donné**  
Renvoie les syllabes, leur nombre et le maximum possible.

### Elision

**Fonction pour appliquer les règles d'élision à un tableau de mots**  
Renvoie le nombre de syllabes et un maximum possible pour la suite de mots donnée.

### Metrique

**Fonction pour compter le nombre de syllabes des vers d'un poème**  
Renvoie les vers, les mots de chaque vers et la métrique de chaque vers avec un maximum possible.
  
## Usage

```javascript

var metr = require('metriques');

var syllabes = metr.syllabes("énergumène");

var poem = "Je suis mon cher ami très heureux de te voir \
Heureux qui comme Ulysse a fait un beau voyage";

var metrique = metr.metrique(poem);

```

## Test

Run `npm test` to launch the tests
