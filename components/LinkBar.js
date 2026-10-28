import { StyleSheet, View } from 'react-native';
import LinkButton from './LinkButton';

const LinkBar = () => {

    return (
        <View style={styles.container}>
            <LinkButton linkPath='/' btnTitle="Home"/>
            <LinkButton linkPath='/about' btnTitle="About"/>
            <LinkButton linkPath='/gifs' btnTitle="GIFS"/>
            <LinkButton linkPath='/weather' btnTitle="Weather"/>
        </View>
    );
}

export default LinkBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
    },
    btn: {
        height: 50,
        width: 100,
        padding: 3,
        backgroundColor: 'pink',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    linkBtn: {
        height: 50,
        width: 100,
        padding: 3,
        backgroundColor: 'pink',
        margin: 5,
        textAlign: 'center',
        borderRadius: 10,
    }
});