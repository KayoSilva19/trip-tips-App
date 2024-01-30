import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled.View`
  align-items: center;
`
export const TitleText = styled.Text`
  color: #ff9900    ;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 12px;
`
export const IconLogo = styled(Ionicons).attrs({
  size: 32,
  color: '#808080'
})``


