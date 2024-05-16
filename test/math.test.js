const { sum, subtract, multiply, divide, factorial} = require('../src/math');

// test('sum adds two numbers wrong to show ERROR', () => {
//    expect(sum(1, 2)).toBe(4);
// });

// C0 - Basisabdeckung (Basic Coverage)
test('basic test', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
Die Basisabdeckung (C0 - Basic Coverage) stellt sicher, dass der Code mindestens einmal getestet wurde,
indem eine grundlegende Anweisung oder Funktion überprüft wird. In diesem Test wird die Funktion sum(1, 2)
aufgerufen und das erwartete Ergebnis (3) überprüft. Dies zeigt, dass die Funktion korrekt funktioniert und
der Test erfolgreich ist. Dies ist die grundlegendste Form der Testabdeckung, die einfach feststellt,
ob der Code überhaupt getestet wurde.
*/

// C1 - Anweisungsüberdeckung (Statement Coverage)
test('sum function', () => {
  expect(sum(3, 5)).toBe(8); // Anweisung 1
  expect(sum(-3, 5)).toBe(2); // Anweisung 2
});

/*
Die Anweisungsüberdeckung (C1 - Statement Coverage) stellt sicher, dass jede Anweisung im Code mindestens einmal
während der Testausführung ausgeführt wird. In diesem Test werden beide Anweisungen der Funktion `sum` überprüft,
indem verschiedene Eingabepaare getestet werden. Dies trägt dazu bei sicherzustellen, dass alle Anweisungen der
Funktion korrekt funktionieren.
*/

// C2 - Zweigüberdeckung (Branch Coverage)
test('subtract function', () => {
  expect(subtract(10, 4)).toBe(6); // true branch
  expect(subtract(4, 10)).toBe(-6); // false branch
});

/*
Die Zweigüberdeckung (C2 - Branch Coverage) überprüft alle Verzweigungen im Code, um sicherzustellen, dass jeder
Verzweigungspfad mindestens einmal durchlaufen wird. Hier wird die Funktion `subtract` getestet, um sicherzustellen,
dass sowohl der wahre (true) als auch der falsche (false) Verzweigungspfad korrekt funktionieren.
*/

// C3 - Pfadüberdeckung (Path Coverage)
test('factorial function', () => {
  expect(factorial(0)).toBe(1); // Base case
  expect(factorial(5)).toBe(120); // Positive integer
  expect(() => factorial(-1)).toThrow(); // Negative number (throws error)
});

/*
Die Pfadüberdeckung (C3 - Path Coverage) stellt sicher, dass alle möglichen Pfade im Code während der Testausführung
abgedeckt werden. Hier wird die Funktion `multiply` getestet, um sicherzustellen, dass verschiedene Pfade (Pfad 1 und
Pfad 2) korrekt funktionieren und die erwarteten Ergebnisse zurückgeben.
*/

// C4 - Bedingungsüberdeckung (Condition Coverage)
test('divide function', () => {
  expect(divide(10, 2)).toBe(5); // Normal case
  expect(() => divide(10, 0)).toThrow(); // Division by zero
});

/*
Die Bedingungsüberdeckung (C4 - Condition Coverage) überprüft, ob alle Bedingungen im Code mindestens einmal
während der Testausführung überprüft werden. Hier wird überprüft, ob das Ergebnis der Funktion `subtract` keine
NaN (Not-a-Number) ist, um sicherzustellen, dass bestimmte Bedingungen erfüllt sind.
*/

// C5 - Entscheidungsüberdeckung (Decision Coverage)
test('decision test', () => {
  expect(sum(1, 2)).toBe(3); // true decision
  expect(sum(0, 0)).toBe(0); // false decision
});

/*
Die Entscheidungsüberdeckung (C5 - Decision Coverage) stellt sicher, dass alle Entscheidungen (if-else-Statements)
im Code mindestens einmal während der Testausführung evaluiert werden. Hier werden verschiedene Entscheidungen
der Funktion `sum` überprüft, um sicherzustellen, dass sowohl der wahre (true) als auch der falsche (false)
Entscheidungspfad korrekt funktionieren.
*/

// C6 - Mehrfachbedingungsüberdeckung (Multiple Condition Coverage)
test('multiple conditions', () => {
  const result = subtract(5, 3);
  expect(result > 0 && result < 10).toBe(true);
});

/*
Die Mehrfachbedingungsüberdeckung (C6 - Multiple Condition Coverage) überprüft alle Kombinationen von Bedingungen,
um sicherzustellen, dass alle möglichen Pfade durchlaufen werden. Hier wird überprüft, ob das Ergebnis der Funktion
`subtract` größer als 0 und kleiner als 10 ist, um sicherzustellen, dass eine bestimmte Kombination von Bedingungen
erfüllt ist.
*/

// C7 - Zustandsüberdeckung (State Coverage) - Nicht direkt testbar in diesem Kontext

// C8 - Pfadbedingungsüberdeckung (Path Condition Coverage) - Nicht direkt testbar in diesem Kontext
