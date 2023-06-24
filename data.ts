export enum Screens {
	HomeScreen = "home",
	DrawerScreen = "drawer",
	AuthScreen = "auth",
	ProductsScreen = "products",
	ProductDeatailScreen = "product-details",
	CartScreen = "cart",
	CheckoutScreen = "checkout",
	PaymentScreen = "payment",
}

export const Ads = [
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/hi2ilkoczrgwhip9rt3h.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/ksiz5kouhe4lexjg4aqb.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426765/lnupuousyrho1ebcpc2s.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/jd4erqwxepaqo7spb99t.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/pxgwvltd5x7s56om27p6.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/jv2zjdoe3fvnyxf3evp5.png",
];

export const categoryData = [
	{
		image: require(`./assets/Categories/smartphones.png`),
		title: "Mobile",
		category: "smartphone",
		color: "teal.100",
	},
	{
		image: require(`./assets/Categories/laptops.png`),
		title: "Laptops",
		category: "electronic",
		color: "red.100",
	},
	{
		image: require(`./assets/Categories/mens.png`),
		title: "Mens",
		category: "men",
		color: "blue.100",
	},
	{
		image: require(`./assets/Categories/womens.png`),
		title: "Womens",
		category: "women",
		color: "green.100",
	},
	{
		image: require(`./assets/Categories/shoes.png`),
		title: "Shoes",
		category: "shoe",
		color: "yellow.100",
	},
	{
		image: require(`./assets/Categories/shorts.png`),
		title: "Shorts",
		category: "shorts",
		color: "cyan.100",
	},
	{
		image: require(`./assets/Categories/jackets.png`),
		title: "Jackets",
		category: "jacket",
		color: "blue.100",
	},
	{
		image: require(`./assets/Categories/t-shirts.png`),
		title: "T-shirts",
		category: "tshirt",
		color: "green.100",
	},
];

export const sellerProfile = {
	_id: "640d6df76125ac27ae8cdd06",
	image:
		"http://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg",
	name: "Sandeep Maurya",
	email: "saabmaurya@gmail.com",
	password: "$2b$05$s0dbyra2GARg1Z7o0XCUtegTnsrHQAt/jTgEYzPWrfl6gkll7hWJe",
	mobile: "9988885304",
	address: "#104, Jaspal colony, Kakowal , Ludhiana",
	gst: "03AABCU9603R1ZX",
	isPrime: false,
	createdAt: "1678601719143",
	updatedAt: "1679380794278",
	__v: "0",
};

export const trending_products = [
	{
		_id: "646620833be9d61453d5e5ac",
		title: "Men Blue Relaxed Fit Hoodie",
		brand: "H&M",
		description:
			"Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
		thumbnail:
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/a621b7fd-babb-4bb3-940e-b16afb7947d31633609833495HMMenBlueRelaxedFitHoodie1.jpg",
		images: [
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/a621b7fd-babb-4bb3-940e-b16afb7947d31633609833495HMMenBlueRelaxedFitHoodie1.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/b019b315-fb56-481a-9de4-97f588b636551633609832286HMMenBlueRelaxedFitHoodie2.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/daca690f-f36d-4b61-b5f3-c9e9acf7a1f61633609832145HMMenBlueRelaxedFitHoodie3.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/dbe47737-1d80-4cab-9f03-ee8cb32540cb1633609833304HMMenBlueRelaxedFitHoodie4.jpg",
		],
		price: 1499,
		tags: [],
		quantity: 1,
		discount: 85,
		seller: "640d6df76125ac27ae8cdd06",
		rating: 4.5,
		assured: false,
		is_for: "every",
		for_gender: "every",
		for_age: "0-100",
		sizes: ["S", "M", "L", "XL", "XXL"],
		__v: 0,
		createdAt: "2023-05-18T12:56:35.513Z",
		updatedAt: "2023-05-18T12:56:35.513Z",
	},
	{
		_id: "6466275a738b8aef1faf261b",
		title: "Women Pink Daisy Duck Printed Sweatshirt",
		brand: "Mast & Harbour",
		description: "Women Pink Daisy Duck Printed Sweatshirt",
		thumbnail:
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/352e3703-d6de-43d5-804b-370082c81f6d1573553236671-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-1.jpg",
		images: [
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/352e3703-d6de-43d5-804b-370082c81f6d1573553236671-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-1.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/ebe54fda-7589-4a0b-9332-a35e6b5ee3571573553236609-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-2.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/91b2fadd-735f-486c-9bfa-bcb3ba2ea9b71573553236558-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-3.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/a28f02d9-e138-43e2-ab00-03060e27d03d1573553236511-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-4.jpg",
		],
		price: 799,
		tags: ["Womens tops"],
		quantity: 1,
		discount: 90,
		seller: "640d70e66125ac27ae8cdd1d",
		rating: 4.5,
		assured: false,
		is_for: "every",
		for_gender: "women",
		for_age: "0-100",
		sizes: ["S", "M", "L", "XL", "XXL"],
		__v: 0,
		createdAt: "2023-05-18T13:25:46.953Z",
		updatedAt: "2023-05-18T13:25:46.953Z",
	},
	{
		_id: "6466275a738b8aef1faf261f",
		title:
			"Women Mustard Yellow & Green Solid Kurta Set With Embroidery Detail",
		brand: "Clovia ",
		description:
			"Mustard yellow and green solid kurta with trousers,Mustard yellow straight calf length kurta with embroidery detail, has a keyhole neck, three-quarter sleeves, straight hem, side slits,Green Solid trousers, has partially elasticated waistband, slip-on closure",
		thumbnail:
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/c91ccc8e-0a50-4497-a6f1-0b34d3db13ed1582794835211-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-1.jpg",
		images: [
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/c91ccc8e-0a50-4497-a6f1-0b34d3db13ed1582794835211-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-1.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/0e222ff4-142f-42b2-ad6a-83aa14e0944f1582794835163-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-2.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/4189e086-e74b-42d0-ad6a-520a26d0a0461582794835122-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-3.jpg",
			"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/706db7d0-abb7-4f5e-b7ca-b370bf44cd961582794835078-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-4.jpg",
		],
		price: 1399,
		tags: ["Womens tops"],
		quantity: 1,
		discount: 80,
		seller: "640d70e66125ac27ae8cdd1d",
		rating: 4.1,
		assured: false,
		is_for: "every",
		for_gender: "women",
		for_age: "0-100",
		sizes: ["S", "M", "L", "XL", "XXL"],
		__v: 0,
		createdAt: "2023-05-18T13:25:46.954Z",
		updatedAt: "2023-05-18T13:25:46.954Z",
	},
];

export const paymentImages = {
	phone_pay:
		"https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo_full.png",
	paytm:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/640px-Paytm_logo.png",
	google_pay: "https://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png",
};

export const envs = {
	CLOUD_NAME: "due9pi68z",
	UPLOAD_PRESET: "e-commerce-website",
	UPLOAD_URL: "https://api.cloudinary.com/v1_1/due9pi68z/image/upload",
	SECERT: "sandeep-morya-cloudynest-secret-key",
	BASE_URL: "https://sangria-reindeer-wear.cyclic.app",
};

export const KEY = "auth";
