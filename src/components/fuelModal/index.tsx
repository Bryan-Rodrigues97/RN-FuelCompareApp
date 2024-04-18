import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./style";

type FuelModalProps = TouchableOpacityProps & {
    fuel: string,
    alcohol: string, 
    gas: string
}

export function FuelModal({fuel, alcohol, gas, ...rest}: FuelModalProps){
    return(
        <View style={styles.modalView}>
          <Image source={require("../../img/gas.png")}/>
          <View style={styles.modalTextGroup}>
            <Text style={styles.title}>{`Compensa usar ${fuel}`}</Text>
            <Text style={styles.modalSubTitle}>Com os preços:</Text>
            <Text style={styles.modalText}>{`Álcool: R$ ${Number(alcohol).toLocaleString('pt-BR',{style:"currency", currency:"BRL"})}`}</Text>
            <Text style={styles.modalText}>{`Gasolina: R$ ${Number(gas).toLocaleString('pt-BR',{style:"currency", currency:"BRL"})}`}</Text>
          </View>
          <TouchableOpacity 
          style={styles.modalBtnArea}
          activeOpacity={0.8}
          {...rest}
          >
            <Text style={styles.modalBtnText}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
    )
}