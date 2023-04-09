import type { NextPage } from 'next'
import { useState } from 'react'
import QrReader from '../components/QrReader'
import SoundPlayer from '../lib/playSound'

const soundPlayer = new SoundPlayer()

const Home: NextPage = () => {
  // 読み込んだ QR コードのテキスト情報を格納
  const [result, setResult] = useState<string>('')
  // useEffect(() => {
  //   const postData = async () => {
  //     await fetch('https://', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: `${JSON.stringify(result)}`,
  //     })
  //       .then(() => {
  //         // 成功時
  //         soundPlayer.playBeep()
  //       })
  //       .catch(() => {
  //         // 失敗時（入館許可がない場合）
  //         soundPlayer.playBeep()
  //         soundPlayer.playBeep()
  //       })
  //   }
  //   postData()
  // }, [result])
  return (
    <div>
      <QrReader setResult={setResult} onRequestClose={() => null} />
      <p>{result}</p>
    </div>
  )
}

export default Home
