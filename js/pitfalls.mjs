// Zeliha Ece Sancaklı, 2024502135
try { const { a } = undefined; console.log(a) } catch (error) { console.log('pitfall 1:', error.constructor.name) }
const { value: fromUndefined = 'fallback' } = { value: undefined }
const { value: fromNull = 'fallback' } = { value: null }
console.log('pitfall 2:', fromUndefined, fromNull)
let assignedTitle = 'old'; const source = { a: 'new' }
;({ a: assignedTitle } = source)
console.log('pitfall 3:', assignedTitle)
const nested = { meta: { done: false } }; const { meta } = nested; meta.done = true
console.log('pitfall 4:', nested.meta.done)
const ordered = ['first', 'second']; const [, second] = ordered
const { second: namedSecond } = { second: 'second' }
console.log('pitfall 5:', second, namedSecond)
