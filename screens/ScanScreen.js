import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ScanScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Quyền bị từ chối", "Bạn cần cấp quyền để chọn ảnh!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <ImageBackground 
        source={selectedImage ? { uri: selectedImage } : require('../assets/juice.png')} 
        style={styles.backgroundImage}
      >
        {/* Nút quay lại */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Text style={styles.label}>Lauren's</Text>
        <Text style={styles.name}>Orange Juice</Text>

        {/* Nút chọn ảnh */}
        <TouchableOpacity style={styles.addButton} onPress={pickImage}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { 
    position: 'absolute', 
    top: 0, left: 0, right: 0, 
    width: '100%', 
    height: '100%',  
    resizeMode: 'cover',  
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  },
  backButton: { 
    position: 'absolute', 
    top: 50, left: 20, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 10, 
    borderRadius: 10 
  },
  backText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  productInfo: {
    width: 292,
    height: 82,
    position: 'absolute',
    top: 677,
    left: 42,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5
  },
  label: { fontSize: 14, color: 'gray' },
  name: { fontSize: 24, fontWeight: 'bold' },

  addButton: { 
    position: 'absolute', 
    right: 10, 
    top: '60%', 
    transform: [{ translateY: -22.5 }], 
    width: 45, 
    height: 45,
    borderRadius: 5, 
    backgroundColor: '#3498db', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addButtonText: { 
    fontSize: 24, 
    color: 'white', 
    fontWeight: 'bold' 
  },
});

export default ScanScreen;
