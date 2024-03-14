import { style } from '@vanilla-extract/css'

export const linkWrapper = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  justifyContent: 'center',
  placeItems: 'center',
  gap: 'auto',
})

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'black',
})
