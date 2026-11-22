// Zeliha Ece Sancaklı, 2024502135
function minMax(numbers) { return [Math.min(...numbers), Math.max(...numbers)] }
const [lowest, highest] = minMax([14, 3, 27])
console.log('form 1:', lowest, highest)
const playlist = ['intro', 'Midnight City', 'Afterglow', 'Northern Lights', 'Finale']
const [, secondSong, ...remainingSongs] = playlist
console.log('form 2:', secondSong, remainingSongs)
let currentPage = 3; let lastPage = 8
;[currentPage, lastPage] = [lastPage, currentPage]
console.log('form 3:', currentPage, lastPage)
const [firstTag = 'untagged', secondTag = 'general'] = ['study']
console.log('form 4:', firstTag, secondTag)
