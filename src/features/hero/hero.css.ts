import { style } from '@vanilla-extract/css'

export const heroWrapper = style({
  width: '100%',
  height: ['100vh', '100svh'],
  display: 'grid',
  placeItems: 'center',
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

export const name = style({
  fontSize: '2.5rem',
  margin: '10px auto',
})
