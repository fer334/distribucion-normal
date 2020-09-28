const normal = (x) => Math.pow(Math.E, (-Math.pow(x, 2) / 2)) / Math.sqrt(2 * Math.PI);

const setIntegral = (x, y, mayorQue) => {
    
    let sumador = 0.01;
    if (!mayorQue){
        let t=x; x=y; y=t;
        x*=-1;
    }
    var data = [{ x: x, y: normal(x) }];
    for (let i = data[0].x + sumador; i<=y; i += sumador) {
        data.push({ x: i, y: normal(i) });
    }
    data.push({ x: y, y: normal(y) });
    return data;
};

const myRound = (x,y)=> Math.round(x*Math.pow(10,y))/Math.pow(10,y);

export {setIntegral, myRound, normal};