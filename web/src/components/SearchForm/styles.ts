import { styled } from "../../styles";
import * as RadioGroup  from '@radix-ui/react-radio-group'

export const SearchFormContainer = styled('form', {
  maxWidth: 1120,
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '1.5rem auto 0',
  
  input : {
    width: '11rem',
    padding: '0.5rem',
    border: 'none',
    borderRadius: 8,
    colorScheme: 'dark',
  },
})

export const TransactionFilterType = styled(RadioGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5rem',
})

export const TransactionFilterTypeButton = styled(RadioGroup.Item, {
  width: '11rem',
  color: '$gray100',
  borderRadius: 8,
  padding: '0.5rem',
  background: '$gray600',
  fontWeight: '700',

  "&[data-state='checked']": {
    color: '$gray600',
    background: '$white'
    
  }
})