import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

interface PortfolioCardProps {
  activeDeals: number;
  averageRoi: string;
  flipScore: string;
}

const PortfolioCard = ({
  activeDeals,
  averageRoi,
  flipScore,
}: PortfolioCardProps) => {
  return (
    <View style={styles.shell}>
      <View style={styles.cardShadowLayer}>
        <View style={styles.card}>
          <View> 
            <Text style={styles.title}>Your Portfolio</Text>

            <View style={styles.metricsRow}>
              <View>
                <Text style={styles.metricLabel}>Active Deals</Text>
                <Text style={styles.metricValue}>{activeDeals}</Text>
              </View>

              <View>
                <Text style={styles.metricLabel}>Avg ROI</Text>
                <Text style={[styles.metricValue, styles.roiValue]}>
                  {averageRoi}
                </Text>
              </View>

              <View>
                <Text style={styles.metricLabel}>FlipScore</Text>
                <Text style={styles.metricValue}>{flipScore}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shell: {
    marginHorizontal: 24,
    marginTop: -45,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    shadowColor: '#FFFFF99',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
    overflow: 'hidden',
    height: 120,
    justifyContent: 'center',
  },
  cardShadowLayer: {
    borderRadius: 20,
    shadowColor: '#A3B1C666',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    ...TYPOGRAPHY.BODY_2_SEMIBOLD,
    color: COLORS.TEXT_PRIMARY_COLOR,
    fontWeight: '600',
    marginBottom: 4,
  },
  metricsRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  metricLabel: {
    ...TYPOGRAPHY.BODY_4_REGULAR,
    color: COLORS.TEXT_PRIMARY_80,
    marginBottom: 4,
  },
  metricValue: {
    ...TYPOGRAPHY.HEADING_6_SEMIBOLD,
    color: COLORS.TEXT_PRIMARY_COLOR,
  },
  roiValue: {
    color: COLORS.SUCCESS,
  },
});

export default PortfolioCard;
