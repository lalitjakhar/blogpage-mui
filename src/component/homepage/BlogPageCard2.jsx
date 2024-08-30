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

const BlogPageCard2 = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{marginTop:"20px"}}>
        <Box sx={{ display: "flex", gap: "20px" }}>
          {/* card1 */}
          <Box width={{}}>
            <Card sx={{ borderRadius: "10px ",  boxShadow:"3"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="251"
                  image="src/assets/Blogpagecard2/blog2img1.jpg"
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
                      marginTop: "25px",
                    }}
                  >
                    Design
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
                    Designing for the future: trends and <br /> insights
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
                    Stay ahead of the curve with the latest design trends and
                    insights. Our design team shares their...
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
                            sx={{ width: 24, height: 24 }}
                            alt="Remy Sharp"
                            src="src/assets/BlogPageCard/1.jpg"
                          />
                        </AvatarGroup>
                      </Box>
                      <Box>Remy Sharp</Box>
                    </Box>
                    <Box>July 14, 2021</Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* card2 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Box width={{}}>
              <Card sx={{ borderRadius: "10px", boxShadow:"3" }}>
                <CardActionArea>
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
                      Company
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
                      Our company s journey: milestones and achievements
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
                      Take a look at our company s journey and the milestones
                      we ve achieved along the way. From...
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
                        sx={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <AvatarGroup sx={{ display: "inline-flex" }}>
                            <Avatar
                              sx={{ width: 24, height: 24 }}
                              alt="Remy Sharp"
                              src="src/assets/BlogPageCard/1.jpg"
                            />
                          </AvatarGroup>
                        </Box>
                        <Box>Remy Sharp</Box>
                      </Box>
                      <Box>July 14, 2021</Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box width={{}}>
              <Card sx={{ borderRadius: "10px", boxShadow:"3" }}>
                <CardActionArea>
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
                      Pioneering sustainable engineering solutions
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
                      Learn about our commitment to sustainability and the
                      innovative engineering solutions we re...
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "67px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <AvatarGroup sx={{ display: "inline-flex" }}>
                            <Avatar
                              sx={{ width: 24, height: 24 }}
                              alt="Remy Sharp"
                              src="src/assets/BlogPageCard/1.jpg"
                            />
                            <Avatar
                              sx={{ width: 24, height: 24 }}
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
          {/* card3 */}
          <Box width={{}}>
            <Card sx={{ borderRadius: "10px", boxShadow:"3"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="251"
                  image="src/assets/Blogpagecard2/blog2img2.jpg"
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
                      marginTop: "25px",
                    }}
                  >
                    Product
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
                    Maximizing efficiency with our latest product updates
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
                    Our recent product updates are designed to help you maximize
                    efficiency and achieve more. Get a..
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
                            sx={{ width: 24, height: 24 }}
                            alt="Remy Sharp"
                            src="src/assets/BlogPageCard/1.jpg"
                          />
                        </AvatarGroup>
                      </Box>
                      <Box>Remy Sharp</Box>
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
export default BlogPageCard2;
