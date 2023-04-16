import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import QrReader from '../components/QrReader'

const Home: NextPage = () => {
  // 読み込んだ QR コードのテキスト情報を格納
  const [result, setResult] = useState<string>('')
  const [allowedSound, setAllowedSound] = useState<HTMLAudioElement | null>(null)
  const [deniedSound, setDeniedSound] = useState<HTMLAudioElement | null>(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAllowedSound(new Audio('/success.mp3'))
      setDeniedSound(new Audio('/fail.mp3'))
    }
  }, [])
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
  //         if (allowedSound) {
  //           allowedSound.play()
  //         }
  //       })
  //       .catch(() => {
  //         // 失敗時（入館許可がない場合）
  //         if (deniedSound) {
  //           deniedSound.play()
  //         }
  //       })
  //   }
  //   if (result !== '') {
  //     postData()
  //   }
  // }, [result, allowedSound, deniedSound])
  return (
    <div>
      <QrReader setResult={setResult} onRequestClose={() => null} />
      <p>{result}</p>
    </div>
  )
}

export default Home
