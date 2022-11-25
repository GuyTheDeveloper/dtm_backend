const GETFACULTIES = `
    select 
        f.*,
        (
            select
                region_name
            from regions
            where region_id = (
                        select
                            region_id
                        from universities
                        where university_id = f.university_id
            )
        )
    from faculties as f
    where faculty_id = $1
`;

const POSTFACULTY = `
    insert into faculties (faculty_name,university_id,first_subject_id,second_subject_id,grant_count,contract_count,grant_score,contract_score)
        values
    ($1,$2,$3,$4,$5,$6,$7,$8)
`;

const PUTFACULTY = `
`;

const DELETEFACULTY = `

`;

export { GETFACULTIES, POSTFACULTY };
