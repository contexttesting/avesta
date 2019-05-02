import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import avesta from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await avesta({
      text: this.input,
    })
    return res
  },
  context: Context,
})