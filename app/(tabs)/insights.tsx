import { styled } from 'nativewind'
import { Text } from 'react-native'
import { SafeAreaView as RNFSafeAreaView } from 'react-native-safe-area-context'
const SafeAreaView = styled(RNFSafeAreaView)

const Insights = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Insights</Text>
    </SafeAreaView>
  )
}
export default Insights
