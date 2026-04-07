import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeSearchIcon from '../../assets/home-search-icon.svg';
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowOuter}>
        <View style={styles.shadowInner}>
          <View style={styles.shadowSmall}>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>Fixer Analysis</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.shadowOuter}>
        <View style={styles.shadowInner}>
          <View style={styles.shadowSmall}>
            <Pressable style={styles.primaryPressable}>
              <LinearGradient
                colors={[COLORS.PRIMARY_BUTTON, COLORS.PRIMARY_BUTTON_DARK]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.primaryButton}
              >
                <HomeSearchIcon width={18} height={18} />
                <Text style={styles.primaryText}>Find My Next Flip</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 24,
    gap: 16,
  },
  shadowOuter: {
    borderRadius: 60,
    shadowColor: '#6F8CB0',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 7,
  },
  shadowInner: {
    borderRadius: 60,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 7,
  },
  shadowSmall: {
    borderRadius: 60,
    shadowColor: '#728EAB',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  secondaryButton: {
    height: 56,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: COLORS.BACKGROUND_COLOR,
    backgroundColor: COLORS.SECONDARY_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    ...TYPOGRAPHY.BODY_2_SEMIBOLD,
    color: COLORS.TEXT_PRIMARY_COLOR,
  },
  primaryPressable: {
    borderRadius: 60,
    borderWidth: 4,
    borderColor: COLORS.BACKGROUND_COLOR,
  },
  primaryButton: {
    height: 56,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  primaryText: {
    ...TYPOGRAPHY.BODY_2_SEMIBOLD,
    color: COLORS.BACKGROUND_COLOR,
  },
});

export default QuickActions;
