// Zeliha Ece Sancaklı, 2024502135
const task = { id: 't1', title: 'Plan study session', status: 'todo' }
const { title, status } = task
console.log('form 5:', title, status)
const book = { title: 'The Left Hand of Darkness', year: 1969 }
const { title: heading } = book
console.log('form 6:', heading)
const settings = { theme: 'dark' }
const { density = 'comfortable' } = settings
console.log('form 7:', density)
const { id, ...taskDetails } = { id: 't7', title: 'Submit report', priority: 'high' }
console.log('form 8:', id, taskDetails)
const profile = { owner: { name: 'Mina' }, labels: ['urgent', 'school'] }
const { owner: { name: ownerName }, labels: [firstLabel] } = profile
console.log('form 9:', ownerName, firstLabel)
const selectedField = 'priority'; const record = { title: 'Read chapter', priority: 'high' }
const { [selectedField]: selectedValue } = record
console.log('form 10:', selectedField, selectedValue)
