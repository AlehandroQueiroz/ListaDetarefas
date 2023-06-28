import { View, Text, Image, TouchableOpacity } from "react-native";
import {style } from "./style";
import { CheckBox } from "react-native-elements";

type Props = {
  tarefaDoDia: string;
  onRemove: () => void;
}

export function Tarefas({tarefaDoDia, onRemove}: Props){

  return(
    <View style={style.container}>
        <View style={style.containerStyleCheckBox}>
            <CheckBox 
            checkedColor="#4EA8DE"
            uncheckedIcon="circle-o"
            uncheckedColor="#4EA8DE"
            size={25}
            />
        </View>
        
      
        <Text style={style.text}>{tarefaDoDia}</Text>

        <TouchableOpacity onPress={onRemove}>   
          <Image source={require('../../../assets/lixo.png')} style={style.imagem}/>
        </TouchableOpacity>
      

    </View>
  )}