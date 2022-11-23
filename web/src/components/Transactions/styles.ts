import { styled } from "@stitches/react";

export const TransactionsContainer = styled('main', {
  width: '100%',
  maxWidth: 1120,
  margin: '1.5rem auto 0',
  padding: '0 1rem',
})

export const TransactionsTable = styled('table', {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',

  td: {
    padding: '1.5rem 2rem',
    background: '$gray700',

    '&:first-child' : {
      borderTopLeftRadius: '0.5rem',
      borderBottomLeftRadius: '0.5rem',
    },

    '&:last-child' : {
      borderTopRightRadius: '0.5rem',
      borderBottomRightRadius: '0.5rem',
    }
  },

})

export const PriceHighlight = styled('span', {
  variants: {
    color: {
      green: {
        color: '$green300'
      },
      red: {
        color: '$red300'
      }
    }
  }
})