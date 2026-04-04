/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';

const PortfolioCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.portfolio}>Your Portfolio</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <View>
          <Text style={styles.portfolioLabel}>Active Deals</Text>
          <Text style={styles.portfolioValue}>3</Text>
        </View>

        <View>
          <Text style={styles.portfolioLabel}>Avg ROI</Text>
          <Text style={[styles.portfolioValue, { color: '#00A63E' }]}>32%</Text>
        </View>

        <View>
          <Text style={styles.portfolioLabel}>FlipScore</Text>
          <Text style={styles.portfolioValue}>7.9</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: -30, // 👈 IMPORTANT (adjust like -50 / -70)
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F5F7FA',
    shadowColor: '#A3B1C6',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  portfolio: {
    fontWeight: 600,
    fontSize: 16,
    color: '#2C2C2C',
  },
  portfolioLabel: {
    fontWeight: 400,
    fontSize: 12,
    color: '#565656',
  },
  portfolioValue: {
    fontWeight: 600,
    fontSize: 20,
    color: '#2C2C2C',
  },
});

export default PortfolioCard;
