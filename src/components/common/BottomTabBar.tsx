import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

type BottomTabItem = {
  key: string;
  label: string;
  isActive?: boolean;
};

interface BottomTabBarProps {
  items: BottomTabItem[];
}

const BottomTabBar = ({ items }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <TouchableOpacity key={item.key} style={styles.tabItem} activeOpacity={0.8}>
          <View style={[styles.iconPlaceholder, item.isActive && styles.iconPlaceholderActive]} />
          <Text style={[styles.label, item.isActive && styles.labelActive]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.TEXT_PRIMARY_10,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    gap: 4,
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.TEXT_PRIMARY_20,
  },
  iconPlaceholderActive: {
    backgroundColor: COLORS.PRIMARY,
  },
  label: {
    ...TYPOGRAPHY.BODY_5_MEDIUM,
    color: COLORS.TEXT_PRIMARY_50,
  },
  labelActive: {
    color: COLORS.PRIMARY,
  },
});

export default BottomTabBar;
