import { StyleSheet } from 'react-native';

const spaceGrid = 8;
const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space6 = spaceGrid * 6;
const space8 = spaceGrid * 8;
const space11 = spaceGrid * 11;
const space16 = spaceGrid * 16;

export const flexBoxStyle = StyleSheet.create({
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  flexEnd: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRowCenterAlign: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowCenterSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // margins
  m1: { margin: space1 },
  m2: { margin: space2 },
  m3: { margin: space3 },

  // spacers
  spacer1: { height: space1 },
  spacer2: { height: space2 },
  spacer3: { height: space3 },
  spacer4: { height: space4 },
  spacer6: { height: space6 },
  spacer8: { height: space8 },
  spacer11: { height: space11 },
  spacer16: { height: space16 },
  spacer1W: { width: space1 },
  spacer2W: { width: space2 },
  spacer3W: { width: space3 },

  // margins
  mB1: { marginBottom: space1 },
  mB2: { marginBottom: space2 },
  mB3: { marginBottom: space3 },
  mB4: { marginBottom: space4 },

  mL1: { marginLeft: space1 },
  mL2: { marginLeft: space2 },
  mL3: { marginLeft: space3 },

  mR1: { marginRight: space1 },
  mR2: { marginRight: space2 },
  mR3: { marginRight: space3 },

  mTHalf: { marginTop: spaceHalf },
  mT1: { marginTop: space1 },
  mT2: { marginTop: space2 },
  mT3: { marginTop: space3 },

  mH1: { marginHorizontal: space1 },
  mH2: { marginHorizontal: space2 },
  mH3: { marginHorizontal: space3 },

  mV1: { marginVertical: space1 },
  mV2: { marginVertical: space2 },
  mV3: { marginVertical: space3 },

  // paddings
  pHalf: { padding: spaceHalf },
  p1: { padding: space1 },
  p2: { padding: space2 },
  p3: { padding: space3 },

  pB1: { paddingBottom: space1 },
  pB2: { paddingBottom: space2 },
  pB3: { paddingBottom: space3 },

  pL1: { paddingLeft: space1 },
  pL2: { paddingLeft: space2 },
  pL3: { paddingLeft: space3 },

  pR1: { paddingRight: space1 },
  pR2: { paddingRight: space2 },
  pR3: { paddingRight: space3 },

  pT1: { paddingTop: space1 },
  pT2: { paddingTop: space2 },
  pT3: { paddingTop: space3 },

  pHHalf: { paddingHorizontal: spaceHalf },
  pH1: { paddingHorizontal: space1 },
  pH2: { paddingHorizontal: space2 },
  pH3: { paddingHorizontal: space3 },
});