import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const LinkBar = () => {

    return (
        <View style={styles.container}>
            <Link href='/' asChild>
                <Pressable style={styles.btn}>
                    <Text>Home</Text>
                </Pressable>
            </Link>
            <Link href='/about' style={styles.linkBtn}>About</Link>
            <Link href='/gifs' asChild>
                <Pressable style={styles.btn}>
                    <Text>GIFS</Text>
                </Pressable>
            </Link>
            <Link href='/weather' asChild>
                <Pressable style={styles.btn}>
                    <Text>WEATHER</Text>
                </Pressable>
            </Link>
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