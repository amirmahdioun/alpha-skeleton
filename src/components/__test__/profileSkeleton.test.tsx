import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { SkeletonI } from '../../types/Skeleton'
import Skeleton from '../Skeleton/Skeleton'

describe('profile skeleton component', () => {
  afterEach(cleanup)
  let props: SkeletonI

  beforeEach(() => {
    props = {
      mode: 'profile',
      animation: 'wave'
    }
  })

  const skeletonComponent = () => render(<Skeleton {...props} />)

  it('should have child', () => {
    const { getByTestId } = skeletonComponent()
    const profileComponent = getByTestId('Skeleton')
    expect(profileComponent.children).toBeDefined()
    expect(profileComponent.childElementCount).toBe(1)
    expect(profileComponent.childElementCount).not.toBeGreaterThan(1)
    expect(profileComponent.childElementCount).not.toBeLessThanOrEqual(0)
  })

  it('The child should have 3 further children', () => {
    const { getByTestId } = skeletonComponent()
    const profileComponent = getByTestId('Skeleton')
    expect(profileComponent.children[0].childElementCount).toBe(3)
    expect(profileComponent.children[0].childElementCount).not.toBeGreaterThan(3)
    expect(profileComponent.children[0].childElementCount).not.toBeLessThanOrEqual(2)
  })

  it('should have one avatar skeleton element', () => {
    const { container } = skeletonComponent()
    const imageElement = container.getElementsByClassName('skeleton avatar')
    expect(imageElement.length).toBe(1)
  })

  it('should have one title skeleton element', () => {
    const { container } = skeletonComponent()
    const titleElement = container.getElementsByClassName('skeleton title')
    expect(titleElement.length).toBe(1)
  })

  it('should have 2 body skeleton element', () => {
    const { container } = skeletonComponent()
    const bodyElement = container.getElementsByClassName('skeleton body')
    expect(bodyElement.length).toBe(2)
  })
})
