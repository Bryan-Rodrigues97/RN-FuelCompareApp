import { TouchableOpacity, TouchableOpacityProps, Text} from "react-native";

import { styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
    btnText: string
}

export function Button({btnText, ...rest}:ButtonProps){
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnArea}
        {...rest}
        >
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
        
}