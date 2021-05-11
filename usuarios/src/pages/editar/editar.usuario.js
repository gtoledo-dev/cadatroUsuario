import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu from '../../../components/menu';
import ImgMenu from '../../../assets/develcode.jpg';
import Button from '@material-ui/core/Button';

import api from '../../../services/api'


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
   
  }));

export default function CadastroUsuario() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [nome, setNome] = useState(''); 
  const [codigo, setCodigo] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const {foto, setFoto} = useState('');

  const { idUsuario } = useParams();

  useEffect(() => {
    async function getUsuario(){
        var response = await api.get('/api/usuarios.details/' + idUsuarios);
        
        setNome(response.data.nome);
        setCodigo(response.data.codigo);
        setDataNascimento(response.data.datanascimento);
        setFoto(response.data.foto);

    getUsuario();

    }
  }, [])



  async function handleSubmit(){
    const data = {nome:nome, codigo:codigo, datanascimento:datanascimento, foto:foto, _id:idUsuario}
  }

  const response = await api.put('/api/usuarios.model', data);

  if(response.status==200){
    window.location.href='/usuarios.model'
  }else{
    alert('Erro ao editar');
  }

  return (
    <div className={classes.root}>          
      <Menu title={'Usuários'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
           <img src={ImgMenu}/>
           <h2>Editar Cadastro</h2>
           <Grid item xs={12} sm={12}>
              <TextField
                required
                id="nome"
                name="nome"
                label="Nome completo"
                fullWidth
                autoComplete="nome"
                value={nome}
                oneChange={e=> setNome(e.target.value)}
                />
            </Grid>
           <Grid item xs={12} sm={3}>
           <TextField
              required
              id="codigo"
              name="codigo"
              label="Codigo"
              fullWidth
              autoComplete="codigo"
              value={codigo}
                oneChange={e=> setCodigo(e.target.value)}
              />
            </Grid>          
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="datanascimento"
                name="datanascimento"
                label="Data de Nascimento"
                fullWidth
                autoComplete="datanascimento"
                value={datanascimento}
                oneChange={e=> setDataCodigo(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / anexar-foto"
                fullWidth
                autoComplete="anexar-foto"
                value={foto}
                oneChange={e=> setFoto(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleSubmit} color="primary">
              Primary
              </Button>
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