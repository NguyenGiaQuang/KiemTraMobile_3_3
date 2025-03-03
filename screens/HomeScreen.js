import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello <Text style={styles.wave}>👋</Text></Text>
        <Text style={styles.subtitle}>Christie Doe</Text>
        <Text style={styles.insights}>Your Insights</Text>
      </View>

      {/* Các trang */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Icon name="scan-outline" size={30} color="#3498db" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="alert-circle-outline" size={30} color="red" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>
      </View>

      {/* Chuyen sang scan */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.buttonText}>Go to Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { 
    width: '100%', 
    height: 'auto', 
    paddingTop: 63, 
    paddingLeft: 23, 
    marginBottom: 20 
  },
  title: { 
    fontFamily: 'Helvetica Now Display', 
    fontWeight: '700', 
    fontSize: 22, 
    lineHeight: 32.34, 
    letterSpacing: 0.03 * 22
  },
  wave: {
    fontFamily: 'Helvetica Now Display',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 23.52,
    letterSpacing: 0.03 * 16
  },
  subtitle: { 
    fontFamily: 'Helvetica Now Display', 
    fontWeight: '700', 
    fontSize: 22, 
    lineHeight: 32.34, 
    letterSpacing: 0.03 * 22, 
    color: 'gray' 
  },
  insights: {
    width: 108,
    height: 26,
    marginTop: 10,
    marginLeft: 0,
    fontFamily: 'Helvetica Now Display',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 26.46,
    letterSpacing: 0.03 * 18
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginTop: 180, 
    marginLeft: 20 
  },
  card: { 
    width: 158.16, 
    height: 176.82, 
    borderRadius: 16, 
    padding: 20, 
    backgroundColor: '#f1f1f1', 
    marginBottom: 10, 
    alignItems: 'center' 
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  cardSubtitle: { fontSize: 14, color: 'gray' },
  button: { marginTop: 20, backgroundColor: '#3498db', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

export default HomeScreen;
