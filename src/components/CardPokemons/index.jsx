import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={13} sm={3}>
              <Card>
                <CardMedia
                  component="img"
                  width={200}
                  height={200}
                  
                  image={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg`}
                />
                <br></br>
                <CardContent>
                  <Typography variant="body1">{pokemon.name}</Typography>
                  <Button>Ver detalle</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
    
  );
};

export default CardPokemons;
