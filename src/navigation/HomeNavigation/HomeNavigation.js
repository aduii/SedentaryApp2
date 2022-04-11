import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import NewsScreen from "../../screens/NewsScreen";
import AssistantScreen from "../../screens/AssistantScreen";
import KnowledgeScreen from "../../screens/KnowledgeScreen";

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: "Noticias",
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Assistant"
        component={AssistantScreen}
        options={{
          tabBarLabel: "Asistente Virtual",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="assistive-listening-systems"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Knowledge"
        component={KnowledgeScreen}
        options={{
          tabBarLabel: "Cuestionario",
          tabBarIcon: ({ color, size }) => (
            <Icon name="edit" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
