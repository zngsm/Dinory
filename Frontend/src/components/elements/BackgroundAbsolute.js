import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

function BackgroundAbsolute({imageSrc}) {
  return <ImageBackground source={imageSrc} style={styles.backgroundImage} />;
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default BackgroundAbsolute;
