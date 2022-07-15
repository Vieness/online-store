import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DevicePage = () => {
  const device = {
    id: 4,
    name: 'iphone 10',
    price: 10500,
    rating: 3,
    img: 'https://randomwordgenerator.com/img/picture-generator/53e9dc464853b10ff3d8992cc12c30771037dbf85254794e732872d69545_640.jpg'
  }
  const description = [
    {id: 1, title: 'RAM', desc: '5 gb'},
    {id: 2, title: 'Camera', desc: '12mp'},
    {id: 3, title: 'CP', desc: 'i5'},
    {id: 4, title: 'core', desc: '4'}
  ]
  const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card>
            <CardMedia
              component="img"
              height="340"
              alt="green iguana"
              src={device.img}
            />
            <Grid container>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {device.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  description
                </Typography>
                <Rating name="read-only" value={device.rating} readOnly/>
              </CardContent>
              <CardContent>
                <Typography sx={{pl: 10}} variant="h3" color="text.secondary">
                  {device.price + ' $'}
                </Typography>
                <Button sx={{ml: 18}} size="small">BUY <ShoppingCartIcon color={'primary'}/></Button>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <TableContainer component={Paper}>
            <Table sx={{maxWidth: 700}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Descriptions</StyledTableCell>
                  <StyledTableCell align="right">id</StyledTableCell>
                  <StyledTableCell align="right">title</StyledTableCell>
                  <StyledTableCell align="right">detail</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {description.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.id}</StyledTableCell>
                    <StyledTableCell align="right">{row.title}</StyledTableCell>
                    <StyledTableCell align="right">{row.desc}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>


  );
};

export default DevicePage;