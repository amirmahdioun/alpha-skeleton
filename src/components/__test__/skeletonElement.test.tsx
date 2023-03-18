import React from 'react'
import { cleanup, render } from '@testing-library/react'
import SkeletonElement from '../SkeletonElement/SkeletonElement'
import { SkeletonElementI } from '../../types/Skeleton'

describe('Skeleton element', () => {
  let props: SkeletonElementI
  afterEach(cleanup)

  it('should have animation div element', () => {
    const { getByTestId } = render(<SkeletonElement type={'h1'} animation={'wave'} />)
    const skeletonElement = getByTestId('skeletonElement')
    const animationElement = getByTestId('skeletonAnimation')
    expect(skeletonElement).toContainElement(animationElement)
    expect(skeletonElement.children).toBeDefined()
    expect(skeletonElement.childElementCount).toBe(1)
    expect(skeletonElement.childElementCount).not.toBeGreaterThan(1)
    expect(skeletonElement.childElementCount).not.toBeLessThanOrEqual(0)
  })

  it('should have animation element with wave id', () => {
    const { container } = render(<SkeletonElement type={'h1'} animation={'wave'} />)
    const animationElement = container.querySelector('#wave')
    expect(animationElement).toBeInTheDocument()
  })

  it('should have animation element with pulse id', () => {
    const { container } = render(<SkeletonElement type={'h1'} animation={'pulse'} />)
    const animationElement = container.querySelector('#pulse')
    expect(animationElement).toBeInTheDocument()
  })

  describe('h1 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h1',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h1 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h1')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('h2 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h2',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h2 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h2')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('h3 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h3',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h3 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h3')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('h4 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h4',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h4 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h4')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('h5 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h5',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h5 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h5')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('h6 element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'h6',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton h6 class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton h6')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('image element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'image',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton image class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton image')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('avatar element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'avatar',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton avatar class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton avatar')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('body element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'body',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton body class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton body')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('title element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'title',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton title class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton title')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })

  describe('caption element with wave animation', () => {
    beforeEach(() => {
      props = {
        type: 'caption',
        animation: 'wave',
        sx: { backgroundColor: 'red', width: '50px', height: '100%' }
      }
    })

    const skeletonComponent = () => render(<SkeletonElement {...props} />)

    it('should have skeleton caption class', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveClass('skeleton caption')
    })

    it('should have css properties getting from sx props', () => {
      const { getByTestId } = skeletonComponent()
      const skeletonElement = getByTestId('skeletonElement')
      expect(skeletonElement).toHaveStyle('backgroundColor: red')
      expect(skeletonElement).toHaveStyle('width: 50px')
      expect(skeletonElement).toHaveStyle('height: 100%')
    })
  })
})
