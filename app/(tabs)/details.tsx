import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.description}>This is the /details route.</Text>

      <Link href="/" style={styles.link}>
        Back home
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
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    fontSize: 17,
    marginBottom: 24,
    color: '#4B5563',
  },
  link: {
    color: '#2563EB',
    fontWeight: '700',
  },
});
