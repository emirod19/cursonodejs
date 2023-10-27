/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data)) *///esto está escrito como promesas

    //async function loadData(){ en ES6 no hace falta que coloque la funcion
        try{
            const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    //}////esto es lo mismo que arriba solo que escrito con async y await

    //loadData()