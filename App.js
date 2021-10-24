import React from 'react';
import {} from 'react-native'
import {
Container,
ContainerLogin,
Logo,
LogoTitle,
ContainerInput,
Inputs,
Icon,
Button,
ButtonText

} from './style';
import { AntDesign, Entypo} from '@expo/vector-icons';



 const App = ()=>{
  return(
    <Container>
      <ContainerLogin>
        <Logo
            source={{uri:'https://img2.gratispng.com/20180508/ace/kisspng-light-yagami-apple-iphone-7-plus-ryuk-death-note-5af1b017bd8af0.9189795515257886957764.jpg'}}
            resizeMode="contain"
        />
        <LogoTitle
          source={{uri:'https://fontmeme.com/permalink/211024/83173f7c2c88085db1b2d065f8816d27.png'}}        
          resizeMode="contain"
        />

        
          <Icon style={{borderBottomWidth:1, borderBottomColor:'#888'}}>
          <Inputs
            placeholder="Digite seu nome"  
            placeholderTextColor="rgba(100, 100, 100, .70)"
               
          />
            <AntDesign name="book" size={24} color="#888 a" />
          </Icon>
          <Icon style={{borderBottomWidth:1, borderBottomColor:'#888'}}>
          <Inputs
              placeholderStyle={{fontFamily:'sens-serif'}}
               placeholderTextColor="rgba(100, 100, 100, .70)"
              placeholder="Digite seu email"
          />
            <Entypo name="eye-with-line" size={24} color="#888" />          
          </Icon>
          <Button>
            <ButtonText
                source={{uri:'https://fontmeme.com/permalink/211024/01489719876f045dc19cf02b92988153.png'}}            
                resizeMode="cover"
            />
          </Button>
      </ContainerLogin>
    </Container>

  );
}

export default App;