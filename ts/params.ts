// Zeliha Ece Sancaklı, 2024502135
type TaskInput = { title: string; status?: 'todo' | 'done' }
function createTask({ title, status = 'todo' }: TaskInput = { title: 'Untitled' }): { title: string; status: 'todo' | 'done' } { return { title, status } }
console.log('form 11:', createTask({ title: 'Read' }))
function formatPair([label, value]: [string, number]): string { return `${label}=${value}` }
console.log('form 11b:', formatPair(['page', 42]))
const scores: Record<string, number> = { Ada: 91, Bora: 87 }; for (const [student, score] of Object.entries(scores)) console.log('form 12 object:', student, score)
const queue = new Map<string, string>([['first', 'email'], ['second', 'backup']]); for (const [position, item] of queue) console.log('form 12 map:', position, item)
