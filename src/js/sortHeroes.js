// src/js/sortHeroes.js

/**
 * Сортирует массив героев по уровню здоровья в убывающем порядке.
 * @param {Array} heroes - Массив героев с полями name и health.
 * @returns {Array} Отсортированный массив.
 */
export function sortHeroesByHealth(heroes) {
  return [...heroes].sort((a, b) => b.health - a.health);
}