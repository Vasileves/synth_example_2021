import * as Tone from 'tone'

const samples = [
  'samples/yex.mp3',
  'samples/yex2.mp3',
  'samples/yey.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
  'samples/yex.mp3',
]

function createBuffer(path) {
  const sample = new Tone.Buffer(path, () => {
    const buff = sample.get()
  })

  return sample
}

function loadSamples() {
  const loadedSamples = []

  samples.forEach((path, i) => {
    const loadedSample = createBuffer(path)
    loadedSamples.push(loadedSample)
  })

  return loadedSamples
}

export { loadSamples }
