import { Text, View } from 'react-native';
import { Header } from '@/components/Header';
import { LoginCard } from '@/components/LoginCard';

import '../../global.css';

export const LoginView = () => {
  return (
    <View className="flex-1 justify-center bg-gray-200">
      <Header />
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-2xl font-bold text-center mb-4">User Login</Text>
        <LoginCard />
      </View>
    </View>
  );
}
