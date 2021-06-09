const mongoose = require("mongoose")
const bonus_heros = require("bonus_heros")

mongoose.connect("mongodb://localhost:27017/herosDB", (err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("je suis connecter à ma database");
    }

})

const addHeros = async () =>{

    try{
        await bonus_heros.deleteMany ({})

        await bonus_heros.insertMany([

            {

                name: "Iron Man",
                power: "money",
                color: "red",
                isAlive: true,
                age: 46,
                image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
            
            },
            {
                name: "Thor",
                power: ["electricty", "worthy"],
                color: "blue",
                isAlive: true,
                age: 300,
                image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
            
            },
            {
                name: "Daredevil",
                power: "blind",
                color: "red",
                isAlive: false,
                age: 30,
                image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
            
            }
        ])
        console.log("la collection a était créer dans la database");

    } catch(err) {
        console.error("Error insertMany heroes: ", err);
}

addHeros()


