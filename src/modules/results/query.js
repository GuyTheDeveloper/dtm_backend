const POSTRESULT = `
    insert into results 
(user_id, first_subject_id, second_subject_id, first_subject_count, second_subject_count,
first_subject_correct,second_subject_correct ,faculty_id,overall_score ,time)
        values
($1,$2,$3,$4,$5,$6,$7,
    (
        select
            faculty_id
        from faculties
        where array[faculty_id::text] <@ $8 and (3.7 * $6::int + 2.7 * $7::int) >= contract_score
        order by array_position($8, faculty_id::text) limit 1
    ),
     (3.7 * $6::int + 2.7 * $7::int),$9
) returning *
`;

const GETBYRESULTID = `
    select 
        r.*,
        (select university_name from universities where university_id = (select university_id from faculties where faculty_id = r.faculty_id)),
        (select faculty_name from faculties where faculty_id = r.faculty_id),
        (select grant_score from faculties where faculty_id = r.faculty_id),
        (select contract_score from faculties where faculty_id = r.faculty_id),
        (select subject_name from subjects where subject_id = r.first_subject_id) as first_subject_name,
        (select subject_name from subjects where subject_id = r.second_subject_id) as second_subject_name,
        (select 
            case
                when grant_score <= r.overall_score then 'Davlat granti'
                when contract_score <= r.overall_score then 'Shartnoma asosida'
                else 'Tavsiya etilmadi'    
            end
        from faculties 
        where faculty_id = r.faculty_id) as education_type
    from results as r
    where case  when $1 > 0 then r.result_id = $1
                            else true
                            end
`;

const GETBYSCORE = `
    select 
        r.*,
        (select faculty_name from faculties where faculty_id = r.faculty_id),
        (select fullname from users where id = r.user_id),
        (select 
            case
                when grant_score <= r.overall_score then 'Davlat granti'
                when contract_score > r.overall_score then 'Tavsiya etilmadi'
                else 'Shartnoma asosida'  
            end
        from faculties where faculty_id = r.faculty_id) as education_type
    from results as r 
    order by r.overall_score desc
`;

const GETUSERBYID = `
    select 
        r.*,
        (select university_name from universities where university_id = (select university_id from faculties where faculty_id = r.faculty_id)),
        (select faculty_name from faculties where faculty_id = r.faculty_id),
        (select 
           case
                when grant_score <= r.overall_score then 'Davlat granti'
                when contract_score > r.overall_score then 'Tavsiya etilmadi'
                else 'Shartnoma asosida'  
            end
        from faculties where faculty_id = r.faculty_id) as education_type
    from results as r 
    where r.user_id = $1
`;

export { POSTRESULT, GETBYRESULTID, GETBYSCORE, GETUSERBYID };
