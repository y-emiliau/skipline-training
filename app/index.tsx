import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>SkipLine</Text>
      <Text style={styles.description}>Expo Router navigation is ready.</Text>

      <Link href="/details" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open details</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    fontSize: 17,
    marginBottom: 24,
    color: '#4B5563',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#111827',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
