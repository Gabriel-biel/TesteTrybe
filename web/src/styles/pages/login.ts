import { styled } from '..'

export const LoginContainer = styled('div', {
  display: 'flex',
  gap: '3rem',

  alignItems: 'center',
  justifyContent: 'center',

  height: '100vh',

  background: '$gray900',

  section: {
    maxWidth: '20rem',

    h1: {
      marginTop: '4rem',
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
  },

  form: {
    flex: 1,
    display: 'flex',
    maxWidth: '25rem',

    flexDirection: 'column',
    padding: '3.5rem 3rem',

    background: '$gray800',
    borderRadius: 6,

    button: {
      marginTop: '1rem',
      padding: '1rem 0',
      fontWeight: 'bold',
      background: '$green500',
      color: '$white',
      borderRadius: 6,
    },

    span: {
      display: 'block',
      textAlign: 'center',
      marginTop: '1rem',

      a: {
        color: '$green500',
      },
    },
  },
})

export const InputContainer = styled('div', {
  width: '100%',

  display: 'flex',
  padding: '1rem',

  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '0.75rem',
  borderRadius: 6,

  background: '$gray900',

  marginBottom: '0.75rem',
  input: {
    flex: 1,
    background: 'transparent',
    outline: 0,
    color: '$gray100',
  },
})
