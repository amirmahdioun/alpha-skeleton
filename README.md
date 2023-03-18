# Skeletons

This package is designed for skeletons to use when contents are loading!  
It is very easy to use...

#### How? Let's go

use it everywhere you want to have skeleton before load the contents

    <Skeleton />

This component gives two required props
First is : **mode** ('article'
, 'profile'
, 'post'
, 'h1'
, 'h2'
, 'h3'
, 'h4'
, 'h5'
, 'h6'
, 'title'
, 'body'
, 'caption'
, 'avatar')
Use article mode for article. It has a heading and body for this purpose
and use profile mode for profiles also it has an avatar, name section and description

[//]: # (&#40;See examples in example page&#41;)
Second props is : **animation** ('pulse' , 'wave')

    <Skeleton mode={'article'} animation={'pulse'} />
    <Skeleton mode={'article'} animation={'wave'} />
    <Skeleton mode={'profile'} animation={'pulse'} />
    <Skeleton mode={'profile'} animation={'wave'} />
    <Skeleton mode={'h1'} animation={'wave'} />
    <Skeleton mode={'h1'} animation={'pulse'} />
    <Skeleton mode={'h2'} animation={'wave'} />
    <Skeleton mode={'h2'} animation={'pulse'} />
    <Skeleton mode={'h3'} animation={'wave'} />
    <Skeleton mode={'h3'} animation={'pulse'} />
    <Skeleton mode={'h4'} animation={'wave'} />
    <Skeleton mode={'h4'} animation={'pulse'} />
    <Skeleton mode={'h5'} animation={'wave'} />
    <Skeleton mode={'h5'} animation={'pulse'} />
    <Skeleton mode={'h6'} animation={'wave'} />
    <Skeleton mode={'h6'} animation={'pulse'} />
    <Skeleton mode={'body'} animation={'wave'} />
    <Skeleton mode={'body'} animation={'pulse'} />
    <Skeleton mode={'title'} animation={'wave'} />
    <Skeleton mode={'title'} animation={'pulse'} />
    <Skeleton mode={'caption'} animation={'wave'} />
    <Skeleton mode={'caption'} animation={'pulse'} />

### Props

| Props     | Default | Description           | Options      |
|-----------|:-------:|:----------------------|--------------|
| mode      |    -    | mode of the skeleton  | (Mode table) |
| animation |    -    | animation of skeleton | wave, pulse  |
| sx        |    -    | CSS object properties | -            |

### Modes

| Mode                        | Description                                              |
|-----------------------------|:---------------------------------------------------------|
| article                     | Contains one h3 and 3 body skeleton element              |
| profile                     | Contains avatar, title and 2 body skeleton element       |
| post                        | Contains image, title, body and caption skeleton element |
| h1 - h2 - h3 - h4 - h5 - h6 | Contains related skeleton element                        |
| title                       | Title skeleton element to use in title section of card   |
| body                        | Body skeleton element to use in body section of card     |
| caption                     | Caption skeleton element to use for captions             |
| avatar                      | Avatar skeleton element to use for avatars               |

Please leave comment and tell me if there is any bug or problem and give me your suggestions to improve
