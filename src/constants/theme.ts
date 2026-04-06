export const COLORS = {
  PRIMARY: '#101740',
  PRIMARY_BUTTON: '#101740', // gradient starts from this color
  PRIMARY_BUTTON_DARK: '#222D66', // gradient end color

  ACCENT_COLOR: '#E0F7FF',

  TEXT_PRIMARY_COLOR: '#2C2C2C',
  TEXT_PRIMARY_80: '#565656',
  TEXT_PRIMARY_70: '#6B6B6B',
  TEXT_PRIMARY_60: '#808080',
  TEXT_PRIMARY_50: '#959595',
  TEXT_PRIMARY_40: '#ABABAB',
  TEXT_PRIMARY_20: '#D5D5D5',
  TEXT_PRIMARY_10: '#EAEAEA',

  BACKGROUND_COLOR: '#FFFFFF',
  SURFACE_COLOR: '#F7FBFF',

  SUCCESS: '#00A63E',
  CRITICAL: '#FF656B',
  ESCALATION_SOFT: '#FFF4D6',
  ESCALATION: '#EEB621',

  SECONDARY_BUTTON: '#E8F2FF',
  TERTIARY_COLOR: '#D0E0FF',
} as const;

export const FONT_FAMILY = {
  SEMIBOLD: 'Manrope-SemiBold',
  MEDIUM: 'Manrope-Medium',
  REGULAR: 'Manrope-Regular',
} as const;

export const TYPOGRAPHY = {
  HEADING_1: { fontSize: 36, lineHeight: 44, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_2: { fontSize: 32, lineHeight: 40, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_3: { fontSize: 28, lineHeight: 34, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_4_SEMIBOLD: { fontSize: 24, lineHeight: 28, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_4_MEDIUM: { fontSize: 24, lineHeight: 28, fontFamily: FONT_FAMILY.MEDIUM },
  HEADING_5_SEMIBOLD: { fontSize: 22, lineHeight: 26, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_5_MEDIUM: { fontSize: 22, lineHeight: 26, fontFamily: FONT_FAMILY.MEDIUM },
  HEADING_6_SEMIBOLD: { fontSize: 20, lineHeight: 24, fontFamily: FONT_FAMILY.SEMIBOLD },
  HEADING_6_MEDIUM: { fontSize: 20, lineHeight: 24, fontFamily: FONT_FAMILY.MEDIUM },

  BODY_1_SEMIBOLD: { fontSize: 18, lineHeight: 22, fontFamily: FONT_FAMILY.SEMIBOLD },
  BODY_1_MEDIUM: { fontSize: 18, lineHeight: 22, fontFamily: FONT_FAMILY.MEDIUM },
  BODY_2_SEMIBOLD: { fontSize: 16, lineHeight: 20, fontFamily: FONT_FAMILY.SEMIBOLD },
  BODY_2_MEDIUM: { fontSize: 16, lineHeight: 20, fontFamily: FONT_FAMILY.MEDIUM },
  BODY_2_REGULAR: { fontSize: 16, lineHeight: 20, fontFamily: FONT_FAMILY.REGULAR },
  BODY_3_SEMIBOLD: { fontSize: 14, lineHeight: 18, fontFamily: FONT_FAMILY.SEMIBOLD },
  BODY_3_MEDIUM: { fontSize: 14, lineHeight: 18, fontFamily: FONT_FAMILY.MEDIUM },
  BODY_3_REGULAR: { fontSize: 14, lineHeight: 18, fontFamily: FONT_FAMILY.REGULAR },
  BODY_4_MEDIUM: { fontSize: 12, lineHeight: 16, fontFamily: FONT_FAMILY.MEDIUM },
  BODY_4_REGULAR: { fontSize: 12, lineHeight: 16, fontFamily: FONT_FAMILY.REGULAR },
  BODY_5_MEDIUM: { fontSize: 10, lineHeight: 12, fontFamily: FONT_FAMILY.MEDIUM },

  NUMBER_SEMIBOLD: { fontSize: 20, lineHeight: 24, fontFamily: FONT_FAMILY.SEMIBOLD },
  NUMBER_1_MEDIUM: { fontSize: 14, lineHeight: 16, fontFamily: FONT_FAMILY.MEDIUM },
  NUMBER_1_REGULAR: { fontSize: 14, lineHeight: 16, fontFamily: FONT_FAMILY.REGULAR },
  NUMBER_2_MEDIUM: { fontSize: 12, lineHeight: 14, fontFamily: FONT_FAMILY.MEDIUM },
  NUMBER_2_REGULAR: { fontSize: 12, lineHeight: 14, fontFamily: FONT_FAMILY.REGULAR },
} as const;
