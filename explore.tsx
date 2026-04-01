import { StyleSheet, View, Platform } from 'react-native';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8E94F2', dark: '#23254E' }}
      headerImage={
        <IconSymbol
          size={310}
          color="rgba(255, 255, 255, 0.3)"
          name="cpu.fill"
          style={styles.headerImage}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.mainTitle}>
          Dashboard 🚀
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoSection}>
        <ThemedText type="subtitle">Explorando o Expo Router</ThemedText>
        <ThemedText style={styles.description}>
          Esta interface utiliza TypeScript e navegação baseada em arquivos. 
          O visual foi otimizado para ser fluido e moderno.
        </ThemedText>
      </ThemedView>

      {/* Seção de Status com Ícones Rápidos */}
      <View style={styles.statusRow}>
        <View style={styles.statusItem}>
          <IconSymbol name="bolt.fill" size={24} color="#FFD700" />
          <ThemedText type="defaultSemiBold">Rápido</ThemedText>
        </View>
        <View style={styles.statusItem}>
          <IconSymbol name="lock.fill" size={24} color="#4CAF50" />
          <ThemedText type="defaultSemiBold">Seguro</ThemedText>
        </View>
        <View style={styles.statusItem}>
          <IconSymbol name="iphone" size={24} color="#2196F3" />
          <ThemedText type="defaultSemiBold">Nativo</ThemedText>
        </View>
      </View>

      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          Desenvolvido com React Native e Expo SDK 50+
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -60,
    left: -20,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  mainTitle: {
    fontFamily: Fonts.rounded, // Usando a fonte arredondada do tema
    fontSize: 32,
  },
  infoSection: {
    gap: 10,
    paddingVertical: 10,
  },
  description: {
    lineHeight: 24,
    opacity: 0.8,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  statusItem: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    padding: 15,
    borderRadius: 20,
    width: '30%',
  },
  footer: {
    marginTop: 50,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(150, 150, 150, 0.2)',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    opacity: 0.5,
  }
});