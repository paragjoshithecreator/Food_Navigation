import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Demo() {
  const [update, setUpdate] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.warn("Api data ")
  },[data]);
  useEffect(() => {
    console.warn("update")
  },[update]);
 

  return (
    <View style={styles.container}>
      <Text style={styles.font}>{data}useEffect Ex{update}</Text>
      <Button title="change" onPress={() => setUpdate(update + 1)} />
      <Button title="DataUpdate" onPress={() => setData(data + 1)} />
      <UserData info ={(data, update)} />
      <StatusBar style="auto" />
    </View>
  );
}
let UserData = (props) => {
  useEffect(() => {
    console.warn('run this data code ')
  }, [props.info.data])
  useEffect(() => {
    console.warn('run this update code ')
  }, [props.info.update])
  return (<View>
    <Text>yes Data: {props.info.data}</Text>
    <Text>yes update: {props.info.update}</Text>
    
  </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
  },
});
