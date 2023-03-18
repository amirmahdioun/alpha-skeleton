import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { SkeletonI } from '../../types/Skeleton'
import Skeleton from '../Skeleton/Skeleton'

describe('Article skeleton component', () => {
  afterEach(cleanup)
  let props: SkeletonI

  beforeEach(() => {
    props = {
      mode: 'article',
      animation: 'wave'
    }
  })

  const skeletonComponent = () => render(<Skeleton {...props} />)

  it('should have 4 children', () => {
    const { getByTestId } = skeletonComponent()
    const articleComponent = getByTestId('Skeleton')
    expect(articleComponent.children).toBeDefined()
    expect(articleComponent.childElementCount).toBe(4)
    expect(articleComponent.childElementCount).not.toBeGreaterThan(4)
    expect(articleComponent.childElementCount).not.toBeLessThanOrEqual(3)
  })

  it('should have one h3 skeleton element', () => {
    const { container } = skeletonComponent()
    const headingElement = container.getElementsByClassName('skeleton h3')
    expect(headingElement.length).toBe(1)
  })

  it('should have 3 body skeleton element', () => {
    const { container } = skeletonComponent()
    const bodyElement = container.getElementsByClassName('skeleton body')
    expect(bodyElement.length).toBe(3)
  })
})
