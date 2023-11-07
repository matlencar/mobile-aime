import { StyleSheet, View, } from "react-native";
import Header from "../../../components/Header";
import SearchBar from "../../../components/SearchBar";
import ProdutoCustom from "../../../components/produtos";




export default function Home() {
    return(
        <View style={styles.container}>
            <Header name="Pedro Henrique"/>
            <SearchBar/>
            <ProdutoCustom
             title="Placa de vídeo GeForce® GTX 1660 SUPER™ OC 6G"
             images={[
                require('./img/placa1.jpg'),
                require('./img/placa2.jpg'),
                require('./img/placa3.jpg'),
             ]}
             price="R$ 1.599,90"
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5F5F5',
    },

});