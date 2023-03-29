import {useState} from 'react'
import {
  AppContainer,
  ContentContainer,
  Warning,
  Heading,
} from './styledComponents'

const PasswordValidator = () => {
  const [userPassword, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <ContentContainer>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <input
          type="password"
          onChange={onChangePassword}
          value={userPassword}
        />
        {userPassword.length < 8 ? (
          <Warning>Your password must be at least 8 characters</Warning>
        ) : null}
      </ContentContainer>
    </AppContainer>
  )
}

export default PasswordValidator
