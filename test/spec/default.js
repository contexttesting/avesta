import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import avesta from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof avesta, 'function')
  },
  async 'calls package without error'() {
    await avesta()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await avesta({
      text,
    })
    ok(res, text)
  },
}

export default T