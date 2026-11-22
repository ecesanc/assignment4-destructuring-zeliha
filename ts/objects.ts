// Zeliha Ece Sancaklı, 2024502135
type Task = { id: string; title: string; status: 'todo' | 'in-progress' | 'done' }
const task: Task = { id: 't1', title: 'Plan study session', status: 'todo' }; const { title, status } = task
console.log('form 5:', title, status)
const book: { title: string; year: number } = { title: 'The Left Hand of Darkness', year: 1969 }; const { title: heading }: { title: string } = book
console.log('form 6:', heading)
const settings: { theme: string; density?: string } = { theme: 'dark' }; const { density = 'comfortable' } = settings
console.log('form 7:', density)
const taskDetailsSource: { id: string; title: string; priority: string } = { id: 't7', title: 'Submit report', priority: 'high' }; const { id, ...taskDetails } = taskDetailsSource
console.log('form 8:', id, taskDetails)
const profile: { owner: { name: string }; labels: string[] } = { owner: { name: 'Mina' }, labels: ['urgent', 'school'] }; const { owner: { name: ownerName }, labels: [firstLabel] } = profile
console.log('form 9:', ownerName, firstLabel)
const selectedField: 'title' | 'priority' = 'priority'; const record: Record<'title' | 'priority', string> = { title: 'Read chapter', priority: 'high' }; const { [selectedField]: selectedValue } = record
console.log('form 10:', selectedField, selectedValue)
