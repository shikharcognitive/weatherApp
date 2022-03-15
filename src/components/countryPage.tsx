import React, { FC, useState } from 'react';
import { Card, CardContent,Typography, TextField,Button, Stack, Container, Box } from "@mui/material";
import {useNavigate } from "react-router-dom";


// Define props type here
interface CountryPageProps {
  title?: 'ssp';
}

//Define styles here
// const useStyles = makeStyles(() => ({
    
// }));

const CountryPage: FC<CountryPageProps> = ({ title }) => {

    const [cName, setCName] = useState('');
    const navigate = useNavigate()

    const handleSubmit =()=> {
        navigate(`/details/${cName}`, {
            state : {
                country: cName,
            }
          });
    }
   
  return (
    <Container>
        <Box>
         <Card sx={{
                width: 400,
                marginLeft: 50,
                marginTop:20,
            }} 
            variant="outlined"
        >
            <CardContent>

            <form>
                <Stack m={2} spacing={3}>
                <Typography variant="h5">Get Country Details </Typography>
                    <TextField label="Enter Country Name" onChange={e => setCName(e.target.value)}/>

                    <Button variant="contained" disabled={cName === '' ? true :false} onClick={handleSubmit}>
                    submit
                    </Button>
                </Stack>
          </form>
            </CardContent>
        </Card>
        </Box>
    </Container>
  );
};

export default CountryPage;



