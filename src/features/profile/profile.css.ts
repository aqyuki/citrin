import { style } from '@vanilla-extract/css'

export const profileCard = style({
  width: '100%',
  margin: '10px auto',
  display: 'grid',
  placeItems: 'center',
  '@media': {
    '(min-width:600px)': {
      width: '500px',
    },
  },
})

export const cardTitle = style({
  fontSize: '2.5rem',
  margin: '10px auto',
})

export const cardContent = style({
  fontSize: '15px',
  textAlign: 'center',
  margin: '10px auto',
})
