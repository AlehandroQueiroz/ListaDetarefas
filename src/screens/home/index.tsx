import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { style } from "./styles"
import { Tarefas } from "../../components/Tarefas"
import { useState } from "react";

export default function Home(){

        const [tarefas, setTarefas] = useState<string[]>([]);
        const [novaTarefa, setNovaTarefa] = useState('');
           
{/*FUNÇÕES*/}

        function adcionarTarefa(){
            if(tarefas.includes(novaTarefa)){
                return Alert.alert('Tafera repetida', 'Você já adicionou essa tarefa');
            }
            
            setTarefas(prevState => [...prevState, novaTarefa]);
            setNovaTarefa('');
        }

        function removerTarefa(nomeTarefa: string){

       //return console.log(tarefas.filter((item) => item !== nomeTarefa))

       //setTarefas(prevState => prevState.filter((item) => item !== nomeTarefa))

       
                        

            Alert.alert('Excluir', `Você temcerteza que deseja excluir essa tarefa: ${nomeTarefa}`, [
                {
                    text: 'Sim',
                    onPress: () => setTarefas(prevState => prevState.filter((item) => item !== nomeTarefa))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])            
        }

    return(
        <View style={style.container}>
        
        <View style={style.container1}>
            <Image source={require('../../../assets/logo.png')} style={style.imagemLogo}/>
        </View>

{/*INÍCIO DO TEXTINPUT - ABSOLUTE*/}
        
        <View style={style.container3}>
            <TextInput 
            style={style.campoTexto1}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'}
            onChangeText={setNovaTarefa}
            maxLength={100}
            value={novaTarefa}
            />

            <TouchableOpacity style={style.button} onPress={adcionarTarefa}>
                <Image source={require('../../../assets/adc.png')} style={style.imagemButtonMais} />
            </TouchableOpacity>
        </View>

{/*INÍCIO CONTAINER 2*/}
        
        <View style={style.container2}>

        <View style={style.viewContador}>
            <View style={style.viewSubContador}>
                <Text style={style.textContador1}>Criadas</Text>
                    <View style={style.bordaText}>
                        <Text style={style.textContadorNumber}>0</Text>
                    </View>
            </View>

            <View style={style.viewSubContador2}>
                <Text style={style.textContador2}>Concluídas</Text>
                    <View style={style.bordaText}>
                        <Text style={style.textContadorNumber}>0</Text>
                    </View>
            </View>
        </View>

        <View style={style.containerLine}>
            <View style={style.line}/>
        </View>

        <FlatList 
            data={tarefas}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Tarefas 
                    key={item}
                    tarefaDoDia={item} 
                    onRemove={() => removerTarefa(item)}/>
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
            
            <View>
                <View style={style.containerEmpty}>
                    <Image source={require('../../../assets/empty.png')} style={style.emptyImage}/>
                </View>
                
                    <Text style={style.empty1}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={style.empty2}>Crie tarefas e organize seus itens a fazer</Text>         
            </View>
        }
        />  

        </View>

{/*FIM CONTAINER 2-----------------*/}

        </View>
    )
}

