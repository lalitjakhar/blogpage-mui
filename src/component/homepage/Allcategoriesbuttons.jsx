import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Allcategoriesbuttons = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{marginTop:"40px"}}>
        <Box sx={{ display: "flex",alignItems:"center" }}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              aria-label="Tabs where selection follows focus"
              selectionFollowsFocus
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "10px",
                },
              }}
            >
              <Tab
                label="All categories"
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#EBEEF4",
                  fontFamily: "sans-serif",
                  textTransform: "none",
                  color: "#566481",
                  height: "20px",
                }}
              />
              <Tab className="Tabcss" label="Company" />
              <Tab className="Tabcss" label="Product" />
              <Tab className="Tabcss" label="Design" />
              <Tab className="Tabcss" label="Engineering" />
            </Tabs>
          </Box>
          <Box sx={{display:"flex", gap:"10px", alignItems:"center"}}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Search by name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  width: "268px",
                  height: "36px",
                },
                display:'flex',alignItems:'center'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button sx={{height:"36px", width:'36px', border:"1px solid #d2d4d6", bgcolor:"#f5f6fa4c"}}><RssFeedIcon sx={{color:"rgba(0, 0, 0, 0.87)"}}/></Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Allcategoriesbuttons;
