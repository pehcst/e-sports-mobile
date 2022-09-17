import { View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import Heading from "../../components/Header";
import GameCard from "../../components/GameCard";
import { GAMES } from "../../utils/games";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'></Heading>
      <FlatList
        contentContainerStyle={styles.contentList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
};

export default Home;
