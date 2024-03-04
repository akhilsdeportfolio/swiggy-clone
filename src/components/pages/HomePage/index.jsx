import { Divider } from "antd";
import FoodItem from "../../atoms/FoodItem";
import HeadingList from "../../molecules/HeadingList";
import RestautantCard from "../../organisms/RestaurantCard";

export default function HomePage() {
  const foodItems = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Bonda.png",
  ];
  const topRestaurants = [
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/egm3aym4fa73hst2tv9b",
      name: "Asha Sweet Center - Since 1951",
      offerText: "",
      showOffer: false,
      rating: "4.5",
      deliveryTime: "50-60 mins",
      category:
        "Fast Food, Snacks, Beverages, Chaat, North Indian, Street Food, Sweets, Desserts, Punjabi, Bakery",
      address: "Ashok Nagar",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixgxvfu6ggvw1w1awgr1",
      name: "Samosa party",
      offerText: "60% OFF UPTO ₹120",
      showOffer: true,
      rating: "4.5",
      deliveryTime: "50-60 mins",
      category:
        "Fast Food, Snacks, Beverages, Chaat, North Indian, Street Food, Sweets, Desserts, Punjabi, Bakery",
      address: "Ashok Nagar",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f62564e14944753903849c4ef673af4d",
      name: "Tandoori Delights",
      offerText: "Free Delivery",
      showOffer: true,
      rating: "4.2",
      deliveryTime: "40-50 mins",
      category: "Indian, Tandoori, Kebabs, Biryani",
      address: "Gandhi Nagar",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aadw5xxrjtv6xxhtscai",
      name: "Pizza Palace",
      offerText: "",
      showOffer: false,
      rating: "4.8",
      deliveryTime: "30-40 mins",
      category: "Italian, Pizza, Fast Food",
      address: "Main Street",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zmp84ckarixkz73fzuws",
      name: "Burger Barn",
      offerText: "Combo Offer: Buy 1 Get 1 Free",
      showOffer: true,
      rating: "4.4",
      deliveryTime: "35-45 mins",
      category: "Burgers, Fast Food, American",
      address: "Oak Avenue",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2418209798927d733a50f5d2ebcc2aee",
      name: "Chinese Dragon",
      offerText: "",
      showOffer: false,
      rating: "4.0",
      deliveryTime: "45-55 mins",
      category: "Chinese, Asian, Noodles, Rice",
      address: "Chinatown",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m6jahioyu7zrodei5pcq",
      name: "Mediterranean Feast",
      offerText: "Special Discount: 20% Off on Orders Above ₹500",
      showOffer: true,
      rating: "4.6",
      deliveryTime: "55-65 mins",
      category: "Mediterranean, Greek, Salads, Wraps",
      address: "Seaside Drive",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/96aaf72372ad1b0297b7cc304ced7e33",
      name: "Sushi Spot",
      offerText: "Happy Hour: 30% Off on Sushi Rolls",
      showOffer: true,
      rating: "4.7",
      deliveryTime: "40-50 mins",
      category: "Japanese, Sushi, Seafood",
      address: "Sakura Street",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
      name: "Taco Time",
      offerText: "Limited Time Offer: 2 Tacos for ₹100",
      showOffer: true,
      rating: "4.3",
      deliveryTime: "30-40 mins",
      category: "Mexican, Tacos, Burritos",
      address: "Fiesta Plaza",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94654fdf308764cd0faf83dba35bcdc3",
      name: "Pasta Paradise",
      offerText: "Family Pack: 20% Off on Orders Above ₹800",
      showOffer: true,
      rating: "4.5",
      deliveryTime: "35-45 mins",
      category: "Italian, Pasta, Salads",
      address: "Piazza Boulevard",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pdod4o1em9potwsd22rs",
      name: "Falafel House",
      offerText: "",
      showOffer: false,
      rating: "4.4",
      deliveryTime: "45-55 mins",
      category: "Middle Eastern, Falafel, Shawarma",
      address: "Sunset Lane",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t8pkvvuhdgyoitxgdqlz",
      name: "Vegan Delights",
      offerText: "Healthy Choices: 10% Off on Vegan Menu",
      showOffer: true,
      rating: "4.6",
      deliveryTime: "40-50 mins",
      category: "Vegan, Vegetarian, Organic",
      address: "Green Avenue",
    },
  ];

  return (
    <div className="mx-64 p-4">
      <HeadingList heading="What's on your mind?">
        <div className="flex flex-row items-center justify-start">
          {foodItems.map((item) => (
            <FoodItem key={item} url={item} />
          ))}
        </div>
      </HeadingList>
      <Divider />
      <HeadingList heading="Top restaurant chains in Bangalore">
        <div className="p-4 flex flex-row !justify-start gap-6 flex-wrap">
          {topRestaurants.map((data) => (
            <RestautantCard key={data.name} {...data} />
          ))}
        </div>
      </HeadingList>
    </div>
  );
}
