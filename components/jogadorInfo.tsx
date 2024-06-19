import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';



interface Player {
  nome: string;
  time: string;
  foto: string;
  numero: string;
  idade: string;
  qtdGolsMarcados: string;
  posicao: string;
}

interface Props {
  searchQuery: string;
}

const GetPlayerInfo: React.FC<Props> = ({ searchQuery }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
        const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const filteredPlayers = response.data.map((player: any) => ({
          nome: player.player_name,
          time: player.team_name,
          foto: player.player_image,
          numero: player.player_number,
          idade: player.player_age,
          qtdGolsMarcados: player.player_goals,
          posicao: player.player_type,
        }));
        setPlayers(filteredPlayers);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setPlayers([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Limpa a informação anterior após uma nova pesquisa
    setPlayers([]);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {players.map((player) => (
        <View key={player.nome} style={styles.playerCard}>
          <Text style={styles.playerName}>{player.nome}</Text>
          <Text>Time: {player.time}</Text>
          {player.foto && <Image source={{ uri: player.foto }} style={styles.playerImage} />}
          <Text>Posição: {player.posicao}</Text>
          <Text>Número da camisa: {player.numero}</Text>
          <Text>Idade: {player.idade}</Text>
          <Text>Gols marcados: {player.qtdGolsMarcados}</Text>
        </View>
      ))}
    </View>
  );
};

export default GetPlayerInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  playerCard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  playerImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});