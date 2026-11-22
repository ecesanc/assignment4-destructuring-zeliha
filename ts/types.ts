// Zeliha Ece Sancaklı, 2024502135
const point: { x: number; y: number } = { x: 1, y: 2 }; const { x: horizontal }: { x: number } = point; console.log('T1:', horizontal)
function labelAndCount(): [number, string] { return [3, 'chapters'] }; const [count, label] = labelAndCount(); const readonlyPair = ['ready', 2026] as const; const [state, year] = readonlyPair; console.log('T2:', count, label, state, year)
const items: string[] = []; const [first] = items; const safeFirst = first ?? 'no item'; console.log('T3:', safeFirst)
type Preferences = { nickname?: string }; const preferences: Preferences = {}; const { nickname: maybeNickname } = preferences; const { nickname = 'guest' } = preferences; console.log('T4:', maybeNickname ?? 'missing', nickname)
type RequiredCard = { title: string; pages: number }
// @ts-expect-error: Property 'pages' is missing in type '{ title: string; }'.
const incompleteCard: RequiredCard = { title: 'Notes' }
const completeCard: RequiredCard = { title: 'Notes', pages: 12 }; const { title: cardTitle, pages } = completeCard; console.log('T5:', cardTitle, pages, incompleteCard.title)
