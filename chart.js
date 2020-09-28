// Sample dataset. In a real application, you will probably get this data from another source such as AJAX.
// var data = 2;
import { normalGraph } from './normalGraph.js';

const height = 200;
const width = 500;
const margin = ({ top: 20, right: 30, bottom: 30, left: 40 });
let ini=0, fin=4;
let mayorQue = !true;
// const input = document.getElementById('input').value.split('(')
const input = 'P(X>=2.1)';

const inputChange=e=>{

    const regex = /P\((.)((<|>)=*)(-*[0-9]+\.*[0-9]*)\)/g ;
    const input = e.target.value;
    const inputA =regex.exec(input);
    if (inputA) {
        document.getElementById('alert').classList.add('invisible');
        document.getElementById('alert').classList.remove('visible');

        const X = inputA[1];
        const condition = inputA[3];
        const ini = +inputA[4];
        if (condition=='>') mayorQue = true;
        else mayorQue=false;
        
        // normalGraph({margin,width,height,ini,fin,mayorQue});
    } else{
        document.getElementById('alert').classList.remove('invisible')
        document.getElementById('alert').classList.add('visible')
    }
    
}
        normalGraph({margin,width,height,ini,fin,mayorQue});

document.getElementById('input').addEventListener('input', inputChange)

