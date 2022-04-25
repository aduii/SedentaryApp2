import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions, StyleSheet, Text } from "react-native";

const StepsScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["15-04-22", "16-04-22", "17-04-22", "18-04-22", "19-04-22"],
    datasets: [
      {
        data: [599, 1010, 3050, 2820, 2056],
      },
    ],
  };
  const data2 = {
    labels: ["15-04-22", "16-04-22", "17-04-22", "18-04-22", "19-04-22"],
    datasets: [
      {
        data: [449.25, 757.5, 2287.5, 2115, 1542],
      },
    ],
  };
  const data3 = {
    labels: ["15-04-22", "16-04-22", "17-04-22", "18-04-22", "19-04-22"],
    datasets: [
      {
        data: [31.4475, 53.025, 160.125, 148.05, 107.94],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffa726",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Pasos</Text>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingVertical: 5,
        }}
        data={data}
        width={screenWidth * 0.95}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        showValuesOnTopOfBars={true}
        // verticalLabelRotation={30}
      />
      <Text style={styles.title}>Distancia (metros)</Text>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingVertical: 5,
        }}
        data={data2}
        width={screenWidth * 0.95}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        showValuesOnTopOfBars={true}
        // verticalLabelRotation={30}
      />
      <Text style={styles.title}>Calorías</Text>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingVertical: 5,
        }}
        data={data3}
        width={screenWidth * 0.95}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        showValuesOnTopOfBars={true}
        // verticalLabelRotation={30}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#051C60",
    paddingVertical: 5,
  },
});

export default StepsScreen;
