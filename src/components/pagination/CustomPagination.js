import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pagination } from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          color="primary"
          hideNextButton
          hidePrevButton
          count={numOfPages}
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
