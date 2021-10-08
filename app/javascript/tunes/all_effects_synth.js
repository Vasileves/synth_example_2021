import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: 0.8,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0,
    attackCurve: 'exponential',
    decay: 0,
    decayCurve: 'exponential',
    sustain: 1,
    release: 0,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'fatsawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const autoFilterSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1,
  baseFrequency: 200,
  octaves: 2.6,
  filter: {
    type: 'lowpass',
    frequency: 100,
    rolloff: -12,
    Q: 1
  }
}

const autoPannerSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1
}

const autoWahSettings = {
  wet: 0,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

// const bitCrusherSettings = {
//   wet: 0,
//   bits: 4
// }

const chebyshevSettings = {
  wet: 0,
  order: 50,
  oversample: 'none'
}

const chorusSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const distortionSettings = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const feedbackDelaySettings = {
  wet: 0,
  delayTime: 0.8,
  maxDelay: 0.8
}

const freeverbSettings = {
  wet: 0.9,
  roomSize: 0.08,
  dampening: 40
}

const frequencyShifterSettings = {
  wet: 0,
  frequency: 42
}

const jcReverbSettings = {
  wet: 0,
  roomSize: 0.5
}

// const midSideSettings = {
//   wet: 0
// }

const phaserSettings = {
  wet: 0,
  frequency: 0.5,
  octaves: 3,
  stages: 10,
  Q: 10,
  baseFrequency: 350
}

const pingPongDelaySettings = {
  wet: 0,
  delayTime: 0.25,
  maxDelayTime: 1
}

const pitchShiftSettings = {
  wet: 0,
  pitch: 0,
  windowSize: 0.1,
  delayTime: 0,
  feedback: 0
}

const reverbSettings = {
  wet: 0,
  decay: 1.5,
  preDelay: 0.01
}

const stereoWidenerSettings = {
  wet: 0,
  width: 0.5
}

const tremoloSettings = {
  wet: 0,
  frequency: 10,
  type: 'sine',
  depth: 0.5,
  spread: 180
}

const vibratoSettings = {
  wet: 0,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.1,
  type: 'sine'
}

const channelSettings = {
  volume: -6,
  pan: 0,
  mute: false,
  solo: false
}

const synthNode = new Tone.Synth(synthSettings)
// const autoFilterNode = new Tone.AutoFilter(autoFilterSettings).start()
// const autoPannerNode = new Tone.AutoPanner(autoPannerSettings).start()
// const autoWahNode = new Tone.AutoWah(autoWahSettings)
// // const bitCrusherNode = new Tone.BitCrusher(bitCrusherSettings)
// const chebyshevNode = new Tone.Chebyshev(chebyshevSettings)
// const chorusNode = new Tone.Chorus(chorusSettings)
// const distortionNode = new Tone.Distortion(distortionSettings)
// const feedbackDelayNode = new Tone.FeedbackDelay(feedbackDelaySettings)
// const freeverbNode = new Tone.Freeverb(freeverbSettings)
// const frequencyShifterNode = new Tone.FrequencyShifter(frequencyShifterSettings)
// const jcReverbNode = new Tone.JCReverb(jcReverbSettings)
// // const midSideNode = new Tone.MidSideEffect(midSideSettings)
// const phaserNode = new Tone.Phaser(phaserSettings)
// const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings)
const pitchShiftNode = new Tone.PitchShift(pitchShiftSettings)
const reverbNode = new Tone.Reverb(reverbSettings)
// const stereoWidenerNode = new Tone.StereoWidener(stereoWidenerSettings)
// const tremoloNode = new Tone.Tremolo(tremoloSettings)
// const vibratoNode = new Tone.Vibrato(vibratoSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(
  // autoFilterNode,
  // autoPannerNode,
  // autoWahNode,
  // // bitCrusherNode,
  // chebyshevNode,
  // chorusNode,
  // distortionNode,
  // feedbackDelayNode,
  // freeverbNode,
  // frequencyShifterNode,
  // jcReverbNode,
  // // midSideNode,
  // phaserNode,
  // pingPongDelayNode,
  pitchShiftNode,
  reverbNode,
  // stereoWidenerNode,
  // tremoloNode,
  // vibratoNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Space Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Filter',
  //   type: 'AutoFilterEffect',
  //   node: autoFilterNode,
  //   settings: autoFilterSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Panner',
  //   type: 'AutoPannerEffect',
  //   node: autoPannerNode,
  //   settings: autoPannerSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Wah',
  //   type: 'AutoWahEffect',
  //   node: autoWahNode,
  //   settings: autoWahSettings
  // },
  // // {
  // //   id: generateUniqId(),
  // //   name: 'Bit Crusher',
  // //   type: 'BitCrusherEffect',
  // //   node: bitCrusherNode,
  // //   settings: bitCrusherSettings
  // // },
  // {
  //   id: generateUniqId(),
  //   name: 'Chebyshev',
  //   type: 'ChebyshevEffect',
  //   node: chebyshevNode,
  //   settings: chebyshevSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Chorus',
  //   type: 'ChorusEffect',
  //   node: chorusNode,
  //   settings: chorusSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Distortion',
  //   type: 'DistortionEffect',
  //   node: distortionNode,
  //   settings: distortionSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Feedback Delay',
  //   type: 'FeedbackDelayEffect',
  //   node: feedbackDelayNode,
  //   settings: feedbackDelaySettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Freeverb',
  //   type: 'FreeverbEffect',
  //   node: freeverbNode,
  //   settings: freeverbSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Frequency Shift',
  //   type: 'FrequencyShifterEffect',
  //   node: frequencyShifterNode,
  //   settings: frequencyShifterSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'JC Reverb',
  //   type: 'JCReverbEffect',
  //   node: jcReverbNode,
  //   settings: jcReverbSettings
  // },
  // // {
  // //   id: generateUniqId(),
  // //   name: 'Mid Side Effect',
  // //   type: 'MidSideEffect',
  // //   node: midSideNode,
  // //   settings: midSideSettings
  // // },
  // {
  //   id: generateUniqId(),
  //   name: 'Phaser',
  //   type: 'PhaserEffect',
  //   node: phaserNode,
  //   settings: phaserSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Ping Pong Delay',
  //   type: 'PingPongDelayEffect',
  //   node: pingPongDelayNode,
  //   settings: pingPongDelaySettings
  // },
  {
    id: generateUniqId(),
    name: 'Pitch Shift',
    type: 'PitchShiftEffect',
    node: pitchShiftNode,
    settings: pitchShiftSettings
  },
  {
    id: generateUniqId(),
    name: 'Reverb',
    type: 'ReverbEffect',
    node: reverbNode,
    settings: reverbSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Stereo Widener',
  //   type: 'StereoWidenerEffect',
  //   node: stereoWidenerNode,
  //   settings: stereoWidenerSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Tremolo',
  //   type: 'TremoloEffect',
  //   node: tremoloNode,
  //   settings: tremoloSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Vibrato',
  //   type: 'VibratoEffect',
  //   node: vibratoNode,
  //   settings: vibratoSettings
  // },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  }
]

const v = 1

const part = new Tone.Part(
  function (time, note) {
    synthNode.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  },
  // ['C3', 'D3', 'E2', 'E3']
  [
    {
      time: '0:0:0',
      noteName: 'C4',
      duration: '1n',
      velocity: v
    },
    {
      time: '1:0:0',
      noteName: 'D3',
      duration: '4n',
      velocity: v
    },
    {
      time: '1:1:0',
      noteName: 'E3',
      duration: '4n',
      velocity: v
    },
    {
      time: '1:3:0',
      noteName: 'D3',
      duration: '4n',
      velocity: v
    },
    {
      time: '2:0:0',
      noteName: 'D3',
      duration: '4n',
      velocity: v
    },
    {
      time: '2:3:0',
      noteName: 'E3',
      duration: '4n',
      velocity: v
    },
    {
      time: '4:1:0',
      noteName: 'C4',
      duration: '4n',
      velocity: v
    },
    {
      time: '4:2:0',
      noteName: 'A4',
      duration: '4n',
      velocity: v
    },
    {
      time: '5:0:0',
      noteName: 'B4',
      duration: '2n',
      velocity: v
    },
    {
      time: '5:2:0',
      noteName: 'C3',
      duration: '1n',
      velocity: v
    },
    {
      time: '5:3:0',
      noteName: 'E3',
      duration: '1n',
      velocity: v
    }
    // {
    //   time: '0:0:0',
    //   noteName: 'C4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '0:1:0',
    //   noteName: 'E4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '0:2:0',
    //   noteName: 'G4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '1:0:0',
    //   noteName: 'D4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '1:1:0',
    //   noteName: 'G4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '1:2:0',
    //   noteName: 'B4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '2:0:0',
    //   noteName: 'B3',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '2:1:0',
    //   noteName: 'E3',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '2:2:0',
    //   noteName: 'G3',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '3:0:0',
    //   noteName: 'E4',
    //   duration: '1n',
    //   velocity: v
    // }
    // {
    //   time: '3:1:0',
    //   noteName: 'G4',
    //   duration: '1n',
    //   velocity: v
    // },
    // {
    //   time: '3:2:0',
    //   noteName: 'B4',
    //   duration: '1n',
    //   velocity: v
    // }
  ]
)

part.loopEnd = '4m'
part.loop = true

export { instrument, part }
