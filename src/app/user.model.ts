export interface User {
    name: {
              title: string,
              first: string,
              last: string
         };

    email: string;

    dob: {
            date: string;
         };

    location: {
                postcode: string,
                street: string
          };

    phone: string;

    login: {
                password: string;
            };

    picture: {
         medium: string
         large: string
    };
  }
