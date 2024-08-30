import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const BlogPageCard = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{marginTop:"35px"}}>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Box>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="360"
                  image="src/assets/BlogPageCard/cardimg1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "12px",
                      color: "#0b0E14",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Engineering
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontSize: "18px",
                      color: "#0b0e14",
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                      marginTop: "10px",
                    }}
                  >
                    Revolutionizing software development with cutting-edge{" "}
                    <br /> tools
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4753613",
                      fontSize: "14px",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    Our latest engineering tools are designed to streamline
                    workflows and boost productivity. Discover how these
                    innovations are transforming the software...
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "50px",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                    >
                      <Box>
                        <AvatarGroup sx={{ display: "inline-flex" }}>
                          <Avatar
                            sx={{ textAlign: "start" }}
                            alt="Remy Sharp"
                            src="src/assets/BlogPageCard/1.jpg"
                          />
                          <Avatar
                            alt="Travis Howard"
                            src="src/assets/BlogPageCard/2.jpg"
                          />
                        </AvatarGroup>
                      </Box>
                      <Box>Remy Sharp, Travis Howard</Box>
                    </Box>
                    <Box>July 14, 2021</Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="360"
                  image="src/assets/cardimg2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "12px",
                      color: "#0b0E14",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Engineering
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontSize: "18px",
                      color: "#0b0e14",
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                      marginTop: "10px",
                    }}
                  >
                    Innovative product features that drive success
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4753613",
                      fontSize: "14px",
                      fontWeight: "400",
                      marginTop: "10px",
                    }}
                  >
                    Explore the key features of our latest product release that
                    are helping businesses achieve their goals. From
                    user-friendly interfaces to robust...
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "70px",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                    >
                      <Box>
                        <AvatarGroup sx={{ display: "inline-flex" }}>
                          <Avatar
                            sx={{ textAlign: "start" }}
                            alt="Remy Sharp"
                            src="src/assets/BlogPageCard/1.jpg"
                          />
                         
                        </AvatarGroup>
                      </Box>
                      <Box>Remy Sharp, Travis Howard</Box>
                    </Box>
                    <Box>July 14, 2021</Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default BlogPageCard;
