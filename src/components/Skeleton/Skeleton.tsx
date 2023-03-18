import React from 'react'
import { SkeletonI } from '../../types/Skeleton'
import style from './_Skeleton.module.scss'
import ArticleSkeleton from '../../modules/Article/ArticleSkeleton'
import PostSkeleton from '../../modules/Post/PostSkeleton'
import ProfileSkeleton from '../../modules/Profile/ProfileSkeleton'
import TypographySkeleton from '../../modules/Typography/TypographySkeleton'
import AvatarSkeleton from '../../modules/Profile/AvatarSkeleton'

const Skeleton = ({ mode, animation, sx }: SkeletonI) => {
  if (mode === 'article') {
    return (
      <div data-testid={'Skeleton'} className={style.skeletonWrapper}>
        <ArticleSkeleton animation={animation} sx={sx} />
      </div>
    )
  } else if (mode === 'post') {
    return (
      <div data-testid={'Skeleton'} className={style.skeletonWrapper}>
        <PostSkeleton animation={animation} sx={sx} />
      </div>
    )
  } else if (mode === 'profile') {
    return (
      <div data-testid={'Skeleton'} className={style.skeletonWrapper}>
        <ProfileSkeleton animation={animation} sx={sx} />
      </div>
    )
  } else if (mode === 'avatar') {
    return (
      <div data-testid={'Skeleton'} className={style.skeletonWrapper}>
        <AvatarSkeleton animation={animation} sx={sx} />
      </div>
    )
  } else {
    return (
      <div data-testid={'Skeleton'} className={style.skeletonWrapper}>
        <TypographySkeleton type={mode} animation={animation} sx={sx} />
      </div>
    )
  }
}

export default Skeleton
