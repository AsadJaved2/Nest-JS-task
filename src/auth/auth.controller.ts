<<<<<<< HEAD
import { Controller, Post, Body } from '@nestjs/common';
=======
import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
<<<<<<< HEAD
  constructor(private readonly authService: AuthService) {}
=======
  constructor(private authService: AuthService) {}
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761

  @Post('signup')
  async signUp(@Body() credentials: AuthCredentialsDTO): Promise<void> {
    return this.authService.signUp(credentials);
  }

<<<<<<< HEAD
  @Post('login')
  async signIn(@Body() credentials: AuthCredentialsDTO): Promise<{ accessToken: string }> {
    return this.authService.signIn(credentials);
=======
  @Post('/signin')
  signIn(
    @Body() authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDTO);
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
  }
}
