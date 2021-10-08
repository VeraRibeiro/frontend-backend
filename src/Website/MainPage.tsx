import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ThemeColors } from '../Theme/config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundColor: ThemeColors.ALICE_BLUE,
    height: 900,
    width: '100%',
    display: 'inline-flex',
  },
  centeredContainer: {
    height: '100vh',
  },
}));

export function MainPage({
  children,
  containerClassName,
  maxWidth,
  startOnLeft,
  height,
}: {
  children: any;
  containerClassName?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  startOnLeft?: boolean;
  height?: React.ReactText;
}) {
  const classes = useStyles();

  return (
    <Box
      height={height ?? '100%'}
      width="100%"
      className={containerClassName ?? classes.root}
    >
      <Container maxWidth={maxWidth ?? 'lg'}>
        <Box
          className={classes.centeredContainer}
          justifyContent={startOnLeft ? 'flex-start' : 'center'}
          justifyItems={startOnLeft ? 'flex-start' : 'center'}
          textAlign="center"
        >
          <Box
            display="flex"
            height="100%"
            justifyContent={startOnLeft ? 'flex-start' : 'center'}
            alignItems={'center'}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
