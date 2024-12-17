function filterArray(numbers, value) {
    // Створюємо порожній масив для підходящих чисел
    const result = [];
    
    // Ітерація через кожен елемент масиву
    for (let i = 0; i < numbers.length; i++) {
        // Якщо число більше за value, додаємо його до результату
        if (numbers[i] > value) {
            result.push(numbers[i]);
        }
    }
    
    // Повертаємо новий масив з числами, більшими за value
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]