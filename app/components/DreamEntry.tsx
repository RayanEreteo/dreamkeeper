import { Box, Flex, Text } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';

interface DreamEntryI {
  dreamName: string;
  dreamDesc: string;
  isLucid: boolean;
}

function DreamEntry({ dreamName, dreamDesc, isLucid }: DreamEntryI) {
  const textColor = isLucid ? 'white' : 'black';

  return (
    <Flex flexDir={'row'} bg={isLucid ? 'blue' : 'lightblue'} mb={6} p={3} minW={'500px'}>
      <Flex flexDir={'row'} w={'100%'} justifyContent={'space-between'}>
        {/* Description Section */}
        <Flex id='desc' flexDir={'column'}>
          <Text color={textColor} fontWeight={'bolder'} mb={3}>
            {dreamName}
          </Text>
          <Text color={textColor}>{dreamDesc}</Text>
        </Flex>
        {/* Delete Area */}
        <Box
          id='del-area'
          bg={'red'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          alignSelf={'stretch'} // Makes it take up the full height
          minW={'50px'} // Optionally, specify a minimum width
        >
          <ImCross/>
        </Box>
      </Flex>
    </Flex>
  );
}

export default DreamEntry;
