import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../trabalho-individual-react/components/barraPesquisa';
import GetPlayerInfo from '../trabalho-individual-react/components/jogadorInfo';
import GetTeamInfo from '../trabalho-individual-react/components/timeInfo';


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPlayerInfo, setShowPlayerInfo] = useState<boolean>(false);
  const [showTeamInfo, setShowTeamInfo] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowPlayerInfo(true);
    setShowTeamInfo(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowPlayerInfo(false);
    setShowTeamInfo(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicação de estatísticas esportivas</Text>
      <StatusBar style="auto" />
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      <ScrollView>
        {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} />}
        {showTeamInfo && <GetTeamInfo searchQuery={searchQuery} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;