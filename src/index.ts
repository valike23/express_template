import * as path from 'path';
import * as express  from 'express';


const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req: express.Request, res: express.Response)=>{
    req;
    res.sendFile(__dirname + '/pages/index.html');
})

app.listen('1999');