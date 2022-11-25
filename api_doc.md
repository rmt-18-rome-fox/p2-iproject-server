# p2-cms-integration-server
CMS Integration - Server

## Api Path:
https://matte-anime.herokuapp.com/


List of available endpoints:
# ANIME
- `GET /anime`
- `GET /anime/:jikanAnimeId`

# SYNOPSIS READER
- `GET /synopsis-reader`

# LOGIN & REGISTER
- `POST /login`
- `POST /register`

# WATCHLISTS
- `GET /watchlists`
- `POST /watchlists`
- `PATCH /watchlists/:JikanAnimeId`
- `DELETE /watchlists/:JikanAnimeId`


&nbsp;


## 1. GET /anime

Description:
- Get 50 top anime from Jikan Api

Request:
- query (optional):
```json
"page": 2
```

_Response (200 - OK)_

```json
{
    "request_hash": "request:top:58399c95e55435d6ccef63eef7ce609974e4f2d5",
    "request_cached": true,
    "request_cache_expiry": 117160,
    "top": [
        {
            "mal_id": 5114,
            "rank": 1,
            "title": "Fullmetal Alchemist: Brotherhood",
            "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
            "image_url": "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            "type": "TV",
            "episodes": 64,
            "start_date": "Apr 2009",
            "end_date": "Jul 2010",
            "members": 2716506,
            "score": 9.15
        },
        {
            "mal_id": 28977,
            "rank": 2,
            "title": "Gintama°",
            "url": "https://myanimelist.net/anime/28977/Gintama°",
            "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209",
            "type": "TV",
            "episodes": 51,
            "start_date": "Apr 2015",
            "end_date": "Mar 2016",
            "members": 491594,
            "score": 9.09
        },
        ...
    ]
}
```


## 2. GET /anime/:jikanAnimeId

Description:
- Get anime detail from Jikan Api

_Response (200 - OK)_

```json
{
    "request_hash": "request:anime:704c9a8ba55a2888accf1b2b89d9d6a2308d2ac5",
    "request_cached": true,
    "request_cache_expiry": 115394,
    "mal_id": 5114,
    "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    "image_url": "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    "trailer_url": "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
    "title": "Fullmetal Alchemist: Brotherhood",
    "title_english": "Fullmetal Alchemist: Brotherhood",
    "title_japanese": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "title_synonyms": [
        "Hagane no Renkinjutsushi: Fullmetal Alchemist",
        "Fullmetal Alchemist (2009)",
        "FMA",
        "FMAB"
    ],
    "type": "TV",
    "source": "Manga",
    "episodes": 64,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2009-04-05T00:00:00+00:00",
        "to": "2010-07-04T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 5,
                "month": 4,
                "year": 2009
            },
            "to": {
                "day": 4,
                "month": 7,
                "year": 2010
            }
        },
        "string": "Apr 5, 2009 to Jul 4, 2010"
    },
    "duration": "24 min per ep",
    "rating": "R - 17+ (violence & profanity)",
    "score": 9.15,
    "scored_by": 1652945,
    "rank": 1,
    "popularity": 3,
    "members": 2720692,
    "favorites": 191918,
    "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]",
    "background": null,
    "premiered": "Spring 2009",
    "broadcast": "Sundays at 17:00 (JST)",
    "related": {
        "Adaptation": [
            {
                "mal_id": 25,
                "type": "manga",
                "name": "Fullmetal Alchemist",
                "url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist"
            }
        ],
        "Alternative version": [
            {
                "mal_id": 121,
                "type": "anime",
                "name": "Fullmetal Alchemist",
                "url": "https://myanimelist.net/anime/121/Fullmetal_Alchemist"
            }
        ],
        "Side story": [
            {
                "mal_id": 6421,
                "type": "anime",
                "name": "Fullmetal Alchemist: Brotherhood Specials",
                "url": "https://myanimelist.net/anime/6421/Fullmetal_Alchemist__Brotherhood_Specials"
            },
            {
                "mal_id": 9135,
                "type": "anime",
                "name": "Fullmetal Alchemist: The Sacred Star of Milos",
                "url": "https://myanimelist.net/anime/9135/Fullmetal_Alchemist__The_Sacred_Star_of_Milos"
            }
        ],
        "Spin-off": [
            {
                "mal_id": 7902,
                "type": "anime",
                "name": "Fullmetal Alchemist: Brotherhood - 4-Koma Theater",
                "url": "https://myanimelist.net/anime/7902/Fullmetal_Alchemist__Brotherhood_-_4-Koma_Theater"
            }
        ]
    },
    "producers": [
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Aniplex",
            "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
            "mal_id": 58,
            "type": "anime",
            "name": "Square Enix",
            "url": "https://myanimelist.net/anime/producer/58/Square_Enix"
        },
        {
            "mal_id": 143,
            "type": "anime",
            "name": "Mainichi Broadcasting System",
            "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
        },
        {
            "mal_id": 1155,
            "type": "anime",
            "name": "Studio Moriken",
            "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
        }
    ],
    "licensors": [
        {
            "mal_id": 102,
            "type": "anime",
            "name": "Funimation",
            "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
            "mal_id": 493,
            "type": "anime",
            "name": "Aniplex of America",
            "url": "https://myanimelist.net/anime/producer/493/Aniplex_of_America"
        }
    ],
    "studios": [
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Bones",
            "url": "https://myanimelist.net/anime/producer/4/Bones"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 2,
            "type": "anime",
            "name": "Adventure",
            "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Comedy",
            "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
            "mal_id": 8,
            "type": "anime",
            "name": "Drama",
            "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
            "mal_id": 10,
            "type": "anime",
            "name": "Fantasy",
            "url": "https://myanimelist.net/anime/genre/10/Fantasy"
        }
    ],
    "explicit_genres": [],
    "demographics": [
        {
            "mal_id": 27,
            "type": "anime",
            "name": "Shounen",
            "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
    ],
    "themes": [
        {
            "mal_id": 38,
            "type": "anime",
            "name": "Military",
            "url": "https://myanimelist.net/anime/genre/38/Military"
        }
    ],
    "opening_themes": [
        "1: \"again\" by YUI (eps 1-14)",
        "2: \"Hologram (ホログラム)\" by NICO Touches the Walls (eps 15-26)",
        "3: \"Golden Time Lover (ゴールデンタイムラバー)\" by Sukima Switch (eps 27-38)",
        "4: \"Period\" by Chemistry (eps 39-50)",
        "5: \"Rain (レイン)\" by SID (eps 51-62)"
    ],
    "ending_themes": [
        "1: \"Uso (嘘)\" by SID (eps 1-14)",
        "2: \"LET IT OUT\" by Miho Fukuhara (eps 15-26)",
        "3: \"Tsunaida Te (つないだ手)\" by Lil'B (eps 27-38)",
        "4: \"Shunkan Sentimental (瞬間センチメンタル)\" by SCANDAL (eps 39-50)",
        "5: \"RAY OF LIGHT\" by Nakagawa Shouko (eps 51-62)",
        "6: \"Rain (レイン)\" by SID (eps 63)",
        "7: \"Hologram (ホログラム)\" by NICO Touches the Walls (eps 64)"
    ],
    "external_links": [
        {
            "name": "Official Site",
            "url": "http://www.hagaren.jp/fa/"
        },
        {
            "name": "AnimeDB",
            "url": "http://anidb.info/perl-bin/animedb.pl?show=anime&aid=6107"
        },
        {
            "name": "AnimeNewsNetwork",
            "url": "http://www.animenewsnetwork.com/encyclopedia/anime.php?id=10216"
        },
        {
            "name": "Wikipedia",
            "url": "https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood"
        },
        {
            "name": "\n    \n  ",
            "url": "https://fma.fandom.com/wiki/Fullmetal_Alchemist:_Brotherhood"
        }
    ]
}
```

## 3. POST /synopsis-reader

Description:
- get audio synopsis reader

Request:
- body:
```json
"text": "test reader"
```

_Response (201 - OK)_

```json
{
    "msg": "Success text to speech",
    "data": "data:audio/mpeg;base64,SUQzBAAAAAAAGVRTU0UAAAAPAAADTGF2ZjU0LjIxLjEwMAD/+0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAABwAAADYAAFjfAAYLCxAQFBQZGR4eIicnLCwxMTU1Ojo/P0NISE1NUVFWVltbYGBkaWlubnJyd3d8fIGFhYqKj4+Tk5iYnZ2hpqarq7CwtLS5ub6+wsfHzMzQ0NXV2trf3+Po6O3t8fH29vv7/0xhdmY1NC4yMS4xMDAAAAAAAAAAACQAAAAAAAAAAP/7kGQADvAAAGkAAAAIAAANIAAAAQzk0NQksSuQAAA0gAAABBCkVAyExw2OCcUEB1E60cmQ6hmEYUCWVE6EVScRRsLyYZsNsXyZvSFpaqUEhOQHSxCKgZCYNhgjUuWf/7BNJVo8YJ0C9XKL3sNw9yZbbYmomshJhYcE5IjgDgOMNf3f7v/of0O//80qA4AAfh0AA2RHnsLo4t0YaPIA4EPPCydAYXgOjuH25NIhvbs92TmkL988pbpxbYUg0YfQAQh0GhyabO2xllEJu0HYtOGi3WcU4kBDIs7vrfdnHv0ecn8gx+u/5RxToBDSiQWNJF2N5EC6NF68IAhJiFV9ealk/xg7pJNu05fXHVvoFbgRt0FfG5nk/ONtF6X78IEp6nG0z8Xo6jifTenFlVilJ1UN+9XTwKDGLVd3PX3//+jrb6XWyK1rTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqAQf54jgUtoaQYm1jaWJDDdMlSw1KilUjxvrlVvFedqqMZperyneNcJgOSdRopNtqhL+PrDIpH4uox//
    ..."
}
```


## 4. POST /login

Description:
- Login to Matte Anime

Request:
- body:
```json
"email": "user1@gmail.com",
"password": "user1"
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjc1NzY4fQ.8avgxy1aW0Nvr2yfOMNsXOffCFxj9Gf2ZiKPPBklpKM"
}
```


## 5. POST /register

Description:
- Register to Matte Anime

Request:
- body:
```json
"email": "user1@gmail.com",
"password": "user1",
"fullName": "User 1"
```

_Response (201 - OK)_

```json
{
    "email": "aril@mail.com",
    "fullName": "Aril"
}
```

## 6. GET /watchlists

Description:
- get watchlists by User Id from database

Request:
- headers:
```json
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjc1NzY4fQ.8avgxy1aW0Nvr2yfOMNsXOffCFxj9Gf2ZiKPPBklpKM"
```

_Response (200 - OK)_

```json
[
    {
        "id": 4,
        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu",
        "priority": "Must Watch",
        "status": "Not Watched",
        "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
        "UserId": 1,
        "JikanAnimeId": 39535,
        "createdAt": "2021-12-15T08:54:16.649Z",
        "updatedAt": "2021-12-15T09:35:24.596Z",
        "User": {
            "id": 1,
            "email": "user1@gmail.com",
            "fullName": "User 1",
            "createdAt": "2021-12-15T06:23:38.803Z",
            "updatedAt": "2021-12-15T06:23:38.803Z"
        }
    },
    {
        "id": 3,
        "title": "Bite-Choicar",
        "priority": "Must Watch",
        "status": "Watched",
        "image_url": "https://cdn.myanimelist.net/images/anime/1656/106927.jpg",
        "UserId": 1,
        "JikanAnimeId": 41638,
        "createdAt": "2021-12-15T08:23:00.438Z",
        "updatedAt": "2021-12-15T10:28:48.601Z",
        "User": {
            "id": 1,
            "email": "user1@gmail.com",
            "fullName": "User 1",
            "createdAt": "2021-12-15T06:23:38.803Z",
            "updatedAt": "2021-12-15T06:23:38.803Z"
        }
    },
    ...
]
```


## 7. POST /watchlists

Description:
- add anime to Watchlists

Request:
- headers:
```json
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjc1NzY4fQ.8avgxy1aW0Nvr2yfOMNsXOffCFxj9Gf2ZiKPPBklpKM"
```
- body:
```json
"title": "Violet Evergarden Movie",
"priority": "Must Watch",
"JikanAnimeId": 37987,
"image_Url": "https://cdn.myanimelist.net/images/anime/1825/110716.jpg"
```

_Response (201 - OK)_

```json
{
    "id": 10,
    "title": "Violet Evergarden Movie",
    "UserId": 1,
    "JikanAnimeId": 37987,
    "priority": "Must Watch",
    "image_url": "\"https://cdn.myanimelist.net/images/anime/1825/110716.jpg\"",
    "status": "Not Watched",
    "updatedAt": "2021-12-29T08:51:21.552Z",
    "createdAt": "2021-12-29T08:51:21.552Z"
}
```


## 8. PATCH /watchlists/:JikanAnimeId

Description:
- Update status watchlists

Request:
- headers:
```json
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjc1NzY4fQ.8avgxy1aW0Nvr2yfOMNsXOffCFxj9Gf2ZiKPPBklpKM"
```
- body:
```json
{
    "status": "Watched"
}
```

_Response (201 - OK)_

```json
{
    "status": "Watched"
}
```

## 9. DELETE /JikanAnimeId

Description:
- delete watchlists

Request:
- headers:
```json
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjc1NzY4fQ.8avgxy1aW0Nvr2yfOMNsXOffCFxj9Gf2ZiKPPBklpKM"
```

_Response (200 - OK)_

```json
"Succes Delete WatchList"
```
