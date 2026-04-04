/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, StyleSheet } from 'react-native';
import DashboardBgImg from '../assets/dashboard-bg-img.svg';
import FixerFlipLogo from '../assets/fixer-flip-logo.svg';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* SVG Background */}
      <DashboardBgImg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={styles.svg}
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={['#FFFFFF', 'rgba(255,255,255,0)']}
        style={styles.gradient}
      />

      {/* Logo */}
      <View
        style={{
          position: 'absolute',
          top: 50,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <FixerFlipLogo width={139} height={26} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View>
          <Text style={styles.welcome}>Welcome Back 👋</Text>
          <Text style={styles.name}>Hi, Sarah</Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
  },
  svg: {
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    color: '#1E2939',
    fontWeight: '600',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#565656',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
  },
});
