import { Container, Box, ImageList, ImageListItem } from "@mui/material";

export const ImagesListContainer = ({ children }) => (
  <Container maxWidth="lg">
    <Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {children}
      </ImageList>
    </Box>
  </Container>
);

export const ImagesListItem = ({ img, title }) => (
  <ImageListItem>
    <img
      src={`${img}?w=248&fit=crop&auto=format`}
      srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={title}
      loading="lazy"
    />
  </ImageListItem>
);
