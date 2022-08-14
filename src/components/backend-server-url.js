/*хранилище url Django backend */
    const url={

        "baseUrl":"http://127.0.0.1:8000",/* базовый url */
        "url_get_data":"/api/v1/news/get/content/",/*загрузка по id */
        "lates_news":"/api/v1/news/get/last_news",/*Последние новости*/
        "main_news":"/api/v1/news/get/main_news",
        'search':"/api/v1/news/get/search",
    

    'social':{

        'vk':'#',
        'linkedin':'#',
        'github':'#',
        'instagram':'#',
    },
    Auth:{
        login:'/api/v1/login/',
        post:'/api/v1/news/post/new_post',
        register:'/api/v1/register/',
    },
    Update:{
        refresh:'/api/v1/login/refresh/'
    }
    
    }


export default url ;