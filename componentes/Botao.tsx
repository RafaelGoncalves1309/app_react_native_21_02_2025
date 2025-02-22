import React from "react";
import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


type BotaoProps = {
    titulo: string;
    onPress: ()=> void;

}

const Botao: React.FC<BotaoProps> = ({ titulo, onPress }) => {
    return (
      <Button onPress={onPress} title={titulo} color={"000"}> 
      
      </Button>
  
    );
}

export default Botao;