import React from 'react'
import SkeletonElement from '../../components/SkeletonElement/SkeletonElement'
import { SkeletonElementI } from '../../types/Skeleton'

const TypographySkeleton = ({ type, animation, sx }: SkeletonElementI) => {
  return (
    <>
      <SkeletonElement type={type} animation={animation} sx={{ ...sx }} />
    </>
  )
}

export default TypographySkeleton
