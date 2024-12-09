import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    // Ajouter une logique personnalisée avant l'appel de la stratégie si nécessaire
    return super.canActivate(context);
  }
}
