import { Button, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

const NavBar = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Button title="Home" onPress={() => {
                router.navigate('/');
            }} />
            <Button title="About" onPress={() => {
                router.navigate('/about');
            }} />
        </View>
    );
}

export default NavBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
    }
});