/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import PortfolioCard from '../../components/PortfolioCard';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <PortfolioCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
