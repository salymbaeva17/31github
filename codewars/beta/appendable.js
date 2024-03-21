const solution = {
    empty: { total: 0, best_prefix: 0, best_suffix: 0, ans: 0 },

    singleton: (a) => ({
        total: a,
        best_prefix: Math.max(a, 0),
        best_suffix: Math.max(a, 0),
        ans: Math.max(a, 0)
    }),

    // Get a representation of arr
    get: (arr) => arr.reduce(
        (val, a) => solution.append(val, solution.singleton(a)),
        solution.empty
    ),

    // Given representations of arr1 and arr2, return the representation of (arr1 ++ arr2)
    append: (repr1, repr2) => ({
        total: repr1.total + repr2.total,
        best_prefix: Math.max(repr1.best_prefix, repr1.total + repr2.best_prefix),
        best_suffix: Math.max(repr2.best_suffix, repr2.total + repr1.best_suffix),
        ans: Math.max(Math.max(repr1.ans, repr2.ans), repr1.best_suffix + repr2.best_prefix)
    }),

    // Given a representation of arr, return the maximum subarray sum of arr
    toAnswer: (repr) => repr.ans,
}
const example = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const repr = solution.get(example)
const result = solution.toAnswer(repr)
console.log(result)
