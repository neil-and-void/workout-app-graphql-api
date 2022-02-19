import crud from '../../database/crud';

const resolvers = {
  Query: {
    user: (_: any, args: any, context: any) => {
      return crud.user.getUser(args.id);
    },
  },
  Mutation: {
    login: (_: any, { email, password }: LoginArgs) => {
      return crud.user.getUserByEmail(email);
    },
    signup: (
      _: any,
      { email, firstname, password, confirmPassword }: SignupArgs
    ) => {},
  },
};

export default resolvers;
