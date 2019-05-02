#!/usr/bin/env node
const read = require('../lib');

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