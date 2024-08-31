import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

const LatestPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{
            "&.MuiTypography-root": {
              fontSize: "48px",
              fontFamily: "sans-serif",
              color: "#0b0e14",
              fontWeight: "600",
            },
          }}
        >
          Latest
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <Box sx={{ display: "flex", gap: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  "&:hover": {
                    borderBottom: "1px solid grey",
                  },
                }}
              >
                The future of AI in software engineering
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Artificial intelligence is revolutionizing software engineering.
                Explore how AI-driven tools are enhancing development processes
                and improving software quality.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  "&:hover": {
                    borderBottom: "1px solid grey",
                    
                  },
                }}
              >
                Driving growth with user-centric product design
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Our user-centric product design approach is driving significant
                growth. Learn about the strategies we employ to create products
                that resonate with users.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                Embracing minimalism in modern design
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Minimalism is a key trend in modern design. Discover how our
                design team incorporates minimalist principles to create clean
                and impactful user experiences..
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                  <Box>Remy Sharp, Travis Howard</Box>
                </Box>
                <Box>July 14, 2021</Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                Cultivating a culture of innovation
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Innovation is at the heart of our company culture. Learn about
                the initiatives we have in place to foster creativity and drive
                groundbreaking solutions..
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                Advancing cybersecurity with next-gen solutions
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Our next-generation cybersecurity solutions are setting new
                standards in the industry. Discover how we protect our clients
                from evolving cyber threats..
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                Enhancing customer experience through innovation
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Our innovative approaches are enhancing customer experience.
                Learn about the new features and improvements that are
                delighting our users.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Learn about our commitment to sustainability and the innovative
                engineering solutions we re implementing to create a greener
                future. Discover the impact of...
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Our recent product updates are designed to help you maximize
                efficiency and achieve more. Get a detailed overview of the new
                features and improvements that..
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "80px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                Designing for the future: trends and insights
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Stay ahead of the curve with the latest design trends and
                insights. Our design team shares their expertise on creating
                intuitive and visually stunning user
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                        alt="Remy Sharp"
                        src="src/assets/BlogPageCard/1.jpg"
                        sx={{ width: 24, height: 24 }}
                      />
                    </AvatarGroup>
                  </Box>
                  <Box>Remy Sharp, Travis Howard</Box>
                </Box>
                <Box>July 14, 2021</Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  color: "#47536B",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "10px",
                }}
              >
                Take a look at our company s journey and the milestones we ve
                achieved along the way. From humble beginnings to industry
                leader, discover our story of growth.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                        alt="Remy Sharp"
                        src="src/assets/BlogPageCard/1.jpg"
                        sx={{ width: 24, height: 24 }}
                      />
                    </AvatarGroup>
                  </Box>
                  <Box>Remy Sharp</Box>
                </Box>
                <Box>July 14, 2021</Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{marginTop:'20px'}}>
          <Stack>
            <Pagination count={10} />
          </Stack>
        </Box>
      </Container>




      <div className="z-40 ...">05</div>
<div className="z-30 ...">04</div>
<div className="z-20 ...">03</div>
<div className="z-10 ...">02</div>
<div className="z-0 ...">01</div>

        
     
    </>
  );
};
export default LatestPage;
