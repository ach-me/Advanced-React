import App, { Container } from 'next/app';
import Page from '../components/Page';

// Next trae un componente madre App nativo
// Si aun asi se quiere personalizar el componente de mayor jerarquia:
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
