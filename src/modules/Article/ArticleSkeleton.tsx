import React from 'react'
import SkeletonElement from '../../components/SkeletonElement/SkeletonElement'
import { SkeletonModeI } from '../../types/Skeleton'

const ArticleSkeleton = ({ animation, sx }: SkeletonModeI) => {
  return (
    <>
      <SkeletonElement type={'h3'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
    </>
  )
}

export default ArticleSkeleton
