import { Stack } from 'expo-router'
const SubscriptionsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[id]' />
    </Stack>
  )
}
export default SubscriptionsLayout
