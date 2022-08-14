import { Role } from "@prisma/client";

export const users = [
    {
        id: 1,
        fullname: 'Admin',
        username: 'Admin',
        password: '$2a$04$zvejrNvJtxOvFnNSOFn1RuATNlxWs7SmzLiWxGuW14ww.iIfD4Rie',
        role: Role.ADMIN
    },
    {
        id: 2,
        fullname: 'Pengunjung',
        username: 'Pengunjung',
        password: '$2a$04$vQX.SrBpZCKt1L8ShD3VLeCsOf4afv87EO4ZhcKLL.K2T8h5VoI82',   
        role: Role.USER   
    },

];