import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default function () {
  // data
  const dogs = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_1976.jpg'])

  // method
  const getDog = async () => {
    try {
      const result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogs.push(result.data.message)
      console.log(result.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  // 钩子
  onMounted(() => {
    getDog().then((r) => {
      console.log(r)
    })
  })

  // 返回的数据
  return { dogs, getDog }
}
