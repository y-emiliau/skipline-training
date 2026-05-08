import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

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
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    fontSize: 17,
    marginBottom: spacing.lg,
    color: '#4B5563',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.text,
    borderRadius: radius.md,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonText: {
    color: colors.background,
    fontWeight: '700',
  },
});
