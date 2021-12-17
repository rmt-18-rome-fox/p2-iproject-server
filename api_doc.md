# My-Quran API Documentation

## Endpoints :

List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /users`
- `GET /juzz`
- `GET /juzz/:juzsNumber`
- `GET /chapters`
- `GET /chapters/:chapterNumber`
- `GET /prayerTimes`


&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "username": "sring",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```

&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - Ok)_
```json
{
  "access_token": "string",
}
```

&nbsp;

## 3. GET /Users

Request:

- headers:
```json
{
  "access_token": "string",
}
```

_Response (200 - Ok)_
```json
{
    "id": 1,
    "email": "sys@mail.com"
}
```

&nbsp;

## 4. GET /juzz

Request:

- headers:
```json
{
  "access_token": "string" 
}
```

_Response (200 - Ok)_
```json
{
  "juzs": [
    {
      "id": 1,
      "juz_number": "integer",
      "verse_mapping": "object",
      "first_verse_id": "integer",
      "last_verse_id": "integer",
      "verses_count":"integer"
    },
    ...
  ]
}
```

&nbsp;

## 5. GET /juzz/:juzsNumber

Request:

- headers:
```json
{
  "access_token": "string" 
}
```

- params:
```json
{
  "JuzsNumber": "Integer" 
}
```

_Response (200 - Ok)_
```json
{
    "verses": [
        {
            "id": 1,
            "verse_number": 1,
            "verse_key": "1:1",
            "juz_number": 1,
            "hizb_number": 1,
            "rub_number": 1,
            "sajdah_type": null,
            "sajdah_number": null,
            "text_indopak": "بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ",
            "page_number": 1,
            "audio": {
                "url": "Minshawi/Murattal/mp3/001001.mp3",
                "segments": [
                    [0,1,600,930],
                    [1,2,940,1630],
                    [2,3,1640,2730],
                    [3,4,2740,4170]
                ]
            },
            "translations": [
                {
                    "id": 903958,
                    "resource_id": 131,
                    "text": "In the Name of Allah—the Most Compassionate, Most Merciful."
                }
            ]
        },
        ....
}
```

&nbsp;

## 6. GET /chapters

Request:

- headers:
```json
{
  "access_token": "string" 
}
```

_Response (200 - Ok)_
```json
{
    "chapters": [
        {
            "id": 1,
            "revelation_place": "makkah",
            "revelation_order": 5,
            "bismillah_pre": false,
            "name_simple": "Al-Fatihah",
            "name_complex": "Al-Fātiĥah",
            "name_arabic": "الفاتحة",
            "verses_count": 7,
            "pages": [
                1,
                1
            ],
            "translated_name": {
                "language_name": "english",
                "name": "The Opener"
            }
        },
        ....
}
```


&nbsp;


## 7. GET /chapters/:chapterNumber

Request:

- headers:
```json
{
  "access_token": "string" 
}
```


- params:
```json
{
  "chapterNumber": "Integer" 
}
```


_Response (200 - Ok)_
```json
{
    "verses": [
        {
            "id": 1,
            "verse_number": 1,
            "verse_key": "1:1",
            "juz_number": 1,
            "hizb_number": 1,
            "rub_number": 1,
            "sajdah_type": null,
            "sajdah_number": null,
            "text_indopak": "بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ",
            "page_number": 1,
            "audio": {
                "url": "Minshawi/Murattal/mp3/001001.mp3",
                "segments": [
                    [0,1,600,930],
                    [1,2,940,1630],
                    [2,3,1640,2730],
                    [3,4,2740,4170]
                ]
            },
            "translations": [
                {
                    "id": 903958,
                    "resource_id": 131,
                    "text": "In the Name of Allah—the Most Compassionate, Most Merciful."
                }
            ]
        },
        ....
}
```

&nbsp;


## 8. GET /prayerTimes

Request:

- headers:
```json
{
  "access_token": "string" 
}
```

_Response (200 - Ok)_
```json
{
    "code": 200,
    "status": "OK",
    "data": [
        {
            "timings": {
                "Fajr": "04:26 (WIB)",
                "Sunrise": "05:28 (WIB)",
                "Dhuhr": "11:42 (WIB)",
                "Asr": "15:08 (WIB)",
                "Sunset": "17:56 (WIB)",
                "Maghrib": "17:56 (WIB)",
                "Isha": "18:58 (WIB)",
                "Imsak": "04:16 (WIB)",
                "Midnight": "23:42 (WIB)"
            },
            "date": {
                "readable": "01 Dec 2021",
                "timestamp": "1638324061",
                "gregorian": {
                    "date": "01-12-2021",
                    "format": "DD-MM-YYYY",
                    "day": "01",
                    "weekday": {
                        "en": "Wednesday"
                    },
                    "month": {
                        "number": 12,
                        "en": "December"
                    },
                    "year": "2021",
                    "designation": {
                        "abbreviated": "AD",
                        "expanded": "Anno Domini"
                    }
                },
                "hijri": {
                    "date": "25-04-1443",
                    "format": "DD-MM-YYYY",
                    "day": "25",
                    "weekday": {
                        "en": "Al Arba'a",
                        "ar": "الاربعاء"
                    },
                    "month": {
                        "number": 4,
                        "en": "Rabīʿ al-thānī",
                        "ar": "رَبيع الثاني"
                    },
                    "year": "1443",
                    "designation": {
                        "abbreviated": "AH",
                        "expanded": "Anno Hegirae"
                    },
                    "holidays": []
                }
            },
            "meta": {
                "latitude": -6.3077057,
                "longitude": 106.7175669,
                "timezone": "Asia/Jakarta",
                "method": {
                    "id": 2,
                    "name": "Islamic Society of North America (ISNA)",
                    "params": {
                        "Fajr": 15,
                        "Isha": 15
                    },
                    "location": {
                        "latitude": 39.70421229999999,
                        "longitude": -86.39943869999999
                    }
                },
                "latitudeAdjustmentMethod": "ANGLE_BASED",
                "midnightMode": "STANDARD",
                "school": "STANDARD",
                "offset": {
                    "Imsak": 0,
                    "Fajr": 0,
                    "Sunrise": 0,
                    "Dhuhr": 0,
                    "Asr": 0,
                    "Maghrib": 0,
                    "Sunset": 0,
                    "Isha": 0,
                    "Midnight": 0
                }
            }
        },
        ....
}
```

&nbsp;
