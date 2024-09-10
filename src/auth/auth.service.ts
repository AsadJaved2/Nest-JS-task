import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UsersRepository } from './auth.repository';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private  usersRepository: UsersRepository,
    private  jwtService: JwtService,
  ) {}

  async signUp(credentials: AuthCredentialsDTO): Promise<void> {
    try {
      return await this.usersRepository.createUser(credentials);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to create user (services)',
      );
    }
  }

  async signIn(
    credentials: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    const { username, password } = credentials;

    try {
      const user = await this.usersRepository.findOne({ where: { username } });

      if (user && (await bcrypt.compare(password, user.password))) {
        const payload: jwtPayload = { username };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
<<<<<<< HEAD
=======
      } else {
        throw new UnauthorizedException(
          'Please check your login credentials (services)',
        );
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
      }

      throw new UnauthorizedException('Invalid credentials');
    } catch (error) {
<<<<<<< HEAD
      throw error instanceof UnauthorizedException
        ? error
        : new InternalServerErrorException('Sign-in failed');
=======
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to sign in (services)');
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
    }
  }
}
