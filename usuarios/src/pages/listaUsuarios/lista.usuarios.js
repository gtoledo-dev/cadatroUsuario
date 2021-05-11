import React, {useStat, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu from '../../../components/menu';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ImgMenu from '../../../assets/develcode.jpg';
import api from '../../../services/api';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
   
  }))

export default function ListagemUsuarios() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const classes = useStyles();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =>{
    asyn function loadUsuarios(){
        const response = await api.get('/api/usuarios.model');

        setUsuarios(response.data)
    }  
    loadUsuarios();

  }, [])

  return (
    <div className={classes.root}>    
      <Menu title={'Usuários'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          <img src={ImgMenu}/>
          <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <h2>Listagem de Usuário<h2>
                      <Grid item xs={12} sm={12}>
                          T<TableContainer component={Paper}>
                                <Table className={classes.table} size="small" aria-label="a dense table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell align="center">Código</TableCell>
                                        <TableCell align="center">{new Date(row.datanascimento).toLocaleString('pt-br')}</TableCell>
                                        <TableCell align="center">Foto</TableCell>
                                        <TableCell align="right">Opções</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {usuarios.map((row) => (
                                        <TableRow key={row.n_id}>
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="right">{row.codigo}</TableCell>
                                        <TableCell align="right">{row.datanascimento}</TableCell>
                                        <TableCell align="right">{row.foto}</TableCell>
                                        <TableCell align="right">Botões</TableCell>
                                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                                            <Button color="primary" href={'/cadastrar/editar'+row._id}>Editar</Button>
                                        </ButtonGroup>  
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </TableContainer>
                      </Grid>
              </Paper>
            </Grid>
           
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}