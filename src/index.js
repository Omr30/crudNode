import app from './app.js';
import './config.js';


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})