function inverseSlice(items, a, b) {
    return [...items.slice(0, a), ...items.slice(b)];
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4))
console.log(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13))
