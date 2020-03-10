import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Layout from 'components/layout';
import Container from 'components/container';
import Title from 'components/title';
import Home from './home';
const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
  '#194090',
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text:
            'Criando <strong>valor</strong> junto às tecnologias emergentes verdes e de baixo carbono',
        },
        {
          text: 'Section 2',
        },
        {
          text: 'Section 3',
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <Layout>
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={comp => (
            <ReactFullpage.Wrapper>
              <Layout data>
                <Home />
              </Layout>
            </ReactFullpage.Wrapper>
          )}
        />
      </Layout>
    );
  }
}

export default App;
