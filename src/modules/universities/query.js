const GETUNIVERSITIES = `
    select 
        u.*,
        json_agg(f.*) as faculties
    from universities as u
    left join faculties as f on f.university_id = u.university_id and f.status = 'active'
    where f.first_subject_id = $1 and f.second_subject_id = $2
    group by u.university_id
`;

const POSTUNIVERSITY = `
    insert into universities (university_name,region_id) values ($1,$2)
`;

const UPDATEUNIVERSITY = `
    update universities
        set university_name = $2
    where university_id = $1
    returning *
`;

const DELETEUNIVERSITY = `
    update universities
        set status = 'deleted'
    where university_id = $1
    returning *
`;
export { GETUNIVERSITIES, POSTUNIVERSITY, UPDATEUNIVERSITY, DELETEUNIVERSITY };
