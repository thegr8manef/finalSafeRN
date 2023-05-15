import { View ,Animated,SafeAreaView ,StatusBar,Image } from 'react-native'
import React, {useEffect, useRef, Component} from 'react';
import styles from './SplashStyles'
import colors from '../../../assets/colors';

export default function SplashScreen() {
  return (
<SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      
      <View style={styles.container_logo_splash}>
        <Image
        style={styles.logo_splash}
        source={require('../../../assets/img/logo_splash.png')}
      />
    
      </View>
      <View  style={styles.container_squares_splash_img}>
            <Image
        style={styles.squares_splash_img}
        source={require('../../../assets/img/img_squares_splash.png')}
      />
            <Image
        style={styles.logo_eiffage}
        source={require('../../../assets/img/logo_eiffage.png')}
      />
      </View>
    </SafeAreaView>
  )
  
}