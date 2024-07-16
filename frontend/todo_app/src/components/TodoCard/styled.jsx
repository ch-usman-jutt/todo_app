import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

export const CardContainer = styled(Card)({
  width: '32%',
});

export const StatusContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px'
});

export const TitleText = styled(Typography)({
  fontSize: '16',
  fontWeight: '600',
});