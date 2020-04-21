import axios from 'axios'

export function fetchAddress(): Promise<{}> {
  return new Promise((resolve, reject) => {
    axios
      .get('../static/addresses.json')
      .then((res) => {
        return resolve(res)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}
