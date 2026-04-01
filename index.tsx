import { Image } from 'expo-image';
import { StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D1E8FF', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={styles.headerContent}>
           {/* Aqui você pode colocar um emoji ou o ícone do gatinho */}
          <ThemedText style={{ fontSize: 80 }}>🐱</ThemedText> 
        </ThemedView>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.container}>
        {/* Imagem Centralizada como na Atividade */}
        <Image
          source="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png"
          style={styles.mainImage}
          contentFit="contain"
        />
        
        <ThemedView style={styles.cardInfo}>
          <ThemedText type="subtitle">Atividade React Native</ThemedText>
          <ThemedText>
            Esta é a tela inicial com o gatinho centralizado, utilizando os componentes do template.
          </ThemedText>
        </ThemedView>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A1CEDC',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 40,
  },
  mainImage: {
    height: 200,
    width: 200,
  },
  cardInfo: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    width: '100%',
    gap: 10,
  },
});