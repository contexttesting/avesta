/* alanode example/ */
import avesta from '../src'

(async () => {
  const res = await avesta({
    text: 'example',
  })
  console.log(res)
})()