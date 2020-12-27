import * as React from 'react';
import { Button, View, Text, Image,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
     
      <Text>Hoş geldin! Birazdan karşına verdiğin cevaplara göre şekillenen bir hikaye gelecek. Hazır mısın?</Text>
      <Button
      style={{color:'#b0bec5'}}
        title="Hazırım!"
        onPress={() => navigation.navigate('Bilmece')}
      />
     <Text style={{fontStyle:'italic', color: '#bdbdbd',  position:'absolute',
    
    top:'100%'}}>spoiler:mutlu bir son yok... </Text>
    </View>
  );
}

function Quiz({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Korkunç bir ormanda yapayalnızsın. Bir anda arkandan sesler gelmeye başlıyor ve ne olduğunu anlamadığın yaratıklar sana doğru yaklaşıyor!... </Text>
      <Button title= "Yiğitliğin yüzde doksanı kaçmaktır demişler...Kaçarım."
      onPress={()=>navigation.navigate('soru2')}/>

      <Button title= "Kalıp durumu analiz ederim. Belki saldırgan görünen zararsız yaratıklardır?"
      onPress={()=>navigation.navigate('Öldün')}/>
   
    </View>
  );
}

function Soru2({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Asla pes etmiyorlar. Seni kovalamaya devam ediyorlar. Sen... </Text>
      <Button title= "Kaçmaya devam ederim."
      onPress={()=>navigation.navigate('soru3')}/>
      <Button title= "Aman! Kaç kaç nereye kadar, teslim olurum."
      onPress={()=>navigation.navigate('Öldün1')}/>
   
    </View>
  );
}

function Soru3({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Git gide yaklaştıklarını duyuyorsun. Nefes nefesesin ve gücünün tükendiğini hissediyorsun. O da ne? Köşede gizlenebileceğin bir karartı var... </Text>
      <Button title= "Kaçarak hayatta kaldım, devam!"
      onPress={()=>navigation.navigate('Öldün2')}/>
      <Button title= "Saklanıp saldıraya geçerim!"
      onPress={()=>navigation.navigate('Öldün3')}/>
   
    </View>
  );
}

function oldun({navigation}){
  return(
    <View style={styles.container}>
    <Text style={{textAlign: 'center'}}>Tebrikler Sherlock.
     </Text>
    <Text style={styles.oldun}>ÖLDÜN!</Text>
    <Image source={imagepath} style={{height:100, width:100}}/>
    </View>
  );
}
function oldun1({navigation}){
  return(
    <View style={styles.container}>
    <Text>Vazgeçmeyi düşündüğünde başta neden koşmaya başladığını hatırlamalıydın!</Text>
    <Text style={styles.oldun}>ÖLDÜN</Text>
    </View>
  );
}
function oldun2({navigation}){
  return(
    <View style={styles.container}>
    <Text>Cidden mi? Eh ama.. Yiğitliğin yüzde doksanı kaçmak dedik de sen yüzde onunu unuttun sanırım... </Text>
    <Text style={styles.oldun}>ÖLDÜN</Text>
    </View>
  );
}

function oldun3({navigation}){
  return(
    <View style={styles.container}>
    <Text>Savaştın, direndin ama... Karşında tanımlanamaz yaratıklar vardı. Hayatta kalmayı ummuyordun değil mi? </Text>
    <Text style={styles.oldun}>ÖLDÜN</Text>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bilmece" component={Quiz} />
        <Stack.Screen name="Öldün" component={oldun} />
        <Stack.Screen name="soru2" component={Soru2} />
        <Stack.Screen name="soru3" component={Soru3} />
        <Stack.Screen name="Öldün1" component={oldun1} />
        <Stack.Screen name="Öldün2" component={oldun2} />
        <Stack.Screen name="Öldün3" component={oldun3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {padding:15, margin:10, flex: 1, alignItems: 'center', justifyContent: 'center'},
  text:{backgroundColor:'#efebe9', fontWeight: 'bold', borderRadius: 15 },
  oldun: {color: 'red', fontWeight: 'bold'},
  buttondesign: {color:'#b0bec5', borderRadius:15}
})








export default App;
