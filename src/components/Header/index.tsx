import { Container, IconLogo, TitleText } from "./style";
import { Ionicons } from '@expo/vector-icons'

type Props = {
  icon: keyof typeof Ionicons.glyphMap,
}

export function Header({icon = 'airplane-outline'}:Props) {
  return (
    <Container>
      <TitleText>Trip Tips</TitleText>
      <IconLogo name={icon}/>
    </Container>
  )
}




