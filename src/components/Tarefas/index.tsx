import { View, Text, Image, TouchableOpacity } from "react-native";
import {style } from "./style";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";

type Props = {
  tarefaDoDia: string;
  onRemove: () => void;
  onCheck: (checked: boolean) => void;
}

export function Tarefas({tarefaDoDia, onRemove, onCheck}: Props){

  const [isChecked, setChecked] = useState(false);
  const [concluidas, setConcluidas] = useState(0);


  function contConcluidas() {
    setChecked(!isChecked)
    onCheck(!isChecked)
}
  return(
    <View style={style.container}>
        <View style={style.containerStyleCheckBox}>
            <CheckBox 
            checkedColor="#5E60CE"
            uncheckedColor="#4EA8DE"
            checkedIcon="check-circle"
            uncheckedIcon="circle-o"
            checked={isChecked}
            onPress={contConcluidas}      
            size={25}
            />
        </View>
        
      
        <Text style={style.text}>{tarefaDoDia}</Text>

        <TouchableOpacity onPress={onRemove}>   
          <Image source={require('../../../assets/lixo.png')} style={style.imagem}/>
        </TouchableOpacity>
      

    </View>
  )};

  export default Tarefas;