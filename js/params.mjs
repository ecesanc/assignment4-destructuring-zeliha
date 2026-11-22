// Zeliha Ece Sancaklı, 2024502135
function createTask({ title, status = 'todo' } = {}) { return { title, status } }
console.log('form 11:', createTask({ title: 'Read' }))
const formatPair = ([label, value]) => `${label}=${value}`
console.log('form 11b:', formatPair(['page', 42]))
const scores = { Ada: 91, Bora: 87 }
for (const [student, score] of Object.entries(scores)) console.log('form 12 object:', student, score)
const queue = new Map([['first', 'email'], ['second', 'backup']])
for (const [position, item] of queue) console.log('form 12 map:', position, item)
