import "reflect-metadata";
import {createConnection} from "typeorm";
import {Techno} from "./entity/Techno";
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as techController from "./controller/TechnoController";

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

    /**
     * Create Express server.
     */
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    /**
     * Express configuration.
     */
    app.set("port", process.env.PORT || 3000);

    /**
     * Start Express server.
     */
    app.listen(app.get("port"), () => {
        console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
        console.log("  Press CTRL-C to stop\n");
    });

    /**
     * Primary app routes.
     */
    app.get("/techno", techController.getAllTechno);
    app.post("/techno", techController.saveTechno);

    module.exports = app;
    
}).catch(error => console.log(error));