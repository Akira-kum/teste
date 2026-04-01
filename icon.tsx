import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function IconsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Recursos</Text>
          <Text style={styles.subtitle}>Explore as categorias abaixo</Text>
        </View>

        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity style={[styles.card, { backgroundColor: '#6C63FF' }]}>
            <Text style={styles.iconPlaceholder}>🚀</Text>
            <Text style={styles.cardLabel}>Início</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={[styles.card, { backgroundColor: '#FF6584' }]}>
            <Text style={styles.iconPlaceholder}>📊</Text>
            <Text style={styles.cardLabel}>Status</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity style={[styles.card, { backgroundColor: '#4CAF50' }]}>
            <Text style={styles.iconPlaceholder}>⚙️</Text>
            <Text style={styles.cardLabel}>Ajustes</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity style={[styles.card, { backgroundColor: '#2196F3' }]}>
            <Text style={styles.iconPlaceholder}>📱</Text>
            <Text style={styles.cardLabel}>Apps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Atividade React Native - ADS</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  card: {
    width: '47%', 
    aspectRatio: 1,
    borderRadius: 25,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  iconPlaceholder: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    color: '#999',
    fontSize: 12,
  }
});