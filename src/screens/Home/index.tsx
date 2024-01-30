import Slider from '@react-native-community/slider';
import { Header } from '../../components/Header';
import { ButtonIcon, Container, ContentForm, ContentViewResult, LoadingContent, LoadingIcon, RoteiroView, SubTitle, TextButton, TextInputForm, TextView, Title, TitleView } from './style';
import { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';


export function Home() {
  const [city, setCity] = useState('')
  const [day, setDay] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const [travel, setTravel] = useState('')

  const KEY_GPT = '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'

  async function handleGenerate() {
    if(city === '') {
      return Alert.alert('Cidade','Por favor, insira uma cidade que deseja visitar!')
    }
    Keyboard.dismiss()
    setLoading(true)
	
    const prompt = `Crie um roteiro para uma viagem de exatos ${day.toFixed(0)} dias na cidade de ${city}, busque por lugares turisticos, lugares mais visitados, seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia.
    `

    fetch(`https://api.openai.com/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KEY_GPT}`
      },
      body: JSON.stringify({
        model:"gpt-3.5-turbo-0301",
        messages:[
          {"role": "user", "content": prompt},
        ],
        temperature: 0.20,
        max_tokens: 500,
        top_p: 1,
      })
    }).then(response => response.json())
    .then((data) => setTravel(data.choices[0].message.content))
    .catch((error) => error)
    .finally(() => setLoading(false))

    setCity('')
  }

  return (
    <Container>
      <Header icon='airplane-outline'/>

      <ContentForm>
        <Title>Cidade Destino</Title>
        <TextInputForm 
          placeholder='Ex: Campo Grande, MS '
          placeholderTextColor='#DDD'
          value={city}
          onChangeText={(value) => setCity(value)}
        />

        <SubTitle>Tempo de estadia: {day.toFixed()} {day > 1 ? 'Dias' : 'Dia'}</SubTitle>
        <Slider 
          minimumValue={1}
          maximumValue={120}
          minimumTrackTintColor='#00cc99'
          maximumTrackTintColor='#000'
          value={day}
          onValueChange={(value) => setDay(value)}
        />
      </ContentForm>

      <ButtonIcon
        onPress={handleGenerate}
      >
        <TextButton>Gerar Dicas</TextButton>
      </ButtonIcon>

    { loading && 
      <LoadingContent>
        <ActivityIndicator color='#ff9900' size='large'/>
      </LoadingContent> 
    }
    
    { travel && 
         <ContentViewResult 
         contentContainerStyle={{ paddingBottom: 16 }} 
         showsVerticalScrollIndicator={false}
       >
             <TextView>
             <TitleView>Suas dicas para viagem 👇</TitleView>
             <RoteiroView>{travel}</RoteiroView>
           </TextView>
         </ContentViewResult>
    }
     
    
    </Container>
  )
}