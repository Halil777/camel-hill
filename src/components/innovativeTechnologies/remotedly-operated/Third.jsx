import PropTypes from "prop-types";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Third = ({ handleDrawerClose }) => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", pt: 4 }}>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Third Component</Typography>
            <IconButton onClick={handleDrawerClose}>
              <ClearIcon />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Third.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Third;
