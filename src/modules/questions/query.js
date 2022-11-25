const GETQUESTIONS = `
    (
        select
            s.*,
            json_agg(q.* order by random()) as questions
        from subjects as s
        left join questions as q on s.subject_id = q.subject_id
        where q.subject_id = $1 
        group by s.subject_id
    ) 
        union all
    (
        select 
            s.*,
            json_agg(q.* order by random()) as questions
        from subjects as s
        left join questions as q on q.subject_id = s.subject_id
        where q.subject_id = $2
        group by s.subject_id
    )
`;

const POSTQUESTIONS = `
    insert into questions (subject_id,heading,question,answers) values ($1,$2,$3,$4);
`;

export { GETQUESTIONS, POSTQUESTIONS };
