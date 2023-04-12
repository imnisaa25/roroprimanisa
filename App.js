import React, {useState} from 'react'
const App = () => {
  const [Ukuran, setUkuran] = useState ('lowerCase')
  
  const ubahUkuran= ()=> {
    setUkuran('upperCase');
  }
  return (
    <>
      <h1 style={{textTransform : Ukuran}}>Roro Primanisaa</h1>
      <button onClick= {ubahUkuran} >ubah ukuran</button>

    </>
  )
}

export default App
