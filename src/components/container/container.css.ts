import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: ['100vh', '100svh'],
  display: 'grid',
  placeItems: 'center',
})
