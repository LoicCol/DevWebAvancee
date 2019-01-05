import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthRepository } from '../repository/AuthRepository';

// Classe permettant de définir les paramètres d'authentification : 
// jwtFromRequest : Spécifier la manière dont on récupère le token dans la requête
// secretOrKey : Chaine utilisée pour chiffrer le mot de passe 
// (Mettre ici une chaine complexe afin de renforcer la sécurité) 
export class JwtStrategy extends Strategy {
  constructor(private readonly authRepo: AuthRepository) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'secret',
      },
      async (req, payload, next) => await this.verify(req, payload, next)
    );
    passport.use(this);
  }

  public async verify(req, payload, done) {
    const isValid = await this.authRepo.validateUser(payload);
    if (!isValid) {
      return done('Unauthorized', false);
    }
    done(null, payload);
  }
}