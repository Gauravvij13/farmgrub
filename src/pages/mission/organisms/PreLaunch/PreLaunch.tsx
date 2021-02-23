/* eslint-disable global-require */
import React from 'react';
import { Box } from 'atoms/Box';
import { Image } from 'atoms/Image';
import { MissionHeader } from 'pages/mission/molecules/MissionHeader';
import { PreLaunchContent } from 'pages/mission/molecules/PreLaunchContent';

export const PreLaunch = () => {
  return (
    <Box>
      <Box bg="missionblue.500" height="41rem" zIndex={1}>
        <Box maxWidth="37.5rem" mx="auto">
          <Image
            src={require('../../../../assets/images/mission/prelaunch.png')}
            alt="Pre Launch"
            maxWidth="37.5rem"
            height="46rem"
            mx="auto"
          />
          <MissionHeader
            title="mission.prelaunch.header.title"
            heading="mission.prelaunch.header.heading"
          />
        </Box>
      </Box>
      <Box bg="missionblue.600" pt={{ xs: '2rem', md: '4rem' }}>
        <PreLaunchContent
          number="1"
          borderBottom="1px solid"
          title="mission.prelaunch.title.one"
          description="mission.prelaunch.description.one"
        />
        <PreLaunchContent
          number="2"
          borderBottom="1px solid"
          title="mission.prelaunch.title.two"
          description="mission.prelaunch.description.two"
        />
        <PreLaunchContent
          number="3"
          src={require('../../../../assets/images/mission/harvest.png')}
          title="mission.prelaunch.title.three"
          description="mission.prelaunch.description.three"
        />
      </Box>
    </Box>
  );
};
