import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as passport from 'passport';

const errorMiddleware = require('../middlewares/error')

createConnection().then(async connection => {
    /*
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
    */
    /**
     * Create Express server.
     */
    const application = express();
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(passport.initialize());

    /**
     * Express configuration.
     */
    application.set("port", process.env.PORT || 3004);

    /**
     * Start Express server.
     */
    application.listen(application.get("port"), () => {
        console.log(("  Application is running at http://localhost:%d in %s mode"), application.get("port"), application.get("env"));
        console.log("  Press CTRL-C to stop\n");
    });

    /**
     * Routes
     */

    application.use('/api/v1.0', require('./routes'));

    application.use(function (err, req, res, next) {
      errorMiddleware.handleErrors(err, req, res, next, {env: application.get('env')})
    })
    module.exports = application;

}).catch(error => console.log(error));
