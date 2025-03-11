/* import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Validate username/password (replace with actual authentication logic)
    if (username !== 'test' || password !== 'password') {
      throw new Error('Invalid credentials');
    }

    const payload = { username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
 */