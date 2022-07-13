import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { IParticlesOptions } from 'tsparticles-engine/types'

import particlesConfig from '../../assets/particles.json'

const ParticlesWrapper = () => {
  const particlesInit = async (main: any) => loadFull(main)

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig as unknown as IParticlesOptions}
    />
  )
}

export default ParticlesWrapper
