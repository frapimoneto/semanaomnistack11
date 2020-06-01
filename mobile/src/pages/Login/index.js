import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
 
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import LogoImg from '../../assets/logo.png'

import { withFormik } from 'formik'

function FormLogin(props) {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={LogoImg} />
      </View>

      <View style={styles.content}>

        <View style={[styles.entry, { paddingTop: 0 }]}>
          <TextInput
            style={styles.formEntry}
            value={props.values.email}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={text => props.setFieldValue('email', text)}
          />
          <FontAwesome style={styles.icon} name="user-circle" size={25} color="#000" />
        </View>

        <View style={{ paddingTop: 15 }}>
          <View style={styles.entry}>
            <TextInput
              style={styles.formEntry}
              value={props.values.senha}
              placeholder="Senha"
              placeholderTextColor="#000"
              onChangeText={text => props.setFieldValue('senha', text)}
              secureTextEntry={true}
            />
            <FontAwesome style={styles.icon} name="lock" size={25} color="#000" />
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forget} onPress={() => { }}>
          <Text style={styles.forgetText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forget} onPress={() => { }}>
          <Text style={styles.forgetText}>Não tenho conta, cadastrar-me</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', senha: '' }),

  handleSubmit: (values) => {
    console.log(values)
  }
})(FormLogin)
