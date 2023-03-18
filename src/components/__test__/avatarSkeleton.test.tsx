import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { SkeletonI } from '../../types/Skeleton'
import Skeleton from '../Skeleton/Skeleton'

describe('avatar skeleton component', () => {
  afterEach(cleanup)
  let props: SkeletonI

  beforeEach(() => {
    props = {
      mode: 'avatar',
      animation: 'wave'
    }
  })

  const skeletonComponent = () => render(<Skeleton {...props} />)

  it('should have one children', () => {
    const { getByTestId } = skeletonComponent()
    const avatarComponent = getByTestId('Skeleton')
    expect(avatarComponent.children).toBeDefined()
    expect(avatarComponent.childElementCount).toBe(1)
    expect(avatarComponent.childElementCount).not.toBeGreaterThan(1)
    expect(avatarComponent.childElementCount).not.toBeLessThanOrEqual(0)
  })

  it('should have one avatar skeleton element', () => {
    const { container } = skeletonComponent()
    const imageElement = container.getElementsByClassName('skeleton avatar')
    expect(imageElement.length).toBe(1)
  })
})
