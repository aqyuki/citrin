import { style } from '@vanilla-extract/css'

export const skillCard = style({
  width: '100%',
  display: 'grid',
  margin: '10px auto',
  placeItems: 'center',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '25px',
  '@media': {
    '(min-width:600px)': {
      width: '500px',
    },
  },
})

export const icon = style({
  margin: '20px',
  width: '3rem',
})
