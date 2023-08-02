jest.mock('react-native-chart-kit', () => ({
  PieChart: jest.fn(),
}));

jest.mock('react-native-progress',()=>{
    return {
        Progress:{
            Bar: () =>jest.fn()
        }
    }
})
