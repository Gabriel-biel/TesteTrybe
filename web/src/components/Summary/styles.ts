import { styled } from '@stitches/react'

export const SummaryContainer = styled('section', {
  width: '100%',
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 1rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',

  marginTop: '-5rem',
})

export const SummaryCard = styled('div', {
  background: '$gray600',
  borderRadius: 6,
  padding: '2rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray300',
  },

  strong: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '1.5rem',
  },

  variants: {
    color: {
      green: {
        background: '$green700',
      },
    },
  },
})
