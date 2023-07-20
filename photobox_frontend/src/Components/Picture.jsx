import { ImageList, ImageListItem } from "@mui/material";

const Picture = ({ picture }) => {


  return (
    <ImageList sx={{ width: 500, height: 200 }} rowHeight={164}>
    <ImageListItem key={picture.img}>
      <img
        src={`${picture.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${picture.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={picture.title}
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
  )
}

export default Picture;