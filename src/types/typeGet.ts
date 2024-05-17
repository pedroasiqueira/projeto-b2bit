export type GetType = {
    id: string,
    avatar: {
        id: number,
        image_high_url: string,
        image_medium_url: string,
        image_low_url: string
    },
    name: string,
    last_name: string,
    email: string,
    role: {
        value: number,
        label: string
    },
    last_login: string,
    staff_role: {
        value: number,
        label: string
    }
}




// export const algo = {
//     "id" :  "1" , 
//     "avatar" :  { 
//         "id" :  1 , 
//         "image_high_url" :  "a" , 
//         "image_medium_url" :  "a" , 
//         "image_low_url" :  "" 
//     } , 
//     "name" :  "M" , 
//     "last_name" :  "R" , 
//     "email" :  "m@b2bit.company" , 
//     "role" :  { 
//         "value" :  0 , 
//         "label" :  "Equipe" 
//     } , 
//     "last_login" :  "2022" , 
//     "staff_role" :  { 
//         "value" :  0 , 
//         "label" :  "Adm" 
//     }
// }