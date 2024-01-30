import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
`
export const ContentForm = styled.View`
  width: 100%;
  background-color: #FFF;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
`
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #808080;
`
export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #808080;
`
export const TextInputForm = styled(TextInput)`
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #808080;
  margin-top: 16px;
  padding: 8px 16px;
  margin-bottom: 16px;
`
export const ButtonIcon = styled(Pressable)`
 background-color: #ff9900;
 margin-top: 16px;
 border-radius: 4px;
 padding: 16px;
 align-items: center;
 justify-content: center;
 flex-direction: row;
 gap: 4px;
`
export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`

export const ContentViewResult = styled(ScrollView)`
  
`
export const TextView = styled.View`
  width: 100%;
  margin-top: 16px;
  background-color: #FFF;
  border-radius: 4px;
  padding: 16px;

`

export const TitleView = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`
export const RoteiroView = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  color: #333333;
`
export const LoadingContent = styled.View`
  width: 100%;
  margin-top: 16px;
  background-color: #FFFF;
  border-radius: 4px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`
export const LoadingIcon = styled(Ionicons).attrs({
  size: 32,
  color: "#ff9900",
})`
  
`

