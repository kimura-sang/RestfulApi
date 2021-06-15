Request URL
    GET
    http://localhost:8080/products
    Response:
    [
        {
            "_id": "60c84d36f563a94504278cfb",
            "name": "Soledad_Hessel87",
            "price": 50,
            "rating": 64,
            "updatedAt": "2021-06-15T05:57:49.125Z",
            "createdAt": "2021-06-15T05:57:49.125Z",
            "description": "Estelle_Gleason4",
            "last_purchase": "2021-06-14T23:25:39.203Z",
            "__v": 0,
            "passed": 0.3476622916666667
        },
        ...
    ],
------------------------------------------------
Search Data
    Get
    http://localhost:8080/products?search_word={"name": "Soledad_Hessel87"}
    Response:
    [
        {
            "_id": "60c84d36f563a94504278cfb",
            "name": "Soledad_Hessel87",
            "price": 50,
            "rating": 64,
            "updatedAt": "2021-06-15T05:57:49.125Z",
            "createdAt": "2021-06-15T05:57:49.125Z",
            "description": "Estelle_Gleason4",
            "last_purchase": "2021-06-14T23:25:39.203Z",
            "__v": 0,
            "passed": 0.3476622916666667
        },
        ...
    ],
-----------------------------------------------
Pagination
    Get
    http://localhost:8080/products?current_page=1&cnt_page=2
    Response
    [
        {
            "_id": "60c84d36f563a94504278cfb",
            "name": "Soledad_Hessel87",
            "price": 50,
            "rating": 64,
            "updatedAt": "2021-06-15T05:57:49.125Z",
            "createdAt": "2021-06-15T05:57:49.125Z",
            "description": "Estelle_Gleason4",
            "last_purchase": "2021-06-14T23:25:39.203Z",
            "__v": 0,
            "passed": 0.3534333333333333
        },
        {
            "_id": "60c84d36f563a94504278d02",
            "name": "Claudie.Greenholt",
            "price": 71,
            "rating": 80,
            "updatedAt": "2021-06-15T05:34:37.204Z",
            "createdAt": "2021-06-15T05:34:37.204Z",
            "description": "Heath_Batz46",
            "last_purchase": "2021-06-14T12:39:19.407Z",
            "__v": 0,
            "passed": 0.8022735648148148
        }
    ]
-------------------------------
Sort
    Get
    http://localhost:8080/products?sort_field=createdAt&sort_dir=DESC
    Response
    [
        {
            "_id": "60c84d36f563a94504278cfb",
            "name": "Soledad_Hessel87",
            "price": 50,
            "rating": 64,
            "updatedAt": "2021-06-15T05:57:49.125Z",
            "createdAt": "2021-06-15T05:57:49.125Z",
            "description": "Estelle_Gleason4",
            "last_purchase": "2021-06-14T23:25:39.203Z",
            "__v": 0,
            "passed": 0.35442543981481484
        },
        ...
    ]
------------------------------
get the data by ID
    Get
    http://localhost:8080/products/60c877ca65d636359079c195
    Response
    {
        "_id": "60c877ca65d636359079c195",
        "name": "Claire_Jacobs10",
        "price": 61,
        "rating": 49,
        "updatedAt": "2021-06-15T09:28:31.673Z",
        "createdAt": "2021-06-15T09:28:31.673Z",
        "description": "Lawson46",
        "last_purchase": "2021-06-15T02:51:36.844Z",
        "__v": 0,
        "passed": 0.2907148726851852
    }