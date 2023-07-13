/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

 "APP_ID":" wx0429c65b787d4cc9",
    "APP_SECRET":"0733de7d43320d85e9a82f534419c6d2",
    "IS_SHOW_COLOR":false,"CALLBACK_TEMPLATE_ID":"2",
    "CALLBACK_USERS":[{"name":"自己","id":"1"}],
    "USERS":
    [
        {
            "name":"小聪明蛋",
            "id":"2",
            "useTemplateId":"1",
            "province":"贵州",
            "city":"六盘水",
            "horoscopeDate":"05-30",
            "horoscopeDateType":"今日",
            "openUrl":"1",
            "festivals":
            [
                {
                    "type":"节日",
                    "name":"认识的第一天",
                    "date":"08-02",
                    "year":"2022"
                }
            ],
                "customizedDateList":
                [
                    {
                        "keyword":"认识的第一天",
                        "date":"2023-08-02"
                    }
                ]
        }
    ],
    "SWITCH":
    {
        "weather":true,
        "holidaytts":true,
        "CIBA":true,
        "oneTalk":false,
        "earthyLoveWords":false,
        "momentCopyrighting":false,
        "poisonChickenSoup":false,
        "poetry":false,
        "horoscope":false,
        "birthdayMessage":true
    }
}

module.exports = USER_CONFIG

