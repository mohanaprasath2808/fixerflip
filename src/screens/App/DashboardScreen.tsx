import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabBar from '../../components/common/BottomTabBar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import PortfolioCard from '../../components/dashboard/PortfolioCard';
import QuickActions from '../../components/dashboard/QuickActions';
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

const HOME_SECTIONS = [
  'Deal Details',
  'Saved Searches',
  'Growth Zones',
  'Top Buyers',
  'Best AI Flip',
  'Investor Tools',
  'Community and Challenge',
  'Leaderboard and Contest',
  'Feed and Trending',
];

const BOTTOM_NAV_ITEMS = [
  { key: 'home', label: 'Home', isActive: true },
  { key: 'search', label: 'Search' },
  { key: 'calculator', label: 'Calculator' },
  { key: 'chat', label: 'Message' },
  { key: 'profile', label: 'Profile' },
];

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader
          welcomeText="Welcome Back 👋"
          userName="Sarah"
          avatarUrl="https://i.pravatar.cc/120?img=47"
        />
        <PortfolioCard activeDeals={3} averageRoi="32%" flipScore="7.9" />
        <QuickActions />
        {HOME_SECTIONS.map(section => (
          <View key={section} style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{section}</Text>
            <Text style={styles.sectionSubtitle}>Section placeholder - we will build this next.</Text>
          </View>
        ))}
      </ScrollView>
      <BottomTabBar items={BOTTOM_NAV_ITEMS} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.SURFACE_COLOR,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 0,
    paddingBottom: 20,
    gap: 10,
  },
  sectionCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderWidth: 1,
    borderColor: COLORS.TEXT_PRIMARY_10,
  },
  sectionTitle: {
    ...TYPOGRAPHY.BODY_2_SEMIBOLD,
    color: COLORS.TEXT_PRIMARY_COLOR,
  },
  sectionSubtitle: {
    ...TYPOGRAPHY.BODY_4_MEDIUM,
    color: COLORS.TEXT_PRIMARY_60,
    marginTop: 4,
  },
});

export default DashboardScreen;
