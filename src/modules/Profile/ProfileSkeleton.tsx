import React from 'react'
import style from './_Profile.module.scss'
import SkeletonElement from '../../components/SkeletonElement/SkeletonElement'
import { SkeletonModeI } from '../../types/Skeleton'

const ProfileSkeleton = ({ animation, sx }: SkeletonModeI) => {
  return (
    <div className={style.profileSkeleton}>
      <div className={style.profileSkeleton__header}>
        <SkeletonElement type={'avatar'} animation={animation} sx={{ ...sx }} />
        <SkeletonElement type={'title'} animation={animation} sx={{ ...sx }} />
      </div>
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
      <SkeletonElement type={'body'} animation={animation} sx={{ ...sx }} />
    </div>
  )
}

export default ProfileSkeleton
