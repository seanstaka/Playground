import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

  const GameCard = ({ item }) => {
    return (
          <Pressable
      style={styles.card}
      onPress={() => alert(`Launching ${item.title}...`)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.developerName}>{item.developer}</Text>
        <Text style={styles.metaText}>
          {item.genre} • {item.platform}
        </Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{item.release_date}</Text>
      </View>
    </Pressable>);

  }

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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

export default GameCard;
