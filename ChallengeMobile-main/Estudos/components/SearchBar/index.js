import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="O que gostaria?"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2e9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  searchButton: {
    backgroundColor: '#e42b37',
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchBar;