import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

const MemeCard = ({ item, whenPressed }) => {
    return (
        <View style={styles.card} >
            <View style={styles.infoContainer}>
                <Text style={styles.gameTitle}>{item.name}</Text>
            </View>
            <Pressable onPress={() => {
                whenPressed(item.id);
            }}>
                <Image source={{ uri: item.url }} style={styles.coverImage} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#1E293B',
        borderRadius: 12,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#334155',
    },
    coverImage: {
        width: 65,
        height: 65,
        borderRadius: 8,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    gameTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#F8FAFC',
    },
    developerName: {
        fontSize: 14,
        color: '#94A3B8',
        marginTop: 2,
    },
    metaText: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 4,
    },
    scoreContainer: {
        backgroundColor: '#0EA5E9',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
    },
    scoreText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
});

export default MemeCard;
