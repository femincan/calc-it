import { Container, Flex } from '@mantine/core';
import { Calculator } from './components/Calculator';
import { Footer } from './components/Footer';

const App = () => (
  <Container>
    <Flex
      direction='column'
      align='center'
      justify='flex-start'
      gap='lg'
      sx={{ minHeight: '100vh', padding: 24 }}
    >
      <Calculator />
      <Footer />
    </Flex>
  </Container>
);

export default App;
