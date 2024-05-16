# JS mit Pre-Commit-Hooks/Testabdeckung

Dieses Projekt dient als Beispiel für die Integration von Pre-Commit-Hooks mit Git und die Verwendung von Jest für Tests und Testabdeckung in einem JavaScript-Projekt.

## Abhängigkeiten

Um dieses Projekt lokal auszuführen, benötigst du die folgenden Tools:

- [Git](https://git-scm.com/): Versionierungstool für den Quellcode
- [Node.js](https://nodejs.org/): Laufzeitumgebung für JavaScript

Stelle sicher, dass Git und Node.js auf deinem System installiert sind, bevor du fortfährst.

## Installation
Um das Projekt herunterzuladen und alle Abhängigkeiten zu installieren, befolge diese Schritte:

1. Öffne dein Terminal oder eine Befehlszeile.

2. Navigiere zum Zielverzeichnis, in dem du das Projekt speichern möchtest:
   ```bash
   cd Pfade/zum/Zielverzeichnis
   git clone https://github.com/Ben-jaz/js-pre-commit-git.git
   cd js-pre-commit-git
   npm install
   ```

## Verwendung
Nach der Installation der Abhängigkeiten kannst du das Projekt lokal ausführen, Tests durchführen und die darin enthaltenen Funktionen verwenden.

### Ausführen von Tests
Um die Tests auszuführen, verwende den folgenden Befehl:

```bash
npm test
```
### Testabdeckung überprüfen
Um die Testabdeckung zu überprüfen und einen Bericht zu generieren, führe den folgenden Befehl aus:

```bash
npm run test:coverage
```

Nachdem diese gelaufen ist erhältes du eine html übersicht unter: `./coverage/lcov-report/index.html`

Du kannst einen fehlerhaften Test in test/math.test.js auskommentieren, um einen fehlerhaften Test für `$ git commit` oder `$ npm run test` zu erhalten.

## Wie dieses Project erstellt wurde
-  **Schritt 1:** Projektstruktur einrichten

   -1. **Erstelle ein neues Verzeichnis für dein Projekt**:
   ```bash
   mkdir js-pre-commit-example
   cd js-pre-commit-example
   ```

   -2. **Initialisiere ein neues Git-Repository**:
   ```bash
   git init
   ```
   - Git ist ein verteiltes Versionskontrollsystem, das zur Verfolgung von Änderungen in Dateien verwendet wird.

   -3. **Initialisiere ein neues Node.js-Projekt**:
   ```bash
   npm init -y
   ```
   - npm (Node Package Manager) ist ein Paketmanager für JavaScript, der es ermöglicht, Bibliotheken und Frameworks einfach zu installieren und zu verwalten.

- **Schritt 2:** Abhängigkeiten installieren

   -1. **Installiere Husky für die Pre-Commit-Hooks**:
   ```bash
   npm install husky --save-dev
   ```
   - Husky ist ein Tool, das Git-Hooks einfach verwaltbar macht. Es wird verwendet, um Skripte wie Pre-Commit-Hooks zu definieren, die vor bestimmten Git-Aktionen ausgeführt werden.

   -2. **Installiere Jest für das Testen und die Testabdeckung**:
   ```bash
   npm install jest --save-dev
   ```
   - Jest ist ein JavaScript-Testing-Framework, das einfaches Setup und umfassende Testabdeckungsberichte bietet.

- **Schritt 3:** Projektkonfiguration

   -1. **Konfiguriere Jest in `package.json`**:
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:coverage": "jest --coverage"
     }
   }
   ```
   - Diese Konfiguration fügt npm-Skripte hinzu, um Tests auszuführen und Testabdeckungsberichte zu generieren.

   -2. **Husky einrichten und Pre-Commit-Hook hinzufügen**:
   ```bash
   npx husky-init && npm install
   npx husky add .husky/pre-commit "npm run test:coverage"
   ```
   - npx ist ein Befehl, der mit npm geliefert wird und dazu dient, Node-Befehle auszuführen, ohne sie global zu installieren.
   - Der Pre-Commit-Hook wird eingerichtet, um die Tests automatisch auszuführen, bevor ein Commit gemacht wird.

- **Schritt 4:** Beispielcode und Tests erstellen

   -1. **Erstelle eine Beispiel-JavaScript-Datei (`sum.js`)**:
   ```js
   function sum(a, b) {
     return a + b;
   }
   module.exports = sum;
   ```

   - Dies ist eine einfache Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt.

   -2. **Erstelle eine zugehörige Testdatei (`sum.test.js`)**:
   ```js
   const sum = require('./sum');
   test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
   });
   ```

   - Dies ist ein einfacher Testfall, der überprüft, ob die sum-Funktion korrekt arbeitet.

   -3. **Erstelle eine `.gitignore`-Datei**:
   ```txt
   node_modules
   coverage
   ```
   - Die .gitignore-Datei sagt Git, welche Dateien oder Verzeichnisse es ignorieren soll. Hier ignorieren wir node_modules und coverage, da sie generiert werden und nicht im Repository sein müssen.

- **Schritt 5:** Tests und Pre-Commit-Hooks ausprobieren

   -1. **Führe die Tests manuell aus, um sicherzustellen, dass sie funktionieren**:
   ```bash
   npm test
   ```
   - Dieser Befehl führt die in Jest konfigurierten Tests aus.

   -2. **Führe einen Commit durch, um den Pre-Commit-Hook zu testen**:
   ```bash
   git add .
   git commit -m "Add sum function and test"
   ```
   - Diese Befehle fügen die Änderungen zur Staging-Area hinzu und erstellen einen Commit. Der Pre-Commit-Hook stellt sicher, dass die Tests bestanden werden, bevor der Commit abgeschlossen wird.

   Wenn die Tests erfolgreich sind, wird der Commit abgeschlossen. Falls die Tests fehlschlagen, wird der Commit blockiert.

- **Schritt 6:** Testabdeckung überprüfen

   -1. **Führe den Testbefehl mit der Testabdeckungsoption aus**:
   ```bash
   npm run test:coverage
   ```
   - Dieser Befehl führt die Tests aus und generiert einen Bericht über die Testabdeckung.

   Dadurch wird ein Bericht über die Testabdeckung generiert, den du im `coverage`-Verzeichnis finden kannst.

## Lizenz
© 2024 Ben-jaz. Veröffentlicht unter der GNU General Public License Version 3.0 (GPL-3.0). 

### Externe Abhängigkeiten
Dieses Projekt verwendet folgende externe Abhängigkeiten:

- **Husky**: Einfache Git Hooks. Lizenziert unter der MIT-Lizenz.
- **Jest**: JavaScript-Testframework. Lizenziert unter der MIT-Lizenz.

Weitere Informationen zu den Lizenzen der externen Abhängigkeiten findest du in der `LICENSE-INFO.md` Datei.
