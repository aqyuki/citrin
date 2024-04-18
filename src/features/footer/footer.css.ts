import { style } from '@vanilla-extract/css'

export const footerWrapper = style({
  margin: '5rem 0 5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(12,1fr)',
  placeItems: 'left',
  width: '100%',
})

export const content = style({
  margin: 'auto 0',
  fontSize: '12px',
  color: 'gray',
  gridColumn: '6/9',
  '@media': {
    '(max-width:600px)': {
      gridColumn: '2/12',
    },
  },
})
