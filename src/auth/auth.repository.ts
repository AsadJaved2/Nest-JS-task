import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { TransactionService } from '../transaction/transaction.service';  // Import TransactionService
import { DataSource } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(
    private  dataSource: DataSource,
    private  transactionService: TransactionService, // Inject TransactionService
  ) {
     super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { username, password } = authCredentialsDTO;

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

<<<<<<< HEAD
    // Execute within a transaction using the TransactionService
    try {
      await this.transactionService.executeInTransaction(async (manager) => {
        // Check if the username already exists
        const existingUser = await manager.findOne(User, { where: { username } });
        if (existingUser) {
          throw new ConflictException('Username already exists');
=======
      const user = manager.create(User, {
        username,
        password: hashedPassword,
      });

      try {
        // Attempt to save the new user within the transaction
        await manager.save(user);
      } catch (error) {
        if (error.code === '23505') {
          // Handle duplicate username error
          throw new ConflictException('Username already exists (repository)');
        } else {
          throw new InternalServerErrorException();
>>>>>>> 0496c74566ae6d2e5aa23edbbd9e969bf4225761
        }

        // Create and save the new user
        const newUser = manager.create(User, {
          username,
          password: hashedPassword,
        });
        await manager.save(newUser);
      });
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create user');
    }
  }
}
