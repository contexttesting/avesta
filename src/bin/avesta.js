#!/usr/bin/env node
import read from '../lib'

const [,,chapter] = process.argv

try {
  const res = read({
    chapter,
  })
  console.log(res)
} catch (err) {
  if (process.env['DEBUG']) console.log(err.stack)
  else console.log(err.message)
}