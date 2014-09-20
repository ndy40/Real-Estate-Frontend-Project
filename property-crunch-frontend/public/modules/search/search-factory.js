/* 
 * A Search service used for passing in Search keywords and sending Location search results to the database.
 */

define(["./module"], function (app) {
    'use strict';
    return app.factory('SearchFactory', ['$http', function ($http) {
		
		var urlBase = 'http://app.propertycrunch.co/client/search/search-properties';
		
		this.liveSearch = function (location) {
            return $http.get(urlBase + '/' + location);
        };
		
		this.localSearch = function () {
			var searchResults;
			
			return searchResults = {
			  "count": 12,
			  "page": 1,
			  "size": 25,
			  "data": [
				{
				  "id": 114,
				  "agency_id": 1,
				  "marketer": "Petermans",
				  "phone": "020 3318 7081",
				  "type_id": 2,
				  "rooms": 2,
				  "address": "120 Ruskin Park House, Champion Hill, London SE5",
				  "post_code_id": 20538,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574940",
				  "price": "425000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:37",
				  "updated_at": "2014-09-18 22:46:37",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20538,
					"code": "SE5",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 43,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "10033dc2bf321f8fdd7b02b8c4648d7eb84e995b_645_430.jpg"
					},
					{
					  "id": 44,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "828d115297c0680ddb61b86ad8dc42a364ae263b_645_430.jpg"
					},
					{
					  "id": 45,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "af93462c519f77c6cf39d13061294b2cae91ebfe_645_430.jpg"
					},
					{
					  "id": 46,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "097dbccb85ea4cb88342bc676faa8b0c39a8c114_645_430.jpg"
					},
					{
					  "id": 47,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "242fae1f5b23343b65f470596ce0a653b23a1d0d_645_430.jpg"
					},
					{
					  "id": 48,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "71daf57be320c5bce90eb57a41de07f69101d42e_645_430.jpg"
					},
					{
					  "id": 49,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "747c3e284bb003b0e68ca3404602ed54bf2a0d7c_645_430.jpg"
					},
					{
					  "id": 50,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_8_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_8_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "f62dfaf5ccfe2f3b3345fbc40e6ee07f8b775d39_645_430.jpg"
					},
					{
					  "id": 51,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_9_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_9_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "eed30e22f73d0de6769e9145985b373633e0a52d_645_430.jpg"
					},
					{
					  "id": 52,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_10_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_10_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d868854d22c1f7321224cfe9cb008b49a3f1b789_645_430.jpg"
					},
					{
					  "id": 53,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_11_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_11_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "8922a1d942dbb7fa0d7e4d081640abba03def9c9_645_430.jpg"
					},
					{
					  "id": 54,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_12_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_12_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "fa80bce115f1217e0d79d6872c296a08f7fd1975_645_430.jpg"
					},
					{
					  "id": 55,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_13_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_13_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "2ad4de93ae44363d7069e819e6a7bea755f12173_645_430.jpg"
					},
					{
					  "id": 56,
					  "property_id": 114,
					  "image": "http://property-crunch.local//assets/properties/full/114_14_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/114_14_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "c916c8ebd1b4994ee1a9b67e3d9e6a52c070f2d8_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 115,
				  "agency_id": 1,
				  "marketer": "Petermans",
				  "phone": "020 3318 8179",
				  "type_id": 6,
				  "rooms": 6,
				  "address": "The Rise, Edgware, Greater London HA8",
				  "post_code_id": 14013,
				  "url": "http://www.zoopla.co.uk/for-sale/details/31597981",
				  "price": "995000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:37",
				  "updated_at": "2014-09-18 22:46:37",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 14013,
					"code": "HA8",
					"area": "Edgware",
					"county_id": 167
				  },
				  "type": {
					"id": 6,
					"name": "Detached"
				  },
				  "images": [
					{
					  "id": 57,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3d4e25d4e97826e76a25131082c33b79dd2ca878_645_430.jpg"
					},
					{
					  "id": 58,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "bf7d4e02815b1bd70104613663179ca8fc0c3c54_645_430.jpg"
					},
					{
					  "id": 59,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "e7a96ad4e05b2c85798e0293cffa08c52ad53adb_645_430.jpg"
					},
					{
					  "id": 60,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "56c8f64b7c6b594eda335254ab30a5eef5365302_645_430.jpg"
					},
					{
					  "id": 61,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "82f4cc693232776222819b2ef4194da5059a83f9_645_430.jpg"
					},
					{
					  "id": 62,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "f6a7250cd8dd53d2c12e2de519f8d58a759e06ba_645_430.jpg"
					},
					{
					  "id": 63,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "aee0224353bf8fe0fde9943692ca0fe0ce1fc597_645_430.jpg"
					},
					{
					  "id": 64,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_8_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_8_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "917fe5671baec1dfa6862c48eaf3073a8e65bcc9_645_430.jpg"
					},
					{
					  "id": 65,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_9_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_9_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "a453587af7d939d77ce478d47d104c3a33981c50_645_430.jpg"
					},
					{
					  "id": 66,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_10_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_10_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "7b0ace3f5d368eec6c7e1df90f8f3382e0c3ffc4_645_430.jpg"
					},
					{
					  "id": 67,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_11_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_11_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "02bc0afbd901043203c8f332d2ccefb8341b3107_645_430.jpg"
					},
					{
					  "id": 68,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_12_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_12_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "2e225081b11f73c871be063e7074cf8e9d93fb07_645_430.jpg"
					},
					{
					  "id": 69,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_13_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_13_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3c5438b92346cc679c3f381084387182329e0ecd_645_430.jpg"
					},
					{
					  "id": 70,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_14_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_14_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "0156b2268e6974ac9ee63d51a276f85299b0ce44_645_430.jpg"
					},
					{
					  "id": 71,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_15_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_15_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "7eec4cd0ef80a44c579709283e5929a2bfc5f0a7_645_430.jpg"
					},
					{
					  "id": 72,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_16_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_16_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "e3dd4ff985f87610bb402b69290c818fe1157dff_645_430.jpg"
					},
					{
					  "id": 73,
					  "property_id": 115,
					  "image": "http://property-crunch.local//assets/properties/full/115_17_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/115_17_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "fccb4e459d14d30a4abdc8fef447f80f85e99a89_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 116,
				  "agency_id": 1,
				  "marketer": "Petermans",
				  "phone": "020 3318 8179",
				  "type_id": 6,
				  "rooms": 4,
				  "address": "Park Grove, Edgware, Greater London HA8",
				  "post_code_id": 14013,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574931",
				  "price": "835000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:38",
				  "updated_at": "2014-09-18 22:46:38",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 14013,
					"code": "HA8",
					"area": "Edgware",
					"county_id": 167
				  },
				  "type": {
					"id": 6,
					"name": "Detached"
				  },
				  "images": [
					{
					  "id": 74,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d4a6c1f99668fe4f7c1af9561cc26183be6445f3_645_430.jpg"
					},
					{
					  "id": 75,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "0e29a69b489a20c0a7d78225c37b3d8622b283d8_645_430.jpg"
					},
					{
					  "id": 76,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "58619d3fcb38dd595f40d210287af9de800bdec1_645_430.jpg"
					},
					{
					  "id": 77,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "397188c8f8456efbd2f261903710084462a2b1ac_645_430.jpg"
					},
					{
					  "id": 78,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "671df3083717a50d0b323e1a6a0886d3a1d900f7_645_430.jpg"
					},
					{
					  "id": 79,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "8159cc2a0e913ac0932bb8816439307ff433371b_645_430.jpg"
					},
					{
					  "id": 80,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "b1befce1bbd824313301ddd51c48f142be67e180_645_430.jpg"
					},
					{
					  "id": 81,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_8_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_8_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "382ab9c3a57a4e48f7ac27ad6184e4e881fea9de_645_430.jpg"
					},
					{
					  "id": 82,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_9_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_9_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "05337861bf2f654a576bdffe2f38f33ae4df1e5f_645_430.jpg"
					},
					{
					  "id": 83,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_10_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_10_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "923b5d80ea6eadd2e6ad662daf5b4d8274db7cf4_645_430.jpg"
					},
					{
					  "id": 84,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_11_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_11_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3fc2e6133b94016de6d675af2e65fa0e5fdf2528_645_430.jpg"
					},
					{
					  "id": 85,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_12_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_12_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "889a2f57a7fe2440c127d7d395ad6dc58d2ea5e3_645_430.jpg"
					},
					{
					  "id": 86,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_13_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_13_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3c6182764ae62b5e785b3cc4a5402af1db9b6d7c_645_430.jpg"
					},
					{
					  "id": 87,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_14_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_14_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "a5bf08d7501ff0cd3c940f1713a2a7dad9e2f211_645_430.jpg"
					},
					{
					  "id": 88,
					  "property_id": 116,
					  "image": "http://property-crunch.local//assets/properties/full/116_15_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/116_15_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "498d7dc4520872b49e5f8fbd42a7ddb5e8fb71c6_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 117,
				  "agency_id": 1,
				  "marketer": "Benson & Partners",
				  "phone": "020 3551 4502",
				  "type_id": 2,
				  "rooms": 1,
				  "address": "Holmesdale Road, London SE25",
			
				  "post_code_id": 20539,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574882",
				  "price": "169950.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:39",
				  "updated_at": "2014-09-18 22:46:39",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20539,
					"code": "SE25",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": []
				},
				{
				  "id": 118,
				  "agency_id": 1,
				  "marketer": "Ludlowthompson.com - Wandsworth / Tooting",
				  "phone": "020 3463 0358",
				  "type_id": 2,
				  "rooms": 2,
				  "address": "Heaton Road, Mitcham CR4",
				  "post_code_id": 12527,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574876",
				  "price": "350000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:39",
				  "updated_at": "2014-09-18 22:46:39",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 12527,
					"code": "CR4",
					"area": "Mitcham",
					"county_id": 228
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 89,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "06bc3019acb854b04f31f24af9d2232db380dab0_645_430.jpg"
					},
					{
					  "id": 90,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "2a1bf268121810abed6da4edf1728bd99465acbe_645_430.jpg"
					},
					{
					  "id": 91,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "f7440d019b23ce9698104b462d2ac891d5b8ec78_645_430.jpg"
					},
					{
					  "id": 92,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "56a3b478edc0e17ac93579ba7196a45585d598fd_645_430.jpg"
					},
					{
					  "id": 93,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "58e2f60dd5aa31e0e6122a1ca82a0e49a5ece363_645_430.jpg"
					},
					{
					  "id": 94,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "b65c989636b5d561315a6900424b4a152536d35d_645_430.jpg"
					},
					{
					  "id": 95,
					  "property_id": 118,
					  "image": "http://property-crunch.local//assets/properties/full/118_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/118_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "ce5ce4e8beece729820c42a0ccbcacabf008c9cc_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 119,
				  "agency_id": 1,
				  "marketer": "Ludlowthompson.com - Wimbledon",
				  "phone": "020 3463 0360",
				  "type_id": 8,
				  "rooms": 2,
				  "address": "Tennyson Road, London SW19",
				  "post_code_id": 20532,
				  "url": "http://www.zoopla.co.uk/for-sale/details/32986017",
				  "price": "610000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:40",
				  "updated_at": "2014-09-18 22:46:40",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20532,
					"code": "SW19",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 8,
					"name": "Terraced"
				  },
				  "images": [
					{
					  "id": 96,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "bb6dfe9a8d9a13003464feb43164ad55b8954825_645_430.jpg"
					},
					{
					  "id": 97,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "78221484dc75b3a14f7116569ed4214f07e889e7_645_430.jpg"
					},
					{
					  "id": 98,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "5fe7f40aa4ca8ebf1b074994c9751782dd5979df_645_430.jpg"
					},
					{
					  "id": 99,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3169a3c91c265ba3df43b8ba32e4d401ddc55803_645_430.jpg"
					},
					{
					  "id": 100,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "2c0cb350e7c73f1c944ade0c2f4dad7f8b24ba4b_645_430.jpg"
					},
					{
					  "id": 101,
					  "property_id": 119,
					  "image": "http://property-crunch.local//assets/properties/full/119_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/119_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "8d35ac0855dc3bead384126852e20642feb8444d_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 120,
				  "agency_id": 1,
				  "marketer": "Ludlowthompson.com - Lewisham / Greenwich",
				  "phone": "020 3463 0354",
				  "type_id": 2,
				  "rooms": 1,
				  "address": "Woodland Grove, London SE10",
				  "post_code_id": 20425,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574867",
				  "price": "265000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:40",
				  "updated_at": "2014-09-18 22:46:40",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20425,
					"code": "SE10",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 102,
					  "property_id": 120,
					  "image": "http://property-crunch.local//assets/properties/full/120_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/120_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d94b060c732ded9ad6baa06beab393ee494c2e62_645_430.jpg"
					},
					{
					  "id": 103,
					  "property_id": 120,
					  "image": "http://property-crunch.local//assets/properties/full/120_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/120_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d262d6205808ee3ec24a43c07670c8d343ccc9ac_645_430.jpg"
					},
					{
					  "id": 104,
					  "property_id": 120,
					  "image": "http://property-crunch.local//assets/properties/full/120_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/120_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "e0fa30faac2e754f4c9db216d571f33949925010_645_430.jpg"
					},
					{
					  "id": 105,
					  "property_id": 120,
					  "image": "http://property-crunch.local//assets/properties/full/120_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/120_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "8217cda61e8fa892cc698d0450fa1c4fc7b2d153_645_430.jpg"
					},
					{
					  "id": 106,
					  "property_id": 120,
					  "image": "http://property-crunch.local//assets/properties/full/120_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/120_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "6775e82e55f2f991bd630f81f7f02f7f354468b3_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 121,
				  "agency_id": 1,
				  "marketer": "Field & Sons - Borough High Street",
				  "phone": "020 3589 1734",
				  "type_id": 2,
				  "rooms": 1,
				  "address": "Grange Road, London SE1",
				  "post_code_id": 20441,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574844",
				  "price": "380000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:41",
				  "updated_at": "2014-09-18 22:46:41",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20441,
					"code": "SE1",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 107,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d243f9c001b0bd911030ee58982638e1056d89ba_645_430.jpg"
					},
					{
					  "id": 108,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "277e36ddff74177d169ed2d1070e74e184ba40ca_645_430.jpg"
					},
					{
					  "id": 109,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "8c896f00e7e59803d66cad814904bafde1398aa5_645_430.jpg"
					},
					{
					  "id": 110,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "d19fc7de129d6d0a4c1dbc595692bcce8c87f132_645_430.jpg"
					},
					{
					  "id": 111,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "293669c76d31788abd7c21f4bb499de24781994d_645_430.jpg"
					},
					{
					  "id": 112,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "86f045d92a6193ebe7179b145ccf045fc4e9b206_645_430.jpg"
					},
					{
					  "id": 113,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "92142a2ab03f2cf122a355f6ff8603dbc670ff69_645_430.jpg"
					},
					{
					  "id": 114,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_8_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_8_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "15e5ffb6d85ad0b8b84bb0693fd45e5aa2e64d78_645_430.jpg"
					},
					{
					  "id": 115,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_9_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_9_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "b96f8641d67e309d3676148afa88c9a05dea7c21_645_430.jpg"
					},
					{
					  "id": 116,
					  "property_id": 121,
					  "image": "http://property-crunch.local//assets/properties/full/121_10_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/121_10_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "b4f14844d298caff6de3b7adea6807901815ff1d_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 122,
				  "agency_id": 1,
				  "marketer": "Space Station",
				  "phone": "020 3641 8150",
				  "type_id": 2,
				  "rooms": 1,
				  "address": "Tabernacle Street, London EC2A",
				  "post_code_id": 13341,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574714",
				  "price": "1100000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:42",
				  "updated_at": "2014-09-18 22:46:42",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 13341,
					"code": "EC2A",
					"area": "Shoreditch",
					"county_id": 158
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 117,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "4c4d88ea2ee34aaf12f335f77bf72f68e2aef3ac_645_430.jpg"
					},
					{
					  "id": 118,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "5a43deeb9b9f0b311cf3c2ba429fd18ca7d764e2_645_430.jpg"
					},
					{
					  "id": 119,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "a4ec508e3acdfc5b6f042f6d75e71090548b8b5c_645_430.jpg"
					},
					{
					  "id": 120,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "23642c561dd0ac17bdf707cb7ee6e1892aee0734_645_430.jpg"
					},
					{
					  "id": 121,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "2d79c34480e30ec0617552d0bf7178a57847d2be_645_430.jpg"
					},
					{
					  "id": 122,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "4a5fb05f01769277436e02200cbf20609cd04336_645_430.jpg"
					},
					{
					  "id": 123,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_7_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_7_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "209b1e2aa42c510664785d17a143984f3980a1f0_645_430.jpg"
					},
					{
					  "id": 124,
					  "property_id": 122,
					  "image": "http://property-crunch.local//assets/properties/full/122_8_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/122_8_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "f088e470c529073d3d8de205172e55d89bf7bdee_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 123,
				  "agency_id": 1,
				  "marketer": "Charrison Davis",
				  "phone": "020 8166 1784",
				  "type_id": 2,
				  "rooms": 3,
				  "address": "Uxbridge Road, Hayes, Middx UB4",
				  "post_code_id": 19882,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574691",
				  "price": "150000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:42",
				  "updated_at": "2014-09-18 22:46:42",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 19882,
					"code": "UB4",
					"area": "Hayes",
					"county_id": 177
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": []
				},
				{
				  "id": 124,
				  "agency_id": 1,
				  "marketer": "Right Home Estate Agents",
				  "phone": "020 8166 5310",
				  "type_id": 2,
				  "rooms": 2,
				  "address": "Ealing Road, Wembley, Middlesex HA0",
				  "post_code_id": 20533,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574668",
				  "price": "249950.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:43",
				  "updated_at": "2014-09-18 22:46:43",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20533,
					"code": "HA0",
					"area": "Ealing",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 125,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "289655b3ad46dd120240fab089a21b709c5a602c_645_430.jpg"
					},
					{
					  "id": 126,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "373876f5b51f47f37138c9026532065507e42291_645_430.jpg"
					},
					{
					  "id": 127,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "4028fae1b35a0b044406c35f06f91b1dd86a252c_645_430.jpg"
					},
					{
					  "id": 128,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "c4125480a9cf340f9ec6e8f7ebcb9d1cd9c48a84_645_430.jpg"
					},
					{
					  "id": 129,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "7142dfa3219f3f8a8fc0ac4927a168322481521b_645_430.jpg"
					},
					{
					  "id": 130,
					  "property_id": 124,
					  "image": "http://property-crunch.local//assets/properties/full/124_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/124_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "065ffa680e8dc10cc3e2e8fc345370ed16f5932f_645_430.jpg"
					}
				  ]
				},
				{
				  "id": 125,
				  "agency_id": 1,
				  "marketer": "Rocodells",
				  "phone": "020 3318 7861",
				  "type_id": 2,
				  "rooms": 2,
				  "address": "Cranfield Road, London SE4",
				  "post_code_id": 20534,
				  "url": "http://www.zoopla.co.uk/for-sale/details/34574600",
				  "price": "350000.00",
				  "available": 1,
				  "published": 0,
				  "created_at": "2014-09-18 22:46:43",
				  "updated_at": "2014-09-18 22:46:43",
				  "deleted_at": null,
				  "offer_type": "Sale",
				  "keywords": null,
				  "description": null,
				  "agency": {
					"id": 1,
					"name": "Zooplar",
					"crawler": "zoopla",
					"country_id": 1,
					"enabled": 1,
					"auto_publish": 0
				  },
				  "post_code": {
					"id": 20534,
					"code": "SE4",
					"area": "London",
					"county_id": 1
				  },
				  "type": {
					"id": 2,
					"name": "Flats"
				  },
				  "images": [
					{
					  "id": 131,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_1_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_1_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "9ed6296614cad18e1a7d943a7a4d65815ef5690c_645_430.jpg"
					},
					{
					  "id": 132,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_2_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_2_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "e363be229059a9c288d9fe9a50a0bbd652a64300_645_430.jpg"
					},
					{
					  "id": 133,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_3_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_3_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "83f4445c90bb517da5dcaa0ebfb66b361a0f168a_645_430.jpg"
					},
					{
					  "id": 134,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_4_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_4_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "cf68eac5264f6746eeb145f9fccefc16a3050320_645_430.jpg"
					},
					{
					  "id": 135,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_5_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_5_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "3c277c47369558339dda338a33401eb232573e2c_645_430.jpg"
					},
					{
					  "id": 136,
					  "property_id": 125,
					  "image": "http://property-crunch.local//assets/properties/full/125_6_18-09-2014.jpg",
					  "thumb": "http://property-crunch.local//assets/properties/thumb/125_6_18-09-2014.jpg",
					  "enabled": 1,
					  "basename": "a0efe500c13ef71e93141e4f37ef648a64f234fd_645_430.jpg"
					}
				  ]
				}
			  ]
			};
        };

    }]);
});


      