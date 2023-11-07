import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ProdutoCustom = ({ title, images, price, onPress }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [CEPValue, setCEPValue] = useState('');

  const handleImagePress = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handleCEPhange = (text) => {
    setCEPValue(text);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={handleImagePress}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Informe o CEP "
        value={CEPValue}
        onChangeText={handleCEPhange}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: '70%',
    height: 200,
    marginTop: 40,
    marginBottom: 30,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  price: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#e42b37',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProdutoCustom;