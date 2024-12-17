function slugify(title) {
    return title
        .toLowerCase()               // Перетворює всі символи в нижній регістр
        .trim()                      // Видаляє зайві пробіли на початку і в кінці рядка
        .replace(/\s+/g, '-')        // Заміна всіх пробілів на тире
        .replace(/[^a-z0-9-]/g, '')  // Видаляє всі символи, які не є літерами, цифрами або тире
        .replace(/--+/g, '-');       // Видаляє зайві тире
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"