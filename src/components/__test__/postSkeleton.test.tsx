import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { SkeletonI } from '../../types/Skeleton'
import Skeleton from '../Skeleton/Skeleton'

describe('post skeleton component', () => {
  afterEach(cleanup)
  let props: SkeletonI

  beforeEach(() => {
    props = {
      mode: 'post',
      animation: 'wave'
    }
  })

  const skeletonComponent = () => render(<Skeleton {...props} />)

  it('should have 5 children', () => {
    const { getByTestId } = skeletonComponent()
    const postComponent = getByTestId('Skeleton')
    expect(postComponent.children).toBeDefined()
    expect(postComponent.childElementCount).toBe(5)
    expect(postComponent.childElementCount).not.toBeGreaterThan(5)
    expect(postComponent.childElementCount).not.toBeLessThanOrEqual(4)
  })

  it('should have one image skeleton element', () => {
    const { container } = skeletonComponent()
    const imageElement = container.getElementsByClassName('skeleton image')
    expect(imageElement.length).toBe(1)
  })

  it('should have one title skeleton element', () => {
    const { container } = skeletonComponent()
    const titleElement = container.getElementsByClassName('skeleton title')
    expect(titleElement.length).toBe(1)
  })

  it('should have 3 body skeleton element', () => {
    const { container } = skeletonComponent()
    const bodyElement = container.getElementsByClassName('skeleton body')
    expect(bodyElement.length).toBe(1)
  })

  it('should have 2 caption skeleton element', () => {
    const { container } = skeletonComponent()
    const captionElement = container.getElementsByClassName('skeleton caption')
    expect(captionElement.length).toBe(2)
  })
})
