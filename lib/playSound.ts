import { spawn } from 'child_process'

class SoundPlayer {
  playBeep(): void {
    const mpg123 = spawn('mpg123', ['path/to/beep.mp3'])

    mpg123.on('error', (err) => {
      console.error(`Error playing sound: ${err}`)
    })

    mpg123.on('exit', (code) => {
      if (code === 0) {
        console.log('Sound played successfully.')
      } else {
        console.error(`Error playing sound. Exit code: ${code}`)
      }
    })
  }
}

export default SoundPlayer
