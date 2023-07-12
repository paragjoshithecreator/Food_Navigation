import { Text, View, Button } from "react-native";
function UserScreen({ navigation }) {
  function drawerOpenHandler() {
    //navigation.toggleDrawer();
  }

  return (
    <View>
      <Text>User</Text>
      <Button title="Open Drawer" onPress={drawerOpenHandler} />
    </View>
  );
}
export default UserScreen;
