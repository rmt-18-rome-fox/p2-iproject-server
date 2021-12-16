# Foodify API Documentation

## Endpoints :

List of available endpoints:

- `GET /foodify`

&nbsp;

## 1. GET /foodify

Description:

- Get random recipes from api

Request:

- params:

```json
{
  q: item,
						app_id: APP_ID,
						app_key: APP_KEY
						from: 0,
						to: 9,
}
```

_Response (200 - OK)_

```json
[
	{
		"recipe": {
			"uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_31d69a7dae56534fb5c752d6140e482f",
			"label": "Barbecue Chicken and Coleslaw Potato Skins Recipe",
			"image": "https://www.edamam.com/web-img/cf1/cf10cf9230381e96255b9495eff693a4.jpg",
			"source": "Chowhound",
			"url": "https://www.chowhound.com/recipes/barbecue-chicken-and-coleslaw-potato-skins-29406",
			"shareAs": "http://www.edamam.com/recipe/barbecue-chicken-and-coleslaw-potato-skins-recipe-31d69a7dae56534fb5c752d6140e482f/plan",
			"yield": 16,
			"dietLabels": ["Balanced"],
			"healthLabels": [
				"Gluten-Free",
				"Wheat-Free",
				"Peanut-Free",
				"Tree-Nut-Free",
				"Soy-Free",
				"Fish-Free",
				"Shellfish-Free",
				"Pork-Free",
				"Red-Meat-Free",
				"Crustacean-Free",
				"Celery-Free",
				"Mustard-Free",
				"Sesame-Free",
				"Lupine-Free",
				"Mollusk-Free",
				"Alcohol-Free",
				"Sulfite-Free"
			],
			"cautions": ["Gluten", "Wheat", "Soy", "Sulfites", "FODMAP"],
			"ingredientLines": [
				"8 (3-inch-long) russet potatoes (about 2 1/4 pounds), scrubbed and thoroughly dried",
				"2 cups roasted chicken, shredded into bite-size pieces (see Game Plan note)",
				"2/3 cup barbecue sauce (see Game Plan note)",
				"2 tablespoons unsalted butter (1/4 stick), melted",
				"Kosher salt",
				"Freshly ground black pepper",
				"1 cup coleslaw (see Game Plan note)"
			],
			"ingredients": [
				{
					"text": "8 (3-inch-long) russet potatoes (about 2 1/4 pounds), scrubbed and thoroughly dried",
					"quantity": 2.25,
					"measure": "pound",
					"food": "russet potatoes",
					"weight": 1020.5828325,
					"foodCategory": "vegetables",
					"foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
					"image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
				},
				{
					"text": "2 cups roasted chicken, shredded into bite-size pieces (see Game Plan note)",
					"quantity": 2,
					"measure": "cup",
					"food": "chicken",
					"weight": 280,
					"foodCategory": "Poultry",
					"foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
					"image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
				},
				{
					"text": "2/3 cup barbecue sauce (see Game Plan note)",
					"quantity": 0.6666666666666666,
					"measure": "cup",
					"food": "barbecue sauce",
					"weight": 190.66666666666666,
					"foodCategory": "canned soup",
					"foodId": "food_avt8j2wabi4myjaafpo4makv3lqn",
					"image": "https://www.edamam.com/food-img/7e3/7e303aa2cbb51e4bd70f71bf5cb4a754.jpg"
				},
				{
					"text": "2 tablespoons unsalted butter (1/4 stick), melted",
					"quantity": 0.25,
					"measure": "stick",
					"food": "unsalted butter",
					"weight": 28.25,
					"foodCategory": "Dairy",
					"foodId": "food_awz3iefajbk1fwahq9logahmgltj",
					"image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
				},
				{
					"text": "Kosher salt",
					"quantity": 0,
					"measure": null,
					"food": "Kosher salt",
					"weight": 10.262996995,
					"foodCategory": "Condiments and sauces",
					"foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
					"image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
				},
				{
					"text": "Freshly ground black pepper",
					"quantity": 0,
					"measure": null,
					"food": "black pepper",
					"weight": 5.1314984975,
					"foodCategory": "Condiments and sauces",
					"foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
					"image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
				},
				{
					"text": "1 cup coleslaw (see Game Plan note)",
					"quantity": 1,
					"measure": "cup",
					"food": "coleslaw",
					"weight": 191,
					"foodCategory": "salads",
					"foodId": "food_b8kv7kcao6iq2ybki3u8jbeozoaz",
					"image": "https://www.edamam.com/food-img/4f5/4f5797bc4a894d5efb6699e744fefb21.jpg"
				}
			],
			"calories": 2042.3045561516417,
			"totalWeight": 1719.2570445444576,
			"totalTime": 90,
			"cuisineType": ["american"],
			"mealType": ["lunch/dinner"],
			"dishType": ["sandwiches"],
			"totalNutrients": {
				"ENERC_KCAL": {
					"label": "Energy",
					"quantity": 2042.3045561516417,
					"unit": "kcal"
				},
				"FAT": {
					"label": "Fat",
					"quantity": 85.9905115505185,
					"unit": "g"
				},
				"FASAT": {
					"label": "Saturated",
					"quantity": 29.9897941114227,
					"unit": "g"
				},
				"FATRN": {
					"label": "Trans",
					"quantity": 1.268305,
					"unit": "g"
				},
				"FAMS": {
					"label": "Monounsaturated",
					"quantity": 28.721619683050694,
					"unit": "g"
				},
				"FAPU": {
					"label": "Polyunsaturated",
					"quantity": 20.691251151819635,
					"unit": "g"
				},
				"CHOCDF": {
					"label": "Carbs",
					"quantity": 247.78773166371374,
					"unit": "g"
				},
				"CHOCDF.net": {
					"label": "Carbohydrates (net)",
					"quantity": 0,
					"unit": "g"
				},
				"FIBTG": {
					"label": "Fiber",
					"quantity": 16.5939517367425,
					"unit": "g"
				},
				"SUGAR": {
					"label": "Sugars",
					"quantity": 91.45600176150899,
					"unit": "g"
				},
				"SUGAR.added": {
					"label": "Sugars, added",
					"quantity": 0,
					"unit": "g"
				},
				"PROCNT": {
					"label": "Protein",
					"quantity": 72.61160882218192,
					"unit": "g"
				},
				"CHOLE": {
					"label": "Cholesterol",
					"quantity": 278.3775,
					"unit": "mg"
				},
				"NA": {
					"label": "Sodium",
					"quantity": 3989.665572448066,
					"unit": "mg"
				},
				"CA": {
					"label": "Calcium",
					"quantity": 280.9096157639448,
					"unit": "mg"
				},
				"MG": {
					"label": "Magnesium",
					"quantity": 281.49332817244465,
					"unit": "mg"
				},
				"K": {
					"label": "Potassium",
					"quantity": 4485.077174092614,
					"unit": "mg"
				},
				"FE": {
					"label": "Iron",
					"quantity": 11.259110395103876,
					"unit": "mg"
				},
				"ZN": {
					"label": "Zinc",
					"quantity": 6.569416873021375,
					"unit": "mg"
				},
				"P": {
					"label": "Phosphorus",
					"quantity": 923.8115193656332,
					"unit": "mg"
				},
				"VITA_RAE": {
					"label": "Vitamin A",
					"quantity": 383.8688379276584,
					"unit": "µg"
				},
				"VITC": {
					"label": "Vitamin C",
					"quantity": 77.13991608937499,
					"unit": "mg"
				},
				"THIA": {
					"label": "Thiamin (B1)",
					"quantity": 0.8942196270314667,
					"unit": "mg"
				},
				"RIBF": {
					"label": "Riboflavin (B2)",
					"quantity": 0.74859594833925,
					"unit": "mg"
				},
				"NIA": {
					"label": "Niacin (B3)",
					"quantity": 28.567332265107677,
					"unit": "mg"
				},
				"VITB6A": {
					"label": "Vitamin B6",
					"quantity": 3.993458239721474,
					"unit": "mg"
				},
				"FOLDFE": {
					"label": "Folate equivalent (total)",
					"quantity": 129.49438549040832,
					"unit": "µg"
				},
				"FOLFD": {
					"label": "Folate (food)",
					"quantity": 129.49438549040832,
					"unit": "µg"
				},
				"FOLAC": {
					"label": "Folic acid",
					"quantity": 0,
					"unit": "µg"
				},
				"VITB12": {
					"label": "Vitamin B12",
					"quantity": 0.9351250000000001,
					"unit": "µg"
				},
				"VITD": {
					"label": "Vitamin D",
					"quantity": 0.9837500000000001,
					"unit": "µg"
				},
				"TOCPHA": {
					"label": "Vitamin E",
					"quantity": 4.1820446301448335,
					"unit": "mg"
				},
				"VITK1": {
					"label": "Vitamin K",
					"quantity": 167.2066312791575,
					"unit": "µg"
				},
				"Sugar.alcohol": {
					"label": "Sugar alcohol",
					"quantity": 0,
					"unit": "g"
				},
				"WATER": {
					"label": "Water",
					"quantity": 1036.5131124737572,
					"unit": "g"
				}
			},
			"totalDaily": {
				"ENERC_KCAL": {
					"label": "Energy",
					"quantity": 102.11522780758207,
					"unit": "%"
				},
				"FAT": {
					"label": "Fat",
					"quantity": 132.29309469310542,
					"unit": "%"
				},
				"FASAT": {
					"label": "Saturated",
					"quantity": 149.9489705571135,
					"unit": "%"
				},
				"CHOCDF": {
					"label": "Carbs",
					"quantity": 82.59591055457125,
					"unit": "%"
				},
				"FIBTG": {
					"label": "Fiber",
					"quantity": 66.37580694697,
					"unit": "%"
				},
				"PROCNT": {
					"label": "Protein",
					"quantity": 145.22321764436384,
					"unit": "%"
				},
				"CHOLE": {
					"label": "Cholesterol",
					"quantity": 92.7925,
					"unit": "%"
				},
				"NA": {
					"label": "Sodium",
					"quantity": 166.23606551866942,
					"unit": "%"
				},
				"CA": {
					"label": "Calcium",
					"quantity": 28.09096157639448,
					"unit": "%"
				},
				"MG": {
					"label": "Magnesium",
					"quantity": 67.0222209934392,
					"unit": "%"
				},
				"K": {
					"label": "Potassium",
					"quantity": 95.42717391686412,
					"unit": "%"
				},
				"FE": {
					"label": "Iron",
					"quantity": 62.55061330613265,
					"unit": "%"
				},
				"ZN": {
					"label": "Zinc",
					"quantity": 59.72197157292158,
					"unit": "%"
				},
				"P": {
					"label": "Phosphorus",
					"quantity": 131.97307419509048,
					"unit": "%"
				},
				"VITA_RAE": {
					"label": "Vitamin A",
					"quantity": 42.652093103073156,
					"unit": "%"
				},
				"VITC": {
					"label": "Vitamin C",
					"quantity": 85.71101787708332,
					"unit": "%"
				},
				"THIA": {
					"label": "Thiamin (B1)",
					"quantity": 74.51830225262223,
					"unit": "%"
				},
				"RIBF": {
					"label": "Riboflavin (B2)",
					"quantity": 57.584303718403845,
					"unit": "%"
				},
				"NIA": {
					"label": "Niacin (B3)",
					"quantity": 178.54582665692297,
					"unit": "%"
				},
				"VITB6A": {
					"label": "Vitamin B6",
					"quantity": 307.1890953631903,
					"unit": "%"
				},
				"FOLDFE": {
					"label": "Folate equivalent (total)",
					"quantity": 32.37359637260208,
					"unit": "%"
				},
				"VITB12": {
					"label": "Vitamin B12",
					"quantity": 38.96354166666667,
					"unit": "%"
				},
				"VITD": {
					"label": "Vitamin D",
					"quantity": 6.5583333333333345,
					"unit": "%"
				},
				"TOCPHA": {
					"label": "Vitamin E",
					"quantity": 27.88029753429889,
					"unit": "%"
				},
				"VITK1": {
					"label": "Vitamin K",
					"quantity": 139.33885939929795,
					"unit": "%"
				}
			},
			"digest": [
				{
					"label": "Fat",
					"tag": "FAT",
					"schemaOrgTag": "fatContent",
					"total": 85.9905115505185,
					"hasRDI": true,
					"daily": 132.29309469310542,
					"unit": "g",
					"sub": [
						{
							"label": "Saturated",
							"tag": "FASAT",
							"schemaOrgTag": "saturatedFatContent",
							"total": 29.9897941114227,
							"hasRDI": true,
							"daily": 149.9489705571135,
							"unit": "g"
						},
						{
							"label": "Trans",
							"tag": "FATRN",
							"schemaOrgTag": "transFatContent",
							"total": 1.268305,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						},
						{
							"label": "Monounsaturated",
							"tag": "FAMS",
							"schemaOrgTag": null,
							"total": 28.721619683050694,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						},
						{
							"label": "Polyunsaturated",
							"tag": "FAPU",
							"schemaOrgTag": null,
							"total": 20.691251151819635,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						}
					]
				},
				{
					"label": "Carbs",
					"tag": "CHOCDF",
					"schemaOrgTag": "carbohydrateContent",
					"total": 247.78773166371374,
					"hasRDI": true,
					"daily": 82.59591055457125,
					"unit": "g",
					"sub": [
						{
							"label": "Carbs (net)",
							"tag": "CHOCDF.net",
							"schemaOrgTag": null,
							"total": 0,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						},
						{
							"label": "Fiber",
							"tag": "FIBTG",
							"schemaOrgTag": "fiberContent",
							"total": 16.5939517367425,
							"hasRDI": true,
							"daily": 66.37580694697,
							"unit": "g"
						},
						{
							"label": "Sugars",
							"tag": "SUGAR",
							"schemaOrgTag": "sugarContent",
							"total": 91.45600176150899,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						},
						{
							"label": "Sugars, added",
							"tag": "SUGAR.added",
							"schemaOrgTag": null,
							"total": 0,
							"hasRDI": false,
							"daily": 0,
							"unit": "g"
						}
					]
				},
				{
					"label": "Protein",
					"tag": "PROCNT",
					"schemaOrgTag": "proteinContent",
					"total": 72.61160882218192,
					"hasRDI": true,
					"daily": 145.22321764436384,
					"unit": "g"
				},
				{
					"label": "Cholesterol",
					"tag": "CHOLE",
					"schemaOrgTag": "cholesterolContent",
					"total": 278.3775,
					"hasRDI": true,
					"daily": 92.7925,
					"unit": "mg"
				},
				{
					"label": "Sodium",
					"tag": "NA",
					"schemaOrgTag": "sodiumContent",
					"total": 3989.665572448066,
					"hasRDI": true,
					"daily": 166.23606551866942,
					"unit": "mg"
				},
				{
					"label": "Calcium",
					"tag": "CA",
					"schemaOrgTag": null,
					"total": 280.9096157639448,
					"hasRDI": true,
					"daily": 28.09096157639448,
					"unit": "mg"
				},
				{
					"label": "Magnesium",
					"tag": "MG",
					"schemaOrgTag": null,
					"total": 281.49332817244465,
					"hasRDI": true,
					"daily": 67.0222209934392,
					"unit": "mg"
				},
				{
					"label": "Potassium",
					"tag": "K",
					"schemaOrgTag": null,
					"total": 4485.077174092614,
					"hasRDI": true,
					"daily": 95.42717391686412,
					"unit": "mg"
				},
				{
					"label": "Iron",
					"tag": "FE",
					"schemaOrgTag": null,
					"total": 11.259110395103876,
					"hasRDI": true,
					"daily": 62.55061330613265,
					"unit": "mg"
				},
				{
					"label": "Zinc",
					"tag": "ZN",
					"schemaOrgTag": null,
					"total": 6.569416873021375,
					"hasRDI": true,
					"daily": 59.72197157292158,
					"unit": "mg"
				},
				{
					"label": "Phosphorus",
					"tag": "P",
					"schemaOrgTag": null,
					"total": 923.8115193656332,
					"hasRDI": true,
					"daily": 131.97307419509048,
					"unit": "mg"
				},
				{
					"label": "Vitamin A",
					"tag": "VITA_RAE",
					"schemaOrgTag": null,
					"total": 383.8688379276584,
					"hasRDI": true,
					"daily": 42.652093103073156,
					"unit": "µg"
				},
				{
					"label": "Vitamin C",
					"tag": "VITC",
					"schemaOrgTag": null,
					"total": 77.13991608937499,
					"hasRDI": true,
					"daily": 85.71101787708332,
					"unit": "mg"
				},
				{
					"label": "Thiamin (B1)",
					"tag": "THIA",
					"schemaOrgTag": null,
					"total": 0.8942196270314667,
					"hasRDI": true,
					"daily": 74.51830225262223,
					"unit": "mg"
				},
				{
					"label": "Riboflavin (B2)",
					"tag": "RIBF",
					"schemaOrgTag": null,
					"total": 0.74859594833925,
					"hasRDI": true,
					"daily": 57.584303718403845,
					"unit": "mg"
				},
				{
					"label": "Niacin (B3)",
					"tag": "NIA",
					"schemaOrgTag": null,
					"total": 28.567332265107677,
					"hasRDI": true,
					"daily": 178.54582665692297,
					"unit": "mg"
				},
				{
					"label": "Vitamin B6",
					"tag": "VITB6A",
					"schemaOrgTag": null,
					"total": 3.993458239721474,
					"hasRDI": true,
					"daily": 307.1890953631903,
					"unit": "mg"
				},
				{
					"label": "Folate equivalent (total)",
					"tag": "FOLDFE",
					"schemaOrgTag": null,
					"total": 129.49438549040832,
					"hasRDI": true,
					"daily": 32.37359637260208,
					"unit": "µg"
				},
				{
					"label": "Folate (food)",
					"tag": "FOLFD",
					"schemaOrgTag": null,
					"total": 129.49438549040832,
					"hasRDI": false,
					"daily": 0,
					"unit": "µg"
				},
				{
					"label": "Folic acid",
					"tag": "FOLAC",
					"schemaOrgTag": null,
					"total": 0,
					"hasRDI": false,
					"daily": 0,
					"unit": "µg"
				},
				{
					"label": "Vitamin B12",
					"tag": "VITB12",
					"schemaOrgTag": null,
					"total": 0.9351250000000001,
					"hasRDI": true,
					"daily": 38.96354166666667,
					"unit": "µg"
				},
				{
					"label": "Vitamin D",
					"tag": "VITD",
					"schemaOrgTag": null,
					"total": 0.9837500000000001,
					"hasRDI": true,
					"daily": 6.5583333333333345,
					"unit": "µg"
				},
				{
					"label": "Vitamin E",
					"tag": "TOCPHA",
					"schemaOrgTag": null,
					"total": 4.1820446301448335,
					"hasRDI": true,
					"daily": 27.88029753429889,
					"unit": "mg"
				},
				{
					"label": "Vitamin K",
					"tag": "VITK1",
					"schemaOrgTag": null,
					"total": 167.2066312791575,
					"hasRDI": true,
					"daily": 139.33885939929795,
					"unit": "µg"
				},
				{
					"label": "Sugar alcohols",
					"tag": "Sugar.alcohol",
					"schemaOrgTag": null,
					"total": 0,
					"hasRDI": false,
					"daily": 0,
					"unit": "g"
				},
				{
					"label": "Water",
					"tag": "WATER",
					"schemaOrgTag": null,
					"total": 1036.5131124737572,
					"hasRDI": false,
					"daily": 0,
					"unit": "g"
				}
			]
		}
	},
  ...
]
```
