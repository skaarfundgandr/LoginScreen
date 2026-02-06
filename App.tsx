import './global.css';
import { LoginView } from '@/views/LoginView';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center bg-gray-200">
      <LoginView />
    </View>
  );
}