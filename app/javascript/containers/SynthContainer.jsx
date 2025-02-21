import * as Tone from 'tone'
// import * as melodySynth from '../tunes/melody_synth'
import * as bassSynth from '../tunes/bass_synth'
// import * as spaceSynth from '../tunes/space_synth'
// import * as allEffectsSynth from '../tunes/all_effects_synth'
import * as drumSampler from '../tunes/drum_sampler'
import * as sequencedSynth from '../tunes/sequenced_synth'

import React, { PureComponent } from 'react'

import WelcomeScreen from '../views/WelcomeScreen'
import SynthRoom from '../views/SynthRoom'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: []
    }
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()

    this.setState({
      webAudioStarted: true
    })
  }

  initInstruments = () => {
    Tone.Transport.bpm.value = 240
    Tone.Transport.start()

    // melodySynth.part.start()
    // bassSynth.sequention.start(0)
    // spaceSynth.sequention.start(0)

    // const sequention = allEffectsSynth.sequentions[0]().start(0)
    // allEffectsSynth.sequentions[0].start(0)

    // const sequention = drumSampler.part.start()

    const instruments = [
      // melodySynth.instrument,
      // spaceSynth.instrument
      // allEffectsSynth.instrument
      drumSampler.instrument,
      sequencedSynth.instrument,
      bassSynth.instrument
    ]

    this.setState({ instruments })
  }

  handlePropertyValueChange = (id, property, value) => {
    console.log(property, value)
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = []

      instrument.forEach((instrumentModule, i) => {
        const newInstrumentModule = Object.assign({}, instrumentModule)

        if (instrumentModule.id === id) {
          if (property.length === 1) {
            const propertyName = property[0]
            newInstrumentModule.settings[propertyName] = value
          } else if (property.length === 2) {
            const scopeName = property[0]
            const propertyName = property[1]
            newInstrumentModule.settings[scopeName][propertyName] = value
          } else if (property.length === 3) {
            let searchedEvent

            newInstrumentModule.settings.sequence.forEach((event, i) => {
              if (
                event.noteName === property[0] &&
                event.time === property[1]
              ) {
                searchedEvent = event
                newInstrumentModule.settings.sequence.splice(i, 1)
              }
            })

            if (searchedEvent === undefined) {
              newInstrumentModule.settings.sequence.push({
                time: property[1],
                noteName: property[0],
                duration: '4n',
                velocity: 1
              })
            }
          }
        }

        newInstrument.push(newInstrumentModule)
      })

      instruments.push(newInstrument)
    })

    this.setState({
      instruments
    })
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  renderSynthRoom = () => {
    const { instruments } = this.state

    return (
      <SynthRoom
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderSynthRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
