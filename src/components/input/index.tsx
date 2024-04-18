import { TextInput, View, Text, TextInputProps, } from "react-native";
import React, { forwardRef } from "react";

import { styles } from "./style";

type InputProps = TextInputProps & {
    title: string
}

//Importa o forwardRef, para que seja possivel passar a propriedade ref do compoenente pai
const Input = forwardRef<TextInput, InputProps>(({ title, ...rest }, ref) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                ref={ref} // Aqui é onde a ref é passada corretamente
                style={styles.inputArea}
                keyboardType="numeric"
                {...rest}
            />
        </View>
    )
});

export { Input };