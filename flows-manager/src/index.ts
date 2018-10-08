import "reflect-metadata";
import {createConnection} from "typeorm";
import {Techno} from "./entity/Techno";

createConnection().then(async connection => {

    console.log("Inserting a new techno into the database...");
    var techno = new Techno();
    techno.name = "JavaScript";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Python";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Java";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "C++";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "C";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "PHP";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "C#";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Shell";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Go";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "TypeScript";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Ruby";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Jupyter Notebook";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Objective-C";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Swift";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Kotlin";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Rust";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "R";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Scala";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Lua";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "PowerShell";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Matlab";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "CoffeeScript";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Perl";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Groovy";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);

    techno = new Techno();
    techno.name = "Haskell";
    await connection.manager.save(techno);
    console.log("Saved a new techno with id: " + techno.id);
    
    console.log("Loading technos from the database...");
    const technos = await connection.manager.find(Techno);
    console.log("Loaded technos: ", technos);
     
    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));