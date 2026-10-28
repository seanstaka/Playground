import { Link } from 'expo-router';
import { StyleSheet, Text, Pressable } from 'react-native';


export default function LinkButton({btnTitle, linkPath}) {
  return (
      <Link href={linkPath} asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>{btnTitle}</Text>
        </Pressable>
      </Link>
  );
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#f0387e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: '#300d2b',
    borderRadius: 8,
  },
  btnText: {
    color: '#300d2b',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
