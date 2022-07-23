import React, {useContext, useEffect, useState} from 'react';
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
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const DevicePage = observer(() => {
  const {device} = useContext(Context)
  const [deviceInfo, setDeviceInfo] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
    fetchOneDevices(id).then(data => setDeviceInfo(data))
  }, [])
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
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container sx={{mt: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card>
            <CardMedia
              component="img"
              height="340"
              alt="green iguana"
              src={process.env.REACT_APP_API_URL + '/' + deviceInfo.img}
            />
            <Grid container>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {deviceInfo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  description
                </Typography>
                <Rating name="read-only" value={device.rating} readOnly/>
              </CardContent>
              <CardContent>
                <Typography sx={{pl: 10}} variant="h3" color="text.secondary">
                  {deviceInfo.price + ' $'}
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
                  <StyledTableCell align="right">title</StyledTableCell>
                  <StyledTableCell align="right">detail</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceInfo.info.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.title}</StyledTableCell>
                    <StyledTableCell align="right">{row.description}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
});

export default DevicePage;