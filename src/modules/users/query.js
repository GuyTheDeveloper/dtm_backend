const GETUSERS = `
    select
        *
    from users
`;

const REGISTERUSER = `
    insert into users (fullname,email,phone,username,region_id,password,gender) 
        values 
    ($1,$2,$3,$4,$5,crypt($6,gen_salt('bf')),$7) returning *
`;

const LOGINUSER = `
    select 
        *
    from users as u
    where u.email = $1 and u.password = crypt($2,password)
`;

const LOGINWITHPHONE = `
    select 
        * 
    from users as u
    where u.phone = $1 and u.password = crypt($2,password)
`;

const GETUSERSINGLE = `
    select 
        *
    from users as u
    where u.user_id = $1
`;

export { GETUSERS, REGISTERUSER, LOGINUSER, LOGINWITHPHONE, GETUSERSINGLE };
