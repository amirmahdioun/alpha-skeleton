import React from 'react'
import SkeletonElement from '../../components/SkeletonElement/SkeletonElement'
import { SkeletonModeI } from '../../types/Skeleton'

const PostSkeleton = ({ animation, sx }: SkeletonModeI) => {
  return (
    <>
      <SkeletonElement type={'image'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'title'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'caption'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'caption'} animation={animation} sx={{ ...sx }} />
    </>
  )
}

export default PostSkeleton
