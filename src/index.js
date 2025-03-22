const express = require('express');
const cors = require('cors');
const coolProjectsModel = require('./model/coolProjectsModel');
const { checkEmpty } = require('./utils/checkers');

const app = express();

app.use(cors());
app.use(express.json({limit: '25Mb'}));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Cool Projects server started at <http://localhost:${PORT}/>`);  
});

app.post('/api/projectCard/', async (req, res) => {
  try {
    console.log(req.body);

    if( checkEmpty(req.body.name) ) {
      return res.status(400).json({
        success: false,
        error: 'El nombre del proyecto está vacío'
      });
    }

    if( checkEmpty(req.body.author) ) {
      return res.status(400).json({
        success: false,
        error: 'El nombre de la autora está vacío'
      });
    }
    
    const id = await coolProjectsModel.create(req.body);


    res.json({
      success:true,
      cardURL: `http://localhost:${PORT}/projectCard/${id}`
    })
  }
  catch(err) {
    console.error(err.toString());
    res.status(500).json({
      success: false,
      error: 'El servidor no está disponible en estos momentos'
    });
  }
});


app.get('/projectCard/:project_id', async (req, res) => {

  console.log(req.params.project_id);
  
  const projectData = coolProjectsModel.get(req.params.project_id);

  console.log(projectData);

  // EJS
  res.render('projectDetail', {projectData})
})


app.get('/', (req, res) => {

  res.send('Works!')
});

// Servidor de estáticos

const path = require('node:path');

app.use(express.static(path.join(__dirname, 'static_detail_styles')));
