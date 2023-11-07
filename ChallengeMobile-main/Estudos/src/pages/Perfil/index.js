import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import { View,  Image, StyleSheet, TextInput, Button } from 'react-native';
import perfil from './img/perfil.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Estados para controlar a visibilidade dos placeholders
  const [namePlaceholderVisible, setNamePlaceholderVisible] = useState(true);
  const [emailPlaceholderVisible, setEmailPlaceholderVisible] = useState(true);
  const [agePlaceholderVisible, setAgePlaceholderVisible] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const savedName = await AsyncStorage.getItem('name');
      const savedEmail = await AsyncStorage.getItem('email');
      const savedAge = await AsyncStorage.getItem('age');

      if (savedName !== null) {
        setName(savedName);
        setNamePlaceholderVisible(false); 
      }

      if (savedEmail !== null) {
        setEmail(savedEmail);
        setEmailPlaceholderVisible(false); 
      }

      if (savedAge !== null) {
        setAge(savedAge);
        setAgePlaceholderVisible(false); 
      }
    } catch (error) {
      console.error('Erro ao carregar os dados do AsyncStorage:', error);
    }
  };

  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('age', age);
      console.log('Dados salvos com sucesso!');

      // Remova os placeholders após salvar
      setNamePlaceholderVisible(false);
      setEmailPlaceholderVisible(false);
      setAgePlaceholderVisible(false);
    } catch (error) {
      console.error('Erro ao salvar os dados no AsyncStorage:', error);
    }
  };

  return (
    <View>
      <Header name="Pedro Henrique" />
      <SearchBar />
      <View style={styles.container}>
        <Image source={perfil} style={styles.profileImage} />
        <View style={styles.editableField}>
          <Icon name="pencil" size={20} color="gray" style={styles.editIcon} />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder={namePlaceholderVisible ? 'Nome' : ''}
          />
        </View>
        <View style={styles.editableField}>
          <Icon name="pencil" size={20} color="gray" style={styles.editIcon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder={emailPlaceholderVisible ? 'Email' : ''}
          />
        </View>
        <View style={styles.editableField}>
          <Icon name="pencil" size={20} color="gray" style={styles.editIcon} />
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={(text) => setAge(text)}
            placeholder={agePlaceholderVisible ? 'Idade' : ''}
          />
        </View>
        <Button style={styles.button} title="Salvar" onPress={saveUserData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  editableField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  editIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },

  button: {
    backgroundColor: '#e42b37',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center'
  }
});

export default ProfileScreen;
