// ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₒₓ
// ⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ

// http://www.avesta.org/yasna/index.html

import { readFileSync } from 'fs'
import { join } from 'path'

const map = '⁰¹²³⁴⁵⁶⁷⁸⁹'.split('').reduce((acc, i, j) => {
  acc[j] = i
  return acc
}, {})

/**
 * Replaces the sup with unicode, e.g., <sup>1</sup> => ¹
 * @param {string} s
 */
export const replaceSup = (s) => {
  return s.replace(/<sup>(\d+)<\/sup>/g, (m, d) => {
    const i = d.split('').map((dd) => {
      return map[dd]
    }).join('')
    return i
  })
}

/**
 * @param {string} h4
 */
export const replaceH4 = (h4) => {
  return h4.replace(/<h4>(.+?)<\/h4>/g, (m, d) => {
    return d.toUpperCase()
  })
}

/**
 * Read Zoroastrian Avesta API.
 * @param {_avesta.Config} [config] Options for the program.
 * @param {number} config.chapter The chapter to read.
 * @param {number} [config.paragraph] The paragraph to read.
 */
export default function avesta(config) {
  const {
    chapter,
    paragraph,
  } = config
  if (!chapter) throw new Error('Please specify the chapter.')
  let file
  try {
    file = readFileSync(join(__dirname, `../../yasnas/${chapter}.html`)).toString()
  } catch (err) {
    throw new Error(`Chapter ${chapter} does not exist.`)
  }
  file = replaceSup(file)
  file = replaceH4(file)
  return file
}

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_avesta.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _avesta.Config Options for the program.
 * @prop {number} chapter The chapter to read.
 * @prop {number} [paragraph] The paragraph to read.
 */
