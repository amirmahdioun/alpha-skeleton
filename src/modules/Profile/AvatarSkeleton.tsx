import React from 'react'
import SkeletonElement from '../../components/SkeletonElement/SkeletonElement'
import { SkeletonModeI } from '../../types/Skeleton'

const AvatarSkeleton = ({ animation, sx }: SkeletonModeI) => {
  return (
    <>
      <SkeletonElement type={'avatar'} animation={animation} sx={{ ...sx }} />
    </>
  )
}

export default AvatarSkeleton
