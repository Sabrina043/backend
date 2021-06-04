// MES COMMANDE !!!

// pour student

/*COMMANDE 1 = */ show /*dbs faire run a chaque commande*/

/*COMMANDE 2*/ = use school

show collections

/*COMMANDE 3*/  db.Students.insert({
                name: "Veronique",
                city: "Paris"    
                })
            db.Students.insert({
                name: "Steeven",
                city: "Lyon"    
                })
                
            db.Students.insert({
                name: "Marc",
                city: "Marseille"    
                })
                
            db.Students.insert({
                name: "Nour",
                city: "Lyon"    
                })
            db.Students.insert({
                name: "Romain",
                city: "Paris"    
                })
            db.Students.insert({
                name: "Sophie",
                city: "Paris"    
                })
/*COMMANDE 4 */ db.Students.find()

 

db.languages.insert({ name: "French"})
db.languages.insert({ name:"English"})
db.languages.insert({ name:"Germain"})
db.languages.insert({ name:"Spanish"})
db.languages.insert({ name:"Mandarin"})
db.Students.find()


db.favorites.insert({ class: "Math", sport: "Criket", student_id: ObjectId("60ba21c5d3b82c3368ca13ec")})
db.favorites.insert({ class: "Music", sport: "Hip Hop", student_id: ObjectId("60ba2c78d3b82c3368ca13f1")})
db.favorites.insert({ class: "Arts", sport: "Boxing", student_id: ObjectId("60ba21c5d3b82c3368ca13ec")})
db.favorites.insert({ class: "Literature", sport: "Tennis", student_id: ObjectId("60ba2c78d3b82c3368ca13ee")})
db.favorites.insert({ class: "Computer Science", sport: "Tennis", student_id: ObjectId("60ba2c78d3b82c3368ca13f0")})
db.favorites.insert({ class: "Arts", sport: "Baseball", student_id: ObjectId("60ba2c78d3b82c3368ca13ef")})
db.Students.find()
