import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
export default class DangNhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taikhoan: "",
      matkhau: "",
      rematkhau:"",
      dk: "",
      showPass1: true,
      press1: false,
      showPass2: true,
      press2: false
    };
  }
  showPass1 = () => {
    if (this.state.press1 == false)
      this.setState({ showPass1: false, press1: true });
    else this.setState({ showPass1: true, press1: false });
  };
  showPass2 = () => {
    if (this.state.press2 == false)
      this.setState({ showPass2: false, press2: true });
    else this.setState({ showPass2: true, press2: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>Goods Farming</Text>

        <View style={styles.inputcontainer}>
          <IonIcon
            style={styles.icon}
            name="ios-person"
            size={16}
            color="blue"
          />
          <TextInput
            style={styles.user}
            placeholder="Username"
            onChangeText={taikhoan => this.setState({ taikhoan })}
          ></TextInput>
        </View>
        <View style={styles.inputcontainer}>
          <IonIcon style={styles.icon} name="ios-lock" size={16} color="blue" />
          <TextInput
            style={styles.pass}
            placeholder="Password"
            secureTextEntry={this.state.showPass1}
            onChangeText={matkhau => this.setState({ matkhau })}
          ></TextInput>

          <TouchableOpacity
            style={styles.btneye}
            onPress={this.showPass1.bind(this)}
          >
            <IonIcon
              name={this.state.press1 == false ? "ios-eye" : "ios-eye-off"}
              size={16}
              color="blue"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputcontainer}>
          <IonIcon style={styles.icon} name="ios-lock" size={16} color="blue" />
          <TextInput
            style={styles.pass}
            placeholder="Password"
            secureTextEntry={this.state.showPass2}
            onChangeText={rematkhau => this.setState({ rematkhau })}
          ></TextInput>

          <TouchableOpacity
            style={styles.btneye}
            onPress={this.showPass2.bind(this)}
          >
            <IonIcon
              name={this.state.press2 == false ? "ios-eye" : "ios-eye-off"}
              size={16}
              color="blue"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={()=> console.log(this.state.taikhoan,this.state.matkhau,this.state.rematkhau)}
        >
          <Text style={styles.buttontext} >Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.add}>
          <TouchableOpacity>
            <Text style={styles.acc}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DangNhap')}>
            <Text style={styles.acc}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "azure",
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  caption: {
    fontWeight: "bold",
    fontSize: 32,
    color: "green"
  },
  user: {
    paddingLeft: 45,
    paddingRight: 15,
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15
  },
  pass: {
    paddingLeft: 45,
    paddingRight: 15,
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15
  },
  button: {
    margin: 15,
    height: 50,
    width: 300,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttontext: {
    borderColor: "green",
    color: "green",
    fontSize: 25
  },
  active: {
    backgroundColor: "green"
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 20
  },
  inputcontainer: {
    marginTop: 10,
    marginHorizontal: 20
  },
  btneye: {
    position: "absolute",
    top: 14,
    right: 20
  },
  acc: {
    margin: 10,
    textDecorationLine: "underline",
    color: "blue"
  },
  add: {
    marginTop: 20,
    flexDirection: "row"
  }
});