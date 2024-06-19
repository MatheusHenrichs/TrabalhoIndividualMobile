import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';


interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState<string>('');

  const handleInputChange = (value: string) => {
    setPlayerName(value);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.barraPesquisa, styles.placeholderText]}
        value={playerName}
        onChangeText={handleInputChange}
        placeholder='Digite o nome do jogador ou time'
        placeholderTextColor='#888888'
      />
      <TouchableOpacity style={styles.botao} onPress={handleSearch}>
        <Text style={styles.botaoTexto}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barraPesquisa: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    width: 300
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: '#0066cc',
  },
  botaoTexto: {
    fontSize: 16,
    color: '#fff',
  },
  placeholderText: {
    fontSize: 17
  }
});