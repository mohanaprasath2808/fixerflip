import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DashboardBgImg from '../../assets/dashboard-bg-img.svg';
import FixerFlipLogo from '../../assets/fixer-flip-logo.svg';
import { COLORS } from '../../constants/theme';

interface DashboardHeaderProps {
  welcomeText: string;
  userName: string;
  avatarUrl: string;
}

const DashboardHeader = ({
  welcomeText,
  userName,
  avatarUrl,
}: DashboardHeaderProps) => {
  return (
    <View style={styles.container}>
      <DashboardBgImg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin meet"
        style={styles.background}
      />

      <LinearGradient
        colors={[
          'rgba(255,255,255,0.82)',
          'rgba(255,255,255,0.08)',
          'rgba(255,255,255,0)',
        ]}
        locations={[0, 0.45, 1]}
        style={styles.topOverlay}
      />

      <View style={styles.logoRow}>
        <FixerFlipLogo width={170} height={32} />
      </View>

      <View style={styles.contentRow}>
        <View>
          <Text style={styles.welcomeText}>{welcomeText}</Text>
          <Text style={styles.userNameText}>{`Hi, ${userName}`}</Text>
        </View>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 320,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  logoRow: {
    marginTop: 20,
    alignItems: 'center',
  },
  contentRow: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.56,
    color: '#1E2939',
  },
  userNameText: {
    fontFamily: 'SF Pro Text',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.18,
    color: COLORS.TEXT_PRIMARY_80,
    marginTop: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export default DashboardHeader;
