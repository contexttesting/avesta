import { readFileSync, writeFileSync } from 'fs'

const table = `${readFileSync('table.html')}`

const chapters = table.split(/(- CHAPTER \d+)/).filter(a => a.trim())

chapters.reduce((acc, current) => {
  if (/(- CHAPTER \d+)/.test(current)) {
    current.replace(/CHAPTER (\d+)/, (m, d) => {
      acc = d
    })
    return acc
  }
  writeFileSync(`yasnas/${acc}.html`, current.trim())
  return acc
}, 'null')