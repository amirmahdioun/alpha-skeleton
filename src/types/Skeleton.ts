import React from 'react'

export type SkeletonElementI = {
  type: 'image' | 'avatar' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'body' | 'caption'
  animation: 'wave' | 'pulse'
  sx?: React.CSSProperties
}

export type SkeletonI = {
  mode:
    | 'article'
    | 'profile'
    | 'post'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title'
    | 'body'
    | 'caption'
    | 'avatar'
  animation: 'wave' | 'pulse'
  sx?: React.CSSProperties
}

export type SkeletonModeI = Pick<SkeletonElementI, 'sx' | 'animation'>
