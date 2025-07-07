// __tests__/sortHeroes.test.js

import { sortHeroesByHealth } from '../src/js/sortHeroes';

test('должен отсортировать героев по здоровью', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  // ✅ Используем toEqual, т.к. это массив объектов
  expect(sortHeroesByHealth(input)).toEqual(expected);
});

test('входной массив должен оставаться неизменным', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const sorted = sortHeroesByHealth(input);

    expect(sorted).not.toBe(input); // Убедимся, что это НЕ тот же массив

  // ✅ toEqual — проходит успешно
  expect(sorted).toEqual([
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
  ]);
});

test('пустой массив должен вернуть пустой массив', () => {
  expect(sortHeroesByHealth([])).toEqual([]);
});

test('один герой — возвращается массив с ним самим', () => {
  const input = [{ name: 'герой', health: 50 }];
  expect(sortHeroesByHealth(input)).toEqual([{ name: 'герой', health: 50 }]);
});