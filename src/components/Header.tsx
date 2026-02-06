import { View, Text } from 'react-native';

import '../../global.css'

export const Header = () => {
  return (
    <View className="bg-blue-500 p-4 pt-12 shadow">
      <Text className="text-center text-2xl font-bold text-white">Login</Text>
    </View>
  );
};
