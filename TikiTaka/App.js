import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
