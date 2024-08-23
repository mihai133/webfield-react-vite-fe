import { useState } from 'react'
import useFetch from '../../api/fetch'

const Home = () => {
  const [count, setCount] = useState(0)
  const {data} = useFetch('home')

  return (
    <>
      
      <h1 className='text-lg'>{data?.res}</h1>
      <div className="card border-0">
        <button className='text-white bg-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
  </>
  )
}

export default Home