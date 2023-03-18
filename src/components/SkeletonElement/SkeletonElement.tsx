import React from 'react'
import { SkeletonElementI } from '../../types/Skeleton'
import './SkeletonElement.scss'

const SkeletonElement = ({ type, animation, sx }: SkeletonElementI) => {
  const classes = `skeleton ${type}`

  return (
    <div data-testid={'skeletonElement'} className={classes} style={{ ...sx }}>
      <div data-testid={'skeletonAnimation'} id={animation}></div>
    </div>
  )
}

export default SkeletonElement
