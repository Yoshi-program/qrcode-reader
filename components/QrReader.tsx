import { useZxing } from 'react-zxing'

type Props = {
  setResult: React.Dispatch<React.SetStateAction<string>>
  onRequestClose: () => void
}

const QrReader = ({ setResult, onRequestClose }: Props) => {
  // const deviceId = 'Camera DevideId'
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText())
      onRequestClose()
    },
    // deviceId: deviceId,
  })

  return <video ref={ref} />
}

export default QrReader
