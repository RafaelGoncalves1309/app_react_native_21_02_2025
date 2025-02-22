import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Botao from "./componentes/Botao";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eita!</Text>
      <Botao titulo="Pressione-me" onPress={() => Alert.alert("Botão pressionado!")} > 

      </Botao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff498',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    elevation: 10,
  },
  title:{
fontSize: 45,
color: 'white',
fontWeight: "200",
fontFamily: 'Verdana'

  }

});
