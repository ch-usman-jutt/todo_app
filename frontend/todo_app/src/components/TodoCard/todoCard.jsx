import Checkbox from '@mui/material/Checkbox';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardContainer, StatusContainer, TitleText } from './styled';

export default function TodoCard(todoDetail) {
    
  return (
    <CardContainer>
      <CardContent>
        <TitleText>
          {todoDetail.data.title}
        </TitleText>
        <StatusContainer>
        <Typography variant="body2">
          is completed
        </Typography>
        <Checkbox checked={todoDetail.data.is_completed} />
        </StatusContainer>
      </CardContent>
    </CardContainer>
  )
}
