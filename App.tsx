import { useState, useRef } from 'react';
import { Alert, Image, Modal, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Input } from './src/components/input';
import { Button } from './src/components/button';

import { styles } from './style';
import { FuelModal } from './src/components/fuelModal';

export default function App() {
  const [gasoline, setGasoline] = useState<string>('')
  const [alcohol, setAlcohol] = useState<string>('')
  const [modalVisible, setModaVisible] = useState<boolean>(false)
  const [fuel, setFuel] = useState<string>('')

  const firstInputRef  = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);

  // Função para dar foco ao primeiro TextInput após o fechamento do modal
  const focusFirstInput = () => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  };

  //Função para dar foco no segundo TextInput após setar o valor do primeiro
  const focustSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
  }

  //Função que calcula qual o melhor custo beneficio para abastecer
  //Se possuir valores validos, exibe o modal. Caso contrario, alerta o usuario
  function handleCalcFuelCompare(){
    if(Number(gasoline)==0 || Number(alcohol)==0){
      Alert.alert("Erro de Conversão","O preenchimento dos valores dos combustiveis é obrigatório!")
    }
    else{
      const result = Number(alcohol)/Number(gasoline);

      setFuel(result<0.7 ? 'Álcool' : 'Gasolina')
      setModaVisible(true)
    }
  }

  //Função Executada quando o modal é fechado
  function handleCloseModal(){
    setAlcohol('')
    setGasoline('')
    setModaVisible(false)

    Keyboard.dismiss()

    focusFirstInput()
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/img/logo.png")}/>

      <Text style={styles.title}>Qual melhor opção?</Text>

      <Input 
      title="Álcool (preço por litro)" 
      value={alcohol} 
      onChangeText={setAlcohol} 
      ref={firstInputRef}
      onEndEditing={focustSecondInput}
      />
      
      <Input 
      title="Gasolina (preço por litro)" 
      value={gasoline} 
      onChangeText={setGasoline}
      ref={secondInputRef}
      />

      <Button 
      btnText='Calcular'
      onPress={handleCalcFuelCompare}
      />

      <Modal visible={modalVisible} animationType='slide'>
        <FuelModal
        fuel={fuel}
        gas={gasoline}
        alcohol={alcohol}
        onPress={handleCloseModal}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}
