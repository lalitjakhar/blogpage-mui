import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Typography 
            sx={{"&.MuiTypography-root":{
              fontSize: "48px",
              fontFamily: "sans-serif",
              color: "#0b0e14",
              fontWeight: "600",}
            }}
          >
            {" "}
            Blog
          </Typography>
          <Typography sx={{fontSize:"14px", fontFamily:"sans-serif", color:"#0b0e14", fontWeight:"400"}}>
            Stay in the loop with the latest about our products
          </Typography>
         
        </Container>
      </Box>
    </>
  );
};
export default HeroSection;
