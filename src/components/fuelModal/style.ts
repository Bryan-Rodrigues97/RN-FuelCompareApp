import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalView:{
        flex: 1,
        backgroundColor: '#222',
        paddingTop:100,
        alignItems:'center'
      },
      modalTextGroup:{
        alignItems:'center',
        justifyContent:'center',
        gap: 10
      },
      modalSubTitle:{
        color:"#FFF",
        fontSize:24,
        fontWeight:'500'
      },
      modalText:{
        color:"#CCC",
        fontSize:16
      },
      modalBtnArea:{
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderColor:"#CF2525",
        borderWidth:1,
        height:40,
        width:300
      },
      modalBtnText:{
        color:"#CF2525",
        fontSize:16,
        fontWeight:"500"
      },
      title:{
        color:"#5CE200",
        fontSize:28,
        fontWeight:"bold",
        marginTop:20,
        marginBottom:50,
      }  
})