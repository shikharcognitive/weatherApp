import React, { FC, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, CardContent,Typography, Grid, Container, Box, Button, CardMedia, CardActions } from "@mui/material";
import axios from "axios";
import {useNavigate } from "react-router-dom"


interface CountryDetailsProps {
  title?: 'sp';
}

const CountryDetails: FC<CountryDetailsProps> = (props:any) => {

  const location:any = useLocation();
  const [ countryDetails , setCountryDetails]:any = useState('');
  const [ tempDetails , setTempDetails]:any = useState('');
  const [ showtemp, setShowTemp] = useState(false);
  const navigate = useNavigate()


  useEffect( () => {
    if(location && location.state.country !== '') {
      FetchData(location.state.country)
    }
  }, [location]);

  const FetchData = async (countryName:any) => {
    axios.get('http://api.weatherstack.com/current', {
        params: {
            access_key: '24e8f979004f900938f318a3e4d30e37',
            query : countryName
        }
      })
      .then(function (response:any) {
          if (response.status === 200 && response.data && response.data.request) {
            setCountryDetails(response.data.location);
            setTempDetails(response.data.current);
          }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    })
};

const toggleDetails =()=> {
  setShowTemp(!showtemp);
};


  return (
    <Container>
        <Box>
        { 
        !showtemp ?
        <Card sx={{ width: 650, marginLeft: 40, marginTop:20, }}>
          <CardContent>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Country - {countryDetails.country} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Capital - {countryDetails.name}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Longitude - {countryDetails.lon} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Latitude - {countryDetails.lat}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Population - Loading... </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <Button variant="contained" type='button' onClick={toggleDetails}>View Temprature Details</Button>
              </Grid>
              <Grid item xs={6}>
              <Button variant="contained" type='button' onClick={(e) => navigate('/')}>Go Home</Button>
              </Grid>
            </Grid>          
          </CardActions>
          </Card>

          :
          <Card sx={{ width: 650, marginLeft: 40, marginTop:20, }}>  
          <CardContent>
            { tempDetails && 
                <CardMedia
                    component="img"
                    height="200"
                    image={tempDetails.weather_icons[0]}
                    alt="country"
                  />
            }
             <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Country - {countryDetails.country} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Capital - {countryDetails.name}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Temprature - {tempDetails.temperature} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Pressure - {tempDetails.pressure} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">humidity - {tempDetails.humidity} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">cloudcover - {tempDetails.cloudcover} </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Wind_Speed - {tempDetails.wind_speed}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="div">Wind_dir - {tempDetails.wind_dir} </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <Button variant="contained" type='button' onClick={toggleDetails}>View Country Details</Button>
              </Grid>
              <Grid item xs={6}>
              <Button variant="contained" type='button' onClick={(e) => navigate('/')}>Go Home</Button>
              </Grid>
            </Grid>          
          </CardActions>
          </Card>
        }   
        </Box>
    </Container>
  );
};

export default CountryDetails;