export const validemail = (email) => {
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailregex.test(email);
  };
  export const validpassword = (pass) => {
    const passregex =
      /^(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[0-9]){1})(?=(.*[@#$%^!&+=.-_*]){2})([a-zA-Z0-9@#$%^!&+=*.-_]){8,16}$/;
    return passregex.test(pass);
  };
  