import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <img src="/assets/images/me.jpg" />
      <p>괜찮아요. 그럴수도 있지.. 퓨터야!!</p>
    </Content>
  </Main>
);

export default About;
