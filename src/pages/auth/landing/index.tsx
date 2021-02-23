import React from 'react';
import { Box } from 'atoms/Box';
import Div100vh from 'react-div-100vh';
import { Button } from 'molecules/Button';
import { useHistory } from 'react-router-dom';
import SplashScreen from '../molecules/splash/SplashScreen';
import { LandingHeading } from './atoms/LandingHeading';

const Landing = () => {
  const history = useHistory();

  const handleClick = (url: string) => {
    history.push(`${url}`);
  };

  return (
    <Div100vh>
      <SplashScreen>
        <Box>
          <Box width="50rem">
            <LandingHeading text="splashscreen.landing.check.description1" />
            <LandingHeading text="splashscreen.landing.check.description2" />
          </Box>
          <Box width="100%" maxWidth="80%" m="auto" mt="49px">
            <Button
              mt={{ xs: 15 }}
              variant="primary"
              title="landing.zipcode.button.text"
              onClick={() => handleClick('/zipcode')}
            />
            <Button
              mt={{ xs: 15 }}
              variant="secondary"
              title="landing.signin.button.text"
              onClick={() => handleClick('/signin')}
            />
          </Box>
        </Box>
      </SplashScreen>
    </Div100vh>
  );
};
export default Landing;
