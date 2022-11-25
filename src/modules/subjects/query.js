const GETFIRSTSUBJECT = `
    select 
        s.*
    from faculties as f
    left join subjects as s on s.subject_id = f.first_subject_id
    group by s.subject_id
`;

const GETSECONDSUBJECT = `
    select 
        s.*
    from faculties as f
    left join subjects as s on s.subject_id = f.second_subject_id
    where f.first_subject_id = $1
    group by s.subject_id 
`;

const POSTSUBJECT = `
    insert into subjects (subject_name) values ($1) returning *
`;

const PUTSUBJECT = `
    update subjects 
        set subject_name = $2
    where subject_id = $1
`;

const DELETESUBJECT = `
    update subjects 
        set status = 'deleted'
    where subject_id = $1
`;

export {
  GETFIRSTSUBJECT,
  GETSECONDSUBJECT,
  POSTSUBJECT,
  PUTSUBJECT,
  DELETESUBJECT,
};
